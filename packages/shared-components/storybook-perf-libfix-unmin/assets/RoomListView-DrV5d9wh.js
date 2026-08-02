import { c as __toESM, i as __esmMin } from "./dist-DHqTAwVy.js";
import { n as require_react, t as require_react_dom } from "./react-dom-BWFRaAn0.js";
import { At as init_chat, Bt as init_arrow_down, Ct as delete_default, Gn as Menu, Qt as useViewModel, Tr as require_classnames, Un as chevron_right_default, Vn as MenuItem, Vt as _t$1, Wn as init_chevron_right, Wt as init_i18n, X as overflow_horizontal_default, Xt as init_viewmodel, _t as edit_default, br as Button, f as init_dist$5, fr as IconButton, hn as Toast, i as RoomListItemContent, in as Flex, kt as chat_default, m as init_icons, mn as init_chevron_down, n as RoomListItemView, o as RoomListItemView_module_default, on as init_dist$4, p as useMergeRefs, pn as chevron_down_default, rn as init_Flex, s as init_RoomListItemView_module, sn as ChatFilter, t as init_RoomListItemView, u as NotificationDecoration, wr as require_jsx_runtime, zt as arrow_down_default } from "./RoomListItemView-DO4BiWnM.js";
//#region src/core/i18n/i18nContext.ts
/**
* A hook to get the i18n API from the context. Will throw if no i18n context is found.
* @throws If no i18n context is found
* @returns The i18n API from the context
*/
function useI18n() {
	const i18n = (0, import_react$23.useContext)(I18nContext);
	if (!i18n) throw new Error("useI18n must be used within an I18nContext.Provider");
	return i18n;
}
var import_react$23, I18nContext;
var init_i18nContext = __esmMin((() => {
	import_react$23 = /* @__PURE__ */ __toESM(require_react(), 1);
	I18nContext = (0, import_react$23.createContext)(null);
	I18nContext.displayName = "I18nContext";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var freeGlobal;
var init__freeGlobal = __esmMin((() => {
	freeGlobal = typeof global == "object" && global && global.Object === Object && global;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_root.js
var freeSelf, root;
var init__root = __esmMin((() => {
	init__freeGlobal();
	freeSelf = typeof self == "object" && self && self.Object === Object && self;
	root = freeGlobal || freeSelf || Function("return this")();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Symbol.js
var Symbol$1;
var init__Symbol = __esmMin((() => {
	init__root();
	Symbol$1 = root.Symbol;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getRawTag.js
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$13.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
	else delete value[symToStringTag$1];
	return result;
}
var objectProto$4, hasOwnProperty$13, nativeObjectToString$1, symToStringTag$1;
var init__getRawTag = __esmMin((() => {
	init__Symbol();
	objectProto$4 = Object.prototype;
	hasOwnProperty$13 = objectProto$4.hasOwnProperty;
	nativeObjectToString$1 = objectProto$4.toString;
	symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
var nativeObjectToString;
var init__objectToString = __esmMin((() => {
	nativeObjectToString = Object.prototype.toString;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var nullTag, undefinedTag, symToStringTag;
var init__baseGetTag = __esmMin((() => {
	init__Symbol();
	init__getRawTag();
	init__objectToString();
	nullTag = "[object Null]";
	undefinedTag = "[object Undefined]";
	symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
var init_isObjectLike = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
var symbolTag$3;
var init_isSymbol = __esmMin((() => {
	init__baseGetTag();
	init_isObjectLike();
	symbolTag$3 = "[object Symbol]";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
/**
* A specialized version of `_.map` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
var init__arrayMap = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var isArray;
var init_isArray = __esmMin((() => {
	isArray = Array.isArray;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseToString.js
/**
* The base implementation of `_.toString` which doesn't convert nullish
* values to empty strings.
*
* @private
* @param {*} value The value to process.
* @returns {string} Returns the string.
*/
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray(value)) return arrayMap(value, baseToString) + "";
	if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var INFINITY$1, symbolProto$2, symbolToString;
var init__baseToString = __esmMin((() => {
	init__Symbol();
	init__arrayMap();
	init_isArray();
	init_isSymbol();
	INFINITY$1 = Infinity;
	symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0;
	symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
/**
* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
* character of `string`.
*
* @private
* @param {string} string The string to inspect.
* @returns {number} Returns the index of the last non-whitespace character.
*/
function trimmedEndIndex(string) {
	var index = string.length;
	while (index-- && reWhitespace.test(string.charAt(index)));
	return index;
}
var reWhitespace;
var init__trimmedEndIndex = __esmMin((() => {
	reWhitespace = /\s/;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
/**
* The base implementation of `_.trim`.
*
* @private
* @param {string} string The string to trim.
* @returns {string} Returns the trimmed string.
*/
function baseTrim(string) {
	return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var reTrimStart;
var init__baseTrim = __esmMin((() => {
	init__trimmedEndIndex();
	reTrimStart = /^\s+/;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
var init_isObject = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
/**
* Converts `value` to a number.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to process.
* @returns {number} Returns the number.
* @example
*
* _.toNumber(3.2);
* // => 3.2
*
* _.toNumber(Number.MIN_VALUE);
* // => 5e-324
*
* _.toNumber(Infinity);
* // => Infinity
*
* _.toNumber('3.2');
* // => 3.2
*/
function toNumber(value) {
	if (typeof value == "number") return value;
	if (isSymbol(value)) return NAN;
	if (isObject(value)) {
		var other = typeof value.valueOf == "function" ? value.valueOf() : value;
		value = isObject(other) ? other + "" : other;
	}
	if (typeof value != "string") return value === 0 ? value : +value;
	value = baseTrim(value);
	var isBinary = reIsBinary.test(value);
	return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var NAN, reIsBadHex, reIsBinary, reIsOctal, freeParseInt;
var init_toNumber = __esmMin((() => {
	init__baseTrim();
	init_isObject();
	init_isSymbol();
	NAN = NaN;
	reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	reIsBinary = /^0b[01]+$/i;
	reIsOctal = /^0o[0-7]+$/i;
	freeParseInt = parseInt;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
	return value;
}
var init_identity = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction(value) {
	if (!isObject(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var asyncTag, funcTag$2, genTag$1, proxyTag;
var init_isFunction = __esmMin((() => {
	init__baseGetTag();
	init_isObject();
	asyncTag = "[object AsyncFunction]";
	funcTag$2 = "[object Function]";
	genTag$1 = "[object GeneratorFunction]";
	proxyTag = "[object Proxy]";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var coreJsData;
var init__coreJsData = __esmMin((() => {
	init__root();
	coreJsData = root["__core-js_shared__"];
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isMasked.js
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
var maskSrcKey;
var init__isMasked = __esmMin((() => {
	init__coreJsData();
	maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$2.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
var funcToString$2;
var init__toSource = __esmMin((() => {
	funcToString$2 = Function.prototype.toString;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject(value) || isMasked(value)) return false;
	return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
var reRegExpChar, reIsHostCtor, funcProto$1, objectProto$3, funcToString$1, hasOwnProperty$12, reIsNative;
var init__baseIsNative = __esmMin((() => {
	init_isFunction();
	init__isMasked();
	init_isObject();
	init__toSource();
	reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	reIsHostCtor = /^\[object .+?Constructor\]$/;
	funcProto$1 = Function.prototype;
	objectProto$3 = Object.prototype;
	funcToString$1 = funcProto$1.toString;
	hasOwnProperty$12 = objectProto$3.hasOwnProperty;
	reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$12).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
var init__getValue = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue(object, key);
	return baseIsNative(value) ? value : void 0;
}
var init__getNative = __esmMin((() => {
	init__baseIsNative();
	init__getValue();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var WeakMap$1;
var init__WeakMap = __esmMin((() => {
	init__getNative();
	init__root();
	WeakMap$1 = getNative(root, "WeakMap");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate;
var init__baseCreate = __esmMin((() => {
	init_isObject();
	objectCreate = Object.create;
	baseCreate = function() {
		function object() {}
		return function(proto) {
			if (!isObject(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
var init__apply = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
/**
* Copies the values of `source` to `array`.
*
* @private
* @param {Array} source The array to copy values from.
* @param {Array} [array=[]] The array to copy values to.
* @returns {Array} Returns `array`.
*/
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
var init__copyArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
function shortOut(func) {
	var count = 0, lastCalled = 0;
	return function() {
		var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
		lastCalled = stamp;
		if (remaining > 0) {
			if (++count >= HOT_COUNT) return arguments[0];
		} else count = 0;
		return func.apply(void 0, arguments);
	};
}
var HOT_COUNT, HOT_SPAN, nativeNow;
var init__shortOut = __esmMin((() => {
	HOT_COUNT = 800;
	HOT_SPAN = 16;
	nativeNow = Date.now;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
var init_constant = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var defineProperty;
var init__defineProperty = __esmMin((() => {
	init__getNative();
	defineProperty = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSetToString.js
var baseSetToString;
var init__baseSetToString = __esmMin((() => {
	init_constant();
	init__defineProperty();
	init_identity();
	baseSetToString = !defineProperty ? identity : function(func, string) {
		return defineProperty(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToString.js
var setToString;
var init__setToString = __esmMin((() => {
	init__baseSetToString();
	init__shortOut();
	setToString = shortOut(baseSetToString);
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
/**
* A specialized version of `_.forEach` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns `array`.
*/
function arrayEach(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (iteratee(array[index], index, array) === false) break;
	return array;
}
var init__arrayEach = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER$1 : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var MAX_SAFE_INTEGER$1, reIsUint;
var init__isIndex = __esmMin((() => {
	MAX_SAFE_INTEGER$1 = 9007199254740991;
	reIsUint = /^(?:0|[1-9]\d*)$/;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && defineProperty) defineProperty(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
var init__baseAssignValue = __esmMin((() => {
	init__defineProperty();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
var init_eq = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
/**
* Assigns `value` to `key` of `object` if the existing value is not equivalent
* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* for equality comparisons.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$11.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
var hasOwnProperty$11;
var init__assignValue = __esmMin((() => {
	init__baseAssignValue();
	init_eq();
	hasOwnProperty$11 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
/**
* Copies properties of `source` to `object`.
*
* @private
* @param {Object} source The object to copy properties from.
* @param {Array} props The property identifiers to copy.
* @param {Object} [object={}] The object to copy properties to.
* @param {Function} [customizer] The function to customize copied values.
* @returns {Object} Returns `object`.
*/
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}
	return object;
}
var init__copyObject = __esmMin((() => {
	init__assignValue();
	init__baseAssignValue();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
function overRest(func, start, transform) {
	start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return apply(func, this, otherArgs);
	};
}
var nativeMax$1;
var init__overRest = __esmMin((() => {
	init__apply();
	nativeMax$1 = Math.max;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var MAX_SAFE_INTEGER;
var init_isLength = __esmMin((() => {
	MAX_SAFE_INTEGER = 9007199254740991;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength(value.length) && !isFunction(value);
}
var init_isArrayLike = __esmMin((() => {
	init_isFunction();
	init_isLength();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
}
var objectProto$2;
var init__isPrototype = __esmMin((() => {
	objectProto$2 = Object.prototype;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
var init__baseTimes = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var argsTag$3;
var init__baseIsArguments = __esmMin((() => {
	init__baseGetTag();
	init_isObjectLike();
	argsTag$3 = "[object Arguments]";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var objectProto$1, hasOwnProperty$10, propertyIsEnumerable$1, isArguments;
var init_isArguments = __esmMin((() => {
	init__baseIsArguments();
	init_isObjectLike();
	objectProto$1 = Object.prototype;
	hasOwnProperty$10 = objectProto$1.hasOwnProperty;
	propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
	isArguments = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty$10.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
var init_stubFalse = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var freeExports$2, freeModule$2, Buffer$1, isBuffer;
var init_isBuffer = __esmMin((() => {
	init__root();
	init_stubFalse();
	freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
	freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
	Buffer$1 = freeModule$2 && freeModule$2.exports === freeExports$2 ? root.Buffer : void 0;
	isBuffer = (Buffer$1 ? Buffer$1.isBuffer : void 0) || stubFalse;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsTypedArray.js
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var argsTag$2, arrayTag$2, boolTag$3, dateTag$3, errorTag$2, funcTag$1, mapTag$5, numberTag$3, objectTag$4, regexpTag$3, setTag$5, stringTag$3, weakMapTag$2, arrayBufferTag$3, dataViewTag$4, float32Tag$2, float64Tag$2, int8Tag$2, int16Tag$2, int32Tag$2, uint8Tag$2, uint8ClampedTag$2, uint16Tag$2, uint32Tag$2, typedArrayTags;
var init__baseIsTypedArray = __esmMin((() => {
	init__baseGetTag();
	init_isLength();
	init_isObjectLike();
	argsTag$2 = "[object Arguments]";
	arrayTag$2 = "[object Array]";
	boolTag$3 = "[object Boolean]";
	dateTag$3 = "[object Date]";
	errorTag$2 = "[object Error]";
	funcTag$1 = "[object Function]";
	mapTag$5 = "[object Map]";
	numberTag$3 = "[object Number]";
	objectTag$4 = "[object Object]";
	regexpTag$3 = "[object RegExp]";
	setTag$5 = "[object Set]";
	stringTag$3 = "[object String]";
	weakMapTag$2 = "[object WeakMap]";
	arrayBufferTag$3 = "[object ArrayBuffer]";
	dataViewTag$4 = "[object DataView]";
	float32Tag$2 = "[object Float32Array]";
	float64Tag$2 = "[object Float64Array]";
	int8Tag$2 = "[object Int8Array]";
	int16Tag$2 = "[object Int16Array]";
	int32Tag$2 = "[object Int32Array]";
	uint8Tag$2 = "[object Uint8Array]";
	uint8ClampedTag$2 = "[object Uint8ClampedArray]";
	uint16Tag$2 = "[object Uint16Array]";
	uint32Tag$2 = "[object Uint32Array]";
	typedArrayTags = {};
	typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
var init__baseUnary = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var freeExports$1, freeModule$1, freeProcess, nodeUtil;
var init__nodeUtil = __esmMin((() => {
	init__freeGlobal();
	freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
	freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
	freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && freeGlobal.process;
	nodeUtil = function() {
		try {
			var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray, isTypedArray;
var init_isTypedArray = __esmMin((() => {
	init__baseIsTypedArray();
	init__baseUnary();
	init__nodeUtil();
	nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayLikeKeys.js
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$9.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
	return result;
}
var hasOwnProperty$9;
var init__arrayLikeKeys = __esmMin((() => {
	init__baseTimes();
	init_isArguments();
	init_isArray();
	init_isBuffer();
	init__isIndex();
	init_isTypedArray();
	hasOwnProperty$9 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
var init__overArg = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var nativeKeys;
var init__nativeKeys = __esmMin((() => {
	init__overArg();
	nativeKeys = overArg(Object.keys, Object);
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeys.js
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$8.call(object, key) && key != "constructor") result.push(key);
	return result;
}
var hasOwnProperty$8;
var init__baseKeys = __esmMin((() => {
	init__isPrototype();
	init__nativeKeys();
	hasOwnProperty$8 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
	return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var init_keys = __esmMin((() => {
	init__arrayLikeKeys();
	init__baseKeys();
	init_isArrayLike();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
/**
* This function is like
* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* except that it includes inherited enumerable properties.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
var init__nativeKeysIn = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
/**
* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeysIn(object) {
	if (!isObject(object)) return nativeKeysIn(object);
	var isProto = isPrototype(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$7.call(object, key)))) result.push(key);
	return result;
}
var hasOwnProperty$7;
var init__baseKeysIn = __esmMin((() => {
	init_isObject();
	init__isPrototype();
	init__nativeKeysIn();
	hasOwnProperty$7 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
/**
* Creates an array of the own and inherited enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keysIn(new Foo);
* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
*/
function keysIn(object) {
	return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var init_keysIn = __esmMin((() => {
	init__arrayLikeKeys();
	init__baseKeysIn();
	init_isArrayLike();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
/**
* Checks if `value` is a property name and not a property path.
*
* @private
* @param {*} value The value to check.
* @param {Object} [object] The object to query keys on.
* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
*/
function isKey(value, object) {
	if (isArray(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var reIsDeepProp, reIsPlainProp;
var init__isKey = __esmMin((() => {
	init_isArray();
	init_isSymbol();
	reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	reIsPlainProp = /^\w*$/;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var nativeCreate;
var init__nativeCreate = __esmMin((() => {
	init__getNative();
	nativeCreate = getNative(Object, "create");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
/**
* Removes all key-value entries from the hash.
*
* @private
* @name clear
* @memberOf Hash
*/
function hashClear() {
	this.__data__ = nativeCreate ? nativeCreate(null) : {};
	this.size = 0;
}
var init__hashClear = __esmMin((() => {
	init__nativeCreate();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
/**
* Removes `key` and its value from the hash.
*
* @private
* @name delete
* @memberOf Hash
* @param {Object} hash The hash to modify.
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
var init__hashDelete = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
/**
* Gets the hash value for `key`.
*
* @private
* @name get
* @memberOf Hash
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function hashGet(key) {
	var data = this.__data__;
	if (nativeCreate) {
		var result = data[key];
		return result === HASH_UNDEFINED$2 ? void 0 : result;
	}
	return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var HASH_UNDEFINED$2, hasOwnProperty$6;
var init__hashGet = __esmMin((() => {
	init__nativeCreate();
	HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
	hasOwnProperty$6 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
/**
* Checks if a hash value for `key` exists.
*
* @private
* @name has
* @memberOf Hash
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function hashHas(key) {
	var data = this.__data__;
	return nativeCreate ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var hasOwnProperty$5;
var init__hashHas = __esmMin((() => {
	init__nativeCreate();
	hasOwnProperty$5 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
/**
* Sets the hash `key` to `value`.
*
* @private
* @name set
* @memberOf Hash
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the hash instance.
*/
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
	return this;
}
var HASH_UNDEFINED$1;
var init__hashSet = __esmMin((() => {
	init__nativeCreate();
	HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
/**
* Creates a hash object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
var init__Hash = __esmMin((() => {
	init__hashClear();
	init__hashDelete();
	init__hashGet();
	init__hashHas();
	init__hashSet();
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
/**
* Removes all key-value entries from the list cache.
*
* @private
* @name clear
* @memberOf ListCache
*/
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
var init__listCacheClear = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq(array[length][0], key)) return length;
	return -1;
}
var init__assocIndexOf = __esmMin((() => {
	init_eq();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
/**
* Removes `key` and its value from the list cache.
*
* @private
* @name delete
* @memberOf ListCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function listCacheDelete(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
var splice;
var init__listCacheDelete = __esmMin((() => {
	init__assocIndexOf();
	splice = Array.prototype.splice;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
/**
* Gets the list cache value for `key`.
*
* @private
* @name get
* @memberOf ListCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function listCacheGet(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	return index < 0 ? void 0 : data[index][1];
}
var init__listCacheGet = __esmMin((() => {
	init__assocIndexOf();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
/**
* Checks if a list cache value for `key` exists.
*
* @private
* @name has
* @memberOf ListCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function listCacheHas(key) {
	return assocIndexOf(this.__data__, key) > -1;
}
var init__listCacheHas = __esmMin((() => {
	init__assocIndexOf();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
/**
* Sets the list cache `key` to `value`.
*
* @private
* @name set
* @memberOf ListCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the list cache instance.
*/
function listCacheSet(key, value) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
var init__listCacheSet = __esmMin((() => {
	init__assocIndexOf();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
var init__ListCache = __esmMin((() => {
	init__listCacheClear();
	init__listCacheDelete();
	init__listCacheGet();
	init__listCacheHas();
	init__listCacheSet();
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var Map$1;
var init__Map = __esmMin((() => {
	init__getNative();
	init__root();
	Map$1 = getNative(root, "Map");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
/**
* Removes all key-value entries from the map.
*
* @private
* @name clear
* @memberOf MapCache
*/
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new Hash(),
		"map": new (Map$1 || ListCache)(),
		"string": new Hash()
	};
}
var init__mapCacheClear = __esmMin((() => {
	init__Hash();
	init__ListCache();
	init__Map();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
/**
* Checks if `value` is suitable for use as unique object key.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
*/
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var init__isKeyable = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
	var data = map.__data__;
	return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var init__getMapData = __esmMin((() => {
	init__isKeyable();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
/**
* Removes `key` and its value from the map.
*
* @private
* @name delete
* @memberOf MapCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function mapCacheDelete(key) {
	var result = getMapData(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
var init__mapCacheDelete = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
/**
* Gets the map value for `key`.
*
* @private
* @name get
* @memberOf MapCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function mapCacheGet(key) {
	return getMapData(this, key).get(key);
}
var init__mapCacheGet = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
/**
* Checks if a map value for `key` exists.
*
* @private
* @name has
* @memberOf MapCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function mapCacheHas(key) {
	return getMapData(this, key).has(key);
}
var init__mapCacheHas = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
/**
* Sets the map `key` to `value`.
*
* @private
* @name set
* @memberOf MapCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the map cache instance.
*/
function mapCacheSet(key, value) {
	var data = getMapData(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
var init__mapCacheSet = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
var init__MapCache = __esmMin((() => {
	init__mapCacheClear();
	init__mapCacheDelete();
	init__mapCacheGet();
	init__mapCacheHas();
	init__mapCacheSet();
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
/**
* Creates a function that memoizes the result of `func`. If `resolver` is
* provided, it determines the cache key for storing the result based on the
* arguments provided to the memoized function. By default, the first argument
* provided to the memoized function is used as the map cache key. The `func`
* is invoked with the `this` binding of the memoized function.
*
* **Note:** The cache is exposed as the `cache` property on the memoized
* function. Its creation may be customized by replacing the `_.memoize.Cache`
* constructor with one whose instances implement the
* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
* method interface of `clear`, `delete`, `get`, `has`, and `set`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to have its output memoized.
* @param {Function} [resolver] The function to resolve the cache key.
* @returns {Function} Returns the new memoized function.
* @example
*
* var object = { 'a': 1, 'b': 2 };
* var other = { 'c': 3, 'd': 4 };
*
* var values = _.memoize(_.values);
* values(object);
* // => [1, 2]
*
* values(other);
* // => [3, 4]
*
* object.a = 2;
* values(object);
* // => [1, 2]
*
* // Modify the result cache.
* values.cache.set(object, ['a', 'b']);
* values(object);
* // => ['a', 'b']
*
* // Replace `_.memoize.Cache`.
* _.memoize.Cache = WeakMap;
*/
function memoize(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT$2);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || MapCache)();
	return memoized;
}
var FUNC_ERROR_TEXT$2;
var init_memoize = __esmMin((() => {
	init__MapCache();
	FUNC_ERROR_TEXT$2 = "Expected a function";
	memoize.Cache = MapCache;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
/**
* A specialized version of `_.memoize` which clears the memoized function's
* cache when it exceeds `MAX_MEMOIZE_SIZE`.
*
* @private
* @param {Function} func The function to have its output memoized.
* @returns {Function} Returns the new memoized function.
*/
function memoizeCapped(func) {
	var result = memoize(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
var MAX_MEMOIZE_SIZE;
var init__memoizeCapped = __esmMin((() => {
	init_memoize();
	MAX_MEMOIZE_SIZE = 500;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var rePropName, reEscapeChar, stringToPath;
var init__stringToPath = __esmMin((() => {
	init__memoizeCapped();
	rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	reEscapeChar = /\\(\\)?/g;
	stringToPath = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
/**
* Converts `value` to a string. An empty string is returned for `null`
* and `undefined` values. The sign of `-0` is preserved.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.toString(null);
* // => ''
*
* _.toString(-0);
* // => '-0'
*
* _.toString([1, 2, 3]);
* // => '1,2,3'
*/
function toString(value) {
	return value == null ? "" : baseToString(value);
}
var init_toString = __esmMin((() => {
	init__baseToString();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
/**
* Casts `value` to a path array if it's not one.
*
* @private
* @param {*} value The value to inspect.
* @param {Object} [object] The object to query keys on.
* @returns {Array} Returns the cast property path array.
*/
function castPath(value, object) {
	if (isArray(value)) return value;
	return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var init__castPath = __esmMin((() => {
	init_isArray();
	init__isKey();
	init__stringToPath();
	init_toString();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
	if (typeof value == "string" || isSymbol(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var INFINITY;
var init__toKey = __esmMin((() => {
	init_isSymbol();
	INFINITY = Infinity;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
/**
* The base implementation of `_.get` without support for default values.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @returns {*} Returns the resolved value.
*/
function baseGet(object, path) {
	path = castPath(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[toKey(path[index++])];
	return index && index == length ? object : void 0;
}
var init__baseGet = __esmMin((() => {
	init__castPath();
	init__toKey();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
	var index = -1, length = values.length, offset = array.length;
	while (++index < length) array[offset + index] = values[index];
	return array;
}
var init__arrayPush = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
/**
* Checks if `value` is a flattenable `arguments` object or array.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
*/
function isFlattenable(value) {
	return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var spreadableSymbol;
var init__isFlattenable = __esmMin((() => {
	init__Symbol();
	init_isArguments();
	init_isArray();
	spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
/**
* The base implementation of `_.flatten` with support for restricting flattening.
*
* @private
* @param {Array} array The array to flatten.
* @param {number} depth The maximum recursion depth.
* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
* @param {Array} [result=[]] The initial result value.
* @returns {Array} Returns the new flattened array.
*/
function baseFlatten(array, depth, predicate, isStrict, result) {
	var index = -1, length = array.length;
	predicate || (predicate = isFlattenable);
	result || (result = []);
	while (++index < length) {
		var value = array[index];
		if (depth > 0 && predicate(value)) if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
		else arrayPush(result, value);
		else if (!isStrict) result[result.length] = value;
	}
	return result;
}
var init__baseFlatten = __esmMin((() => {
	init__arrayPush();
	init__isFlattenable();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
/**
* Flattens `array` a single level deep.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Array
* @param {Array} array The array to flatten.
* @returns {Array} Returns the new flattened array.
* @example
*
* _.flatten([1, [2, [3, [4]], 5]]);
* // => [1, 2, [3, [4]], 5]
*/
function flatten(array) {
	return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
}
var init_flatten = __esmMin((() => {
	init__baseFlatten();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
/**
* A specialized version of `baseRest` which flattens the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @returns {Function} Returns the new function.
*/
function flatRest(func) {
	return setToString(overRest(func, void 0, flatten), func + "");
}
var init__flatRest = __esmMin((() => {
	init_flatten();
	init__overRest();
	init__setToString();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var getPrototype;
var init__getPrototype = __esmMin((() => {
	init__overArg();
	getPrototype = overArg(Object.getPrototypeOf, Object);
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isPlainObject.js
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject(value) {
	if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) return false;
	var proto = getPrototype(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty$4.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var objectTag$3, funcProto, objectProto, funcToString, hasOwnProperty$4, objectCtorString;
var init_isPlainObject = __esmMin((() => {
	init__baseGetTag();
	init__getPrototype();
	init_isObjectLike();
	objectTag$3 = "[object Object]";
	funcProto = Function.prototype;
	objectProto = Object.prototype;
	funcToString = funcProto.toString;
	hasOwnProperty$4 = objectProto.hasOwnProperty;
	objectCtorString = funcToString.call(Object);
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSlice.js
/**
* The base implementation of `_.slice` without an iteratee call guard.
*
* @private
* @param {Array} array The array to slice.
* @param {number} [start=0] The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the slice of `array`.
*/
function baseSlice(array, start, end) {
	var index = -1, length = array.length;
	if (start < 0) start = -start > length ? 0 : length + start;
	end = end > length ? length : end;
	if (end < 0) end += length;
	length = start > end ? 0 : end - start >>> 0;
	start >>>= 0;
	var result = Array(length);
	while (++index < length) result[index] = array[index + start];
	return result;
}
var init__baseSlice = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castSlice.js
/**
* Casts `array` to a slice if it's needed.
*
* @private
* @param {Array} array The array to inspect.
* @param {number} start The start position.
* @param {number} [end=array.length] The end position.
* @returns {Array} Returns the cast slice.
*/
function castSlice(array, start, end) {
	var length = array.length;
	end = end === void 0 ? length : end;
	return !start && end >= length ? array : baseSlice(array, start, end);
}
var init__castSlice = __esmMin((() => {
	init__baseSlice();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasUnicode.js
/**
* Checks if `string` contains Unicode symbols.
*
* @private
* @param {string} string The string to inspect.
* @returns {boolean} Returns `true` if a symbol is found, else `false`.
*/
function hasUnicode(string) {
	return reHasUnicode.test(string);
}
var reHasUnicode;
var init__hasUnicode = __esmMin((() => {
	reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_asciiToArray.js
/**
* Converts an ASCII `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function asciiToArray(string) {
	return string.split("");
}
var init__asciiToArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_unicodeToArray.js
/**
* Converts a Unicode `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function unicodeToArray(string) {
	return string.match(reUnicode) || [];
}
var rsAstralRange, rsComboRange, rsVarRange, rsAstral, rsCombo, rsFitz, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsZWJ, reOptMod, rsOptVar, rsOptJoin, rsSeq, rsSymbol, reUnicode;
var init__unicodeToArray = __esmMin((() => {
	rsAstralRange = "\\ud800-\\udfff";
	rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
	rsVarRange = "\\ufe0e\\ufe0f";
	rsAstral = "[" + rsAstralRange + "]";
	rsCombo = "[" + rsComboRange + "]";
	rsFitz = "\\ud83c[\\udffb-\\udfff]";
	rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
	rsNonAstral = "[^" + rsAstralRange + "]";
	rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
	rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
	rsZWJ = "\\u200d";
	reOptMod = rsModifier + "?";
	rsOptVar = "[" + rsVarRange + "]?";
	rsOptJoin = "(?:" + rsZWJ + "(?:" + [
		rsNonAstral,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsOptVar + reOptMod + ")*";
	rsSeq = rsOptVar + reOptMod + rsOptJoin;
	rsSymbol = "(?:" + [
		rsNonAstral + rsCombo + "?",
		rsCombo,
		rsRegional,
		rsSurrPair,
		rsAstral
	].join("|") + ")";
	reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToArray.js
/**
* Converts `string` to an array.
*
* @private
* @param {string} string The string to convert.
* @returns {Array} Returns the converted array.
*/
function stringToArray(string) {
	return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
var init__stringToArray = __esmMin((() => {
	init__asciiToArray();
	init__hasUnicode();
	init__unicodeToArray();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createCaseFirst.js
/**
* Creates a function like `_.lowerFirst`.
*
* @private
* @param {string} methodName The name of the `String` case method to use.
* @returns {Function} Returns the new case function.
*/
function createCaseFirst(methodName) {
	return function(string) {
		string = toString(string);
		var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
		var chr = strSymbols ? strSymbols[0] : string.charAt(0);
		var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
		return chr[methodName]() + trailing;
	};
}
var init__createCaseFirst = __esmMin((() => {
	init__castSlice();
	init__hasUnicode();
	init__stringToArray();
	init_toString();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/upperFirst.js
var upperFirst;
var init_upperFirst = __esmMin((() => {
	init__createCaseFirst();
	upperFirst = createCaseFirst("toUpperCase");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/capitalize.js
/**
* Converts the first character of `string` to upper case and the remaining
* to lower case.
*
* @static
* @memberOf _
* @since 3.0.0
* @category String
* @param {string} [string=''] The string to capitalize.
* @returns {string} Returns the capitalized string.
* @example
*
* _.capitalize('FRED');
* // => 'Fred'
*/
function capitalize(string) {
	return upperFirst(toString(string).toLowerCase());
}
var init_capitalize = __esmMin((() => {
	init_toString();
	init_upperFirst();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new ListCache();
	this.size = 0;
}
var init__stackClear = __esmMin((() => {
	init__ListCache();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
var init__stackDelete = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
var init__stackGet = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
var init__stackHas = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof ListCache) {
		var pairs = data.__data__;
		if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
			pairs.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new MapCache(pairs);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
var LARGE_ARRAY_SIZE;
var init__stackSet = __esmMin((() => {
	init__ListCache();
	init__Map();
	init__MapCache();
	LARGE_ARRAY_SIZE = 200;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	var data = this.__data__ = new ListCache(entries);
	this.size = data.size;
}
var init__Stack = __esmMin((() => {
	init__ListCache();
	init__stackClear();
	init__stackDelete();
	init__stackGet();
	init__stackHas();
	init__stackSet();
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
/**
* The base implementation of `_.assign` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssign(object, source) {
	return object && copyObject(source, keys(source), object);
}
var init__baseAssign = __esmMin((() => {
	init__copyObject();
	init_keys();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
/**
* The base implementation of `_.assignIn` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssignIn(object, source) {
	return object && copyObject(source, keysIn(source), object);
}
var init__baseAssignIn = __esmMin((() => {
	init__copyObject();
	init_keysIn();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
/**
* Creates a clone of  `buffer`.
*
* @private
* @param {Buffer} buffer The buffer to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Buffer} Returns the cloned buffer.
*/
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var freeExports, freeModule, Buffer, allocUnsafe;
var init__cloneBuffer = __esmMin((() => {
	init__root();
	freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
/**
* A specialized version of `_.filter` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
var init__arrayFilter = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
/**
* This method returns a new empty array.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {Array} Returns the new empty array.
* @example
*
* var arrays = _.times(2, _.stubArray);
*
* console.log(arrays);
* // => [[], []]
*
* console.log(arrays[0] === arrays[1]);
* // => false
*/
function stubArray() {
	return [];
}
var init_stubArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var propertyIsEnumerable, nativeGetSymbols, getSymbols;
var init__getSymbols = __esmMin((() => {
	init__arrayFilter();
	init_stubArray();
	propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	nativeGetSymbols = Object.getOwnPropertySymbols;
	getSymbols = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) return [];
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function(symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
/**
* Copies own symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbols(source, object) {
	return copyObject(source, getSymbols(source), object);
}
var init__copySymbols = __esmMin((() => {
	init__copyObject();
	init__getSymbols();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var getSymbolsIn;
var init__getSymbolsIn = __esmMin((() => {
	init__arrayPush();
	init__getPrototype();
	init__getSymbols();
	init_stubArray();
	getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray : function(object) {
		var result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
/**
* Copies own and inherited symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbolsIn(source, object) {
	return copyObject(source, getSymbolsIn(source), object);
}
var init__copySymbolsIn = __esmMin((() => {
	init__copyObject();
	init__getSymbolsIn();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
/**
* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
* `keysFunc` and `symbolsFunc` to get the enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Function} keysFunc The function to get the keys of `object`.
* @param {Function} symbolsFunc The function to get the symbols of `object`.
* @returns {Array} Returns the array of property names and symbols.
*/
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
var init__baseGetAllKeys = __esmMin((() => {
	init__arrayPush();
	init_isArray();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
/**
* Creates an array of own enumerable property names and symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeys(object) {
	return baseGetAllKeys(object, keys, getSymbols);
}
var init__getAllKeys = __esmMin((() => {
	init__baseGetAllKeys();
	init__getSymbols();
	init_keys();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
/**
* Creates an array of own and inherited enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeysIn(object) {
	return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var init__getAllKeysIn = __esmMin((() => {
	init__baseGetAllKeys();
	init__getSymbolsIn();
	init_keysIn();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var DataView;
var init__DataView = __esmMin((() => {
	init__getNative();
	init__root();
	DataView = getNative(root, "DataView");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Promise.js
var Promise$1;
var init__Promise = __esmMin((() => {
	init__getNative();
	init__root();
	Promise$1 = getNative(root, "Promise");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Set.js
var Set$1;
var init__Set = __esmMin((() => {
	init__getNative();
	init__root();
	Set$1 = getNative(root, "Set");
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getTag.js
var mapTag$4, objectTag$2, promiseTag, setTag$4, weakMapTag$1, dataViewTag$3, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, _getTag_default;
var init__getTag = __esmMin((() => {
	init__DataView();
	init__Map();
	init__Promise();
	init__Set();
	init__WeakMap();
	init__baseGetTag();
	init__toSource();
	mapTag$4 = "[object Map]";
	objectTag$2 = "[object Object]";
	promiseTag = "[object Promise]";
	setTag$4 = "[object Set]";
	weakMapTag$1 = "[object WeakMap]";
	dataViewTag$3 = "[object DataView]";
	dataViewCtorString = toSource(DataView);
	mapCtorString = toSource(Map$1);
	promiseCtorString = toSource(Promise$1);
	setCtorString = toSource(Set$1);
	weakMapCtorString = toSource(WeakMap$1);
	getTag = baseGetTag;
	if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) getTag = function(value) {
		var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
		if (ctorString) switch (ctorString) {
			case dataViewCtorString: return dataViewTag$3;
			case mapCtorString: return mapTag$4;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag$4;
			case weakMapCtorString: return weakMapTag$1;
		}
		return result;
	};
	_getTag_default = getTag;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneArray.js
/**
* Initializes an array clone.
*
* @private
* @param {Array} array The array to clone.
* @returns {Array} Returns the initialized clone.
*/
function initCloneArray(array) {
	var length = array.length, result = new array.constructor(length);
	if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
		result.index = array.index;
		result.input = array.input;
	}
	return result;
}
var hasOwnProperty$3;
var init__initCloneArray = __esmMin((() => {
	hasOwnProperty$3 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var Uint8Array;
var init__Uint8Array = __esmMin((() => {
	init__root();
	Uint8Array = root.Uint8Array;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
/**
* Creates a clone of `arrayBuffer`.
*
* @private
* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
* @returns {ArrayBuffer} Returns the cloned array buffer.
*/
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result;
}
var init__cloneArrayBuffer = __esmMin((() => {
	init__Uint8Array();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
/**
* Creates a clone of `dataView`.
*
* @private
* @param {Object} dataView The data view to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned data view.
*/
function cloneDataView(dataView, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var init__cloneDataView = __esmMin((() => {
	init__cloneArrayBuffer();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
/**
* Creates a clone of `regexp`.
*
* @private
* @param {Object} regexp The regexp to clone.
* @returns {Object} Returns the cloned regexp.
*/
function cloneRegExp(regexp) {
	var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	result.lastIndex = regexp.lastIndex;
	return result;
}
var reFlags;
var init__cloneRegExp = __esmMin((() => {
	reFlags = /\w*$/;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
/**
* Creates a clone of the `symbol` object.
*
* @private
* @param {Object} symbol The symbol object to clone.
* @returns {Object} Returns the cloned symbol object.
*/
function cloneSymbol(symbol) {
	return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var symbolProto$1, symbolValueOf$1;
var init__cloneSymbol = __esmMin((() => {
	init__Symbol();
	symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0;
	symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
/**
* Creates a clone of `typedArray`.
*
* @private
* @param {Object} typedArray The typed array to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned typed array.
*/
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var init__cloneTypedArray = __esmMin((() => {
	init__cloneArrayBuffer();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
/**
* Initializes an object clone based on its `toStringTag`.
*
* **Note:** This function only supports cloning values with tags of
* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
*
* @private
* @param {Object} object The object to clone.
* @param {string} tag The `toStringTag` of the object to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneByTag(object, tag, isDeep) {
	var Ctor = object.constructor;
	switch (tag) {
		case arrayBufferTag$2: return cloneArrayBuffer(object);
		case boolTag$2:
		case dateTag$2: return new Ctor(+object);
		case dataViewTag$2: return cloneDataView(object, isDeep);
		case float32Tag$1:
		case float64Tag$1:
		case int8Tag$1:
		case int16Tag$1:
		case int32Tag$1:
		case uint8Tag$1:
		case uint8ClampedTag$1:
		case uint16Tag$1:
		case uint32Tag$1: return cloneTypedArray(object, isDeep);
		case mapTag$3: return new Ctor();
		case numberTag$2:
		case stringTag$2: return new Ctor(object);
		case regexpTag$2: return cloneRegExp(object);
		case setTag$3: return new Ctor();
		case symbolTag$2: return cloneSymbol(object);
	}
}
var boolTag$2, dateTag$2, mapTag$3, numberTag$2, regexpTag$2, setTag$3, stringTag$2, symbolTag$2, arrayBufferTag$2, dataViewTag$2, float32Tag$1, float64Tag$1, int8Tag$1, int16Tag$1, int32Tag$1, uint8Tag$1, uint8ClampedTag$1, uint16Tag$1, uint32Tag$1;
var init__initCloneByTag = __esmMin((() => {
	init__cloneArrayBuffer();
	init__cloneDataView();
	init__cloneRegExp();
	init__cloneSymbol();
	init__cloneTypedArray();
	boolTag$2 = "[object Boolean]";
	dateTag$2 = "[object Date]";
	mapTag$3 = "[object Map]";
	numberTag$2 = "[object Number]";
	regexpTag$2 = "[object RegExp]";
	setTag$3 = "[object Set]";
	stringTag$2 = "[object String]";
	symbolTag$2 = "[object Symbol]";
	arrayBufferTag$2 = "[object ArrayBuffer]";
	dataViewTag$2 = "[object DataView]";
	float32Tag$1 = "[object Float32Array]";
	float64Tag$1 = "[object Float64Array]";
	int8Tag$1 = "[object Int8Array]";
	int16Tag$1 = "[object Int16Array]";
	int32Tag$1 = "[object Int32Array]";
	uint8Tag$1 = "[object Uint8Array]";
	uint8ClampedTag$1 = "[object Uint8ClampedArray]";
	uint16Tag$1 = "[object Uint16Array]";
	uint32Tag$1 = "[object Uint32Array]";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
/**
* Initializes an object clone.
*
* @private
* @param {Object} object The object to clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneObject(object) {
	return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var init__initCloneObject = __esmMin((() => {
	init__baseCreate();
	init__getPrototype();
	init__isPrototype();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
/**
* The base implementation of `_.isMap` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
*/
function baseIsMap(value) {
	return isObjectLike(value) && _getTag_default(value) == mapTag$2;
}
var mapTag$2;
var init__baseIsMap = __esmMin((() => {
	init__getTag();
	init_isObjectLike();
	mapTag$2 = "[object Map]";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var nodeIsMap, isMap;
var init_isMap = __esmMin((() => {
	init__baseIsMap();
	init__baseUnary();
	init__nodeUtil();
	nodeIsMap = nodeUtil && nodeUtil.isMap;
	isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsSet.js
/**
* The base implementation of `_.isSet` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
*/
function baseIsSet(value) {
	return isObjectLike(value) && _getTag_default(value) == setTag$2;
}
var setTag$2;
var init__baseIsSet = __esmMin((() => {
	init__getTag();
	init_isObjectLike();
	setTag$2 = "[object Set]";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var nodeIsSet, isSet;
var init_isSet = __esmMin((() => {
	init__baseIsSet();
	init__baseUnary();
	init__nodeUtil();
	nodeIsSet = nodeUtil && nodeUtil.isSet;
	isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseClone.js
/**
* The base implementation of `_.clone` and `_.cloneDeep` which tracks
* traversed objects.
*
* @private
* @param {*} value The value to clone.
* @param {boolean} bitmask The bitmask flags.
*  1 - Deep clone
*  2 - Flatten inherited properties
*  4 - Clone symbols
* @param {Function} [customizer] The function to customize cloning.
* @param {string} [key] The key of `value`.
* @param {Object} [object] The parent object of `value`.
* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
* @returns {*} Returns the cloned value.
*/
function baseClone(value, bitmask, customizer, key, object, stack) {
	var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
	if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
	if (result !== void 0) return result;
	if (!isObject(value)) return value;
	var isArr = isArray(value);
	if (isArr) {
		result = initCloneArray(value);
		if (!isDeep) return copyArray(value, result);
	} else {
		var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
		if (isBuffer(value)) return cloneBuffer(value, isDeep);
		if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
			result = isFlat || isFunc ? {} : initCloneObject(value);
			if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
		} else {
			if (!cloneableTags[tag]) return object ? value : {};
			result = initCloneByTag(value, tag, isDeep);
		}
	}
	stack || (stack = new Stack());
	var stacked = stack.get(value);
	if (stacked) return stacked;
	stack.set(value, result);
	if (isSet(value)) value.forEach(function(subValue) {
		result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	});
	else if (isMap(value)) value.forEach(function(subValue, key) {
		result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
	arrayEach(props || value, function(subValue, key) {
		if (props) {
			key = subValue;
			subValue = value[key];
		}
		assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	return result;
}
var CLONE_DEEP_FLAG$1, CLONE_FLAT_FLAG$1, CLONE_SYMBOLS_FLAG$1, argsTag$1, arrayTag$1, boolTag$1, dateTag$1, errorTag$1, funcTag, genTag, mapTag$1, numberTag$1, objectTag$1, regexpTag$1, setTag$1, stringTag$1, symbolTag$1, weakMapTag, arrayBufferTag$1, dataViewTag$1, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, cloneableTags;
var init__baseClone = __esmMin((() => {
	init__Stack();
	init__arrayEach();
	init__assignValue();
	init__baseAssign();
	init__baseAssignIn();
	init__cloneBuffer();
	init__copyArray();
	init__copySymbols();
	init__copySymbolsIn();
	init__getAllKeys();
	init__getAllKeysIn();
	init__getTag();
	init__initCloneArray();
	init__initCloneByTag();
	init__initCloneObject();
	init_isArray();
	init_isBuffer();
	init_isMap();
	init_isObject();
	init_isSet();
	init_keys();
	init_keysIn();
	CLONE_DEEP_FLAG$1 = 1;
	CLONE_FLAT_FLAG$1 = 2;
	CLONE_SYMBOLS_FLAG$1 = 4;
	argsTag$1 = "[object Arguments]";
	arrayTag$1 = "[object Array]";
	boolTag$1 = "[object Boolean]";
	dateTag$1 = "[object Date]";
	errorTag$1 = "[object Error]";
	funcTag = "[object Function]";
	genTag = "[object GeneratorFunction]";
	mapTag$1 = "[object Map]";
	numberTag$1 = "[object Number]";
	objectTag$1 = "[object Object]";
	regexpTag$1 = "[object RegExp]";
	setTag$1 = "[object Set]";
	stringTag$1 = "[object String]";
	symbolTag$1 = "[object Symbol]";
	weakMapTag = "[object WeakMap]";
	arrayBufferTag$1 = "[object ArrayBuffer]";
	dataViewTag$1 = "[object DataView]";
	float32Tag = "[object Float32Array]";
	float64Tag = "[object Float64Array]";
	int8Tag = "[object Int8Array]";
	int16Tag = "[object Int16Array]";
	int32Tag = "[object Int32Array]";
	uint8Tag = "[object Uint8Array]";
	uint8ClampedTag = "[object Uint8ClampedArray]";
	uint16Tag = "[object Uint16Array]";
	uint32Tag = "[object Uint32Array]";
	cloneableTags = {};
	cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
/**
* Adds `value` to the array cache.
*
* @private
* @name add
* @memberOf SetCache
* @alias push
* @param {*} value The value to cache.
* @returns {Object} Returns the cache instance.
*/
function setCacheAdd(value) {
	this.__data__.set(value, HASH_UNDEFINED);
	return this;
}
var HASH_UNDEFINED;
var init__setCacheAdd = __esmMin((() => {
	HASH_UNDEFINED = "__lodash_hash_undefined__";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
/**
* Checks if `value` is in the array cache.
*
* @private
* @name has
* @memberOf SetCache
* @param {*} value The value to search for.
* @returns {boolean} Returns `true` if `value` is found, else `false`.
*/
function setCacheHas(value) {
	return this.__data__.has(value);
}
var init__setCacheHas = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
/**
*
* Creates an array cache object to store unique values.
*
* @private
* @constructor
* @param {Array} [values] The values to cache.
*/
function SetCache(values) {
	var index = -1, length = values == null ? 0 : values.length;
	this.__data__ = new MapCache();
	while (++index < length) this.add(values[index]);
}
var init__SetCache = __esmMin((() => {
	init__MapCache();
	init__setCacheAdd();
	init__setCacheHas();
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
/**
* A specialized version of `_.some` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {boolean} Returns `true` if any element passes the predicate check,
*  else `false`.
*/
function arraySome(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (predicate(array[index], index, array)) return true;
	return false;
}
var init__arraySome = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
/**
* Checks if a `cache` value for `key` exists.
*
* @private
* @param {Object} cache The cache to query.
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function cacheHas(cache, key) {
	return cache.has(key);
}
var init__cacheHas = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
/**
* A specialized version of `baseIsEqualDeep` for arrays with support for
* partial deep comparisons.
*
* @private
* @param {Array} array The array to compare.
* @param {Array} other The other array to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `array` and `other` objects.
* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
*/
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
	if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
	var arrStacked = stack.get(array);
	var othStacked = stack.get(other);
	if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
	var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
	stack.set(array, other);
	stack.set(other, array);
	while (++index < arrLength) {
		var arrValue = array[index], othValue = other[index];
		if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
		if (compared !== void 0) {
			if (compared) continue;
			result = false;
			break;
		}
		if (seen) {
			if (!arraySome(other, function(othValue, othIndex) {
				if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
			})) {
				result = false;
				break;
			}
		} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			result = false;
			break;
		}
	}
	stack["delete"](array);
	stack["delete"](other);
	return result;
}
var COMPARE_PARTIAL_FLAG$3, COMPARE_UNORDERED_FLAG$1;
var init__equalArrays = __esmMin((() => {
	init__SetCache();
	init__arraySome();
	init__cacheHas();
	COMPARE_PARTIAL_FLAG$3 = 1;
	COMPARE_UNORDERED_FLAG$1 = 2;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapToArray.js
/**
* Converts `map` to its key-value pairs.
*
* @private
* @param {Object} map The map to convert.
* @returns {Array} Returns the key-value pairs.
*/
function mapToArray(map) {
	var index = -1, result = Array(map.size);
	map.forEach(function(value, key) {
		result[++index] = [key, value];
	});
	return result;
}
var init__mapToArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
/**
* Converts `set` to an array of its values.
*
* @private
* @param {Object} set The set to convert.
* @returns {Array} Returns the values.
*/
function setToArray(set) {
	var index = -1, result = Array(set.size);
	set.forEach(function(value) {
		result[++index] = value;
	});
	return result;
}
var init__setToArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
/**
* A specialized version of `baseIsEqualDeep` for comparing objects of
* the same `toStringTag`.
*
* **Note:** This function only supports comparing values with tags of
* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {string} tag The `toStringTag` of the objects to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	switch (tag) {
		case dataViewTag:
			if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
			object = object.buffer;
			other = other.buffer;
		case arrayBufferTag:
			if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
			return true;
		case boolTag:
		case dateTag:
		case numberTag: return eq(+object, +other);
		case errorTag: return object.name == other.name && object.message == other.message;
		case regexpTag:
		case stringTag: return object == other + "";
		case mapTag: var convert = mapToArray;
		case setTag:
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
			convert || (convert = setToArray);
			if (object.size != other.size && !isPartial) return false;
			var stacked = stack.get(object);
			if (stacked) return stacked == other;
			bitmask |= COMPARE_UNORDERED_FLAG;
			stack.set(object, other);
			var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			stack["delete"](object);
			return result;
		case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
	}
	return false;
}
var COMPARE_PARTIAL_FLAG$2, COMPARE_UNORDERED_FLAG, boolTag, dateTag, errorTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf;
var init__equalByTag = __esmMin((() => {
	init__Symbol();
	init__Uint8Array();
	init_eq();
	init__equalArrays();
	init__mapToArray();
	init__setToArray();
	COMPARE_PARTIAL_FLAG$2 = 1;
	COMPARE_UNORDERED_FLAG = 2;
	boolTag = "[object Boolean]";
	dateTag = "[object Date]";
	errorTag = "[object Error]";
	mapTag = "[object Map]";
	numberTag = "[object Number]";
	regexpTag = "[object RegExp]";
	setTag = "[object Set]";
	stringTag = "[object String]";
	symbolTag = "[object Symbol]";
	arrayBufferTag = "[object ArrayBuffer]";
	dataViewTag = "[object DataView]";
	symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
	symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
/**
* A specialized version of `baseIsEqualDeep` for objects with support for
* partial deep comparisons.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length;
	if (objLength != getAllKeys(other).length && !isPartial) return false;
	var index = objLength;
	while (index--) {
		var key = objProps[index];
		if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) return false;
	}
	var objStacked = stack.get(object);
	var othStacked = stack.get(other);
	if (objStacked && othStacked) return objStacked == other && othStacked == object;
	var result = true;
	stack.set(object, other);
	stack.set(other, object);
	var skipCtor = isPartial;
	while (++index < objLength) {
		key = objProps[index];
		var objValue = object[key], othValue = other[key];
		if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
		if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
			result = false;
			break;
		}
		skipCtor || (skipCtor = key == "constructor");
	}
	if (result && !skipCtor) {
		var objCtor = object.constructor, othCtor = other.constructor;
		if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
	}
	stack["delete"](object);
	stack["delete"](other);
	return result;
}
var COMPARE_PARTIAL_FLAG$1, hasOwnProperty$2;
var init__equalObjects = __esmMin((() => {
	init__getAllKeys();
	COMPARE_PARTIAL_FLAG$1 = 1;
	hasOwnProperty$2 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqualDeep.js
/**
* A specialized version of `baseIsEqual` for arrays and objects which performs
* deep comparisons and tracks traversed objects enabling objects with circular
* references to be compared.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} [stack] Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
	objTag = objTag == argsTag ? objectTag : objTag;
	othTag = othTag == argsTag ? objectTag : othTag;
	var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
	if (isSameTag && isBuffer(object)) {
		if (!isBuffer(other)) return false;
		objIsArr = true;
		objIsObj = false;
	}
	if (isSameTag && !objIsObj) {
		stack || (stack = new Stack());
		return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	}
	if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
		var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
		if (objIsWrapped || othIsWrapped) {
			var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
			stack || (stack = new Stack());
			return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		}
	}
	if (!isSameTag) return false;
	stack || (stack = new Stack());
	return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var COMPARE_PARTIAL_FLAG, argsTag, arrayTag, objectTag, hasOwnProperty$1;
var init__baseIsEqualDeep = __esmMin((() => {
	init__Stack();
	init__equalArrays();
	init__equalByTag();
	init__equalObjects();
	init__getTag();
	init_isArray();
	init_isBuffer();
	init_isTypedArray();
	COMPARE_PARTIAL_FLAG = 1;
	argsTag = "[object Arguments]";
	arrayTag = "[object Array]";
	objectTag = "[object Object]";
	hasOwnProperty$1 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
/**
* The base implementation of `_.isEqual` which supports partial comparisons
* and tracks traversed objects.
*
* @private
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @param {boolean} bitmask The bitmask flags.
*  1 - Unordered comparison
*  2 - Partial comparison
* @param {Function} [customizer] The function to customize comparisons.
* @param {Object} [stack] Tracks traversed `value` and `other` objects.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
*/
function baseIsEqual(value, other, bitmask, customizer, stack) {
	if (value === other) return true;
	if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
	return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var init__baseIsEqual = __esmMin((() => {
	init__baseIsEqualDeep();
	init_isObjectLike();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
var now;
var init_now = __esmMin((() => {
	init__root();
	now = function() {
		return root.Date.now();
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/debounce.js
/**
* Creates a debounced function that delays invoking `func` until after `wait`
* milliseconds have elapsed since the last time the debounced function was
* invoked. The debounced function comes with a `cancel` method to cancel
* delayed `func` invocations and a `flush` method to immediately invoke them.
* Provide `options` to indicate whether `func` should be invoked on the
* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
* with the last arguments provided to the debounced function. Subsequent
* calls to the debounced function return the result of the last `func`
* invocation.
*
* **Note:** If `leading` and `trailing` options are `true`, `func` is
* invoked on the trailing edge of the timeout only if the debounced function
* is invoked more than once during the `wait` timeout.
*
* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
* until to the next tick, similar to `setTimeout` with a timeout of `0`.
*
* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
* for details over the differences between `_.debounce` and `_.throttle`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to debounce.
* @param {number} [wait=0] The number of milliseconds to delay.
* @param {Object} [options={}] The options object.
* @param {boolean} [options.leading=false]
*  Specify invoking on the leading edge of the timeout.
* @param {number} [options.maxWait]
*  The maximum time `func` is allowed to be delayed before it's invoked.
* @param {boolean} [options.trailing=true]
*  Specify invoking on the trailing edge of the timeout.
* @returns {Function} Returns the new debounced function.
* @example
*
* // Avoid costly calculations while the window size is in flux.
* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
*
* // Invoke `sendMail` when clicked, debouncing subsequent calls.
* jQuery(element).on('click', _.debounce(sendMail, 300, {
*   'leading': true,
*   'trailing': false
* }));
*
* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
* var source = new EventSource('/stream');
* jQuery(source).on('message', debounced);
*
* // Cancel the trailing debounced invocation.
* jQuery(window).on('popstate', debounced.cancel);
*/
function debounce$1(func, wait, options) {
	var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
	if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT$1);
	wait = toNumber(wait) || 0;
	if (isObject(options)) {
		leading = !!options.leading;
		maxing = "maxWait" in options;
		maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}
	function invokeFunc(time) {
		var args = lastArgs, thisArg = lastThis;
		lastArgs = lastThis = void 0;
		lastInvokeTime = time;
		result = func.apply(thisArg, args);
		return result;
	}
	function leadingEdge(time) {
		lastInvokeTime = time;
		timerId = setTimeout(timerExpired, wait);
		return leading ? invokeFunc(time) : result;
	}
	function remainingWait(time) {
		var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
		return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
	}
	function shouldInvoke(time) {
		var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
		return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
	}
	function timerExpired() {
		var time = now();
		if (shouldInvoke(time)) return trailingEdge(time);
		timerId = setTimeout(timerExpired, remainingWait(time));
	}
	function trailingEdge(time) {
		timerId = void 0;
		if (trailing && lastArgs) return invokeFunc(time);
		lastArgs = lastThis = void 0;
		return result;
	}
	function cancel() {
		if (timerId !== void 0) clearTimeout(timerId);
		lastInvokeTime = 0;
		lastArgs = lastCallTime = lastThis = timerId = void 0;
	}
	function flush() {
		return timerId === void 0 ? result : trailingEdge(now());
	}
	function debounced() {
		var time = now(), isInvoking = shouldInvoke(time);
		lastArgs = arguments;
		lastThis = this;
		lastCallTime = time;
		if (isInvoking) {
			if (timerId === void 0) return leadingEdge(lastCallTime);
			if (maxing) {
				clearTimeout(timerId);
				timerId = setTimeout(timerExpired, wait);
				return invokeFunc(lastCallTime);
			}
		}
		if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
		return result;
	}
	debounced.cancel = cancel;
	debounced.flush = flush;
	return debounced;
}
var FUNC_ERROR_TEXT$1, nativeMax, nativeMin;
var init_debounce = __esmMin((() => {
	init_isObject();
	init_now();
	init_toNumber();
	FUNC_ERROR_TEXT$1 = "Expected a function";
	nativeMax = Math.max;
	nativeMin = Math.min;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/last.js
/**
* Gets the last element of `array`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Array
* @param {Array} array The array to query.
* @returns {*} Returns the last element of `array`.
* @example
*
* _.last([1, 2, 3]);
* // => 3
*/
function last(array) {
	var length = array == null ? 0 : array.length;
	return length ? array[length - 1] : void 0;
}
var init_last = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_parent.js
/**
* Gets the parent value at `path` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Array} path The path to get the parent value of.
* @returns {*} Returns the parent value.
*/
function parent(object, path) {
	return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var init__parent = __esmMin((() => {
	init__baseGet();
	init__baseSlice();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
/**
* Performs a deep comparison between two values to determine if they are
* equivalent.
*
* **Note:** This method supports comparing arrays, array buffers, booleans,
* date objects, error objects, maps, numbers, `Object` objects, regexes,
* sets, strings, symbols, and typed arrays. `Object` objects are compared
* by their own, not inherited, enumerable properties. Functions and DOM
* nodes are compared by strict equality, i.e. `===`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.isEqual(object, other);
* // => true
*
* object === other;
* // => false
*/
function isEqual(value, other) {
	return baseIsEqual(value, other);
}
var init_isEqual = __esmMin((() => {
	init__baseIsEqual();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnset.js
/**
* The base implementation of `_.unset`.
*
* @private
* @param {Object} object The object to modify.
* @param {Array|string} path The property path to unset.
* @returns {boolean} Returns `true` if the property is deleted, else `false`.
*/
function baseUnset(object, path) {
	path = castPath(path, object);
	var index = -1, length = path.length;
	if (!length) return true;
	while (++index < length) {
		var key = toKey(path[index]);
		if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) return false;
		if ((key === "constructor" || key === "prototype") && index < length - 1) return false;
	}
	var obj = parent(object, path);
	return obj == null || delete obj[toKey(last(path))];
}
var hasOwnProperty;
var init__baseUnset = __esmMin((() => {
	init__castPath();
	init_last();
	init__parent();
	init__toKey();
	hasOwnProperty = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_customOmitClone.js
/**
* Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
* objects.
*
* @private
* @param {*} value The value to inspect.
* @param {string} key The key of the property to inspect.
* @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
*/
function customOmitClone(value) {
	return isPlainObject(value) ? void 0 : value;
}
var init__customOmitClone = __esmMin((() => {
	init_isPlainObject();
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/omit.js
var CLONE_DEEP_FLAG, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG, omit;
var init_omit = __esmMin((() => {
	init__arrayMap();
	init__baseClone();
	init__baseUnset();
	init__castPath();
	init__copyObject();
	init__customOmitClone();
	init__flatRest();
	init__getAllKeysIn();
	CLONE_DEEP_FLAG = 1;
	CLONE_FLAT_FLAG = 2;
	CLONE_SYMBOLS_FLAG = 4;
	omit = flatRest(function(object, paths) {
		var result = {};
		if (object == null) return result;
		var isDeep = false;
		paths = arrayMap(paths, function(path) {
			path = castPath(path, object);
			isDeep || (isDeep = path.length > 1);
			return path;
		});
		copyObject(object, getAllKeysIn(object), result);
		if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		var length = paths.length;
		while (length--) baseUnset(result, paths[length]);
		return result;
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/throttle.js
/**
* Creates a throttled function that only invokes `func` at most once per
* every `wait` milliseconds. The throttled function comes with a `cancel`
* method to cancel delayed `func` invocations and a `flush` method to
* immediately invoke them. Provide `options` to indicate whether `func`
* should be invoked on the leading and/or trailing edge of the `wait`
* timeout. The `func` is invoked with the last arguments provided to the
* throttled function. Subsequent calls to the throttled function return the
* result of the last `func` invocation.
*
* **Note:** If `leading` and `trailing` options are `true`, `func` is
* invoked on the trailing edge of the timeout only if the throttled function
* is invoked more than once during the `wait` timeout.
*
* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
* until to the next tick, similar to `setTimeout` with a timeout of `0`.
*
* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
* for details over the differences between `_.throttle` and `_.debounce`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to throttle.
* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
* @param {Object} [options={}] The options object.
* @param {boolean} [options.leading=true]
*  Specify invoking on the leading edge of the timeout.
* @param {boolean} [options.trailing=true]
*  Specify invoking on the trailing edge of the timeout.
* @returns {Function} Returns the new throttled function.
* @example
*
* // Avoid excessively updating the position while scrolling.
* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
*
* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
* jQuery(element).on('click', throttled);
*
* // Cancel the trailing throttled invocation.
* jQuery(window).on('popstate', throttled.cancel);
*/
function throttle$1(func, wait, options) {
	var leading = true, trailing = true;
	if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
	if (isObject(options)) {
		leading = "leading" in options ? !!options.leading : leading;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}
	return debounce$1(func, wait, {
		"leading": leading,
		"maxWait": wait,
		"trailing": trailing
	});
}
var FUNC_ERROR_TEXT;
var init_throttle = __esmMin((() => {
	init_debounce();
	init_isObject();
	FUNC_ERROR_TEXT = "Expected a function";
}));
//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/lodash.js
var init_lodash = __esmMin((() => {
	init_isSymbol();
	init__baseToString();
	init_toNumber();
	init_identity();
	init__WeakMap();
	init__baseCreate();
	init_isObject();
	init__root();
	init__apply();
	init_isArray();
	init_isObjectLike();
	init__copyArray();
	init__shortOut();
	init__setToString();
	init__arrayEach();
	init__isIndex();
	init__assignValue();
	init__copyObject();
	init__overRest();
	init_eq();
	init_isArrayLike();
	init__isPrototype();
	init_keys();
	init_keysIn();
	init__baseGet();
	init__flatRest();
	init__baseGetTag();
	init_isPlainObject();
	init__baseAssignValue();
	init__toKey();
	init_capitalize();
	init_toString();
	init__baseSlice();
	init__baseClone();
	init__arrayPush();
	init__baseFlatten();
	init__arrayMap();
	init__Stack();
	init__baseIsEqual();
	init__castPath();
	init_isArguments();
	init_isLength();
	init__isKey();
	init_constant();
	init__baseAssign();
	init_debounce();
	init__cloneBuffer();
	init__cloneTypedArray();
	init__initCloneObject();
	init_isBuffer();
	init_isFunction();
	init_isTypedArray();
	init__SetCache();
	init__baseUnary();
	init__cacheHas();
	init_last();
	init__getTag();
	init__mapToArray();
	init__arrayFilter();
	init_flatten();
	init__parent();
	init__nodeUtil();
	init__baseKeys();
	init_isEqual();
	init_isMap();
	init__baseIsNative();
	init__coreJsData();
	init_stubFalse();
	init_isSet();
	init__createCaseFirst();
	init_memoize();
	init__Symbol();
	init__setToArray();
	init__stringToArray();
	init_now();
	init_omit();
	init__getAllKeysIn();
	init__arraySome();
	init__castSlice();
	init__hasUnicode();
	init__baseUnset();
	init_upperFirst();
	init_stubArray();
	init_throttle();
	init__baseTimes();
	init__stringToPath();
	init__getPrototype();
	init__baseTrim();
	init__trimmedEndIndex();
	init__Set();
}));
/**
* @license
* Lodash (Custom Build) <https://lodash.com/>
* Build: `lodash modularize exports="es" --repo lodash/lodash#4.18.1 -o ./`
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/room.js
function RoomIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$16.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$16.jsx)("path", { d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z" })
	});
}
var import_react$22, import_jsx_runtime$16, room_default;
var init_room = __esmMin((() => {
	import_react$22 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$16 = require_jsx_runtime();
	RoomIcon.displayName = "RoomIcon";
	room_default = (0, import_react$22.forwardRef)(RoomIcon);
}));
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useCollapseFilters.ts
/**
* A hook to manage the wrapping of filters in the room list.
* It observes the filter list and hides filters that are wrapping when the list is not expanded.
* @param isExpanded
* @param wrappingClassName - the CSS class to apply to wrapping filters
* @returns an object containing:
* - `ref`: a ref to put on the filter list element
* - `isWrapping`: a boolean indicating if the filters are wrapping
* - `wrappingIndex`: the index of the first filter that is wrapping
*/
function useCollapseFilters(isExpanded, wrappingClassName) {
	const ref = (0, import_react$21.useRef)(null);
	const [isWrapping, setIsWrapping] = (0, import_react$21.useState)(false);
	const [wrappingIndex, setWrappingIndex] = (0, import_react$21.useState)(-1);
	(0, import_react$21.useEffect)(() => {
		if (!ref.current) return;
		const hideFilters = (list) => {
			let isWrapping = false;
			Array.from(list.children).forEach((node, i) => {
				const child = node;
				child.setAttribute("aria-hidden", "false");
				child.classList.remove(wrappingClassName);
				if (isExpanded) return;
				const previousSibling = child.previousElementSibling;
				if (previousSibling && child.offsetLeft <= previousSibling.offsetLeft) {
					if (!isWrapping) setWrappingIndex(i);
					isWrapping = true;
				}
				child.classList.toggle(wrappingClassName, isWrapping);
				child.setAttribute("aria-hidden", isWrapping.toString());
			});
			if (!isWrapping) setWrappingIndex(-1);
			setIsWrapping(isExpanded || isWrapping);
		};
		hideFilters(ref.current);
		const observer = new ResizeObserver((entries) => entries.forEach((entry) => hideFilters(entry.target)));
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [isExpanded, wrappingClassName]);
	return {
		ref,
		isWrapping,
		wrappingIndex
	};
}
var import_react$21;
var init_useCollapseFilters = __esmMin((() => {
	import_react$21 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region src/room-list/RoomListPrimaryFilters/useVisibleFilters.ts
/**
* A hook to sort the filter IDs by active state.
* The list is sorted if the active filter index is greater than or equal to the wrapping index.
* If the wrapping index is -1, the filters are not sorted.
*
* @param filterIds - the list of filter IDs to sort.
* @param activeFilterId - the currently active filter ID (if any).
* @param wrappingIndex - the index of the first filter that is wrapping.
*/
function useVisibleFilters(filterIds, activeFilterId, wrappingIndex) {
	const [sortedFilterIds, setSortedFilterIds] = (0, import_react$20.useState)(filterIds);
	(0, import_react$20.useEffect)(() => {
		if (!((activeFilterId ? filterIds.indexOf(activeFilterId) : -1) >= wrappingIndex) || wrappingIndex === -1) {
			setSortedFilterIds(filterIds);
			return;
		}
		setSortedFilterIds(filterIds.slice().sort((filterA, filterB) => {
			if (filterA === activeFilterId && filterB !== activeFilterId) return -1;
			if (filterA !== activeFilterId && filterB === activeFilterId) return 1;
			return 0;
		}));
	}, [
		filterIds,
		activeFilterId,
		wrappingIndex
	]);
	return sortedFilterIds;
}
var import_react$20;
var init_useVisibleFilters = __esmMin((() => {
	import_react$20 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region src/room-list/RoomListPrimaryFilters/RoomListPrimaryFilters.module.css
var roomListPrimaryFilters, list$1, iconButton, RoomListPrimaryFilters_module_default;
var init_RoomListPrimaryFilters_module = __esmMin((() => {
	roomListPrimaryFilters = "_roomListPrimaryFilters_1o2qy_9";
	list$1 = "_list_1o2qy_18";
	iconButton = "_iconButton_1o2qy_28";
	RoomListPrimaryFilters_module_default = {
		roomListPrimaryFilters,
		list: list$1,
		iconButton
	};
}));
//#endregion
//#region src/room-list/RoomListPrimaryFilters/RoomListPrimaryFilters.tsx
var import_react$19, import_jsx_runtime$15, filterIdToLabel, RoomListPrimaryFilters;
var init_RoomListPrimaryFilters$1 = __esmMin((() => {
	import_react$19 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$4();
	init_chevron_down();
	init_Flex();
	init_i18n();
	init_useCollapseFilters();
	init_useVisibleFilters();
	init_RoomListPrimaryFilters_module();
	import_jsx_runtime$15 = require_jsx_runtime();
	filterIdToLabel = (filterId) => {
		switch (filterId) {
			case "unread": return _t$1("room_list|filters|unread");
			case "people": return _t$1("room_list|filters|people");
			case "rooms": return _t$1("room_list|filters|rooms");
			case "favourite": return _t$1("room_list|filters|favourite");
			case "mentions": return _t$1("room_list|filters|mentions");
			case "invites": return _t$1("room_list|filters|invites");
			case "low_priority": return _t$1("room_list|filters|low_priority");
		}
	};
	RoomListPrimaryFilters = (0, import_react$19.memo)(function RoomListPrimaryFilters({ filterIds, activeFilterId, onToggleFilter }) {
		const id = (0, import_react$19.useId)();
		const [isExpanded, setIsExpanded] = (0, import_react$19.useState)(false);
		const { ref, isWrapping: displayChevron, wrappingIndex } = useCollapseFilters(isExpanded, "wrapping");
		const visibleFilterIds = useVisibleFilters(filterIds, activeFilterId, wrappingIndex);
		return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)(Flex, {
			className: RoomListPrimaryFilters_module_default.roomListPrimaryFilters,
			"data-testid": "primary-filters",
			gap: "var(--cpd-space-3x)",
			direction: "row-reverse",
			justify: "space-between",
			children: [displayChevron && /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(IconButton, {
				kind: "secondary",
				"aria-expanded": isExpanded,
				"aria-controls": id,
				className: RoomListPrimaryFilters_module_default.iconButton,
				"aria-label": isExpanded ? _t$1("room_list|collapse_filters") : _t$1("room_list|expand_filters"),
				size: "28px",
				onClick: () => setIsExpanded((expanded) => !expanded),
				children: /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(chevron_down_default, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(Flex, {
				id,
				as: "div",
				role: "listbox",
				"aria-label": _t$1("room_list|primary_filters"),
				align: "center",
				gap: "var(--cpd-space-2x)",
				wrap: "wrap",
				className: RoomListPrimaryFilters_module_default.list,
				ref,
				children: visibleFilterIds.map((filterId, index) => /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(ChatFilter, {
					role: "option",
					tabIndex: 0,
					"aria-selected": filterId === activeFilterId,
					selected: filterId === activeFilterId,
					onClick: () => onToggleFilter(filterId),
					children: filterIdToLabel(filterId)
				}, `${filterId}-${index}`))
			})]
		});
	});
	RoomListPrimaryFilters.__docgenInfo = {
		"description": "The primary filters component for the room list.\nDisplays a collapsible list of filters with expand/collapse functionality.",
		"methods": [],
		"displayName": "RoomListPrimaryFilters",
		"props": {
			"filterIds": {
				"required": true,
				"tsType": {
					"name": "Array",
					"elements": [{
						"name": "union",
						"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
						"elements": [
							{
								"name": "literal",
								"value": "\"unread\""
							},
							{
								"name": "literal",
								"value": "\"people\""
							},
							{
								"name": "literal",
								"value": "\"rooms\""
							},
							{
								"name": "literal",
								"value": "\"favourite\""
							},
							{
								"name": "literal",
								"value": "\"mentions\""
							},
							{
								"name": "literal",
								"value": "\"invites\""
							},
							{
								"name": "literal",
								"value": "\"low_priority\""
							}
						]
					}],
					"raw": "FilterId[]"
				},
				"description": "Array of filter IDs to display"
			},
			"activeFilterId": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
					"elements": [
						{
							"name": "literal",
							"value": "\"unread\""
						},
						{
							"name": "literal",
							"value": "\"people\""
						},
						{
							"name": "literal",
							"value": "\"rooms\""
						},
						{
							"name": "literal",
							"value": "\"favourite\""
						},
						{
							"name": "literal",
							"value": "\"mentions\""
						},
						{
							"name": "literal",
							"value": "\"invites\""
						},
						{
							"name": "literal",
							"value": "\"low_priority\""
						}
					]
				},
				"description": "Currently active filter ID (if any)"
			},
			"onToggleFilter": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(filterId: FilterId) => void",
					"signature": {
						"arguments": [{
							"type": {
								"name": "union",
								"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
								"elements": [
									{
										"name": "literal",
										"value": "\"unread\""
									},
									{
										"name": "literal",
										"value": "\"people\""
									},
									{
										"name": "literal",
										"value": "\"rooms\""
									},
									{
										"name": "literal",
										"value": "\"favourite\""
									},
									{
										"name": "literal",
										"value": "\"mentions\""
									},
									{
										"name": "literal",
										"value": "\"invites\""
									},
									{
										"name": "literal",
										"value": "\"low_priority\""
									}
								]
							},
							"name": "filterId"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Callback when a filter is toggled"
			}
		}
	};
}));
//#endregion
//#region src/room-list/RoomListPrimaryFilters/index.ts
var init_RoomListPrimaryFilters = __esmMin((() => {
	init_RoomListPrimaryFilters$1();
	init_useCollapseFilters();
	init_useVisibleFilters();
}));
//#endregion
//#region src/room-list/RoomListView/RoomListLoadingSkeleton.module.css
var skeleton, RoomListLoadingSkeleton_module_default;
var init_RoomListLoadingSkeleton_module = __esmMin((() => {
	skeleton = "_skeleton_2sqf6_9";
	RoomListLoadingSkeleton_module_default = { skeleton };
})), import_jsx_runtime$14, RoomListLoadingSkeleton;
var init_RoomListLoadingSkeleton = __esmMin((() => {
	require_react();
	init_RoomListLoadingSkeleton_module();
	import_jsx_runtime$14 = require_jsx_runtime();
	RoomListLoadingSkeleton = () => {
		return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("div", { className: RoomListLoadingSkeleton_module_default.skeleton });
	};
	RoomListLoadingSkeleton.__docgenInfo = {
		"description": "Loading skeleton component for the room list.\nDisplays a repeating skeleton pattern while rooms are being fetched.",
		"methods": [],
		"displayName": "RoomListLoadingSkeleton"
	};
}));
//#endregion
//#region src/room-list/RoomListView/RoomListEmptyStateView.module.css
var genericPlaceholder, title$1, description, defaultPlaceholder, RoomListEmptyStateView_module_default;
var init_RoomListEmptyStateView_module = __esmMin((() => {
	genericPlaceholder = "_genericPlaceholder_1kv6w_9";
	title$1 = "_title_1kv6w_17";
	description = "_description_1kv6w_22";
	defaultPlaceholder = "_defaultPlaceholder_1kv6w_28";
	RoomListEmptyStateView_module_default = {
		genericPlaceholder,
		title: title$1,
		description,
		defaultPlaceholder
	};
}));
//#endregion
//#region src/room-list/RoomListView/RoomListEmptyStateView.tsx
/**
* A generic placeholder for the room list
*/
function GenericPlaceholder({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsxs)(Flex, {
		"data-testid": "empty-room-list",
		className: RoomListEmptyStateView_module_default.genericPlaceholder,
		direction: "column",
		align: "stretch",
		justify: "center",
		gap: "var(--cpd-space-2x)",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("span", {
				className: RoomListEmptyStateView_module_default.title,
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("span", {
				className: RoomListEmptyStateView_module_default.description,
				children: description
			}),
			children
		]
	});
}
/**
* A placeholder for the room list when a filter is active
* The user can take action to toggle the filter
*/
function ActionPlaceholder({ title, action, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(GenericPlaceholder, {
		title,
		children: onAction && /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Button, {
			kind: "tertiary",
			onClick: onAction,
			children: action
		})
	});
}
var import_jsx_runtime$13, RoomListEmptyStateView;
var init_RoomListEmptyStateView = __esmMin((() => {
	require_react();
	init_dist$4();
	init_chat();
	init_room();
	init_Flex();
	init_i18n();
	init_viewmodel();
	init_RoomListEmptyStateView_module();
	import_jsx_runtime$13 = require_jsx_runtime();
	RoomListEmptyStateView = ({ vm }) => {
		const snapshot = useViewModel(vm);
		if (!snapshot.activeFilterId) return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(GenericPlaceholder, {
			title: _t$1("room_list|empty|no_chats"),
			description: snapshot.canCreateRoom ? _t$1("room_list|empty|no_chats_description") : _t$1("room_list|empty|no_chats_description_no_room_rights"),
			children: /* @__PURE__ */ (0, import_jsx_runtime$13.jsxs)(Flex, {
				className: RoomListEmptyStateView_module_default.defaultPlaceholder,
				align: "center",
				justify: "center",
				direction: "column",
				gap: "var(--cpd-space-4x)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Button, {
					size: "md",
					kind: "secondary",
					Icon: chat_default,
					onClick: vm.createChatRoom,
					children: _t$1("action|start_chat")
				}), snapshot.canCreateRoom && /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Button, {
					size: "md",
					kind: "secondary",
					Icon: room_default,
					onClick: vm.createRoom,
					children: _t$1("action|new_room")
				})]
			})
		});
		switch (snapshot.activeFilterId) {
			case "people": return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(GenericPlaceholder, {
				title: _t$1("room_list|empty|no_people"),
				description: _t$1("room_list|empty|no_people_description")
			});
			case "rooms": return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(GenericPlaceholder, {
				title: _t$1("room_list|empty|no_rooms"),
				description: _t$1("room_list|empty|no_rooms_description")
			});
			case "unread": return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(ActionPlaceholder, {
				title: _t$1("room_list|empty|no_unread"),
				action: _t$1("room_list|empty|show_chats"),
				onAction: () => vm.onToggleFilter(snapshot.activeFilterId)
			});
			case "invites": return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(ActionPlaceholder, {
				title: _t$1("room_list|empty|no_invites"),
				action: _t$1("room_list|empty|show_activity"),
				onAction: () => vm.onToggleFilter(snapshot.activeFilterId)
			});
			case "mentions": return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(ActionPlaceholder, {
				title: _t$1("room_list|empty|no_mentions"),
				action: _t$1("room_list|empty|show_activity"),
				onAction: () => vm.onToggleFilter(snapshot.activeFilterId)
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(GenericPlaceholder, {
				title: _t$1("room_list|empty|no_chats"),
				description: _t$1("room_list|empty|no_chats_description")
			});
		}
	};
	RoomListEmptyStateView.__docgenInfo = {
		"description": "Empty state component for the room list.\nDisplays appropriate message and actions based on the active filter.",
		"methods": [],
		"displayName": "RoomListEmptyStateView",
		"props": { "vm": {
			"required": true,
			"tsType": {
				"name": "intersection",
				"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
				"elements": [{
					"name": "signature",
					"type": "object",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
					"signature": { "properties": [{
						"key": "getSnapshot",
						"value": {
							"name": "signature",
							"type": "function",
							"raw": "() => Snapshot",
							"signature": {
								"arguments": [],
								"return": {
									"name": "signature",
									"type": "object",
									"raw": "{\n    /** Whether the rooms are currently loading */\n    isLoadingRooms: boolean;\n    /** Whether the room list is empty */\n    isRoomListEmpty: boolean;\n    /** Array of filter IDs */\n    filterIds: FilterId[];\n    /** Currently active filter ID (if any) */\n    activeFilterId?: FilterId;\n    /** Room list state */\n    roomListState: RoomListViewState;\n    /** Array of sections in the room list */\n    sections: RoomListSection[];\n    /** Optional description for the empty state */\n    emptyStateDescription?: string;\n    /** Optional action element for the empty state */\n    emptyStateAction?: ReactNode;\n    /** Whether the user can create rooms */\n    canCreateRoom?: boolean;\n    /** Whether the room list is displayed as a flat list */\n    isFlatList: boolean;\n    /**\n     * The single toast to display (if any). The view model owns which toast wins when more\n     * than one applies (e.g. a transient \"chat_moved\" event toast takes precedence over the\n     * persistent \"unread_activity\" toast), so the view just renders whatever it is given.\n     */\n    toast?: ToastType;\n}",
									"signature": { "properties": [
										{
											"key": "isLoadingRooms",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether the rooms are currently loading"
										},
										{
											"key": "isRoomListEmpty",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether the room list is empty"
										},
										{
											"key": "filterIds",
											"value": {
												"name": "Array",
												"elements": [{
													"name": "union",
													"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
													"elements": [
														{
															"name": "literal",
															"value": "\"unread\""
														},
														{
															"name": "literal",
															"value": "\"people\""
														},
														{
															"name": "literal",
															"value": "\"rooms\""
														},
														{
															"name": "literal",
															"value": "\"favourite\""
														},
														{
															"name": "literal",
															"value": "\"mentions\""
														},
														{
															"name": "literal",
															"value": "\"invites\""
														},
														{
															"name": "literal",
															"value": "\"low_priority\""
														}
													],
													"required": false
												}],
												"raw": "FilterId[]",
												"required": true
											},
											"description": "Array of filter IDs"
										},
										{
											"key": "activeFilterId",
											"value": {
												"name": "union",
												"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
												"elements": [
													{
														"name": "literal",
														"value": "\"unread\""
													},
													{
														"name": "literal",
														"value": "\"people\""
													},
													{
														"name": "literal",
														"value": "\"rooms\""
													},
													{
														"name": "literal",
														"value": "\"favourite\""
													},
													{
														"name": "literal",
														"value": "\"mentions\""
													},
													{
														"name": "literal",
														"value": "\"invites\""
													},
													{
														"name": "literal",
														"value": "\"low_priority\""
													}
												],
												"required": false
											},
											"description": "Currently active filter ID (if any)"
										},
										{
											"key": "roomListState",
											"value": {
												"name": "RoomListViewState",
												"required": true
											},
											"description": "Room list state"
										},
										{
											"key": "sections",
											"value": {
												"name": "Array",
												"elements": [{
													"name": "signature",
													"type": "object",
													"raw": "{\n    /** Unique identifier for the section */\n    id: string;\n    /** Array of room IDs that belong to this section */\n    roomIds: string[];\n}",
													"signature": { "properties": [{
														"key": "id",
														"value": {
															"name": "string",
															"required": true
														},
														"description": "Unique identifier for the section"
													}, {
														"key": "roomIds",
														"value": {
															"name": "Array",
															"elements": [{ "name": "string" }],
															"raw": "string[]",
															"required": true
														},
														"description": "Array of room IDs that belong to this section"
													}] }
												}],
												"raw": "RoomListSection[]",
												"required": true
											},
											"description": "Array of sections in the room list"
										},
										{
											"key": "emptyStateDescription",
											"value": {
												"name": "string",
												"required": false
											},
											"description": "Optional description for the empty state"
										},
										{
											"key": "emptyStateAction",
											"value": {
												"name": "ReactNode",
												"required": false
											},
											"description": "Optional action element for the empty state"
										},
										{
											"key": "canCreateRoom",
											"value": {
												"name": "boolean",
												"required": false
											},
											"description": "Whether the user can create rooms"
										},
										{
											"key": "isFlatList",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether the room list is displayed as a flat list"
										},
										{
											"key": "toast",
											"value": {
												"name": "union",
												"raw": "| \"section_created\"\n| \"chat_moved\"\n// Persistent, clickable toast surfacing unread activity below the visible area.\n| \"unread_activity\"",
												"elements": [
													{
														"name": "literal",
														"value": "\"section_created\""
													},
													{
														"name": "literal",
														"value": "\"chat_moved\""
													},
													{
														"name": "literal",
														"value": "\"unread_activity\""
													}
												],
												"required": false
											},
											"description": "The single toast to display (if any). The view model owns which toast wins when more\nthan one applies (e.g. a transient \"chat_moved\" event toast takes precedence over the\npersistent \"unread_activity\" toast), so the view just renders whatever it is given."
										}
									] }
								}
							},
							"required": true
						},
						"description": "The current snapshot of the view model."
					}, {
						"key": "subscribe",
						"value": {
							"name": "signature",
							"type": "function",
							"raw": "(listener: () => void) => () => void",
							"signature": {
								"arguments": [{
									"type": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									},
									"name": "listener"
								}],
								"return": {
									"name": "signature",
									"type": "function",
									"raw": "() => void",
									"signature": {
										"arguments": [],
										"return": { "name": "void" }
									}
								}
							},
							"required": true
						},
						"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
					}] }
				}, {
					"name": "signature",
					"type": "object",
					"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
					"signature": { "properties": [{
						"key": {
							"name": "RoomListViewActions",
							"required": true
						},
						"value": { "name": "unknown" }
					}] }
				}]
			},
			"description": "The view model containing all data and callbacks"
		} }
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@preact+signals-core@1.14.2/node_modules/@preact/signals-core/dist/signals-core.module.js
function t() {
	if (!(s > 1)) {
		var i, t = !1;
		(function() {
			var i = c;
			c = void 0;
			while (void 0 !== i) {
				if (i.S.v === i.v) i.S.i = i.i;
				i = i.o;
			}
		})();
		while (void 0 !== h) {
			var n = h;
			h = void 0;
			v++;
			while (void 0 !== n) {
				var r = n.u;
				n.u = void 0;
				n.f &= -3;
				if (!(8 & n.f) && w(n)) try {
					n.c();
				} catch (n) {
					if (!t) {
						i = n;
						t = !0;
					}
				}
				n = r;
			}
		}
		v = 0;
		s--;
		if (t) throw i;
	} else s--;
}
function n(i) {
	if (s > 0) return i();
	e = ++u;
	s++;
	try {
		return i();
	} finally {
		t();
	}
}
function o(i) {
	var t = r;
	r = void 0;
	try {
		return i();
	} finally {
		r = t;
	}
}
function a(i) {
	if (void 0 !== r) {
		var t = i.n;
		if (void 0 === t || t.t !== r) {
			t = {
				i: 0,
				S: i,
				p: r.s,
				n: void 0,
				t: r,
				e: void 0,
				x: void 0,
				r: t
			};
			if (void 0 !== r.s) r.s.n = t;
			r.s = t;
			i.n = t;
			if (32 & r.f) i.S(t);
			return t;
		} else if (-1 === t.i) {
			t.i = 0;
			if (void 0 !== t.n) {
				t.n.p = t.p;
				if (void 0 !== t.p) t.p.n = t.n;
				t.p = r.s;
				t.n = void 0;
				r.s.n = t;
				r.s = t;
			}
			return t;
		}
	}
}
function l(i, t) {
	this.v = i;
	this.i = 0;
	this.n = void 0;
	this.t = void 0;
	this.l = 0;
	this.W = null == t ? void 0 : t.watched;
	this.Z = null == t ? void 0 : t.unwatched;
	this.name = null == t ? void 0 : t.name;
}
function y(i, t) {
	return new l(i, t);
}
function w(i) {
	for (var t = i.s; void 0 !== t; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function _$1(i) {
	for (var t = i.s; void 0 !== t; t = t.n) {
		var n = t.S.n;
		if (void 0 !== n) t.r = n;
		t.S.n = t;
		t.i = -1;
		if (void 0 === t.n) {
			i.s = t;
			break;
		}
	}
}
function b(i) {
	var t = i.s, n = void 0;
	while (void 0 !== t) {
		var r = t.p;
		if (-1 === t.i) {
			t.S.U(t);
			if (void 0 !== r) r.n = t.n;
			if (void 0 !== t.n) t.n.p = r;
		} else n = t;
		t.S.n = t.r;
		if (void 0 !== t.r) t.r = void 0;
		t = r;
	}
	i.s = n;
}
function p(i, t) {
	l.call(this, void 0);
	this.x = i;
	this.s = void 0;
	this.g = d - 1;
	this.f = 4;
	this.W = null == t ? void 0 : t.watched;
	this.Z = null == t ? void 0 : t.unwatched;
	this.name = null == t ? void 0 : t.name;
}
function g(i, t) {
	return new p(i, t);
}
function S(i) {
	var n = i.m;
	i.m = void 0;
	if ("function" == typeof n) {
		s++;
		var o = r;
		r = void 0;
		try {
			n();
		} catch (t) {
			i.f &= -2;
			i.f |= 8;
			m(i);
			throw t;
		} finally {
			r = o;
			t();
		}
	}
}
function m(i) {
	for (var t = i.s; void 0 !== t; t = t.n) t.S.U(t);
	i.x = void 0;
	i.s = void 0;
	S(i);
}
function x$1(i) {
	if (r !== this) throw new Error("Out-of-order effect");
	b(this);
	r = i;
	this.f &= -2;
	if (8 & this.f) m(this);
	t();
}
function E$1(i, t) {
	this.x = i;
	this.m = void 0;
	this.s = void 0;
	this.u = void 0;
	this.f = 32;
	this.name = null == t ? void 0 : t.name;
	if (f) f.push(this);
}
function j$1(i, t) {
	var n = new E$1(i, t);
	try {
		n.c();
	} catch (i) {
		n.d();
		throw i;
	}
	var r = n.d.bind(n);
	r[Symbol.dispose] = r;
	return r;
}
var i, r, f, h, s, v, u, e, c, d;
var init_signals_core_module = __esmMin((() => {
	i = Symbol.for("preact-signals");
	r = void 0;
	h = void 0;
	s = 0;
	v = 0;
	u = 0;
	e = 0;
	c = void 0;
	d = 0;
	l.prototype.brand = i;
	l.prototype.h = function() {
		return !0;
	};
	l.prototype.S = function(i) {
		var t = this, n = this.t;
		if (n !== i && void 0 === i.e) {
			i.x = n;
			this.t = i;
			if (void 0 !== n) n.e = i;
			else o(function() {
				var i;
				null == (i = t.W) || i.call(t);
			});
		}
	};
	l.prototype.U = function(i) {
		var t = this;
		if (void 0 !== this.t) {
			var n = i.e, r = i.x;
			if (void 0 !== n) {
				n.x = r;
				i.e = void 0;
			}
			if (void 0 !== r) {
				r.e = n;
				i.x = void 0;
			}
			if (i === this.t) {
				this.t = r;
				if (void 0 === r) o(function() {
					var i;
					null == (i = t.Z) || i.call(t);
				});
			}
		}
	};
	l.prototype.subscribe = function(i) {
		var t = this;
		return j$1(function() {
			var n = t.value, o = r;
			r = void 0;
			try {
				i(n);
			} finally {
				r = o;
			}
		}, { name: "sub" });
	};
	l.prototype.valueOf = function() {
		return this.value;
	};
	l.prototype.toString = function() {
		return this.value + "";
	};
	l.prototype.toJSON = function() {
		return this.value;
	};
	l.prototype.peek = function() {
		var i = this;
		return o(function() {
			return i.value;
		});
	};
	Object.defineProperty(l.prototype, "value", {
		get: function() {
			var i = a(this);
			if (void 0 !== i) i.i = this.i;
			return this.v;
		},
		set: function(i) {
			if (i !== this.v) {
				if (v > 100) throw new Error("Cycle detected");
				(function(i) {
					if (0 !== s && 0 === v) {
						if (i.l !== e) {
							i.l = e;
							c = {
								S: i,
								v: i.v,
								i: i.i,
								o: c
							};
						}
					}
				})(this);
				this.v = i;
				this.i++;
				d++;
				s++;
				try {
					for (var n = this.t; void 0 !== n; n = n.x) n.t.N();
				} finally {
					t();
				}
			}
		}
	});
	p.prototype = new l();
	p.prototype.h = function() {
		this.f &= -3;
		if (1 & this.f) return !1;
		if (32 == (36 & this.f)) return !0;
		this.f &= -5;
		if (this.g === d) return !0;
		this.g = d;
		this.f |= 1;
		if (this.i > 0 && !w(this)) {
			this.f &= -2;
			return !0;
		}
		var i = r;
		try {
			_$1(this);
			r = this;
			var t = this.x();
			if (16 & this.f || this.v !== t || 0 === this.i) {
				this.v = t;
				this.f &= -17;
				this.i++;
			}
		} catch (i) {
			this.v = i;
			this.f |= 16;
			this.i++;
		}
		r = i;
		b(this);
		this.f &= -2;
		return !0;
	};
	p.prototype.S = function(i) {
		if (void 0 === this.t) {
			this.f |= 36;
			for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
		}
		l.prototype.S.call(this, i);
	};
	p.prototype.U = function(i) {
		if (void 0 !== this.t) {
			l.prototype.U.call(this, i);
			if (void 0 === this.t) {
				this.f &= -33;
				for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
			}
		}
	};
	p.prototype.N = function() {
		if (!(2 & this.f)) {
			this.f |= 6;
			for (var i = this.t; void 0 !== i; i = i.x) i.t.N();
		}
	};
	Object.defineProperty(p.prototype, "value", { get: function() {
		if (1 & this.f) throw new Error("Cycle detected");
		var i = a(this);
		this.h();
		if (void 0 !== i) i.i = this.i;
		if (16 & this.f) throw this.v;
		return this.v;
	} });
	E$1.prototype.c = function() {
		var i = this.S();
		try {
			if (8 & this.f) return;
			if (void 0 === this.x) return;
			var t = this.x();
			if ("function" == typeof t) this.m = t;
		} finally {
			i();
		}
	};
	E$1.prototype.S = function() {
		if (1 & this.f) throw new Error("Cycle detected");
		this.f |= 1;
		this.f &= -9;
		S(this);
		_$1(this);
		s++;
		var i = r;
		r = this;
		return x$1.bind(this, i);
	};
	E$1.prototype.N = function() {
		if (!(2 & this.f)) {
			this.f |= 2;
			this.u = h;
			h = this;
		}
	};
	E$1.prototype.d = function() {
		this.f |= 8;
		if (!(1 & this.f)) m(this);
	};
	E$1.prototype.dispose = function() {
		this.d();
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+state@0.5.0/node_modules/@dnd-kit/state/dist/index.mjs
function computed(compute, comparator) {
	if (comparator) {
		let previousValue;
		return g(() => {
			const value = compute();
			if (value && previousValue && comparator(previousValue, value)) return previousValue;
			previousValue = value;
			return value;
		});
	}
	return g(compute);
}
function deepEqual(a, b) {
	if (Object.is(a, b)) return true;
	if (a === null || b === null) return false;
	if (typeof a === "function" && typeof b === "function") return a === b;
	if (a instanceof Set && b instanceof Set) {
		if (a.size !== b.size) return false;
		for (const value of a) if (!b.has(value)) return false;
		return true;
	}
	if (Array.isArray(a)) {
		if (!Array.isArray(b) || a.length !== b.length) return false;
		return !a.some((value, index) => !deepEqual(value, b[index]));
	}
	if (typeof a === "object" && typeof b === "object") {
		const aKeys = Object.keys(a);
		const bKeys = Object.keys(b);
		if (aKeys.length !== bKeys.length) return false;
		return !aKeys.some((key) => !deepEqual(a[key], b[key]));
	}
	return false;
}
function reactive({ get }, _) {
	return {
		init(value) {
			return y(value);
		},
		get() {
			return get.call(this).value;
		},
		set(newValue) {
			const current = get.call(this);
			if (current.peek() === newValue) return;
			current.value = newValue;
		}
	};
}
function derived(target, _) {
	const map = /* @__PURE__ */ new WeakMap();
	return function() {
		let result = map.get(this);
		if (!result) {
			result = computed(target.bind(this));
			map.set(this, result);
		}
		return result.value;
	};
}
function enumerable(enumerable2 = true) {
	return function(_value, context) {
		context.addInitializer(function() {
			const host = context.kind === "field" ? this : context.static ? this : Object.getPrototypeOf(this);
			const descriptor = Object.getOwnPropertyDescriptor(host, context.name);
			if (descriptor) Object.defineProperty(host, context.name, __spreadProps$4(__spreadValues$5({}, descriptor), { enumerable: enumerable2 }));
		});
	};
}
function effects(...entries) {
	const effects2 = entries.map((fn) => j$1(fn));
	return () => effects2.forEach((cleanup) => cleanup());
}
function snapshot(value) {
	return o(() => {
		const output = {};
		for (const key in value) output[key] = value[key];
		return output;
	});
}
var __create$4, __defProp$5, __defProps$4, __getOwnPropDesc$4, __getOwnPropDescs$4, __getOwnPropSymbols$5, __hasOwnProp$5, __propIsEnum$5, __knownSymbol$4, __typeError$5, __defNormalProp$5, __spreadValues$5, __spreadProps$4, __name$3, __decoratorStart$4, __decoratorStrings$4, __expectFn$4, __decoratorContext$4, __decoratorMetadata$4, __runInitializers$4, __decorateElement$4, __accessCheck$5, __privateIn$3, __privateGet$5, __privateAdd$5, __privateSet$5, __privateMethod$4, _previous_dec, _initial_dec, _current_dec$1, _current_dec2, _previous_dec2, _initial_dec2, _init$4, _initial, _a$3, initial_get, initial_set, _ValueHistory_instances, _previous, _b$1, previous_get, previous_set, _current, _c$2, current_get, current_set, ValueHistory;
var init_dist$3 = __esmMin((() => {
	init_signals_core_module();
	__create$4 = Object.create;
	__defProp$5 = Object.defineProperty;
	__defProps$4 = Object.defineProperties;
	__getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
	__getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
	__getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
	__hasOwnProp$5 = Object.prototype.hasOwnProperty;
	__propIsEnum$5 = Object.prototype.propertyIsEnumerable;
	__knownSymbol$4 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
	__typeError$5 = (msg) => {
		throw TypeError(msg);
	};
	__defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__spreadValues$5 = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
		if (__getOwnPropSymbols$5) {
			for (var prop of __getOwnPropSymbols$5(b)) if (__propIsEnum$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
		}
		return a;
	};
	__spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
	__name$3 = (target, value) => __defProp$5(target, "name", {
		value,
		configurable: true
	});
	__decoratorStart$4 = (base) => {
		var _a2;
		return [
			,
			,
			,
			__create$4((_a2 = base == null ? void 0 : base[__knownSymbol$4("metadata")]) != null ? _a2 : null)
		];
	};
	__decoratorStrings$4 = [
		"class",
		"method",
		"getter",
		"setter",
		"accessor",
		"field",
		"value",
		"get",
		"set"
	];
	__expectFn$4 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$5("Function expected") : fn;
	__decoratorContext$4 = (kind, name, done, metadata, fns) => ({
		kind: __decoratorStrings$4[kind],
		name,
		metadata,
		addInitializer: (fn) => done._ ? __typeError$5("Already initialized") : fns.push(__expectFn$4(fn || null))
	});
	__decoratorMetadata$4 = (array, target) => __defNormalProp$5(target, __knownSymbol$4("metadata"), array[3]);
	__runInitializers$4 = (array, flags, self, value) => {
		for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
		return value;
	};
	__decorateElement$4 = (array, flags, name, decorators, target, extra) => {
		var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
		var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$4[k + 5];
		var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
		var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$4(k < 4 ? target : {
			get [name]() {
				return __privateGet$5(this, extra);
			},
			set [name](x) {
				return __privateSet$5(this, extra, x);
			}
		}, name));
		k ? p && k < 4 && __name$3(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$3(target, name);
		for (var i = decorators.length - 1; i >= 0; i--) {
			ctx = __decoratorContext$4(k, name, done = {}, array[3], extraInitializers);
			if (k) {
				ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$3(target, x) : (x) => name in x };
				if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$5 : __privateMethod$4)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
				if (k > 2) access.set = p ? (x, y) => __privateSet$5(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
			}
			it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
				get: desc.get,
				set: desc.set
			} : target, ctx), done._ = 1;
			if (k ^ 4 || it === void 0) __expectFn$4(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
			else if (typeof it !== "object" || it === null) __typeError$5("Object expected");
			else __expectFn$4(fn = it.get) && (desc.get = fn), __expectFn$4(fn = it.set) && (desc.set = fn), __expectFn$4(fn = it.init) && initializers.unshift(fn);
		}
		return k || __decoratorMetadata$4(array, target), desc && __defProp$5(target, name, desc), p ? k ^ 4 ? extra : desc : target;
	};
	__accessCheck$5 = (obj, member, msg) => member.has(obj) || __typeError$5("Cannot " + msg);
	__privateIn$3 = (member, obj) => Object(obj) !== obj ? __typeError$5("Cannot use the \"in\" operator on this value") : member.has(obj);
	__privateGet$5 = (obj, member, getter) => (__accessCheck$5(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	__privateAdd$5 = (obj, member, value) => member.has(obj) ? __typeError$5("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet$5 = (obj, member, value, setter) => (__accessCheck$5(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	__privateMethod$4 = (obj, member, method) => (__accessCheck$5(obj, member, "access private method"), method);
	_initial_dec2 = [reactive];
	_previous_dec2 = [reactive], _current_dec2 = [reactive], _current_dec$1 = [enumerable()], _initial_dec = [enumerable()], _previous_dec = [enumerable()];
	ValueHistory = class {
		constructor(defaultValue, equals = Object.is) {
			this.defaultValue = defaultValue;
			this.equals = equals;
			__runInitializers$4(_init$4, 5, this);
			__privateAdd$5(this, _ValueHistory_instances);
			__privateAdd$5(this, _initial, __runInitializers$4(_init$4, 8, this)), __runInitializers$4(_init$4, 11, this);
			__privateAdd$5(this, _previous, __runInitializers$4(_init$4, 12, this)), __runInitializers$4(_init$4, 15, this);
			__privateAdd$5(this, _current, __runInitializers$4(_init$4, 16, this)), __runInitializers$4(_init$4, 19, this);
			this.reset = this.reset.bind(this);
			this.reset();
		}
		get current() {
			return __privateGet$5(this, _ValueHistory_instances, current_get);
		}
		get initial() {
			return __privateGet$5(this, _ValueHistory_instances, initial_get);
		}
		get previous() {
			return __privateGet$5(this, _ValueHistory_instances, previous_get);
		}
		/** Set the current value */
		set current(value) {
			const current = o(() => __privateGet$5(this, _ValueHistory_instances, current_get));
			if (value && current && this.equals(current, value)) return;
			n(() => {
				if (!__privateGet$5(this, _ValueHistory_instances, initial_get)) __privateSet$5(this, _ValueHistory_instances, value, initial_set);
				__privateSet$5(this, _ValueHistory_instances, current, previous_set);
				__privateSet$5(this, _ValueHistory_instances, value, current_set);
			});
		}
		/** Reset the state to the initial value */
		reset(value = this.defaultValue) {
			n(() => {
				__privateSet$5(this, _ValueHistory_instances, void 0, previous_set);
				__privateSet$5(this, _ValueHistory_instances, value, initial_set);
				__privateSet$5(this, _ValueHistory_instances, value, current_set);
			});
		}
	};
	_init$4 = __decoratorStart$4(null);
	_initial = /* @__PURE__ */ new WeakMap();
	_ValueHistory_instances = /* @__PURE__ */ new WeakSet();
	_previous = /* @__PURE__ */ new WeakMap();
	_current = /* @__PURE__ */ new WeakMap();
	_a$3 = __decorateElement$4(_init$4, 20, "#initial", _initial_dec2, _ValueHistory_instances, _initial), initial_get = _a$3.get, initial_set = _a$3.set;
	_b$1 = __decorateElement$4(_init$4, 20, "#previous", _previous_dec2, _ValueHistory_instances, _previous), previous_get = _b$1.get, previous_set = _b$1.set;
	_c$2 = __decorateElement$4(_init$4, 20, "#current", _current_dec2, _ValueHistory_instances, _current), current_get = _c$2.get, current_set = _c$2.set;
	__decorateElement$4(_init$4, 2, "current", _current_dec$1, ValueHistory);
	__decorateElement$4(_init$4, 2, "initial", _initial_dec, ValueHistory);
	__decorateElement$4(_init$4, 2, "previous", _previous_dec, ValueHistory);
	__decoratorMetadata$4(_init$4, ValueHistory);
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+geometry@0.5.0/node_modules/@dnd-kit/geometry/dist/index.mjs
function rectangleRectangleIntersection(a, b) {
	const top = Math.max(b.top, a.top);
	const left = Math.max(b.left, a.left);
	const right = Math.min(b.left + b.width, a.left + a.width);
	const bottom = Math.min(b.top + b.height, a.top + a.height);
	const width = right - left;
	const height = bottom - top;
	if (left < right && top < bottom) return width * height;
	return 0;
}
function exceedsDistance({ x, y }, distance) {
	const dx = Math.abs(x);
	const dy = Math.abs(y);
	if (typeof distance === "number") return Math.sqrt(__pow(dx, 2) + __pow(dy, 2)) > distance;
	if ("x" in distance && "y" in distance) return dx > distance.x && dy > distance.y;
	if ("x" in distance) return dx > distance.x;
	if ("y" in distance) return dy > distance.y;
	return false;
}
var __create$3, __defProp$4, __getOwnPropDesc$3, __getOwnPropSymbols$4, __hasOwnProp$4, __propIsEnum$4, __knownSymbol$3, __typeError$4, __pow, __defNormalProp$4, __spreadValues$4, __name$2, __decoratorStart$3, __decoratorStrings$3, __expectFn$3, __decoratorContext$3, __decoratorMetadata$3, __runInitializers$3, __decorateElement$3, __accessCheck$4, __privateIn$2, __privateGet$4, __privateAdd$4, __privateSet$4, __privateMethod$3, Point$1, Rectangle, _direction_dec$1, _delta_dec$1, _a$2, _timestamp$1, _init$3, Position$1, Axis$1, Axes;
var init_dist$2 = __esmMin((() => {
	init_dist$3();
	__create$3 = Object.create;
	__defProp$4 = Object.defineProperty;
	__getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
	__getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
	__hasOwnProp$4 = Object.prototype.hasOwnProperty;
	__propIsEnum$4 = Object.prototype.propertyIsEnumerable;
	__knownSymbol$3 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
	__typeError$4 = (msg) => {
		throw TypeError(msg);
	};
	__pow = Math.pow;
	__defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__spreadValues$4 = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
		if (__getOwnPropSymbols$4) {
			for (var prop of __getOwnPropSymbols$4(b)) if (__propIsEnum$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
		}
		return a;
	};
	__name$2 = (target, value) => __defProp$4(target, "name", {
		value,
		configurable: true
	});
	__decoratorStart$3 = (base) => {
		var _a2;
		return [
			,
			,
			,
			__create$3((_a2 = base == null ? void 0 : base[__knownSymbol$3("metadata")]) != null ? _a2 : null)
		];
	};
	__decoratorStrings$3 = [
		"class",
		"method",
		"getter",
		"setter",
		"accessor",
		"field",
		"value",
		"get",
		"set"
	];
	__expectFn$3 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$4("Function expected") : fn;
	__decoratorContext$3 = (kind, name, done, metadata, fns) => ({
		kind: __decoratorStrings$3[kind],
		name,
		metadata,
		addInitializer: (fn) => done._ ? __typeError$4("Already initialized") : fns.push(__expectFn$3(fn || null))
	});
	__decoratorMetadata$3 = (array, target) => __defNormalProp$4(target, __knownSymbol$3("metadata"), array[3]);
	__runInitializers$3 = (array, flags, self, value) => {
		for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
		return value;
	};
	__decorateElement$3 = (array, flags, name, decorators, target, extra) => {
		var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
		var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$3[k + 5];
		var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
		var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$3(k < 4 ? target : {
			get [name]() {
				return __privateGet$4(this, extra);
			},
			set [name](x) {
				return __privateSet$4(this, extra, x);
			}
		}, name));
		k ? p && k < 4 && __name$2(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$2(target, name);
		for (var i = decorators.length - 1; i >= 0; i--) {
			ctx = __decoratorContext$3(k, name, done = {}, array[3], extraInitializers);
			if (k) {
				ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$2(target, x) : (x) => name in x };
				if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$4 : __privateMethod$3)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
				if (k > 2) access.set = p ? (x, y) => __privateSet$4(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
			}
			it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
				get: desc.get,
				set: desc.set
			} : target, ctx), done._ = 1;
			if (k ^ 4 || it === void 0) __expectFn$3(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
			else if (typeof it !== "object" || it === null) __typeError$4("Object expected");
			else __expectFn$3(fn = it.get) && (desc.get = fn), __expectFn$3(fn = it.set) && (desc.set = fn), __expectFn$3(fn = it.init) && initializers.unshift(fn);
		}
		return k || __decoratorMetadata$3(array, target), desc && __defProp$4(target, name, desc), p ? k ^ 4 ? extra : desc : target;
	};
	__accessCheck$4 = (obj, member, msg) => member.has(obj) || __typeError$4("Cannot " + msg);
	__privateIn$2 = (member, obj) => Object(obj) !== obj ? __typeError$4("Cannot use the \"in\" operator on this value") : member.has(obj);
	__privateGet$4 = (obj, member, getter) => (__accessCheck$4(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	__privateAdd$4 = (obj, member, value) => member.has(obj) ? __typeError$4("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet$4 = (obj, member, value, setter) => (__accessCheck$4(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	__privateMethod$3 = (obj, member, method) => (__accessCheck$4(obj, member, "access private method"), method);
	Point$1 = class _Point {
		/**
		* @param {number} Coordinate of the point on the horizontal axis
		* @param {number} Coordinate of the point on the vertical axis
		*/
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
		/**
		* Returns the delta between this point and another point.
		*
		* @param {Point} a - A point
		* @param {Point} b - Another point
		*/
		static delta(a, b) {
			return new _Point(a.x - b.x, a.y - b.y);
		}
		/**
		* Returns the distance (hypotenuse) between this point and another point.
		*
		* @param {Point} a - A point
		* @param {Point} b - Another point
		*/
		static distance(a, b) {
			return Math.hypot(a.x - b.x, a.y - b.y);
		}
		/**
		* Returns true if both points are equal.
		*
		* @param {Point} a - A point
		* @param {Point} b - Another point
		*/
		static equals(a, b) {
			return a.x === b.x && a.y === b.y;
		}
		static from({ x, y }) {
			return new _Point(x, y);
		}
	};
	Rectangle = class _Rectangle {
		constructor(left, top, width, height) {
			this.left = left;
			this.top = top;
			this.width = width;
			this.height = height;
			this.scale = {
				x: 1,
				y: 1
			};
		}
		get inverseScale() {
			return {
				x: 1 / this.scale.x,
				y: 1 / this.scale.y
			};
		}
		translate(x, y) {
			const { top, left, width, height, scale } = this;
			const newShape = new _Rectangle(left + x, top + y, width, height);
			newShape.scale = __spreadValues$4({}, scale);
			return newShape;
		}
		get boundingRectangle() {
			const { width, height, left, top, right, bottom } = this;
			return {
				width,
				height,
				left,
				top,
				right,
				bottom
			};
		}
		get center() {
			const { left, top, right, bottom } = this;
			return new Point$1((left + right) / 2, (top + bottom) / 2);
		}
		get area() {
			const { width, height } = this;
			return width * height;
		}
		equals(shape) {
			if (!(shape instanceof _Rectangle)) return false;
			const { left, top, width, height } = this;
			return left === shape.left && top === shape.top && width === shape.width && height === shape.height;
		}
		containsPoint(point) {
			const { top, left, bottom, right } = this;
			return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
		}
		intersectionArea(shape) {
			if (shape instanceof _Rectangle) return rectangleRectangleIntersection(this, shape);
			return 0;
		}
		intersectionRatio(shape) {
			const { area } = this;
			const intersectionArea = this.intersectionArea(shape);
			return intersectionArea / (shape.area + area - intersectionArea);
		}
		get bottom() {
			const { top, height } = this;
			return top + height;
		}
		get right() {
			const { left, width } = this;
			return left + width;
		}
		get aspectRatio() {
			const { width, height } = this;
			return width / height;
		}
		get corners() {
			return [
				{
					x: this.left,
					y: this.top
				},
				{
					x: this.right,
					y: this.top
				},
				{
					x: this.left,
					y: this.bottom
				},
				{
					x: this.right,
					y: this.bottom
				}
			];
		}
		static from({ top, left, width, height }) {
			return new _Rectangle(left, top, width, height);
		}
		static delta(a, b, alignment = {
			x: "center",
			y: "center"
		}) {
			const getCoordinate = (rect, axis) => {
				const align = alignment[axis];
				const start = axis === "x" ? rect.left : rect.top;
				const size = axis === "x" ? rect.width : rect.height;
				if (align == "start") return start;
				if (align == "end") return start + size;
				return start + size / 2;
			};
			return Point$1.delta({
				x: getCoordinate(a, "x"),
				y: getCoordinate(a, "y")
			}, {
				x: getCoordinate(b, "x"),
				y: getCoordinate(b, "y")
			});
		}
		static intersectionRatio(a, b) {
			return _Rectangle.from(a).intersectionRatio(_Rectangle.from(b));
		}
	};
	Position$1 = class extends (_a$2 = ValueHistory, _delta_dec$1 = [derived], _direction_dec$1 = [derived], _a$2) {
		constructor(initialValue) {
			const point = Point$1.from(initialValue);
			super(point, (a, b) => Point$1.equals(a, b));
			__runInitializers$3(_init$3, 5, this);
			__privateAdd$4(this, _timestamp$1, 0);
			this.velocity = {
				x: 0,
				y: 0
			};
		}
		get delta() {
			return Point$1.delta(this.current, this.initial);
		}
		get direction() {
			const { current, previous } = this;
			if (!previous) return null;
			const delta = {
				x: current.x - previous.x,
				y: current.y - previous.y
			};
			if (!delta.x && !delta.y) return null;
			if (Math.abs(delta.x) > Math.abs(delta.y)) return delta.x > 0 ? "right" : "left";
			return delta.y > 0 ? "down" : "up";
		}
		get current() {
			return super.current;
		}
		set current(coordinates) {
			const { current } = this;
			const point = Point$1.from(coordinates);
			const delta = {
				x: point.x - current.x,
				y: point.y - current.y
			};
			const timestamp = Date.now();
			const timeDelta = timestamp - __privateGet$4(this, _timestamp$1);
			const velocity = (delta2) => Math.round(delta2 / timeDelta * 100);
			n(() => {
				__privateSet$4(this, _timestamp$1, timestamp);
				this.velocity = {
					x: velocity(delta.x),
					y: velocity(delta.y)
				};
				super.current = point;
			});
		}
		reset(coordinates = this.defaultValue) {
			super.reset(Point$1.from(coordinates));
			this.velocity = {
				x: 0,
				y: 0
			};
		}
	};
	_init$3 = __decoratorStart$3(_a$2);
	_timestamp$1 = /* @__PURE__ */ new WeakMap();
	__decorateElement$3(_init$3, 2, "delta", _delta_dec$1, Position$1);
	__decorateElement$3(_init$3, 2, "direction", _direction_dec$1, Position$1);
	__decoratorMetadata$3(_init$3, Position$1);
	Axis$1 = /* @__PURE__ */ ((Axis2) => {
		Axis2["Horizontal"] = "x";
		Axis2["Vertical"] = "y";
		return Axis2;
	})(Axis$1 || {});
	Axes = Object.values(Axis$1);
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+abstract@0.5.0/node_modules/@dnd-kit/abstract/index.js
function configure(plugin, options) {
	return {
		plugin,
		options
	};
}
function configurator(plugin) {
	return (options) => {
		return configure(plugin, options);
	};
}
function descriptor(plugin) {
	if (typeof plugin === "function") return {
		plugin,
		options: void 0
	};
	return plugin;
}
function sortCollisions(a, b) {
	if (a.priority === b.priority) {
		if (a.type === b.type) return b.value - a.value;
		return b.type - a.type;
	}
	return b.priority - a.priority;
}
function defaultPreventable(event, cancelable = true) {
	let defaultPrevented = false;
	return __spreadProps$3(__spreadValues$3({}, event), {
		cancelable,
		get defaultPrevented() {
			return defaultPrevented;
		},
		preventDefault() {
			if (!cancelable) return;
			defaultPrevented = true;
		}
	});
}
function resolveCustomizable(value, defaults) {
	if (typeof value === "function") return value(defaults);
	return value != null ? value : defaults;
}
var __create$2, __defProp$3, __defProps$3, __getOwnPropDesc$2, __getOwnPropDescs$3, __getOwnPropSymbols$3, __hasOwnProp$3, __propIsEnum$3, __knownSymbol$2, __typeError$3, __defNormalProp$3, __spreadValues$3, __spreadProps$3, __name$1, __objRest$2, __decoratorStart$2, __decoratorStrings$2, __expectFn$2, __decoratorContext$2, __decoratorMetadata$2, __runInitializers$2, __decorateElement$2, __accessCheck$3, __privateIn$1, __privateGet$3, __privateAdd$3, __privateSet$3, __privateMethod$2, _disabled_dec, _init$2, _disabled, _cleanupFunctions$1, Plugin, CorePlugin, _previousValues, PluginRegistry, DEFAULT_VALUE, _previousCoordinates, _collisions, CollisionObserver, _disabled_dec2, _data_dec, _manager_dec, _Entity_static, flushIdChanges_fn, _init2$1, _manager, _idSignal, _data, _disabled2, _Entity, Entity, EntityRegistry, _isDragSource_dec, _isDragging_dec, _isDropping_dec, _status_dec, _modifiers_dec, _type_dec, _c$1, _init3$1, _type, _modifiers, _status, Draggable$1, _isDropTarget_dec, _shape_dec, _collisionPriority_dec, _collisionDetector_dec, _type_dec2, _accept_dec, _c2$1, _init4$1, _accept, _type2, _collisionDetector, _collisionPriority, _shape, Droppable$1, Monitor, DragDropMonitor, CollisionNotifier, CollisionPriority, CollisionType, _dropped_dec, _dragging_dec, _initialized_dec, _initializing_dec, _idle_dec, _current_dec, _value_dec, _init5$1, _value, Status, DragActions, Sensor, ActivationController, _controller, ActivationConstraint, Modifier, DragDropRegistry, _transform_dec, _target_dec, _source_dec, _modifiers_dec2, _targetIdentifier_dec, _sourceIdentifier_dec, _activatorEvent_dec, _canceled_dec, _shape_dec2, _manager2, _previousSource, _shape2, _init6$1, _canceled, _activatorEvent, _sourceIdentifier, _targetIdentifier, _modifiers2, _transform, DragOperation, defaultRenderer, DragDropManager$1;
var init_abstract = __esmMin((() => {
	init_dist$3();
	init_dist$2();
	__create$2 = Object.create;
	__defProp$3 = Object.defineProperty;
	__defProps$3 = Object.defineProperties;
	__getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
	__getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
	__getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
	__hasOwnProp$3 = Object.prototype.hasOwnProperty;
	__propIsEnum$3 = Object.prototype.propertyIsEnumerable;
	__knownSymbol$2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
	__typeError$3 = (msg) => {
		throw TypeError(msg);
	};
	__defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__spreadValues$3 = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
		if (__getOwnPropSymbols$3) {
			for (var prop of __getOwnPropSymbols$3(b)) if (__propIsEnum$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
		}
		return a;
	};
	__spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
	__name$1 = (target, value) => __defProp$3(target, "name", {
		value,
		configurable: true
	});
	__objRest$2 = (source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$3) {
			for (var prop of __getOwnPropSymbols$3(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	};
	__decoratorStart$2 = (base) => {
		var _a;
		return [
			,
			,
			,
			__create$2((_a = base == null ? void 0 : base[__knownSymbol$2("metadata")]) != null ? _a : null)
		];
	};
	__decoratorStrings$2 = [
		"class",
		"method",
		"getter",
		"setter",
		"accessor",
		"field",
		"value",
		"get",
		"set"
	];
	__expectFn$2 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$3("Function expected") : fn;
	__decoratorContext$2 = (kind, name, done, metadata, fns) => ({
		kind: __decoratorStrings$2[kind],
		name,
		metadata,
		addInitializer: (fn) => done._ ? __typeError$3("Already initialized") : fns.push(__expectFn$2(fn || null))
	});
	__decoratorMetadata$2 = (array, target) => __defNormalProp$3(target, __knownSymbol$2("metadata"), array[3]);
	__runInitializers$2 = (array, flags, self, value) => {
		for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
		return value;
	};
	__decorateElement$2 = (array, flags, name, decorators, target, extra) => {
		var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
		var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$2[k + 5];
		var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
		var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$2(k < 4 ? target : {
			get [name]() {
				return __privateGet$3(this, extra);
			},
			set [name](x) {
				return __privateSet$3(this, extra, x);
			}
		}, name));
		k ? p && k < 4 && __name$1(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$1(target, name);
		for (var i = decorators.length - 1; i >= 0; i--) {
			ctx = __decoratorContext$2(k, name, done = {}, array[3], extraInitializers);
			if (k) {
				ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$1(target, x) : (x) => name in x };
				if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$3 : __privateMethod$2)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
				if (k > 2) access.set = p ? (x, y) => __privateSet$3(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
			}
			it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
				get: desc.get,
				set: desc.set
			} : target, ctx), done._ = 1;
			if (k ^ 4 || it === void 0) __expectFn$2(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
			else if (typeof it !== "object" || it === null) __typeError$3("Object expected");
			else __expectFn$2(fn = it.get) && (desc.get = fn), __expectFn$2(fn = it.set) && (desc.set = fn), __expectFn$2(fn = it.init) && initializers.unshift(fn);
		}
		return k || __decoratorMetadata$2(array, target), desc && __defProp$3(target, name, desc), p ? k ^ 4 ? extra : desc : target;
	};
	__accessCheck$3 = (obj, member, msg) => member.has(obj) || __typeError$3("Cannot " + msg);
	__privateIn$1 = (member, obj) => Object(obj) !== obj ? __typeError$3("Cannot use the \"in\" operator on this value") : member.has(obj);
	__privateGet$3 = (obj, member, getter) => (__accessCheck$3(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	__privateAdd$3 = (obj, member, value) => member.has(obj) ? __typeError$3("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet$3 = (obj, member, value, setter) => (__accessCheck$3(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	__privateMethod$2 = (obj, member, method) => (__accessCheck$3(obj, member, "access private method"), method);
	_disabled_dec = [reactive];
	Plugin = class {
		/**
		* Creates a new plugin instance.
		*
		* @param manager - The drag and drop manager that owns this plugin
		* @param options - Optional configuration for the plugin
		*/
		constructor(manager, options) {
			this.manager = manager;
			this.options = options;
			__privateAdd$3(this, _disabled, __runInitializers$2(_init$2, 8, this, false)), __runInitializers$2(_init$2, 11, this);
			__privateAdd$3(this, _cleanupFunctions$1, /* @__PURE__ */ new Set());
		}
		/**
		* Enables a disabled plugin instance.
		*
		* @remarks
		* This method triggers effects when called.
		*/
		enable() {
			this.disabled = false;
		}
		/**
		* Disables an enabled plugin instance.
		*
		* @remarks
		* This method triggers effects when called.
		*/
		disable() {
			this.disabled = true;
		}
		/**
		* Checks if the plugin instance is disabled.
		*
		* @returns true if the plugin is disabled
		* @remarks
		* This method does not trigger effects when accessed.
		*/
		isDisabled() {
			return o(() => {
				return this.disabled;
			});
		}
		/**
		* Configures a plugin instance with new options.
		*
		* @param options - The new options to apply
		*/
		configure(options) {
			this.options = options;
		}
		/**
		* Registers an effect that will be cleaned up when the plugin is destroyed.
		*
		* @param callback - The effect callback to register
		* @returns A function to dispose of the effect
		*/
		registerEffect(callback) {
			const dispose = j$1(callback.bind(this));
			__privateGet$3(this, _cleanupFunctions$1).add(dispose);
			return dispose;
		}
		/**
		* Destroys a plugin instance and cleans up its resources.
		*
		* @remarks
		* This method:
		* - Calls all registered cleanup functions
		* - Should be overridden by subclasses to clean up additional resources
		*/
		destroy() {
			__privateGet$3(this, _cleanupFunctions$1).forEach((cleanup) => cleanup());
		}
		/**
		* Configures a plugin constructor with options.
		*
		* @param options - The options to configure the constructor with
		* @returns The configured plugin constructor
		*
		* @remarks
		* This method is used to configure the options that the
		* plugin constructor will use to create plugin instances.
		*/
		static configure(options) {
			return configure(this, options);
		}
	};
	_init$2 = __decoratorStart$2(null);
	_disabled = /* @__PURE__ */ new WeakMap();
	_cleanupFunctions$1 = /* @__PURE__ */ new WeakMap();
	__decorateElement$2(_init$2, 4, "disabled", _disabled_dec, Plugin, _disabled);
	__decoratorMetadata$2(_init$2, Plugin);
	CorePlugin = class extends Plugin {};
	PluginRegistry = class {
		/**
		* Creates a new plugin registry.
		*
		* @param manager - The drag and drop manager that owns this registry
		*/
		constructor(manager) {
			this.manager = manager;
			this.instances = /* @__PURE__ */ new Map();
			__privateAdd$3(this, _previousValues, []);
		}
		/**
		* Gets all registered plugin instances.
		*
		* @returns An array of all active plugin instances
		*/
		get values() {
			return Array.from(this.instances.values());
		}
		/**
		* Sets the list of plugins to be used by the registry.
		*
		* @param entries - Array of plugin constructors or descriptors
		* @remarks
		* This method:
		* - Filters out duplicate plugins
		* - Unregisters plugins that are no longer in use
		* - Registers new plugins with their options
		*/
		set values(entries) {
			const descriptors = entries.map(descriptor).reduce((acc, descriptor2) => {
				const existing = acc.find(({ plugin }) => plugin === descriptor2.plugin);
				if (existing) {
					existing.options = descriptor2.options;
					return acc;
				}
				return [...acc, descriptor2];
			}, []);
			const constructors = descriptors.map(({ plugin }) => plugin);
			for (const plugin of __privateGet$3(this, _previousValues)) if (!constructors.includes(plugin)) {
				if (plugin.prototype instanceof CorePlugin) continue;
				this.unregister(plugin);
			}
			for (const { plugin, options } of descriptors) this.register(plugin, options);
			__privateSet$3(this, _previousValues, constructors);
		}
		/**
		* Gets a plugin instance by its constructor.
		*
		* @param plugin - The plugin constructor to look up
		* @returns The plugin instance or undefined if not found
		*/
		get(plugin) {
			return this.instances.get(plugin);
		}
		/**
		* Registers a new plugin instance.
		*
		* @param plugin - The plugin constructor to register
		* @param options - Optional configuration for the plugin
		* @returns The registered plugin instance
		* @remarks
		* If the plugin is already registered, its options will be updated
		* and the existing instance will be returned.
		*/
		register(plugin, options) {
			const existingInstance = this.instances.get(plugin);
			if (existingInstance) {
				if (existingInstance.options !== options) existingInstance.options = options;
				return existingInstance;
			}
			const instance = new plugin(this.manager, options);
			this.instances.set(plugin, instance);
			return instance;
		}
		/**
		* Unregisters a plugin instance.
		*
		* @param plugin - The plugin constructor to unregister
		* @remarks
		* This method:
		* - Destroys the plugin instance
		* - Removes it from the registry
		*/
		unregister(plugin) {
			const instance = this.instances.get(plugin);
			if (instance) {
				instance.destroy();
				this.instances.delete(plugin);
			}
		}
		/**
		* Destroys all registered plugin instances.
		*
		* @remarks
		* This method:
		* - Calls destroy() on all plugin instances
		* - Clears the registry
		*/
		destroy() {
			for (const plugin of this.instances.values()) plugin.destroy();
			this.instances.clear();
		}
	};
	_previousValues = /* @__PURE__ */ new WeakMap();
	DEFAULT_VALUE = [];
	CollisionObserver = class extends Plugin {
		/**
		* Creates a new CollisionObserver instance.
		*
		* @param manager - The drag drop manager instance
		*/
		constructor(manager) {
			super(manager);
			__privateAdd$3(this, _previousCoordinates);
			__privateAdd$3(this, _collisions);
			this.computeCollisions = this.computeCollisions.bind(this);
			__privateSet$3(this, _collisions, y(DEFAULT_VALUE));
			this.destroy = effects(() => {
				const collisions = this.computeCollisions();
				const coordinates = o(() => this.manager.dragOperation.position.current);
				if (collisions !== DEFAULT_VALUE) {
					const previousCoordinates = __privateGet$3(this, _previousCoordinates);
					__privateSet$3(this, _previousCoordinates, coordinates);
					if (previousCoordinates && coordinates.x == previousCoordinates.x && coordinates.y == previousCoordinates.y) return;
				} else __privateSet$3(this, _previousCoordinates, void 0);
				__privateGet$3(this, _collisions).value = collisions;
			}, () => {
				const { dragOperation } = this.manager;
				if (dragOperation.status.initialized) this.forceUpdate();
			});
		}
		/**
		* Forces an immediate update of collision detection.
		*
		* @param immediate - If true, updates collisions immediately. If false, resets previous coordinates.
		*/
		forceUpdate(immediate = true) {
			o(() => {
				if (immediate) __privateGet$3(this, _collisions).value = this.computeCollisions();
				else __privateSet$3(this, _previousCoordinates, void 0);
			});
		}
		/**
		* Computes collisions between draggable and droppable elements.
		*
		* @param entries - Optional array of droppable elements to check. If not provided, uses all registered droppables.
		* @param collisionDetector - Optional custom collision detector function
		* @returns Array of detected collisions, sorted by priority
		*/
		computeCollisions(entries, collisionDetector) {
			const { registry, dragOperation } = this.manager;
			const { source, shape, status } = dragOperation;
			if (!status.initialized || !shape) return DEFAULT_VALUE;
			const collisions = [];
			const potentialTargets = [];
			for (const entry of entries != null ? entries : registry.droppables) {
				if (entry.disabled) continue;
				if (source && !entry.accepts(source)) continue;
				const detectCollision = collisionDetector != null ? collisionDetector : entry.collisionDetector;
				if (!detectCollision) continue;
				potentialTargets.push(entry);
				entry.shape;
				const collision = o(() => detectCollision({
					droppable: entry,
					dragOperation
				}));
				if (collision) {
					if (entry.collisionPriority != null) collision.priority = entry.collisionPriority;
					collisions.push(collision);
				}
			}
			if (potentialTargets.length === 0) return DEFAULT_VALUE;
			collisions.sort(sortCollisions);
			return collisions;
		}
		/**
		* Gets the current collisions signal value.
		*/
		get collisions() {
			return __privateGet$3(this, _collisions).value;
		}
	};
	_previousCoordinates = /* @__PURE__ */ new WeakMap();
	_collisions = /* @__PURE__ */ new WeakMap();
	_manager_dec = [reactive];
	_data_dec = [reactive], _disabled_dec2 = [reactive];
	_Entity = class _Entity {
		/**
		* Creates a new instance of the `Entity` class.
		*
		* @param input - An object containing the initial properties of the entity.
		* @param manager - The manager that controls the drag and drop operations.
		*/
		constructor(input, manager) {
			__privateAdd$3(this, _manager, __runInitializers$2(_init2$1, 8, this)), __runInitializers$2(_init2$1, 11, this);
			/**
			* The unique identifier of the entity.
			*
			* Setting this property defers the signal update to a microtask,
			* batching multiple id changes together atomically. This ensures
			* that when entities swap ids (e.g. during sorting with virtualization),
			* all registry updates happen in a single transaction.
			*/
			__privateAdd$3(this, _idSignal);
			__privateAdd$3(this, _data, __runInitializers$2(_init2$1, 12, this)), __runInitializers$2(_init2$1, 15, this);
			__privateAdd$3(this, _disabled2, __runInitializers$2(_init2$1, 16, this)), __runInitializers$2(_init2$1, 19, this);
			const { effects: effects6, id, data = {}, disabled = false, register = true } = input;
			let previousId = id;
			__privateSet$3(this, _idSignal, y(id));
			this.manager = manager;
			this.data = data;
			this.disabled = disabled;
			this.effects = () => {
				var _a;
				return [() => {
					const { id: id2, manager: manager2 } = this;
					if (id2 === previousId) return;
					previousId = id2;
					manager2?.registry.register(this);
					return () => manager2 == null ? void 0 : manager2.registry.unregister(this);
				}, ...(_a = effects6 == null ? void 0 : effects6()) != null ? _a : []];
			};
			this.register = this.register.bind(this);
			this.unregister = this.unregister.bind(this);
			this.destroy = this.destroy.bind(this);
			if (manager && register) queueMicrotask(this.register);
		}
		get id() {
			var _a, _b;
			const signalValue = __privateGet$3(this, _idSignal).value;
			return (_b = (_a = _Entity.pendingIdChanges) == null ? void 0 : _a.get(this)) != null ? _b : signalValue;
		}
		set id(value) {
			var _a, _b;
			if (value === ((_b = (_a = _Entity.pendingIdChanges) == null ? void 0 : _a.get(this)) != null ? _b : __privateGet$3(this, _idSignal).peek())) return;
			if (!_Entity.pendingIdChanges) {
				_Entity.pendingIdChanges = /* @__PURE__ */ new Map();
				queueMicrotask(() => {
					var _a2;
					return __privateMethod$2(_a2 = _Entity, _Entity_static, flushIdChanges_fn).call(_a2);
				});
			}
			_Entity.pendingIdChanges.set(this, value);
		}
		/**
		* A method that registers the entity with the manager.
		* @returns CleanupFunction | void
		*/
		register() {
			var _a;
			return (_a = this.manager) == null ? void 0 : _a.registry.register(this);
		}
		/**
		* A method that unregisters the entity from the manager.
		* @returns void
		*/
		unregister() {
			var _a;
			(_a = this.manager) == null || _a.registry.unregister(this);
		}
		/**
		* A method that cleans up the entity when it is no longer needed.
		* @returns void
		*/
		destroy() {
			var _a;
			(_a = this.manager) == null || _a.registry.unregister(this);
		}
	};
	_init2$1 = __decoratorStart$2(null);
	_Entity_static = /* @__PURE__ */ new WeakSet();
	flushIdChanges_fn = function() {
		const changes = _Entity.pendingIdChanges;
		_Entity.pendingIdChanges = null;
		if (changes) n(() => {
			for (const [entity, id] of changes) __privateGet$3(entity, _idSignal).value = id;
		});
	};
	_manager = /* @__PURE__ */ new WeakMap();
	_idSignal = /* @__PURE__ */ new WeakMap();
	_data = /* @__PURE__ */ new WeakMap();
	_disabled2 = /* @__PURE__ */ new WeakMap();
	__decorateElement$2(_init2$1, 4, "manager", _manager_dec, _Entity, _manager);
	__decorateElement$2(_init2$1, 4, "data", _data_dec, _Entity, _data);
	__decorateElement$2(_init2$1, 4, "disabled", _disabled_dec2, _Entity, _disabled2);
	__privateAdd$3(_Entity, _Entity_static);
	__decoratorMetadata$2(_init2$1, _Entity);
	_Entity.pendingIdChanges = null;
	Entity = _Entity;
	EntityRegistry = class {
		constructor() {
			this.map = y(/* @__PURE__ */ new Map());
			this.cleanupFunctions = /* @__PURE__ */ new WeakMap();
			/**
			* Registers a entity in the registry.
			* @param key - The unique identifier of the entity.
			* @param value - The entity to register.
			* @returns A function that unregisters the entity.
			*/
			this.register = (key, value) => {
				const current = this.map.peek();
				const currentValue = current.get(key);
				const unregister = () => this.unregister(key, value);
				if (currentValue === value) return unregister;
				if (currentValue) {
					if (currentValue.id === key) {
						this.cleanupFunctions.get(currentValue)?.();
						this.cleanupFunctions.delete(currentValue);
					}
				}
				const updatedMap = new Map(current);
				for (const [existingKey, existingValue] of current) if (existingValue === value && existingKey !== key) {
					updatedMap.delete(existingKey);
					break;
				}
				updatedMap.set(key, value);
				this.map.value = updatedMap;
				const cleanup = effects(...value.effects());
				this.cleanupFunctions.set(value, cleanup);
				return unregister;
			};
			/**
			* Unregisters an entity from the registry.
			* @param key - The unique identifier of the entity.
			* @param value - The entity instance to unregister.
			*/
			this.unregister = (key, value) => {
				const current = this.map.peek();
				if (current.get(key) !== value) return;
				this.cleanupFunctions.get(value)?.();
				this.cleanupFunctions.delete(value);
				const updatedMap = new Map(current);
				updatedMap.delete(key);
				this.map.value = updatedMap;
			};
		}
		/**
		* Iterator for the EntityRegistry class.
		* @returns An iterator for the values in the map.
		*/
		[Symbol.iterator]() {
			return this.map.peek().values();
		}
		get value() {
			return this.map.value.values();
		}
		/**
		* Checks if a entity with the given identifier exists in the registry.
		* @param identifier - The unique identifier of the entity.
		* @returns True if the entity exists, false otherwise.
		*/
		has(identifier) {
			return this.map.value.has(identifier);
		}
		/**
		* Retrieves a entity from the registry using its identifier.
		* @param identifier - The unique identifier of the entity.
		* @returns The entity if it exists, undefined otherwise.
		*/
		get(identifier) {
			return this.map.value.get(identifier);
		}
		/**
		* Destroys all entries in the registry and clears the registry.
		*/
		destroy() {
			for (const entry of this) {
				this.cleanupFunctions.get(entry)?.();
				entry.destroy();
			}
			this.map.value = /* @__PURE__ */ new Map();
		}
	};
	Draggable$1 = class extends (_c$1 = Entity, _type_dec = [reactive], _modifiers_dec = [reactive], _status_dec = [reactive], _isDropping_dec = [derived], _isDragging_dec = [derived], _isDragSource_dec = [derived], _c$1) {
		constructor(_a, manager) {
			var _b = _a, { modifiers, type, sensors, plugins, effects: effects6 } = _b, input = __objRest$2(_b, [
				"modifiers",
				"type",
				"sensors",
				"plugins",
				"effects"
			]);
			super(__spreadProps$3(__spreadValues$3({}, input), { effects: () => {
				var _a2;
				return [...(_a2 = effects6 == null ? void 0 : effects6()) != null ? _a2 : [], () => {
					const { manager: manager2, plugins: plugins2 } = this;
					if (!manager2 || !plugins2) return;
					for (const entry of plugins2) {
						const { plugin } = descriptor(entry);
						manager2.registry.plugins.register(plugin);
					}
				}];
			} }), manager);
			__runInitializers$2(_init3$1, 5, this);
			__privateAdd$3(this, _type, __runInitializers$2(_init3$1, 8, this)), __runInitializers$2(_init3$1, 11, this);
			__privateAdd$3(this, _modifiers, __runInitializers$2(_init3$1, 12, this)), __runInitializers$2(_init3$1, 15, this);
			__privateAdd$3(this, _status, __runInitializers$2(_init3$1, 16, this, this.isDragSource ? "dragging" : "idle")), __runInitializers$2(_init3$1, 19, this);
			this.type = type;
			this.sensors = sensors;
			this.modifiers = modifiers;
			this.alignment = input.alignment;
			this.plugins = plugins;
		}
		/**
		* Look up per-entity options for a given plugin constructor.
		*/
		pluginConfig(plugin) {
			if (!this.plugins) return void 0;
			for (const entry of this.plugins) {
				const desc = descriptor(entry);
				if (desc.plugin === plugin) return desc.options;
			}
		}
		get isDropping() {
			return this.status === "dropping" && this.isDragSource;
		}
		get isDragging() {
			return this.status === "dragging" && this.isDragSource;
		}
		get isDragSource() {
			var _a, _b;
			return ((_b = (_a = this.manager) == null ? void 0 : _a.dragOperation.source) == null ? void 0 : _b.id) === this.id;
		}
	};
	_init3$1 = __decoratorStart$2(_c$1);
	_type = /* @__PURE__ */ new WeakMap();
	_modifiers = /* @__PURE__ */ new WeakMap();
	_status = /* @__PURE__ */ new WeakMap();
	__decorateElement$2(_init3$1, 4, "type", _type_dec, Draggable$1, _type);
	__decorateElement$2(_init3$1, 4, "modifiers", _modifiers_dec, Draggable$1, _modifiers);
	__decorateElement$2(_init3$1, 4, "status", _status_dec, Draggable$1, _status);
	__decorateElement$2(_init3$1, 2, "isDropping", _isDropping_dec, Draggable$1);
	__decorateElement$2(_init3$1, 2, "isDragging", _isDragging_dec, Draggable$1);
	__decorateElement$2(_init3$1, 2, "isDragSource", _isDragSource_dec, Draggable$1);
	__decoratorMetadata$2(_init3$1, Draggable$1);
	Droppable$1 = class extends (_c2$1 = Entity, _accept_dec = [reactive], _type_dec2 = [reactive], _collisionDetector_dec = [reactive], _collisionPriority_dec = [reactive], _shape_dec = [reactive], _isDropTarget_dec = [derived], _c2$1) {
		constructor(_a, manager) {
			var _b = _a, { accept, collisionDetector, collisionPriority, type } = _b, input = __objRest$2(_b, [
				"accept",
				"collisionDetector",
				"collisionPriority",
				"type"
			]);
			super(input, manager);
			__runInitializers$2(_init4$1, 5, this);
			__privateAdd$3(this, _accept, __runInitializers$2(_init4$1, 8, this)), __runInitializers$2(_init4$1, 11, this);
			__privateAdd$3(this, _type2, __runInitializers$2(_init4$1, 12, this)), __runInitializers$2(_init4$1, 15, this);
			__privateAdd$3(this, _collisionDetector, __runInitializers$2(_init4$1, 16, this)), __runInitializers$2(_init4$1, 19, this);
			__privateAdd$3(this, _collisionPriority, __runInitializers$2(_init4$1, 20, this)), __runInitializers$2(_init4$1, 23, this);
			__privateAdd$3(this, _shape, __runInitializers$2(_init4$1, 24, this)), __runInitializers$2(_init4$1, 27, this);
			this.accept = accept;
			this.collisionDetector = collisionDetector;
			this.collisionPriority = collisionPriority;
			this.type = type;
		}
		/**
		* Checks whether or not the droppable accepts a given draggable.
		*
		* @param draggable - The draggable to check
		* @returns true if the draggable can be dropped here
		*/
		accepts(draggable) {
			const { accept } = this;
			if (!accept) return true;
			if (typeof accept === "function") return accept(draggable);
			if (!draggable.type) return false;
			if (Array.isArray(accept)) return accept.includes(draggable.type);
			return draggable.type === accept;
		}
		get isDropTarget() {
			var _a, _b;
			return ((_b = (_a = this.manager) == null ? void 0 : _a.dragOperation.target) == null ? void 0 : _b.id) === this.id;
		}
	};
	_init4$1 = __decoratorStart$2(_c2$1);
	_accept = /* @__PURE__ */ new WeakMap();
	_type2 = /* @__PURE__ */ new WeakMap();
	_collisionDetector = /* @__PURE__ */ new WeakMap();
	_collisionPriority = /* @__PURE__ */ new WeakMap();
	_shape = /* @__PURE__ */ new WeakMap();
	__decorateElement$2(_init4$1, 4, "accept", _accept_dec, Droppable$1, _accept);
	__decorateElement$2(_init4$1, 4, "type", _type_dec2, Droppable$1, _type2);
	__decorateElement$2(_init4$1, 4, "collisionDetector", _collisionDetector_dec, Droppable$1, _collisionDetector);
	__decorateElement$2(_init4$1, 4, "collisionPriority", _collisionPriority_dec, Droppable$1, _collisionPriority);
	__decorateElement$2(_init4$1, 4, "shape", _shape_dec, Droppable$1, _shape);
	__decorateElement$2(_init4$1, 2, "isDropTarget", _isDropTarget_dec, Droppable$1);
	__decoratorMetadata$2(_init4$1, Droppable$1);
	Monitor = class {
		constructor() {
			this.registry = /* @__PURE__ */ new Map();
		}
		/**
		* Adds an event listener for the specified event type.
		*
		* @param name - The name of the event to listen for
		* @param handler - The function to call when the event occurs
		* @returns A function to remove the event listener
		*/
		addEventListener(name, handler) {
			const { registry } = this;
			const listeners = new Set(registry.get(name));
			listeners.add(handler);
			registry.set(name, listeners);
			return () => this.removeEventListener(name, handler);
		}
		/**
		* Removes an event listener for the specified event type.
		*
		* @param name - The name of the event
		* @param handler - The function to remove
		*/
		removeEventListener(name, handler) {
			const { registry } = this;
			const listeners = new Set(registry.get(name));
			listeners.delete(handler);
			registry.set(name, listeners);
		}
		/**
		* Dispatches an event to all registered listeners.
		*
		* @param name - The name of the event to dispatch
		* @param args - Arguments to pass to the event handlers
		*/
		dispatch(name, ...args) {
			const { registry } = this;
			const listeners = registry.get(name);
			if (!listeners) return;
			for (const listener of listeners) listener(...args);
		}
	};
	DragDropMonitor = class extends Monitor {
		/**
		* Creates a new drag and drop monitor.
		*
		* @param manager - The drag and drop manager to monitor
		*/
		constructor(manager) {
			super();
			this.manager = manager;
		}
		/**
		* Dispatches a drag and drop event.
		*
		* @param type - The type of event to dispatch
		* @param event - The event data to dispatch
		*/
		dispatch(type, event) {
			const args = [event, this.manager];
			super.dispatch(type, ...args);
		}
	};
	CollisionNotifier = class extends CorePlugin {
		constructor(manager) {
			super(manager);
			const isEqual = (a, b) => a.map(({ id }) => id).join("") === b.map(({ id }) => id).join("");
			let previousCollisions = [];
			this.destroy = effects(() => {
				const { dragOperation, collisionObserver } = manager;
				if (dragOperation.status.initializing) {
					previousCollisions = [];
					collisionObserver.enable();
				}
			}, () => {
				const { collisionObserver, monitor } = manager;
				const { collisions } = collisionObserver;
				if (collisionObserver.isDisabled()) return;
				if (Entity.pendingIdChanges) return;
				const event = defaultPreventable({ collisions });
				monitor.dispatch("collision", event);
				if (event.defaultPrevented) return;
				if (isEqual(collisions, previousCollisions)) return;
				else previousCollisions = collisions;
				const [firstCollision] = collisions;
				o(() => {
					var _a;
					if ((firstCollision == null ? void 0 : firstCollision.id) !== ((_a = manager.dragOperation.target) == null ? void 0 : _a.id)) {
						collisionObserver.disable();
						manager.actions.setDropTarget(firstCollision == null ? void 0 : firstCollision.id).then(() => {
							collisionObserver.enable();
						});
					}
				});
			});
		}
	};
	CollisionPriority = /* @__PURE__ */ ((CollisionPriority2) => {
		CollisionPriority2[CollisionPriority2["Lowest"] = 0] = "Lowest";
		CollisionPriority2[CollisionPriority2["Low"] = 1] = "Low";
		CollisionPriority2[CollisionPriority2["Normal"] = 2] = "Normal";
		CollisionPriority2[CollisionPriority2["High"] = 3] = "High";
		CollisionPriority2[CollisionPriority2["Highest"] = 4] = "Highest";
		return CollisionPriority2;
	})(CollisionPriority || {});
	CollisionType = /* @__PURE__ */ ((CollisionType2) => {
		CollisionType2[CollisionType2["Collision"] = 0] = "Collision";
		CollisionType2[CollisionType2["ShapeIntersection"] = 1] = "ShapeIntersection";
		CollisionType2[CollisionType2["PointerIntersection"] = 2] = "PointerIntersection";
		return CollisionType2;
	})(CollisionType || {});
	_value_dec = [reactive];
	_current_dec = [derived], _idle_dec = [derived], _initializing_dec = [derived], _initialized_dec = [derived], _dragging_dec = [derived], _dropped_dec = [derived];
	Status = class {
		constructor() {
			__runInitializers$2(_init5$1, 5, this);
			__privateAdd$3(this, _value, __runInitializers$2(_init5$1, 8, this, "idle")), __runInitializers$2(_init5$1, 11, this);
		}
		get current() {
			return this.value;
		}
		get idle() {
			return this.value === "idle";
		}
		get initializing() {
			return this.value === "initializing";
		}
		get initialized() {
			const { value } = this;
			return value !== "idle" && value !== "initialization-pending";
		}
		get dragging() {
			return this.value === "dragging";
		}
		get dropped() {
			return this.value === "dropped";
		}
		/**
		* Sets the current status value.
		*
		* @param value - The new status value
		*/
		set(value) {
			this.value = value;
		}
	};
	_init5$1 = __decoratorStart$2(null);
	_value = /* @__PURE__ */ new WeakMap();
	__decorateElement$2(_init5$1, 4, "value", _value_dec, Status, _value);
	__decorateElement$2(_init5$1, 2, "current", _current_dec, Status);
	__decorateElement$2(_init5$1, 2, "idle", _idle_dec, Status);
	__decorateElement$2(_init5$1, 2, "initializing", _initializing_dec, Status);
	__decorateElement$2(_init5$1, 2, "initialized", _initialized_dec, Status);
	__decorateElement$2(_init5$1, 2, "dragging", _dragging_dec, Status);
	__decorateElement$2(_init5$1, 2, "dropped", _dropped_dec, Status);
	__decoratorMetadata$2(_init5$1, Status);
	DragActions = class {
		/**
		* Creates a new instance of drag actions.
		*
		* @param manager - The drag and drop manager instance
		*/
		constructor(manager) {
			this.manager = manager;
		}
		/**
		* Sets the source of the drag operation.
		*
		* @param source - The draggable entity or its unique identifier
		*/
		setDragSource(source) {
			const { dragOperation } = this.manager;
			dragOperation.sourceIdentifier = typeof source === "string" || typeof source === "number" ? source : source.id;
		}
		/**
		* Sets the target of the drop operation.
		*
		* @param identifier - The unique identifier of the droppable entity or null/undefined
		* @returns A promise that resolves to true if the drop was prevented
		*/
		setDropTarget(identifier) {
			return o(() => {
				const { dragOperation } = this.manager;
				const id = identifier != null ? identifier : null;
				if (dragOperation.targetIdentifier === id) return Promise.resolve(false);
				dragOperation.targetIdentifier = id;
				const event = defaultPreventable({ operation: dragOperation.snapshot() });
				if (dragOperation.status.dragging) this.manager.monitor.dispatch("dragover", event);
				return this.manager.renderer.rendering.then(() => event.defaultPrevented);
			});
		}
		/**
		* Starts a new drag operation.
		*
		* @param args - Configuration for the drag operation
		* @param args.event - The event that initiated the drag
		* @param args.source - The source draggable entity or its identifier
		* @param args.coordinates - The initial coordinates of the drag
		* @returns true if the drag operation started successfully
		* @throws {Error} If there is no drag source or another operation is active
		*/
		start(args) {
			return o(() => {
				const { dragOperation } = this.manager;
				if (args.source != null) this.setDragSource(args.source);
				if (!dragOperation.source) throw new Error("Cannot start a drag operation without a drag source");
				if (!dragOperation.status.idle) throw new Error("Cannot start a drag operation while another is active");
				const controller = new AbortController();
				const { event: nativeEvent, coordinates } = args;
				n(() => {
					dragOperation.status.set("initialization-pending");
					dragOperation.shape = null;
					dragOperation.canceled = false;
					dragOperation.activatorEvent = nativeEvent != null ? nativeEvent : null;
					dragOperation.position.reset(coordinates);
				});
				const beforeStartEvent = defaultPreventable({ operation: dragOperation.snapshot() });
				this.manager.monitor.dispatch("beforedragstart", beforeStartEvent);
				if (beforeStartEvent.defaultPrevented) {
					dragOperation.reset();
					controller.abort();
					return controller;
				}
				dragOperation.status.set("initializing");
				dragOperation.controller = controller;
				this.manager.renderer.rendering.then(() => {
					if (controller.signal.aborted) return;
					const { status } = dragOperation;
					if (status.current !== "initializing") return;
					n(() => {
						dragOperation.status.set("dragging");
						this.manager.monitor.dispatch("dragstart", {
							nativeEvent,
							operation: dragOperation.snapshot(),
							cancelable: false
						});
					});
				});
				return controller;
			});
		}
		/**
		* Moves the dragged entity to a new position.
		*
		* @param args - Configuration for the move operation
		* @param args.by - Relative coordinates to move by
		* @param args.to - Absolute coordinates to move to
		* @param args.event - The event that triggered the move
		* @param args.cancelable - Whether the move can be canceled
		* @param args.propagate - Whether to dispatch dragmove events
		*/
		move(args) {
			return o(() => {
				var _a, _b;
				const { dragOperation } = this.manager;
				const { status, controller } = dragOperation;
				if (!status.dragging || !controller || controller.signal.aborted) return;
				const event = defaultPreventable({
					nativeEvent: args.event,
					operation: dragOperation.snapshot(),
					by: args.by,
					to: args.to
				}, (_a = args.cancelable) != null ? _a : true);
				if ((_b = args.propagate) != null ? _b : true) this.manager.monitor.dispatch("dragmove", event);
				queueMicrotask(() => {
					var _a2, _b2, _c3, _d, _e;
					if (event.defaultPrevented) return;
					const coordinates = (_e = args.to) != null ? _e : {
						x: dragOperation.position.current.x + ((_b2 = (_a2 = args.by) == null ? void 0 : _a2.x) != null ? _b2 : 0),
						y: dragOperation.position.current.y + ((_d = (_c3 = args.by) == null ? void 0 : _c3.y) != null ? _d : 0)
					};
					dragOperation.position.current = coordinates;
				});
			});
		}
		/**
		* Stops the current drag operation.
		*
		* @param args - Configuration for stopping the operation
		* @param args.event - The event that triggered the stop
		* @param args.canceled - Whether the operation was canceled
		* @remarks
		* This method:
		* - Dispatches a dragend event
		* - Allows suspension of the operation
		* - Handles cleanup of the operation state
		*/
		stop(args = {}) {
			return o(() => {
				var _a, _b;
				const { dragOperation } = this.manager;
				const { controller } = dragOperation;
				if (!controller || controller.signal.aborted) return;
				let promise;
				const suspend = () => {
					const output = {
						resume: () => {},
						abort: () => {}
					};
					promise = new Promise((resolve, reject) => {
						output.resume = resolve;
						output.abort = reject;
					});
					return output;
				};
				controller.abort();
				const end = () => {
					this.manager.renderer.rendering.then(() => {
						dragOperation.status.set("dropped");
						const dropping = o(() => {
							var _a2;
							return ((_a2 = dragOperation.source) == null ? void 0 : _a2.status) === "dropping";
						});
						const cleanup = () => {
							if (dragOperation.controller === controller) dragOperation.controller = void 0;
							dragOperation.reset();
						};
						if (dropping) {
							const { source } = dragOperation;
							const dispose = j$1(() => {
								if ((source == null ? void 0 : source.status) === "idle") {
									dispose();
									cleanup();
								}
							});
						} else this.manager.renderer.rendering.then(cleanup);
					});
				};
				dragOperation.canceled = (_a = args.canceled) != null ? _a : false;
				this.manager.monitor.dispatch("dragend", {
					nativeEvent: args.event,
					operation: dragOperation.snapshot(),
					canceled: (_b = args.canceled) != null ? _b : false,
					suspend
				});
				if (promise) promise.then(end).catch(() => dragOperation.reset());
				else end();
			});
		}
	};
	Sensor = class extends Plugin {
		/**
		* Creates a new sensor instance.
		*
		* @param manager - The drag drop manager instance
		* @param options - Optional sensor configuration
		*/
		constructor(manager, options) {
			super(manager, options);
			this.manager = manager;
			this.options = options;
		}
	};
	ActivationController = class extends AbortController {
		constructor(constraints, onActivate) {
			super();
			this.constraints = constraints;
			this.onActivate = onActivate;
			this.activated = false;
			for (const constraint of constraints != null ? constraints : []) constraint.controller = this;
		}
		onEvent(event) {
			var _a;
			if (this.activated) return;
			if ((_a = this.constraints) == null ? void 0 : _a.length) for (const constraint of this.constraints) constraint.onEvent(event);
			else this.activate(event);
		}
		activate(event) {
			if (this.activated) return;
			this.activated = true;
			this.onActivate(event);
		}
		abort(event) {
			this.activated = false;
			super.abort(event);
		}
	};
	ActivationConstraint = class {
		constructor(options) {
			this.options = options;
			__privateAdd$3(this, _controller);
		}
		set controller(controller) {
			__privateSet$3(this, _controller, controller);
			controller.signal.addEventListener("abort", () => this.abort());
		}
		/**
		* Called when the activation is triggered.
		*/
		activate(event) {
			var _a;
			(_a = __privateGet$3(this, _controller)) == null || _a.activate(event);
		}
	};
	_controller = /* @__PURE__ */ new WeakMap();
	Modifier = class extends Plugin {
		/**
		* Creates a new modifier instance.
		*
		* @param manager - The drag and drop manager that owns this modifier
		* @param options - Optional configuration for the modifier
		*/
		constructor(manager, options) {
			super(manager, options);
			this.manager = manager;
			this.options = options;
		}
		/**
		* Applies the modifier to the current drag operation.
		*
		* @param operation - The current state of the drag operation
		* @returns The transformed coordinates
		*
		* @remarks
		* Override this method to implement custom transformation logic.
		* The default implementation returns the original transform unchanged.
		*/
		apply(operation) {
			return operation.transform;
		}
	};
	DragDropRegistry = class {
		/**
		* Creates a new registry instance.
		*
		* @param manager - The drag and drop manager that owns this registry
		*/
		constructor(manager) {
			/** Registry for draggable entities */
			this.draggables = new EntityRegistry();
			/** Registry for droppable entities */
			this.droppables = new EntityRegistry();
			this.plugins = new PluginRegistry(manager);
			this.sensors = new PluginRegistry(manager);
			this.modifiers = new PluginRegistry(manager);
		}
		register(input, options) {
			if (input instanceof Draggable$1) return this.draggables.register(input.id, input);
			if (input instanceof Droppable$1) return this.droppables.register(input.id, input);
			if (input.prototype instanceof Modifier) return this.modifiers.register(input, options);
			if (input.prototype instanceof Sensor) return this.sensors.register(input, options);
			if (input.prototype instanceof Plugin) return this.plugins.register(input, options);
			throw new Error("Invalid instance type");
		}
		unregister(input) {
			if (input instanceof Entity) {
				if (input instanceof Draggable$1) return this.draggables.unregister(input.id, input);
				if (input instanceof Droppable$1) return this.droppables.unregister(input.id, input);
				return () => {};
			}
			if (input.prototype instanceof Modifier) return this.modifiers.unregister(input);
			if (input.prototype instanceof Sensor) return this.sensors.unregister(input);
			if (input.prototype instanceof Plugin) return this.plugins.unregister(input);
			throw new Error("Invalid instance type");
		}
		/**
		* Destroys all registered entities and cleans up resources.
		*
		* @remarks
		* This method:
		* - Destroys all draggable and droppable entities
		* - Destroys all plugins, sensors, and modifiers
		* - Cleans up any associated resources
		*/
		destroy() {
			this.draggables.destroy();
			this.droppables.destroy();
			this.plugins.destroy();
			this.sensors.destroy();
			this.modifiers.destroy();
		}
	};
	_shape_dec2 = [derived];
	_canceled_dec = [reactive], _activatorEvent_dec = [reactive], _sourceIdentifier_dec = [reactive], _targetIdentifier_dec = [reactive], _modifiers_dec2 = [reactive], _source_dec = [derived], _target_dec = [derived], _transform_dec = [derived];
	DragOperation = class {
		/**
		* Creates a new drag operation instance.
		*
		* @param manager - The drag and drop manager that owns this operation
		*/
		constructor(manager) {
			__runInitializers$2(_init6$1, 5, this);
			__privateAdd$3(this, _manager2);
			__privateAdd$3(this, _previousSource);
			__privateAdd$3(this, _shape2, new ValueHistory(void 0, (a, b) => a && b ? a.equals(b) : a === b));
			/** Current status of the drag operation */
			this.status = new Status();
			__privateAdd$3(this, _canceled, __runInitializers$2(_init6$1, 8, this, false)), __runInitializers$2(_init6$1, 11, this);
			__privateAdd$3(this, _activatorEvent, __runInitializers$2(_init6$1, 12, this, null)), __runInitializers$2(_init6$1, 15, this);
			__privateAdd$3(this, _sourceIdentifier, __runInitializers$2(_init6$1, 16, this, null)), __runInitializers$2(_init6$1, 19, this);
			__privateAdd$3(this, _targetIdentifier, __runInitializers$2(_init6$1, 20, this, null)), __runInitializers$2(_init6$1, 23, this);
			__privateAdd$3(this, _modifiers2, __runInitializers$2(_init6$1, 24, this, [])), __runInitializers$2(_init6$1, 27, this);
			/** Current position of the dragged entity */
			this.position = new Position$1({
				x: 0,
				y: 0
			});
			__privateAdd$3(this, _transform, {
				x: 0,
				y: 0
			});
			__privateSet$3(this, _manager2, manager);
		}
		get shape() {
			const { current, initial, previous } = __privateGet$3(this, _shape2);
			if (!current || !initial) return null;
			return {
				current,
				initial,
				previous
			};
		}
		/**
		* Sets the shape of the dragged entity.
		*
		* @param value - The new shape or null to reset
		*/
		set shape(value) {
			if (!value) __privateGet$3(this, _shape2).reset();
			else __privateGet$3(this, _shape2).current = value;
		}
		get source() {
			var _a;
			const identifier = this.sourceIdentifier;
			if (identifier == null) return null;
			const value = __privateGet$3(this, _manager2).registry.draggables.get(identifier);
			if (value) __privateSet$3(this, _previousSource, value);
			return (_a = value != null ? value : __privateGet$3(this, _previousSource)) != null ? _a : null;
		}
		get target() {
			var _a;
			const identifier = this.targetIdentifier;
			return identifier != null ? (_a = __privateGet$3(this, _manager2).registry.droppables.get(identifier)) != null ? _a : null : null;
		}
		get transform() {
			const { x, y } = this.position.delta;
			let transform = {
				x,
				y
			};
			for (const modifier of this.modifiers) transform = modifier.apply(__spreadProps$3(__spreadValues$3({}, this.snapshot()), { transform }));
			__privateSet$3(this, _transform, transform);
			return transform;
		}
		/**
		* Creates a snapshot of the current drag operation state.
		*
		* @returns An immutable snapshot of the current operation state
		*/
		snapshot() {
			return o(() => ({
				source: this.source,
				target: this.target,
				activatorEvent: this.activatorEvent,
				transform: __privateGet$3(this, _transform),
				shape: this.shape ? snapshot(this.shape) : null,
				position: snapshot(this.position),
				status: snapshot(this.status),
				canceled: this.canceled
			}));
		}
		/**
		* Resets the drag operation to its initial state.
		*
		* @remarks
		* This method:
		* - Sets status to idle
		* - Clears source and target identifiers
		* - Resets shape history
		* - Resets position and transform
		* - Clears modifiers
		*/
		reset() {
			n(() => {
				this.status.set("idle");
				this.sourceIdentifier = null;
				this.targetIdentifier = null;
				__privateGet$3(this, _shape2).reset();
				this.position.reset({
					x: 0,
					y: 0
				});
				__privateSet$3(this, _transform, {
					x: 0,
					y: 0
				});
				this.modifiers = [];
			});
		}
	};
	_init6$1 = __decoratorStart$2(null);
	_manager2 = /* @__PURE__ */ new WeakMap();
	_previousSource = /* @__PURE__ */ new WeakMap();
	_shape2 = /* @__PURE__ */ new WeakMap();
	_canceled = /* @__PURE__ */ new WeakMap();
	_activatorEvent = /* @__PURE__ */ new WeakMap();
	_sourceIdentifier = /* @__PURE__ */ new WeakMap();
	_targetIdentifier = /* @__PURE__ */ new WeakMap();
	_modifiers2 = /* @__PURE__ */ new WeakMap();
	_transform = /* @__PURE__ */ new WeakMap();
	__decorateElement$2(_init6$1, 2, "shape", _shape_dec2, DragOperation);
	__decorateElement$2(_init6$1, 4, "canceled", _canceled_dec, DragOperation, _canceled);
	__decorateElement$2(_init6$1, 4, "activatorEvent", _activatorEvent_dec, DragOperation, _activatorEvent);
	__decorateElement$2(_init6$1, 4, "sourceIdentifier", _sourceIdentifier_dec, DragOperation, _sourceIdentifier);
	__decorateElement$2(_init6$1, 4, "targetIdentifier", _targetIdentifier_dec, DragOperation, _targetIdentifier);
	__decorateElement$2(_init6$1, 4, "modifiers", _modifiers_dec2, DragOperation, _modifiers2);
	__decorateElement$2(_init6$1, 2, "source", _source_dec, DragOperation);
	__decorateElement$2(_init6$1, 2, "target", _target_dec, DragOperation);
	__decorateElement$2(_init6$1, 2, "transform", _transform_dec, DragOperation);
	__decoratorMetadata$2(_init6$1, DragOperation);
	defaultRenderer = { get rendering() {
		return Promise.resolve();
	} };
	DragDropManager$1 = class {
		/**
		* Creates a new drag and drop manager instance.
		*
		* @param config - Optional configuration for plugins, sensors, modifiers, and renderer
		*/
		constructor(config) {
			/**
			* Cleans up resources and stops any active drag operations.
			*/
			this.destroy = () => {
				if (!this.dragOperation.status.idle) this.actions.stop({ canceled: true });
				this.dragOperation.modifiers.forEach((modifier) => modifier.destroy());
				this.registry.destroy();
				this.collisionObserver.destroy();
			};
			var _a;
			const raw = config != null ? config : {};
			const plugins = resolveCustomizable(raw.plugins, []);
			const sensors = resolveCustomizable(raw.sensors, []);
			const modifiers = resolveCustomizable(raw.modifiers, []);
			const renderer = (_a = raw.renderer) != null ? _a : defaultRenderer;
			const monitor = new DragDropMonitor(this);
			const registry = new DragDropRegistry(this);
			this.registry = registry;
			this.monitor = monitor;
			this.renderer = renderer;
			this.actions = new DragActions(this);
			this.dragOperation = new DragOperation(this);
			this.collisionObserver = new CollisionObserver(this);
			this.plugins = [CollisionNotifier, ...plugins];
			this.modifiers = modifiers;
			this.sensors = sensors;
			const { destroy } = this;
			const cleanup = effects(() => {
				var _a2, _b, _c3;
				const currentModifiers = o(() => this.dragOperation.modifiers);
				const managerModifiers = this.modifiers;
				for (const modifier of currentModifiers) if (!managerModifiers.includes(modifier)) modifier.destroy();
				this.dragOperation.modifiers = (_c3 = (_b = (_a2 = this.dragOperation.source) == null ? void 0 : _a2.modifiers) == null ? void 0 : _b.map((modifier) => {
					const { plugin, options } = descriptor(modifier);
					return new plugin(this, options);
				})) != null ? _c3 : managerModifiers;
			});
			this.destroy = () => {
				cleanup();
				destroy();
			};
		}
		/**
		* Gets the list of active plugins.
		*
		* @returns Array of active plugin instances
		*/
		get plugins() {
			return this.registry.plugins.values;
		}
		/**
		* Sets the list of plugins to be used by the manager.
		*
		* @param plugins - Array of plugin constructors or instances
		*/
		set plugins(plugins) {
			this.registry.plugins.values = plugins;
		}
		/**
		* Gets the list of active modifiers.
		*
		* @returns Array of active modifier instances
		*/
		get modifiers() {
			return this.registry.modifiers.values;
		}
		/**
		* Sets the list of modifiers to be used by the manager.
		*
		* @param modifiers - Array of modifier constructors or instances
		*/
		set modifiers(modifiers) {
			this.registry.modifiers.values = modifiers;
		}
		/**
		* Gets the list of active sensors.
		*
		* @returns Array of active sensor instances
		*/
		get sensors() {
			return this.registry.sensors.values;
		}
		/**
		* Sets the list of sensors to be used by the manager.
		*
		* @param sensors - Array of sensor constructors or instances
		*/
		set sensors(sensors) {
			this.registry.sensors.values = sensors;
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+dom@0.5.0/node_modules/@dnd-kit/dom/utilities.js
function isKeyframeEffect(effect) {
	if (!effect) return false;
	if (effect instanceof KeyframeEffect) return true;
	return "getKeyframes" in effect && typeof effect.getKeyframes === "function";
}
function getFinalKeyframe(element, match) {
	const animations2 = element.getAnimations();
	let result = null;
	for (const animation of animations2) {
		if (animation.playState !== "running") continue;
		const { effect } = animation;
		const matchedKeyframes = (isKeyframeEffect(effect) ? effect.getKeyframes() : []).filter(match);
		if (matchedKeyframes.length > 0) result = [matchedKeyframes[matchedKeyframes.length - 1], animation];
	}
	return result;
}
function getBoundingRectangle(element) {
	const { width, height, top, left, bottom, right } = element.getBoundingClientRect();
	return {
		width,
		height,
		top,
		left,
		bottom,
		right
	};
}
function isWindow(element) {
	const elementString = Object.prototype.toString.call(element);
	return elementString === "[object Window]" || elementString === "[object global]";
}
function isNode(node) {
	return "nodeType" in node;
}
function getWindow(target) {
	var _a, _b, _c;
	if (!target) return window;
	if (isWindow(target)) return target;
	if (!isNode(target)) return window;
	if ("defaultView" in target) return (_a = target.defaultView) != null ? _a : window;
	return (_c = (_b = target.ownerDocument) == null ? void 0 : _b.defaultView) != null ? _c : window;
}
function isDocument(node) {
	const { Document: Document2 } = getWindow(node);
	return node instanceof Document2 || "nodeType" in node && node.nodeType === Node.DOCUMENT_NODE;
}
function isHTMLElement(node) {
	if (!node || isWindow(node)) return false;
	return node instanceof getWindow(node).HTMLElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("html");
}
function isSVGElement(node) {
	return node instanceof getWindow(node).SVGElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("svg");
}
function getDocument(target) {
	if (!target) return document;
	if (isWindow(target)) return target.document;
	if (!isNode(target)) return document;
	if (isDocument(target)) return target;
	if (isHTMLElement(target) || isSVGElement(target)) return target.ownerDocument;
	return document;
}
function getViewportBoundingRectangle(element) {
	var _a, _b, _c, _d;
	const { documentElement } = getDocument(element);
	const vv = getWindow(element).visualViewport;
	const width = (_a = vv == null ? void 0 : vv.width) != null ? _a : documentElement.clientWidth;
	const height = (_b = vv == null ? void 0 : vv.height) != null ? _b : documentElement.clientHeight;
	const top = (_c = vv == null ? void 0 : vv.offsetTop) != null ? _c : 0;
	const left = (_d = vv == null ? void 0 : vv.offsetLeft) != null ? _d : 0;
	return {
		top,
		left,
		right: left + width,
		bottom: top + height,
		width,
		height
	};
}
function isOverflowVisible(element, style) {
	if (isDetailsElement(element) && element.open === false) return false;
	const { overflow, overflowX, overflowY } = getComputedStyle(element);
	return overflow === "visible" && overflowX === "visible" && overflowY === "visible";
}
function isDetailsElement(element) {
	return element.tagName === "DETAILS";
}
function getVisibleBoundingRectangle(element, boundingClientRect = element.getBoundingClientRect(), margin = 0) {
	var _a, _b, _c, _d, _e;
	let rect = boundingClientRect;
	const { ownerDocument } = element;
	const ownerWindow = (_a = ownerDocument.defaultView) != null ? _a : window;
	let ancestor = element.parentElement;
	while (ancestor && ancestor !== ownerDocument.documentElement) {
		if (!isOverflowVisible(ancestor)) {
			const ancestorRect = ancestor.getBoundingClientRect();
			const marginTop = margin * (ancestorRect.bottom - ancestorRect.top);
			const marginRight = margin * (ancestorRect.right - ancestorRect.left);
			const marginBottom = margin * (ancestorRect.bottom - ancestorRect.top);
			const marginLeft = margin * (ancestorRect.right - ancestorRect.left);
			rect = {
				top: Math.max(rect.top, ancestorRect.top - marginTop),
				right: Math.min(rect.right, ancestorRect.right + marginRight),
				bottom: Math.min(rect.bottom, ancestorRect.bottom + marginBottom),
				left: Math.max(rect.left, ancestorRect.left - marginLeft),
				width: 0,
				height: 0
			};
			rect.width = rect.right - rect.left;
			rect.height = rect.bottom - rect.top;
		}
		ancestor = ancestor.parentElement;
	}
	const vv = ownerWindow.visualViewport;
	const viewportTop = (_b = vv == null ? void 0 : vv.offsetTop) != null ? _b : 0;
	const viewportLeft = (_c = vv == null ? void 0 : vv.offsetLeft) != null ? _c : 0;
	const viewportWidth = (_d = vv == null ? void 0 : vv.width) != null ? _d : ownerWindow.innerWidth;
	const viewportHeight = (_e = vv == null ? void 0 : vv.height) != null ? _e : ownerWindow.innerHeight;
	const viewportMarginY = margin * viewportHeight;
	const viewportMarginX = margin * viewportWidth;
	rect = {
		top: Math.max(rect.top, viewportTop - viewportMarginY),
		right: Math.min(rect.right, viewportLeft + viewportWidth + viewportMarginX),
		bottom: Math.min(rect.bottom, viewportTop + viewportHeight + viewportMarginY),
		left: Math.max(rect.left, viewportLeft - viewportMarginX),
		width: 0,
		height: 0
	};
	rect.width = rect.right - rect.left;
	rect.height = rect.bottom - rect.top;
	if (rect.width < 0) rect.width = 0;
	if (rect.height < 0) rect.height = 0;
	return rect;
}
function getEventCoordinates(event) {
	return {
		x: event.clientX,
		y: event.clientY
	};
}
function getDocuments(rootDoc = document, seen = /* @__PURE__ */ new Set()) {
	if (seen.has(rootDoc)) return [];
	seen.add(rootDoc);
	const docs = [rootDoc];
	for (const frame of Array.from(rootDoc.querySelectorAll("iframe, frame"))) try {
		const childDoc = frame.contentDocument;
		if (childDoc && !seen.has(childDoc)) docs.push(...getDocuments(childDoc, seen));
	} catch (e) {}
	try {
		const win = rootDoc.defaultView;
		if (win && win !== window.top) {
			const parentWin = win.parent;
			if (parentWin && parentWin.document && parentWin.document !== rootDoc) docs.push(...getDocuments(parentWin.document, seen));
		}
	} catch (e) {}
	return docs;
}
function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function getFixedPositionOffset() {
	var _a, _b;
	const vv = isSafari() ? window.visualViewport : null;
	return {
		x: (_a = vv == null ? void 0 : vv.offsetLeft) != null ? _a : 0,
		y: (_b = vv == null ? void 0 : vv.offsetTop) != null ? _b : 0
	};
}
function isShadowRoot(target) {
	if (!target || !isNode(target)) return false;
	return target instanceof getWindow(target).ShadowRoot;
}
function getRoot(target) {
	if (target && isNode(target)) {
		let root = target.getRootNode();
		if (isShadowRoot(root)) return root;
		else if (root instanceof Document) return root;
	}
	return getDocument(target);
}
function prefersReducedMotion(window2) {
	return window2.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function cloneElement(element) {
	const selector = "input, textarea, select, canvas, [contenteditable]";
	const clonedElement = element.cloneNode(true);
	const fields = Array.from(element.querySelectorAll(selector));
	Array.from(clonedElement.querySelectorAll(selector)).forEach((field, index) => {
		const originalField = fields[index];
		if (isField(field) && isField(originalField)) {
			if (field.type !== "file") field.value = originalField.value;
			if (field.type === "radio" && field.name) field.name = `Cloned__${field.name}`;
		}
		if (isCanvasElement(field) && isCanvasElement(originalField) && originalField.width > 0 && originalField.height > 0) field.getContext("2d")?.drawImage(originalField, 0, 0);
	});
	return clonedElement;
}
function isField(element) {
	return "value" in element;
}
function isCanvasElement(element) {
	return element.tagName === "CANVAS";
}
function getElementFromPoint(root, { x, y }) {
	const element = root.elementFromPoint(x, y);
	if (isIFrameElement(element)) {
		const { contentDocument } = element;
		if (contentDocument) {
			const { left, top } = element.getBoundingClientRect();
			return getElementFromPoint(contentDocument, {
				x: x - left,
				y: y - top
			});
		}
	}
	return element;
}
function isIFrameElement(element) {
	return (element == null ? void 0 : element.tagName) === "IFRAME";
}
function getInteractiveElement(element) {
	return element.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
function getFrameElement(el) {
	const refWindow = el == null ? void 0 : el.ownerDocument.defaultView;
	if (refWindow && refWindow.self !== refWindow.parent) return refWindow.frameElement;
}
function getFrameElements(el) {
	const frames = /* @__PURE__ */ new Set();
	let frame = getFrameElement(el);
	while (frame) {
		frames.add(frame);
		frame = getFrameElement(frame);
	}
	return frames;
}
function timeout(callback, duration) {
	const id = setTimeout(callback, duration);
	return () => clearTimeout(id);
}
function throttle(func, limit) {
	const time = () => performance.now();
	let cancel;
	let lastRan;
	return function(...args) {
		const context = this;
		if (!lastRan) {
			func.apply(context, args);
			lastRan = time();
		} else {
			cancel?.();
			cancel = timeout(() => {
				func.apply(context, args);
				lastRan = time();
			}, limit - (time() - lastRan));
		}
	};
}
function isRectEqual(a, b) {
	if (a === b) return true;
	if (!a || !b) return false;
	return a.top == b.top && a.left == b.left && a.right == b.right && a.bottom == b.bottom;
}
function isVisible(element, boundingClientRect = element.getBoundingClientRect()) {
	const { width, height } = getVisibleBoundingRectangle(element, boundingClientRect);
	return width > 0 && height > 0;
}
function addFrameListener(frame, callback) {
	let cached = framePositionObservers.get(frame);
	if (!cached) cached = {
		disconnect: new PositionObserver(frame, (boundingClientRect) => {
			const cached2 = framePositionObservers.get(frame);
			if (!cached2) return;
			cached2.callbacks.forEach((callback2) => callback2(boundingClientRect));
		}, { skipInitial: true }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	};
	cached.callbacks.add(callback);
	framePositionObservers.set(frame, cached);
	return () => {
		cached.callbacks.delete(callback);
		if (cached.callbacks.size === 0) {
			framePositionObservers.delete(frame);
			cached.disconnect();
		}
	};
}
function observeParentFrames(frames, callback) {
	const cleanup = /* @__PURE__ */ new Set();
	for (const frame of frames) {
		const remove = addFrameListener(frame, callback);
		cleanup.add(remove);
	}
	return () => cleanup.forEach((remove) => remove());
}
function addScrollListener(element, callback) {
	var _a;
	const doc = element.ownerDocument;
	if (!scrollListeners.has(doc)) {
		const controller = new AbortController();
		const listeners2 = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (event) => listeners2.forEach((listener) => listener(event)), {
			capture: true,
			passive: true,
			signal: controller.signal
		});
		scrollListeners.set(doc, {
			disconnect: () => controller.abort(),
			listeners: listeners2
		});
	}
	const { listeners, disconnect } = (_a = scrollListeners.get(doc)) != null ? _a : {};
	if (!listeners || !disconnect) return () => {};
	listeners.add(callback);
	return () => {
		listeners.delete(callback);
		if (listeners.size === 0) {
			disconnect();
			scrollListeners.delete(doc);
		}
	};
}
function supportsPopover(element) {
	return "showPopover" in element && "hidePopover" in element && typeof element.showPopover === "function" && typeof element.hidePopover === "function";
}
function showPopover(element) {
	try {
		if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover") && !element.matches(":popover-open")) element.showPopover();
	} catch (error) {}
}
function isDocumentScrollingElement(element) {
	if (!canUseDOM || !element) return false;
	return element === getDocument(element).scrollingElement;
}
function getScrollPosition(scrollableElement) {
	var _a, _b;
	const window2 = getWindow(scrollableElement);
	const rect = isDocumentScrollingElement(scrollableElement) ? getViewportBoundingRectangle(scrollableElement) : getBoundingRectangle(scrollableElement);
	const vv = window2.visualViewport;
	const dimensions = isDocumentScrollingElement(scrollableElement) ? {
		height: (_a = vv == null ? void 0 : vv.height) != null ? _a : window2.innerHeight,
		width: (_b = vv == null ? void 0 : vv.width) != null ? _b : window2.innerWidth
	} : {
		height: scrollableElement.clientHeight,
		width: scrollableElement.clientWidth
	};
	const position = {
		current: {
			x: scrollableElement.scrollLeft,
			y: scrollableElement.scrollTop
		},
		max: {
			x: scrollableElement.scrollWidth - dimensions.width,
			y: scrollableElement.scrollHeight - dimensions.height
		}
	};
	return {
		rect,
		position,
		isTop: position.current.y <= 0,
		isLeft: position.current.x <= 0,
		isBottom: position.current.y >= position.max.y,
		isRight: position.current.x >= position.max.x
	};
}
function canScroll(scrollableElement, by) {
	const { isTop, isBottom, isLeft, isRight, position } = getScrollPosition(scrollableElement);
	const { x, y } = by != null ? by : {
		x: 0,
		y: 0
	};
	const top = !isTop && position.current.y + y > 0;
	const bottom = !isBottom && position.current.y + y < position.max.y;
	const left = !isLeft && position.current.x + x > 0;
	const right = !isRight && position.current.x + x < position.max.x;
	return {
		top,
		bottom,
		left,
		right,
		x: left || right,
		y: top || bottom
	};
}
function getComputedStyles(element, cached = false) {
	if (!cached) return computeStyles(element);
	let styles = cachedStyles.get(element);
	if (styles) return styles;
	styles = computeStyles(element);
	cachedStyles.set(element, styles);
	scheduler2.schedule(clear);
	return styles;
}
function computeStyles(element) {
	return getWindow(element).getComputedStyle(element);
}
function isFixed(node, computedStyle = getComputedStyles(node, true)) {
	return computedStyle.position === "fixed" || computedStyle.position === "sticky";
}
function isScrollable(element, computedStyle = getComputedStyles(element, true)) {
	const overflowRegex = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((property) => {
		const value = computedStyle[property];
		return typeof value === "string" ? overflowRegex.test(value) : false;
	});
}
function getScrollableAncestors(element, options = defaultOptions) {
	const { limit, excludeElement, escapeShadowDOM } = options;
	const scrollParents = /* @__PURE__ */ new Set();
	function findScrollableAncestors(node) {
		if (limit != null && scrollParents.size >= limit) return scrollParents;
		if (!node) return scrollParents;
		if (isDocument(node) && node.scrollingElement != null && !scrollParents.has(node.scrollingElement)) {
			scrollParents.add(node.scrollingElement);
			return scrollParents;
		}
		if (escapeShadowDOM && isShadowRoot(node)) return findScrollableAncestors(node.host);
		if (!isHTMLElement(node)) {
			if (isSVGElement(node)) return findScrollableAncestors(node.parentElement);
			return scrollParents;
		}
		if (scrollParents.has(node)) return scrollParents;
		const computedStyle = getComputedStyles(node, true);
		if (excludeElement && node === element);
		else if (isScrollable(node, computedStyle)) scrollParents.add(node);
		if (isFixed(node, computedStyle)) {
			const { scrollingElement } = node.ownerDocument;
			if (scrollingElement) scrollParents.add(scrollingElement);
			return scrollParents;
		}
		return findScrollableAncestors(node.parentNode);
	}
	if (!element) return scrollParents;
	return findScrollableAncestors(element);
}
function getFrameTransform(el, boundary = window.frameElement) {
	const transform = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!el) return transform;
	let frame = getFrameElement(el);
	while (frame) {
		if (frame === boundary) return transform;
		const rect = getBoundingRectangle(frame);
		const { x: scaleX, y: scaleY } = getScale(frame, rect);
		transform.x = transform.x + rect.left;
		transform.y = transform.y + rect.top;
		transform.scaleX = transform.scaleX * scaleX;
		transform.scaleY = transform.scaleY * scaleY;
		frame = getFrameElement(frame);
	}
	return transform;
}
function getScale(element, boundingRectangle = getBoundingRectangle(element)) {
	const width = Math.round(boundingRectangle.width);
	const height = Math.round(boundingRectangle.height);
	if (isHTMLElement(element)) return {
		x: width / element.offsetWidth,
		y: height / element.offsetHeight
	};
	const styles = getComputedStyles(element, true);
	return {
		x: (parseFloat(styles.width) || width) / width,
		y: (parseFloat(styles.height) || height) / height
	};
}
function parseScale(scale) {
	if (!scale || scale === "none") return null;
	const values = scale.split(" ");
	const x = parseFloat(values[0]);
	const y = parseFloat(values[1]);
	if (isNaN(x) && isNaN(y)) return null;
	return {
		x: isNaN(x) ? y : x,
		y: isNaN(y) ? x : y
	};
}
function parseTranslate(translate) {
	if (!translate || translate === "none") return null;
	const [x, y, z = "0"] = translate.split(" ");
	const output = {
		x: parseFloat(x),
		y: parseFloat(y),
		z: parseInt(z, 10)
	};
	if (isNaN(output.x) && isNaN(output.y)) return null;
	return {
		x: isNaN(output.x) ? 0 : output.x,
		y: isNaN(output.y) ? 0 : output.y,
		z: isNaN(output.z) ? 0 : output.z
	};
}
function parseTransform(computedStyles) {
	var _a, _b, _c, _d, _e, _f, _g, _h, _i;
	const { scale, transform, translate } = computedStyles;
	const parsedScale = parseScale(scale);
	const parsedTranslate = parseTranslate(translate);
	const parsedMatrix = parseTransformMatrix(transform);
	if (!parsedMatrix && !parsedScale && !parsedTranslate) return null;
	const normalizedScale = {
		x: (_a = parsedScale == null ? void 0 : parsedScale.x) != null ? _a : 1,
		y: (_b = parsedScale == null ? void 0 : parsedScale.y) != null ? _b : 1
	};
	const normalizedTranslate = {
		x: (_c = parsedTranslate == null ? void 0 : parsedTranslate.x) != null ? _c : 0,
		y: (_d = parsedTranslate == null ? void 0 : parsedTranslate.y) != null ? _d : 0
	};
	const normalizedMatrix = {
		x: (_e = parsedMatrix == null ? void 0 : parsedMatrix.x) != null ? _e : 0,
		y: (_f = parsedMatrix == null ? void 0 : parsedMatrix.y) != null ? _f : 0,
		scaleX: (_g = parsedMatrix == null ? void 0 : parsedMatrix.scaleX) != null ? _g : 1,
		scaleY: (_h = parsedMatrix == null ? void 0 : parsedMatrix.scaleY) != null ? _h : 1
	};
	return {
		x: normalizedTranslate.x + normalizedMatrix.x,
		y: normalizedTranslate.y + normalizedMatrix.y,
		z: (_i = parsedTranslate == null ? void 0 : parsedTranslate.z) != null ? _i : 0,
		scaleX: normalizedScale.x * normalizedMatrix.scaleX,
		scaleY: normalizedScale.y * normalizedMatrix.scaleY
	};
}
function parseTransformMatrix(transform) {
	if (transform.startsWith("matrix3d(")) {
		const transformArray = transform.slice(9, -1).split(/, /);
		return {
			x: +transformArray[12],
			y: +transformArray[13],
			scaleX: +transformArray[0],
			scaleY: +transformArray[5]
		};
	} else if (transform.startsWith("matrix(")) {
		const transformArray = transform.slice(7, -1).split(/, /);
		return {
			x: +transformArray[4],
			y: +transformArray[5],
			scaleX: +transformArray[0],
			scaleY: +transformArray[3]
		};
	}
	return null;
}
function detectScrollIntent(scrollableElement, coordinates, intent, acceleration = 25, thresholdPercentage = defaultThreshold, tolerance = defaultTolerance) {
	const { x, y } = coordinates;
	const { rect, isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollableElement);
	const frameTransform = getFrameTransform(scrollableElement);
	const parsedTransform = parseTransform(getComputedStyles(scrollableElement, true));
	const isXAxisInverted = parsedTransform !== null ? (parsedTransform == null ? void 0 : parsedTransform.scaleX) < 0 : false;
	const isYAxisInverted = parsedTransform !== null ? (parsedTransform == null ? void 0 : parsedTransform.scaleY) < 0 : false;
	const scrollContainerRect = new Rectangle(rect.left * frameTransform.scaleX + frameTransform.x, rect.top * frameTransform.scaleY + frameTransform.y, rect.width * frameTransform.scaleX, rect.height * frameTransform.scaleY);
	const direction = {
		x: 0,
		y: 0
	};
	const speed = {
		x: 0,
		y: 0
	};
	const threshold2 = {
		height: scrollContainerRect.height * thresholdPercentage.y,
		width: scrollContainerRect.width * thresholdPercentage.x
	};
	if (threshold2.height > 0 && (!isTop || isYAxisInverted && !isBottom) && y <= scrollContainerRect.top + threshold2.height && (intent == null ? void 0 : intent.y) !== 1 && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
		direction.y = isYAxisInverted ? 1 : -1;
		speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold2.height - y) / threshold2.height);
	} else if (threshold2.height > 0 && (!isBottom || isYAxisInverted && !isTop) && y >= scrollContainerRect.bottom - threshold2.height && (intent == null ? void 0 : intent.y) !== -1 && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
		direction.y = isYAxisInverted ? -1 : 1;
		speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold2.height - y) / threshold2.height);
	}
	if (threshold2.width > 0 && (!isRight || isXAxisInverted && !isLeft) && x >= scrollContainerRect.right - threshold2.width && (intent == null ? void 0 : intent.x) !== -1 && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
		direction.x = isXAxisInverted ? -1 : 1;
		speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold2.width - x) / threshold2.width);
	} else if (threshold2.width > 0 && (!isLeft || isXAxisInverted && !isRight) && x <= scrollContainerRect.left + threshold2.width && (intent == null ? void 0 : intent.x) !== 1 && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
		direction.x = isXAxisInverted ? 1 : -1;
		speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold2.width - x) / threshold2.width);
	}
	return {
		direction,
		speed
	};
}
function scrollIntoViewIfNeeded(el, { block = "nearest", inline = "nearest" } = {}) {
	if (!isHTMLElement(el)) return;
	const scrollableAncestors = getScrollableAncestors(el);
	const processedAncestors = [];
	for (const ancestor of scrollableAncestors) {
		if (!isHTMLElement(ancestor)) continue;
		const { top, left } = getOffsetRelativeTo(el, ancestor);
		let adjustedTop = top;
		let adjustedLeft = left;
		for (const inner of processedAncestors) {
			adjustedTop -= inner.scrollTop;
			adjustedLeft -= inner.scrollLeft;
		}
		if (block !== "none") {
			const overTop = adjustedTop < ancestor.scrollTop;
			if (overTop !== adjustedTop + el.offsetHeight > ancestor.scrollTop + ancestor.clientHeight) if (block === "center") ancestor.scrollTop = adjustedTop - ancestor.clientHeight / 2 + el.offsetHeight / 2;
			else if (overTop) ancestor.scrollTop = adjustedTop;
			else ancestor.scrollTop = adjustedTop + el.offsetHeight - ancestor.clientHeight;
		}
		if (inline !== "none") {
			const overLeft = adjustedLeft < ancestor.scrollLeft;
			if (overLeft !== adjustedLeft + el.offsetWidth > ancestor.scrollLeft + ancestor.clientWidth) if (inline === "center") ancestor.scrollLeft = adjustedLeft - ancestor.clientWidth / 2 + el.offsetWidth / 2;
			else if (overLeft) ancestor.scrollLeft = adjustedLeft;
			else ancestor.scrollLeft = adjustedLeft + el.offsetWidth - ancestor.clientWidth;
		}
		processedAncestors.push(ancestor);
	}
}
function getDocumentOffset(element) {
	let top = 0;
	let left = 0;
	let current = element;
	while (current) {
		top += current.offsetTop;
		left += current.offsetLeft;
		const offsetParent = current.offsetParent;
		if (!isHTMLElement(offsetParent)) break;
		top += offsetParent.clientTop;
		left += offsetParent.clientLeft;
		current = offsetParent;
	}
	return {
		top,
		left
	};
}
function getOffsetRelativeTo(element, ancestor) {
	const elOffset = getDocumentOffset(element);
	const ancestorOffset = getDocumentOffset(ancestor);
	return {
		top: elOffset.top - ancestorOffset.top - ancestor.clientTop,
		left: elOffset.left - ancestorOffset.left - ancestor.clientLeft
	};
}
function applyTransform(rect, parsedTransform, transformOrigin) {
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left + translateX + (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top + translateY + (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width * scaleX : rect.width;
	const h = scaleY ? rect.height * scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
function inverseTransform(rect, parsedTransform, transformOrigin) {
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width / scaleX : rect.width;
	const h = scaleY ? rect.height / scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
function animateTransform({ element, keyframes, options }) {
	return element.animate(keyframes, options).finished;
}
function getDocumentAnimations(element) {
	const document2 = element.ownerDocument;
	let documentAnimations = animations.get(document2);
	if (documentAnimations) return documentAnimations;
	documentAnimations = document2.getAnimations();
	animations.set(document2, documentAnimations);
	scheduler3$1.schedule(clear2);
	const elementAnimations = documentAnimations.filter((animation) => isKeyframeEffect(animation.effect) && animation.effect.target === element);
	animations.set(element, elementAnimations);
	return documentAnimations;
}
function forceFinishAnimations(element, options) {
	const animations2 = getDocumentAnimations(element).filter((animation) => {
		var _a, _b;
		if (isKeyframeEffect(animation.effect)) {
			const { target } = animation.effect;
			if ((_b = target && ((_a = options.isValidTarget) == null ? void 0 : _a.call(options, target))) != null ? _b : true) return animation.effect.getKeyframes().some((keyframe) => {
				for (const property of options.properties) if (keyframe[property]) return true;
			});
		}
	}).map((animation) => {
		const { effect, currentTime } = animation;
		const duration = effect == null ? void 0 : effect.getComputedTiming().duration;
		if (animation.pending || animation.playState === "finished") return;
		if (typeof duration == "number" && typeof currentTime == "number" && currentTime < duration) {
			animation.currentTime = duration;
			return () => {
				animation.currentTime = currentTime;
			};
		}
	});
	if (animations2.length > 0) return () => animations2.forEach((reset) => reset == null ? void 0 : reset());
}
function getProjectedTransform(element, computedStyles) {
	const animations2 = element.getAnimations();
	if (!animations2.length) return null;
	let latestTransform;
	let latestTranslate;
	let latestScale;
	let hasAnimatedProperty = false;
	for (const animation of animations2) {
		if (animation.playState !== "running") continue;
		const keyframes = isKeyframeEffect(animation.effect) ? animation.effect.getKeyframes() : [];
		const keyframe = keyframes[keyframes.length - 1];
		if (!keyframe) continue;
		const { transform, translate, scale } = keyframe;
		if (typeof transform === "string" && transform) {
			latestTransform = transform;
			hasAnimatedProperty = true;
		}
		if (typeof translate === "string" && translate) {
			latestTranslate = translate;
			hasAnimatedProperty = true;
		}
		if (typeof scale === "string" && scale) {
			latestScale = scale;
			hasAnimatedProperty = true;
		}
	}
	if (!hasAnimatedProperty) return null;
	return parseTransform({
		transform: latestTransform != null ? latestTransform : computedStyles.transform,
		translate: latestTranslate != null ? latestTranslate : computedStyles.translate,
		scale: latestScale != null ? latestScale : computedStyles.scale
	});
}
function supportsStyle(element) {
	return "style" in element && typeof element.style === "object" && element.style !== null && "setProperty" in element.style && "removeProperty" in element.style && typeof element.style.setProperty === "function" && typeof element.style.removeProperty === "function";
}
function isElement(target) {
	if (!target) return false;
	return target instanceof getWindow(target).Element || isNode(target) && target.nodeType === Node.ELEMENT_NODE;
}
function isKeyboardEvent(event) {
	if (!event) return false;
	const { KeyboardEvent } = getWindow(event.target);
	return event instanceof KeyboardEvent;
}
function isPointerEvent(event) {
	if (!event) return false;
	const { PointerEvent } = getWindow(event.target);
	return event instanceof PointerEvent;
}
function isTextInput(target) {
	if (!isElement(target)) return false;
	const { tagName } = target;
	return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable(target);
}
function isContentEditable(element) {
	return element.hasAttribute("contenteditable") && element.getAttribute("contenteditable") !== "false";
}
function generateUniqueId(prefix) {
	const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
	ids[prefix] = id;
	return `${prefix}-${id}`;
}
var __typeError$2, __accessCheck$2, __privateGet$2, __privateAdd$2, __privateSet$2, __privateMethod$1, canUseDOM, ProxiedElements, Listeners, Observer, _initialized, ResizeNotifier, threshold, THROTTLE_INTERVAL, _visible, _previousBoundingClientRect, _resizeObserver, _positionObserver, _visibilityObserver, _debug, _disconnected, _observePosition, _PositionObserver_instances, notify_fn, updateDebug_fn, PositionObserver, framePositionObservers, scrollListeners, _elementObserver, _disconnected2, _frames, _handleScroll, FrameObserver, Scheduler$1, scheduler, scheduler2, cachedStyles, clear, defaultOptions, ScrollDirection, defaultThreshold, defaultTolerance, scheduler3$1, animations, clear2, DOMRectangle, Styles, ids;
var init_utilities$1 = __esmMin((() => {
	init_dist$2();
	__typeError$2 = (msg) => {
		throw TypeError(msg);
	};
	__accessCheck$2 = (obj, member, msg) => member.has(obj) || __typeError$2("Cannot " + msg);
	__privateGet$2 = (obj, member, getter) => (__accessCheck$2(obj, member, "read from private field"), member.get(obj));
	__privateAdd$2 = (obj, member, value) => member.has(obj) ? __typeError$2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet$2 = (obj, member, value, setter) => (__accessCheck$2(obj, member, "write to private field"), member.set(obj, value), value);
	__privateMethod$1 = (obj, member, method) => (__accessCheck$2(obj, member, "access private method"), method);
	canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
	ProxiedElements = /* @__PURE__ */ new WeakMap();
	Listeners = class {
		constructor() {
			this.entries = /* @__PURE__ */ new Set();
			this.clear = () => {
				for (const entry of this.entries) {
					const [target, { type, listener, options }] = entry;
					target.removeEventListener(type, listener, options);
				}
				this.entries.clear();
			};
		}
		bind(target, input) {
			const eventTargets = Array.isArray(target) ? target : [target];
			const listeners = Array.isArray(input) ? input : [input];
			const entries = [];
			for (const target2 of eventTargets) for (const descriptor of listeners) {
				const { type, listener, options } = descriptor;
				const entry = [target2, descriptor];
				target2.addEventListener(type, listener, options);
				this.entries.add(entry);
				entries.push(entry);
			}
			const allEntries = this.entries;
			return function cleanup() {
				for (const entry of entries) {
					const [target2, { type, listener, options }] = entry;
					target2.removeEventListener(type, listener, options);
					allEntries.delete(entry);
				}
			};
		}
	};
	Observer = canUseDOM ? ResizeObserver : class MockResizeObserver {
		observe() {}
		unobserve() {}
		disconnect() {}
	};
	ResizeNotifier = class extends Observer {
		constructor(callback) {
			super((entries) => {
				if (!__privateGet$2(this, _initialized)) {
					__privateSet$2(this, _initialized, true);
					return;
				}
				callback(entries, this);
			});
			__privateAdd$2(this, _initialized, false);
		}
	};
	_initialized = /* @__PURE__ */ new WeakMap();
	threshold = Array.from({ length: 100 }, (_, index) => index / 100);
	THROTTLE_INTERVAL = 75;
	PositionObserver = class {
		constructor(element, callback, options = {
			debug: false,
			skipInitial: false
		}) {
			this.element = element;
			this.callback = callback;
			__privateAdd$2(this, _PositionObserver_instances);
			this.disconnect = () => {
				var _a, _b, _c;
				__privateSet$2(this, _disconnected, true);
				(_a = __privateGet$2(this, _resizeObserver)) == null || _a.disconnect();
				(_b = __privateGet$2(this, _positionObserver)) == null || _b.disconnect();
				__privateGet$2(this, _visibilityObserver).disconnect();
				(_c = __privateGet$2(this, _debug)) == null || _c.remove();
			};
			__privateAdd$2(this, _visible, true);
			__privateAdd$2(this, _previousBoundingClientRect);
			__privateAdd$2(this, _resizeObserver);
			__privateAdd$2(this, _positionObserver);
			__privateAdd$2(this, _visibilityObserver);
			__privateAdd$2(this, _debug);
			__privateAdd$2(this, _disconnected, false);
			__privateAdd$2(this, _observePosition, throttle(() => {
				var _a, _b, _c;
				const { element } = this;
				(_a = __privateGet$2(this, _positionObserver)) == null || _a.disconnect();
				if (__privateGet$2(this, _disconnected) || !__privateGet$2(this, _visible) || !element.isConnected) return;
				const root = (_b = element.ownerDocument) != null ? _b : document;
				const { innerHeight, innerWidth } = (_c = root.defaultView) != null ? _c : window;
				const clientRect = element.getBoundingClientRect();
				const { top, left, bottom, right } = getVisibleBoundingRectangle(element, clientRect);
				const insetTop = -Math.floor(top);
				const insetLeft = -Math.floor(left);
				const rootMargin = `${insetTop}px ${-Math.floor(innerWidth - right)}px ${-Math.floor(innerHeight - bottom)}px ${insetLeft}px`;
				this.boundingClientRect = clientRect;
				__privateSet$2(this, _positionObserver, new IntersectionObserver((entries) => {
					const [entry] = entries;
					const { intersectionRect } = entry;
					if ((entry.intersectionRatio !== 1 ? entry.intersectionRatio : Rectangle.intersectionRatio(intersectionRect, getVisibleBoundingRectangle(element))) !== 1) __privateGet$2(this, _observePosition).call(this);
				}, {
					threshold,
					rootMargin,
					root
				}));
				__privateGet$2(this, _positionObserver).observe(element);
				__privateMethod$1(this, _PositionObserver_instances, notify_fn).call(this);
			}, THROTTLE_INTERVAL));
			this.boundingClientRect = element.getBoundingClientRect();
			__privateSet$2(this, _visible, isVisible(element, this.boundingClientRect));
			let initial = true;
			this.callback = (boundingClientRect) => {
				if (initial) {
					initial = false;
					if (options.skipInitial) return;
				}
				callback(boundingClientRect);
			};
			const root = element.ownerDocument;
			if (options == null ? void 0 : options.debug) {
				__privateSet$2(this, _debug, document.createElement("div"));
				__privateGet$2(this, _debug).style.background = "rgba(0,0,0,0.15)";
				__privateGet$2(this, _debug).style.position = "fixed";
				__privateGet$2(this, _debug).style.pointerEvents = "none";
				root.body.appendChild(__privateGet$2(this, _debug));
			}
			__privateSet$2(this, _visibilityObserver, new IntersectionObserver((entries) => {
				var _a, _b;
				const { boundingClientRect, isIntersecting: visible } = entries[entries.length - 1];
				const { width, height } = boundingClientRect;
				const previousVisible = __privateGet$2(this, _visible);
				__privateSet$2(this, _visible, visible);
				if (!width && !height) return;
				if (previousVisible && !visible) {
					(_a = __privateGet$2(this, _positionObserver)) == null || _a.disconnect();
					this.callback(null);
					(_b = __privateGet$2(this, _resizeObserver)) == null || _b.disconnect();
					__privateSet$2(this, _resizeObserver, void 0);
					if (__privateGet$2(this, _debug)) __privateGet$2(this, _debug).style.visibility = "hidden";
				} else __privateGet$2(this, _observePosition).call(this);
				if (visible && !__privateGet$2(this, _resizeObserver)) {
					__privateSet$2(this, _resizeObserver, new ResizeNotifier(__privateGet$2(this, _observePosition)));
					__privateGet$2(this, _resizeObserver).observe(element);
				}
			}, {
				threshold,
				root
			}));
			if (__privateGet$2(this, _visible) && !options.skipInitial) this.callback(this.boundingClientRect);
			__privateGet$2(this, _visibilityObserver).observe(element);
		}
	};
	_visible = /* @__PURE__ */ new WeakMap();
	_previousBoundingClientRect = /* @__PURE__ */ new WeakMap();
	_resizeObserver = /* @__PURE__ */ new WeakMap();
	_positionObserver = /* @__PURE__ */ new WeakMap();
	_visibilityObserver = /* @__PURE__ */ new WeakMap();
	_debug = /* @__PURE__ */ new WeakMap();
	_disconnected = /* @__PURE__ */ new WeakMap();
	_observePosition = /* @__PURE__ */ new WeakMap();
	_PositionObserver_instances = /* @__PURE__ */ new WeakSet();
	notify_fn = function() {
		if (__privateGet$2(this, _disconnected)) return;
		__privateMethod$1(this, _PositionObserver_instances, updateDebug_fn).call(this);
		if (isRectEqual(this.boundingClientRect, __privateGet$2(this, _previousBoundingClientRect))) return;
		this.callback(this.boundingClientRect);
		__privateSet$2(this, _previousBoundingClientRect, this.boundingClientRect);
	};
	updateDebug_fn = function() {
		if (__privateGet$2(this, _debug)) {
			const { top, left, width, height } = getVisibleBoundingRectangle(this.element);
			__privateGet$2(this, _debug).style.overflow = "hidden";
			__privateGet$2(this, _debug).style.visibility = "visible";
			__privateGet$2(this, _debug).style.top = `${Math.floor(top)}px`;
			__privateGet$2(this, _debug).style.left = `${Math.floor(left)}px`;
			__privateGet$2(this, _debug).style.width = `${Math.floor(width)}px`;
			__privateGet$2(this, _debug).style.height = `${Math.floor(height)}px`;
		}
	};
	framePositionObservers = /* @__PURE__ */ new WeakMap();
	scrollListeners = /* @__PURE__ */ new WeakMap();
	FrameObserver = class {
		constructor(element, callback, options) {
			this.callback = callback;
			__privateAdd$2(this, _elementObserver);
			__privateAdd$2(this, _disconnected2, false);
			__privateAdd$2(this, _frames);
			__privateAdd$2(this, _handleScroll, throttle((event) => {
				if (__privateGet$2(this, _disconnected2)) return;
				if (!event.target) return;
				if ("contains" in event.target && typeof event.target.contains === "function") {
					for (const frame of __privateGet$2(this, _frames)) if (event.target.contains(frame)) {
						this.callback(__privateGet$2(this, _elementObserver).boundingClientRect);
						break;
					}
				}
			}, THROTTLE_INTERVAL));
			const frames = getFrameElements(element);
			const unobserveParentFrames = observeParentFrames(frames, callback);
			const removeScrollListener = addScrollListener(element, __privateGet$2(this, _handleScroll));
			__privateSet$2(this, _frames, frames);
			__privateSet$2(this, _elementObserver, new PositionObserver(element, callback, options));
			this.disconnect = () => {
				if (__privateGet$2(this, _disconnected2)) return;
				__privateSet$2(this, _disconnected2, true);
				unobserveParentFrames();
				removeScrollListener();
				__privateGet$2(this, _elementObserver).disconnect();
			};
		}
	};
	_elementObserver = /* @__PURE__ */ new WeakMap();
	_disconnected2 = /* @__PURE__ */ new WeakMap();
	_frames = /* @__PURE__ */ new WeakMap();
	_handleScroll = /* @__PURE__ */ new WeakMap();
	Scheduler$1 = class {
		constructor(scheduler4) {
			this.scheduler = scheduler4;
			this.pending = false;
			this.tasks = /* @__PURE__ */ new Set();
			this.resolvers = /* @__PURE__ */ new Set();
			this.flush = () => {
				const { tasks, resolvers } = this;
				this.pending = false;
				this.tasks = /* @__PURE__ */ new Set();
				this.resolvers = /* @__PURE__ */ new Set();
				for (const task of tasks) task();
				for (const resolve of resolvers) resolve();
			};
		}
		schedule(task) {
			this.tasks.add(task);
			if (!this.pending) {
				this.pending = true;
				this.scheduler(this.flush);
			}
			return new Promise((resolve) => this.resolvers.add(resolve));
		}
	};
	scheduler = new Scheduler$1((callback) => {
		if (typeof requestAnimationFrame === "function") requestAnimationFrame(callback);
		else callback();
	});
	scheduler2 = new Scheduler$1((callback) => setTimeout(callback, 50));
	cachedStyles = /* @__PURE__ */ new Map();
	clear = cachedStyles.clear.bind(cachedStyles);
	defaultOptions = {
		excludeElement: true,
		escapeShadowDOM: true
	};
	ScrollDirection = /* @__PURE__ */ ((ScrollDirection2) => {
		ScrollDirection2[ScrollDirection2["Idle"] = 0] = "Idle";
		ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
		ScrollDirection2[ScrollDirection2["Reverse"] = -1] = "Reverse";
		return ScrollDirection2;
	})(ScrollDirection || {});
	defaultThreshold = {
		x: .2,
		y: .2
	};
	defaultTolerance = {
		x: 10,
		y: 10
	};
	scheduler3$1 = new Scheduler$1((callback) => setTimeout(callback, 0));
	animations = /* @__PURE__ */ new Map();
	clear2 = animations.clear.bind(animations);
	DOMRectangle = class extends Rectangle {
		constructor(element, options = {}) {
			var _a, _b, _c, _d;
			const { frameTransform = getFrameTransform(element), ignoreTransforms, getBoundingClientRect = getBoundingRectangle } = options;
			const resetAnimations = forceFinishAnimations(element, {
				properties: [
					"transform",
					"translate",
					"scale",
					"width",
					"height"
				],
				isValidTarget: (target) => (target !== element || isSafari()) && target.contains(element)
			});
			const boundingRectangle = getBoundingClientRect(element);
			let { top, left, width, height } = boundingRectangle;
			let updated;
			const computedStyles = getComputedStyles(element);
			const parsedTransform = parseTransform(computedStyles);
			const scale = {
				x: (_a = parsedTransform == null ? void 0 : parsedTransform.scaleX) != null ? _a : 1,
				y: (_b = parsedTransform == null ? void 0 : parsedTransform.scaleY) != null ? _b : 1
			};
			const projectedTransform = getProjectedTransform(element, computedStyles);
			resetAnimations?.();
			if (parsedTransform) {
				updated = inverseTransform(boundingRectangle, parsedTransform, computedStyles.transformOrigin);
				if (ignoreTransforms || projectedTransform) {
					top = updated.top;
					left = updated.left;
					width = updated.width;
					height = updated.height;
				}
			}
			const intrinsic = {
				width: (_c = updated == null ? void 0 : updated.width) != null ? _c : width,
				height: (_d = updated == null ? void 0 : updated.height) != null ? _d : height
			};
			if (projectedTransform && !ignoreTransforms && updated) {
				const projected = applyTransform(updated, projectedTransform, computedStyles.transformOrigin);
				top = projected.top;
				left = projected.left;
				width = projected.width;
				height = projected.height;
				scale.x = projectedTransform.scaleX;
				scale.y = projectedTransform.scaleY;
			}
			if (frameTransform) {
				if (!ignoreTransforms) {
					left *= frameTransform.scaleX;
					width *= frameTransform.scaleX;
					top *= frameTransform.scaleY;
					height *= frameTransform.scaleY;
				}
				left += frameTransform.x;
				top += frameTransform.y;
			}
			super(left, top, width, height);
			this.scale = scale;
			this.intrinsicWidth = intrinsic.width;
			this.intrinsicHeight = intrinsic.height;
		}
	};
	Styles = class {
		constructor(element) {
			this.element = element;
			this.initial = /* @__PURE__ */ new Map();
		}
		set(properties, prefix = "") {
			const { element } = this;
			if (!supportsStyle(element)) return;
			for (const [key, value] of Object.entries(properties)) {
				const property = `${prefix}${key}`;
				if (!this.initial.has(property)) this.initial.set(property, element.style.getPropertyValue(property));
				element.style.setProperty(property, typeof value === "string" ? value : `${value}px`);
			}
		}
		remove(properties, prefix = "") {
			const { element } = this;
			if (!supportsStyle(element)) return;
			for (const key of properties) {
				const property = `${prefix}${key}`;
				element.style.removeProperty(property);
			}
		}
		reset() {
			const { element } = this;
			if (!supportsStyle(element)) return;
			for (const [key, value] of this.initial) element.style.setProperty(key, value);
			if (element.getAttribute("style") === "") element.removeAttribute("style");
		}
	};
	ids = {};
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+collision@0.5.0/node_modules/@dnd-kit/collision/dist/index.js
var pointerIntersection$1, shapeIntersection$1, defaultCollisionDetection$1;
var init_dist$1 = __esmMin((() => {
	init_abstract();
	init_dist$2();
	pointerIntersection$1 = ({ dragOperation, droppable }) => {
		const pointerCoordinates = dragOperation.position.current;
		if (!pointerCoordinates) return null;
		const { id } = droppable;
		if (!droppable.shape) return null;
		if (droppable.shape.containsPoint(pointerCoordinates)) return {
			id,
			value: 1 / Point$1.distance(droppable.shape.center, pointerCoordinates),
			type: CollisionType.PointerIntersection,
			priority: CollisionPriority.High
		};
		return null;
	};
	shapeIntersection$1 = ({ dragOperation, droppable }) => {
		const { shape } = dragOperation;
		if (!droppable.shape || !(shape == null ? void 0 : shape.current)) return null;
		const intersectionArea = shape.current.intersectionArea(droppable.shape);
		if (intersectionArea) {
			const { position } = dragOperation;
			const distance = Point$1.distance(droppable.shape.center, position.current);
			const value = intersectionArea / (shape.current.area + droppable.shape.area - intersectionArea) / distance;
			return {
				id: droppable.id,
				value,
				type: CollisionType.ShapeIntersection,
				priority: CollisionPriority.Normal
			};
		}
		return null;
	};
	defaultCollisionDetection$1 = (args) => {
		var _a;
		return (_a = pointerIntersection$1(args)) != null ? _a : shapeIntersection$1(args);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+dom@0.5.0/node_modules/@dnd-kit/dom/index.js
function isFocusable(element) {
	const tagName = element.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(tagName);
}
function createHiddenText(id, value) {
	const element = document.createElement("div");
	element.id = id;
	element.style.setProperty("display", "none");
	element.textContent = value;
	return element;
}
function createLiveRegion$1(id) {
	const element = document.createElement("div");
	element.id = id;
	element.setAttribute("role", "status");
	element.setAttribute("aria-live", "polite");
	element.setAttribute("aria-atomic", "true");
	element.style.setProperty("position", "fixed");
	element.style.setProperty("width", "1px");
	element.style.setProperty("height", "1px");
	element.style.setProperty("margin", "-1px");
	element.style.setProperty("border", "0");
	element.style.setProperty("padding", "0");
	element.style.setProperty("overflow", "hidden");
	element.style.setProperty("clip", "rect(0 0 0 0)");
	element.style.setProperty("clip-path", "inset(100%)");
	element.style.setProperty("white-space", "nowrap");
	return element;
}
function debounce(fn, wait) {
	let timeout;
	const debounced = () => {
		clearTimeout(timeout);
		timeout = setTimeout(fn, wait);
	};
	debounced.cancel = () => clearTimeout(timeout);
	return debounced;
}
function createPlaceholder(source, type = "hidden") {
	return o(() => {
		const { element, manager } = source;
		if (!element || !manager) return;
		const containedDroppables = findContainedDroppables(element, manager.registry.droppables);
		const cleanup = [];
		const placeholder = cloneElement(element);
		const { remove } = placeholder;
		proxyDroppableElements(containedDroppables, placeholder, cleanup);
		configurePlaceholder(placeholder, type);
		placeholder.remove = () => {
			cleanup.forEach((fn) => fn());
			remove.call(placeholder);
		};
		return placeholder;
	});
}
function findContainedDroppables(element, droppables) {
	const containedDroppables = /* @__PURE__ */ new Map();
	for (const droppable of droppables) {
		if (!droppable.element) continue;
		if (element === droppable.element || element.contains(droppable.element)) {
			const identifierAttribute = `${ATTR_PREFIX}${generateUniqueId("dom-id")}`;
			droppable.element.setAttribute(identifierAttribute, "");
			containedDroppables.set(droppable, identifierAttribute);
		}
	}
	return containedDroppables;
}
function proxyDroppableElements(containedDroppables, placeholder, cleanup) {
	for (const [droppable, identifierAttribute] of containedDroppables) {
		if (!droppable.element) continue;
		const selector = `[${identifierAttribute}]`;
		const clonedElement = placeholder.matches(selector) ? placeholder : placeholder.querySelector(selector);
		droppable.element.removeAttribute(identifierAttribute);
		if (!clonedElement) continue;
		const originalElement = droppable.element;
		droppable.proxy = clonedElement;
		clonedElement.removeAttribute(identifierAttribute);
		ProxiedElements.set(originalElement, clonedElement);
		cleanup.push(() => {
			ProxiedElements.delete(originalElement);
			droppable.proxy = void 0;
		});
	}
}
function configurePlaceholder(placeholder, type = "hidden") {
	placeholder.setAttribute("inert", "true");
	placeholder.setAttribute("tab-index", "-1");
	placeholder.setAttribute("aria-hidden", "true");
	placeholder.setAttribute(PLACEHOLDER_ATTRIBUTE, type);
}
function isSameFrame(element, target) {
	if (element === target) return true;
	return getFrameElement(element) === getFrameElement(target);
}
function preventPopoverClose(event) {
	const { target } = event;
	if ("newState" in event && event.newState === "closed" && isElement(target) && target.hasAttribute("popover")) requestAnimationFrame(() => showPopover(target));
}
function isTableRow(element) {
	return element.tagName === "TR";
}
function createElementMutationObserver(element, placeholder, clone) {
	const observer = new MutationObserver((mutations) => {
		let hasChildrenMutations = false;
		for (const mutation of mutations) {
			if (mutation.target !== element) {
				hasChildrenMutations = true;
				continue;
			}
			if (mutation.type !== "attributes") continue;
			const attributeName = mutation.attributeName;
			if (attributeName.startsWith("aria-") || IGNORED_ATTRIBUTES.includes(attributeName)) continue;
			const attributeValue = element.getAttribute(attributeName);
			if (attributeName === "style") {
				if (supportsStyle(element) && supportsStyle(placeholder)) {
					const styles = element.style;
					for (const key of Array.from(placeholder.style)) if (styles.getPropertyValue(key) === "") placeholder.style.removeProperty(key);
					for (const key of Array.from(styles)) {
						if (IGNORED_STYLES.includes(key) || key.startsWith(CSS_PREFIX)) continue;
						const value = styles.getPropertyValue(key);
						placeholder.style.setProperty(key, value);
					}
				}
			} else if (attributeValue !== null) placeholder.setAttribute(attributeName, attributeValue);
			else placeholder.removeAttribute(attributeName);
		}
		if (hasChildrenMutations && clone) placeholder.replaceChildren(...element.cloneNode(true).childNodes);
	});
	observer.observe(element, {
		attributes: true,
		subtree: true,
		childList: true
	});
	return observer;
}
function createDocumentMutationObserver(element, placeholder, feedbackElement) {
	const observer = new MutationObserver((entries) => {
		for (const entry of entries) {
			if (entry.addedNodes.length === 0) continue;
			for (const node of Array.from(entry.addedNodes)) {
				if (node.contains(element) && element.nextElementSibling !== placeholder) {
					element.insertAdjacentElement("afterend", placeholder);
					showPopover(feedbackElement);
					return;
				}
				if (node.contains(placeholder) && placeholder.previousElementSibling !== element) {
					placeholder.insertAdjacentElement("beforebegin", element);
					showPopover(feedbackElement);
					return;
				}
			}
		}
		if (element.isConnected && placeholder.isConnected && element.nextElementSibling !== placeholder) {
			element.insertAdjacentElement("afterend", placeholder);
			showPopover(feedbackElement);
		}
	});
	observer.observe(element.ownerDocument.body, {
		childList: true,
		subtree: true
	});
	return observer;
}
function createResizeObserver(ctx) {
	return new ResizeObserver(() => {
		var _a5, _b2, _c3;
		const placeholderShape = new DOMRectangle(ctx.placeholder, {
			frameTransform: ctx.frameTransform,
			ignoreTransforms: true
		});
		const origin = (_a5 = ctx.transformOrigin) != null ? _a5 : {
			x: 1,
			y: 1
		};
		const dX = (ctx.width - placeholderShape.width) * origin.x + ctx.delta.x;
		const dY = (ctx.height - placeholderShape.height) * origin.y + ctx.delta.y;
		const fixedOffset = getFixedPositionOffset();
		ctx.styles.set({
			width: placeholderShape.width - ctx.widthOffset,
			height: placeholderShape.height - ctx.heightOffset,
			top: ctx.top + dY + fixedOffset.y,
			left: ctx.left + dX + fixedOffset.x
		}, CSS_PREFIX);
		(_b2 = ctx.getElementMutationObserver()) == null || _b2.takeRecords();
		if (isTableRow(ctx.element) && isTableRow(ctx.placeholder)) {
			const cells = Array.from(ctx.element.cells);
			const placeholderCells = Array.from(ctx.placeholder.cells);
			if (!ctx.getSavedCellWidths()) ctx.setSavedCellWidths(cells.map((cell) => cell.style.width));
			for (const [index, cell] of cells.entries()) {
				const placeholderCell = placeholderCells[index];
				cell.style.width = `${placeholderCell.getBoundingClientRect().width}px`;
			}
		}
		const translate = (_c3 = ctx.getTranslate()) != null ? _c3 : {
			x: 0,
			y: 0
		};
		const shapeLeft = ctx.left + dX + fixedOffset.x + translate.x;
		const shapeTop = ctx.top + dY + fixedOffset.y + translate.y;
		const shapeWidth = placeholderShape.width - ctx.widthOffset;
		const shapeHeight = placeholderShape.height - ctx.heightOffset;
		const ft = ctx.frameTransform;
		ctx.dragOperation.shape = new Rectangle(shapeLeft * ft.scaleX + ft.x, shapeTop * ft.scaleY + ft.y, shapeWidth * ft.scaleX, shapeHeight * ft.scaleY);
	});
}
function runDropAnimation(ctx) {
	var _a5, _b2, _c3, _d2;
	const { animation } = ctx;
	if (typeof animation === "function") {
		const result = animation({
			source: ctx.source,
			element: ctx.element,
			feedbackElement: ctx.feedbackElement,
			placeholder: ctx.placeholder,
			translate: ctx.translate,
			moved: ctx.moved
		});
		Promise.resolve(result).then(() => {
			ctx.cleanup();
			requestAnimationFrame(ctx.restoreFocus);
		});
		return;
	}
	const { duration = DEFAULT_DURATION, easing = DEFAULT_EASING } = animation != null ? animation : {};
	showPopover(ctx.feedbackElement);
	const [, runningAnimation] = (_a5 = getFinalKeyframe(ctx.feedbackElement, (keyframe) => "translate" in keyframe)) != null ? _a5 : [];
	runningAnimation?.pause();
	const target = (_b2 = ctx.placeholder) != null ? _b2 : ctx.element;
	const options = { frameTransform: isSameFrame(ctx.feedbackElement, target) ? null : void 0 };
	const current = new DOMRectangle(ctx.feedbackElement, options);
	const currentTranslate = (_c3 = parseTranslate(getComputedStyles(ctx.feedbackElement).translate)) != null ? _c3 : ctx.translate;
	const final = new DOMRectangle(target, options);
	const delta = Rectangle.delta(current, final, ctx.alignment);
	const finalTranslate = {
		x: currentTranslate.x - delta.x,
		y: currentTranslate.y - delta.y
	};
	const heightKeyframes = Math.round(current.intrinsicHeight) !== Math.round(final.intrinsicHeight) ? {
		minHeight: [`${current.intrinsicHeight}px`, `${final.intrinsicHeight}px`],
		maxHeight: [`${current.intrinsicHeight}px`, `${final.intrinsicHeight}px`]
	} : {};
	const widthKeyframes = Math.round(current.intrinsicWidth) !== Math.round(final.intrinsicWidth) ? {
		minWidth: [`${current.intrinsicWidth}px`, `${final.intrinsicWidth}px`],
		maxWidth: [`${current.intrinsicWidth}px`, `${final.intrinsicWidth}px`]
	} : {};
	ctx.styles.set({ transition: ctx.transition }, CSS_PREFIX);
	ctx.feedbackElement.setAttribute(DROPPING_ATTRIBUTE, "");
	(_d2 = ctx.getElementMutationObserver()) == null || _d2.takeRecords();
	animateTransform({
		element: ctx.feedbackElement,
		keyframes: __spreadProps$2(__spreadValues$2(__spreadValues$2({}, heightKeyframes), widthKeyframes), { translate: [`${currentTranslate.x}px ${currentTranslate.y}px 0`, `${finalTranslate.x}px ${finalTranslate.y}px 0`] }),
		options: {
			duration: prefersReducedMotion(getWindow(ctx.feedbackElement)) ? 0 : ctx.moved || ctx.feedbackElement !== ctx.element ? duration : 0,
			easing
		}
	}).then(() => {
		ctx.feedbackElement.removeAttribute(DROPPING_ATTRIBUTE);
		runningAnimation?.finish();
		ctx.cleanup();
		requestAnimationFrame(ctx.restoreFocus);
	});
}
function getDirection(a, b) {
	return Math.sign(a - b);
}
function getScrollIntent(value) {
	if (value > 0) return ScrollDirection.Forward;
	if (value < 0) return ScrollDirection.Reverse;
	return ScrollDirection.Idle;
}
function removeSelection() {
	var _a5;
	(_a5 = document.getSelection()) == null || _a5.removeAllRanges();
}
function isKeycode(event, codes) {
	return codes.includes(event.code);
}
function isCapturedBySensor(event) {
	return "sensor" in event;
}
function preventDefault(event) {
	event.preventDefault();
}
function noop$1() {}
function patchWindow(window) {
	if (!window || windows.has(window)) return;
	window.addEventListener("touchmove", noop$1, {
		capture: false,
		passive: false
	});
	windows.add(window);
}
var __create$1, __defProp$2, __defProps$2, __getOwnPropDesc$1, __getOwnPropDescs$2, __getOwnPropSymbols$2, __hasOwnProp$2, __propIsEnum$2, __knownSymbol$1, __typeError$1, __defNormalProp$2, __spreadValues$2, __spreadProps$2, __name, __objRest$1, __decoratorStart$1, __decoratorStrings$1, __expectFn$1, __decoratorContext$1, __decoratorMetadata$1, __runInitializers$1, __decorateElement$1, __accessCheck$1, __privateIn, __privateGet$1, __privateAdd$1, __privateSet$1, __privateMethod, defaultAttributes, defaultDescriptionIdPrefix, defaultAnnouncementIdPrefix, defaultScreenReaderInstructions, defaultAnnouncements, debouncedEvents, Accessibility, styleRegistry, _roots_dec, _targetRoot_dec, _sourceRoot_dec, _additionalRoots_dec, _a$1, _registeredRules, _init$1, _additionalRoots, _StyleInjector_instances, syncStyles_fn, inject_fn, injectStyleElement_fn, injectAdoptedSheet_fn, _StyleInjector, StyleInjector, Cursor, ATTR_PREFIX, DROPPING_ATTRIBUTE, CSS_PREFIX, ATTRIBUTE, PLACEHOLDER_ATTRIBUTE, IGNORED_ATTRIBUTES, IGNORED_STYLES, CSS_RULES, DEFAULT_DURATION, DEFAULT_EASING, _overlay_dec, _a2, _init2, _overlay, _Feedback_instances, trackOverlayRoot_fn, render_fn, _Feedback, Feedback, LOCKED, UNLOCKED, _dec, _a3, _dec2, _b, _init3, __b, __a, ScrollLock, DIRECTIONS, ScrollIntent, ScrollIntentTracker, _autoScrolling_dec, _a4, _init4, _autoScrolling, _meta, _scroll, Scroller, Scheduler, scheduler3, AUTOSCROLL_INTERVAL, _AutoScroller, AutoScroller, listenerOptions, _timeout, ScrollListener, CSS_RULES2, PreventSelection, defaults, _cleanupFunctions, _KeyboardSensor, KeyboardSensor, _coordinates, DistanceConstraint, _timeout2, _coordinates2, DelayConstraint, PointerActivationConstraints, defaults2, _cleanup, _PointerSensor, PointerSensor, windows, defaultPreset, DragDropManager, _element_dec, _handle_dec, _c, _init5, _handle, _element, Draggable, _proxy_dec, _element_dec2, _c2, _init6, _element2, _d, element_get, element_set, _Droppable_instances, _proxy, Droppable;
var init_dom = __esmMin((() => {
	init_abstract();
	init_utilities$1();
	init_dist$3();
	init_dist$2();
	init_dist$1();
	__create$1 = Object.create;
	__defProp$2 = Object.defineProperty;
	__defProps$2 = Object.defineProperties;
	__getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
	__getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
	__getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
	__hasOwnProp$2 = Object.prototype.hasOwnProperty;
	__propIsEnum$2 = Object.prototype.propertyIsEnumerable;
	__knownSymbol$1 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
	__typeError$1 = (msg) => {
		throw TypeError(msg);
	};
	__defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__spreadValues$2 = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
		if (__getOwnPropSymbols$2) {
			for (var prop of __getOwnPropSymbols$2(b)) if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
		}
		return a;
	};
	__spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
	__name = (target, value) => __defProp$2(target, "name", {
		value,
		configurable: true
	});
	__objRest$1 = (source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$2) {
			for (var prop of __getOwnPropSymbols$2(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	};
	__decoratorStart$1 = (base) => {
		var _a5;
		return [
			,
			,
			,
			__create$1((_a5 = base == null ? void 0 : base[__knownSymbol$1("metadata")]) != null ? _a5 : null)
		];
	};
	__decoratorStrings$1 = [
		"class",
		"method",
		"getter",
		"setter",
		"accessor",
		"field",
		"value",
		"get",
		"set"
	];
	__expectFn$1 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$1("Function expected") : fn;
	__decoratorContext$1 = (kind, name, done, metadata, fns) => ({
		kind: __decoratorStrings$1[kind],
		name,
		metadata,
		addInitializer: (fn) => done._ ? __typeError$1("Already initialized") : fns.push(__expectFn$1(fn || null))
	});
	__decoratorMetadata$1 = (array, target) => __defNormalProp$2(target, __knownSymbol$1("metadata"), array[3]);
	__runInitializers$1 = (array, flags, self, value) => {
		for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
		return value;
	};
	__decorateElement$1 = (array, flags, name, decorators, target, extra) => {
		var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
		var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$1[k + 5];
		var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
		var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$1(k < 4 ? target : {
			get [name]() {
				return __privateGet$1(this, extra);
			},
			set [name](x) {
				return __privateSet$1(this, extra, x);
			}
		}, name));
		k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
		for (var i = decorators.length - 1; i >= 0; i--) {
			ctx = __decoratorContext$1(k, name, done = {}, array[3], extraInitializers);
			if (k) {
				ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
				if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$1 : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
				if (k > 2) access.set = p ? (x, y) => __privateSet$1(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
			}
			it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
				get: desc.get,
				set: desc.set
			} : target, ctx), done._ = 1;
			if (k ^ 4 || it === void 0) __expectFn$1(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
			else if (typeof it !== "object" || it === null) __typeError$1("Object expected");
			else __expectFn$1(fn = it.get) && (desc.get = fn), __expectFn$1(fn = it.set) && (desc.set = fn), __expectFn$1(fn = it.init) && initializers.unshift(fn);
		}
		return k || __decoratorMetadata$1(array, target), desc && __defProp$2(target, name, desc), p ? k ^ 4 ? extra : desc : target;
	};
	__accessCheck$1 = (obj, member, msg) => member.has(obj) || __typeError$1("Cannot " + msg);
	__privateIn = (member, obj) => Object(obj) !== obj ? __typeError$1("Cannot use the \"in\" operator on this value") : member.has(obj);
	__privateGet$1 = (obj, member, getter) => (__accessCheck$1(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	__privateAdd$1 = (obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet$1 = (obj, member, value, setter) => (__accessCheck$1(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	__privateMethod = (obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method);
	defaultAttributes = {
		role: "button",
		roleDescription: "draggable"
	};
	defaultDescriptionIdPrefix = `dnd-kit-description`;
	defaultAnnouncementIdPrefix = `dnd-kit-announcement`;
	defaultScreenReaderInstructions = { draggable: `To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.` };
	defaultAnnouncements = {
		dragstart({ operation: { source } }) {
			if (!source) return;
			return `Picked up draggable item ${source.id}.`;
		},
		dragover({ operation: { source, target } }) {
			if (!source || source.id === (target == null ? void 0 : target.id)) return;
			if (target) return `Draggable item ${source.id} was moved over droppable target ${target.id}.`;
			return `Draggable item ${source.id} is no longer over a droppable target.`;
		},
		dragend({ operation: { source, target }, canceled }) {
			if (!source) return;
			if (canceled) return `Dragging was cancelled. Draggable item ${source.id} was dropped.`;
			if (target) return `Draggable item ${source.id} was dropped over droppable target ${target.id}`;
			return `Draggable item ${source.id} was dropped.`;
		}
	};
	debouncedEvents = ["dragover", "dragmove"];
	Accessibility = class extends Plugin {
		constructor(manager, options) {
			super(manager);
			const { id, idPrefix: { description: descriptionPrefix = defaultDescriptionIdPrefix, announcement: announcementPrefix = defaultAnnouncementIdPrefix } = {}, announcements = defaultAnnouncements, screenReaderInstructions = defaultScreenReaderInstructions, debounce: debounceMs = 500 } = options != null ? options : {};
			const descriptionId = id ? `${descriptionPrefix}-${id}` : generateUniqueId(descriptionPrefix);
			const announcementId = id ? `${announcementPrefix}-${id}` : generateUniqueId(announcementPrefix);
			let hiddenTextElement;
			let liveRegionElement;
			let liveRegionTextNode;
			let latestAnnouncement;
			const updateAnnouncement = (value = latestAnnouncement) => {
				if (!liveRegionTextNode || !value) return;
				if ((liveRegionTextNode == null ? void 0 : liveRegionTextNode.nodeValue) !== value) liveRegionTextNode.nodeValue = value;
			};
			const scheduleUpdateAnnouncement = () => scheduler.schedule(updateAnnouncement);
			const debouncedUpdateAnnouncement = debounce(scheduleUpdateAnnouncement, debounceMs);
			const eventListeners = Object.entries(announcements).map(([eventName, getAnnouncement]) => {
				return this.manager.monitor.addEventListener(eventName, (event, manager2) => {
					const element = liveRegionTextNode;
					if (!element) return;
					const announcement = getAnnouncement == null ? void 0 : getAnnouncement(event, manager2);
					if (announcement && element.nodeValue !== announcement) {
						latestAnnouncement = announcement;
						if (debouncedEvents.includes(eventName)) debouncedUpdateAnnouncement();
						else {
							scheduleUpdateAnnouncement();
							debouncedUpdateAnnouncement.cancel();
						}
					}
				});
			});
			const initialize = () => {
				let elements = [];
				if (!(hiddenTextElement == null ? void 0 : hiddenTextElement.isConnected)) {
					hiddenTextElement = createHiddenText(descriptionId, screenReaderInstructions.draggable);
					elements.push(hiddenTextElement);
				}
				if (!(liveRegionElement == null ? void 0 : liveRegionElement.isConnected)) {
					liveRegionElement = createLiveRegion$1(announcementId);
					liveRegionTextNode = document.createTextNode("");
					liveRegionElement.appendChild(liveRegionTextNode);
					elements.push(liveRegionElement);
				}
				if (elements.length > 0) document.body.append(...elements);
			};
			const mutations = /* @__PURE__ */ new Set();
			function executeMutations() {
				for (const operation of mutations) operation();
			}
			this.registerEffect(() => {
				var _a5;
				mutations.clear();
				for (const draggable of this.manager.registry.draggables.value) {
					const activator = (_a5 = draggable.handle) != null ? _a5 : draggable.element;
					if (activator) {
						if (!hiddenTextElement || !liveRegionElement) mutations.add(initialize);
						if ((!isFocusable(activator) || isSafari()) && !activator.hasAttribute("tabindex")) mutations.add(() => activator.setAttribute("tabindex", "0"));
						if (!activator.hasAttribute("role") && !(activator.tagName.toLowerCase() === "button")) mutations.add(() => activator.setAttribute("role", defaultAttributes.role));
						if (!activator.hasAttribute("aria-roledescription")) mutations.add(() => activator.setAttribute("aria-roledescription", defaultAttributes.roleDescription));
						if (!activator.hasAttribute("aria-describedby")) mutations.add(() => activator.setAttribute("aria-describedby", descriptionId));
						for (const key of ["aria-pressed", "aria-grabbed"]) {
							const value = String(draggable.isDragging);
							if (activator.getAttribute(key) !== value) mutations.add(() => activator.setAttribute(key, value));
						}
						const disabled = String(draggable.disabled);
						if (activator.getAttribute("aria-disabled") !== disabled) mutations.add(() => activator.setAttribute("aria-disabled", disabled));
					}
				}
				if (mutations.size > 0) scheduler.schedule(executeMutations);
			});
			this.destroy = () => {
				super.destroy();
				hiddenTextElement?.remove();
				liveRegionElement?.remove();
				eventListeners.forEach((unsubscribe) => unsubscribe());
			};
		}
	};
	styleRegistry = /* @__PURE__ */ new Map();
	_StyleInjector = class _StyleInjector extends (_a$1 = CorePlugin, _additionalRoots_dec = [reactive], _sourceRoot_dec = [derived], _targetRoot_dec = [derived], _roots_dec = [derived], _a$1) {
		constructor(manager, options) {
			super(manager, options);
			__runInitializers$1(_init$1, 5, this);
			__privateAdd$1(this, _StyleInjector_instances);
			__privateAdd$1(this, _registeredRules, /* @__PURE__ */ new Set());
			__privateAdd$1(this, _additionalRoots, __runInitializers$1(_init$1, 8, this, /* @__PURE__ */ new Set())), __runInitializers$1(_init$1, 11, this);
			this.registerEffect(__privateMethod(this, _StyleInjector_instances, syncStyles_fn));
		}
		/**
		* Registers CSS rules to be injected into the active drag operation's
		* document and shadow roots. The StyleInjector handles tracking
		* which roots need the styles and cleaning up when they're no longer needed.
		*
		* Returns a cleanup function that unregisters the rules.
		*/
		register(cssRules) {
			__privateGet$1(this, _registeredRules).add(cssRules);
			return () => {
				__privateGet$1(this, _registeredRules).delete(cssRules);
			};
		}
		/**
		* Adds an additional root to track for style injection.
		* Returns a cleanup function that removes the root.
		*/
		addRoot(root) {
			o(() => {
				const roots = new Set(this.additionalRoots);
				roots.add(root);
				this.additionalRoots = roots;
			});
			return () => {
				o(() => {
					const roots = new Set(this.additionalRoots);
					roots.delete(root);
					this.additionalRoots = roots;
				});
			};
		}
		get sourceRoot() {
			var _a5;
			const { source } = this.manager.dragOperation;
			return getRoot((_a5 = source == null ? void 0 : source.element) != null ? _a5 : null);
		}
		get targetRoot() {
			var _a5;
			const { target } = this.manager.dragOperation;
			return getRoot((_a5 = target == null ? void 0 : target.element) != null ? _a5 : null);
		}
		get roots() {
			const { status } = this.manager.dragOperation;
			if (status.initializing || status.initialized) {
				const roots = [this.sourceRoot, this.targetRoot].filter((root) => root != null);
				return /* @__PURE__ */ new Set([...roots, ...this.additionalRoots]);
			}
			return /* @__PURE__ */ new Set();
		}
	};
	_init$1 = __decoratorStart$1(_a$1);
	_registeredRules = /* @__PURE__ */ new WeakMap();
	_additionalRoots = /* @__PURE__ */ new WeakMap();
	_StyleInjector_instances = /* @__PURE__ */ new WeakSet();
	syncStyles_fn = function() {
		const { roots } = this;
		const cleanups = [];
		for (const root of roots) for (const cssRules of __privateGet$1(this, _registeredRules)) cleanups.push(__privateMethod(this, _StyleInjector_instances, inject_fn).call(this, root, cssRules));
		return () => {
			for (const cleanup of cleanups) cleanup();
		};
	};
	inject_fn = function(root, cssRules) {
		let rootStyles = styleRegistry.get(root);
		if (!rootStyles) {
			rootStyles = /* @__PURE__ */ new Map();
			styleRegistry.set(root, rootStyles);
		}
		let registration = rootStyles.get(cssRules);
		if (!registration) {
			const created = isDocument(root) ? __privateMethod(this, _StyleInjector_instances, injectStyleElement_fn).call(this, root, rootStyles, cssRules) : __privateMethod(this, _StyleInjector_instances, injectAdoptedSheet_fn).call(this, root, rootStyles, cssRules);
			if (!created) return () => {};
			registration = created;
			rootStyles.set(cssRules, registration);
		}
		registration.refCount++;
		let disposed = false;
		return () => {
			if (disposed) return;
			disposed = true;
			registration.refCount--;
			if (registration.refCount === 0) registration.cleanup();
		};
	};
	/**
	* For Document roots, prepend a <style> element to <head> so that any
	* @layer declarations appear before layers from regular stylesheets,
	* giving them the lowest cascade priority.
	*/
	injectStyleElement_fn = function(root, rootStyles, cssRules) {
		var _a5;
		const style = root.createElement("style");
		const { nonce } = (_a5 = this.options) != null ? _a5 : {};
		if (nonce) style.setAttribute("nonce", nonce);
		style.textContent = cssRules;
		root.head.prepend(style);
		const observer = new MutationObserver((entries) => {
			for (const entry of entries) for (const node of Array.from(entry.removedNodes)) if (node === style) {
				root.head.prepend(style);
				return;
			}
		});
		observer.observe(root.head, { childList: true });
		return {
			refCount: 0,
			cleanup: () => {
				observer.disconnect();
				style.remove();
				rootStyles.delete(cssRules);
				if (rootStyles.size === 0) styleRegistry.delete(root);
			}
		};
	};
	/**
	* For ShadowRoot roots, use adoptedStyleSheets to avoid DOM side effects
	* like interfering with :first-child or :nth-child selectors.
	*/
	injectAdoptedSheet_fn = function(root, rootStyles, cssRules) {
		if (!("adoptedStyleSheets" in root && Array.isArray(root.adoptedStyleSheets)) && false);
		const targetWindow = root.ownerDocument.defaultView;
		const { CSSStyleSheet } = targetWindow != null ? targetWindow : {};
		if (!CSSStyleSheet) return null;
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(cssRules);
		root.adoptedStyleSheets.push(sheet);
		return {
			refCount: 0,
			cleanup: () => {
				var _a5;
				if (isShadowRoot(root) && ((_a5 = root.host) == null ? void 0 : _a5.isConnected)) {
					const index = root.adoptedStyleSheets.indexOf(sheet);
					if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
				}
				rootStyles.delete(cssRules);
				if (rootStyles.size === 0) styleRegistry.delete(root);
			}
		};
	};
	__decorateElement$1(_init$1, 4, "additionalRoots", _additionalRoots_dec, _StyleInjector, _additionalRoots);
	__decorateElement$1(_init$1, 2, "sourceRoot", _sourceRoot_dec, _StyleInjector);
	__decorateElement$1(_init$1, 2, "targetRoot", _targetRoot_dec, _StyleInjector);
	__decorateElement$1(_init$1, 2, "roots", _roots_dec, _StyleInjector);
	__decoratorMetadata$1(_init$1, _StyleInjector);
	_StyleInjector.configure = configurator(_StyleInjector);
	StyleInjector = _StyleInjector;
	Cursor = class extends Plugin {
		constructor(manager, options) {
			super(manager, options);
			this.manager = manager;
			const { cursor = "grabbing" } = options != null ? options : {};
			const styleInjector = manager.registry.plugins.get(StyleInjector);
			const unregisterStyles = styleInjector == null ? void 0 : styleInjector.register(`* { cursor: ${cursor} !important; }`);
			if (unregisterStyles) {
				const originalDestroy = this.destroy.bind(this);
				this.destroy = () => {
					unregisterStyles();
					originalDestroy();
				};
			}
		}
	};
	ATTR_PREFIX = "data-dnd-";
	DROPPING_ATTRIBUTE = `${ATTR_PREFIX}dropping`;
	CSS_PREFIX = "--dnd-";
	ATTRIBUTE = `${ATTR_PREFIX}dragging`;
	PLACEHOLDER_ATTRIBUTE = `${ATTR_PREFIX}placeholder`;
	IGNORED_ATTRIBUTES = [
		ATTRIBUTE,
		PLACEHOLDER_ATTRIBUTE,
		"popover",
		"aria-pressed",
		"aria-grabbing"
	];
	IGNORED_STYLES = ["view-transition-name"];
	CSS_RULES = `
  :is(:root,:host) [${ATTRIBUTE}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${CSS_PREFIX}top, 0px) !important;
    left: var(${CSS_PREFIX}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${CSS_PREFIX}width, auto);
    max-width: var(${CSS_PREFIX}width, auto);
    height: var(${CSS_PREFIX}height, auto);
    max-height: var(${CSS_PREFIX}height, auto);
    transform: var(${CSS_PREFIX}transform, none) !important;
    transition: var(${CSS_PREFIX}transition) !important;
  }

  :is(:root,:host) [${PLACEHOLDER_ATTRIBUTE}] {
    transition: none;
  }

  :is(:root,:host) [${PLACEHOLDER_ATTRIBUTE}='hidden'] {
    visibility: hidden;
  }

  [${ATTRIBUTE}] * {
    pointer-events: none !important;
  }

  [${ATTRIBUTE}]:not([${DROPPING_ATTRIBUTE}]) {
    translate: var(${CSS_PREFIX}translate) !important;
  }

  [${ATTRIBUTE}][style*='${CSS_PREFIX}scale'] {
    scale: var(${CSS_PREFIX}scale) !important;
    transform-origin: var(${CSS_PREFIX}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${ATTRIBUTE}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${ATTRIBUTE}]::backdrop, [${ATTR_PREFIX}overlay]:not([${ATTRIBUTE}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
	DEFAULT_DURATION = 250;
	DEFAULT_EASING = "ease";
	_Feedback = class _Feedback extends (_a2 = Plugin, _overlay_dec = [reactive], _a2) {
		constructor(manager, options) {
			super(manager, options);
			__privateAdd$1(this, _Feedback_instances);
			__privateAdd$1(this, _overlay, __runInitializers$1(_init2, 8, this)), __runInitializers$1(_init2, 11, this);
			this.state = {
				initial: {},
				current: {}
			};
			const styleInjector = manager.registry.plugins.get(StyleInjector);
			const unregisterStyles = styleInjector == null ? void 0 : styleInjector.register(CSS_RULES);
			if (unregisterStyles) {
				const originalDestroy = this.destroy.bind(this);
				this.destroy = () => {
					unregisterStyles();
					originalDestroy();
				};
			}
			this.registerEffect(__privateMethod(this, _Feedback_instances, trackOverlayRoot_fn).bind(this, styleInjector));
			this.registerEffect(__privateMethod(this, _Feedback_instances, render_fn));
		}
	};
	_init2 = __decoratorStart$1(_a2);
	_overlay = /* @__PURE__ */ new WeakMap();
	_Feedback_instances = /* @__PURE__ */ new WeakSet();
	trackOverlayRoot_fn = function(styleInjector) {
		const { overlay } = this;
		if (!overlay || !styleInjector) return;
		const root = getRoot(overlay);
		if (!root) return;
		return styleInjector.addRoot(root);
	};
	render_fn = function() {
		var _a5, _b2, _c3, _d2, _e, _f, _g;
		const { state, manager, options } = this;
		const { dragOperation } = manager;
		const { position, source, status } = dragOperation;
		if (status.idle) {
			state.current = {};
			state.initial = {};
			return;
		}
		if (!source) return;
		const { element } = source;
		const entityOptions = source.pluginConfig(_Feedback);
		const feedbackOption = (_b2 = (_a5 = entityOptions == null ? void 0 : entityOptions.feedback) != null ? _a5 : options == null ? void 0 : options.feedback) != null ? _b2 : "default";
		const feedback = typeof feedbackOption === "function" ? feedbackOption(source, manager) : feedbackOption;
		if (!element || feedback === "none" || !status.initialized || status.initializing) return;
		const { initial } = state;
		const feedbackElement = (_c3 = this.overlay) != null ? _c3 : element;
		const frameTransform = getFrameTransform(feedbackElement);
		const elementFrameTransform = getFrameTransform(element);
		const crossFrame = !isSameFrame(element, feedbackElement);
		const shape = new DOMRectangle(element, {
			frameTransform: crossFrame ? elementFrameTransform : null,
			ignoreTransforms: !crossFrame
		});
		const scaleDelta = {
			x: elementFrameTransform.scaleX / frameTransform.scaleX,
			y: elementFrameTransform.scaleY / frameTransform.scaleY
		};
		let { width, height, top, left } = shape;
		if (crossFrame) {
			width = width / scaleDelta.x;
			height = height / scaleDelta.y;
		}
		const styles = new Styles(feedbackElement);
		const elementStyles = getComputedStyles(element);
		const { transition, translate, boxSizing, paddingBlockStart, paddingBlockEnd, paddingInlineStart, paddingInlineEnd, borderInlineStartWidth, borderInlineEndWidth, borderBlockStartWidth, borderBlockEndWidth } = elementStyles;
		const feedbackTransition = transition.split(",").filter((t) => !/^\s*(transform|translate|scale)\b/.test(t)).join(",");
		const parsedTransform = parseTransform(elementStyles);
		const initialTransformStyle = elementStyles.transform;
		const clone = feedback === "clone";
		const contentBox = boxSizing === "content-box";
		const widthOffset = contentBox ? parseInt(paddingInlineStart) + parseInt(paddingInlineEnd) + parseInt(borderInlineStartWidth) + parseInt(borderInlineEndWidth) : 0;
		const heightOffset = contentBox ? parseInt(paddingBlockStart) + parseInt(paddingBlockEnd) + parseInt(borderBlockStartWidth) + parseInt(borderBlockEndWidth) : 0;
		const placeholder = feedback !== "move" && !this.overlay ? createPlaceholder(source, clone ? "clone" : "hidden") : null;
		const isKeyboardOperation = o(() => isKeyboardEvent(manager.dragOperation.activatorEvent));
		if (!initial.translate) {
			if (this.overlay && parsedTransform) initial.translate = {
				x: parsedTransform.x,
				y: parsedTransform.y
			};
			else if (translate !== "none") {
				const parsedTranslate = parseTranslate(translate);
				if (parsedTranslate) initial.translate = parsedTranslate;
			}
		}
		if (!initial.transformOrigin) {
			const current = o(() => position.current);
			const visualLeft = left + ((_d2 = parsedTransform == null ? void 0 : parsedTransform.x) != null ? _d2 : 0);
			const visualTop = top + ((_e = parsedTransform == null ? void 0 : parsedTransform.y) != null ? _e : 0);
			initial.transformOrigin = {
				x: (current.x - visualLeft * frameTransform.scaleX - frameTransform.x) / (width * frameTransform.scaleX),
				y: (current.y - visualTop * frameTransform.scaleY - frameTransform.y) / (height * frameTransform.scaleY)
			};
		}
		const { transformOrigin } = initial;
		const relativeTop = top * frameTransform.scaleY + frameTransform.y;
		const relativeLeft = left * frameTransform.scaleX + frameTransform.x;
		if (!initial.coordinates) {
			initial.coordinates = {
				x: relativeLeft,
				y: relativeTop
			};
			if (scaleDelta.x !== 1 || scaleDelta.y !== 1) {
				const { scaleX, scaleY } = elementFrameTransform;
				const { x: tX2, y: tY2 } = transformOrigin;
				initial.coordinates.x += (width * scaleX - width) * tX2;
				initial.coordinates.y += (height * scaleY - height) * tY2;
			}
		}
		if (!initial.dimensions) initial.dimensions = {
			width,
			height
		};
		if (!initial.frameTransform) initial.frameTransform = frameTransform;
		const coordinatesDelta = {
			x: initial.coordinates.x - relativeLeft,
			y: initial.coordinates.y - relativeTop
		};
		const sizeDelta = {
			width: (initial.dimensions.width * initial.frameTransform.scaleX - width * frameTransform.scaleX) * transformOrigin.x,
			height: (initial.dimensions.height * initial.frameTransform.scaleY - height * frameTransform.scaleY) * transformOrigin.y
		};
		const delta = {
			x: coordinatesDelta.x / frameTransform.scaleX + sizeDelta.width,
			y: coordinatesDelta.y / frameTransform.scaleY + sizeDelta.height
		};
		const projected = {
			left: left + delta.x,
			top: top + delta.y
		};
		feedbackElement.setAttribute(ATTRIBUTE, "true");
		const transform = o(() => dragOperation.transform);
		const initialTranslate = (_f = initial.translate) != null ? _f : {
			x: 0,
			y: 0
		};
		const tX = transform.x * frameTransform.scaleX + initialTranslate.x;
		const tY = transform.y * frameTransform.scaleY + initialTranslate.y;
		const fixedOffset = getFixedPositionOffset();
		styles.set({
			width: width - widthOffset,
			height: height - heightOffset,
			top: projected.top + fixedOffset.y,
			left: projected.left + fixedOffset.x,
			translate: `${tX}px ${tY}px 0`,
			transform: this.overlay ? "none" : initialTransformStyle,
			transition: feedbackTransition ? `${feedbackTransition}, translate 0ms linear` : "translate 0ms linear",
			scale: crossFrame ? `${scaleDelta.x} ${scaleDelta.y}` : "",
			"transform-origin": `${transformOrigin.x * 100}% ${transformOrigin.y * 100}%`
		}, CSS_PREFIX);
		if (placeholder) {
			element.insertAdjacentElement("afterend", placeholder);
			if (options == null ? void 0 : options.rootElement) (typeof options.rootElement === "function" ? options.rootElement(source) : options.rootElement).appendChild(element);
		}
		if (supportsPopover(feedbackElement)) {
			if (!feedbackElement.hasAttribute("popover")) feedbackElement.setAttribute("popover", "manual");
			showPopover(feedbackElement);
			feedbackElement.addEventListener("beforetoggle", preventPopoverClose);
		}
		let elementMutationObserver;
		let documentMutationObserver;
		let savedCellWidths;
		const resizeObserver = createResizeObserver({
			placeholder,
			element,
			feedbackElement,
			frameTransform,
			transformOrigin,
			width,
			height,
			top,
			left,
			widthOffset,
			heightOffset,
			delta,
			styles,
			dragOperation,
			getTranslate: () => state.current.translate,
			getElementMutationObserver: () => elementMutationObserver,
			getSavedCellWidths: () => savedCellWidths,
			setSavedCellWidths: (widths) => {
				savedCellWidths = widths;
			}
		});
		const initialShape = new DOMRectangle(feedbackElement);
		o(() => dragOperation.shape = initialShape);
		const feedbackWindow = getWindow(feedbackElement);
		const handleWindowResize = (event) => {
			this.manager.actions.stop({ event });
		};
		const reducedMotion = prefersReducedMotion(feedbackWindow);
		if (isKeyboardOperation) feedbackWindow.addEventListener("resize", handleWindowResize);
		if (o(() => source.status) === "idle") requestAnimationFrame(() => source.status = "dragging");
		if (placeholder) {
			resizeObserver.observe(placeholder);
			elementMutationObserver = createElementMutationObserver(element, placeholder, clone);
			documentMutationObserver = createDocumentMutationObserver(element, placeholder, feedbackElement);
		}
		const id = (_g = manager.dragOperation.source) == null ? void 0 : _g.id;
		const restoreFocus = () => {
			var _a6;
			if (!isKeyboardOperation || id == null) return;
			const draggable = manager.registry.draggables.get(id);
			const focusTarget = (_a6 = draggable == null ? void 0 : draggable.handle) != null ? _a6 : draggable == null ? void 0 : draggable.element;
			if (isHTMLElement(focusTarget)) focusTarget.focus();
		};
		const cleanup = () => {
			elementMutationObserver?.disconnect();
			documentMutationObserver?.disconnect();
			resizeObserver.disconnect();
			feedbackWindow.removeEventListener("resize", handleWindowResize);
			if (supportsPopover(feedbackElement)) {
				feedbackElement.removeEventListener("beforetoggle", preventPopoverClose);
				feedbackElement.removeAttribute("popover");
			}
			feedbackElement.removeAttribute(ATTRIBUTE);
			styles.reset();
			const finalize = () => {
				var _a6;
				if (savedCellWidths && isTableRow(element)) {
					const cells = Array.from(element.cells);
					for (const [index, cell] of cells.entries()) cell.style.width = (_a6 = savedCellWidths[index]) != null ? _a6 : "";
				}
				source.status = "idle";
				const moved = state.current.translate != null;
				const isDragging = dragOperation.status.dragging;
				if (placeholder && (!isDragging && moved || placeholder.parentElement !== feedbackElement.parentElement) && feedbackElement.isConnected) placeholder.replaceWith(feedbackElement);
				placeholder?.remove();
			};
			if (feedbackElement === this.overlay) setTimeout(finalize, 0);
			else finalize();
		};
		const optionsDropAnimation = options == null ? void 0 : options.dropAnimation;
		const feedbackPlugin = this;
		const cleanupEffects = effects(() => {
			var _a6, _b3, _c4;
			const { transform: transform2, status: status2 } = dragOperation;
			if (!transform2.x && !transform2.y && !state.current.translate) return;
			if (status2.dragging) {
				const initialTranslate2 = (_a6 = initial.translate) != null ? _a6 : {
					x: 0,
					y: 0
				};
				const translate2 = {
					x: transform2.x / frameTransform.scaleX + initialTranslate2.x,
					y: transform2.y / frameTransform.scaleY + initialTranslate2.y
				};
				const previousTranslate = state.current.translate;
				const modifiers = o(() => dragOperation.modifiers);
				const currentShape = o(() => {
					var _a7;
					return (_a7 = dragOperation.shape) == null ? void 0 : _a7.current;
				});
				const keyboardTransition = options == null ? void 0 : options.keyboardTransition;
				const translateTransition = isKeyboardOperation && !reducedMotion && keyboardTransition !== null ? `${(_b3 = keyboardTransition == null ? void 0 : keyboardTransition.duration) != null ? _b3 : 250}ms ${(_c4 = keyboardTransition == null ? void 0 : keyboardTransition.easing) != null ? _c4 : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
				styles.set({
					transition: feedbackTransition ? `${feedbackTransition}, translate ${translateTransition}` : `translate ${translateTransition}`,
					translate: `${translate2.x}px ${translate2.y}px 0`
				}, CSS_PREFIX);
				elementMutationObserver?.takeRecords();
				if (currentShape && currentShape !== initialShape && previousTranslate && !modifiers.length) {
					const delta2 = Point$1.delta(translate2, previousTranslate);
					dragOperation.shape = Rectangle.from(currentShape.boundingRectangle).translate(delta2.x * frameTransform.scaleX, delta2.y * frameTransform.scaleY);
				} else dragOperation.shape = new DOMRectangle(feedbackElement);
				state.current.translate = translate2;
			}
		}, function() {
			if (dragOperation.status.dropped) {
				this.dispose();
				source.status = "dropping";
				const dropAnimationConfig = (entityOptions == null ? void 0 : entityOptions.dropAnimation) !== void 0 ? entityOptions.dropAnimation : feedbackPlugin.dropAnimation !== void 0 ? feedbackPlugin.dropAnimation : optionsDropAnimation;
				let translate2 = state.current.translate;
				const moved = translate2 != null;
				if (!translate2 && element !== feedbackElement) translate2 = {
					x: 0,
					y: 0
				};
				if (!translate2 || dropAnimationConfig === null) {
					cleanup();
					return;
				}
				manager.renderer.rendering.then(() => {
					runDropAnimation({
						source,
						element,
						feedbackElement,
						placeholder,
						translate: translate2,
						moved,
						transition,
						alignment: source.alignment,
						styles,
						animation: dropAnimationConfig != null ? dropAnimationConfig : void 0,
						getElementMutationObserver: () => elementMutationObserver,
						cleanup,
						restoreFocus
					});
				});
			}
		});
		return () => {
			cleanup();
			cleanupEffects();
		};
	};
	__decorateElement$1(_init2, 4, "overlay", _overlay_dec, _Feedback, _overlay);
	__decoratorMetadata$1(_init2, _Feedback);
	_Feedback.configure = configurator(_Feedback);
	Feedback = _Feedback;
	LOCKED = true;
	UNLOCKED = false;
	_b = (_dec2 = [reactive], ScrollDirection.Forward);
	_a3 = (_dec = [reactive], ScrollDirection.Reverse);
	ScrollLock = class {
		constructor() {
			__privateAdd$1(this, __b, __runInitializers$1(_init3, 8, this, LOCKED)), __runInitializers$1(_init3, 11, this);
			__privateAdd$1(this, __a, __runInitializers$1(_init3, 12, this, LOCKED)), __runInitializers$1(_init3, 15, this);
		}
		isLocked(direction) {
			if (direction === ScrollDirection.Idle) return false;
			if (direction == null) return this[ScrollDirection.Forward] === LOCKED && this[ScrollDirection.Reverse] === LOCKED;
			return this[direction] === LOCKED;
		}
		unlock(direction) {
			if (direction === ScrollDirection.Idle) return;
			this[direction] = UNLOCKED;
		}
	};
	_init3 = __decoratorStart$1(null);
	__b = /* @__PURE__ */ new WeakMap();
	__a = /* @__PURE__ */ new WeakMap();
	__decorateElement$1(_init3, 4, _b, _dec2, ScrollLock, __b);
	__decorateElement$1(_init3, 4, _a3, _dec, ScrollLock, __a);
	__decoratorMetadata$1(_init3, ScrollLock);
	DIRECTIONS = [ScrollDirection.Forward, ScrollDirection.Reverse];
	ScrollIntent = class {
		constructor() {
			this.x = new ScrollLock();
			this.y = new ScrollLock();
		}
		isLocked() {
			return this.x.isLocked() && this.y.isLocked();
		}
	};
	ScrollIntentTracker = class extends Plugin {
		constructor(manager) {
			super(manager);
			const scrollIntent = y(new ScrollIntent());
			let previousDelta = null;
			this.signal = scrollIntent;
			j$1(() => {
				const { status } = manager.dragOperation;
				if (!status.initialized) {
					previousDelta = null;
					scrollIntent.value = new ScrollIntent();
					return;
				}
				const { delta } = manager.dragOperation.position;
				if (previousDelta) {
					const directions = {
						x: getDirection(delta.x, previousDelta.x),
						y: getDirection(delta.y, previousDelta.y)
					};
					const intent = scrollIntent.peek();
					n(() => {
						for (const axis of Axes) for (const direction of DIRECTIONS) if (directions[axis] === direction) intent[axis].unlock(direction);
						scrollIntent.value = intent;
					});
				}
				previousDelta = delta;
			});
		}
		get current() {
			return this.signal.peek();
		}
	};
	Scroller = class extends (_a4 = CorePlugin, _autoScrolling_dec = [reactive], _a4) {
		constructor(manager) {
			super(manager);
			__privateAdd$1(this, _autoScrolling, __runInitializers$1(_init4, 8, this, false)), __runInitializers$1(_init4, 11, this);
			__privateAdd$1(this, _meta);
			__privateAdd$1(this, _scroll, () => {
				if (!__privateGet$1(this, _meta)) return;
				const { element, by } = __privateGet$1(this, _meta);
				if (by.y) element.scrollTop += by.y;
				if (by.x) element.scrollLeft += by.x;
			});
			this.scroll = (options, scrollOptions) => {
				var _a5;
				if (this.disabled) return false;
				const elements = this.getScrollableElements();
				if (!elements) {
					__privateSet$1(this, _meta, void 0);
					return false;
				}
				const { position } = this.manager.dragOperation;
				const currentPosition = position == null ? void 0 : position.current;
				if (currentPosition) {
					const { by } = options != null ? options : {};
					const intent = by ? {
						x: getScrollIntent(by.x),
						y: getScrollIntent(by.y)
					} : void 0;
					const scrollIntent = intent ? void 0 : this.scrollIntentTracker.current;
					if (scrollIntent == null ? void 0 : scrollIntent.isLocked()) return false;
					for (const scrollableElement of elements) {
						const elementCanScroll = canScroll(scrollableElement, by);
						if (elementCanScroll.x || elementCanScroll.y) {
							const { speed, direction } = detectScrollIntent(scrollableElement, currentPosition, intent, scrollOptions == null ? void 0 : scrollOptions.acceleration, scrollOptions == null ? void 0 : scrollOptions.threshold);
							if (scrollIntent) {
								for (const axis of Axes) if (scrollIntent[axis].isLocked(direction[axis])) {
									speed[axis] = 0;
									direction[axis] = 0;
								}
							}
							if (direction.x || direction.y) {
								const { x, y } = by != null ? by : direction;
								const scrollLeftBy = x * speed.x;
								const scrollTopBy = y * speed.y;
								if (scrollLeftBy || scrollTopBy) {
									const previousScrollBy = (_a5 = __privateGet$1(this, _meta)) == null ? void 0 : _a5.by;
									if (this.autoScrolling && previousScrollBy) {
										if (previousScrollBy.x && !scrollLeftBy || previousScrollBy.y && !scrollTopBy) continue;
									}
									__privateSet$1(this, _meta, {
										element: scrollableElement,
										by: {
											x: scrollLeftBy,
											y: scrollTopBy
										}
									});
									scheduler.schedule(__privateGet$1(this, _scroll));
									return true;
								}
							}
						}
					}
				}
				__privateSet$1(this, _meta, void 0);
				return false;
			};
			let previousElementFromPoint = null;
			let previousScrollableElements = null;
			const elementFromPoint = computed(() => {
				const { position, source } = manager.dragOperation;
				if (!position) return null;
				const element = getElementFromPoint(getRoot(source == null ? void 0 : source.element), position.current);
				if (element) previousElementFromPoint = element;
				return element != null ? element : previousElementFromPoint;
			});
			const scrollableElements = computed(() => {
				const element = elementFromPoint.value;
				const { documentElement } = getDocument(element);
				if (!element || element === documentElement) {
					const { target } = manager.dragOperation;
					const targetElement = target == null ? void 0 : target.element;
					if (targetElement) {
						const elements = getScrollableAncestors(targetElement, { excludeElement: false });
						previousScrollableElements = elements;
						return elements;
					}
				}
				if (element) {
					const elements = getScrollableAncestors(element, { excludeElement: false });
					if (this.autoScrolling && previousScrollableElements && elements.size < (previousScrollableElements == null ? void 0 : previousScrollableElements.size)) return previousScrollableElements;
					previousScrollableElements = elements;
					return elements;
				}
				previousScrollableElements = null;
				return null;
			}, deepEqual);
			this.getScrollableElements = () => {
				return scrollableElements.value;
			};
			this.scrollIntentTracker = new ScrollIntentTracker(manager);
			this.destroy = manager.monitor.addEventListener("dragmove", (event) => {
				if (this.disabled || event.defaultPrevented || !isKeyboardEvent(manager.dragOperation.activatorEvent) || !event.by) return;
				if (this.scroll({ by: event.by })) event.preventDefault();
			});
		}
	};
	_init4 = __decoratorStart$1(_a4);
	_autoScrolling = /* @__PURE__ */ new WeakMap();
	_meta = /* @__PURE__ */ new WeakMap();
	_scroll = /* @__PURE__ */ new WeakMap();
	__decorateElement$1(_init4, 4, "autoScrolling", _autoScrolling_dec, Scroller, _autoScrolling);
	__decoratorMetadata$1(_init4, Scroller);
	Scheduler = class {
		constructor(scheduler5) {
			this.scheduler = scheduler5;
			this.pending = false;
			this.tasks = /* @__PURE__ */ new Set();
			this.resolvers = /* @__PURE__ */ new Set();
			this.flush = () => {
				const { tasks, resolvers } = this;
				this.pending = false;
				this.tasks = /* @__PURE__ */ new Set();
				this.resolvers = /* @__PURE__ */ new Set();
				for (const task of tasks) task();
				for (const resolve of resolvers) resolve();
			};
		}
		schedule(task) {
			this.tasks.add(task);
			if (!this.pending) {
				this.pending = true;
				this.scheduler(this.flush);
			}
			return new Promise((resolve) => this.resolvers.add(resolve));
		}
	};
	scheduler3 = new Scheduler((callback) => {
		if (typeof requestAnimationFrame === "function") requestAnimationFrame(callback);
		else callback();
	});
	AUTOSCROLL_INTERVAL = 10;
	_AutoScroller = class _AutoScroller extends Plugin {
		constructor(manager, options) {
			super(manager, options);
			const scroller = manager.registry.plugins.get(Scroller);
			if (!scroller) throw new Error("AutoScroller plugin depends on Scroller plugin");
			this.destroy = j$1(() => {
				var _a5, _b2, _c3;
				if (this.disabled) return;
				const { position: _, status } = manager.dragOperation;
				if (status.dragging) {
					const scrollOptions = {
						acceleration: (_a5 = this.options) == null ? void 0 : _a5.acceleration,
						threshold: typeof ((_b2 = this.options) == null ? void 0 : _b2.threshold) === "number" ? {
							x: this.options.threshold,
							y: this.options.threshold
						} : (_c3 = this.options) == null ? void 0 : _c3.threshold
					};
					if (scroller.scroll(void 0, scrollOptions)) {
						scroller.autoScrolling = true;
						const interval = setInterval(() => scheduler3.schedule(() => scroller.scroll(void 0, scrollOptions)), AUTOSCROLL_INTERVAL);
						return () => {
							clearInterval(interval);
						};
					} else scroller.autoScrolling = false;
				}
			});
		}
	};
	_AutoScroller.configure = configurator(_AutoScroller);
	AutoScroller = _AutoScroller;
	listenerOptions = {
		capture: true,
		passive: true
	};
	ScrollListener = class extends CorePlugin {
		constructor(manager) {
			super(manager);
			__privateAdd$1(this, _timeout);
			this.handleScroll = () => {
				if (__privateGet$1(this, _timeout) == null) __privateSet$1(this, _timeout, setTimeout(() => {
					this.manager.collisionObserver.forceUpdate(false);
					__privateSet$1(this, _timeout, void 0);
				}, 50));
			};
			const { dragOperation } = this.manager;
			this.destroy = j$1(() => {
				var _a5, _b2, _c3;
				if (dragOperation.status.dragging) {
					const root = (_c3 = (_b2 = (_a5 = dragOperation.source) == null ? void 0 : _a5.element) == null ? void 0 : _b2.ownerDocument) != null ? _c3 : document;
					root.addEventListener("scroll", this.handleScroll, listenerOptions);
					return () => {
						root.removeEventListener("scroll", this.handleScroll, listenerOptions);
					};
				}
			});
		}
	};
	_timeout = /* @__PURE__ */ new WeakMap();
	CSS_RULES2 = "* { user-select: none !important; -webkit-user-select: none !important; }";
	PreventSelection = class extends Plugin {
		constructor(manager) {
			super(manager);
			this.manager = manager;
			const styleInjector = manager.registry.plugins.get(StyleInjector);
			const unregisterStyles = styleInjector == null ? void 0 : styleInjector.register(CSS_RULES2);
			this.destroy = j$1(() => {
				const { dragOperation } = this.manager;
				if (dragOperation.status.initialized) {
					removeSelection();
					document.addEventListener("selectionchange", removeSelection, { capture: true });
					return () => {
						document.removeEventListener("selectionchange", removeSelection, { capture: true });
					};
				}
			});
			if (unregisterStyles) {
				const originalDestroy = this.destroy.bind(this);
				this.destroy = () => {
					unregisterStyles();
					originalDestroy();
				};
			}
		}
	};
	defaults = Object.freeze({
		offset: 10,
		keyboardCodes: {
			start: ["Space", "Enter"],
			cancel: ["Escape"],
			end: [
				"Space",
				"Enter",
				"Tab"
			],
			up: ["ArrowUp"],
			down: ["ArrowDown"],
			left: ["ArrowLeft"],
			right: ["ArrowRight"]
		},
		preventActivation(event, source) {
			var _a5;
			const target = (_a5 = source.handle) != null ? _a5 : source.element;
			return event.target !== target;
		}
	});
	_KeyboardSensor = class _KeyboardSensor extends Sensor {
		constructor(manager, options) {
			super(manager);
			this.manager = manager;
			this.options = options;
			__privateAdd$1(this, _cleanupFunctions, []);
			this.listeners = new Listeners();
			this.handleSourceKeyDown = (event, source, options) => {
				if (this.disabled || event.defaultPrevented) return;
				if (!isElement(event.target)) return;
				if (source.disabled) return;
				const { keyboardCodes = defaults.keyboardCodes, preventActivation = defaults.preventActivation } = options != null ? options : {};
				if (!keyboardCodes.start.includes(event.code)) return;
				if (!this.manager.dragOperation.status.idle) return;
				if (preventActivation == null ? void 0 : preventActivation(event, source)) return;
				this.handleStart(event, source, options);
			};
		}
		bind(source, options = this.options) {
			return j$1(() => {
				var _a5;
				const target = (_a5 = source.handle) != null ? _a5 : source.element;
				const listener = (event) => {
					if (isKeyboardEvent(event)) this.handleSourceKeyDown(event, source, options);
				};
				if (target) {
					target.addEventListener("keydown", listener);
					return () => {
						target.removeEventListener("keydown", listener);
					};
				}
			});
		}
		handleStart(event, source, options) {
			const { element } = source;
			if (!element) throw new Error("Source draggable does not have an associated element");
			event.preventDefault();
			event.stopImmediatePropagation();
			scrollIntoViewIfNeeded(element);
			const { center } = new DOMRectangle(element);
			if (this.manager.actions.start({
				event,
				coordinates: {
					x: center.x,
					y: center.y
				},
				source
			}).signal.aborted) return this.cleanup();
			this.sideEffects();
			const sourceDocument = getDocument(element);
			const listeners = [this.listeners.bind(sourceDocument, [{
				type: "keydown",
				listener: (event2) => this.handleKeyDown(event2, source, options),
				options: { capture: true }
			}])];
			__privateGet$1(this, _cleanupFunctions).push(...listeners);
		}
		handleKeyDown(event, _source, options) {
			const { keyboardCodes = defaults.keyboardCodes } = options != null ? options : {};
			if (isKeycode(event, [...keyboardCodes.end, ...keyboardCodes.cancel])) {
				event.preventDefault();
				const canceled = isKeycode(event, keyboardCodes.cancel);
				this.handleEnd(event, canceled);
				return;
			}
			if (isKeycode(event, keyboardCodes.up)) this.handleMove("up", event);
			else if (isKeycode(event, keyboardCodes.down)) this.handleMove("down", event);
			if (isKeycode(event, keyboardCodes.left)) this.handleMove("left", event);
			else if (isKeycode(event, keyboardCodes.right)) this.handleMove("right", event);
		}
		handleEnd(event, canceled) {
			this.manager.actions.stop({
				event,
				canceled
			});
			this.cleanup();
		}
		handleMove(direction, event) {
			var _a5, _b2;
			const { shape } = this.manager.dragOperation;
			const factor = event.shiftKey ? 5 : 1;
			let by = {
				x: 0,
				y: 0
			};
			let offset = (_b2 = (_a5 = this.options) == null ? void 0 : _a5.offset) != null ? _b2 : defaults.offset;
			if (typeof offset === "number") offset = {
				x: offset,
				y: offset
			};
			if (!shape) return;
			switch (direction) {
				case "up":
					by = {
						x: 0,
						y: -offset.y * factor
					};
					break;
				case "down":
					by = {
						x: 0,
						y: offset.y * factor
					};
					break;
				case "left":
					by = {
						x: -offset.x * factor,
						y: 0
					};
					break;
				case "right":
					by = {
						x: offset.x * factor,
						y: 0
					};
					break;
			}
			if (by.x || by.y) {
				event.preventDefault();
				this.manager.actions.move({
					event,
					by
				});
			}
		}
		sideEffects() {
			const autoScroller = this.manager.registry.plugins.get(AutoScroller);
			if ((autoScroller == null ? void 0 : autoScroller.disabled) === false) {
				autoScroller.disable();
				__privateGet$1(this, _cleanupFunctions).push(() => {
					autoScroller.enable();
				});
			}
		}
		cleanup() {
			__privateGet$1(this, _cleanupFunctions).forEach((cleanup) => cleanup());
			__privateSet$1(this, _cleanupFunctions, []);
		}
		destroy() {
			this.cleanup();
			this.listeners.clear();
		}
	};
	_cleanupFunctions = /* @__PURE__ */ new WeakMap();
	_KeyboardSensor.configure = configurator(_KeyboardSensor);
	_KeyboardSensor.defaults = defaults;
	KeyboardSensor = _KeyboardSensor;
	DistanceConstraint = class extends ActivationConstraint {
		constructor() {
			super(...arguments);
			__privateAdd$1(this, _coordinates);
		}
		onEvent(event) {
			switch (event.type) {
				case "pointerdown":
					__privateSet$1(this, _coordinates, getEventCoordinates(event));
					break;
				case "pointermove":
					if (!__privateGet$1(this, _coordinates)) return;
					const { x, y } = getEventCoordinates(event);
					const delta = {
						x: x - __privateGet$1(this, _coordinates).x,
						y: y - __privateGet$1(this, _coordinates).y
					};
					const { tolerance } = this.options;
					if (tolerance && exceedsDistance(delta, tolerance)) {
						this.abort();
						return;
					}
					if (exceedsDistance(delta, this.options.value)) this.activate(event);
					break;
				case "pointerup":
					this.abort();
					break;
			}
		}
		abort() {
			__privateSet$1(this, _coordinates, void 0);
		}
	};
	_coordinates = /* @__PURE__ */ new WeakMap();
	DelayConstraint = class extends ActivationConstraint {
		constructor() {
			super(...arguments);
			__privateAdd$1(this, _timeout2);
			__privateAdd$1(this, _coordinates2);
		}
		onEvent(event) {
			switch (event.type) {
				case "pointerdown":
					__privateSet$1(this, _coordinates2, getEventCoordinates(event));
					__privateSet$1(this, _timeout2, setTimeout(() => this.activate(event), this.options.value));
					break;
				case "pointermove":
					if (!__privateGet$1(this, _coordinates2)) return;
					const { x, y } = getEventCoordinates(event);
					if (exceedsDistance({
						x: x - __privateGet$1(this, _coordinates2).x,
						y: y - __privateGet$1(this, _coordinates2).y
					}, this.options.tolerance)) this.abort();
					break;
				case "pointerup":
					this.abort();
					break;
			}
		}
		abort() {
			if (__privateGet$1(this, _timeout2)) {
				clearTimeout(__privateGet$1(this, _timeout2));
				__privateSet$1(this, _coordinates2, void 0);
				__privateSet$1(this, _timeout2, void 0);
			}
		}
	};
	_timeout2 = /* @__PURE__ */ new WeakMap();
	_coordinates2 = /* @__PURE__ */ new WeakMap();
	PointerActivationConstraints = class {};
	PointerActivationConstraints.Delay = DelayConstraint;
	PointerActivationConstraints.Distance = DistanceConstraint;
	defaults2 = Object.freeze({
		activationConstraints(event, source) {
			var _a5;
			const { pointerType, target } = event;
			if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a5 = source.handle) == null ? void 0 : _a5.contains(target)))) return;
			if (pointerType === "touch") return [new PointerActivationConstraints.Delay({
				value: 250,
				tolerance: 5
			})];
			if (isTextInput(target) && !event.defaultPrevented) return [new PointerActivationConstraints.Delay({
				value: 200,
				tolerance: 0
			})];
			return [new PointerActivationConstraints.Delay({
				value: 200,
				tolerance: 10
			}), new PointerActivationConstraints.Distance({ value: 5 })];
		},
		preventActivation(event, source) {
			var _a5;
			const { target } = event;
			if (target === source.element) return false;
			if (target === source.handle) return false;
			if (!isElement(target)) return false;
			if ((_a5 = source.handle) == null ? void 0 : _a5.contains(target)) return false;
			const interactiveElement = getInteractiveElement(target);
			if (interactiveElement === source.element) return false;
			return Boolean(interactiveElement);
		}
	});
	_PointerSensor = class _PointerSensor extends Sensor {
		constructor(manager, options) {
			super(manager);
			this.manager = manager;
			this.options = options;
			__privateAdd$1(this, _cleanup, /* @__PURE__ */ new Set());
			this.listeners = new Listeners();
			this.latest = {
				event: void 0,
				coordinates: void 0
			};
			this.handleMove = () => {
				const { event, coordinates: to } = this.latest;
				if (!event || !to) return;
				this.manager.actions.move({
					event,
					to
				});
			};
			this.handleCancel = this.handleCancel.bind(this);
			this.handlePointerUp = this.handlePointerUp.bind(this);
			this.handleKeyDown = this.handleKeyDown.bind(this);
		}
		activationConstraints(event, source, options = this.options) {
			const { activationConstraints = defaults2.activationConstraints } = options != null ? options : {};
			return typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
		}
		bind(source, options = this.options) {
			return j$1(() => {
				var _a5;
				const controller = new AbortController();
				const { signal: signal3 } = controller;
				const listener = (event) => {
					if (isPointerEvent(event)) this.handlePointerDown(event, source, options);
				};
				let targets = [(_a5 = source.handle) != null ? _a5 : source.element];
				if (options == null ? void 0 : options.activatorElements) if (Array.isArray(options.activatorElements)) targets = options.activatorElements;
				else targets = options.activatorElements(source);
				for (const target of targets) {
					if (!target) continue;
					patchWindow(target.ownerDocument.defaultView);
					target.addEventListener("pointerdown", listener, { signal: signal3 });
				}
				return () => controller.abort();
			});
		}
		handlePointerDown(event, source, options) {
			if (this.disabled || !event.isPrimary || event.button !== 0 || !isElement(event.target) || source.disabled || isCapturedBySensor(event) || !this.manager.dragOperation.status.idle) return;
			const { preventActivation = defaults2.preventActivation } = options != null ? options : {};
			if (preventActivation == null ? void 0 : preventActivation(event, source)) return;
			const { target } = event;
			const isNativeDraggable = isHTMLElement(target) && target.draggable && target.getAttribute("draggable") === "true";
			const offset = getFrameTransform(source.element);
			const { x, y } = getEventCoordinates(event);
			this.initialCoordinates = {
				x: x * offset.scaleX + offset.x,
				y: y * offset.scaleY + offset.y
			};
			const constraints = this.activationConstraints(event, source, options);
			event.sensor = this;
			const controller = new ActivationController(constraints, (event2) => this.handleStart(source, event2));
			controller.signal.onabort = () => this.handleCancel(event);
			controller.onEvent(event);
			this.controller = controller;
			const documents = getDocuments();
			const unbindListeners = this.listeners.bind(documents, [
				{
					type: "pointermove",
					listener: (event2) => this.handlePointerMove(event2, source)
				},
				{
					type: "pointerup",
					listener: this.handlePointerUp,
					options: { capture: true }
				},
				{
					type: "pointercancel",
					listener: this.handleCancel
				},
				{
					type: "dragstart",
					listener: isNativeDraggable ? this.handleCancel : preventDefault,
					options: { capture: true }
				}
			]);
			const cleanup = () => {
				unbindListeners();
				this.initialCoordinates = void 0;
			};
			__privateGet$1(this, _cleanup).add(cleanup);
		}
		handlePointerMove(event, source) {
			var _a5, _b2;
			if (((_a5 = this.controller) == null ? void 0 : _a5.activated) === false) {
				(_b2 = this.controller) == null || _b2.onEvent(event);
				return;
			}
			if (this.manager.dragOperation.status.dragging) {
				const coordinates = getEventCoordinates(event);
				const offset = getFrameTransform(source.element);
				coordinates.x = coordinates.x * offset.scaleX + offset.x;
				coordinates.y = coordinates.y * offset.scaleY + offset.y;
				event.preventDefault();
				event.stopPropagation();
				this.latest.event = event;
				this.latest.coordinates = coordinates;
				scheduler.schedule(this.handleMove);
			}
		}
		handlePointerUp(event) {
			const { status } = this.manager.dragOperation;
			if (!status.idle) {
				event.preventDefault();
				event.stopPropagation();
				const canceled = !status.initialized;
				this.manager.actions.stop({
					event,
					canceled
				});
			}
			this.cleanup();
		}
		handleKeyDown(event) {
			if (event.key === "Escape") {
				event.preventDefault();
				this.handleCancel(event);
			}
		}
		handleStart(source, event) {
			const { manager, initialCoordinates } = this;
			if (!initialCoordinates || !manager.dragOperation.status.idle) return;
			if (event.defaultPrevented) return;
			if (manager.actions.start({
				coordinates: initialCoordinates,
				event,
				source
			}).signal.aborted) return this.cleanup();
			event.preventDefault();
			const pointerCaptureTarget = getDocument(event.target).body;
			try {
				pointerCaptureTarget.setPointerCapture(event.pointerId);
			} catch (e) {
				this.handleCancel(event);
				return;
			}
			const listenerTargets = isElement(event.target) ? [event.target, pointerCaptureTarget] : pointerCaptureTarget;
			const unbind = this.listeners.bind(listenerTargets, [
				{
					type: "touchmove",
					listener: preventDefault,
					options: { passive: false }
				},
				{
					type: "click",
					listener: preventDefault
				},
				{
					type: "contextmenu",
					listener: preventDefault
				},
				{
					type: "keydown",
					listener: this.handleKeyDown
				}
			]);
			__privateGet$1(this, _cleanup).add(unbind);
		}
		handleCancel(event) {
			const { dragOperation } = this.manager;
			if (dragOperation.status.initialized) this.manager.actions.stop({
				event,
				canceled: true
			});
			this.cleanup();
		}
		cleanup() {
			const { controller } = this;
			this.controller = void 0;
			if (controller && !controller.signal.aborted) controller.abort();
			this.latest = {
				event: void 0,
				coordinates: void 0
			};
			__privateGet$1(this, _cleanup).forEach((cleanup) => cleanup());
			__privateGet$1(this, _cleanup).clear();
		}
		destroy() {
			this.cleanup();
			this.listeners.clear();
		}
	};
	_cleanup = /* @__PURE__ */ new WeakMap();
	_PointerSensor.configure = configurator(_PointerSensor);
	_PointerSensor.defaults = defaults2;
	PointerSensor = _PointerSensor;
	windows = /* @__PURE__ */ new WeakSet();
	defaultPreset = {
		modifiers: [],
		plugins: [
			Accessibility,
			AutoScroller,
			Cursor,
			Feedback,
			PreventSelection
		],
		sensors: [PointerSensor, KeyboardSensor]
	};
	DragDropManager = class extends DragDropManager$1 {
		constructor(input = {}) {
			const plugins = resolveCustomizable(input.plugins, defaultPreset.plugins);
			const sensors = resolveCustomizable(input.sensors, defaultPreset.sensors);
			const modifiers = resolveCustomizable(input.modifiers, defaultPreset.modifiers);
			super(__spreadProps$2(__spreadValues$2({}, input), {
				plugins: [
					ScrollListener,
					Scroller,
					StyleInjector,
					...plugins
				],
				sensors,
				modifiers
			}));
		}
	};
	Draggable = class extends (_c = Draggable$1, _handle_dec = [reactive], _element_dec = [reactive], _c) {
		constructor(_a5, manager) {
			var _b2 = _a5, { element, effects: effects2 = () => [], handle } = _b2, input = __objRest$1(_b2, [
				"element",
				"effects",
				"handle"
			]);
			super(__spreadValues$2({ effects: () => [...effects2(), () => {
				var _a6, _b3;
				const { manager: manager2 } = this;
				if (!manager2) return;
				const unbindFunctions = ((_b3 = (_a6 = this.sensors) == null ? void 0 : _a6.map(descriptor)) != null ? _b3 : [...manager2.sensors]).map((entry) => {
					const sensorInstance = entry instanceof Sensor ? entry : manager2.registry.register(entry.plugin);
					const options = entry instanceof Sensor ? void 0 : entry.options;
					return sensorInstance.bind(this, options);
				});
				return function cleanup() {
					unbindFunctions.forEach((unbind) => unbind());
				};
			}] }, input), manager);
			__privateAdd$1(this, _handle, __runInitializers$1(_init5, 8, this)), __runInitializers$1(_init5, 11, this);
			__privateAdd$1(this, _element, __runInitializers$1(_init5, 12, this)), __runInitializers$1(_init5, 15, this);
			this.element = element;
			this.handle = handle;
		}
	};
	_init5 = __decoratorStart$1(_c);
	_handle = /* @__PURE__ */ new WeakMap();
	_element = /* @__PURE__ */ new WeakMap();
	__decorateElement$1(_init5, 4, "handle", _handle_dec, Draggable, _handle);
	__decorateElement$1(_init5, 4, "element", _element_dec, Draggable, _element);
	__decoratorMetadata$1(_init5, Draggable);
	Droppable = class extends (_c2 = Droppable$1, _element_dec2 = [reactive], _proxy_dec = [reactive], _c2) {
		constructor(_a5, manager) {
			var _b2 = _a5, { element, effects: effects2 = () => [] } = _b2, input = __objRest$1(_b2, ["element", "effects"]);
			const { collisionDetector = defaultCollisionDetection$1 } = input;
			const updateShape = (boundingClientRect) => {
				const { manager: manager2, element: element2 } = this;
				if (!element2 || boundingClientRect === null) {
					this.shape = void 0;
					return;
				}
				if (!manager2) return;
				const updatedShape = new DOMRectangle(element2);
				const shape = o(() => this.shape);
				if (updatedShape && (shape == null ? void 0 : shape.equals(updatedShape))) return shape;
				this.shape = updatedShape;
				return updatedShape;
			};
			const observePosition = y(false);
			super(__spreadProps$2(__spreadValues$2({}, input), {
				collisionDetector,
				effects: () => [
					...effects2(),
					() => {
						const { element: element2, manager: manager2 } = this;
						if (!manager2) return;
						const { dragOperation } = manager2;
						const { source } = dragOperation;
						observePosition.value = Boolean(source && dragOperation.status.initialized && element2 && !this.disabled && this.accepts(source));
					},
					() => {
						const { element: element2 } = this;
						if (observePosition.value && element2) {
							const positionObserver = new FrameObserver(element2, updateShape);
							return () => {
								positionObserver.disconnect();
								this.shape = void 0;
							};
						}
					},
					() => {
						var _a6;
						if ((_a6 = this.manager) == null ? void 0 : _a6.dragOperation.status.initialized) return () => {
							this.shape = void 0;
						};
					}
				]
			}), manager);
			__privateAdd$1(this, _Droppable_instances);
			__privateAdd$1(this, _element2, __runInitializers$1(_init6, 8, this)), __runInitializers$1(_init6, 11, this);
			__privateAdd$1(this, _proxy, __runInitializers$1(_init6, 12, this)), __runInitializers$1(_init6, 15, this);
			this.element = element;
			this.refreshShape = () => updateShape();
		}
		set element(element) {
			__privateSet$1(this, _Droppable_instances, element, element_set);
		}
		get element() {
			var _a5;
			return (_a5 = this.proxy) != null ? _a5 : __privateGet$1(this, _Droppable_instances, element_get);
		}
	};
	_init6 = __decoratorStart$1(_c2);
	_element2 = /* @__PURE__ */ new WeakMap();
	_Droppable_instances = /* @__PURE__ */ new WeakSet();
	_proxy = /* @__PURE__ */ new WeakMap();
	_d = __decorateElement$1(_init6, 20, "#element", _element_dec2, _Droppable_instances, _element2), element_get = _d.get, element_set = _d.set;
	__decorateElement$1(_init6, 4, "proxy", _proxy_dec, Droppable, _proxy);
	__decoratorMetadata$1(_init6, Droppable);
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/utilities.js
function isRef(value) {
	return value != null && typeof value === "object" && "current" in value;
}
function currentValue(value) {
	var _a;
	if (value == null) return;
	if (isRef(value)) return (_a = value.current) != null ? _a : void 0;
	return value;
}
var init_utilities = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/hooks.js
function useForceUpdate() {
	const setState = (0, import_react$16.useState)(0)[1];
	return (0, import_react$16.useCallback)(() => {
		setState((value) => value + 1);
	}, [setState]);
}
function useSignal(signal, sync = false) {
	const previous = (0, import_react$16.useRef)(signal.peek());
	const read = (0, import_react$16.useRef)(false);
	const forceUpdate = useForceUpdate();
	useIsomorphicLayoutEffect(() => j$1(() => {
		const previousValue = previous.current;
		const currentValue2 = signal.value;
		if (previousValue !== currentValue2) {
			previous.current = currentValue2;
			if (!read.current) return;
			if (sync) (0, import_react_dom$1.flushSync)(forceUpdate);
			else forceUpdate();
		}
	}), [
		signal,
		sync,
		forceUpdate
	]);
	return { get value() {
		read.current = true;
		return signal.peek();
	} };
}
function useComputed(compute, dependencies = [], sync = false) {
	const $compute = (0, import_react$16.useRef)(compute);
	$compute.current = compute;
	return useSignal((0, import_react$16.useMemo)(() => computed(() => $compute.current()), dependencies), sync);
}
function useDeepSignal(target, synchronous) {
	const tracked = (0, import_react$16.useRef)(/* @__PURE__ */ new Map());
	const forceUpdate = useForceUpdate();
	useIsomorphicLayoutEffect(() => {
		if (!target) {
			tracked.current.clear();
			return;
		}
		return j$1(() => {
			var _a;
			let stale = false;
			let sync = false;
			for (const entry of tracked.current) {
				const [key] = entry;
				const value = o(() => entry[1]);
				const latestValue = target[key];
				if (value !== latestValue) {
					stale = true;
					tracked.current.set(key, latestValue);
					sync = (_a = synchronous == null ? void 0 : synchronous(key, value, latestValue)) != null ? _a : false;
				}
			}
			if (stale) if (sync) queueMicrotask(() => (0, import_react_dom$1.flushSync)(forceUpdate));
			else forceUpdate();
		});
	}, [target]);
	return (0, import_react$16.useMemo)(() => target ? new Proxy(target, { get(target2, key) {
		const value = target2[key];
		tracked.current.set(key, value);
		return value;
	} }) : target, [target]);
}
function useLatest(value) {
	const valueRef = (0, import_react$16.useRef)(value);
	useIsomorphicLayoutEffect(() => {
		valueRef.current = value;
	}, [value]);
	return valueRef;
}
function useOnValueChange(value, onChange, effect3 = import_react$16.useEffect, compare = Object.is) {
	const tracked = (0, import_react$16.useRef)(value);
	effect3(() => {
		const oldValue = tracked.current;
		if (!compare(value, oldValue)) {
			tracked.current = value;
			onChange(value, oldValue);
		}
	}, [onChange, value]);
}
function useOnElementChange(value, onChange) {
	const previous = (0, import_react$16.useRef)(currentValue(value));
	useIsomorphicLayoutEffect(() => {
		const current = currentValue(value);
		if (current !== previous.current) {
			previous.current = current;
			onChange(current);
		}
	});
}
var import_react$16, import_react_dom$1, useIsomorphicLayoutEffect;
var init_hooks = __esmMin((() => {
	import_react$16 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$3();
	import_react_dom$1 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_utilities();
	useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react$16.useLayoutEffect : import_react$16.useEffect;
}));
//#endregion
//#region ../../node_modules/.pnpm/@dnd-kit+react@0.5.0_react-dom@19.2.8_react@19.2.8/node_modules/@dnd-kit/react/index.js
function DragDropProvider(_a2) {
	var _b = _a2, { children, onCollision, onBeforeDragStart, onDragStart, onDragMove, onDragOver, onDragEnd } = _b, input = __objRest(_b, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	const rendererRef = (0, import_react$15.useRef)(null);
	const { plugins: pluginsInput, modifiers: modifiersInput, sensors: sensorsInput } = input;
	const plugins = resolveCustomizable(pluginsInput, defaultPreset.plugins);
	const sensors = resolveCustomizable(sensorsInput, defaultPreset.sensors);
	const modifiers = resolveCustomizable(modifiersInput, defaultPreset.modifiers);
	const handleBeforeDragStart = useLatest(onBeforeDragStart);
	const handleDragStart = useLatest(onDragStart);
	const handleDragOver = useLatest(onDragOver);
	const handleDragMove = useLatest(onDragMove);
	const handleDragEnd = useLatest(onDragEnd);
	const handleCollision = useLatest(onCollision);
	const manager = useStableInstance(() => {
		var _a3;
		return (_a3 = input.manager) != null ? _a3 : new DragDropManager(input);
	});
	(0, import_react$15.useEffect)(() => {
		if (!rendererRef.current) throw new Error("Renderer not found");
		const { renderer, trackRendering } = rendererRef.current;
		const { monitor } = manager;
		manager.renderer = renderer;
		const listeners = [
			monitor.addEventListener("beforedragstart", (event) => {
				const callback = handleBeforeDragStart.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("dragstart", (event) => {
				var _a3;
				return (_a3 = handleDragStart.current) == null ? void 0 : _a3.call(handleDragStart, event, manager);
			}),
			monitor.addEventListener("dragover", (event) => {
				const callback = handleDragOver.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("dragmove", (event) => {
				const callback = handleDragMove.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("dragend", (event) => {
				const callback = handleDragEnd.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("collision", (event) => {
				var _a3;
				return (_a3 = handleCollision.current) == null ? void 0 : _a3.call(handleCollision, event, manager);
			})
		];
		return () => listeners.forEach((dispose) => dispose());
	}, [manager]);
	useOnValueChange(plugins, () => manager && (manager.plugins = plugins), ...options);
	useOnValueChange(sensors, () => manager && (manager.sensors = sensors), ...options);
	useOnValueChange(modifiers, () => manager && (manager.modifiers = modifiers), ...options);
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)(DragDropContext.Provider, {
		value: manager,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Renderer, {
			ref: rendererRef,
			children
		}), children]
	});
}
function useStableInstance(create) {
	const ref = (0, import_react$15.useRef)(null);
	if (!ref.current) ref.current = create();
	(0, import_react$15.useInsertionEffect)(() => {
		return () => {
			var _a2;
			return (_a2 = ref.current) == null ? void 0 : _a2.destroy();
		};
	}, []);
	return ref.current;
}
function useDragDropManager() {
	return (0, import_react$15.useContext)(DragDropContext);
}
function useInstance(initializer) {
	var _a2;
	const manager = (_a2 = useDragDropManager()) != null ? _a2 : void 0;
	const [instance] = (0, import_react$15.useState)(() => initializer(manager));
	if (instance.manager !== manager) instance.manager = manager;
	useIsomorphicLayoutEffect(instance.register, [manager, instance]);
	return instance;
}
function useDraggable(input) {
	const { disabled, data, element, handle, id, modifiers, sensors, plugins } = input;
	const draggable = useInstance((manager) => new Draggable(__spreadProps$1(__spreadValues$1({}, input), {
		register: false,
		handle: currentValue(handle),
		element: currentValue(element)
	}), manager));
	const trackedDraggable = useDeepSignal(draggable, shouldUpdateSynchronously);
	useOnValueChange(id, () => draggable.id = id);
	useOnElementChange(handle, (handle2) => draggable.handle = handle2);
	useOnElementChange(element, (element2) => draggable.element = element2);
	useOnValueChange(data, () => data && (draggable.data = data));
	useOnValueChange(disabled, () => draggable.disabled = disabled === true);
	useOnValueChange(sensors, () => draggable.sensors = sensors, void 0, deepEqual);
	useOnValueChange(modifiers, () => draggable.modifiers = modifiers, void 0, deepEqual);
	useOnValueChange(plugins, () => draggable.plugins = plugins, void 0, deepEqual);
	useOnValueChange(input.alignment, () => draggable.alignment = input.alignment);
	return {
		draggable: trackedDraggable,
		get isDragging() {
			return trackedDraggable.isDragging;
		},
		get isDropping() {
			return trackedDraggable.isDropping;
		},
		get isDragSource() {
			return trackedDraggable.isDragSource;
		},
		handleRef: (0, import_react$15.useCallback)((element2) => {
			draggable.handle = element2 != null ? element2 : void 0;
		}, [draggable]),
		ref: (0, import_react$15.useCallback)((element2) => {
			var _a2, _b;
			if (!element2 && ((_a2 = draggable.element) == null ? void 0 : _a2.isConnected) && !((_b = draggable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			draggable.element = element2 != null ? element2 : void 0;
		}, [draggable])
	};
}
function shouldUpdateSynchronously(key, oldValue, newValue) {
	if (key === "isDragSource" && !newValue && oldValue) return true;
	return false;
}
function DragOverlay({ children, className, dropAnimation, style, tag, disabled }) {
	var _a2;
	const ref = (0, import_react$15.useRef)(null);
	const manager = useDragDropManager();
	const source = (_a2 = useComputed(() => manager == null ? void 0 : manager.dragOperation.source, [manager]).value) != null ? _a2 : null;
	const isDisabled = typeof disabled === "function" ? disabled(source) : disabled;
	(0, import_react$15.useEffect)(() => {
		if (!ref.current || !manager || isDisabled) return;
		const feedback = manager.plugins.find((plugin) => plugin instanceof Feedback);
		if (!feedback) return;
		feedback.overlay = ref.current;
		return () => {
			feedback.overlay = void 0;
		};
	}, [manager, isDisabled]);
	(0, import_react$15.useEffect)(() => {
		if (!manager) return;
		const feedback = manager.plugins.find((plugin) => plugin instanceof Feedback);
		if (!feedback) return;
		feedback.dropAnimation = dropAnimation;
		return () => {
			feedback.dropAnimation = void 0;
		};
	}, [manager, dropAnimation]);
	const patchedManager = (0, import_react$15.useMemo)(() => {
		if (!manager) return null;
		const patchedRegistry = new Proxy(manager.registry, { get(target, property) {
			if (property === "register" || property === "unregister") return noop;
			return target[property];
		} });
		return new Proxy(manager, { get(target, property) {
			if (property === "registry") return patchedRegistry;
			return target[property];
		} });
	}, [manager]);
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(DragDropContext.Provider, {
		value: patchedManager,
		children: (0, import_react$15.createElement)(tag || "div", {
			ref,
			className,
			style,
			"data-dnd-overlay": true
		}, renderChildren())
	});
	function renderChildren() {
		if (!source || isDisabled) return null;
		if (typeof children === "function") return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Children, {
			source,
			children
		});
		return children;
	}
}
function noop() {
	return () => {};
}
function Children({ children, source }) {
	return children(useDeepSignal(source));
}
function useDroppable(input) {
	const { collisionDetector, data, disabled, element, id, accept, type } = input;
	const droppable = useInstance((manager) => new Droppable(__spreadProps$1(__spreadValues$1({}, input), {
		register: false,
		element: currentValue(element)
	}), manager));
	const trackedDroppalbe = useDeepSignal(droppable);
	useOnValueChange(id, () => droppable.id = id);
	useOnElementChange(element, (element2) => droppable.element = element2);
	useOnValueChange(accept, () => droppable.accept = accept, void 0, deepEqual);
	useOnValueChange(collisionDetector, () => droppable.collisionDetector = collisionDetector != null ? collisionDetector : defaultCollisionDetection);
	useOnValueChange(data, () => data && (droppable.data = data));
	useOnValueChange(disabled, () => droppable.disabled = disabled === true);
	useOnValueChange(type, () => droppable.type = type);
	return {
		droppable: trackedDroppalbe,
		get isDropTarget() {
			return trackedDroppalbe.isDropTarget;
		},
		ref: (0, import_react$15.useCallback)((element2) => {
			var _a2, _b;
			if (!element2 && ((_a2 = droppable.element) == null ? void 0 : _a2.isConnected) && !((_b = droppable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			droppable.element = element2 != null ? element2 : void 0;
		}, [droppable])
	};
}
function useDragOperation() {
	const manager = useDragDropManager();
	const source = useComputed(() => manager == null ? void 0 : manager.dragOperation.source, [manager]);
	const target = useComputed(() => manager == null ? void 0 : manager.dragOperation.target, [manager]);
	return {
		get source() {
			return source.value;
		},
		get target() {
			return target.value;
		}
	};
}
var import_react$15, import_jsx_runtime$12, __defProp$1, __defProps$1, __getOwnPropDescs$1, __getOwnPropSymbols$1, __hasOwnProp$1, __propIsEnum$1, __defNormalProp$1, __spreadValues$1, __spreadProps$1, __objRest, DragDropContext, Renderer, options, __create, __defProp2, __getOwnPropDesc, __knownSymbol, __typeError, __defNormalProp2, __decoratorStart, __decoratorStrings, __expectFn, __decoratorContext, __decoratorMetadata, __runInitializers, __decorateElement, __accessCheck, __privateGet, __privateAdd, __privateSet, Point, _direction_dec, _delta_dec, _a, _timestamp, _init, Position, Axis, pointerIntersection, shapeIntersection, defaultCollisionDetection;
var init_react = __esmMin((() => {
	import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dom();
	init_hooks();
	init_dist$3();
	import_jsx_runtime$12 = require_jsx_runtime();
	init_utilities();
	init_abstract();
	__defProp$1 = Object.defineProperty;
	__defProps$1 = Object.defineProperties;
	__getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
	__getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
	__hasOwnProp$1 = Object.prototype.hasOwnProperty;
	__propIsEnum$1 = Object.prototype.propertyIsEnumerable;
	__defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__spreadValues$1 = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		if (__getOwnPropSymbols$1) {
			for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		}
		return a;
	};
	__spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
	__objRest = (source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$1) {
			for (var prop of __getOwnPropSymbols$1(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	};
	DragDropContext = (0, import_react$15.createContext)(new DragDropManager());
	Renderer = (0, import_react$15.memo)((0, import_react$15.forwardRef)(({ children }, ref) => {
		const [transitionCount, setTransitionCount] = (0, import_react$15.useState)(0);
		const rendering = (0, import_react$15.useRef)(null);
		const resolver = (0, import_react$15.useRef)(null);
		const renderer = (0, import_react$15.useMemo)(() => ({
			renderer: { get rendering() {
				var _a2;
				return (_a2 = rendering.current) != null ? _a2 : Promise.resolve();
			} },
			trackRendering(callback) {
				if (!rendering.current) rendering.current = new Promise((resolve) => {
					resolver.current = resolve;
				});
				(0, import_react$15.startTransition)(() => {
					callback();
					setTransitionCount((count) => count + 1);
				});
			}
		}), []);
		useIsomorphicLayoutEffect(() => {
			var _a2;
			(_a2 = resolver.current) == null || _a2.call(resolver);
			rendering.current = null;
		}, [children, transitionCount]);
		(0, import_react$15.useImperativeHandle)(ref, () => renderer);
		return null;
	}));
	options = [void 0, deepEqual];
	__create = Object.create;
	__defProp2 = Object.defineProperty;
	__getOwnPropDesc = Object.getOwnPropertyDescriptor;
	__knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
	__typeError = (msg) => {
		throw TypeError(msg);
	};
	__defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__decoratorStart = (base) => {
		var _a2;
		return [
			,
			,
			,
			__create((_a2 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a2 : null)
		];
	};
	__decoratorStrings = [
		"class",
		"method",
		"getter",
		"setter",
		"accessor",
		"field",
		"value",
		"get",
		"set"
	];
	__expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
	__decoratorContext = (kind, name, done, metadata, fns) => ({
		kind: __decoratorStrings[kind],
		name,
		metadata,
		addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null))
	});
	__decoratorMetadata = (array, target) => __defNormalProp2(target, __knownSymbol("metadata"), array[3]);
	__runInitializers = (array, flags, self, value) => {
		for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) fns[i].call(self);
		return value;
	};
	__decorateElement = (array, flags, name, decorators, target, extra) => {
		var it, done, ctx, access, k = flags & 7, s = false, p = false;
		var j = 2, key = __decoratorStrings[k + 5];
		var extraInitializers = array[j] || (array[j] = []);
		var desc = (target = target.prototype, __getOwnPropDesc(target, name));
		for (var i = decorators.length - 1; i >= 0; i--) {
			ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
			ctx.static = s, ctx.private = p, access = ctx.access = { has: (x) => name in x };
			access.get = (x) => x[name];
			it = (0, decorators[i])(desc[key], ctx), done._ = 1;
			__expectFn(it) && (desc[key] = it);
		}
		return desc && __defProp2(target, name, desc), target;
	};
	__accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
	__privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
	__privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	__privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
	Point = class _Point {
		/**
		* @param {number} Coordinate of the point on the horizontal axis
		* @param {number} Coordinate of the point on the vertical axis
		*/
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
		/**
		* Returns the delta between this point and another point.
		*
		* @param {Point} a - A point
		* @param {Point} b - Another point
		*/
		static delta(a, b) {
			return new _Point(a.x - b.x, a.y - b.y);
		}
		/**
		* Returns the distance (hypotenuse) between this point and another point.
		*
		* @param {Point} a - A point
		* @param {Point} b - Another point
		*/
		static distance(a, b) {
			return Math.hypot(a.x - b.x, a.y - b.y);
		}
		/**
		* Returns true if both points are equal.
		*
		* @param {Point} a - A point
		* @param {Point} b - Another point
		*/
		static equals(a, b) {
			return a.x === b.x && a.y === b.y;
		}
		static from({ x, y }) {
			return new _Point(x, y);
		}
	};
	Position = class extends (_a = ValueHistory, _delta_dec = [derived], _direction_dec = [derived], _a) {
		constructor(initialValue) {
			const point = Point.from(initialValue);
			super(point, (a, b) => Point.equals(a, b));
			__runInitializers(_init, 5, this);
			__privateAdd(this, _timestamp, 0);
			this.velocity = {
				x: 0,
				y: 0
			};
		}
		get delta() {
			return Point.delta(this.current, this.initial);
		}
		get direction() {
			const { current, previous } = this;
			if (!previous) return null;
			const delta = {
				x: current.x - previous.x,
				y: current.y - previous.y
			};
			if (!delta.x && !delta.y) return null;
			if (Math.abs(delta.x) > Math.abs(delta.y)) return delta.x > 0 ? "right" : "left";
			return delta.y > 0 ? "down" : "up";
		}
		get current() {
			return super.current;
		}
		set current(coordinates) {
			const { current } = this;
			const point = Point.from(coordinates);
			const delta = {
				x: point.x - current.x,
				y: point.y - current.y
			};
			const timestamp = Date.now();
			const timeDelta = timestamp - __privateGet(this, _timestamp);
			const velocity = (delta2) => Math.round(delta2 / timeDelta * 100);
			n(() => {
				__privateSet(this, _timestamp, timestamp);
				this.velocity = {
					x: velocity(delta.x),
					y: velocity(delta.y)
				};
				super.current = point;
			});
		}
		reset(coordinates = this.defaultValue) {
			super.reset(Point.from(coordinates));
			this.velocity = {
				x: 0,
				y: 0
			};
		}
	};
	_init = __decoratorStart(_a);
	_timestamp = /* @__PURE__ */ new WeakMap();
	__decorateElement(_init, 2, "delta", _delta_dec, Position);
	__decorateElement(_init, 2, "direction", _direction_dec, Position);
	__decoratorMetadata(_init, Position);
	Axis = /* @__PURE__ */ ((Axis2) => {
		Axis2["Horizontal"] = "x";
		Axis2["Vertical"] = "y";
		return Axis2;
	})(Axis || {});
	Object.values(Axis);
	pointerIntersection = ({ dragOperation, droppable }) => {
		const pointerCoordinates = dragOperation.position.current;
		if (!pointerCoordinates) return null;
		const { id } = droppable;
		if (!droppable.shape) return null;
		if (droppable.shape.containsPoint(pointerCoordinates)) return {
			id,
			value: 1 / Point.distance(droppable.shape.center, pointerCoordinates),
			type: CollisionType.PointerIntersection,
			priority: CollisionPriority.High
		};
		return null;
	};
	shapeIntersection = ({ dragOperation, droppable }) => {
		const { shape } = dragOperation;
		if (!droppable.shape || !(shape == null ? void 0 : shape.current)) return null;
		const intersectionArea = shape.current.intersectionArea(droppable.shape);
		if (intersectionArea) {
			const { position } = dragOperation;
			const distance = Point.distance(droppable.shape.center, position.current);
			const value = intersectionArea / (shape.current.area + droppable.shape.area - intersectionArea) / distance;
			return {
				id: droppable.id,
				value,
				type: CollisionType.ShapeIntersection,
				priority: CollisionPriority.Normal
			};
		}
		return null;
	};
	defaultCollisionDetection = (args) => {
		var _a2;
		return (_a2 = pointerIntersection(args)) != null ? _a2 : shapeIntersection(args);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-virtuoso@4.18.11_react-dom@19.2.8_react@19.2.8/node_modules/react-virtuoso/dist/index.mjs
function fn(t) {
	return () => t;
}
function Io(t) {
	t();
}
function re(t, e) {
	return (n) => t(e(n));
}
function mn(t, e) {
	return () => t(e);
}
function So(t, e) {
	return (n) => t(e, n);
}
function _e(t) {
	return t !== void 0;
}
function xo(...t) {
	return () => {
		t.map(Io);
	};
}
function Jt() {}
function ye(t, e) {
	return e(t), t;
}
function vo(t, e) {
	return e(t);
}
function rt(...t) {
	return t;
}
function Y(t, e) {
	return t(Pt, e);
}
function M(t, e) {
	t(we, e);
}
function Ne(t) {
	t(Xt);
}
function it(t) {
	return t(Vn);
}
function z(t, e) {
	return Y(t, So(e, we));
}
function yt(t, e) {
	const n = t(Pt, (o) => {
		n(), e(o);
	});
	return n;
}
function pn(t) {
	let e, n;
	return (o) => (r) => {
		e = r, n && clearTimeout(n), n = setTimeout(() => {
			o(e);
		}, t);
	};
}
function Wn(t, e) {
	return t === e;
}
function nt(t = Wn) {
	let e;
	return (n) => (o) => {
		t(e, o) || (e = o, n(o));
	};
}
function P(t) {
	return (e) => (n) => {
		t(n) && e(n);
	};
}
function B(t) {
	return (e) => re(e, t);
}
function Bt(t) {
	return (e) => () => {
		e(t);
	};
}
function x(t, ...e) {
	const n = To(...e);
	return ((o, r) => {
		switch (o) {
			case Xt:
				Ne(t);
				return;
			case Pt: return Y(t, n(r));
		}
	});
}
function Ot(t, e) {
	return (n) => (o) => {
		n(e = t(e, o));
	};
}
function Ut(t) {
	return (e) => (n) => {
		t > 0 ? t-- : e(n);
	};
}
function zt(t) {
	let e = null, n;
	return (o) => (r) => {
		e = r, !n && (n = setTimeout(() => {
			n = void 0, o(e);
		}, t));
	};
}
function $(...t) {
	const e = Array.from({ length: t.length });
	let n = 0, o = null;
	const r = 2 ** t.length - 1;
	return t.forEach((s, i) => {
		const l = 2 ** i;
		Y(s, (c) => {
			const d = n;
			n |= l, e[i] = c, d !== r && n === r && o && (o(), o = null);
		});
	}), (s) => (i) => {
		const l = () => {
			s([i].concat(e));
		};
		n === r ? l() : o = l;
	};
}
function To(...t) {
	return (e) => t.reduceRight(vo, e);
}
function Co(t) {
	let e, n;
	const o = () => e?.();
	return function(r, s) {
		switch (r) {
			case Pt: return s ? n === s ? void 0 : (o(), n = s, e = Y(t, s), e) : (o(), Jt);
			case Xt:
				o(), n = null;
				return;
		}
	};
}
function T(t) {
	let e = t;
	const n = U();
	return ((o, r) => {
		switch (o) {
			case we:
				e = r;
				break;
			case Pt:
				r(e);
				break;
			case Vn: return e;
		}
		return n(o, r);
	});
}
function ht(t, e) {
	return ye(T(e), (n) => z(t, n));
}
function U() {
	const t = [];
	return ((e, n) => {
		switch (e) {
			case we:
				t.slice().forEach((o) => {
					o(n);
				});
				return;
			case Xt:
				t.splice(0);
				return;
			case Pt: return t.push(n), () => {
				const o = t.indexOf(n);
				o > -1 && t.splice(o, 1);
			};
		}
	});
}
function Tt(t) {
	return ye(U(), (e) => z(t, e));
}
function j(t, e = [], n = wo) {
	const { singleton: o } = n;
	return {
		constructor: t,
		dependencies: e,
		id: yo(),
		singleton: o
	};
}
function bo(t) {
	const e = /* @__PURE__ */ new Map(), n = ({ constructor: o, dependencies: r, id: s, singleton: i }) => {
		if (i && e.has(s)) return e.get(s);
		const l = o(r.map((c) => n(c)));
		return i && e.set(s, l), l;
	};
	return n(t);
}
function at(...t) {
	const e = U(), n = Array.from({ length: t.length });
	let o = 0;
	const r = 2 ** t.length - 1;
	return t.forEach((s, i) => {
		const l = 2 ** i;
		Y(s, (c) => {
			n[i] = c, o |= l, o === r && M(e, n);
		});
	}), function(s, i) {
		switch (s) {
			case Xt:
				Ne(e);
				return;
			case Pt: return o === r && i(n), Y(e, i);
		}
	};
}
function W(t, e = Wn) {
	return x(t, nt(e));
}
function Fe(...t) {
	return function(e, n) {
		switch (e) {
			case Xt: return;
			case Pt: return xo(...t.map((o) => Y(o, n)));
		}
	};
}
function Eo(t) {
	return "self" in t ? t.document.documentElement : t;
}
function Pn(t) {
	const e = Eo(t);
	return e.ownerDocument.defaultView.getComputedStyle(e).direction === "rtl";
}
function _t(t, e) {
	return Pn(t) ? -e : e;
}
function hn(t, e) {
	return Pn(t) ? -e : e;
}
function kt(t, e, n) {
	return De(t, e, n).callbackRef;
}
function De(t, e, n) {
	const o = import_react$14.useRef(null);
	let r = (i) => {};
	const s = import_react$14.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((i) => {
		const l = () => {
			const c = i[0].target;
			c.offsetParent !== null && t(c);
		};
		n ? l() : requestAnimationFrame(l);
	}) : null, [t, n]);
	return r = (i) => {
		i && e ? (s?.observe(i), o.current = i) : (o.current && s?.unobserve(o.current), o.current = null);
	}, {
		callbackRef: r,
		ref: o
	};
}
function Gn(t, e, n, o, r, s, i, l, c) {
	return De(import_react$14.useCallback((m) => {
		const v = Bo(m.children, e, l ? "offsetWidth" : "offsetHeight", r);
		let p = m.parentElement;
		for (; p.dataset.virtuosoScroller === void 0;) p = p.parentElement;
		const I = p.lastElementChild?.dataset.viewportType === "window";
		let w;
		I && (w = p.ownerDocument.defaultView);
		const R = i ? l ? i.scrollWidth : i.scrollHeight : I ? l ? w.document.documentElement.scrollWidth : w.document.documentElement.scrollHeight : l ? p.scrollWidth : p.scrollHeight, h = i ? l ? i.offsetWidth : i.offsetHeight : I ? l ? w.innerWidth : w.innerHeight : l ? p.offsetWidth : p.offsetHeight, f = i ? l ? _t(i, i.scrollLeft) : i.scrollTop : I ? l ? _t(w, w.scrollX || w.document.documentElement.scrollLeft) : w.scrollY || w.document.documentElement.scrollTop : l ? _t(p, p.scrollLeft) : p.scrollTop;
		o({
			scrollHeight: R,
			scrollTop: Math.max(f, 0),
			viewportHeight: h
		}), s?.(l ? gn("column-gap", getComputedStyle(m).columnGap, r) : gn("row-gap", getComputedStyle(m).rowGap, r)), v !== null && t(v);
	}, [
		t,
		e,
		r,
		s,
		i,
		o,
		l
	]), n, c);
}
function Bo(t, e, n, o) {
	const r = t.length;
	if (r === 0) return null;
	const s = [];
	for (let i = 0; i < r; i++) {
		const l = t.item(i);
		if (l.dataset.index === void 0) continue;
		const c = parseInt(l.dataset.index, 10), d = parseFloat(l.dataset.knownSize), m = e(l, n);
		if (m === 0 && o("Zero-sized element, this should not happen", { child: l }, ft.ERROR), m === d) continue;
		const v = s[s.length - 1];
		s.length === 0 || v.size !== m || v.endIndex !== c - 1 ? s.push({
			endIndex: c,
			size: m,
			startIndex: c
		}) : s[s.length - 1].endIndex++;
	}
	return s;
}
function gn(t, e, n) {
	return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, ft.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
function $e(t, e, n) {
	const o = import_react$14.useRef(null), r = import_react$14.useCallback((c) => {
		if (!c?.offsetParent) return;
		const d = c.getBoundingClientRect(), m = d.width;
		let v, p;
		if (e) {
			const I = e.getBoundingClientRect(), w = d.top - I.top;
			p = I.height - Math.max(0, w), v = w + e.scrollTop;
		} else {
			const I = i.current.ownerDocument.defaultView;
			p = I.innerHeight - Math.max(0, d.top), v = d.top + I.scrollY;
		}
		o.current = {
			listHeight: d.height,
			offsetTop: v,
			visibleHeight: p,
			visibleWidth: m
		}, t(o.current);
	}, [t, e]), { callbackRef: s, ref: i } = De(r, !0, n), l = import_react$14.useCallback(() => {
		r(i.current);
	}, [r, i]);
	return import_react$14.useEffect(() => {
		if (e) {
			e.addEventListener("scroll", l);
			const d = new ResizeObserver(() => {
				requestAnimationFrame(l);
			});
			return d.observe(e), () => {
				e.removeEventListener("scroll", l), d.unobserve(e);
			};
		}
		const c = i.current?.ownerDocument.defaultView;
		return c?.addEventListener("scroll", l), c?.addEventListener("resize", l), () => {
			c?.removeEventListener("scroll", l), c?.removeEventListener("resize", l);
		};
	}, [
		l,
		e,
		i
	]), s;
}
function An(t, e) {
	const n = t.length;
	if (n === 0) return [];
	let { index: o, value: r } = e(t[0]);
	const s = [];
	for (let i = 1; i < n; i++) {
		const { index: l, value: c } = e(t[i]);
		s.push({
			end: l - 1,
			start: o,
			value: r
		}), o = l, r = c;
	}
	return s.push({
		end: Infinity,
		start: o,
		value: r
	}), s;
}
function J(t) {
	return t === se;
}
function ie(t, e) {
	if (!J(t)) return e === t.k ? t.v : e < t.k ? ie(t.l, e) : ie(t.r, e);
}
function Rt(t, e, n = "k") {
	if (J(t)) return [-Infinity, void 0];
	if (Number(t[n]) === e) return [t.k, t.v];
	if (Number(t[n]) < e) {
		const o = Rt(t.r, e, n);
		return o[0] === -Infinity ? [t.k, t.v] : o;
	}
	return Rt(t.l, e, n);
}
function vt(t, e, n) {
	return J(t) ? Nn(e, n, 1) : e === t.k ? dt(t, {
		k: e,
		v: n
	}) : e < t.k ? In(dt(t, { l: vt(t.l, e, n) })) : In(dt(t, { r: vt(t.r, e, n) }));
}
function Yt() {
	return se;
}
function Zt(t, e, n) {
	if (J(t)) return [];
	const o = Rt(t, e)[0];
	return Oo(We(t, o, n));
}
function Ve(t, e) {
	if (J(t)) return se;
	const { k: n, l: o, r } = t;
	if (e === n) {
		if (J(o)) return r;
		if (J(r)) return o;
		const [s, i] = _n(o);
		return xe(dt(t, {
			k: s,
			l: Mn(o),
			v: i
		}));
	}
	return e < n ? xe(dt(t, { l: Ve(o, e) })) : xe(dt(t, { r: Ve(r, e) }));
}
function Nt(t) {
	return J(t) ? [] : [
		...Nt(t.l),
		{
			k: t.k,
			v: t.v
		},
		...Nt(t.r)
	];
}
function We(t, e, n) {
	if (J(t)) return [];
	const { k: o, l: r, r: s, v: i } = t;
	let l = [];
	return o > e && (l = l.concat(We(r, e, n))), o >= e && o <= n && l.push({
		k: o,
		v: i
	}), o <= n && (l = l.concat(We(s, e, n))), l;
}
function xe(t) {
	const { l: e, lvl: n, r: o } = t;
	if (o.lvl >= n - 1 && e.lvl >= n - 1) return t;
	if (n > o.lvl + 1) {
		if (Be(e)) return Dn(dt(t, { lvl: n - 1 }));
		if (!J(e) && !J(e.r)) return dt(e.r, {
			l: dt(e, { r: e.r.l }),
			lvl: n,
			r: dt(t, {
				l: e.r.r,
				lvl: n - 1
			})
		});
		throw new Error("Unexpected empty nodes");
	}
	if (Be(t)) return Pe(dt(t, { lvl: n - 1 }));
	if (!J(o) && !J(o.l)) {
		const r = o.l, s = Be(r) ? o.lvl - 1 : o.lvl;
		return dt(r, {
			l: dt(t, {
				lvl: n - 1,
				r: r.l
			}),
			lvl: r.lvl + 1,
			r: Pe(dt(o, {
				l: r.r,
				lvl: s
			}))
		});
	}
	throw new Error("Unexpected empty nodes");
}
function dt(t, e) {
	return Nn(e.k === void 0 ? t.k : e.k, e.v === void 0 ? t.v : e.v, e.lvl === void 0 ? t.lvl : e.lvl, e.l === void 0 ? t.l : e.l, e.r === void 0 ? t.r : e.r);
}
function Mn(t) {
	return J(t.r) ? t.l : xe(dt(t, { r: Mn(t.r) }));
}
function Be(t) {
	return J(t) || t.lvl > t.r.lvl;
}
function _n(t) {
	return J(t.r) ? [t.k, t.v] : _n(t.r);
}
function Nn(t, e, n, o = se, r = se) {
	return {
		k: t,
		l: o,
		lvl: n,
		r,
		v: e
	};
}
function In(t) {
	return Pe(Dn(t));
}
function Dn(t) {
	const { l: e } = t;
	return !J(e) && e.lvl === t.lvl ? dt(e, { r: dt(t, { l: e.r }) }) : t;
}
function Pe(t) {
	const { lvl: e, r: n } = t;
	return !J(n) && !J(n.r) && n.lvl === e && n.r.lvl === e ? dt(n, {
		l: dt(t, { r: n.l }),
		lvl: e + 1
	}) : t;
}
function Oo(t) {
	return An(t, ({ k: e, v: n }) => ({
		index: e,
		value: n
	}));
}
function $n(t, e) {
	return !!(t && t.startIndex === e.startIndex && t.endIndex === e.endIndex);
}
function le(t, e) {
	return !!(t && t[0] === e[0] && t[1] === e[1]);
}
function Un(t, e, n) {
	return t[Te(t, e, n)];
}
function Te(t, e, n, o = 0) {
	let r = t.length - 1;
	for (; o <= r;) {
		const s = Math.floor((o + r) / 2), i = t[s], l = n(i, e);
		if (l === 0) return s;
		if (l === -1) {
			if (r - o < 2) return s - 1;
			r = s - 1;
		} else {
			if (r === o) return s;
			o = s + 1;
		}
	}
	throw new Error(`Failed binary finding record in array - ${t.join(",")}, searched for ${e}`);
}
function ko(t, e, n, o) {
	const r = Te(t, e, o), s = Te(t, n, o, r);
	return t.slice(r, s + 1);
}
function Ht(t, e) {
	return Math.round(t.getBoundingClientRect()[e]);
}
function be(t) {
	return !J(t.groupOffsetTree);
}
function Ke({ index: t }, e) {
	return e === t ? 0 : e < t ? -1 : 1;
}
function Lo() {
	return {
		groupIndices: [],
		groupOffsetTree: Yt(),
		lastIndex: 0,
		lastOffset: 0,
		lastSize: 0,
		offsetTree: [],
		sizeTree: Yt()
	};
}
function zo(t, e) {
	let n = J(t) ? 0 : Infinity;
	for (const o of e) {
		const { endIndex: r, size: s, startIndex: i } = o;
		if (n = Math.min(n, i), J(t)) {
			t = vt(t, 0, s);
			continue;
		}
		const l = Zt(t, i - 1, r + 1);
		if (l.some(Mo(o))) continue;
		let c = !1, d = !1;
		for (const { end: m, start: v, value: p } of l) c ? (r >= v || s === p) && (t = Ve(t, v)) : (d = p !== s, c = !0), m > r && r >= v && p !== s && (t = vt(t, r + 1, p));
		d && (t = vt(t, i, s));
	}
	return [t, n];
}
function Fo(t) {
	return t.groupIndex !== void 0;
}
function Vo({ offset: t }, e) {
	return e === t ? 0 : e < t ? -1 : 1;
}
function ce(t, e, n) {
	if (e.length === 0) return 0;
	const { index: o, offset: r, size: s } = Un(e, t, Ke), i = t - o, l = s * i + (i - 1) * n + r;
	return l > 0 ? l + n : l;
}
function Kn(t, e) {
	if (!be(e)) return t;
	let n = 0;
	for (; e.groupIndices[n] <= t + n;) n++;
	return t + n;
}
function jn(t, e, n) {
	if (Fo(t)) return e.groupIndices[t.groupIndex] + 1;
	let r = Kn(t.index === "LAST" ? n : t.index, e);
	return r = Math.max(0, Math.min(n, r)), r;
}
function Wo(t, e, n, o = 0) {
	return o > 0 && (e = Math.max(e, Un(t, o, Ke).offset)), An(ko(t, e, n, Vo), Ao);
}
function Po(t, [e, n, o, r]) {
	e.length > 0 && o("received item sizes", e, ft.DEBUG);
	const s = t.sizeTree;
	let i = s, l = 0;
	if (n.length > 0 && J(s) && e.length === 2) {
		const p = e[0].size, I = e[1].size;
		i = n.reduce((w, R) => vt(vt(w, R, p), R + 1, I), i);
	} else [i, l] = zo(i, e);
	if (i === s) return t;
	const { lastIndex: c, lastOffset: d, lastSize: m, offsetTree: v } = Ge(t.offsetTree, l, i, r);
	return {
		groupIndices: n,
		groupOffsetTree: n.reduce((p, I) => vt(p, I, ce(I, v, r)), Yt()),
		lastIndex: c,
		lastOffset: d,
		lastSize: m,
		offsetTree: v,
		sizeTree: i
	};
}
function Go(t) {
	return Nt(t).map(({ k: e, v: n }, o, r) => {
		const s = r[o + 1];
		return {
			endIndex: s === void 0 ? Infinity : s.k - 1,
			size: n,
			startIndex: e
		};
	});
}
function Sn(t, e) {
	let n = 0, o = 0;
	for (; n < t;) n += e[o + 1] - e[o] - 1, o++;
	return o - (n === t ? 0 : 1);
}
function Ge(t, e, n, o) {
	let r = t, s = 0, i = 0, l = 0, c = 0;
	if (e === 0) r = [];
	else {
		c = Te(r, e - 1, Ke), l = r[c].offset;
		const m = Rt(n, e - 1);
		s = m[0], i = m[1], r.length && r[c].size === Rt(n, e)[1] && (c -= 1), r = r.slice(0, c + 1);
	}
	for (const { start: d, value: m } of Zt(n, e, Infinity)) {
		const v = d - s, p = v * i + l + v * o;
		r.push({
			index: d,
			offset: p,
			size: m
		}), s = d, l = p, i = m;
	}
	return {
		lastIndex: s,
		lastOffset: l,
		lastSize: i,
		offsetTree: r
	};
}
function Ao(t) {
	return {
		index: t.index,
		value: t
	};
}
function Mo(t) {
	const { endIndex: e, size: n, startIndex: o } = t;
	return (r) => r.start === o && (r.end === e || r.end === Infinity) && r.value === n;
}
function No(t) {
	return t.reduce((e, n) => (e.groupIndices.push(e.totalCount), e.totalCount += n + 1, e), {
		groupIndices: [],
		totalCount: 0
	});
}
function Yn(t) {
	const e = typeof t == "number" ? { index: t } : { ...t };
	return e.align || (e.align = "start"), (!e.behavior || !Do) && (e.behavior = "auto"), e.offset === void 0 && (e.offset = 0), e;
}
function $o(t) {
	return (e) => {
		const n = setTimeout(() => {
			e(!1);
		}, t);
		return (o) => {
			o && (e(!0), clearTimeout(n));
		};
	};
}
function je(t, e) {
	t === 0 ? e() : requestAnimationFrame(() => {
		je(t - 1, e);
	});
}
function qe(t, e) {
	if (t === void 0) return 0;
	const n = e - 1, o = typeof t == "number" ? t : t.index === "LAST" ? n : t.index;
	return Math.max(0, Math.min(o, n));
}
function Ae(t) {
	return t === void 0 ? !0 : typeof t == "number" ? t === 0 : t.index === 0 && (t.align === void 0 || t.align === "start") && (t.offset === void 0 || t.offset === 0);
}
function Zn(t, e) {
	return Math.abs(t - e) < 1.01;
}
function vn(t, e, n) {
	return typeof t == "number" ? n === ue && e === ae || n === ne && e === de ? t : 0 : n === ue ? e === ae ? t.main : t.reverse : e === de ? t.main : t.reverse;
}
function Tn(t, e) {
	return typeof t == "number" ? t : t[e] ?? 0;
}
function qo(t, e, n) {
	if (be(e)) {
		const o = Kn(t, e);
		return [{
			index: Rt(e.groupOffsetTree, o)[0],
			offset: 0,
			size: 0
		}, {
			data: n?.[0],
			index: o,
			offset: 0,
			size: 0
		}];
	}
	return [{
		data: n?.[0],
		index: t,
		offset: 0,
		size: 0
	}];
}
function ve(t, e, n, o, r, s) {
	const { lastIndex: i, lastOffset: l, lastSize: c } = r;
	let d = 0, m = 0;
	if (t.length > 0) {
		d = t[0].offset;
		const R = t[t.length - 1];
		m = R.offset + R.size;
	}
	const v = n - i, p = l + v * c + (v - 1) * o, I = d, w = p - m;
	return {
		bottom: m,
		firstItemIndex: s,
		items: Cn(t, r, s),
		offsetBottom: w,
		offsetTop: d,
		top: I,
		topItems: Cn(e, r, s),
		topListHeight: e.reduce((R, h) => h.size + R, 0),
		totalCount: n
	};
}
function Xn(t, e, n, o, r, s) {
	let i = 0;
	if (n.groupIndices.length > 0) for (const m of n.groupIndices) {
		if (m - i >= t) break;
		i++;
	}
	const l = t + i, c = qe(e, l);
	return ve(Array.from({ length: l }).map((m, v) => ({
		data: s[v + c],
		index: v + c,
		offset: 0,
		size: 0
	})), [], l, r, n, o);
}
function Cn(t, e, n) {
	if (t.length === 0) return [];
	if (!be(e)) return t.map((d) => ({
		...d,
		index: d.index + n,
		originalIndex: d.index
	}));
	const o = t[0].index, r = t[t.length - 1].index, s = [], i = Zt(e.groupOffsetTree, o, r);
	let l, c = 0;
	for (const d of t) {
		(!l || l.end < d.index) && (l = i.shift(), c = e.groupIndices.indexOf(l.start));
		let m;
		d.index === l.start ? m = {
			index: c,
			type: "group"
		} : m = {
			groupIndex: c,
			index: d.index - (c + 1) + n
		}, s.push({
			...m,
			data: d.data,
			offset: d.offset,
			originalIndex: d.index,
			size: d.size
		});
	}
	return s;
}
function wn(t, e) {
	return t === void 0 ? 0 : typeof t == "number" ? t : t[e] ?? 0;
}
function yn(t) {
	return t === !1 ? !1 : t === "smooth" ? "smooth" : "auto";
}
function nr(t) {
	return {
		align: "start",
		index: 0,
		offset: t.scrollTop
	};
}
function no(t) {
	let e = !1, n;
	return (() => (e || (e = !0, n = t()), n));
}
function lr(t, e) {
	const n = {}, o = {};
	let r = 0;
	const s = t.length;
	for (; r < s;) o[t[r]] = 1, r += 1;
	for (const i in e) Object.hasOwn(o, i) || (n[i] = e[i]);
	return n;
}
function Xe(t, e, n) {
	const o = Object.keys(e.required || {}), r = Object.keys(e.optional || {}), s = Object.keys(e.methods || {}), i = Object.keys(e.events || {}), l = import_react$14.createContext({});
	function c(f, a) {
		f.propsReady !== void 0 && M(f.propsReady, !1);
		for (const S of o) {
			const H = f[e.required[S]];
			M(H, a[S]);
		}
		for (const S of r) if (S in a) {
			const H = f[e.optional[S]];
			M(H, a[S]);
		}
		f.propsReady !== void 0 && M(f.propsReady, !0);
	}
	function d(f) {
		return s.reduce((a, S) => (a[S] = (H) => {
			const y = f[e.methods[S]];
			M(y, H);
		}, a), {});
	}
	function m(f) {
		return i.reduce((a, S) => (a[S] = Co(f[e.events[S]]), a), {});
	}
	const v = import_react$14.forwardRef(function(a, S) {
		const { children: H, ...y } = a, [k] = import_react$14.useState(() => ye(bo(t), (C) => {
			c(C, y);
		})), [u] = import_react$14.useState(mn(m, k));
		Ie(() => {
			for (const C of i) C in y && Y(u[C], y[C]);
			return () => {
				Object.values(u).map(Ne);
			};
		}, [
			y,
			u,
			k
		]), Ie(() => {
			c(k, y);
		}), import_react$14.useImperativeHandle(S, fn(d(k)));
		const g = n;
		return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(l.Provider, {
			value: k,
			children: n === void 0 ? H : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(g, {
				...lr([
					...o,
					...r,
					...i
				], y),
				children: H
			})
		});
	}), p = (f) => {
		const a = import_react$14.useContext(l);
		return import_react$14.useCallback((S) => {
			M(a[f], S);
		}, [a, f]);
	}, I = (f) => {
		const S = import_react$14.useContext(l)[f], H = import_react$14.useCallback((y) => Y(S, y), [S]);
		return import_react$14.useSyncExternalStore(H, () => it(S), () => it(S));
	}, w = (f) => {
		const S = import_react$14.useContext(l)[f], [H, y] = import_react$14.useState(mn(it, S));
		return Ie(() => Y(S, (k) => {
			k !== H && y(fn(k));
		}), [S, H]), H;
	};
	return {
		Component: v,
		useEmitter: (f, a) => {
			const H = import_react$14.useContext(l)[f];
			Ie(() => Y(H, a), [a, H]);
		},
		useEmitterValue: parseInt("19.2.8", 10) >= 18 ? I : w,
		usePublisher: p
	};
}
function Le(t) {
	return "self" in t;
}
function cr(t) {
	return "body" in t;
}
function io(t, e, n, o = Jt, r, s) {
	const i = import_react$14.useRef(null), l = import_react$14.useRef(null), c = import_react$14.useRef(null), d = import_react$14.useCallback((p) => {
		let I, w, R;
		const h = p.target;
		if (cr(h) || Le(h)) {
			const a = Le(h) ? h : h.defaultView;
			R = s === !0 ? _t(a, a.scrollX) : a.scrollY, I = s === !0 ? a.document.documentElement.scrollWidth : a.document.documentElement.scrollHeight, w = s === !0 ? a.innerWidth : a.innerHeight;
		} else R = s === !0 ? _t(h, h.scrollLeft) : h.scrollTop, I = s === !0 ? h.scrollWidth : h.scrollHeight, w = s === !0 ? h.offsetWidth : h.offsetHeight;
		const f = () => {
			t({
				scrollHeight: I,
				scrollTop: Math.max(R, 0),
				viewportHeight: w
			});
		};
		p.suppressFlushSync === !0 ? f() : import_react_dom.flushSync(f), l.current !== null && (R === l.current || R <= 0 || R === I - w) && (l.current = null, e(!0), c.current && (clearTimeout(c.current), c.current = null));
	}, [
		t,
		e,
		s
	]);
	import_react$14.useEffect(() => {
		const p = r ?? i.current;
		return o(r ?? i.current), d({
			suppressFlushSync: !0,
			target: p
		}), p.addEventListener("scroll", d, { passive: !0 }), () => {
			o(null), p.removeEventListener("scroll", d);
		};
	}, [
		i,
		d,
		n,
		o,
		r
	]);
	function m(p) {
		const I = i.current;
		if (!I || (s === !0 ? "offsetWidth" in I && I.offsetWidth === 0 : "offsetHeight" in I && I.offsetHeight === 0)) return;
		const w = p.behavior === "smooth";
		let R, h, f;
		Le(I) ? (h = Math.max(Ht(I.document.documentElement, s === !0 ? "width" : "height"), s === !0 ? I.document.documentElement.scrollWidth : I.document.documentElement.scrollHeight), R = s === !0 ? I.innerWidth : I.innerHeight, f = s === !0 ? _t(I, I.scrollX) : I.scrollY) : (h = I[s === !0 ? "scrollWidth" : "scrollHeight"], R = Ht(I, s === !0 ? "width" : "height"), f = s === !0 ? _t(I, I.scrollLeft) : I.scrollTop);
		const a = h - R;
		if (p.top === void 0) {
			I.scrollTo(p);
			return;
		}
		const S = Math.ceil(Math.max(Math.min(a, p.top), 0));
		if (p.top = S, Zn(R, h) || S === f) {
			t({
				scrollHeight: h,
				scrollTop: f,
				viewportHeight: R
			}), w && e(!0);
			return;
		}
		w ? (l.current = S, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
			c.current = null, l.current = null, e(!0);
		}, 1e3)) : l.current = null, s === !0 && (p = {
			...p.behavior === void 0 ? {} : { behavior: p.behavior },
			left: hn(I, S)
		}), I.scrollTo(p);
	}
	function v(p) {
		s === !0 && (p = {
			...p.behavior === void 0 ? {} : { behavior: p.behavior },
			...p.top === void 0 ? {} : { left: hn(i.current, p.top) }
		}), i.current.scrollBy(p);
	}
	return {
		scrollByCallback: v,
		scrollerRef: i,
		scrollToCallback: m
	};
}
function Qe(t) {
	return t;
}
function ot(t, e) {
	if (typeof t != "string") return { context: e };
}
function co(t, e) {
	return { item: typeof t == "string" ? void 0 : e };
}
function en({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
	return import_react$14.memo(function({ children: s, style: i, context: l, ...c }) {
		const d = n("scrollContainerState"), m = e("ScrollerComponent"), v = n("smoothScrollTargetReached"), p = e("scrollerRef"), I = e("horizontalDirection") || !1, { scrollByCallback: w, scrollerRef: R, scrollToCallback: h } = io(d, v, m, p, void 0, I);
		return t("scrollTo", h), t("scrollBy", w), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(m, {
			"data-testid": "virtuoso-scroller",
			"data-virtuoso-scroller": !0,
			ref: R,
			style: {
				...I ? hr : pr,
				...i
			},
			tabIndex: 0,
			...c,
			...ot(m, l),
			children: s
		});
	});
}
function nn({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
	return import_react$14.memo(function({ children: s, style: i, context: l, ...c }) {
		const d = n("windowScrollContainerState"), m = e("ScrollerComponent"), v = n("smoothScrollTargetReached"), p = e("totalListHeight"), I = e("deviation"), w = e("customScrollParent"), R = import_react$14.useRef(null), { scrollByCallback: f, scrollerRef: a, scrollToCallback: S } = io(d, v, m, e("scrollerRef"), w);
		return so(() => (a.current = w ?? R.current?.ownerDocument.defaultView, () => {
			a.current = null;
		}), [a, w]), t("windowScrollTo", S), t("scrollBy", f), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(m, {
			ref: R,
			"data-virtuoso-scroller": !0,
			style: {
				position: "relative",
				...i,
				...p === 0 ? void 0 : { height: p + I }
			},
			...c,
			...ot(m, l),
			children: s
		});
	});
}
function Ln(t, e, n) {
	return Array.from({ length: e - t + 1 }).map((o, r) => ({
		data: n === null ? null : n[r + t],
		index: r + t
	}));
}
function Pr(t) {
	return {
		...Wr,
		items: t
	};
}
function Se(t, e) {
	return t !== void 0 && t.width === e.width && t.height === e.height;
}
function Gr(t, e) {
	return t !== void 0 && t.column === e.column && t.row === e.row;
}
function fo(t, e, n) {
	return oe(1, Ce((t + n) / (Ce(e) + n)));
}
function zn(t, e, n, o) {
	const { height: r } = n;
	if (r === void 0 || o.length === 0) return {
		bottom: 0,
		top: 0
	};
	const s = Me(t, e, n, o[0].index);
	return {
		bottom: Me(t, e, n, o[o.length - 1].index) + r,
		top: s
	};
}
function Me(t, e, n, o) {
	const r = fo(t.width, n.width, e.column), s = Ce(o / r), i = s * n.height + oe(0, s - 1) * e.row;
	return i > 0 ? i + e.row : i;
}
function Fn(t, e, n) {
	return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, ft.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
var import_jsx_runtime$11, import_react$14, import_react_dom, we, Pt, Xt, Vn, wo, yo, ft, Ro, Ho, Gt, It, se, Ue, _o, Lt, qn, At, Do, fe, me, ue, ne, Uo, Ko, jo, pe, ae, de, xn, Ye, Oe, Kt, Jn, Yo, Qn, Zo, to, Xo, Jo, Qo, tr, eo, Ze, er, or, rr, oo, Ie, Re, ro, ke, bn, Je, so, ar, dr, fr, lo, mr, Rn, pr, hr, He, tn, gr, Ir, Sr, xr, vr, Tr, uo, on, A, Ct, wr, yr, es, Rr, Hr, Er, Br, Hn, En, Or, kr, Lr, ao, rn, _, bt, Fr, Vr, Bn, Wr, On, Ce, oe, ze, kn, Ar, _r, Nr, Dr, $r, Ur, Kr, qr, mo, et, wt, Yr, Zr;
var init_dist = __esmMin((() => {
	import_jsx_runtime$11 = require_jsx_runtime();
	import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	we = 0;
	Pt = 1;
	Xt = 2;
	Vn = 4;
	wo = { singleton: !0 };
	yo = () => /* @__PURE__ */ Symbol("id");
	ft = {
		/** Detailed debugging information including item measurements */
		DEBUG: 0,
		/** General informational messages */
		INFO: 1,
		/** Warning messages for potential issues */
		WARN: 2,
		/** Error messages for failures (default level) */
		ERROR: 3
	};
	Ro = {
		[ft.DEBUG]: "debug",
		[ft.ERROR]: "error",
		[ft.INFO]: "log",
		[ft.WARN]: "warn"
	};
	Ho = () => typeof globalThis > "u" ? window : globalThis;
	Gt = j(() => {
		const t = T(ft.ERROR);
		return {
			log: T((n, o, r = ft.INFO) => {
				r >= (Ho().VIRTUOSO_LOG_LEVEL ?? it(t)) && console[Ro[r]]("%creact-virtuoso: %c%s %o", "color: #0253b3; font-weight: bold", "color: initial", n, o);
			}),
			logLevel: t
		};
	}, [], { singleton: !0 });
	It = j(() => {
		const t = U(), e = U(), n = T(0), o = U(), r = T(0), s = U(), i = U(), l = T(0), c = T(0), d = T(0), m = T(0), v = U(), p = U(), I = T(!1), w = T(!1), R = T(!1);
		return z(x(t, B(({ scrollTop: h }) => h)), e), z(x(t, B(({ scrollHeight: h }) => h)), i), z(e, r), {
			deviation: n,
			fixedFooterHeight: d,
			fixedHeaderHeight: c,
			footerHeight: m,
			headerHeight: l,
			horizontalDirection: w,
			scrollBy: p,
			scrollContainerState: t,
			scrollHeight: i,
			scrollingInProgress: I,
			scrollTo: v,
			scrollTop: e,
			skipAnimationFrameInResizeObserver: R,
			smoothScrollTargetReached: o,
			statefulScrollTop: r,
			viewportHeight: s
		};
	}, [], { singleton: !0 });
	se = { lvl: 0 };
	Ue = j(() => ({ recalcInProgress: T(!1) }), [], { singleton: !0 });
	_o = {
		offsetHeight: "height",
		offsetWidth: "width"
	};
	Lt = j(([{ log: t }, { recalcInProgress: e }]) => {
		const n = U(), o = U(), r = ht(o, 0), s = U(), i = U(), l = T(0), c = T([]), d = T(void 0), m = T(void 0), v = T(void 0), p = T(void 0), I = T((u, g) => Ht(u, _o[g])), w = T(void 0), R = T(0), h = Lo(), f = ht(x(n, $(c, t, R), Ot(Po, h), nt()), h), a = ht(x(c, nt(), Ot((u, g) => ({
			current: g,
			prev: u.current
		}), {
			current: [],
			prev: []
		}), B(({ prev: u }) => u)), []);
		z(x(c, P((u) => u.length > 0), $(f, R), B(([u, g, C]) => {
			const L = u.reduce((O, V, N) => vt(O, V, ce(V, g.offsetTree, C) || N), Yt());
			return {
				...g,
				groupIndices: u,
				groupOffsetTree: L
			};
		})), f), z(x(o, $(f), P(([u, { lastIndex: g }]) => u < g), B(([u, { lastIndex: g, lastSize: C }]) => [{
			endIndex: g,
			size: C,
			startIndex: u
		}])), n), z(d, m);
		const S = ht(x(d, B((u) => u === void 0)), !0);
		z(x(m, P((u) => u !== void 0 && J(it(f).sizeTree)), B((u) => {
			const g = it(v), C = it(c).length > 0;
			return g !== void 0 && g !== 0 ? C ? [{
				endIndex: 0,
				size: g,
				startIndex: 0
			}, {
				endIndex: 1,
				size: u,
				startIndex: 1
			}] : [] : [{
				endIndex: 0,
				size: u,
				startIndex: 0
			}];
		})), n), z(x(p, P((u) => u !== void 0 && u.length > 0 && J(it(f).sizeTree)), B((u) => {
			const g = [];
			let C = u[0], L = 0;
			for (let O = 1; O < u.length; O++) {
				const V = u[O];
				V !== C && (g.push({
					endIndex: O - 1,
					size: C,
					startIndex: L
				}), C = V, L = O);
			}
			return g.push({
				endIndex: u.length - 1,
				size: C,
				startIndex: L
			}), g;
		})), n), z(x(c, $(v, m), P(([, u, g]) => u !== void 0 && g !== void 0), B(([u, g, C]) => {
			const L = [];
			for (let O = 0; O < u.length; O++) {
				const V = u[O], N = u[O + 1];
				L.push({
					startIndex: V,
					endIndex: V,
					size: g
				}), N !== void 0 && L.push({
					startIndex: V + 1,
					endIndex: N - 1,
					size: C
				});
			}
			return L;
		})), n);
		const H = Tt(x(n, $(f), Ot(({ sizes: u }, [g, C]) => ({
			changed: C !== u,
			sizes: C
		}), {
			changed: !1,
			sizes: h
		}), B((u) => u.changed)));
		Y(x(l, Ot((u, g) => ({
			diff: u.prev - g,
			prev: g
		}), {
			diff: 0,
			prev: 0
		}), B((u) => u.diff)), (u) => {
			const { groupIndices: g } = it(f);
			if (u > 0) M(e, !0), M(s, u + Sn(u, g));
			else if (u < 0) {
				const C = it(a);
				C.length > 0 && (u -= Sn(-u, C)), M(i, u);
			}
		}), Y(x(l, $(t)), ([u, g]) => {
			u < 0 && g("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value", { firstItemIndex: l }, ft.ERROR);
		});
		const y = Tt(s);
		z(x(s, $(f), B(([u, g]) => {
			const C = g.groupIndices.length > 0, L = [], O = g.lastSize;
			if (C) {
				const V = ie(g.sizeTree, 0);
				let N = 0, Z = 0;
				for (; N < u;) {
					const q = g.groupIndices[Z], Q = g.groupIndices.length === Z + 1 ? Infinity : g.groupIndices[Z + 1] - q - 1;
					L.push({
						endIndex: q,
						size: V,
						startIndex: q
					}), L.push({
						endIndex: q + 1 + Q - 1,
						size: O,
						startIndex: q + 1
					}), Z++, N += Q + 1;
				}
				const F = Nt(g.sizeTree);
				return N !== u && F.shift(), F.reduce((q, { k: Q, v: gt }) => {
					let lt = q.ranges;
					return q.prevSize !== 0 && (lt = [...q.ranges, {
						endIndex: Q + u - 1,
						size: q.prevSize,
						startIndex: q.prevIndex
					}]), {
						prevIndex: Q + u,
						prevSize: gt,
						ranges: lt
					};
				}, {
					prevIndex: u,
					prevSize: 0,
					ranges: L
				}).ranges;
			}
			return Nt(g.sizeTree).reduce((V, { k: N, v: Z }) => ({
				prevIndex: N + u,
				prevSize: Z,
				ranges: [...V.ranges, {
					endIndex: N + u - 1,
					size: V.prevSize,
					startIndex: V.prevIndex
				}]
			}), {
				prevIndex: 0,
				prevSize: O,
				ranges: []
			}).ranges;
		})), n);
		const k = Tt(x(i, $(f, R), B(([u, { offsetTree: g }, C]) => {
			return ce(-u, g, C);
		})));
		return z(x(i, $(f, R), B(([u, g, C]) => {
			if (g.groupIndices.length > 0) {
				if (J(g.sizeTree)) return g;
				let V = Yt();
				const N = it(a);
				let Z = 0, F = 0, mt = 0;
				for (; Z < -u;) {
					mt = N[F];
					const Q = N[F + 1] - mt - 1;
					F++, Z += Q + 1;
				}
				if (V = Nt(g.sizeTree).reduce((Q, { k: gt, v: lt }) => vt(Q, Math.max(0, gt + u), lt), V), Z !== -u) {
					const Q = ie(g.sizeTree, mt);
					V = vt(V, 0, Q);
					const gt = Rt(g.sizeTree, -u + 1)[1];
					V = vt(V, 1, gt);
				}
				return {
					...g,
					sizeTree: V,
					...Ge(g.offsetTree, 0, V, C)
				};
			}
			const O = Nt(g.sizeTree).reduce((V, { k: N, v: Z }) => vt(V, Math.max(0, N + u), Z), Yt());
			return {
				...g,
				sizeTree: O,
				...Ge(g.offsetTree, 0, O, C)
			};
		})), f), {
			beforeUnshiftWith: y,
			data: w,
			defaultItemSize: m,
			firstItemIndex: l,
			fixedItemSize: d,
			fixedGroupSize: v,
			gap: R,
			groupIndices: c,
			heightEstimates: p,
			itemSize: I,
			listRefresh: H,
			shiftWith: i,
			shiftWithOffset: k,
			sizeRanges: n,
			sizes: f,
			statefulTotalCount: r,
			totalCount: o,
			trackItemSizes: S,
			unshiftWith: s
		};
	}, rt(Gt, Ue), { singleton: !0 });
	qn = j(([{ groupIndices: t, sizes: e, totalCount: n }, { headerHeight: o, scrollTop: r }]) => {
		const s = U(), i = U(), l = Tt(x(s, B(No)));
		return z(x(l, B((c) => c.totalCount)), n), z(x(l, B((c) => c.groupIndices)), t), z(x(at(r, e, o), P(([c, d]) => be(d)), B(([c, d, m]) => Rt(d.groupOffsetTree, Math.max(c - m, 0), "v")[0]), nt(), B((c) => [c])), i), {
			groupCounts: s,
			topItemsIndexes: i
		};
	}, rt(Lt, It));
	At = j(([{ log: t }]) => {
		const e = T(!1), n = Tt(x(e, P((o) => o), nt()));
		return Y(e, (o) => {
			o && it(t)("props updated", {}, ft.DEBUG);
		}), {
			didMount: n,
			propsReady: e
		};
	}, rt(Gt), { singleton: !0 });
	Do = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
	fe = j(([{ gap: t, listRefresh: e, sizes: n, totalCount: o }, { fixedFooterHeight: r, fixedHeaderHeight: s, footerHeight: i, headerHeight: l, scrollingInProgress: c, scrollTo: d, smoothScrollTargetReached: m, viewportHeight: v }, { log: p }]) => {
		const I = U(), w = U(), R = T(0);
		let h = null, f = null, a = null;
		function S() {
			h !== null && (h(), h = null), a !== null && (a(), a = null), f && (clearTimeout(f), f = null), M(c, !1);
		}
		return z(x(I, $(n, v, o, R, l, i, p), $(t, s, r), B(([[H, y, k, u, g, C, L, O], V, N, Z]) => {
			const F = Yn(H), { align: mt, behavior: q, offset: Q } = F, gt = u - 1, lt = jn(F, y, gt);
			let St = ce(lt, y.offsetTree, V) + C;
			mt === "end" ? (St += N + Rt(y.sizeTree, lt)[1] - k + Z, lt === gt && (St += L)) : mt === "center" ? St += (N + Rt(y.sizeTree, lt)[1] - k + Z) / 2 : St -= g, Q !== void 0 && Q !== 0 && (St += Q);
			const Ft = (pt) => {
				S(), pt ? (O("retrying to scroll to", { location: H }, ft.DEBUG), M(I, H)) : (M(w, !0), O("list did not change, scroll successful", {}, ft.DEBUG));
			};
			if (S(), q === "smooth") {
				let pt = !1;
				a = Y(e, (jt) => {
					pt = pt || jt;
				}), h = yt(m, () => {
					Ft(pt);
				});
			} else h = yt(x(e, $o(150)), Ft);
			return f = setTimeout(() => {
				S();
			}, 1200), M(c, !0), O("scrolling from index to", {
				behavior: q,
				index: lt,
				top: St
			}, ft.DEBUG), {
				behavior: q,
				top: St
			};
		})), d), {
			scrollTargetReached: w,
			scrollToIndex: I,
			topListHeight: R
		};
	}, rt(Lt, It, Gt), { singleton: !0 });
	me = j(([{ defaultItemSize: t, listRefresh: e, sizes: n }, { scrollTop: o }, { scrollTargetReached: r, scrollToIndex: s }, { didMount: i }]) => {
		const l = T(!0), c = T(0), d = T(!0);
		return z(x(i, $(c), P(([m, v]) => !Ae(v)), Bt(!1)), l), z(x(i, $(c), P(([m, v]) => !Ae(v)), Bt(!1)), d), Y(x(at(e, i), $(l, n, t, d), P(([[, m], v, { sizeTree: p }, I, w]) => m && (!J(p) || _e(I)) && !v && !w), $(c)), ([, m]) => {
			if (m === void 0) {
				M(l, !0), M(d, !0);
				return;
			}
			yt(r, () => {
				M(d, !0);
			}), je(4, () => {
				yt(o, () => {
					M(l, !0);
				}), M(s, m);
			});
		}), {
			initialItemFinalLocationReached: d,
			initialTopMostItemIndex: c,
			scrolledToInitialItem: l
		};
	}, rt(Lt, It, fe, At), { singleton: !0 });
	ue = "up";
	ne = "down";
	Uo = "none";
	Ko = {
		atBottom: !1,
		notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
		state: {
			offsetBottom: 0,
			scrollHeight: 0,
			scrollTop: 0,
			viewportHeight: 0
		}
	};
	jo = 0;
	pe = j(([{ footerHeight: t, headerHeight: e, scrollBy: n, scrollContainerState: o, scrollTop: r, viewportHeight: s }]) => {
		const i = T(!1), l = T(!0), c = U(), d = U(), m = T(4), v = T(jo), p = ht(x(Fe(x(W(r), Ut(1), Bt(!0)), x(W(r), Ut(1), Bt(!1), pn(100))), nt()), !1), I = ht(x(Fe(x(n, Bt(!0)), x(n, Bt(!1), pn(200))), nt()), !1);
		z(x(at(W(r), W(v)), B(([a, S]) => a <= S), nt()), l), z(x(l, zt(50)), d);
		const w = Tt(x(at(o, W(s), W(e), W(t), W(m)), Ot((a, [{ scrollHeight: S, scrollTop: H }, y, k, u, g]) => {
			const C = H + y - S > -g, L = {
				scrollHeight: S,
				scrollTop: H,
				viewportHeight: y
			};
			if (C) {
				let V, N;
				return H > a.state.scrollTop ? (V = "SCROLLED_DOWN", N = a.state.scrollTop - H) : (V = "SIZE_DECREASED", N = a.state.scrollTop - H || a.scrollTopDelta), {
					atBottom: !0,
					atBottomBecause: V,
					scrollTopDelta: N,
					state: L
				};
			}
			let O;
			return L.scrollHeight > a.state.scrollHeight ? O = "SIZE_INCREASED" : y < a.state.viewportHeight ? O = "VIEWPORT_HEIGHT_DECREASING" : H < a.state.scrollTop ? O = "SCROLLING_UPWARDS" : O = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
				atBottom: !1,
				notAtBottomBecause: O,
				state: L
			};
		}, Ko), nt((a, S) => a !== void 0 && a.atBottom === S.atBottom))), R = ht(x(o, Ot((a, { scrollHeight: S, scrollTop: H, viewportHeight: y }) => {
			if (!Zn(a.scrollHeight, S)) {
				const k = S - (H + y) < 1;
				return a.scrollTop !== H && k ? {
					changed: !0,
					jump: a.scrollTop - H,
					scrollHeight: S,
					scrollTop: H
				} : {
					changed: !0,
					jump: 0,
					scrollHeight: S,
					scrollTop: H
				};
			}
			return {
				changed: !1,
				jump: 0,
				scrollHeight: S,
				scrollTop: H
			};
		}, {
			changed: !1,
			jump: 0,
			scrollHeight: 0,
			scrollTop: 0
		}), P((a) => a.changed), B((a) => a.jump)), 0);
		z(x(w, B((a) => a.atBottom)), i), z(x(i, zt(50)), c);
		const h = T(ne);
		z(x(o, B(({ scrollTop: a }) => a), nt(), Ot((a, S) => it(I) ? {
			direction: a.direction,
			prevScrollTop: S
		} : {
			direction: S < a.prevScrollTop ? ue : ne,
			prevScrollTop: S
		}, {
			direction: ne,
			prevScrollTop: 0
		}), B((a) => a.direction)), h), z(x(o, zt(50), Bt(Uo)), h);
		const f = T(0);
		return z(x(p, P((a) => !a), Bt(0)), f), z(x(r, zt(100), $(p), P(([a, S]) => S), Ot(([a, S], [H]) => [S, H], [0, 0]), B(([a, S]) => S - a)), f), {
			atBottomState: w,
			atBottomStateChange: c,
			atBottomThreshold: m,
			atTopStateChange: d,
			atTopThreshold: v,
			isAtBottom: i,
			isAtTop: l,
			isScrolling: p,
			lastJumpDueToItemResize: R,
			scrollDirection: h,
			scrollVelocity: f
		};
	}, rt(It));
	ae = "top";
	de = "bottom";
	xn = "none";
	Ye = j(([{ deviation: t, fixedHeaderHeight: e, headerHeight: n, scrollTop: o, viewportHeight: r }]) => {
		const s = U(), i = T(0), l = T(0), c = T(0);
		return {
			increaseViewportBy: l,
			listBoundary: s,
			overscan: c,
			topListHeight: i,
			visibleRange: ht(x(at(W(o), W(r), W(n), W(s, le), W(c), W(i), W(e), W(t), W(l)), B(([m, v, p, [I, w], R, h, f, a, S]) => {
				const H = m - a, y = h + f, k = Math.max(p - H, 0);
				let u = xn;
				const g = Tn(S, ae), C = Tn(S, de);
				return I -= a, I += p + f, w += p + f, w -= a, I > m + y - g && (u = ue), w < m - k + v + C && (u = ne), u !== xn ? [Math.max(H - p - vn(R, ae, u) - g, 0), H - k - f + v + vn(R, de, u) + C] : null;
			}), P((m) => m !== null), nt(le)), [0, 0])
		};
	}, rt(It), { singleton: !0 });
	Oe = {
		bottom: 0,
		firstItemIndex: 0,
		items: [],
		offsetBottom: 0,
		offsetTop: 0,
		top: 0,
		topItems: [],
		topListHeight: 0,
		totalCount: 0
	};
	Kt = j(([{ data: t, firstItemIndex: e, gap: n, sizes: o, totalCount: r }, s, { listBoundary: i, topListHeight: l, visibleRange: c }, { initialTopMostItemIndex: d, scrolledToInitialItem: m }, { topListHeight: v }, p, { didMount: I }, { recalcInProgress: w }]) => {
		const R = T([]), h = T(0), f = U(), a = T(0);
		z(s.topItemsIndexes, R);
		const S = ht(x(at(I, w, W(c, le), W(r), W(o), W(d), m, W(R), W(e), W(n), W(a), t), P(([u, g, , C, , , , , , , , L]) => {
			const O = L !== void 0 && L.length !== C;
			return u && !g && !O;
		}), B(([, , [u, g], C, L, O, V, N, Z, F, mt, q]) => {
			const Q = L, { offsetTree: gt, sizeTree: lt } = Q, St = it(h);
			if (C === 0) return {
				...Oe,
				totalCount: C
			};
			if (u === 0 && g === 0) return St === 0 ? {
				...Oe,
				totalCount: C
			} : Xn(St, O, L, Z, F, q || []);
			if (J(lt)) return St > 0 ? null : ve(qo(qe(O, C), Q, q), [], C, F, Q, Z);
			const Ft = [];
			if (N.length > 0) {
				const D = N[0], K = N[N.length - 1];
				let st = 0;
				for (const tt of Zt(lt, D, K)) {
					const X = tt.value, ct = Math.max(tt.start, D), xt = Math.min(tt.end, K);
					for (let ut = ct; ut <= xt; ut++) Ft.push({
						data: q?.[ut],
						index: ut,
						offset: st,
						size: X
					}), st += X;
				}
			}
			if (!V) return ve([], Ft, C, F, Q, Z);
			const pt = N.length > 0 ? N[N.length - 1] + 1 : 0, jt = Wo(gt, u, g, pt);
			if (jt.length === 0) return null;
			const Qt = C - 1, Et = ye([], (D) => {
				for (const K of jt) {
					const st = K.value;
					let tt = st.offset, X = K.start;
					const ct = st.size;
					if (st.offset < u) {
						X += Math.floor((u - st.offset + F) / (ct + F));
						const ut = X - K.start;
						tt += ut * ct + ut * F;
					}
					X < pt && (tt += (pt - X) * ct, X = pt);
					const xt = Math.min(K.end, Qt);
					for (let ut = X; ut <= xt && !(tt >= g); ut++) D.push({
						data: q?.[ut],
						index: ut,
						offset: tt,
						size: ct
					}), tt += ct + F;
				}
			}), te = wn(mt, ae), b = wn(mt, de);
			if (Et.length > 0 && (te > 0 || b > 0)) {
				const D = Et[0], K = Et[Et.length - 1];
				if (te > 0 && D.index > pt) {
					const st = Math.min(te, D.index - pt), tt = [];
					let X = D.offset;
					for (let ct = D.index - 1; ct >= D.index - st; ct--) {
						const ut = Zt(lt, ct, ct)[0]?.value ?? D.size;
						X -= ut + F, tt.unshift({
							data: q?.[ct],
							index: ct,
							offset: X,
							size: ut
						});
					}
					Et.unshift(...tt);
				}
				if (b > 0 && K.index < Qt) {
					const st = Math.min(b, Qt - K.index);
					let tt = K.offset + K.size + F;
					for (let X = K.index + 1; X <= K.index + st; X++) {
						const xt = Zt(lt, X, X)[0]?.value ?? K.size;
						Et.push({
							data: q?.[X],
							index: X,
							offset: tt,
							size: xt
						}), tt += xt + F;
					}
				}
			}
			return ve(Et, Ft, C, F, Q, Z);
		}), P((u) => u !== null), nt()), Oe);
		z(x(t, P(_e), B((u) => u?.length)), r), z(x(S, B((u) => u.topListHeight)), v), z(v, l), z(x(S, B((u) => [u.top, u.bottom])), i), z(x(S, B((u) => u.items)), f);
		const H = Tt(x(S, P(({ items: u }) => u.length > 0), $(r, t), P(([{ items: u }, g]) => u[u.length - 1].originalIndex === g - 1), B(([, u, g]) => [u - 1, g]), nt(le), B(([u]) => u))), y = Tt(x(S, zt(200), P(({ items: u, topItems: g }) => u.length > 0 && u[0].originalIndex === g.length), B(({ items: u }) => u[0].index), nt()));
		return {
			endReached: H,
			initialItemCount: h,
			itemsRendered: f,
			listState: S,
			minOverscanItemCount: a,
			rangeChanged: Tt(x(S, P(({ items: u }) => u.length > 0), B(({ items: u }) => {
				let g = 0, C = u.length - 1;
				for (; u[g].type === "group" && g < C;) g++;
				for (; u[C].type === "group" && C > g;) C--;
				return {
					endIndex: u[C].index,
					startIndex: u[g].index
				};
			}), nt($n))),
			startReached: y,
			topItemsIndexes: R,
			...p
		};
	}, rt(Lt, qn, Ye, me, fe, pe, At, Ue), { singleton: !0 });
	Jn = j(([{ fixedFooterHeight: t, fixedHeaderHeight: e, footerHeight: n, headerHeight: o }, { listState: r }]) => {
		const s = U(), i = ht(x(at(n, t, o, e, r), B(([l, c, d, m, v]) => l + c + d + m + v.offsetBottom + v.bottom)), 0);
		return z(W(i), s), {
			totalListHeight: i,
			totalListHeightChanged: s
		};
	}, rt(It, Kt), { singleton: !0 });
	Yo = j(([{ viewportHeight: t }, { totalListHeight: e }]) => {
		const n = T(!1);
		return {
			alignToBottom: n,
			paddingTopAddition: ht(x(at(n, t, e), P(([r]) => r), B(([, r, s]) => Math.max(0, r - s)), zt(0), nt()), 0)
		};
	}, rt(It, Jn), { singleton: !0 });
	Qn = j(() => ({ context: T(null) }));
	Zo = ({ itemBottom: t, itemTop: e, locationParams: { align: n, behavior: o, ...r }, viewportBottom: s, viewportTop: i }) => e < i ? {
		...r,
		align: n ?? "start",
		...o === void 0 ? {} : { behavior: o }
	} : t > s ? {
		...r,
		align: n ?? "end",
		...o === void 0 ? {} : { behavior: o }
	} : null;
	to = j(([{ gap: t, sizes: e, totalCount: n }, { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: c }, { scrollToIndex: d }]) => {
		const m = U();
		return z(x(m, $(e, c, n, s, r, o, l), $(t), B(([[v, p, I, w, R, h, f, a], S]) => {
			const { calculateViewLocation: H = Zo, done: y, ...k } = v, u = jn(v, p, w - 1), g = ce(u, p.offsetTree, S) + R + h, C = g + Rt(p.sizeTree, u)[1], L = a + h, V = H({
				itemBottom: C,
				itemTop: g,
				locationParams: k,
				viewportBottom: a + I - f,
				viewportTop: L
			});
			return V === null ? y?.() : y && yt(x(i, P((N) => !N), Ut(it(i) ? 1 : 2)), y), V;
		}), P((v) => v !== null)), d), { scrollIntoView: m };
	}, rt(Lt, It, fe, Kt, Gt), { singleton: !0 });
	Xo = (t, e) => typeof t == "function" ? yn(t(e)) : e && yn(t);
	Jo = j(([{ listRefresh: t, totalCount: e, fixedItemSize: n, data: o }, { atBottomState: r, isAtBottom: s }, { scrollToIndex: i }, { scrolledToInitialItem: l }, { didMount: c, propsReady: d }, { log: m }, { scrollingInProgress: v }, { context: p }, { scrollIntoView: I }]) => {
		const w = T(!1), R = U();
		let h = null;
		function f(y) {
			M(i, {
				align: "end",
				behavior: y,
				index: "LAST"
			});
		}
		Y(x(at(x(W(e), Ut(1)), c), $(W(w), s, l, v), B(([[y, k], u, g, C, L]) => {
			let O = k && C, V = "auto";
			return O && (V = Xo(u, g || L), O = O && V !== !1), {
				followOutputBehavior: V,
				shouldFollow: O,
				totalCount: y
			};
		}), P(({ shouldFollow: y }) => y)), ({ followOutputBehavior: y, totalCount: k }) => {
			h !== null && (h(), h = null), it(n) === void 0 ? h = yt(t, () => {
				it(m)("following output to ", { totalCount: k }, ft.DEBUG), f(y), h = null;
			}) : requestAnimationFrame(() => {
				it(m)("following output to ", { totalCount: k }, ft.DEBUG), f(y);
			});
		});
		function a(y) {
			const k = yt(r, (u) => {
				y && !u.atBottom && u.notAtBottomBecause === "SIZE_INCREASED" && h === null && (it(m)("scrolling to bottom due to increased size", {}, ft.DEBUG), f("auto"));
			});
			setTimeout(k, 100);
		}
		Y(x(at(W(w), e, d), P(([y, , k]) => y !== !1 && k), Ot(({ value: y }, [, k]) => ({
			refreshed: y === k,
			value: k
		}), {
			refreshed: !1,
			value: 0
		}), P(({ refreshed: y }) => y), $(w, e)), ([, y]) => {
			it(l) && a(y !== !1);
		}), Y(R, () => {
			a(it(w) !== !1);
		}), Y(at(W(w), r), ([y, k]) => {
			y !== !1 && !k.atBottom && k.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && f("auto");
		});
		const S = T(null), H = U();
		return z(Fe(x(W(o), B((y) => y?.length ?? 0)), x(W(e))), H), Y(x(at(x(H, Ut(1)), c), $(W(S), l, v, p), B(([[y, k], u, g, C, L]) => k && g && u?.({
			context: L,
			totalCount: y,
			scrollingInProgress: C
		})), P((y) => !!y), zt(0)), (y) => {
			h !== null && (h(), h = null), it(n) === void 0 ? h = yt(t, () => {
				it(m)("scrolling into view", {}), M(I, y), h = null;
			}) : requestAnimationFrame(() => {
				it(m)("scrolling into view", {}), M(I, y);
			});
		}), {
			autoscrollToBottom: R,
			followOutput: w,
			scrollIntoViewOnChange: S
		};
	}, rt(Lt, pe, fe, me, At, Gt, It, Qn, to));
	Qo = j(([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (z(x(l, $(s), P(([, c]) => c !== 0), $(r, o, e, n, t), B(([[, c], d, m, v, p, I = []]) => Xn(c, d, m, v, p, I))), i), {}), rt(Lt, me, Kt, At), { singleton: !0 });
	tr = j(([{ didMount: t }, { scrollTo: e }, { listState: n }]) => {
		const o = T(0);
		return Y(x(t, $(o), P(([, r]) => r !== 0), B(([, r]) => ({ top: r }))), (r) => {
			yt(x(n, Ut(1), P((s) => s.items.length > 1)), () => {
				requestAnimationFrame(() => {
					M(e, r);
				});
			});
		}), { initialScrollTop: o };
	}, rt(At, It, Kt), { singleton: !0 });
	eo = j(([{ scrollVelocity: t }]) => {
		const e = T(!1), n = U(), o = T(!1);
		return z(x(t, $(o, e, n), P(([r, s]) => s !== !1 && s !== void 0), B(([r, s, i, l]) => {
			const { enter: c, exit: d } = s;
			if (i) {
				if (d(r, l)) return !1;
			} else if (c(r, l)) return !0;
			return i;
		}), nt()), e), Y(x(at(e, t, n), $(o)), ([[r, s, i], l]) => {
			r && l !== !1 && l !== void 0 && l.change && l.change(s, i);
		}), {
			isSeeking: e,
			scrollSeekConfiguration: o,
			scrollSeekRangeChanged: n,
			scrollVelocity: t
		};
	}, rt(pe), { singleton: !0 });
	Ze = j(([{ scrollContainerState: t, scrollTo: e }]) => {
		const n = U(), o = U(), r = U(), s = T(!1), i = T(void 0);
		return z(x(at(n, o), B(([{ scrollTop: l, viewportHeight: c }, { offsetTop: d, listHeight: m }]) => ({
			scrollHeight: m,
			scrollTop: Math.max(0, l - d),
			viewportHeight: c
		}))), t), z(x(e, $(o), B(([l, { offsetTop: c }]) => ({
			...l,
			top: l.top + c
		}))), r), {
			customScrollParent: i,
			useWindowScroll: s,
			windowScrollContainerState: n,
			windowScrollTo: r,
			windowViewportRect: o
		};
	}, rt(It));
	er = j(([{ sizeRanges: t, sizes: e }, { headerHeight: n, scrollTop: o }, { initialTopMostItemIndex: r }, { didMount: s }, { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: c }]) => {
		const d = U(), m = T(void 0), v = T(null), p = T(null);
		return z(l, v), z(c, p), Y(x(d, $(e, o, i, v, p, n)), ([I, w, R, h, f, a, S]) => {
			const H = Go(w.sizeTree);
			h && f !== null && a !== null && (R = f.scrollTop - a.offsetTop), R -= S, I({
				ranges: H,
				scrollTop: R
			});
		}), z(x(m, P(_e), B(nr)), r), z(x(s, $(m), P(([, I]) => I !== void 0), nt(), B(([, I]) => I.ranges)), t), {
			getState: d,
			restoreStateFrom: m
		};
	}, rt(Lt, It, me, At, Ze));
	or = j(([{ topItemsIndexes: t }]) => {
		const e = T(0);
		return z(x(e, P((n) => n >= 0), B((n) => Array.from({ length: n }).map((o, r) => r))), t), { topItemCount: e };
	}, rt(Kt));
	rr = no(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent));
	oo = j(([{ data: t, defaultItemSize: e, firstItemIndex: n, fixedItemSize: o, fixedGroupSize: r, gap: s, groupIndices: i, heightEstimates: l, itemSize: c, sizeRanges: d, sizes: m, statefulTotalCount: v, totalCount: p, trackItemSizes: I }, { initialItemFinalLocationReached: w, initialTopMostItemIndex: R, scrolledToInitialItem: h }, f, a, S, H, { scrollToIndex: y }, k, { topItemCount: u }, { groupCounts: g }, C]) => {
		const { listState: L, minOverscanItemCount: O, topItemsIndexes: V, rangeChanged: N, ...Z } = H;
		return z(N, C.scrollSeekRangeChanged), z(x(C.windowViewportRect, B((F) => F.visibleHeight)), f.viewportHeight), {
			data: t,
			defaultItemHeight: e,
			firstItemIndex: n,
			fixedItemHeight: o,
			fixedGroupHeight: r,
			gap: s,
			groupCounts: g,
			heightEstimates: l,
			initialItemFinalLocationReached: w,
			initialTopMostItemIndex: R,
			scrolledToInitialItem: h,
			sizeRanges: d,
			topItemCount: u,
			topItemsIndexes: V,
			totalCount: p,
			...S,
			groupIndices: i,
			itemSize: c,
			listState: L,
			minOverscanItemCount: O,
			scrollToIndex: y,
			statefulTotalCount: v,
			trackItemSizes: I,
			rangeChanged: N,
			...Z,
			...C,
			...f,
			sizes: m,
			...a
		};
	}, rt(Lt, me, It, er, Jo, Kt, fe, j(([{ deviation: t, scrollBy: e, scrollingInProgress: n, scrollTop: o }, { isAtBottom: r, isScrolling: s, lastJumpDueToItemResize: i, scrollDirection: l }, { listState: c }, { beforeUnshiftWith: d, gap: m, shiftWithOffset: v, sizes: p }, { log: I }, { recalcInProgress: w }]) => {
		const R = Tt(x(c, $(i), Ot(([, f, a, S], [{ bottom: H, items: y, offsetBottom: k, totalCount: u }, g]) => {
			const C = H + k;
			let L = 0;
			return a === u && f.length > 0 && y.length > 0 && (y[0].originalIndex === 0 && f[0].originalIndex === 0 || (L = C - S, L !== 0 && (L += g))), [
				L,
				y,
				u,
				C
			];
		}, [
			0,
			[],
			0,
			0
		]), P(([f]) => f !== 0), $(o, l, n, r, I, w), P(([, f, a, S, , , H]) => !H && !S && f !== 0 && a === ue), B(([[f], , , , , a]) => (a("Upward scrolling compensation", { amount: f }, ft.DEBUG), f))));
		function h(f) {
			f > 0 ? (M(e, {
				behavior: "auto",
				top: -f
			}), M(t, 0)) : (M(t, 0), M(e, {
				behavior: "auto",
				top: -f
			}));
		}
		return Y(x(R, $(t, s)), ([f, a, S]) => {
			S && rr() ? M(t, a - f) : h(-f);
		}), Y(x(at(ht(s, !1), t, w), P(([f, a, S]) => !f && !S && a !== 0), B(([f, a]) => a), zt(1)), h), z(x(v, B((f) => ({ top: -f }))), e), Y(x(d, $(p, m), B(([f, { groupIndices: a, lastSize: S, sizeTree: H }, y]) => {
			function k(O) {
				return O * (S + y);
			}
			if (a.length === 0) return k(f);
			let u = 0;
			const g = ie(H, 0);
			let C = 0, L = 0;
			for (; C < f;) {
				C++, u += g;
				let O = a.length === L + 1 ? Infinity : a[L + 1] - a[L] - 1;
				C + O > f && (u -= g, O = f - C + 1), C += O, u += k(O), L++;
			}
			return u;
		})), (f) => {
			M(t, f), requestAnimationFrame(() => {
				M(e, { top: f }), requestAnimationFrame(() => {
					M(t, 0), M(w, !1);
				});
			});
		}), { deviation: t };
	}, rt(It, pe, Kt, Lt, Gt, Ue)), or, qn, j(([t, e, n, o, r, s, i, l, c, d, m]) => ({
		...t,
		...e,
		...n,
		...o,
		...r,
		...s,
		...i,
		...l,
		...c,
		...d,
		...m
	}), rt(Ye, Qo, At, eo, Jn, tr, Yo, Ze, to, Gt, Qn))));
	Ie = typeof document > "u" ? import_react$14.useEffect : import_react$14.useLayoutEffect;
	Re = import_react$14.createContext(void 0);
	ro = import_react$14.createContext(void 0);
	ke = "-webkit-sticky";
	bn = "sticky";
	Je = no(() => {
		if (typeof document > "u") return bn;
		const t = document.createElement("div");
		return t.style.position = ke, t.style.position === ke ? ke : bn;
	});
	so = typeof document > "u" ? import_react$14.useEffect : import_react$14.useLayoutEffect;
	ar = /* @__PURE__ */ j(([t, e]) => ({
		...t,
		...e
	}), rt(oo, /* @__PURE__ */ j(() => {
		const t = T((l) => `Item ${l}`), e = T((l) => `Group ${l}`), n = T({}), o = T(Qe), r = T("div"), s = T(Jt), i = (l, c = null) => ht(x(n, B((d) => d[l]), nt()), c);
		return {
			components: n,
			computeItemKey: o,
			EmptyPlaceholder: i("EmptyPlaceholder"),
			FooterComponent: i("Footer"),
			GroupComponent: i("Group", "div"),
			groupContent: e,
			HeaderComponent: i("Header"),
			HeaderFooterTag: r,
			ItemComponent: i("Item", "div"),
			itemContent: t,
			ListComponent: i("List", "div"),
			ScrollerComponent: i("Scroller", "div"),
			scrollerRef: s,
			ScrollSeekPlaceholder: i("ScrollSeekPlaceholder"),
			TopItemListComponent: i("TopItemList")
		};
	})));
	dr = ({ height: t }) => /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", { style: { height: t } });
	fr = {
		overflowAnchor: "none",
		position: Je(),
		zIndex: 1
	};
	lo = { overflowAnchor: "none" };
	mr = {
		...lo,
		display: "inline-block",
		height: "100%"
	};
	Rn = /* @__PURE__ */ import_react$14.memo(function({ showTopList: e = !1 }) {
		const n = A("listState"), o = Ct("sizeRanges"), r = A("useWindowScroll"), s = A("customScrollParent"), i = Ct("windowScrollContainerState"), l = Ct("scrollContainerState"), c = s || r ? i : l, d = A("itemContent"), m = A("context"), v = A("groupContent"), p = A("trackItemSizes"), I = A("itemSize"), w = A("log"), R = Ct("gap"), h = A("horizontalDirection"), { callbackRef: f } = Gn(o, I, p, e ? Jt : c, w, R, s, h, A("skipAnimationFrameInResizeObserver")), [a, S] = import_react$14.useState(0);
		on("deviation", (F) => {
			a !== F && S(F);
		});
		const H = A("EmptyPlaceholder"), y = A("ScrollSeekPlaceholder") ?? dr, k = A("ListComponent"), u = A("ItemComponent"), g = A("GroupComponent"), C = A("computeItemKey"), L = A("isSeeking"), O = A("groupIndices").length > 0, V = A("alignToBottom"), N = A("initialItemFinalLocationReached"), Z = e ? {} : {
			boxSizing: "border-box",
			...h ? {
				display: "inline-block",
				height: "100%",
				marginInlineStart: a === 0 ? V ? "auto" : 0 : a,
				paddingInlineEnd: n.offsetBottom,
				paddingInlineStart: n.offsetTop,
				whiteSpace: "nowrap"
			} : {
				marginTop: a === 0 ? V ? "auto" : 0 : a,
				paddingBottom: n.offsetBottom,
				paddingTop: n.offsetTop
			},
			...N ? {} : { visibility: "hidden" }
		};
		return !e && n.totalCount === 0 && H !== null && H !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(H, { ...ot(H, m) }) : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(k, {
			...ot(k, m),
			"data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
			ref: f,
			style: Z,
			children: (e ? n.topItems : n.items).map((F) => {
				const mt = F.originalIndex, q = C(mt + n.firstItemIndex, F.data, m);
				return L ? /* @__PURE__ */ (0, import_react$14.createElement)(y, {
					...ot(y, m),
					height: F.size,
					index: F.index,
					key: q,
					type: F.type || "item",
					...F.type === "group" ? {} : { groupIndex: F.groupIndex }
				}) : F.type === "group" ? /* @__PURE__ */ (0, import_react$14.createElement)(g, {
					...ot(g, m),
					"data-index": mt,
					"data-item-index": F.index,
					"data-known-size": F.size,
					key: q,
					style: fr
				}, v(F.index, m)) : /* @__PURE__ */ (0, import_react$14.createElement)(u, {
					...ot(u, m),
					...co(u, F.data),
					"data-index": mt,
					"data-item-group-index": F.groupIndex,
					"data-item-index": F.index,
					"data-known-size": F.size,
					key: q,
					style: h ? mr : lo
				}, O ? d(F.index, F.groupIndex, F.data, m) : d(F.index, F.data, m));
			})
		});
	});
	pr = {
		height: "100%",
		outline: "none",
		overflowY: "auto",
		position: "relative",
		WebkitOverflowScrolling: "touch"
	};
	hr = {
		outline: "none",
		overflowX: "auto",
		position: "relative"
	};
	He = (t) => ({
		height: "100%",
		position: "absolute",
		top: 0,
		width: "100%",
		...t ? {
			display: "flex",
			flexDirection: "column"
		} : void 0
	});
	tn = (t, e, n = 0) => ({
		...He(t),
		position: e ? "relative" : "absolute",
		top: e ? -n : 0
	});
	gr = {
		position: Je(),
		top: 0,
		width: "100%",
		zIndex: 1
	};
	Ir = /* @__PURE__ */ import_react$14.memo(function() {
		const e = A("HeaderComponent"), n = Ct("headerHeight"), o = A("HeaderFooterTag"), r = kt(import_react$14.useMemo(() => (i) => {
			n(Ht(i, "height"));
		}, [n]), !0, A("skipAnimationFrameInResizeObserver")), s = A("context");
		return e != null ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(o, {
			ref: r,
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(e, { ...ot(e, s) })
		}) : null;
	});
	Sr = /* @__PURE__ */ import_react$14.memo(function() {
		const e = A("FooterComponent"), n = Ct("footerHeight"), o = A("HeaderFooterTag"), r = kt(import_react$14.useMemo(() => (i) => {
			n(Ht(i, "height"));
		}, [n]), !0, A("skipAnimationFrameInResizeObserver")), s = A("context");
		return e != null ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(o, {
			ref: r,
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(e, { ...ot(e, s) })
		}) : null;
	});
	xr = ({ children: t }) => {
		const e = import_react$14.useContext(Re), n = Ct("viewportHeight"), o = Ct("fixedItemHeight"), r = A("alignToBottom"), s = A("horizontalDirection"), l = kt(import_react$14.useMemo(() => re(n, (c) => Ht(c, s ? "width" : "height")), [n, s]), !0, A("skipAnimationFrameInResizeObserver"));
		return import_react$14.useEffect(() => {
			e && (n(e.viewportHeight), o(e.itemHeight));
		}, [
			e,
			n,
			o
		]), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			"data-viewport-type": "element",
			ref: l,
			style: He(r),
			children: t
		});
	}, vr = ({ children: t }) => {
		const e = import_react$14.useContext(Re), n = Ct("windowViewportRect"), o = Ct("fixedItemHeight"), r = A("customScrollParent"), s = A("useWindowScroll"), i = A("topListHeight"), l = $e(n, r, A("skipAnimationFrameInResizeObserver")), c = A("alignToBottom");
		return import_react$14.useEffect(() => {
			e && (o(e.itemHeight), n({
				listHeight: 0,
				offsetTop: 0,
				visibleHeight: e.viewportHeight,
				visibleWidth: 100
			}));
		}, [
			e,
			n,
			o
		]), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			"data-viewport-type": "window",
			ref: l,
			style: tn(c, s, i),
			children: t
		});
	}, Tr = ({ children: t }) => {
		const e = A("TopItemListComponent") ?? "div", n = A("headerHeight");
		return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(e, {
			style: {
				...gr,
				marginTop: `${n}px`
			},
			...ot(e, A("context")),
			children: t
		});
	}, {Component: uo, useEmitter: on, useEmitterValue: A, usePublisher: Ct} = /* @__PURE__ */ Xe(ar, {
		optional: {
			restoreStateFrom: "restoreStateFrom",
			context: "context",
			followOutput: "followOutput",
			scrollIntoViewOnChange: "scrollIntoViewOnChange",
			itemContent: "itemContent",
			groupContent: "groupContent",
			overscan: "overscan",
			increaseViewportBy: "increaseViewportBy",
			minOverscanItemCount: "minOverscanItemCount",
			totalCount: "totalCount",
			groupCounts: "groupCounts",
			topItemCount: "topItemCount",
			firstItemIndex: "firstItemIndex",
			initialTopMostItemIndex: "initialTopMostItemIndex",
			components: "components",
			atBottomThreshold: "atBottomThreshold",
			atTopThreshold: "atTopThreshold",
			computeItemKey: "computeItemKey",
			defaultItemHeight: "defaultItemHeight",
			fixedGroupHeight: "fixedGroupHeight",
			fixedItemHeight: "fixedItemHeight",
			heightEstimates: "heightEstimates",
			itemSize: "itemSize",
			scrollSeekConfiguration: "scrollSeekConfiguration",
			headerFooterTag: "HeaderFooterTag",
			data: "data",
			initialItemCount: "initialItemCount",
			initialScrollTop: "initialScrollTop",
			alignToBottom: "alignToBottom",
			useWindowScroll: "useWindowScroll",
			customScrollParent: "customScrollParent",
			scrollerRef: "scrollerRef",
			logLevel: "logLevel",
			horizontalDirection: "horizontalDirection",
			skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
		},
		methods: {
			scrollToIndex: "scrollToIndex",
			scrollIntoView: "scrollIntoView",
			scrollTo: "scrollTo",
			scrollBy: "scrollBy",
			autoscrollToBottom: "autoscrollToBottom",
			getState: "getState"
		},
		events: {
			isScrolling: "isScrolling",
			endReached: "endReached",
			startReached: "startReached",
			rangeChanged: "rangeChanged",
			atBottomStateChange: "atBottomStateChange",
			atTopStateChange: "atTopStateChange",
			totalListHeightChanged: "totalListHeightChanged",
			itemsRendered: "itemsRendered",
			groupIndices: "groupIndices"
		}
	}, /* @__PURE__ */ import_react$14.memo(function(e) {
		const n = A("useWindowScroll"), o = A("topItemsIndexes").length > 0, r = A("customScrollParent"), s = A("context");
		return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(r || n ? yr : wr, {
			...e,
			context: s,
			children: [o && /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Tr, { children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Rn, { showTopList: !0 }) }), /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(r || n ? vr : xr, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Ir, {}),
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Rn, {}),
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Sr, {})
			] })]
		});
	})), wr = /* @__PURE__ */ en({
		useEmitter: on,
		useEmitterValue: A,
		usePublisher: Ct
	}), yr = /* @__PURE__ */ nn({
		useEmitter: on,
		useEmitterValue: A,
		usePublisher: Ct
	}), es = uo, Rr = /* @__PURE__ */ j(([t, e]) => ({
		...t,
		...e
	}), rt(oo, /* @__PURE__ */ j(() => {
		const t = T((d) => /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)("td", { children: ["Item $", d] })), e = T(null), n = T((d) => /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)("td", {
			colSpan: 1e3,
			children: ["Group ", d]
		})), o = T(null), r = T(null), s = T({}), i = T(Qe), l = T(Jt), c = (d, m = null) => ht(x(s, B((v) => v[d]), nt()), m);
		return {
			components: s,
			computeItemKey: i,
			context: e,
			EmptyPlaceholder: c("EmptyPlaceholder"),
			FillerRow: c("FillerRow"),
			fixedFooterContent: r,
			fixedHeaderContent: o,
			itemContent: t,
			groupContent: n,
			ScrollerComponent: c("Scroller", "div"),
			scrollerRef: l,
			ScrollSeekPlaceholder: c("ScrollSeekPlaceholder"),
			TableBodyComponent: c("TableBody", "tbody"),
			TableComponent: c("Table", "table"),
			TableFooterComponent: c("TableFoot", "tfoot"),
			TableHeadComponent: c("TableHead", "thead"),
			TableRowComponent: c("TableRow", "tr"),
			GroupComponent: c("Group", "tr")
		};
	}))), Hr = ({ height: t }) => /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("td", { style: { height: t } }) }), Er = ({ height: t }) => /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("td", { style: {
		border: 0,
		height: t,
		padding: 0
	} }) }), Br = { overflowAnchor: "none" }, Hn = {
		position: Je(),
		zIndex: 2,
		overflowAnchor: "none"
	}, En = /* @__PURE__ */ import_react$14.memo(function({ showTopList: e = !1 }) {
		const n = _("listState"), o = _("computeItemKey"), r = _("firstItemIndex"), s = _("context"), i = _("isSeeking"), l = _("fixedHeaderHeight"), c = _("groupIndices").length > 0, d = _("itemContent"), m = _("groupContent"), v = _("ScrollSeekPlaceholder") ?? Hr, p = _("GroupComponent"), I = _("TableRowComponent"), w = (e ? n.topItems : []).reduce((h, f, a) => (a === 0 ? h.push(f.size) : h.push(h[a - 1] + f.size), h), []);
		return (e ? n.topItems : n.items).map((h) => {
			const f = h.originalIndex, a = o(f + r, h.data, s), S = e ? f === 0 ? 0 : w[f - 1] : 0;
			return i ? /* @__PURE__ */ (0, import_react$14.createElement)(v, {
				...ot(v, s),
				height: h.size,
				index: h.index,
				key: a,
				type: h.type || "item"
			}) : h.type === "group" ? /* @__PURE__ */ (0, import_react$14.createElement)(p, {
				...ot(p, s),
				"data-index": f,
				"data-item-index": h.index,
				"data-known-size": h.size,
				key: a,
				style: {
					...Hn,
					top: l
				}
			}, m(h.index, s)) : /* @__PURE__ */ (0, import_react$14.createElement)(I, {
				...ot(I, s),
				...co(I, h.data),
				"data-index": f,
				"data-item-index": h.index,
				"data-known-size": h.size,
				"data-item-group-index": h.groupIndex,
				key: a,
				style: e ? {
					...Hn,
					top: l + S
				} : Br
			}, c ? d(h.index, h.groupIndex, h.data, s) : d(h.index, h.data, s));
		});
	}), Or = /* @__PURE__ */ import_react$14.memo(function() {
		const e = _("listState"), n = _("topItemsIndexes").length > 0, o = bt("sizeRanges"), r = _("useWindowScroll"), s = _("customScrollParent"), i = bt("windowScrollContainerState"), l = bt("scrollContainerState"), c = s || r ? i : l, d = _("trackItemSizes"), { callbackRef: p, ref: I } = Gn(o, _("itemSize"), d, c, _("log"), void 0, s, !1, _("skipAnimationFrameInResizeObserver")), [w, R] = import_react$14.useState(0);
		rn("deviation", (O) => {
			w !== O && (I.current.style.marginTop = `${O}px`, R(O));
		});
		const h = _("EmptyPlaceholder"), f = _("FillerRow") ?? Er, a = _("TableBodyComponent"), S = _("paddingTopAddition"), H = _("statefulTotalCount"), y = _("context");
		if (H === 0 && h !== null && h !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(h, { ...ot(h, y) });
		const k = (n ? e.topItems : []).reduce((O, V) => O + V.size, 0), u = e.offsetTop + S + w - k, g = e.offsetBottom, C = u > 0 ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(f, {
			context: y,
			height: u
		}, "padding-top") : null, L = g > 0 ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(f, {
			context: y,
			height: g
		}, "padding-bottom") : null;
		return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(a, {
			"data-testid": "virtuoso-item-list",
			ref: p,
			...ot(a, y),
			children: [
				C,
				n && /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(En, { showTopList: !0 }),
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(En, {}),
				L
			]
		});
	}), kr = ({ children: t }) => {
		const e = import_react$14.useContext(Re), n = bt("viewportHeight"), o = bt("fixedItemHeight"), r = kt(import_react$14.useMemo(() => re(n, (s) => Ht(s, "height")), [n]), !0, _("skipAnimationFrameInResizeObserver"));
		return import_react$14.useEffect(() => {
			e && (n(e.viewportHeight), o(e.itemHeight));
		}, [
			e,
			n,
			o
		]), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			"data-viewport-type": "element",
			ref: r,
			style: He(!1),
			children: t
		});
	}, Lr = ({ children: t }) => {
		const e = import_react$14.useContext(Re), n = bt("windowViewportRect"), o = bt("fixedItemHeight"), r = _("customScrollParent"), s = _("useWindowScroll"), i = $e(n, r, _("skipAnimationFrameInResizeObserver"));
		return import_react$14.useEffect(() => {
			e && (o(e.itemHeight), n({
				listHeight: 0,
				offsetTop: 0,
				visibleHeight: e.viewportHeight,
				visibleWidth: 100
			}));
		}, [
			e,
			n,
			o
		]), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			"data-viewport-type": "window",
			ref: i,
			style: tn(!1, s),
			children: t
		});
	}, {Component: ao, useEmitter: rn, useEmitterValue: _, usePublisher: bt} = /* @__PURE__ */ Xe(Rr, {
		optional: {
			restoreStateFrom: "restoreStateFrom",
			context: "context",
			followOutput: "followOutput",
			firstItemIndex: "firstItemIndex",
			itemContent: "itemContent",
			groupContent: "groupContent",
			fixedHeaderContent: "fixedHeaderContent",
			fixedFooterContent: "fixedFooterContent",
			overscan: "overscan",
			increaseViewportBy: "increaseViewportBy",
			minOverscanItemCount: "minOverscanItemCount",
			totalCount: "totalCount",
			topItemCount: "topItemCount",
			initialTopMostItemIndex: "initialTopMostItemIndex",
			components: "components",
			groupCounts: "groupCounts",
			atBottomThreshold: "atBottomThreshold",
			atTopThreshold: "atTopThreshold",
			computeItemKey: "computeItemKey",
			defaultItemHeight: "defaultItemHeight",
			fixedGroupHeight: "fixedGroupHeight",
			fixedItemHeight: "fixedItemHeight",
			itemSize: "itemSize",
			scrollSeekConfiguration: "scrollSeekConfiguration",
			data: "data",
			initialItemCount: "initialItemCount",
			initialScrollTop: "initialScrollTop",
			alignToBottom: "alignToBottom",
			useWindowScroll: "useWindowScroll",
			customScrollParent: "customScrollParent",
			scrollerRef: "scrollerRef",
			logLevel: "logLevel"
		},
		methods: {
			scrollToIndex: "scrollToIndex",
			scrollIntoView: "scrollIntoView",
			scrollTo: "scrollTo",
			scrollBy: "scrollBy",
			getState: "getState"
		},
		events: {
			isScrolling: "isScrolling",
			endReached: "endReached",
			startReached: "startReached",
			rangeChanged: "rangeChanged",
			atBottomStateChange: "atBottomStateChange",
			atTopStateChange: "atTopStateChange",
			totalListHeightChanged: "totalListHeightChanged",
			itemsRendered: "itemsRendered",
			groupIndices: "groupIndices"
		}
	}, /* @__PURE__ */ import_react$14.memo(function(e) {
		const n = _("useWindowScroll"), o = _("customScrollParent"), r = bt("fixedHeaderHeight"), s = bt("fixedFooterHeight"), i = _("fixedHeaderContent"), l = _("fixedFooterContent"), c = _("context"), d = kt(import_react$14.useMemo(() => re(r, (a) => Ht(a, "height")), [r]), !0, _("skipAnimationFrameInResizeObserver")), m = kt(import_react$14.useMemo(() => re(s, (a) => Ht(a, "height")), [s]), !0, _("skipAnimationFrameInResizeObserver")), v = o || n ? Vr : Fr, p = o || n ? Lr : kr, I = _("TableComponent"), w = _("TableHeadComponent"), R = _("TableFooterComponent"), h = i ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(w, {
			ref: d,
			style: {
				position: "sticky",
				top: 0,
				zIndex: 2
			},
			...ot(w, c),
			children: i()
		}, "TableHead") : null, f = l ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(R, {
			ref: m,
			style: {
				bottom: 0,
				position: "sticky",
				zIndex: 1
			},
			...ot(R, c),
			children: l()
		}, "TableFoot") : null;
		return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(v, {
			...e,
			...ot(v, c),
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(p, { children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(I, {
				style: {
					borderSpacing: 0,
					overflowAnchor: "none"
				},
				...ot(I, c),
				children: [
					h,
					/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Or, {}, "TableBody"),
					f
				]
			}) })
		});
	})), Fr = /* @__PURE__ */ en({
		useEmitter: rn,
		useEmitterValue: _,
		usePublisher: bt
	}), Vr = /* @__PURE__ */ nn({
		useEmitter: rn,
		useEmitterValue: _,
		usePublisher: bt
	}), Bn = {
		bottom: 0,
		itemHeight: 0,
		items: [],
		itemWidth: 0,
		offsetBottom: 0,
		offsetTop: 0,
		top: 0
	}, Wr = {
		bottom: 0,
		itemHeight: 0,
		items: [{ index: 0 }],
		itemWidth: 0,
		offsetBottom: 0,
		offsetTop: 0,
		top: 0
	}, {ceil: On, floor: Ce, max: oe, min: ze, round: kn} = Math;
	Ar = /* @__PURE__ */ j(([{ increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o }, { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: c, scrollTop: d, smoothScrollTargetReached: m, viewportHeight: v }, p, I, { didMount: w, propsReady: R }, { customScrollParent: h, useWindowScroll: f, windowScrollContainerState: a, windowScrollTo: S, windowViewportRect: H }, y]) => {
		const k = T(0), u = T(0), g = T(Bn), C = T({
			height: 0,
			width: 0
		}), L = T({
			height: 0,
			width: 0
		}), O = U(), V = U(), N = T(0), Z = T(null), F = T({
			column: 0,
			row: 0
		}), mt = U(), q = U(), Q = T(!1), gt = T(0), lt = T(!0), St = T(!1), Ft = T(!1);
		Y(x(w, $(gt), P(([b, D]) => !Ae(D))), () => {
			M(lt, !1);
		}), Y(x(at(w, lt, L, C, gt, St), P(([b, D, K, st, , tt]) => b && !D && K.height !== 0 && st.height !== 0 && !tt)), ([, , , , b]) => {
			if (b === void 0) {
				M(lt, !0);
				return;
			}
			M(St, !0), je(1, () => {
				M(O, b);
			}), yt(x(d), () => {
				M(e, [0, 0]), M(lt, !0);
			});
		}), z(x(q, P((b) => b != null && b.scrollTop > 0), Bt(0)), u), Y(x(w, $(q), P(([, b]) => b != null)), ([, b]) => {
			b && (M(C, b.viewport), M(L, b.item), M(F, b.gap), b.scrollTop > 0 && (M(Q, !0), yt(x(d, Ut(1)), (D) => {
				M(Q, !1);
			}), M(c, { top: b.scrollTop })));
		}), z(x(C, B(({ height: b }) => b)), v), z(x(at(W(C, Se), W(L, Se), W(F, (b, D) => b !== void 0 && b.column === D.column && b.row === D.row), W(d)), B(([b, D, K, st]) => ({
			gap: K,
			item: D,
			scrollTop: st,
			viewport: b
		}))), mt), z(x(at(W(k), o, W(F, Gr), W(L, Se), W(C, Se), W(Z), W(u), W(Q), W(lt), W(gt)), P(([, , , , , , , b]) => !b), B(([b, [D, K], st, tt, X, ct, xt, , ut, Vt]) => {
			const { column: Wt, row: ee } = st, { height: he, width: Ee } = tt, { width: sn } = X;
			if (xt === 0 && (b === 0 || sn === 0)) return Bn;
			if (Ee === 0) {
				const dn = qe(Vt, b);
				return Pr(Ln(dn, dn + Math.max(xt - 1, 0), ct));
			}
			const ge = fo(sn, Ee, Wt);
			let qt, Mt;
			ut ? D === 0 && K === 0 && xt > 0 ? (qt = 0, Mt = xt - 1) : (qt = ge * Ce((D + ee) / (he + ee)), Mt = ge * On((K + ee) / (he + ee)) - 1, Mt = ze(b - 1, oe(Mt, ge - 1)), qt = ze(Mt, oe(0, qt))) : (qt = 0, Mt = -1);
			const ln = Ln(qt, Mt, ct), { bottom: cn, top: un } = zn(X, st, tt, ln), an = On(b / ge);
			return {
				bottom: cn,
				itemHeight: he,
				items: ln,
				itemWidth: Ee,
				offsetBottom: an * he + (an - 1) * ee - cn,
				offsetTop: un,
				top: un
			};
		})), g), z(x(Z, P((b) => b !== null), B((b) => b.length)), k), z(x(at(C, L, g, F), P(([b, D, { items: K }]) => K.length > 0 && D.height !== 0 && b.height !== 0), B(([b, D, { items: K }, st]) => {
			const { bottom: tt, top: X } = zn(b, st, D, K);
			return [X, tt];
		}), nt(le)), e);
		const pt = T(!1);
		z(x(d, $(pt), B(([b, D]) => D || b !== 0)), pt);
		const jt = Tt(x(at(g, k), P(([{ items: b }]) => b.length > 0), $(pt), P(([[b, D], K]) => {
			const tt = b.items[b.items.length - 1].index === D - 1;
			return (K || b.bottom > 0 && b.itemHeight > 0 && b.offsetBottom === 0 && b.items.length === D) && tt;
		}), B(([[, b]]) => b - 1), nt())), Qt = Tt(x(W(g), P(({ items: b }) => b.length > 0 && b[0].index === 0), Bt(0), nt())), Et = Tt(x(W(g), $(Q), P(([{ items: b }, D]) => b.length > 0 && !D), B(([{ items: b }]) => ({
			endIndex: b[b.length - 1].index,
			startIndex: b[0].index
		})), nt($n), zt(0)));
		z(Et, I.scrollSeekRangeChanged), z(x(O, $(C, L, k, F), B(([b, D, K, st, tt]) => {
			const X = Yn(b), { align: ct, behavior: xt, offset: ut } = X;
			let Vt = X.index;
			Vt === "LAST" && (Vt = st - 1), Vt = oe(0, Vt, ze(st - 1, Vt));
			let Wt = Me(D, tt, K, Vt);
			return ct === "end" ? Wt = kn(Wt - D.height + K.height) : ct === "center" && (Wt = kn(Wt - D.height / 2 + K.height / 2)), ut !== void 0 && ut !== 0 && (Wt += ut), {
				behavior: xt,
				top: Wt
			};
		})), c);
		const te = ht(x(g, B((b) => b.offsetBottom + b.bottom)), 0);
		return z(x(H, B((b) => ({
			height: b.visibleHeight,
			width: b.visibleWidth
		}))), C), {
			customScrollParent: h,
			data: Z,
			deviation: N,
			footerHeight: r,
			gap: F,
			headerHeight: s,
			increaseViewportBy: t,
			initialItemCount: u,
			itemDimensions: L,
			overscan: n,
			restoreStateFrom: q,
			scrollBy: i,
			scrollContainerState: l,
			scrollHeight: V,
			scrollTo: c,
			scrollToIndex: O,
			scrollTop: d,
			smoothScrollTargetReached: m,
			totalCount: k,
			useWindowScroll: f,
			viewportDimensions: C,
			windowScrollContainerState: a,
			windowScrollTo: S,
			windowViewportRect: H,
			...I,
			gridState: g,
			horizontalDirection: Ft,
			initialTopMostItemIndex: gt,
			totalListHeight: te,
			...p,
			endReached: jt,
			propsReady: R,
			rangeChanged: Et,
			startReached: Qt,
			stateChanged: mt,
			stateRestoreInProgress: Q,
			...y
		};
	}, rt(Ye, It, pe, eo, At, Ze, Gt));
	_r = /* @__PURE__ */ j(([t, e]) => ({
		...t,
		...e
	}), rt(Ar, /* @__PURE__ */ j(() => {
		const t = T((v) => `Item ${v}`), e = T({}), n = T(null), o = T("virtuoso-grid-item"), r = T("virtuoso-grid-list"), s = T(Qe), i = T("div"), l = T(Jt), c = (v, p = null) => ht(x(e, B((I) => I[v]), nt()), p), d = T(!1), m = T(!1);
		return z(W(m), d), {
			components: e,
			computeItemKey: s,
			context: n,
			FooterComponent: c("Footer"),
			HeaderComponent: c("Header"),
			headerFooterTag: i,
			itemClassName: o,
			ItemComponent: c("Item", "div"),
			itemContent: t,
			listClassName: r,
			ListComponent: c("List", "div"),
			readyStateChanged: d,
			reportReadyState: m,
			ScrollerComponent: c("Scroller", "div"),
			scrollerRef: l,
			ScrollSeekPlaceholder: c("ScrollSeekPlaceholder", "div")
		};
	}))), Nr = /* @__PURE__ */ import_react$14.memo(function() {
		const e = et("gridState"), n = et("listClassName"), o = et("itemClassName"), r = et("itemContent"), s = et("computeItemKey"), i = et("isSeeking"), l = wt("scrollHeight"), c = et("ItemComponent"), d = et("ListComponent"), m = et("ScrollSeekPlaceholder"), v = et("context"), p = wt("itemDimensions"), I = wt("gap"), w = et("log"), R = et("stateRestoreInProgress"), h = wt("reportReadyState"), f = kt(import_react$14.useMemo(() => (a) => {
			const S = a.parentElement.parentElement.scrollHeight;
			l(S);
			const H = a.firstChild;
			if (H !== null) {
				const { height: y, width: k } = H.getBoundingClientRect();
				p({
					height: y,
					width: k
				});
			}
			I({
				column: Fn("column-gap", getComputedStyle(a).columnGap, w),
				row: Fn("row-gap", getComputedStyle(a).rowGap, w)
			});
		}, [
			l,
			p,
			I,
			w
		]), !0, !1);
		return so(() => {
			e.itemHeight > 0 && e.itemWidth > 0 && h(!0);
		}, [e]), R ? null : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(d, {
			className: n,
			ref: f,
			...ot(d, v),
			"data-testid": "virtuoso-item-list",
			style: {
				paddingBottom: e.offsetBottom,
				paddingTop: e.offsetTop
			},
			children: e.items.map((a) => {
				const S = s(a.index, a.data, v);
				return i ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(m, {
					...ot(m, v),
					height: e.itemHeight,
					index: a.index,
					width: e.itemWidth
				}, S) : /* @__PURE__ */ (0, import_react$14.createElement)(c, {
					...ot(c, v),
					className: o,
					"data-index": a.index,
					key: S
				}, r(a.index, a.data, v));
			})
		});
	}), Dr = import_react$14.memo(function() {
		const e = et("HeaderComponent"), n = wt("headerHeight"), o = et("headerFooterTag"), r = kt(import_react$14.useMemo(() => (i) => {
			n(Ht(i, "height"));
		}, [n]), !0, !1), s = et("context");
		return e != null ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(o, {
			ref: r,
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(e, { ...ot(e, s) })
		}) : null;
	}), $r = import_react$14.memo(function() {
		const e = et("FooterComponent"), n = wt("footerHeight"), o = et("headerFooterTag"), r = kt(import_react$14.useMemo(() => (i) => {
			n(Ht(i, "height"));
		}, [n]), !0, !1), s = et("context");
		return e != null ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(o, {
			ref: r,
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(e, { ...ot(e, s) })
		}) : null;
	}), Ur = ({ children: t }) => {
		const e = import_react$14.useContext(ro), n = wt("itemDimensions"), o = wt("viewportDimensions"), r = kt(import_react$14.useMemo(() => (s) => {
			o(s.getBoundingClientRect());
		}, [o]), !0, !1);
		return import_react$14.useEffect(() => {
			e && (o({
				height: e.viewportHeight,
				width: e.viewportWidth
			}), n({
				height: e.itemHeight,
				width: e.itemWidth
			}));
		}, [
			e,
			o,
			n
		]), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			ref: r,
			style: He(!1),
			children: t
		});
	}, Kr = ({ children: t }) => {
		const e = import_react$14.useContext(ro), n = wt("windowViewportRect"), o = wt("itemDimensions"), r = et("customScrollParent"), s = et("useWindowScroll"), i = $e(n, r, !1);
		return import_react$14.useEffect(() => {
			e && (o({
				height: e.itemHeight,
				width: e.itemWidth
			}), n({
				listHeight: 0,
				offsetTop: 0,
				visibleHeight: e.viewportHeight,
				visibleWidth: e.viewportWidth
			}));
		}, [
			e,
			n,
			o
		]), /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			ref: i,
			style: tn(!1, s),
			children: t
		});
	}, {Component: qr, useEmitter: mo, useEmitterValue: et, usePublisher: wt} = /* @__PURE__ */ Xe(_r, {
		optional: {
			context: "context",
			totalCount: "totalCount",
			overscan: "overscan",
			itemContent: "itemContent",
			components: "components",
			computeItemKey: "computeItemKey",
			data: "data",
			initialItemCount: "initialItemCount",
			scrollSeekConfiguration: "scrollSeekConfiguration",
			headerFooterTag: "headerFooterTag",
			listClassName: "listClassName",
			itemClassName: "itemClassName",
			useWindowScroll: "useWindowScroll",
			customScrollParent: "customScrollParent",
			scrollerRef: "scrollerRef",
			logLevel: "logLevel",
			restoreStateFrom: "restoreStateFrom",
			initialTopMostItemIndex: "initialTopMostItemIndex",
			increaseViewportBy: "increaseViewportBy"
		},
		methods: {
			scrollTo: "scrollTo",
			scrollBy: "scrollBy",
			scrollToIndex: "scrollToIndex"
		},
		events: {
			isScrolling: "isScrolling",
			endReached: "endReached",
			startReached: "startReached",
			rangeChanged: "rangeChanged",
			atBottomStateChange: "atBottomStateChange",
			atTopStateChange: "atTopStateChange",
			stateChanged: "stateChanged",
			readyStateChanged: "readyStateChanged"
		}
	}, /* @__PURE__ */ import_react$14.memo(function({ ...e }) {
		const n = et("useWindowScroll"), o = et("customScrollParent"), r = o || n ? Zr : Yr, s = o || n ? Kr : Ur, i = et("context");
		return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(r, {
			...e,
			...ot(r, i),
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(s, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Dr, {}),
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Nr, {}),
				/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)($r, {})
			] })
		});
	})), Yr = /* @__PURE__ */ en({
		useEmitter: mo,
		useEmitterValue: et,
		usePublisher: wt
	}), Zr = /* @__PURE__ */ nn({
		useEmitter: mo,
		useEmitterValue: et,
		usePublisher: wt
	});
}));
//#endregion
//#region src/core/VirtualizedList/virtualized-list.ts
/**
* Check if a keyboard event includes modifier keys
*/
function isModifiedKeyEvent(event) {
	return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
}
/**
* Builds a Virtuoso `calculateViewLocation` that keeps `paddingTop` pixels clear at the top of the
* viewport (e.g. for a pinned sticky header). It honours the requested alignment and only insets
* the cases that would otherwise place the item against the top edge — so a focused item lands just
* below the pinned header instead of underneath it. `offset` is negative because Virtuoso adds it to
* the computed `scrollTop`, and a smaller scrollTop pushes the item further down the viewport.
*/
function reserveTopViewLocation(paddingTop) {
	return ({ itemTop, itemBottom, viewportTop, viewportBottom, locationParams: { align, behavior, ...rest } }) => {
		if (align === "start" || align === void 0 && itemTop < viewportTop + paddingTop) return {
			...rest,
			behavior,
			align: "start",
			offset: -paddingTop
		};
		if (align === "end" || align === void 0 && itemBottom > viewportBottom) return {
			...rest,
			behavior,
			align: "end"
		};
		if (align === "center") return {
			...rest,
			behavior,
			align: "center"
		};
		return null;
	};
}
/**
* A hook that provides keyboard navigation and focus management for a virtualized list
* built on top of react-virtuoso.
*
* Handles Arrow Up/Down, Home, End, Page Up/Down key navigation, focus tracking via
* a roving `tabIndex`, and automatic scrolling to keep the focused item visible.
*
* Returns props to spread onto a Virtuoso component along with an `onFocusForGetItemComponent`
* callback that each item must call on focus to keep the focus state in sync.
*
* @param props - The virtualized list configuration including items, focusability checks,
*                key extraction, and any pass-through Virtuoso props.
* @returns An object of props to wire up to a Virtuoso component, plus `onFocusForGetItemComponent`
*          for individual item focus handling.
*/
function useVirtualizedList(props, handleRef) {
	const { items, isItemFocusable, getItemKey, context, onKeyDown, disableKeyboardNavigation, totalCount, rangeChanged, mapScrollIndex, mapRangeIndex, scrollerRef: externalScrollerRef, scrollPaddingTop, ...virtuosoProps } = props;
	/** Reference to the Virtuoso component for programmatic scrolling */
	const virtuosoHandleRef = (0, import_react$13.useRef)(null);
	/** Reference to the DOM element containing the virtualized list */
	const virtuosoDomRef = (0, import_react$13.useRef)(null);
	/** Key of the item that should have tabIndex == 0 */
	const [tabIndexKey, setTabIndexKey] = (0, import_react$13.useState)(props.items[0] ? getItemKey(props.items[0]) : void 0);
	/** Range of currently visible items in the viewport */
	const [visibleRange, setVisibleRange] = (0, import_react$13.useState)(void 0);
	/** Map from item keys to their indices in the items array */
	const keyToIndexMap = (0, import_react$13.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		items.forEach((item, index) => map.set(getItemKey(item), index));
		return map;
	}, [items, getItemKey]);
	const [isFocused, setIsFocused] = (0, import_react$13.useState)(false);
	(0, import_react$13.useEffect)(() => {
		if (items.length && (!tabIndexKey || keyToIndexMap.get(tabIndexKey) === void 0)) setTabIndexKey(getItemKey(items[0]));
	}, [
		items,
		getItemKey,
		tabIndexKey,
		keyToIndexMap
	]);
	/**
	* Scrolls to a specific item index and sets it as focused.
	* Updates tabIndexKey immediately so the UI reflects the new focus
	* synchronously, then asks Virtuoso to scroll the item into view.
	*/
	const scrollToIndex = (0, import_react$13.useCallback)((index, align) => {
		const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
		if (items[clampedIndex]) {
			const key = getItemKey(items[clampedIndex]);
			setTabIndexKey(key);
			const scrollIndex = mapScrollIndex ? mapScrollIndex(clampedIndex) : clampedIndex;
			const paddingTop = typeof scrollPaddingTop === "function" ? scrollPaddingTop(clampedIndex) : scrollPaddingTop ?? 0;
			virtuosoHandleRef.current?.scrollIntoView({
				index: scrollIndex,
				align,
				behavior: "auto",
				...paddingTop > 0 ? { calculateViewLocation: reserveTopViewLocation(paddingTop) } : {}
			});
		}
	}, [
		items,
		getItemKey,
		mapScrollIndex,
		scrollPaddingTop
	]);
	/**
	* Scrolls to an item, skipping over non-focusable items if necessary.
	* This is used for keyboard navigation to ensure focus lands on valid items.
	*/
	const scrollToItem = (0, import_react$13.useCallback)((index, isDirectionDown, align) => {
		const totalRows = items.length;
		let nextIndex;
		for (let i = index; isDirectionDown ? i < totalRows : i >= 0; i = i + (isDirectionDown ? 1 : -1)) if (isItemFocusable(items[i])) {
			nextIndex = i;
			break;
		}
		if (nextIndex === void 0) return;
		scrollToIndex(nextIndex, align);
	}, [
		scrollToIndex,
		items,
		isItemFocusable
	]);
	/**
	* Handles keyboard navigation for the list.
	* Supports Arrow keys, Home, End, Page Up/Down, Enter, and Space.
	*/
	const keyDownCallback = (0, import_react$13.useCallback)((e) => {
		const currentIndex = tabIndexKey ? keyToIndexMap.get(tabIndexKey) : void 0;
		let handled = false;
		if (!e || isModifiedKeyEvent(e)) {
			onKeyDown?.(e);
			return;
		}
		if (disableKeyboardNavigation) {
			onKeyDown?.(e);
			return;
		}
		if (e.code === Key.ARROW_UP && currentIndex !== void 0) {
			scrollToItem(currentIndex - 1, false);
			handled = true;
		} else if (e.code === Key.ARROW_DOWN && currentIndex !== void 0) {
			scrollToItem(currentIndex + 1, true);
			handled = true;
		} else if (e.code === Key.HOME) {
			scrollToIndex(0);
			handled = true;
		} else if (e.code === Key.END) {
			scrollToIndex(items.length - 1);
			handled = true;
		} else if (e.code === Key.PAGE_DOWN && visibleRange && currentIndex !== void 0) {
			const numberDisplayed = visibleRange.endIndex - visibleRange.startIndex;
			scrollToItem(Math.min(currentIndex + numberDisplayed, items.length - 1), true, "start");
			handled = true;
		} else if (e.code === Key.PAGE_UP && visibleRange && currentIndex !== void 0) {
			const numberDisplayed = visibleRange.endIndex - visibleRange.startIndex;
			scrollToItem(Math.max(currentIndex - numberDisplayed, 0), false, "start");
			handled = true;
		}
		if (handled) {
			if (virtuosoDomRef.current instanceof HTMLElement) {
				const activeEl = document.activeElement;
				if (activeEl && activeEl !== virtuosoDomRef.current && virtuosoDomRef.current.contains(activeEl)) virtuosoDomRef.current.focus({ preventScroll: true });
			}
			e.stopPropagation();
			e.preventDefault();
		} else onKeyDown?.(e);
	}, [
		scrollToIndex,
		scrollToItem,
		tabIndexKey,
		keyToIndexMap,
		visibleRange,
		items,
		onKeyDown,
		disableKeyboardNavigation
	]);
	/**
	* Callback ref for the Virtuoso scroller element.
	* Stores the reference for use in focus management, and forwards it to an
	* optional external scrollerRef provided by the consumer (e.g. to observe
	* scroll position) since the hook owns the scrollerRef passed to Virtuoso.
	*/
	const scrollerRef = (0, import_react$13.useCallback)((element) => {
		virtuosoDomRef.current = element;
		externalScrollerRef?.(element);
	}, [externalScrollerRef]);
	/**
	* Focus handler passed to each item component.
	* Don't declare inside getItemComponent to avoid re-creating on each render.
	*/
	const onFocusForGetItemComponent = (0, import_react$13.useCallback)((item, e) => {
		const key = getItemKey(item);
		setIsFocused(true);
		setTabIndexKey(key);
		e.stopPropagation();
	}, [getItemKey]);
	/**
	* Handles focus events on the list.
	* Sets the focused state and scrolls to the focused item if it is not currently visible.
	*/
	const onFocus = (0, import_react$13.useCallback)((e) => {
		if (e?.currentTarget !== virtuosoDomRef.current || typeof tabIndexKey !== "string") return;
		setIsFocused(true);
		const index = keyToIndexMap.get(tabIndexKey);
		if (index !== void 0 && visibleRange && (index < visibleRange.startIndex || index > visibleRange.endIndex)) scrollToIndex(index);
		e.stopPropagation();
		e.preventDefault();
	}, [
		keyToIndexMap,
		visibleRange,
		scrollToIndex,
		tabIndexKey
	]);
	const onBlur = (0, import_react$13.useCallback)((event) => {
		if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
	}, []);
	const listContext = (0, import_react$13.useMemo)(() => ({
		tabIndexKey,
		focused: isFocused,
		context: props.context || {}
	}), [
		tabIndexKey,
		isFocused,
		props.context
	]);
	const handleRangeChanged = (0, import_react$13.useCallback)((range) => {
		const internalRange = mapRangeIndex ? {
			startIndex: mapRangeIndex(range.startIndex),
			endIndex: mapRangeIndex(range.endIndex)
		} : range;
		setVisibleRange(internalRange);
		rangeChanged?.(range);
	}, [rangeChanged, mapRangeIndex]);
	const setRef = (0, import_react$13.useCallback)((handle) => {
		virtuosoHandleRef.current = handle;
		handleRef?.(handle);
	}, [handleRef]);
	const computeItemKey = (0, import_react$13.useCallback)((_index, item) => getItemKey(item), [getItemKey]);
	return {
		...virtuosoProps,
		computeItemKey,
		ref: setRef,
		scrollerRef,
		onKeyDown: keyDownCallback,
		onFocus,
		onBlur,
		rangeChanged: handleRangeChanged,
		onFocusForGetItemComponent,
		context: listContext
	};
}
var import_react$13, Key;
var init_virtualized_list = __esmMin((() => {
	import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
	Key = {
		ARROW_UP: "ArrowUp",
		ARROW_DOWN: "ArrowDown",
		HOME: "Home",
		END: "End",
		PAGE_UP: "PageUp",
		PAGE_DOWN: "PageDown",
		ENTER: "Enter",
		SPACE: "Space"
	};
}));
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/FlatVirtualizedList.tsx
/**
* A generic virtualized list component built on top of react-virtuoso.
* Provides keyboard navigation and virtualized rendering for performance with large lists.
*
* @template Item - The type of data items in the list
* @template Context - The type of additional context data passed to items
*/
function FlatVirtualizedList(props) {
	const { getItemComponent, scrollHandleRef, ...restProps } = props;
	const { onFocusForGetItemComponent, ...virtuosoProps } = useVirtualizedList(restProps, scrollHandleRef);
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(es, {
		itemContent: (0, import_react$12.useCallback)((index, item, context) => getItemComponent(index, item, context, onFocusForGetItemComponent), [getItemComponent, onFocusForGetItemComponent]),
		data: props.items,
		...virtuosoProps
	});
}
var import_react$12, import_jsx_runtime$10;
var init_FlatVirtualizedList$1 = __esmMin((() => {
	import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist();
	init_virtualized_list();
	import_jsx_runtime$10 = require_jsx_runtime();
	FlatVirtualizedList.__docgenInfo = {
		"description": "A generic virtualized list component built on top of react-virtuoso.\nProvides keyboard navigation and virtualized rendering for performance with large lists.\n\n@template Item - The type of data items in the list\n@template Context - The type of additional context data passed to items",
		"methods": [],
		"displayName": "FlatVirtualizedList",
		"props": {
			"items": {
				"required": true,
				"tsType": {
					"name": "Array",
					"elements": [{ "name": "Item" }],
					"raw": "Item[]"
				},
				"description": "The array of items to display in the virtualized list.\nEach item will be passed to getItemComponent for rendering."
			},
			"context": {
				"required": false,
				"tsType": { "name": "Context" },
				"description": "Optional additional context data to pass to each rendered item.\nThis will be available in the VirtualizedListContext passed to getItemComponent."
			},
			"isItemFocusable": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(item: Item) => boolean",
					"signature": {
						"arguments": [{
							"type": { "name": "Item" },
							"name": "item"
						}],
						"return": { "name": "boolean" }
					}
				},
				"description": "Function to determine if an item can receive focus during keyboard navigation.\n@param item - The item to check for focusability\n@returns true if the item can be focused, false otherwise"
			},
			"getItemKey": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(item: Item) => string",
					"signature": {
						"arguments": [{
							"type": { "name": "Item" },
							"name": "item"
						}],
						"return": { "name": "string" }
					}
				},
				"description": "Function to get the key to use for focusing an item.\n@param item - The item to get the key for\n@returns The key to use for focusing the item"
			},
			"onKeyDown": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(e: React.KeyboardEvent<HTMLDivElement>) => void",
					"signature": {
						"arguments": [{
							"type": {
								"name": "ReactKeyboardEvent",
								"raw": "React.KeyboardEvent<HTMLDivElement>",
								"elements": [{ "name": "HTMLDivElement" }]
							},
							"name": "e"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Callback function to handle key down events on the list container.\nList handles keyboard navigation for focus(up, down, home, end, pageUp, pageDown)\nand stops propagation otherwise the event bubbles and this callback is called for the use of the parent.\n@param e - The keyboard event\n@returns"
			},
			"disableKeyboardNavigation": {
				"required": false,
				"tsType": { "name": "boolean" },
				"description": "When true, keyboard navigation (Arrow keys, Home, End, Page Up/Down) is disabled.\nAll key events are forwarded directly to `onKeyDown` instead.\nUse this to prevent the list from scrolling while an item is being dragged via keyboard."
			},
			"totalCount": {
				"required": false,
				"tsType": { "name": "number" },
				"description": "Optional total count of items (for virtualization with partial data loading).\nIf provided, this will be used instead of items.length for the total count."
			},
			"rangeChanged": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(range: ListRange) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "ListRange" },
							"name": "range"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Optional callback when the visible range of items changes.\nUseful for loading data on-demand as the user scrolls.\n@param range - The new visible range with startIndex and endIndex"
			},
			"mapScrollIndex": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(itemsIndex: number) => number",
					"signature": {
						"arguments": [{
							"type": { "name": "number" },
							"name": "itemsIndex"
						}],
						"return": { "name": "number" }
					}
				},
				"description": "Optional function to map from the items array index to the scroll index\nused by virtuoso's scrollIntoView. This is needed when the items array\ncontains entries (such as group headers) that don't have a direct 1:1\nmapping with virtuoso's own item indices.\n\n@param itemsIndex - The index in the items array\n@returns The index to pass to virtuoso's scrollIntoView"
			},
			"mapRangeIndex": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(virtuosoIndex: number) => number",
					"signature": {
						"arguments": [{
							"type": { "name": "number" },
							"name": "virtuosoIndex"
						}],
						"return": { "name": "number" }
					}
				},
				"description": "Optional function to map from virtuoso's reported visible-range indices\nback to the items array indices. This is needed when virtuoso reports\nranges in a different index space than the items array (e.g., in\nGroupedVirtuoso where group headers are not counted in the range).\n\n@param virtuosoIndex - The index reported by virtuoso's rangeChanged\n@returns The corresponding index in the items array"
			},
			"scrollPaddingTop": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "number | ((index: number) => number)",
					"elements": [{ "name": "number" }, { "name": "unknown" }]
				},
				"description": "Optional space, in pixels, reserved at the top of the scroll viewport — e.g. for a pinned\nsticky header that overlays the top of the list. When set, keyboard navigation scrolls\nfocused items to just below this offset rather than flush to the top, so the focused item\n(and its focus ring / hover affordances) is never hidden behind the pinned header.\n\nPass a function to vary the reserved space per item index — e.g. return 0 for an item that is\nitself the pinned header (so it lands flush at the top) and the header height for the rest."
			},
			"scrollHandleRef": {
				"required": false,
				"tsType": {
					"name": "ReactRefCallback",
					"raw": "React.RefCallback<VirtuosoHandle>",
					"elements": [{ "name": "VirtuosoHandle" }]
				},
				"description": "Optional ref to the underlying Virtuoso handle, for imperative scrolling."
			},
			"getItemComponent": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(\n    index: number,\n    item: Item,\n    context: VirtualizedListContext<Context>,\n    onFocus: (item: Item, e: React.FocusEvent) => void,\n) => JSX.Element",
					"signature": {
						"arguments": [
							{
								"type": { "name": "number" },
								"name": "index"
							},
							{
								"type": { "name": "Item" },
								"name": "item"
							},
							{
								"type": {
									"name": "signature",
									"type": "object",
									"raw": "{\n    /** The key of item that should have tabIndex == 0 */\n    tabIndexKey?: string;\n    /** Whether an item in the list is currently focused */\n    focused: boolean;\n    /** Additional context data passed from the parent component */\n    context: Context;\n}",
									"signature": { "properties": [
										{
											"key": "tabIndexKey",
											"value": {
												"name": "string",
												"required": false
											},
											"description": "The key of item that should have tabIndex == 0"
										},
										{
											"key": "focused",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether an item in the list is currently focused"
										},
										{
											"key": "context",
											"value": {
												"name": "Context",
												"required": true
											},
											"description": "Additional context data passed from the parent component"
										}
									] }
								},
								"name": "context"
							},
							{
								"type": {
									"name": "signature",
									"type": "function",
									"raw": "(item: Item, e: React.FocusEvent) => void",
									"signature": {
										"arguments": [{
											"type": { "name": "Item" },
											"name": "item"
										}, {
											"type": {
												"name": "ReactFocusEvent",
												"raw": "React.FocusEvent"
											},
											"name": "e"
										}],
										"return": { "name": "void" }
									}
								},
								"name": "onFocus"
							}
						],
						"return": { "name": "JSX.Element" }
					}
				},
				"description": "Function that renders each list item as a JSX element.\n@param index - The index of the item in the list\n@param item - The data item to render\n@param context - The context object containing the focused key and any additional data\n@param onFocus - A callback that is required to be called when the item component receives focus\n@returns JSX element representing the rendered item"
			}
		},
		"composes": ["Omit"]
	};
}));
//#endregion
//#region src/core/VirtualizedList/FlatVirtualizedList/index.ts
var init_FlatVirtualizedList = __esmMin((() => {
	init_FlatVirtualizedList$1();
}));
//#endregion
//#region src/core/VirtualizedList/GroupedVirtualizedList/GroupedVirtualizedList.module.css
var stickyRoot, stickyHeader, stickyRow, GroupedVirtualizedList_module_default;
var init_GroupedVirtualizedList_module = __esmMin((() => {
	stickyRoot = "_stickyRoot_1v88b_13";
	stickyHeader = "_stickyHeader_1v88b_33";
	stickyRow = "_stickyRow_1v88b_24";
	GroupedVirtualizedList_module_default = {
		stickyRoot,
		stickyHeader,
		stickyRow
	};
}));
//#endregion
//#region src/core/VirtualizedList/GroupedVirtualizedList/GroupedVirtualizedList.tsx
/**
* A generic grouped virtualized list component built on top of react-virtuoso's Virtuoso.
* Provides keyboard navigation (including group headers) and virtualized rendering for
* performance with large lists.
*
* Group headers use a dedicated `Header` type, while child items use `Item`.
* Internally, a unified flat array interleaving headers and items is built using
* `flatMap` so that the keyboard-navigation hook can treat every focusable element
* uniformly.
*
* @template Header - The type of group header data
* @template Item - The type of data items in the list
* @template Context - The type of additional context data passed to items
*/
function GroupedVirtualizedList(props) {
	const { getItemComponent, groups, getGroupHeaderComponent, isItemFocusable, isGroupHeaderFocusable, getItemKey, getHeaderKey, scrollHandleRef, renderStickyHeader, ...restProps } = props;
	const [headerHeight, setHeaderHeight] = (0, import_react$11.useState)(0);
	const flatEntries = (0, import_react$11.useMemo)(() => groups.flatMap((group) => [{ header: group.header }, ...group.items.map((item) => ({ item }))]), [groups]);
	const flatIndexToGroupIndex = (0, import_react$11.useMemo)(() => groups.flatMap((group, groupIdx) => new Array(1 + group.items.length).fill(groupIdx)), [groups]);
	const getScrollPaddingTop = (0, import_react$11.useCallback)((index) => {
		const entry = flatEntries[index];
		return entry && "header" in entry ? 0 : headerHeight;
	}, [flatEntries, headerHeight]);
	const wrappedGetEntryKey = (0, import_react$11.useCallback)((entry) => "header" in entry ? getHeaderKey(entry.header) : getItemKey(entry.item), [getHeaderKey, getItemKey]);
	const wrappedIsEntryFocusable = (0, import_react$11.useCallback)((entry) => "header" in entry ? isGroupHeaderFocusable(entry.header) : isItemFocusable(entry.item), [isGroupHeaderFocusable, isItemFocusable]);
	const { onFocusForGetItemComponent, scrollerRef: hookScrollerRef, ...virtuosoProps } = useVirtualizedList({
		...restProps,
		items: flatEntries,
		isItemFocusable: wrappedIsEntryFocusable,
		getItemKey: wrappedGetEntryKey,
		scrollPaddingTop: getScrollPaddingTop
	}, scrollHandleRef);
	const onFocusForItem = (0, import_react$11.useCallback)((item, e) => {
		onFocusForGetItemComponent({ item }, e);
	}, [onFocusForGetItemComponent]);
	const onFocusForHeader = (0, import_react$11.useCallback)((header, e) => {
		onFocusForGetItemComponent({ header }, e);
	}, [onFocusForGetItemComponent]);
	const itemContent = (0, import_react$11.useCallback)((flatIndex, _entry, context) => {
		const entry = flatEntries[flatIndex];
		const groupIndex = flatIndexToGroupIndex[flatIndex];
		if ("header" in entry) return getGroupHeaderComponent(groupIndex, entry.header, context, onFocusForHeader);
		const itemIndex = flatIndex - (groupIndex + 1);
		return getItemComponent(itemIndex, entry.item, context, onFocusForItem, groupIndex);
	}, [
		flatEntries,
		flatIndexToGroupIndex,
		getGroupHeaderComponent,
		getItemComponent,
		onFocusForItem,
		onFocusForHeader
	]);
	const renderedItemsRef = (0, import_react$11.useRef)([]);
	const overlayRef = (0, import_react$11.useRef)(null);
	const scrollerElRef = (0, import_react$11.useRef)(null);
	const [currentGroupIndex, setCurrentGroupIndex] = (0, import_react$11.useState)(0);
	const updateSticky = (0, import_react$11.useCallback)(() => {
		const scroller = scrollerElRef.current;
		if (!scroller || flatIndexToGroupIndex.length === 0) return;
		const scrollTop = scroller.scrollTop;
		const rendered = renderedItemsRef.current;
		let topIndex = rendered.length ? rendered[0].index : 0;
		let bestOffset = rendered.length ? rendered[0].offset : 0;
		for (const item of rendered) if (item.offset <= scrollTop + 1 && item.offset > bestOffset) {
			bestOffset = item.offset;
			topIndex = item.index;
		}
		const groupIndex = flatIndexToGroupIndex[topIndex] ?? 0;
		setCurrentGroupIndex((prev) => prev === groupIndex ? prev : groupIndex);
	}, [flatIndexToGroupIndex]);
	const handleItemsRendered = (0, import_react$11.useCallback)((items) => {
		renderedItemsRef.current = items.map((item) => ({
			index: item.index,
			offset: item.offset
		}));
		updateSticky();
	}, [updateSticky]);
	const handleScrollerRef = (0, import_react$11.useCallback)((element) => {
		hookScrollerRef?.(element);
		scrollerElRef.current = element instanceof HTMLElement ? element : null;
	}, [hookScrollerRef]);
	const handleOverlayWheel = (0, import_react$11.useCallback)((e) => {
		const el = scrollerElRef.current;
		if (el) el.scrollTop += e.deltaY * (e.deltaMode === 1 ? 16 : 1);
	}, []);
	(0, import_react$11.useLayoutEffect)(() => {
		if (overlayRef.current) setHeaderHeight(overlayRef.current.offsetHeight);
	}, [currentGroupIndex, groups]);
	(0, import_react$11.useEffect)(() => {
		updateSticky();
	}, [groups, updateSticky]);
	const stickyGroupIndex = Math.min(currentGroupIndex, groups.length - 1);
	const stickyHeader = renderStickyHeader && stickyGroupIndex >= 0 ? renderStickyHeader(stickyGroupIndex, groups[stickyGroupIndex].header, virtuosoProps.context) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)("div", {
		className: GroupedVirtualizedList_module_default.stickyRoot,
		children: [stickyHeader != null && /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)("div", {
			className: GroupedVirtualizedList_module_default.stickyHeader,
			ref: overlayRef,
			onWheel: handleOverlayWheel,
			children: stickyHeader
		}), /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(es, {
			itemContent,
			data: flatEntries,
			...virtuosoProps,
			components: { Item: StickyRowItem },
			scrollerRef: handleScrollerRef,
			itemsRendered: handleItemsRendered,
			onScroll: updateSticky
		})]
	});
}
var import_react$11, import_jsx_runtime$9, StickyRowItem;
var init_GroupedVirtualizedList$1 = __esmMin((() => {
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist();
	init_virtualized_list();
	init_GroupedVirtualizedList_module();
	import_jsx_runtime$9 = require_jsx_runtime();
	StickyRowItem = import_react$11.forwardRef(function StickyRowItem({ item, context, children, ...props }, ref) {
		const isHeader = item != null && typeof item === "object" && "header" in item;
		return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)("div", {
			...props,
			ref,
			className: isHeader ? GroupedVirtualizedList_module_default.stickyRow : void 0,
			children
		});
	});
	GroupedVirtualizedList.__docgenInfo = {
		"description": "A generic grouped virtualized list component built on top of react-virtuoso's Virtuoso.\nProvides keyboard navigation (including group headers) and virtualized rendering for\nperformance with large lists.\n\nGroup headers use a dedicated `Header` type, while child items use `Item`.\nInternally, a unified flat array interleaving headers and items is built using\n`flatMap` so that the keyboard-navigation hook can treat every focusable element\nuniformly.\n\n@template Header - The type of group header data\n@template Item - The type of data items in the list\n@template Context - The type of additional context data passed to items",
		"methods": [],
		"displayName": "GroupedVirtualizedList",
		"props": {
			"scrollHandleRef": {
				"required": false,
				"tsType": {
					"name": "ReactRefCallback",
					"raw": "React.RefCallback<VirtuosoHandle>",
					"elements": [{ "name": "VirtuosoHandle" }]
				},
				"description": "Optional ref to the underlying Virtuoso handle, for imperative scrolling."
			},
			"groups": {
				"required": true,
				"tsType": {
					"name": "Array",
					"elements": [{
						"name": "Group",
						"elements": [{ "name": "Header" }, { "name": "Item" }],
						"raw": "Group<Header, Item>"
					}],
					"raw": "Group<Header, Item>[]"
				},
				"description": "The groups to display in the virtualized list.\nEach group has a header and an array of child items."
			},
			"getItemKey": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(item: Item) => string",
					"signature": {
						"arguments": [{
							"type": { "name": "Item" },
							"name": "item"
						}],
						"return": { "name": "string" }
					}
				},
				"description": "Function to get a unique key for an item.\n@param item - The item to get the key for\n@returns A unique key string"
			},
			"getHeaderKey": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(header: Header) => string",
					"signature": {
						"arguments": [{
							"type": { "name": "Header" },
							"name": "header"
						}],
						"return": { "name": "string" }
					}
				},
				"description": "Function to get a unique key for a group header.\n@param header - The header to get the key for\n@returns A unique key string"
			},
			"isItemFocusable": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(item: Item) => boolean",
					"signature": {
						"arguments": [{
							"type": { "name": "Item" },
							"name": "item"
						}],
						"return": { "name": "boolean" }
					}
				},
				"description": "Function to determine if an item can receive focus during keyboard navigation.\n@param item - The item to check\n@returns true if the item can be focused"
			},
			"isGroupHeaderFocusable": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(header: Header) => boolean",
					"signature": {
						"arguments": [{
							"type": { "name": "Header" },
							"name": "header"
						}],
						"return": { "name": "boolean" }
					}
				},
				"description": "Function to determine if a group header can receive focus during keyboard navigation.\n@param header - The header to check\n@returns true if the header can be focused"
			},
			"getGroupHeaderComponent": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(\n    groupIndex: number,\n    header: Header,\n    context: VirtualizedListContext<Context>,\n    onFocus: (header: Header, e: React.FocusEvent) => void,\n) => JSX.Element",
					"signature": {
						"arguments": [
							{
								"type": { "name": "number" },
								"name": "groupIndex"
							},
							{
								"type": { "name": "Header" },
								"name": "header"
							},
							{
								"type": {
									"name": "signature",
									"type": "object",
									"raw": "{\n    /** The key of item that should have tabIndex == 0 */\n    tabIndexKey?: string;\n    /** Whether an item in the list is currently focused */\n    focused: boolean;\n    /** Additional context data passed from the parent component */\n    context: Context;\n}",
									"signature": { "properties": [
										{
											"key": "tabIndexKey",
											"value": {
												"name": "string",
												"required": false
											},
											"description": "The key of item that should have tabIndex == 0"
										},
										{
											"key": "focused",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether an item in the list is currently focused"
										},
										{
											"key": "context",
											"value": {
												"name": "Context",
												"required": true
											},
											"description": "Additional context data passed from the parent component"
										}
									] }
								},
								"name": "context"
							},
							{
								"type": {
									"name": "signature",
									"type": "function",
									"raw": "(header: Header, e: React.FocusEvent) => void",
									"signature": {
										"arguments": [{
											"type": { "name": "Header" },
											"name": "header"
										}, {
											"type": {
												"name": "ReactFocusEvent",
												"raw": "React.FocusEvent"
											},
											"name": "e"
										}],
										"return": { "name": "void" }
									}
								},
								"name": "onFocus"
							}
						],
						"return": { "name": "JSX.Element" }
					}
				},
				"description": "Function that renders the group header as a JSX element.\n@param groupIndex - The index of the group in the list\n@param header - The header data for this group\n@param context - The context object containing the focused key and any additional data\n@param onFocus - A callback that must be called when the group header component receives\n  focus. Should be invoked as `onFocus(header, e)`.\n@returns JSX element representing the rendered group header"
			},
			"getItemComponent": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(\n    index: number,\n    item: Item,\n    context: VirtualizedListContext<Context>,\n    onFocus: (item: Item, e: React.FocusEvent) => void,\n    groupIndex: number,\n) => JSX.Element",
					"signature": {
						"arguments": [
							{
								"type": { "name": "number" },
								"name": "index"
							},
							{
								"type": { "name": "Item" },
								"name": "item"
							},
							{
								"type": {
									"name": "signature",
									"type": "object",
									"raw": "{\n    /** The key of item that should have tabIndex == 0 */\n    tabIndexKey?: string;\n    /** Whether an item in the list is currently focused */\n    focused: boolean;\n    /** Additional context data passed from the parent component */\n    context: Context;\n}",
									"signature": { "properties": [
										{
											"key": "tabIndexKey",
											"value": {
												"name": "string",
												"required": false
											},
											"description": "The key of item that should have tabIndex == 0"
										},
										{
											"key": "focused",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether an item in the list is currently focused"
										},
										{
											"key": "context",
											"value": {
												"name": "Context",
												"required": true
											},
											"description": "Additional context data passed from the parent component"
										}
									] }
								},
								"name": "context"
							},
							{
								"type": {
									"name": "signature",
									"type": "function",
									"raw": "(item: Item, e: React.FocusEvent) => void",
									"signature": {
										"arguments": [{
											"type": { "name": "Item" },
											"name": "item"
										}, {
											"type": {
												"name": "ReactFocusEvent",
												"raw": "React.FocusEvent"
											},
											"name": "e"
										}],
										"return": { "name": "void" }
									}
								},
								"name": "onFocus"
							},
							{
								"type": { "name": "number" },
								"name": "groupIndex"
							}
						],
						"return": { "name": "JSX.Element" }
					}
				},
				"description": "Function that renders each list item as a JSX element.\n@param index - The index of the item in the list (relative to the entire list, not the group)\n@param item - The data item to render\n@param context - The context object containing the focused key and any additional data\n@param onFocus - A callback that is required to be called when the item component receives focus\n@param groupIndex - The index of the group this item belongs to\n@returns JSX element representing the rendered item"
			},
			"renderStickyHeader": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(groupIndex: number, header: Header, context: VirtualizedListContext<Context>) => ReactNode",
					"signature": {
						"arguments": [
							{
								"type": { "name": "number" },
								"name": "groupIndex"
							},
							{
								"type": { "name": "Header" },
								"name": "header"
							},
							{
								"type": {
									"name": "signature",
									"type": "object",
									"raw": "{\n    /** The key of item that should have tabIndex == 0 */\n    tabIndexKey?: string;\n    /** Whether an item in the list is currently focused */\n    focused: boolean;\n    /** Additional context data passed from the parent component */\n    context: Context;\n}",
									"signature": { "properties": [
										{
											"key": "tabIndexKey",
											"value": {
												"name": "string",
												"required": false
											},
											"description": "The key of item that should have tabIndex == 0"
										},
										{
											"key": "focused",
											"value": {
												"name": "boolean",
												"required": true
											},
											"description": "Whether an item in the list is currently focused"
										},
										{
											"key": "context",
											"value": {
												"name": "Context",
												"required": true
											},
											"description": "Additional context data passed from the parent component"
										}
									] }
								},
								"name": "context"
							}
						],
						"return": { "name": "ReactNode" }
					}
				},
				"description": "Optional renderer for a \"pinned\" header that stays fixed at the top of the scroll\nviewport, reflecting the group the user is currently scrolled within.\n\nList rows — including real group headers — are virtualized and unmount once scrolled out\nof the render window, so a CSS `position: sticky` header would disappear partway through a\ntall group. This header is rendered OUTSIDE the virtualized stream, so it never unmounts.\n\nThe real header rows remain the focusable, accessible elements driving keyboard navigation\nand screen-reader output; this overlay must therefore be purely presentational and is\nhidden from assistive technology by the caller.\n\n@param groupIndex - The index of the group currently pinned at the top\n@param header - The header data for that group\n@param context - The list context, including any additional context data\n@returns The presentational pinned header, or `null`/`undefined` to render nothing"
			}
		},
		"composes": ["Omit"]
	};
}));
//#endregion
//#region src/core/VirtualizedList/GroupedVirtualizedList/index.ts
var init_GroupedVirtualizedList = __esmMin((() => {
	init_GroupedVirtualizedList$1();
}));
//#endregion
//#region src/core/VirtualizedList/accessbility.ts
function getContainerAccessibleProps(pattern, size) {
	switch (pattern) {
		case "listbox": return { role: "listbox" };
		case "treegrid": return {
			"role": "treegrid",
			"aria-rowcount": size
		};
	}
}
function getItemAccessibleProps(pattern, index, listSizeOrIndexInGroup) {
	switch (pattern) {
		case "listbox": return {
			"role": "option",
			"aria-posinset": index + 1,
			"aria-setsize": listSizeOrIndexInGroup
		};
		case "treegrid": return {
			"role": "row",
			"aria-level": 2,
			"aria-rowindex": index + 1,
			"aria-posinset": listSizeOrIndexInGroup + 1
		};
	}
}
/**
* Returns the ARIA props to spread onto a group header row element inside a `treegrid`.
*
* Group headers are rendered at `aria-level="1"` and act as the parent nodes for their
* child item rows (`aria-level="2"`).
*
* @param index - The 0-based index of this row in the full flat treegrid row sequence (headers + items), used to compute `aria-rowindex`.
* @param groupIndex - The 0-based index of this group among all groups, used to compute `aria-posinset`.
* @param groupSize - The total number of items in the group, set as `aria-setsize`.
* @returns ARIA props for a group header `row` at level 1.
*/
function getGroupHeaderAccessibleProps(index, groupIndex, groupSize) {
	return {
		"role": "row",
		"aria-level": 1,
		"aria-posinset": groupIndex + 1,
		"aria-rowindex": index + 1,
		"aria-setsize": groupSize
	};
}
var init_accessbility = __esmMin((() => {}));
//#endregion
//#region src/core/VirtualizedList/index.ts
var init_VirtualizedList = __esmMin((() => {
	init_FlatVirtualizedList();
	init_GroupedVirtualizedList();
	init_accessbility();
	init_dist();
})), __defProp, __defProps, __getOwnPropDescs, __getOwnPropSymbols, __hasOwnProp, __propIsEnum, __defNormalProp, __spreadValues, __spreadProps, _AxisModifier, AxisModifier, RestrictToVerticalAxis, _SnapModifier;
var init_modifiers = __esmMin((() => {
	init_abstract();
	__defProp = Object.defineProperty;
	__defProps = Object.defineProperties;
	__getOwnPropDescs = Object.getOwnPropertyDescriptors;
	__getOwnPropSymbols = Object.getOwnPropertySymbols;
	__hasOwnProp = Object.prototype.hasOwnProperty;
	__propIsEnum = Object.prototype.propertyIsEnumerable;
	__defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__spreadValues = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		if (__getOwnPropSymbols) {
			for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		return a;
	};
	__spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
	_AxisModifier = class _AxisModifier extends Modifier {
		/**
		* Applies the axis restriction to the drag operation.
		*
		* @param operation - The current drag operation
		* @returns The modified transform with the axis restriction applied
		*/
		apply({ transform }) {
			if (!this.options) return transform;
			const { axis, value } = this.options;
			return __spreadProps(__spreadValues({}, transform), { [axis]: value });
		}
	};
	/**
	* Creates a configured instance of the AxisModifier.
	*
	* @param options - The axis restriction options
	* @returns A configured AxisModifier instance
	*/
	_AxisModifier.configure = configurator(_AxisModifier);
	AxisModifier = _AxisModifier;
	RestrictToVerticalAxis = AxisModifier.configure({
		axis: "x",
		value: 0
	});
	AxisModifier.configure({
		axis: "y",
		value: 0
	});
	_SnapModifier = class _SnapModifier extends Modifier {
		/**
		* Applies the snap grid to the drag operation.
		*
		* @param operation - The current drag operation
		* @returns The modified transform with coordinates snapped to the grid
		*/
		apply({ transform }) {
			var _a;
			const { size = 20 } = (_a = this.options) != null ? _a : {};
			const x = typeof size === "number" ? size : size.x;
			const y = typeof size === "number" ? size : size.y;
			return __spreadProps(__spreadValues({}, transform), {
				x: Math.ceil(transform.x / x) * x,
				y: Math.ceil(transform.y / y) * y
			});
		}
	};
	/**
	* Creates a configured instance of the SnapModifier.
	*
	* @param options - The snap grid options
	* @returns A configured SnapModifier instance
	*/
	_SnapModifier.configure = configurator(_SnapModifier);
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderView.module.css
var header, keyboardActive, container, menu, notificationDecoration, chevron, unread, title, firstHeader, lastHeader, dropTarget, dropTargetBottom, dropTargetTop, dragging, dragSource, stickyBackground, RoomListSectionHeaderView_module_default;
var init_RoomListSectionHeaderView_module = __esmMin((() => {
	header = "_header_15h19_9";
	keyboardActive = "_keyboardActive_15h19_26";
	container = "_container_15h19_34";
	menu = "_menu_15h19_38";
	notificationDecoration = "_notificationDecoration_15h19_44";
	chevron = "_chevron_15h19_49";
	unread = "_unread_15h19_71";
	title = "_title_15h19_92";
	firstHeader = "_firstHeader_15h19_99";
	lastHeader = "_lastHeader_15h19_103";
	dropTarget = "_dropTarget_15h19_107";
	dropTargetBottom = "_dropTargetBottom_15h19_111";
	dropTargetTop = "_dropTargetTop_15h19_112";
	dragging = "_dragging_15h19_133";
	dragSource = "_dragSource_15h19_139";
	stickyBackground = "_stickyBackground_15h19_148";
	RoomListSectionHeaderView_module_default = {
		header,
		keyboardActive,
		container,
		menu,
		notificationDecoration,
		chevron,
		unread,
		title,
		firstHeader,
		lastHeader,
		dropTarget,
		dropTargetBottom,
		dropTargetTop,
		dragging,
		dragSource,
		stickyBackground
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderContent.tsx
function MenuComponent({ vm }) {
	const [open, setOpen] = (0, import_react$10.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Menu, {
		open,
		onOpenChange: setOpen,
		title: _t$1("room_list|section_header|more_options"),
		showTitle: false,
		align: "start",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(IconButton, {
			className: RoomListSectionHeaderView_module_default.menu,
			tooltip: _t$1("room_list|section_header|more_options"),
			"aria-label": _t$1("room_list|section_header|more_options"),
			size: "24px",
			style: { padding: "2px" },
			color: "var(--cpd-color-icon-primary)",
			children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(overflow_horizontal_default, { fill: "var(--cpd-color-icon-primary)" })
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(MenuItem, {
				hideChevron: true,
				Icon: edit_default,
				label: _t$1("room_list|section_header|edit_section"),
				onSelect: () => vm.editSection(),
				onClick: (evt) => evt.stopPropagation()
			}), /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(MenuItem, {
				hideChevron: true,
				Icon: delete_default,
				label: _t$1("room_list|section_header|remove_section"),
				onSelect: () => vm.removeSection(),
				onClick: (evt) => evt.stopPropagation()
			})]
		})
	});
}
var import_react$10, import_classnames$5, import_jsx_runtime$8, RoomListSectionHeaderContent;
var init_RoomListSectionHeaderContent = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_chevron_right();
	import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_dist$4();
	init_icons();
	init_viewmodel();
	init_i18n();
	init_Flex();
	init_RoomListSectionHeaderView_module();
	init_RoomListItemView();
	import_jsx_runtime$8 = require_jsx_runtime();
	RoomListSectionHeaderContent = (0, import_react$10.memo)(function RoomListSectionHeaderContent({ vm, isDragging = false }) {
		const { title, displaySectionMenu, notification, isExpanded } = useViewModel(vm);
		return /* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)(Flex, {
			className: (0, import_classnames$5.default)(RoomListSectionHeaderView_module_default.container, { [RoomListSectionHeaderView_module_default.dragging]: isDragging }),
			align: "center",
			justify: "space-between",
			gap: "var(--cpd-space-2x)",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)(Flex, {
					align: "center",
					gap: "var(--cpd-space-0-5x)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(chevron_right_default, {
						className: RoomListSectionHeaderView_module_default.chevron,
						width: "24px",
						height: "24px",
						fill: "var(--cpd-color-icon-secondary)"
					}), /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("span", {
						className: RoomListSectionHeaderView_module_default.title,
						children: title
					})]
				}),
				!isExpanded && notification && /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("div", {
					className: RoomListSectionHeaderView_module_default.notificationDecoration,
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(NotificationDecoration, { ...notification })
				}),
				displaySectionMenu && !isDragging && /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(MenuComponent, { vm })
			]
		});
	});
	RoomListSectionHeaderContent.__docgenInfo = {
		"description": "The inner content of a section header: chevron, title, and menu (or static menu icon when dragging).\nUsed both inside the full {@link RoomListSectionHeaderView} and inside the drag overlay.",
		"methods": [],
		"displayName": "RoomListSectionHeaderContent",
		"props": {
			"vm": {
				"required": true,
				"tsType": {
					"name": "intersection",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
					"elements": [{
						"name": "signature",
						"type": "object",
						"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
						"signature": { "properties": [{
							"key": "getSnapshot",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "() => Snapshot",
								"signature": {
									"arguments": [],
									"return": { "name": "RoomListSectionHeaderViewSnapshot" }
								},
								"required": true
							},
							"description": "The current snapshot of the view model."
						}, {
							"key": "subscribe",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "(listener: () => void) => () => void",
								"signature": {
									"arguments": [{
										"type": {
											"name": "signature",
											"type": "function",
											"raw": "() => void",
											"signature": {
												"arguments": [],
												"return": { "name": "void" }
											}
										},
										"name": "listener"
									}],
									"return": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									}
								},
								"required": true
							},
							"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
						}] }
					}, {
						"name": "signature",
						"type": "object",
						"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
						"signature": { "properties": [{
							"key": {
								"name": "RoomListSectionHeaderActions",
								"required": true
							},
							"value": { "name": "unknown" }
						}] }
					}]
				},
				"description": "The section header view model"
			},
			"isDragging": {
				"required": false,
				"tsType": { "name": "boolean" },
				"description": "Whether the section header is being dragged — hides the interactive menu when true",
				"defaultValue": {
					"value": "false",
					"computed": false
				}
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/dragAndDrop.ts
/**
* Type guard: true when the drag source is a section header. Narrows to {@link SectionDragData}.
*/
function isSectionDragData(data) {
	return data?.type === "section";
}
var init_dragAndDrop = __esmMin((() => {}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListSectionHeaderView.tsx
var import_react$9, import_classnames$4, import_jsx_runtime$7, RoomListSectionHeaderView;
var init_RoomListSectionHeaderView$1 = __esmMin((() => {
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_react();
	init_dist$5();
	init_dom();
	init_modifiers();
	init_viewmodel();
	init_RoomListSectionHeaderView_module();
	init_i18nContext();
	init_VirtualizedList();
	init_RoomListSectionHeaderContent();
	init_dragAndDrop();
	import_jsx_runtime$7 = require_jsx_runtime();
	RoomListSectionHeaderView = (0, import_react$9.memo)(function RoomListSectionHeaderView({ vm, isFocused, onFocus, indexInList, sectionIndex, sectionCount, roomCountInSection }) {
		const { translate: _t } = useI18n();
		const { id, title, isExpanded, isUnread, canBeReordered } = useViewModel(vm);
		const isLastSection = sectionIndex === sectionCount - 1;
		const { ref: draggableRef, handleRef, isDragSource } = useDraggable({
			id,
			data: {
				type: "section",
				index: sectionIndex
			},
			plugins: [Feedback.configure({ feedback: "clone" })],
			modifiers: [RestrictToVerticalAxis],
			disabled: !canBeReordered
		});
		const { source } = useDragOperation();
		const draggedData = source?.data;
		const isDraggingSectionSource = isSectionDragData(draggedData);
		const { ref: droppableRef, isDropTarget } = useDroppable({
			id,
			data: {
				type: "section",
				index: sectionIndex
			},
			disabled: isDragSource || isDraggingSectionSource && !canBeReordered
		});
		const isDraggingRoom = isDropTarget && draggedData?.type === "room";
		const isDraggingSection = isDropTarget && isDraggingSectionSource;
		const sourceSectionIndex = isSectionDragData(draggedData) ? draggedData.index : -1;
		const isSourceAbove = isDraggingSection && sourceSectionIndex > sectionIndex;
		const hasBottomBorder = isDraggingSection && !isSourceAbove;
		const hasTopBorder = isDraggingSection && isSourceAbove;
		const lastExpandedRef = (0, import_react$9.useRef)(isExpanded);
		if (!isDragSource) lastExpandedRef.current = isExpanded;
		const ariaExpanded = isDragSource ? lastExpandedRef.current : isExpanded;
		const internalRef = (0, import_react$9.useRef)(null);
		const buttonRef = useMergeRefs([
			...canBeReordered ? [draggableRef, handleRef] : [],
			droppableRef,
			internalRef
		]);
		(0, import_react$9.useEffect)(() => {
			if (isFocused) internalRef.current?.focus({ preventScroll: true });
		}, [isFocused]);
		const [keyboardActive, setKeyboardActive] = (0, import_react$9.useState)(false);
		const onHeaderFocus = (e) => {
			onFocus(id, e);
			if (!e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible")) setKeyboardActive(true);
		};
		const onHeaderBlur = (e) => {
			if (!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]")) setKeyboardActive(false);
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
			"aria-expanded": ariaExpanded,
			...getGroupHeaderAccessibleProps(indexInList, sectionIndex, roomCountInSection),
			children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
				role: "gridcell",
				"aria-expanded": ariaExpanded,
				children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("button", {
					ref: buttonRef,
					type: "button",
					className: (0, import_classnames$4.default)(RoomListSectionHeaderView_module_default.header, {
						[RoomListSectionHeaderView_module_default.keyboardActive]: keyboardActive,
						[RoomListSectionHeaderView_module_default.firstHeader]: sectionIndex === 0,
						[RoomListSectionHeaderView_module_default.lastHeader]: !isExpanded && isLastSection,
						[RoomListSectionHeaderView_module_default.unread]: isUnread,
						[RoomListSectionHeaderView_module_default.dragSource]: isDragSource,
						[RoomListSectionHeaderView_module_default.dropTarget]: isDraggingRoom,
						[RoomListSectionHeaderView_module_default.dropTargetBottom]: hasBottomBorder,
						[RoomListSectionHeaderView_module_default.dropTargetTop]: hasTopBorder
					}),
					onClick: () => !isDragSource && vm.onClick(),
					onKeyDown: (e) => {
						if (e.code === "ArrowRight" && !isExpanded || e.code === "ArrowLeft" && isExpanded) {
							e.preventDefault();
							e.stopPropagation();
							vm.onClick();
						} else if (e.code === "ArrowRight" && isExpanded && roomCountInSection > 0) {
							e.preventDefault();
							e.stopPropagation();
							e.currentTarget.dispatchEvent(new KeyboardEvent("keydown", {
								code: "ArrowDown",
								key: "ArrowDown",
								bubbles: true
							}));
						}
					},
					"aria-expanded": ariaExpanded,
					onFocus: onHeaderFocus,
					onBlur: onHeaderBlur,
					tabIndex: isFocused ? 0 : -1,
					"aria-label": isUnread ? _t("room_list|section_header|toggle_unread", { section: title }) : _t("room_list|section_header|toggle", { section: title }),
					children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(RoomListSectionHeaderContent, { vm })
				})
			})
		});
	});
	RoomListSectionHeaderView.__docgenInfo = {
		"description": "A collapsible section header in the room list.\n\nRenders a button that displays the section title alongside a chevron icon\nindicating the current expand/collapse state. Clicking the header toggles\nthe section's expanded state via the view model.\n\n@example\n```tsx\n<RoomListSectionHeaderView\n  vm={sectionHeaderViewModel}\n  isFocused={isHeaderFocused}\n  onFocus={() => setFocusedHeader(sectionId)}\n  sectionIndex={index}\n  sectionCount={totalSections}\n  roomCountInSection={roomCount}\n/>\n```",
		"methods": [],
		"displayName": "RoomListSectionHeaderView"
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/RoomListStickySectionHeaderView.tsx
var import_react$8, import_classnames$3, import_jsx_runtime$6, RoomListStickySectionHeaderView;
var init_RoomListStickySectionHeaderView = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_viewmodel();
	init_RoomListSectionHeaderView_module();
	init_RoomListSectionHeaderContent();
	import_jsx_runtime$6 = require_jsx_runtime();
	RoomListStickySectionHeaderView = (0, import_react$8.memo)(function RoomListStickySectionHeaderView({ vm, isFirst }) {
		const { isExpanded, isUnread } = useViewModel(vm);
		return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: RoomListSectionHeaderView_module_default.stickyBackground,
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("button", {
				type: "button",
				className: (0, import_classnames$3.default)(RoomListSectionHeaderView_module_default.header, {
					[RoomListSectionHeaderView_module_default.firstHeader]: isFirst,
					[RoomListSectionHeaderView_module_default.unread]: isUnread
				}),
				"aria-expanded": isExpanded,
				onClick: vm.onClick,
				tabIndex: -1,
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(RoomListSectionHeaderContent, { vm })
			})
		});
	});
	RoomListStickySectionHeaderView.__docgenInfo = {
		"description": "A clone of {@link RoomListSectionHeaderView} used as the pinned \"current section\" overlay at the\ntop of the virtualized room list.\n\nIt is mouse-interactive — clicking toggles the section and hovering highlights it — but it is\nhidden from assistive technology (`aria-hidden`) and removed from the tab order (`tabIndex={-1}`).\nThe real header rows inside the list remain the focusable, keyboard-navigable, screen-reader\nelements, so the overlay is a mouse convenience that never duplicates anything for AT. It reuses\n{@link RoomListSectionHeaderContent} so the chevron, title, notification decoration and section\nmenu stay identical to the real header; it only omits the real header's drag-and-drop wiring.",
		"methods": [],
		"displayName": "RoomListStickySectionHeaderView"
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/index.ts
var init_RoomListSectionHeaderView = __esmMin((() => {
	init_RoomListSectionHeaderView$1();
	init_RoomListSectionHeaderContent();
	init_RoomListStickySectionHeaderView();
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderDragOverlayView/RoomListSectionHeaderDragOverlayView.module.css
var dragOverlay$1, RoomListSectionHeaderDragOverlayView_module_default;
var init_RoomListSectionHeaderDragOverlayView_module = __esmMin((() => {
	dragOverlay$1 = "_dragOverlay_4fnba_9";
	RoomListSectionHeaderDragOverlayView_module_default = { dragOverlay: dragOverlay$1 };
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderDragOverlayView/RoomListSectionHeaderDragOverlayView.tsx
var import_react$7, import_classnames$2, import_jsx_runtime$5, RoomListSectionHeaderDragOverlayView;
var init_RoomListSectionHeaderDragOverlayView$1 = __esmMin((() => {
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_RoomListSectionHeaderContent();
	init_RoomListSectionHeaderView_module();
	init_RoomListSectionHeaderDragOverlayView_module();
	import_jsx_runtime$5 = require_jsx_runtime();
	RoomListSectionHeaderDragOverlayView = (0, import_react$7.memo)(function RoomListSectionHeaderDragOverlayView({ vm }) {
		return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			"aria-hidden": true,
			className: (0, import_classnames$2.default)(RoomListSectionHeaderView_module_default.header, RoomListSectionHeaderDragOverlayView_module_default.dragOverlay),
			children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(RoomListSectionHeaderContent, {
				vm,
				isDragging: true
			})
		});
	});
	RoomListSectionHeaderDragOverlayView.__docgenInfo = {
		"description": "Visual clone of a section header rendered inside the dnd drag overlay.\n\nReuses {@link RoomListSectionHeaderContent} for the inner layout so the\nfloating clone matches a real section header.",
		"methods": [],
		"displayName": "RoomListSectionHeaderDragOverlayView",
		"props": { "vm": {
			"required": true,
			"tsType": {
				"name": "intersection",
				"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
				"elements": [{
					"name": "signature",
					"type": "object",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
					"signature": { "properties": [{
						"key": "getSnapshot",
						"value": {
							"name": "signature",
							"type": "function",
							"raw": "() => Snapshot",
							"signature": {
								"arguments": [],
								"return": { "name": "RoomListSectionHeaderViewSnapshot" }
							},
							"required": true
						},
						"description": "The current snapshot of the view model."
					}, {
						"key": "subscribe",
						"value": {
							"name": "signature",
							"type": "function",
							"raw": "(listener: () => void) => () => void",
							"signature": {
								"arguments": [{
									"type": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									},
									"name": "listener"
								}],
								"return": {
									"name": "signature",
									"type": "function",
									"raw": "() => void",
									"signature": {
										"arguments": [],
										"return": { "name": "void" }
									}
								}
							},
							"required": true
						},
						"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
					}] }
				}, {
					"name": "signature",
					"type": "object",
					"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
					"signature": { "properties": [{
						"key": {
							"name": "RoomListSectionHeaderActions",
							"required": true
						},
						"value": { "name": "unknown" }
					}] }
				}]
			},
			"description": "The section header view model — same one used by the real section header"
		} }
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListSectionHeaderDragOverlayView/index.ts
var init_RoomListSectionHeaderDragOverlayView = __esmMin((() => {
	init_RoomListSectionHeaderDragOverlayView$1();
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemWrapper.tsx
/**
* Wraps RoomListItemView with the drag-and-drop functionality. This is only used for treegrid mode, as flat list items are not draggable.
*/
function DraggableWrapper(props) {
	const { ref: draggableRef, handleRef, isDragSource } = useDraggable({
		id: useViewModel(props.vm).id,
		data: { type: "room" },
		plugins: [Feedback.configure({ feedback: "clone" })],
		modifiers: [RestrictToVerticalAxis]
	});
	const dndRef = useMergeRefs([draggableRef, handleRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(RoomListItemView, {
		...props,
		ref: dndRef,
		isDragSource
	});
}
var import_react$6, import_jsx_runtime$4, RoomListItemWrapper;
var init_RoomListItemWrapper$1 = __esmMin((() => {
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_react();
	init_dom();
	init_modifiers();
	init_dist$5();
	init_RoomListItemView();
	init_VirtualizedList();
	init_viewmodel();
	import_jsx_runtime$4 = require_jsx_runtime();
	RoomListItemWrapper = (0, import_react$6.memo)(function RoomListItemWrapper({ roomIndex, roomCount, roomIndexInSection, isInFlatList, ...rest }) {
		if (isInFlatList) return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(RoomListItemView, {
			...rest,
			...getItemAccessibleProps("listbox", roomIndex, roomCount)
		});
		const isFirstInSection = roomIndexInSection === 0;
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			...getItemAccessibleProps("treegrid", roomIndex, roomIndexInSection),
			children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				role: "gridcell",
				"aria-selected": rest.isSelected,
				children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(DraggableWrapper, {
					...rest,
					onKeyDown: (e) => {
						if (e.code === "ArrowLeft" && isFirstInSection) {
							e.preventDefault();
							e.stopPropagation();
							e.currentTarget.dispatchEvent(new KeyboardEvent("keydown", {
								code: "ArrowUp",
								key: "ArrowUp",
								bubbles: true
							}));
						}
					}
				})
			})
		});
	});
	RoomListItemWrapper.__docgenInfo = {
		"description": "Wraps RoomListItemView with the correct accessibility and drag-and-drop props\nbased on whether the list is flat (listbox) or grouped (treegrid).",
		"methods": [],
		"displayName": "RoomListItemWrapper",
		"props": {
			"vm": {
				"required": true,
				"tsType": {
					"name": "intersection",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
					"elements": [{
						"name": "signature",
						"type": "object",
						"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
						"signature": { "properties": [{
							"key": "getSnapshot",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "() => Snapshot",
								"signature": {
									"arguments": [],
									"return": { "name": "RoomListItemViewSnapshot" }
								},
								"required": true
							},
							"description": "The current snapshot of the view model."
						}, {
							"key": "subscribe",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "(listener: () => void) => () => void",
								"signature": {
									"arguments": [{
										"type": {
											"name": "signature",
											"type": "function",
											"raw": "() => void",
											"signature": {
												"arguments": [],
												"return": { "name": "void" }
											}
										},
										"name": "listener"
									}],
									"return": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									}
								},
								"required": true
							},
							"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
						}] }
					}, {
						"name": "signature",
						"type": "object",
						"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
						"signature": { "properties": [{
							"key": {
								"name": "RoomListItemViewActions",
								"required": true
							},
							"value": { "name": "unknown" }
						}] }
					}]
				},
				"description": "The room item view model"
			},
			"isSelected": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the room is selected"
			},
			"isFocused": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the room should be focused"
			},
			"onFocus": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(roomId: string, e: React.FocusEvent) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "string" },
							"name": "roomId"
						}, {
							"type": {
								"name": "ReactFocusEvent",
								"raw": "React.FocusEvent"
							},
							"name": "e"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Callback when item receives focus"
			},
			"isFirstItem": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether this is the first item in the list"
			},
			"isLastItem": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether this is the last item in the list"
			},
			"renderAvatar": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(room: Room) => ReactNode",
					"signature": {
						"arguments": [{
							"type": { "name": "unknown" },
							"name": "room"
						}],
						"return": { "name": "ReactNode" }
					}
				},
				"description": "Function to render the room avatar"
			},
			"isDragSource": {
				"required": false,
				"tsType": { "name": "boolean" },
				"description": "Whether this item is the source of an active drag operation"
			},
			"ref": {
				"required": false,
				"tsType": {
					"name": "Ref",
					"elements": [{ "name": "Element" }],
					"raw": "Ref<Element>"
				},
				"description": ""
			},
			"roomIndex": {
				"required": true,
				"tsType": { "name": "number" },
				"description": "Index of this room in the list"
			},
			"roomIndexInSection": {
				"required": true,
				"tsType": { "name": "number" },
				"description": "Index of this room in its section"
			},
			"roomCount": {
				"required": true,
				"tsType": { "name": "number" },
				"description": "Total number of rooms in the list"
			},
			"isInFlatList": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the room list is displayed as a flat list"
			}
		},
		"composes": ["Omit"]
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/index.ts
var init_RoomListItemWrapper = __esmMin((() => {
	init_RoomListItemWrapper$1();
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemDragOverlayView/RoomListItemDragOverlayView.module.css
var dragOverlay, RoomListItemDragOverlayView_module_default;
var init_RoomListItemDragOverlayView_module = __esmMin((() => {
	dragOverlay = "_dragOverlay_1u76p_9";
	RoomListItemDragOverlayView_module_default = { dragOverlay };
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemDragOverlayView/RoomListItemDragOverlayView.tsx
var import_react$5, import_classnames$1, import_jsx_runtime$3, RoomListItemDragOverlayView;
var init_RoomListItemDragOverlayView$1 = __esmMin((() => {
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_Flex();
	init_RoomListItemView();
	init_RoomListItemView_module();
	init_RoomListItemDragOverlayView_module();
	import_jsx_runtime$3 = require_jsx_runtime();
	RoomListItemDragOverlayView = (0, import_react$5.memo)(function RoomListItemDragOverlayView({ vm, renderAvatar }) {
		return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Flex, {
			"aria-hidden": true,
			className: (0, import_classnames$1.default)(RoomListItemView_module_default.roomListItem, RoomListItemDragOverlayView_module_default.dragOverlay),
			gap: "var(--cpd-space-3x)",
			align: "stretch",
			children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(RoomListItemContent, {
				vm,
				renderAvatar,
				isDragging: true
			})
		});
	});
	RoomListItemDragOverlayView.__docgenInfo = {
		"description": "Visual clone of a room list item rendered inside the dnd drag overlay.\n\nReuses {@link RoomListItemContent} for the inner layout and adds the outer\nwrapper styles that the live list item normally provides (height, width,\ntypography), so the floating clone matches a real item.",
		"methods": [],
		"displayName": "RoomListItemDragOverlayView",
		"props": {
			"vm": {
				"required": true,
				"tsType": {
					"name": "intersection",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
					"elements": [{
						"name": "signature",
						"type": "object",
						"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
						"signature": { "properties": [{
							"key": "getSnapshot",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "() => Snapshot",
								"signature": {
									"arguments": [],
									"return": { "name": "RoomListItemViewSnapshot" }
								},
								"required": true
							},
							"description": "The current snapshot of the view model."
						}, {
							"key": "subscribe",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "(listener: () => void) => () => void",
								"signature": {
									"arguments": [{
										"type": {
											"name": "signature",
											"type": "function",
											"raw": "() => void",
											"signature": {
												"arguments": [],
												"return": { "name": "void" }
											}
										},
										"name": "listener"
									}],
									"return": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									}
								},
								"required": true
							},
							"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
						}] }
					}, {
						"name": "signature",
						"type": "object",
						"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
						"signature": { "properties": [{
							"key": {
								"name": "RoomListItemViewActions",
								"required": true
							},
							"value": { "name": "unknown" }
						}] }
					}]
				},
				"description": "The room item view model — same one used by the real list item"
			},
			"renderAvatar": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(room: Room) => ReactNode",
					"signature": {
						"arguments": [{
							"type": { "name": "unknown" },
							"name": "room"
						}],
						"return": { "name": "ReactNode" }
					}
				},
				"description": "Function to render the room avatar"
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemDragOverlayView/index.ts
var init_RoomListItemDragOverlayView = __esmMin((() => {
	init_RoomListItemDragOverlayView$1();
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListAccessibilityPlugin.ts
/**
* Create the visually-hidden `aria-live` region used to announce drag progress.
*
* @param politeness - `"polite"` for progress (start/over) updates, `"assertive"` for the terminal
*   drop/cancel confirmation so it interrupts any pending progress chatter and is announced reliably.
*/
function createLiveRegion(id, politeness = "polite") {
	const element = document.createElement("div");
	element.id = id;
	element.setAttribute("role", politeness === "assertive" ? "alert" : "status");
	element.setAttribute("aria-live", politeness);
	element.setAttribute("aria-atomic", "true");
	Object.assign(element.style, {
		position: "fixed",
		width: "1px",
		height: "1px",
		margin: "-1px",
		border: "0",
		padding: "0",
		overflow: "hidden",
		clip: "rect(0 0 0 0)",
		clipPath: "inset(100%)",
		whiteSpace: "nowrap"
	});
	return element;
}
/**
* Create the hidden element holding the keyboard drag instructions. Only referenced via
* `aria-describedby` (never announced), so `display: none` is enough to hide it.
*/
function createInstructions(id, text) {
	const element = document.createElement("div");
	element.id = id;
	element.style.display = "none";
	element.textContent = text;
	return element;
}
/**
* Configures {@link RoomListAccessibilityPlugin} for the room list and returns a `plugins`
* callback for `DragDropProvider`.
*
* It swaps dnd-kit's built-in Accessibility plugin (which adds the `aria-pressed` that
* VoiceOver reads as "selected") for {@link RoomListAccessibilityPlugin}, supplying it with
* localized announcements derived from the room list view model. The result is memoized so
* the plugin descriptor stays stable across renders and the plugin isn't torn down and
* recreated.
*/
function useRoomListAccessibilityPlugin(vm) {
	const { translate: _t } = useI18n();
	const getDragSourceName = (0, import_react$4.useCallback)((source) => {
		if (isSectionDragData(source.data)) return vm.getSectionHeaderViewModel(source.id).getSnapshot().title;
		return vm.getRoomItemViewModel(source.id)?.getSnapshot().name;
	}, [vm]);
	const announcements = (0, import_react$4.useMemo)(() => ({
		dragstart: ({ operation: { source } }) => {
			if (!source) return;
			const sourceName = getDragSourceName(source);
			if (sourceName === void 0) return;
			return _t("room_list|a11y|drag_start", { source: sourceName });
		},
		dragover: ({ operation: { source, target } }) => {
			if (!source) return;
			const sourceName = getDragSourceName(source);
			if (sourceName === void 0) return;
			if (isSectionDragData(source.data) && !target) return _t("room_list|a11y|drag_over_original", { source: sourceName });
			if (!target) return;
			const targetTitle = vm.getSectionHeaderViewModel(target.id).getSnapshot().title;
			if (isSectionDragData(source.data) && isSectionDragData(target.data)) return source.data.index > target.data.index ? _t("room_list|a11y|drag_over_before", {
				source: sourceName,
				target: targetTitle
			}) : _t("room_list|a11y|drag_over_after", {
				source: sourceName,
				target: targetTitle
			});
			return _t("room_list|a11y|drag_over", {
				source: sourceName,
				target: targetTitle
			});
		},
		dragend: ({ operation: { source, target }, canceled }) => {
			if (!source) return;
			if (canceled) return _t("room_list|a11y|drag_cancelled");
			const sourceName = getDragSourceName(source);
			if (sourceName === void 0) return;
			if (isSectionDragData(source.data) && !target) return _t("room_list|a11y|drag_end_original", { source: sourceName });
			if (!target) return;
			const targetTitle = vm.getSectionHeaderViewModel(target.id).getSnapshot().title;
			if (isSectionDragData(source.data) && isSectionDragData(target.data)) return source.data.index > target.data.index ? _t("room_list|a11y|drag_end_before", {
				source: sourceName,
				target: targetTitle
			}) : _t("room_list|a11y|drag_end_after", {
				source: sourceName,
				target: targetTitle
			});
			return _t("room_list|a11y|drag_end", {
				source: sourceName,
				target: targetTitle
			});
		}
	}), [
		vm,
		_t,
		getDragSourceName
	]);
	const instructions = _t("room_list|a11y|drag_instructions");
	return (0, import_react$4.useCallback)((defaults) => [...defaults.filter((plugin) => plugin !== Accessibility), configure(RoomListAccessibilityPlugin, {
		announcements,
		instructions
	})], [announcements, instructions]);
}
var import_react$4, RoomListAccessibilityPlugin;
var init_RoomListAccessibilityPlugin = __esmMin((() => {
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_abstract();
	init_dom();
	init_i18nContext();
	init_dragAndDrop();
	RoomListAccessibilityPlugin = class extends Plugin {
		liveRegion;
		assertiveRegion;
		instructions;
		unsubscribers = [];
		constructor(manager, options) {
			super(manager, options);
			const liveRegionId = crypto.randomUUID();
			const assertiveRegionId = crypto.randomUUID();
			const instructionsId = crypto.randomUUID();
			this.liveRegion = createLiveRegion(liveRegionId);
			this.assertiveRegion = createLiveRegion(assertiveRegionId, "assertive");
			document.body.append(this.liveRegion, this.assertiveRegion);
			const announcements = options?.announcements ?? {};
			for (const [eventName, getAnnouncement] of Object.entries(announcements)) {
				if (!getAnnouncement) continue;
				let unsubscribe;
				if (eventName === "dragend") unsubscribe = manager.monitor.addEventListener("dragend", (event) => {
					const message = getAnnouncement(event);
					this.announceAssertive(message);
				});
				else unsubscribe = manager.monitor.addEventListener(eventName, (event) => {
					this.announce(getAnnouncement(event));
				});
				this.unsubscribers.push(unsubscribe);
			}
			if (options?.instructions) {
				this.instructions = createInstructions(instructionsId, options.instructions);
				document.body.append(this.instructions);
				this.registerEffect(() => {
					if (!this.instructions) return;
					for (const draggable of this.manager.registry.draggables.value) {
						const activator = draggable.handle ?? draggable.element;
						if (activator && !activator.hasAttribute("aria-describedby")) activator.setAttribute("aria-describedby", instructionsId);
					}
				});
			}
		}
		announce(message) {
			if (!message || this.liveRegion.textContent === message) return;
			this.liveRegion.textContent = message;
		}
		/**
		* Announce a terminal message (drop confirmation / cancellation) in the assertive live region.
		*
		* Unlike the polite progress region, the drop happens with focus parked on the source element
		* and no focus change to trigger a re-read, so an assertive region is required for Chrome to
		* announce it. It also interrupts any still-pending "… will be dropped …" progress chatter.
		*/
		announceAssertive(message) {
			if (!message) return;
			this.assertiveRegion.textContent = "";
			this.assertiveRegion.textContent = message;
		}
		destroy() {
			super.destroy();
			for (const unsubscribe of this.unsubscribers) unsubscribe();
			this.unsubscribers.length = 0;
			this.liveRegion.remove();
			this.assertiveRegion.remove();
			this.instructions?.remove();
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/VirtualizedRoomListView.module.css
var roomList, VirtualizedRoomListView_module_default;
var init_VirtualizedRoomListView_module = __esmMin((() => {
	roomList = "_roomList_1pbt4_12";
	VirtualizedRoomListView_module_default = { roomList };
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/VirtualizedRoomListView.tsx
/**
* A virtualized list of rooms.
* This component provides efficient rendering of large room lists using virtualization,
* and renders RoomListItemView components for each room.
*
* @example
* ```tsx
* <VirtualizedRoomListView vm={roomListViewModel} renderAvatar={(room) => <Avatar room={room} />} />
* ```
*/
function VirtualizedRoomListView({ vm, renderAvatar, onKeyDown }) {
	const { translate: _t } = useI18n();
	const { roomListState, sections, isFlatList } = useViewModel(vm);
	const activeRoomIndex = roomListState.activeRoomIndex;
	const scrollToSectionTag = roomListState.scrollToSectionTag;
	const lastSpaceId = (0, import_react$3.useRef)(void 0);
	const lastFilterKeys = (0, import_react$3.useRef)(void 0);
	const virtuosoHandleRef = (0, import_react$3.useRef)(null);
	const setVirtuosoHandle = (0, import_react$3.useCallback)((handle) => {
		virtuosoHandleRef.current = handle;
	}, []);
	const foldScrollerRef = (0, import_react$3.useRef)(null);
	const foldObserverRef = (0, import_react$3.useRef)(null);
	const itemVisibilityRef = (0, import_react$3.useRef)(/* @__PURE__ */ new Map());
	const foldSyncRafRef = (0, import_react$3.useRef)(null);
	const lastReportedFoldIndex = (0, import_react$3.useRef)(-1);
	const reportFold = (0, import_react$3.useCallback)(() => {
		let fold = -1;
		for (const [el, isVisible] of itemVisibilityRef.current) {
			if (!isVisible) continue;
			const index = Number(el.dataset.itemIndex);
			if (Number.isFinite(index) && index > fold) fold = index;
		}
		if (fold !== lastReportedFoldIndex.current) {
			lastReportedFoldIndex.current = fold;
			vm.updateVisibleFold(fold);
		}
	}, [vm]);
	const onItemIntersection = (0, import_react$3.useCallback)((entries) => {
		for (const entry of entries) itemVisibilityRef.current.set(entry.target, entry.isIntersecting);
		reportFold();
	}, [reportFold]);
	const syncObservedItems = (0, import_react$3.useCallback)(() => {
		const scroller = foldScrollerRef.current;
		const observer = foldObserverRef.current;
		if (!scroller || !observer) return;
		const current = new Set(scroller.querySelectorAll("[data-item-index]"));
		for (const el of current) if (!itemVisibilityRef.current.has(el)) {
			observer.observe(el);
			itemVisibilityRef.current.set(el, false);
		}
		for (const el of itemVisibilityRef.current.keys()) if (!current.has(el)) {
			observer.unobserve(el);
			itemVisibilityRef.current.delete(el);
		}
		reportFold();
	}, [reportFold]);
	const scheduleSyncObservedItems = (0, import_react$3.useCallback)(() => {
		if (foldSyncRafRef.current !== null) return;
		foldSyncRafRef.current = requestAnimationFrame(() => {
			foldSyncRafRef.current = null;
			syncObservedItems();
		});
	}, [syncObservedItems]);
	const setScroller = (0, import_react$3.useCallback)((element) => {
		foldObserverRef.current?.disconnect();
		foldObserverRef.current = null;
		itemVisibilityRef.current.clear();
		lastReportedFoldIndex.current = -1;
		if (foldSyncRafRef.current !== null) {
			cancelAnimationFrame(foldSyncRafRef.current);
			foldSyncRafRef.current = null;
		}
		const scroller = element instanceof HTMLElement ? element : null;
		foldScrollerRef.current = scroller;
		if (scroller) {
			foldObserverRef.current = new IntersectionObserver(onItemIntersection, { root: scroller });
			scheduleSyncObservedItems();
		}
	}, [onItemIntersection, scheduleSyncObservedItems]);
	const roomIds = (0, import_react$3.useMemo)(() => sections.flatMap((section) => section.roomIds), [sections]);
	const roomCount = roomIds.length;
	const sectionCount = sections.length;
	const totalCount = roomCount + sectionCount;
	const groups = (0, import_react$3.useMemo)(() => sections.map((section) => ({
		header: section.id,
		items: section.roomIds
	})), [sections]);
	const mapEntryRangeToRoomRange = (0, import_react$3.useCallback)((startEntry, endEntry) => {
		let start;
		let end;
		let headerEntry = 0;
		let roomsBefore = 0;
		for (const section of sections) {
			const lastEntry = headerEntry + section.roomIds.length;
			if (start === void 0 && startEntry <= lastEntry) start = roomsBefore + Math.max(0, startEntry - headerEntry - 1);
			if (end === void 0 && endEntry <= lastEntry) end = roomsBefore + Math.max(0, endEntry - headerEntry);
			if (start !== void 0 && end !== void 0) break;
			headerEntry = lastEntry + 1;
			roomsBefore += section.roomIds.length;
		}
		return [start ?? 0, end ?? roomsBefore];
	}, [sections]);
	/**
	* Callback when the visible range changes
	* Notifies the view model which rooms are visible
	*/
	const rangeChanged = (0, import_react$3.useCallback)((range) => {
		if (isFlatList) vm.updateVisibleRooms(range.startIndex, range.endIndex + 1);
		else {
			const [start, end] = mapEntryRangeToRoomRange(range.startIndex, range.endIndex);
			vm.updateVisibleRooms(start, end);
		}
		scheduleSyncObservedItems();
	}, [
		vm,
		scheduleSyncObservedItems,
		isFlatList,
		mapEntryRangeToRoomRange
	]);
	const a11yPlugins = useRoomListAccessibilityPlugin(vm);
	/**
	* Get the item component for a specific index
	* Gets the room's view model and passes it to RoomListItemView
	*
	* @param index - The index of the item in the list
	* @param roomId - The ID of the room for this item
	* @param context - The virtualization context containing list state
	* @param onFocus - Callback to call when the item is focused
	* @param isInLastSection - Whether this item is in the last section
	* @param roomIndexInSection - The index of this room within its section
	*/
	const getItemComponent = (0, import_react$3.useCallback)((index, roomId, context, onFocus, isInLastSection, roomIndexInSection) => {
		const { activeRoomIndex, roomCount, vm, isFlatList } = context.context;
		const isSelected = activeRoomIndex === index;
		const roomItemVM = vm.getRoomItemViewModel(roomId);
		if (!roomItemVM) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(import_react$3.Fragment, {}, `stale-${index}`);
		const isFocused = context.focused && context.tabIndexKey === roomId;
		const isFirstItem = isFlatList && index === 0;
		const isLastItem = Boolean((isFlatList || isInLastSection) && index === roomCount - 1);
		return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListItemWrapper, {
			vm: roomItemVM,
			renderAvatar,
			isSelected,
			isFocused,
			onFocus,
			roomIndex: index,
			roomIndexInSection: roomIndexInSection || 0,
			roomCount,
			isFirstItem,
			isLastItem,
			isInFlatList: isFlatList
		}, roomId);
	}, [renderAvatar]);
	/**
	* Get the item component for a specific index in a grouped list
	* Gets the room's view model and passes it to RoomListItemView
	*/
	const getItemComponentForGroupedList = (0, import_react$3.useCallback)((index, roomId, context, onFocus, groupIndex) => {
		const { sections } = context.context;
		const roomIndexInSection = sections[groupIndex].roomIds.findIndex((id) => id === roomId);
		const isInLastSection = groupIndex === sections.length - 1;
		return getItemComponent(index, roomId, context, onFocus, isInLastSection, roomIndexInSection);
	}, [getItemComponent]);
	/**
	* Get the item component for a specific index in a flat list
	* Gets the room's view model and passes it to RoomListItemView
	*/
	const getItemComponentForFlatList = (0, import_react$3.useCallback)((index, roomId, context, onFocus) => {
		return getItemComponent(index, roomId, context, onFocus);
	}, [getItemComponent]);
	/**
	* Get the group header component for a specific group
	*/
	const getGroupHeaderComponent = (0, import_react$3.useCallback)((groupIndex, headerId, context, onFocus) => {
		const { vm, sectionCount, sections } = context.context;
		const sectionHeaderVM = vm.getSectionHeaderViewModel(headerId);
		const indexInList = sections.slice(0, groupIndex).reduce((acc, section) => acc + section.roomIds.length + 1, 0);
		const roomCountInSection = sections[groupIndex].roomIds.length;
		return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListSectionHeaderView, {
			vm: sectionHeaderVM,
			isFocused: context.focused && context.tabIndexKey === headerId,
			onFocus,
			indexInList,
			sectionIndex: groupIndex,
			sectionCount,
			roomCountInSection
		}, headerId);
	}, []);
	/**
	* Render the pinned "current section" overlay header for the grouped list.
	* Presentational only — the real header rows in the list stay the accessible, focusable
	* controls. See {@link RoomListStickySectionHeaderView}.
	*/
	const renderStickyHeader = (0, import_react$3.useCallback)((groupIndex, headerId, context) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListStickySectionHeaderView, {
			vm: context.context.vm.getSectionHeaderViewModel(headerId),
			isFirst: groupIndex === 0
		}, headerId);
	}, []);
	/**
	* Get the key for a room item
	* Since we're using virtualization, items are always room ID strings
	*/
	const getItemKey = (0, import_react$3.useCallback)((item) => item, []);
	/**
	* Get the key for a group header
	* We are passing the section ID as the header key, which is a string, so we can return it directly
	*/
	const getHeaderKey = (0, import_react$3.useCallback)((header) => header, []);
	const context = (0, import_react$3.useMemo)(() => ({
		spaceId: roomListState.spaceId || "",
		filterKeys: roomListState.filterKeys,
		sections,
		activeRoomIndex,
		roomCount,
		sectionCount,
		vm,
		isFlatList
	}), [
		roomListState.spaceId,
		roomListState.filterKeys,
		sections,
		activeRoomIndex,
		roomCount,
		sectionCount,
		vm,
		isFlatList
	]);
	/**
	* Determine if we should scroll the active index into view
	* This happens when the space or filters change
	*/
	const scrollIntoViewOnChange = (0, import_react$3.useCallback)((params) => {
		const { spaceId, filterKeys } = params.context.context;
		const shouldScrollIndexIntoView = lastSpaceId.current !== spaceId || !isEqual(lastFilterKeys.current, filterKeys);
		lastFilterKeys.current = filterKeys;
		lastSpaceId.current = spaceId;
		if (shouldScrollIndexIntoView) return {
			align: "start",
			index: activeRoomIndex || 0,
			behavior: "auto"
		};
		return false;
	}, [activeRoomIndex]);
	(0, import_react$3.useLayoutEffect)(() => {
		if (scrollToSectionTag === void 0) return;
		const sectionIndex = sections.findIndex((s) => s.id === scrollToSectionTag);
		if (sectionIndex === -1) return;
		const flatIndex = sections.slice(0, sectionIndex).reduce((acc, s) => acc + s.roomIds.length + 1, 0);
		virtuosoHandleRef.current?.scrollIntoView({
			index: flatIndex,
			align: "start",
			behavior: "auto"
		});
	}, [scrollToSectionTag, sections]);
	(0, import_react$3.useEffect)(() => {
		vm.setScrollToIndex((index) => virtuosoHandleRef.current?.scrollIntoView({
			index,
			align: "center",
			behavior: "auto"
		}));
		return () => vm.setScrollToIndex(void 0);
	}, [vm]);
	const isItemFocusable = (0, import_react$3.useCallback)(() => true, []);
	const isGroupHeaderFocusable = (0, import_react$3.useCallback)(() => true, []);
	const increaseViewportBy = (0, import_react$3.useMemo)(() => ({
		top: EXTENDED_VIEWPORT_HEIGHT,
		bottom: EXTENDED_VIEWPORT_HEIGHT
	}), []);
	const commonProps = {
		context,
		scrollIntoViewOnChange,
		...activeRoomIndex !== void 0 ? { initialTopMostItemIndex: activeRoomIndex } : {},
		["data-testid"]: "room-list",
		["aria-label"]: _t("room_list|list_title"),
		getItemKey,
		isItemFocusable,
		rangeChanged,
		"scrollerRef": setScroller,
		onKeyDown,
		increaseViewportBy,
		"className": VirtualizedRoomListView_module_default.roomList
	};
	if (isFlatList) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(FlatVirtualizedList, {
		...commonProps,
		...getContainerAccessibleProps("listbox"),
		scrollHandleRef: setVirtuosoHandle,
		items: roomIds,
		getItemComponent: getItemComponentForFlatList
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(DragDropProvider, {
		onDragStart: (event) => {
			const { source } = event.operation;
			if (isSectionDragData(source?.data)) vm.onSectionDragStart();
		},
		onDragEnd: (event) => {
			const { source, target } = event.operation;
			if (isSectionDragData(source?.data)) vm.onSectionDragEnd();
			if (event.canceled || !source || !target) return;
			if (isSectionDragData(source.data)) vm.changeSectionOrder(String(source.id), String(target.id));
			else vm.changeRoomSection(String(source.id), String(target.id));
		},
		sensors: [PointerSensor.configure({ activationConstraints(event) {
			if (event.pointerType === "touch") return [new PointerActivationConstraints.Delay({
				value: 250,
				tolerance: 5
			})];
			return [new PointerActivationConstraints.Distance({ value: 5 })];
		} }), KeyboardSensor.configure({
			offset: 17,
			keyboardCodes: {
				start: ["Space"],
				cancel: ["Escape"],
				end: ["Space"],
				up: ["ArrowUp"],
				down: ["ArrowDown"],
				left: ["ArrowLeft"],
				right: ["ArrowRight"]
			}
		})],
		plugins: a11yPlugins,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DragOverlay, {
			dropAnimation: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DragOverlayContent, {
				vm,
				renderAvatar
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(GroupedRoomList, {
			...commonProps,
			...getContainerAccessibleProps("treegrid", totalCount),
			scrollHandleRef: setVirtuosoHandle,
			groups,
			getHeaderKey,
			getGroupHeaderComponent,
			getItemComponent: getItemComponentForGroupedList,
			isGroupHeaderFocusable,
			renderStickyHeader
		})]
	});
}
/**
* Inner component rendered inside DragDropProvider that renders the grouped virtualized list.
* Uses useDragOperation to detect active keyboard drags and disable the list's own keyboard
* navigation shortcuts while a drag is in progress, preventing unwanted list scrolling.
*/
function GroupedRoomList(props) {
	const { source } = useDragOperation();
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(GroupedVirtualizedList, {
		...props,
		disableKeyboardNavigation: source !== null
	});
}
/**
* Component rendered in the drag overlay when dragging a room item. Renders a copy of the dragged item to avoid dragging the actual element out of virtualization.
*/
function DragOverlayContent({ vm, renderAvatar }) {
	const { source } = useDragOperation();
	if (!source) return null;
	if (isSectionDragData(source.data)) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListSectionHeaderDragOverlayView, { vm: vm.getSectionHeaderViewModel(String(source.id)) });
	const itemVm = vm.getRoomItemViewModel(String(source.id));
	if (!itemVm) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListItemDragOverlayView, {
		vm: itemVm,
		renderAvatar
	});
}
var import_react$3, import_jsx_runtime$2, ROOM_LIST_ITEM_HEIGHT, EXTENDED_VIEWPORT_HEIGHT;
var init_VirtualizedRoomListView$1 = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_lodash();
	init_react();
	init_dom();
	init_viewmodel();
	init_VirtualizedList();
	init_RoomListSectionHeaderView();
	init_RoomListSectionHeaderDragOverlayView();
	init_RoomListItemWrapper();
	init_RoomListItemDragOverlayView();
	init_dragAndDrop();
	init_RoomListAccessibilityPlugin();
	init_VirtualizedRoomListView_module();
	init_i18nContext();
	import_jsx_runtime$2 = require_jsx_runtime();
	ROOM_LIST_ITEM_HEIGHT = 52;
	EXTENDED_VIEWPORT_HEIGHT = 25 * ROOM_LIST_ITEM_HEIGHT;
	VirtualizedRoomListView.__docgenInfo = {
		"description": "A virtualized list of rooms.\nThis component provides efficient rendering of large room lists using virtualization,\nand renders RoomListItemView components for each room.\n\n@example\n```tsx\n<VirtualizedRoomListView vm={roomListViewModel} renderAvatar={(room) => <Avatar room={room} />} />\n```",
		"methods": [],
		"displayName": "VirtualizedRoomListView",
		"props": {
			"vm": {
				"required": true,
				"tsType": {
					"name": "intersection",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
					"elements": [{
						"name": "signature",
						"type": "object",
						"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
						"signature": { "properties": [{
							"key": "getSnapshot",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "() => Snapshot",
								"signature": {
									"arguments": [],
									"return": {
										"name": "signature",
										"type": "object",
										"raw": "{\n    /** Whether the rooms are currently loading */\n    isLoadingRooms: boolean;\n    /** Whether the room list is empty */\n    isRoomListEmpty: boolean;\n    /** Array of filter IDs */\n    filterIds: FilterId[];\n    /** Currently active filter ID (if any) */\n    activeFilterId?: FilterId;\n    /** Room list state */\n    roomListState: RoomListViewState;\n    /** Array of sections in the room list */\n    sections: RoomListSection[];\n    /** Optional description for the empty state */\n    emptyStateDescription?: string;\n    /** Optional action element for the empty state */\n    emptyStateAction?: ReactNode;\n    /** Whether the user can create rooms */\n    canCreateRoom?: boolean;\n    /** Whether the room list is displayed as a flat list */\n    isFlatList: boolean;\n    /**\n     * The single toast to display (if any). The view model owns which toast wins when more\n     * than one applies (e.g. a transient \"chat_moved\" event toast takes precedence over the\n     * persistent \"unread_activity\" toast), so the view just renders whatever it is given.\n     */\n    toast?: ToastType;\n}",
										"signature": { "properties": [
											{
												"key": "isLoadingRooms",
												"value": {
													"name": "boolean",
													"required": true
												},
												"description": "Whether the rooms are currently loading"
											},
											{
												"key": "isRoomListEmpty",
												"value": {
													"name": "boolean",
													"required": true
												},
												"description": "Whether the room list is empty"
											},
											{
												"key": "filterIds",
												"value": {
													"name": "Array",
													"elements": [{
														"name": "union",
														"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
														"elements": [
															{
																"name": "literal",
																"value": "\"unread\""
															},
															{
																"name": "literal",
																"value": "\"people\""
															},
															{
																"name": "literal",
																"value": "\"rooms\""
															},
															{
																"name": "literal",
																"value": "\"favourite\""
															},
															{
																"name": "literal",
																"value": "\"mentions\""
															},
															{
																"name": "literal",
																"value": "\"invites\""
															},
															{
																"name": "literal",
																"value": "\"low_priority\""
															}
														],
														"required": false
													}],
													"raw": "FilterId[]",
													"required": true
												},
												"description": "Array of filter IDs"
											},
											{
												"key": "activeFilterId",
												"value": {
													"name": "union",
													"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
													"elements": [
														{
															"name": "literal",
															"value": "\"unread\""
														},
														{
															"name": "literal",
															"value": "\"people\""
														},
														{
															"name": "literal",
															"value": "\"rooms\""
														},
														{
															"name": "literal",
															"value": "\"favourite\""
														},
														{
															"name": "literal",
															"value": "\"mentions\""
														},
														{
															"name": "literal",
															"value": "\"invites\""
														},
														{
															"name": "literal",
															"value": "\"low_priority\""
														}
													],
													"required": false
												},
												"description": "Currently active filter ID (if any)"
											},
											{
												"key": "roomListState",
												"value": {
													"name": "RoomListViewState",
													"required": true
												},
												"description": "Room list state"
											},
											{
												"key": "sections",
												"value": {
													"name": "Array",
													"elements": [{
														"name": "signature",
														"type": "object",
														"raw": "{\n    /** Unique identifier for the section */\n    id: string;\n    /** Array of room IDs that belong to this section */\n    roomIds: string[];\n}",
														"signature": { "properties": [{
															"key": "id",
															"value": {
																"name": "string",
																"required": true
															},
															"description": "Unique identifier for the section"
														}, {
															"key": "roomIds",
															"value": {
																"name": "Array",
																"elements": [{ "name": "string" }],
																"raw": "string[]",
																"required": true
															},
															"description": "Array of room IDs that belong to this section"
														}] }
													}],
													"raw": "RoomListSection[]",
													"required": true
												},
												"description": "Array of sections in the room list"
											},
											{
												"key": "emptyStateDescription",
												"value": {
													"name": "string",
													"required": false
												},
												"description": "Optional description for the empty state"
											},
											{
												"key": "emptyStateAction",
												"value": {
													"name": "ReactNode",
													"required": false
												},
												"description": "Optional action element for the empty state"
											},
											{
												"key": "canCreateRoom",
												"value": {
													"name": "boolean",
													"required": false
												},
												"description": "Whether the user can create rooms"
											},
											{
												"key": "isFlatList",
												"value": {
													"name": "boolean",
													"required": true
												},
												"description": "Whether the room list is displayed as a flat list"
											},
											{
												"key": "toast",
												"value": {
													"name": "union",
													"raw": "| \"section_created\"\n| \"chat_moved\"\n// Persistent, clickable toast surfacing unread activity below the visible area.\n| \"unread_activity\"",
													"elements": [
														{
															"name": "literal",
															"value": "\"section_created\""
														},
														{
															"name": "literal",
															"value": "\"chat_moved\""
														},
														{
															"name": "literal",
															"value": "\"unread_activity\""
														}
													],
													"required": false
												},
												"description": "The single toast to display (if any). The view model owns which toast wins when more\nthan one applies (e.g. a transient \"chat_moved\" event toast takes precedence over the\npersistent \"unread_activity\" toast), so the view just renders whatever it is given."
											}
										] }
									}
								},
								"required": true
							},
							"description": "The current snapshot of the view model."
						}, {
							"key": "subscribe",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "(listener: () => void) => () => void",
								"signature": {
									"arguments": [{
										"type": {
											"name": "signature",
											"type": "function",
											"raw": "() => void",
											"signature": {
												"arguments": [],
												"return": { "name": "void" }
											}
										},
										"name": "listener"
									}],
									"return": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									}
								},
								"required": true
							},
							"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
						}] }
					}, {
						"name": "signature",
						"type": "object",
						"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
						"signature": { "properties": [{
							"key": {
								"name": "RoomListViewActions",
								"required": true
							},
							"value": { "name": "unknown" }
						}] }
					}]
				},
				"description": "The view model containing all room list data and callbacks"
			},
			"renderAvatar": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(room: Room) => ReactNode",
					"signature": {
						"arguments": [{
							"type": { "name": "unknown" },
							"name": "room"
						}],
						"return": { "name": "ReactNode" }
					}
				},
				"description": "Render function for room avatar\n@param room - The opaque Room object from the client"
			},
			"onKeyDown": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(e: React.KeyboardEvent<HTMLDivElement>) => void",
					"signature": {
						"arguments": [{
							"type": {
								"name": "ReactKeyboardEvent",
								"raw": "React.KeyboardEvent<HTMLDivElement>",
								"elements": [{ "name": "HTMLDivElement" }]
							},
							"name": "e"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Optional callback for keyboard key down events"
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/index.ts
var init_VirtualizedRoomListView = __esmMin((() => {
	init_VirtualizedRoomListView$1();
	init_RoomListSectionHeaderView();
	init_RoomListItemWrapper();
	init_RoomListItemDragOverlayView();
}));
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.module.css
var toast, RoomListToast_module_default;
var init_RoomListToast_module = __esmMin((() => {
	toast = "_toast_izd6s_9";
	RoomListToast_module_default = { toast };
}));
//#endregion
//#region src/room-list/RoomListView/RoomListToast/RoomListToast.tsx
/**
* A toast component used for displaying messages in the room list view.
*
* The room list shows at most one toast at a time; which one (and the precedence between
* transient event toasts and the persistent unread-activity toast) is decided by the view
* model, so the view simply renders whichever {@link ToastType} it is given:
*
* - "section_created" / "chat_moved": transient event notifications with a close button.
* - "unread_activity": a persistent, clickable toast that jumps to the next unread room
*   below the visible area of the list.
*
* @example
* ```tsx
*   <RoomListToast type="section_created" onClose={onCloseHandler} onClick={onClickHandler} />
* ```
*/
function RoomListToast({ type, onClose, onClick }) {
	const { translate: _t } = useI18n();
	if (type === "unread_activity") return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Toast, {
		className: RoomListToast_module_default.toast,
		Icon: arrow_down_default,
		onClick,
		children: _t("room_list|unread_messages")
	});
	const text = type === "section_created" ? _t("room_list|section_created") : _t("room_list|chat_moved");
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Toast, {
		className: RoomListToast_module_default.toast,
		onClose,
		tooltip: _t("action|close"),
		children: text
	});
}
var import_jsx_runtime$1;
var init_RoomListToast$1 = __esmMin((() => {
	require_react();
	init_dist$4();
	init_arrow_down();
	init_RoomListToast_module();
	init_i18nContext();
	import_jsx_runtime$1 = require_jsx_runtime();
	RoomListToast.__docgenInfo = {
		"description": "A toast component used for displaying messages in the room list view.\n\nThe room list shows at most one toast at a time; which one (and the precedence between\ntransient event toasts and the persistent unread-activity toast) is decided by the view\nmodel, so the view simply renders whichever {@link ToastType} it is given:\n\n- \"section_created\" / \"chat_moved\": transient event notifications with a close button.\n- \"unread_activity\": a persistent, clickable toast that jumps to the next unread room\n  below the visible area of the list.\n\n@example\n```tsx\n  <RoomListToast type=\"section_created\" onClose={onCloseHandler} onClick={onClickHandler} />\n```",
		"methods": [],
		"displayName": "RoomListToast"
	};
}));
//#endregion
//#region src/room-list/RoomListView/RoomListToast/index.ts
var init_RoomListToast = __esmMin((() => {
	init_RoomListToast$1();
}));
//#endregion
//#region src/room-list/RoomListView/RoomListView.module.css
var list, scrollbar$1, RoomListView_module_default;
var init_RoomListView_module = __esmMin((() => {
	list = "_list_1ja6j_9";
	scrollbar$1 = "_scrollbar_1ja6j_14";
	RoomListView_module_default = {
		list,
		scrollbar: scrollbar$1
	};
}));
//#endregion
//#region src/core/utils/Scrollbar/AutoHideScrollbar.module.css
var scrollbar, AutoHideScrollbar_module_default;
var init_AutoHideScrollbar_module = __esmMin((() => {
	scrollbar = "_scrollbar_1ikce_9";
	AutoHideScrollbar_module_default = { scrollbar };
}));
//#endregion
//#region src/core/utils/Scrollbar/AutoHideScrollbar.ts
/**
* Scroll container that hides native scrollbars until hovered.
* Any overflow-x is hidden by default.
*/
function AutoHideScrollbar(props) {
	const { as = "div", className, onScroll, tabIndex, wrappedRef, children, ...otherProps } = props;
	const containerRef = import_react$1.useRef(null);
	const wrappedRefRef = import_react$1.useRef(wrappedRef);
	wrappedRefRef.current = wrappedRef;
	const collectContainer = import_react$1.useCallback((node) => {
		containerRef.current = node;
	}, []);
	import_react$1.useLayoutEffect(() => {
		wrappedRefRef.current?.(containerRef.current);
		return () => {
			wrappedRefRef.current?.(null);
		};
	}, []);
	import_react$1.useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container || !onScroll) return;
		container.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			container.removeEventListener("scroll", onScroll);
		};
	}, [onScroll]);
	return import_react$1.createElement(as, {
		...otherProps,
		ref: collectContainer,
		className: (0, import_classnames.default)(AutoHideScrollbar_module_default.scrollbar, className),
		tabIndex: tabIndex ?? -1
	}, children);
}
var import_classnames, import_react$1;
var init_AutoHideScrollbar = __esmMin((() => {
	import_classnames = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_AutoHideScrollbar_module();
	AutoHideScrollbar.__docgenInfo = {
		"description": "Scroll container that hides native scrollbars until hovered.\nAny overflow-x is hidden by default.",
		"methods": [],
		"displayName": "AutoHideScrollbar",
		"props": {
			"as": {
				"required": false,
				"tsType": { "name": "T" },
				"description": "The type of the HTML element. @default div"
			},
			"className": {
				"required": false,
				"tsType": { "name": "string" },
				"description": "Additional class names to append to the scrollbar root."
			},
			"style": {
				"required": false,
				"tsType": {
					"name": "ReactCSSProperties",
					"raw": "React.CSSProperties"
				},
				"description": "Inline styles applied to the root element."
			},
			"tabIndex": {
				"required": false,
				"tsType": { "name": "number" },
				"description": "Tab index override; defaults to `-1`."
			},
			"wrappedRef": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(ref: HTMLDivElement | null) => void",
					"signature": {
						"arguments": [{
							"type": {
								"name": "union",
								"raw": "HTMLDivElement | null",
								"elements": [{ "name": "HTMLDivElement" }, { "name": "null" }]
							},
							"name": "ref"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Receives the mounted scroll container element."
			},
			"onScroll": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(event: Event) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "Event" },
							"name": "event"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Native scroll handler attached with a passive listener."
			},
			"onWheel": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(event: WheelEvent) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "WheelEvent" },
							"name": "event"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Optional wheel handler forwarded to the root element."
			},
			"children": {
				"required": true,
				"tsType": { "name": "ReactNode" },
				"description": "Scrollable content rendered inside the container."
			}
		}
	};
}));
//#endregion
//#region src/core/utils/Scrollbar/index.ts
var init_Scrollbar = __esmMin((() => {
	init_AutoHideScrollbar();
})), import_jsx_runtime, RoomListView;
var init_RoomListView = __esmMin((() => {
	require_react();
	init_viewmodel();
	init_RoomListPrimaryFilters();
	init_RoomListLoadingSkeleton();
	init_RoomListEmptyStateView();
	init_VirtualizedRoomListView();
	init_RoomListToast();
	init_RoomListView_module();
	init_Flex();
	init_Scrollbar();
	import_jsx_runtime = require_jsx_runtime();
	RoomListView = ({ vm, renderAvatar, onKeyDown }) => {
		const snapshot = useViewModel(vm);
		let listBody;
		if (snapshot.isLoadingRooms) listBody = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListLoadingSkeleton, {});
		else if (snapshot.isRoomListEmpty) listBody = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListEmptyStateView, { vm });
		else listBody = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualizedRoomListView, {
			vm,
			renderAvatar,
			onKeyDown
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListPrimaryFilters, {
			filterIds: snapshot.filterIds,
			activeFilterId: snapshot.activeFilterId,
			onToggleFilter: vm.onToggleFilter
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
			direction: "column",
			className: RoomListView_module_default.list,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AutoHideScrollbar, {
				className: RoomListView_module_default.scrollbar,
				children: [listBody, snapshot.toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListToast, {
					type: snapshot.toast,
					onClose: vm.closeToast,
					onClick: vm.scrollToUnreadActivity
				})]
			})
		})] });
	};
	RoomListView.__docgenInfo = {
		"description": "Room list view component that manages filters, loading states, empty states, and the room list.",
		"methods": [],
		"displayName": "RoomListView",
		"props": {
			"vm": {
				"required": true,
				"tsType": {
					"name": "intersection",
					"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n} & MapToVoidThis<Actions>",
					"elements": [{
						"name": "signature",
						"type": "object",
						"raw": "{\n    /**\n     * The current snapshot of the view model.\n     */\n    getSnapshot: () => Snapshot;\n\n    /**\n     * Subscribes to changes in the view model.\n     * The listener will be called whenever the snapshot changes.\n     */\n    subscribe: (listener: () => void) => () => void;\n}",
						"signature": { "properties": [{
							"key": "getSnapshot",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "() => Snapshot",
								"signature": {
									"arguments": [],
									"return": {
										"name": "signature",
										"type": "object",
										"raw": "{\n    /** Whether the rooms are currently loading */\n    isLoadingRooms: boolean;\n    /** Whether the room list is empty */\n    isRoomListEmpty: boolean;\n    /** Array of filter IDs */\n    filterIds: FilterId[];\n    /** Currently active filter ID (if any) */\n    activeFilterId?: FilterId;\n    /** Room list state */\n    roomListState: RoomListViewState;\n    /** Array of sections in the room list */\n    sections: RoomListSection[];\n    /** Optional description for the empty state */\n    emptyStateDescription?: string;\n    /** Optional action element for the empty state */\n    emptyStateAction?: ReactNode;\n    /** Whether the user can create rooms */\n    canCreateRoom?: boolean;\n    /** Whether the room list is displayed as a flat list */\n    isFlatList: boolean;\n    /**\n     * The single toast to display (if any). The view model owns which toast wins when more\n     * than one applies (e.g. a transient \"chat_moved\" event toast takes precedence over the\n     * persistent \"unread_activity\" toast), so the view just renders whatever it is given.\n     */\n    toast?: ToastType;\n}",
										"signature": { "properties": [
											{
												"key": "isLoadingRooms",
												"value": {
													"name": "boolean",
													"required": true
												},
												"description": "Whether the rooms are currently loading"
											},
											{
												"key": "isRoomListEmpty",
												"value": {
													"name": "boolean",
													"required": true
												},
												"description": "Whether the room list is empty"
											},
											{
												"key": "filterIds",
												"value": {
													"name": "Array",
													"elements": [{
														"name": "union",
														"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
														"elements": [
															{
																"name": "literal",
																"value": "\"unread\""
															},
															{
																"name": "literal",
																"value": "\"people\""
															},
															{
																"name": "literal",
																"value": "\"rooms\""
															},
															{
																"name": "literal",
																"value": "\"favourite\""
															},
															{
																"name": "literal",
																"value": "\"mentions\""
															},
															{
																"name": "literal",
																"value": "\"invites\""
															},
															{
																"name": "literal",
																"value": "\"low_priority\""
															}
														],
														"required": false
													}],
													"raw": "FilterId[]",
													"required": true
												},
												"description": "Array of filter IDs"
											},
											{
												"key": "activeFilterId",
												"value": {
													"name": "union",
													"raw": "\"unread\" | \"people\" | \"rooms\" | \"favourite\" | \"mentions\" | \"invites\" | \"low_priority\"",
													"elements": [
														{
															"name": "literal",
															"value": "\"unread\""
														},
														{
															"name": "literal",
															"value": "\"people\""
														},
														{
															"name": "literal",
															"value": "\"rooms\""
														},
														{
															"name": "literal",
															"value": "\"favourite\""
														},
														{
															"name": "literal",
															"value": "\"mentions\""
														},
														{
															"name": "literal",
															"value": "\"invites\""
														},
														{
															"name": "literal",
															"value": "\"low_priority\""
														}
													],
													"required": false
												},
												"description": "Currently active filter ID (if any)"
											},
											{
												"key": "roomListState",
												"value": {
													"name": "RoomListViewState",
													"required": true
												},
												"description": "Room list state"
											},
											{
												"key": "sections",
												"value": {
													"name": "Array",
													"elements": [{
														"name": "signature",
														"type": "object",
														"raw": "{\n    /** Unique identifier for the section */\n    id: string;\n    /** Array of room IDs that belong to this section */\n    roomIds: string[];\n}",
														"signature": { "properties": [{
															"key": "id",
															"value": {
																"name": "string",
																"required": true
															},
															"description": "Unique identifier for the section"
														}, {
															"key": "roomIds",
															"value": {
																"name": "Array",
																"elements": [{ "name": "string" }],
																"raw": "string[]",
																"required": true
															},
															"description": "Array of room IDs that belong to this section"
														}] }
													}],
													"raw": "RoomListSection[]",
													"required": true
												},
												"description": "Array of sections in the room list"
											},
											{
												"key": "emptyStateDescription",
												"value": {
													"name": "string",
													"required": false
												},
												"description": "Optional description for the empty state"
											},
											{
												"key": "emptyStateAction",
												"value": {
													"name": "ReactNode",
													"required": false
												},
												"description": "Optional action element for the empty state"
											},
											{
												"key": "canCreateRoom",
												"value": {
													"name": "boolean",
													"required": false
												},
												"description": "Whether the user can create rooms"
											},
											{
												"key": "isFlatList",
												"value": {
													"name": "boolean",
													"required": true
												},
												"description": "Whether the room list is displayed as a flat list"
											},
											{
												"key": "toast",
												"value": {
													"name": "union",
													"raw": "| \"section_created\"\n| \"chat_moved\"\n// Persistent, clickable toast surfacing unread activity below the visible area.\n| \"unread_activity\"",
													"elements": [
														{
															"name": "literal",
															"value": "\"section_created\""
														},
														{
															"name": "literal",
															"value": "\"chat_moved\""
														},
														{
															"name": "literal",
															"value": "\"unread_activity\""
														}
													],
													"required": false
												},
												"description": "The single toast to display (if any). The view model owns which toast wins when more\nthan one applies (e.g. a transient \"chat_moved\" event toast takes precedence over the\npersistent \"unread_activity\" toast), so the view just renders whatever it is given."
											}
										] }
									}
								},
								"required": true
							},
							"description": "The current snapshot of the view model."
						}, {
							"key": "subscribe",
							"value": {
								"name": "signature",
								"type": "function",
								"raw": "(listener: () => void) => () => void",
								"signature": {
									"arguments": [{
										"type": {
											"name": "signature",
											"type": "function",
											"raw": "() => void",
											"signature": {
												"arguments": [],
												"return": { "name": "void" }
											}
										},
										"name": "listener"
									}],
									"return": {
										"name": "signature",
										"type": "function",
										"raw": "() => void",
										"signature": {
											"arguments": [],
											"return": { "name": "void" }
										}
									}
								},
								"required": true
							},
							"description": "Subscribes to changes in the view model.\nThe listener will be called whenever the snapshot changes."
						}] }
					}, {
						"name": "signature",
						"type": "object",
						"raw": "{\n    [K in keyof T]: T[K] extends (...args: infer A) => infer R ? (this: void, ...args: A) => R : T[K];\n}",
						"signature": { "properties": [{
							"key": {
								"name": "RoomListViewActions",
								"required": true
							},
							"value": { "name": "unknown" }
						}] }
					}]
				},
				"description": "The view model containing all data and callbacks"
			},
			"renderAvatar": {
				"required": true,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(room: Room) => ReactNode",
					"signature": {
						"arguments": [{
							"type": { "name": "unknown" },
							"name": "room"
						}],
						"return": { "name": "ReactNode" }
					}
				},
				"description": "Render function for room avatar"
			},
			"onKeyDown": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(e: React.KeyboardEvent<HTMLDivElement>) => void",
					"signature": {
						"arguments": [{
							"type": {
								"name": "ReactKeyboardEvent",
								"raw": "React.KeyboardEvent<HTMLDivElement>",
								"elements": [{ "name": "HTMLDivElement" }]
							},
							"name": "e"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Optional callback for keyboard events on the room list"
			}
		}
	};
}));
//#endregion
export { omit as C, init_i18nContext as D, I18nContext as E, useI18n as O, init_omit as S, init_capitalize as T, init_room as _, init_VirtualizedRoomListView as a, init_throttle as b, init_VirtualizedList as c, PointerActivationConstraints as d, PointerSensor as f, init_RoomListPrimaryFilters as g, init_RoomListLoadingSkeleton as h, init_RoomListToast as i, DragDropProvider as l, init_RoomListEmptyStateView as m, init_RoomListView as n, init_RoomListItemWrapper as o, init_dom as p, init_Scrollbar as r, init_RoomListSectionHeaderView as s, RoomListView as t, init_react as u, room_default as v, capitalize as w, throttle$1 as x, init_lodash as y };

//# sourceMappingURL=RoomListView-DrV5d9wh.js.map