//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region ../../node_modules/.pnpm/vite-plugin-node-polyfills@0.28.0_rollup@4.60.1_vite@8.1.5/node_modules/vite-plugin-node-polyfills/shims/process/dist/index.js
function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function defaultSetTimout() {
	throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
	throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
	if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
	if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		cachedSetTimeout = setTimeout;
		return setTimeout(fun, 0);
	}
	try {
		return cachedSetTimeout(fun, 0);
	} catch (e) {
		try {
			return cachedSetTimeout.call(null, fun, 0);
		} catch (e) {
			return cachedSetTimeout.call(this, fun, 0);
		}
	}
}
function runClearTimeout(marker) {
	if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
	if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		cachedClearTimeout = clearTimeout;
		return clearTimeout(marker);
	}
	try {
		return cachedClearTimeout(marker);
	} catch (e) {
		try {
			return cachedClearTimeout.call(null, marker);
		} catch (e) {
			return cachedClearTimeout.call(this, marker);
		}
	}
}
function cleanUpNextTick() {
	if (!draining || !currentQueue) return;
	draining = false;
	if (currentQueue.length) queue = currentQueue.concat(queue);
	else queueIndex = -1;
	if (queue.length) drainQueue();
}
function drainQueue() {
	if (draining) return;
	var timeout = runTimeout(cleanUpNextTick);
	draining = true;
	var len = queue.length;
	while (len) {
		currentQueue = queue;
		queue = [];
		while (++queueIndex < len) if (currentQueue) currentQueue[queueIndex].run();
		queueIndex = -1;
		len = queue.length;
	}
	currentQueue = null;
	draining = false;
	runClearTimeout(timeout);
}
function Item(fun, array) {
	this.fun = fun;
	this.array = array;
}
function noop() {}
var browser, process, cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, browserExports, process$1;
var init_dist = __esmMin((() => {
	browser = { exports: {} };
	process = browser.exports = {};
	(function() {
		try {
			if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
			else cachedSetTimeout = defaultSetTimout;
		} catch (e) {
			cachedSetTimeout = defaultSetTimout;
		}
		try {
			if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
			else cachedClearTimeout = defaultClearTimeout;
		} catch (e) {
			cachedClearTimeout = defaultClearTimeout;
		}
	})();
	queue = [];
	draining = false;
	queueIndex = -1;
	process.nextTick = function(fun) {
		var args = new Array(arguments.length - 1);
		if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
		queue.push(new Item(fun, args));
		if (queue.length === 1 && !draining) runTimeout(drainQueue);
	};
	Item.prototype.run = function() {
		this.fun.apply(null, this.array);
	};
	process.title = "browser";
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = "";
	process.versions = {};
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	process.listeners = function(name) {
		return [];
	};
	process.binding = function(name) {
		throw new Error("process.binding is not supported");
	};
	process.cwd = function() {
		return "/";
	};
	process.chdir = function(dir) {
		throw new Error("process.chdir is not supported");
	};
	process.umask = function() {
		return 0;
	};
	browserExports = browser.exports;
	process$1 = /*@__PURE__*/ getDefaultExportFromCjs(browserExports);
}));
//#endregion
export { __exportAll as a, __toESM as c, __esmMin as i, process$1 as n, __require as o, __commonJSMin as r, __toCommonJS as s, init_dist as t };

//# sourceMappingURL=dist-DHqTAwVy.js.map