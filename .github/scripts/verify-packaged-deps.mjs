// Checks that a packaged app.asar can satisfy every import the main process makes.
//
// electron-builder only warns ("cannot find path for dependency") when it cannot locate a
// package, so a build that drops part of a dependency subtree still goes green and only fails
// when a user launches it. That is how roomlist-fix-v7 shipped without import-in-the-middle
// and died at startup with ERR_MODULE_NOT_FOUND.
//
// Usage: node verify-packaged-deps.mjs <path to app.asar> [required package ...]

import { createRequire } from "node:module";
import path from "node:path";

const [asarPath, ...required] = process.argv.slice(2);
if (!asarPath) throw new Error("usage: verify-packaged-deps.mjs <app.asar> [required package ...]");

// Resolved from the working directory rather than from this file: the script lives in .github,
// which has no node_modules of its own, and is run from apps/desktop.
const asar = createRequire(path.join(process.cwd(), "index.js"))("@electron/asar");

// Manifests are read out of the archive directly. Extracting to disk would drag in the
// asar.unpacked sidecar, and the native binaries in it are not what is being checked here.
const entries = new Set(asar.listPackage(asarPath).map((entry) => entry.replaceAll("\\", "/").replace(/^\//, "")));
const manifest = (dir) =>
    JSON.parse(asar.extractFile(asarPath, dir ? `${dir}/package.json` : "package.json").toString("utf8"));

// Node's own lookup: walk up through node_modules directories. Deliberately not
// require.resolve, whose "exports" handling hides package.json files that are really there.
function resolveFrom(fromDir, name) {
    let dir = fromDir;
    for (;;) {
        const candidate = dir ? `${dir}/node_modules/${name}` : `node_modules/${name}`;
        if (entries.has(`${candidate}/package.json`)) return candidate;
        if (!dir) return null;
        dir = dir.includes("/") ? dir.slice(0, dir.lastIndexOf("/")) : "";
    }
}

const visited = new Set();
const reachable = new Set();
const missing = [];

function walk(dir, trail) {
    const { dependencies = {}, optionalDependencies = {} } = manifest(dir);
    for (const dep of Object.keys(dependencies)) {
        const resolved = resolveFrom(dir, dep);
        if (!resolved) {
            // An optional dependency may legitimately be absent: its importer guards it.
            if (!(dep in optionalDependencies)) missing.push(`${dep} (needed by ${trail})`);
            continue;
        }
        reachable.add(dep);
        if (visited.has(resolved)) continue;
        visited.add(resolved);
        walk(resolved, `${trail} > ${dep}`);
    }
}

walk("", "element-desktop");

// hak injects its modules into the package rather than declaring them, so each is a root of
// its own: check it arrived, then hold it to the same standard as everything else.
const absent = [];
for (const name of required) {
    const resolved = resolveFrom("", name);
    if (!resolved) {
        absent.push(name);
        continue;
    }
    reachable.add(name);
    if (!visited.has(resolved)) {
        visited.add(resolved);
        walk(resolved, name);
    }
}

console.log(`${reachable.size} production packages reachable in ${path.basename(asarPath)}`);

const problems = [
    ...missing.map((m) => `unresolvable dependency: ${m}`),
    ...absent.map((name) => `required package not packaged: ${name}`),
];
if (problems.length) {
    for (const problem of problems) console.error(`  ${problem}`);
    throw new Error(`${problems.length} problem(s) in the packaged dependency tree`);
}
console.log(`dependency tree complete${required.length ? `, including ${required.join(", ")}` : ""}`);
