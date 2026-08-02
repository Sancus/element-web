/*
 * Minimal Storybook config used only for room list performance measurement.
 *
 * It differs from ../.storybook/main.ts in two ways:
 *  - it builds only the perf story, so the build doesn't need the typedoc output that the
 *    documentation stories import via `?raw`;
 *  - it loads no addons, so docs/a11y/vis instrumentation can't skew the measurements.
 *
 * The preview (theme, i18n, TooltipProvider, DragDropProvider) is shared with the real config
 * so the component tree under test matches what ships.
 */

import type { StorybookConfig } from "@storybook/react-vite";
import fs from "node:fs";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { mergeConfig, normalizePath, type Plugin } from "vite";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcRoot = normalizePath(join(__dirname, "..", "src"));
const sharedComponentsLayer = "shared-components";

const languageFiles = fs.readdirSync(join(__dirname, "..", "src", "i18n", "strings")).map((f) => f.slice(0, -5));
const languages: Record<string, string> = {};
for (const lang of languageFiles) {
    const normalizedLanguage = lang.toLowerCase().replace("_", "-");
    const languageParts = normalizedLanguage.split("-");
    if (languageParts.length === 2 && languageParts[0] === languageParts[1]) {
        languages[languageParts[0]] = `${lang}.json`;
    } else {
        languages[normalizedLanguage] = `${lang}.json`;
    }
}

function layerSharedComponentCssModules(): Plugin {
    return {
        name: "element-web-shared-components-storybook-css-layer",
        enforce: "pre",
        transform(code, id) {
            const cssPath = normalizePath(id.split("?")[0]);
            if (!cssPath.startsWith(srcRoot) || !cssPath.endsWith(".module.css")) {
                return;
            }
            return { code: `@layer ${sharedComponentsLayer} {\n${code}\n}\n`, map: null };
        },
    };
}

const config: StorybookConfig = {
    stories: [
        "../src/room-list/RoomListView/RoomListPerf.stories.tsx",
        // Included so the hover-menu interaction can be exercised with real browser input, which
        // synthetic pointer emulation in jsdom/user-event does not reproduce faithfully.
        "../src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.stories.tsx",
    ],
    addons: [],
    framework: "@storybook/react-vite",
    core: { disableTelemetry: true },
    async viteFinal(config) {
        // The package's own vite.config.ts is inherited here, and it carries the unplugin-dts
        // declaration-emitting plugin used for library builds. That plugin type-checks the whole
        // package and needs api-extractor config, neither of which applies to a Storybook build.
        config.plugins = (config.plugins ?? []).filter(
            (plugin) => !(plugin && "name" in plugin && String(plugin.name).includes("dts")),
        );

        return mergeConfig(config, {
            plugins: [
                layerSharedComponentCssModules(),
                nodePolyfills({ include: ["util"], globals: { global: false } }),
            ],
            // Timing runs use the minified build; attribution runs need function names to survive
            // so that captured stack traces point at real library code.
            ...(process.env.PERF_NO_MINIFY ? { build: { minify: false, sourcemap: true } } : {}),
        });
    },
    env: (config) => ({
        ...config,
        STORYBOOK_LANGUAGES: JSON.stringify(Object.keys(languages)),
    }),
};
export default config;
