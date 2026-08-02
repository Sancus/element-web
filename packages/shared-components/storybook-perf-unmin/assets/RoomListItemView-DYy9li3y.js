import { c as __toESM, i as __esmMin, n as process$1, r as __commonJSMin, t as init_dist$48 } from "./dist-DHqTAwVy.js";
import { n as require_react, t as require_react_dom } from "./react-dom-BWFRaAn0.js";
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Typography/Typography.module.js
var Typography_module_default;
var init_Typography_module = __esmMin((() => {
	Typography_module_default = {
		"font-body-xs-regular": "_font-body-xs-regular_6v6n8_12",
		"font-body-xs-semibold": "_font-body-xs-semibold_6v6n8_17",
		"font-body-xs-medium": "_font-body-xs-medium_6v6n8_22",
		"font-body-sm-regular": "_font-body-sm-regular_6v6n8_31",
		"font-body-sm-semibold": "_font-body-sm-semibold_6v6n8_36",
		"font-body-sm-medium": "_font-body-sm-medium_6v6n8_41",
		"font-body-md-regular": "_font-body-md-regular_6v6n8_50",
		"font-body-md-semibold": "_font-body-md-semibold_6v6n8_55",
		"font-body-md-medium": "_font-body-md-medium_6v6n8_60",
		"font-body-lg-regular": "_font-body-lg-regular_6v6n8_69",
		"font-body-lg-semibold": "_font-body-lg-semibold_6v6n8_74",
		"font-body-lg-medium": "_font-body-lg-medium_6v6n8_79",
		"font-heading-sm-regular": "_font-heading-sm-regular_6v6n8_88",
		"font-heading-sm-semibold": "_font-heading-sm-semibold_6v6n8_93",
		"font-heading-sm-medium": "_font-heading-sm-medium_6v6n8_98",
		"font-heading-md-regular": "_font-heading-md-regular_6v6n8_107",
		"font-heading-md-semibold": "_font-heading-md-semibold_6v6n8_112",
		"font-heading-lg-regular": "_font-heading-lg-regular_6v6n8_121",
		"font-heading-lg-semibold": "_font-heading-lg-semibold_6v6n8_126",
		"font-heading-xl-regular": "_font-heading-xl-regular_6v6n8_135",
		"font-heading-xl-semibold": "_font-heading-xl-semibold_6v6n8_140",
		typography: "_typography_6v6n8_153"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var require_classnames = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
	*/
	(function() {
		"use strict";
		var hasOwn = {}.hasOwnProperty;
		function classNames() {
			var classes = "";
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) classes = appendClass(classes, parseValue(arg));
			}
			return classes;
		}
		function parseValue(arg) {
			if (typeof arg === "string" || typeof arg === "number") return arg;
			if (typeof arg !== "object") return "";
			if (Array.isArray(arg)) return classNames.apply(null, arg);
			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
			var classes = "";
			for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
			return classes;
		}
		function appendClass(value, newClass) {
			if (!newClass) return value;
			if (value) return value + " " + newClass;
			return value + newClass;
		}
		if (typeof module !== "undefined" && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
			return classNames;
		});
		else window.classNames = classNames;
	})();
}));
//#endregion
//#region ../../node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region ../../node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
})), import_classnames$27, import_jsx_runtime$132, Typography;
var init_Typography = __esmMin((() => {
	init_Typography_module();
	import_classnames$27 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	require_react();
	import_jsx_runtime$132 = require_jsx_runtime();
	Typography = ({ as, children, type = "body", weight = "regular", size = "md", className, ...restProps }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$132.jsx)(as || "p", {
			...restProps,
			className: (0, import_classnames$27.default)(Typography_module_default.typography, Typography_module_default[`font-${type}-${size}-${weight}`], className),
			children
		});
	};
})), import_jsx_runtime$131, Text;
var init_Text$1 = __esmMin((() => {
	init_Typography();
	require_react();
	import_jsx_runtime$131 = require_jsx_runtime();
	Text = ({ as = "p", children, ...props }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$131.jsx)(Typography, {
			as,
			type: "body",
			...props,
			children
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Button/Button.module.js
var Button_module_default;
var init_Button_module = __esmMin((() => {
	Button_module_default = {
		button: "_button_1nw83_8",
		"icon-only": "_icon-only_1nw83_53",
		"has-icon": "_has-icon_1nw83_60",
		destructive: "_destructive_1nw83_110"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Button/UnstyledButton.js
var import_react$176, import_jsx_runtime$130, UnstyledButton;
var init_UnstyledButton = __esmMin((() => {
	import_react$176 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$130 = require_jsx_runtime();
	UnstyledButton = (0, import_react$176.forwardRef)(function UnstyledButton({ as, children, className, disabled, ...props }, ref) {
		const Component = as || "button";
		const { onClick, onSubmit, onPointerDown, onPointerUp, onKeyDown, onKeyUp, onKeyPress, ...restProps } = props;
		const eventHandlers = disabled ? {} : {
			onClick,
			onSubmit,
			onPointerDown,
			onPointerUp,
			onKeyDown,
			onKeyUp,
			onKeyPress
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$130.jsx)(Component, {
			ref,
			className,
			role: as === "a" ? "link" : "button",
			tabIndex: 0,
			"aria-disabled": disabled,
			...restProps,
			...eventHandlers,
			children
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Button/Button.js
var import_classnames$26, import_react$175, import_jsx_runtime$129, Button;
var init_Button = __esmMin((() => {
	init_Button_module();
	init_UnstyledButton();
	import_classnames$26 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$175 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$129 = require_jsx_runtime();
	Button = (0, import_react$175.forwardRef)(function Button({ as, kind: kindProp = "primary", size = "lg", children, className, iconOnly, Icon, destructive: destructiveProp, disabled, ...props }, ref) {
		const [kind, destructive] = kindProp === "destructive" ? ["secondary", true] : [kindProp, destructiveProp];
		const classes = (0, import_classnames$26.default)(Button_module_default.button, className, {
			[Button_module_default["has-icon"]]: Icon,
			[Button_module_default["icon-only"]]: iconOnly,
			[Button_module_default.destructive]: destructive
		});
		const iconSize = iconOnly && size === "lg" ? 24 : 20;
		return /* @__PURE__ */ (0, import_jsx_runtime$129.jsxs)(UnstyledButton, {
			...props,
			as: as || "button",
			ref,
			className: classes,
			"data-size": size,
			"data-kind": kind,
			tabIndex: 0,
			disabled,
			children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime$129.jsx)(Icon, {
				width: iconSize,
				height: iconSize,
				className: Button_module_default.icon,
				"aria-hidden": true
			}), children]
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Icon/IndicatorIcon/IndicatorIcon.module.js
var IndicatorIcon_module_default;
var init_IndicatorIcon_module = __esmMin((() => {
	IndicatorIcon_module_default = { "indicator-icon": "_indicator-icon_147l5_17" };
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Icon/IndicatorIcon/IndicatorIcon.js
var import_classnames$25, import_react$174, import_jsx_runtime$128, IndicatorIcon;
var init_IndicatorIcon = __esmMin((() => {
	init_IndicatorIcon_module();
	import_classnames$25 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$174 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$128 = require_jsx_runtime();
	IndicatorIcon = (0, import_react$174.forwardRef)(function IconButton({ children, className, size = "100%", colour, indicator }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$128.jsx)("div", {
			ref,
			className: (0, import_classnames$25.default)(IndicatorIcon_module_default["indicator-icon"], className),
			"data-indicator": indicator,
			style: {
				"--cpd-icon-button-size": size,
				"--cpd-color-icon-tertiary": colour
			},
			children: import_react$174.Children.only(children)
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement$1(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
var willChangeRe, containRe, isNotNone, isWebKitValue;
var init_floating_ui_utils_dom = __esmMin((() => {
	willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
	containRe = /paint|layout|strict|content/;
	isNotNone = (value) => !!value && value !== "none";
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
var sides, min, max, round, floor, createCoords, oppositeSideMap, lrPlacement, rlPlacement, tbPlacement, btPlacement;
var init_floating_ui_utils = __esmMin((() => {
	sides = [
		"top",
		"right",
		"bottom",
		"left"
	];
	min = Math.min;
	max = Math.max;
	round = Math.round;
	floor = Math.floor;
	createCoords = (v) => ({
		x: v,
		y: v
	});
	oppositeSideMap = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};
	lrPlacement = ["left", "right"];
	rlPlacement = ["right", "left"];
	tbPlacement = ["top", "bottom"];
	btPlacement = ["bottom", "top"];
}));
//#endregion
//#region ../../node_modules/.pnpm/tabbable@6.4.0/node_modules/tabbable/dist/index.esm.js
var candidateSelectors, candidateSelector, NoElement, matches, getRootNode, _isInert, isContentEditable, getCandidates, _getCandidatesIteratively, hasTabIndex, getTabIndex, getSortOrderTabIndex, sortOrderedTabbables, isInput$1, isHiddenInput, isDetailsWithSummary, getCheckedRadio, isTabbableRadio, isRadio, isNonTabbableRadio, isNodeAttached, isZeroArea, isHidden$2, isDisabledFromFieldset, isNodeMatchingSelectorFocusable, isNodeMatchingSelectorTabbable, isShadowRootTabbable, _sortByOrder, tabbable, focusable, isTabbable;
var init_index_esm = __esmMin((() => {
	candidateSelectors = [
		"input:not([inert]):not([inert] *)",
		"select:not([inert]):not([inert] *)",
		"textarea:not([inert]):not([inert] *)",
		"a[href]:not([inert]):not([inert] *)",
		"button:not([inert]):not([inert] *)",
		"[tabindex]:not(slot):not([inert]):not([inert] *)",
		"audio[controls]:not([inert]):not([inert] *)",
		"video[controls]:not([inert]):not([inert] *)",
		"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
		"details>summary:first-of-type:not([inert]):not([inert] *)",
		"details:not([inert]):not([inert] *)"
	];
	candidateSelector = /* #__PURE__ */ candidateSelectors.join(",");
	NoElement = typeof Element === "undefined";
	matches = NoElement ? function() {
		/*!
		* tabbable 6.4.0
		* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
		*/
	} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
		var _element$getRootNode;
		return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
	} : function(element) {
		return element === null || element === void 0 ? void 0 : element.ownerDocument;
	};
	_isInert = function isInert(node, lookUp) {
		var _node$getAttribute;
		if (lookUp === void 0) lookUp = true;
		var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
		return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
	};
	isContentEditable = function isContentEditable(node) {
		var _node$getAttribute2;
		var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
		return attValue === "" || attValue === "true";
	};
	getCandidates = function getCandidates(el, includeContainer, filter) {
		if (_isInert(el)) return [];
		var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
		if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
		candidates = candidates.filter(filter);
		return candidates;
	};
	_getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
		var candidates = [];
		var elementsToCheck = Array.from(elements);
		while (elementsToCheck.length) {
			var element = elementsToCheck.shift();
			if (_isInert(element, false)) continue;
			if (element.tagName === "SLOT") {
				var assigned = element.assignedElements();
				var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: nestedCandidates
				});
			} else {
				if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
				var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
				var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
				if (shadowRoot && validShadowRoot) {
					var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
					if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
					else candidates.push({
						scopeParent: element,
						candidates: _nestedCandidates
					});
				} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
			}
		}
		return candidates;
	};
	hasTabIndex = function hasTabIndex(node) {
		return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
	};
	getTabIndex = function getTabIndex(node) {
		if (!node) throw new Error("No node provided");
		if (node.tabIndex < 0) {
			if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
		}
		return node.tabIndex;
	};
	getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
		var tabIndex = getTabIndex(node);
		if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
		return tabIndex;
	};
	sortOrderedTabbables = function sortOrderedTabbables(a, b) {
		return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
	};
	isInput$1 = function isInput(node) {
		return node.tagName === "INPUT";
	};
	isHiddenInput = function isHiddenInput(node) {
		return isInput$1(node) && node.type === "hidden";
	};
	isDetailsWithSummary = function isDetailsWithSummary(node) {
		return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
			return child.tagName === "SUMMARY";
		});
	};
	getCheckedRadio = function getCheckedRadio(nodes, form) {
		for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
	};
	isTabbableRadio = function isTabbableRadio(node) {
		if (!node.name) return true;
		var radioScope = node.form || getRootNode(node);
		var queryRadios = function queryRadios(name) {
			return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
		};
		var radioSet;
		if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
		else try {
			radioSet = queryRadios(node.name);
		} catch (err) {
			console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
			return false;
		}
		var checked = getCheckedRadio(radioSet, node.form);
		return !checked || checked === node;
	};
	isRadio = function isRadio(node) {
		return isInput$1(node) && node.type === "radio";
	};
	isNonTabbableRadio = function isNonTabbableRadio(node) {
		return isRadio(node) && !isTabbableRadio(node);
	};
	isNodeAttached = function isNodeAttached(node) {
		var _nodeRoot;
		var nodeRoot = node && getRootNode(node);
		var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
		var attached = false;
		if (nodeRoot && nodeRoot !== node) {
			var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
			attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
			while (!attached && nodeRootHost) {
				var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
				nodeRoot = getRootNode(nodeRootHost);
				nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
				attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
			}
		}
		return attached;
	};
	isZeroArea = function isZeroArea(node) {
		var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
		return width === 0 && height === 0;
	};
	isHidden$2 = function isHidden(node, _ref) {
		var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
		if (displayCheck === "full-native") {
			if ("checkVisibility" in node) return !node.checkVisibility({
				checkOpacity: false,
				opacityProperty: false,
				contentVisibilityAuto: true,
				visibilityProperty: true,
				checkVisibilityCSS: true
			});
		}
		if (getComputedStyle(node).visibility === "hidden") return true;
		var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
		if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
		if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
			if (typeof getShadowRoot === "function") {
				var originalNode = node;
				while (node) {
					var parentElement = node.parentElement;
					var rootNode = getRootNode(node);
					if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
					else if (node.assignedSlot) node = node.assignedSlot;
					else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
					else node = parentElement;
				}
				node = originalNode;
			}
			if (isNodeAttached(node)) return !node.getClientRects().length;
			if (displayCheck !== "legacy-full") return true;
		} else if (displayCheck === "non-zero-area") return isZeroArea(node);
		return false;
	};
	isDisabledFromFieldset = function isDisabledFromFieldset(node) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
			var parentNode = node.parentElement;
			while (parentNode) {
				if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
					for (var i = 0; i < parentNode.children.length; i++) {
						var child = parentNode.children.item(i);
						if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
					}
					return true;
				}
				parentNode = parentNode.parentElement;
			}
		}
		return false;
	};
	isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
		if (node.disabled || isHiddenInput(node) || isHidden$2(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
		return true;
	};
	isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
		if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
		return true;
	};
	isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
		var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
		if (isNaN(tabIndex) || tabIndex >= 0) return true;
		return false;
	};
	_sortByOrder = function sortByOrder(candidates) {
		var regularTabbables = [];
		var orderedTabbables = [];
		candidates.forEach(function(item, i) {
			var isScope = !!item.scopeParent;
			var element = isScope ? item.scopeParent : item;
			var candidateTabindex = getSortOrderTabIndex(element, isScope);
			var elements = isScope ? _sortByOrder(item.candidates) : element;
			if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
			else orderedTabbables.push({
				documentOrder: i,
				tabIndex: candidateTabindex,
				item,
				isScope,
				content: elements
			});
		});
		return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
			sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
			return acc;
		}, []).concat(regularTabbables);
	};
	tabbable = function tabbable(container, options) {
		options = options || {};
		var candidates;
		if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorTabbable.bind(null, options),
			flatten: false,
			getShadowRoot: options.getShadowRoot,
			shadowRootFilter: isShadowRootTabbable
		});
		else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
		return _sortByOrder(candidates);
	};
	focusable = function focusable(container, options) {
		options = options || {};
		var candidates;
		if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorFocusable.bind(null, options),
			flatten: true,
			getShadowRoot: options.getShadowRoot
		});
		else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
		return candidates;
	};
	isTabbable = function isTabbable(node, options) {
		options = options || {};
		if (!node) throw new Error("No node provided");
		if (matches.call(node, candidateSelector) === false) return false;
		return isNodeMatchingSelectorTabbable(options, node);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+react@0.27.17_react-dom@19.2.8_react@19.2.8/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform$1() {
	const uaData = navigator.userAgentData;
	if (uaData != null && uaData.platform) return uaData.platform;
	return navigator.platform;
}
function getUserAgent() {
	const uaData = navigator.userAgentData;
	if (uaData && Array.isArray(uaData.brands)) return uaData.brands.map((_ref) => {
		let { brand, version } = _ref;
		return brand + "/" + version;
	}).join(" ");
	return navigator.userAgent;
}
function isSafari$1() {
	return /apple/i.test(navigator.vendor);
}
function isAndroid() {
	const re = /android/i;
	return re.test(getPlatform$1()) || re.test(getUserAgent());
}
function isMac$1() {
	return getPlatform$1().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isJSDOM() {
	return getUserAgent().includes("jsdom/");
}
function activeElement(doc) {
	let activeElement = doc.activeElement;
	while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
		var _activeElement;
		activeElement = activeElement.shadowRoot.activeElement;
	}
	return activeElement;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getTarget(event) {
	if ("composedPath" in event) return event.composedPath()[0];
	return event.target;
}
function isEventTargetWithin(event, node) {
	if (node == null) return false;
	if ("composedPath" in event) return event.composedPath().includes(node);
	const e = event;
	return e.target != null && node.contains(e.target);
}
function isRootElement(element) {
	return element.matches("html,body");
}
function getDocument$1(node) {
	return (node == null ? void 0 : node.ownerDocument) || document;
}
function isTypeableElement(element) {
	return isHTMLElement$1(element) && element.matches(TYPEABLE_SELECTOR);
}
function isTypeableCombobox(element) {
	if (!element) return false;
	return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function matchesFocusVisible(element) {
	if (!element || isJSDOM()) return true;
	try {
		return element.matches(":focus-visible");
	} catch (_e) {
		return true;
	}
}
function getFloatingFocusElement(floatingElement) {
	if (!floatingElement) return null;
	return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE$1) ? floatingElement : floatingElement.querySelector("[data-floating-ui-focusable]") || floatingElement;
}
function getNodeChildren(nodes, id, onlyOpenChildren) {
	if (onlyOpenChildren === void 0) onlyOpenChildren = true;
	return nodes.filter((node) => {
		var _node$context;
		return node.parentId === id && (!onlyOpenChildren || ((_node$context = node.context) == null ? void 0 : _node$context.open));
	}).flatMap((child) => [child, ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
	var _nodes$find;
	let allAncestors = [];
	let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
	while (currentParentId) {
		const currentNode = nodes.find((node) => node.id === currentParentId);
		currentParentId = currentNode == null ? void 0 : currentNode.parentId;
		if (currentNode) allAncestors = allAncestors.concat(currentNode);
	}
	return allAncestors;
}
function stopEvent(event) {
	event.preventDefault();
	event.stopPropagation();
}
function isReactEvent(event) {
	return "nativeEvent" in event;
}
function isVirtualClick(event) {
	if (event.mozInputSource === 0 && event.isTrusted) return true;
	if (isAndroid() && event.pointerType) return event.type === "click" && event.buttons === 1;
	return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
	if (isJSDOM()) return false;
	return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isMouseLikePointerType(pointerType, strict) {
	const values = ["mouse", "pen"];
	if (!strict) values.push("", void 0);
	return values.includes(pointerType);
}
function useLatestRef$1(value) {
	const ref = import_react$172.useRef(value);
	index$1(() => {
		ref.current = value;
	});
	return ref;
}
function useEffectEvent$1(callback) {
	const ref = import_react$172.useRef(() => {});
	useSafeInsertionEffect(() => {
		ref.current = callback;
	});
	return import_react$172.useCallback(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return ref.current == null ? void 0 : ref.current(...args);
	}, []);
}
function getTabbableIn(container, dir) {
	const list = tabbable(container, getTabbableOptions());
	const len = list.length;
	if (len === 0) return;
	const active = activeElement(getDocument$1(container));
	const index = list.indexOf(active);
	return list[index === -1 ? dir === 1 ? 0 : len - 1 : index + dir];
}
function getNextTabbable(referenceElement) {
	return getTabbableIn(getDocument$1(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
	return getTabbableIn(getDocument$1(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
	const containerElement = container || event.currentTarget;
	const relatedTarget = event.relatedTarget;
	return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
	tabbable(container, getTabbableOptions()).forEach((element) => {
		element.dataset.tabindex = element.getAttribute("tabindex") || "";
		element.setAttribute("tabindex", "-1");
	});
}
function enableFocusInside(container) {
	container.querySelectorAll("[data-tabindex]").forEach((element) => {
		const tabindex = element.dataset.tabindex;
		delete element.dataset.tabindex;
		if (tabindex) element.setAttribute("tabindex", tabindex);
		else element.removeAttribute("tabindex");
	});
}
var import_react$172, import_react$173, FOCUSABLE_ATTRIBUTE$1, TYPEABLE_SELECTOR, index$1, SafeReact$1, useSafeInsertionEffect, getTabbableOptions;
var init_floating_ui_react_utils = __esmMin((() => {
	init_floating_ui_utils_dom();
	import_react$172 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$173 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_index_esm();
	FOCUSABLE_ATTRIBUTE$1 = "data-floating-ui-focusable";
	TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
	index$1 = typeof document !== "undefined" ? import_react$173.useLayoutEffect : function noop() {};
	SafeReact$1 = { ...import_react$172 };
	useSafeInsertionEffect = SafeReact$1.useInsertionEffect || ((fn) => fn());
	getTabbableOptions = () => ({
		getShadowRoot: true,
		displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
var MAX_RESET_COUNT, computePosition$1, arrow$3, flip$2, hide$2, originSides, offset$2, shift$2, limitShift$2, size$2;
var init_floating_ui_core = __esmMin((() => {
	init_floating_ui_utils();
	MAX_RESET_COUNT = 50;
	computePosition$1 = async (reference, floating, config) => {
		const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
		const platformWithDetectOverflow = platform.detectOverflow ? platform : {
			...platform,
			detectOverflow
		};
		const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
		let rects = await platform.getElementRects({
			reference,
			floating,
			strategy
		});
		let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
		let statefulPlacement = placement;
		let resetCount = 0;
		const middlewareData = {};
		for (let i = 0; i < middleware.length; i++) {
			const currentMiddleware = middleware[i];
			if (!currentMiddleware) continue;
			const { name, fn } = currentMiddleware;
			const { x: nextX, y: nextY, data, reset } = await fn({
				x,
				y,
				initialPlacement: placement,
				placement: statefulPlacement,
				strategy,
				middlewareData,
				rects,
				platform: platformWithDetectOverflow,
				elements: {
					reference,
					floating
				}
			});
			x = nextX != null ? nextX : x;
			y = nextY != null ? nextY : y;
			middlewareData[name] = {
				...middlewareData[name],
				...data
			};
			if (reset && resetCount < MAX_RESET_COUNT) {
				resetCount++;
				if (typeof reset === "object") {
					if (reset.placement) statefulPlacement = reset.placement;
					if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
						reference,
						floating,
						strategy
					}) : reset.rects;
					({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
				}
				i = -1;
			}
		}
		return {
			x,
			y,
			placement: statefulPlacement,
			strategy,
			middlewareData
		};
	};
	arrow$3 = (options) => ({
		name: "arrow",
		options,
		async fn(state) {
			const { x, y, placement, rects, platform, elements, middlewareData } = state;
			const { element, padding = 0 } = evaluate(options, state) || {};
			if (element == null) return {};
			const paddingObject = getPaddingObject(padding);
			const coords = {
				x,
				y
			};
			const axis = getAlignmentAxis(placement);
			const length = getAxisLength(axis);
			const arrowDimensions = await platform.getDimensions(element);
			const isYAxis = axis === "y";
			const minProp = isYAxis ? "top" : "left";
			const maxProp = isYAxis ? "bottom" : "right";
			const clientProp = isYAxis ? "clientHeight" : "clientWidth";
			const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
			const startDiff = coords[axis] - rects.reference[axis];
			const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
			let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
			if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
			const centerToReference = endDiff / 2 - startDiff / 2;
			const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
			const minPadding = min(paddingObject[minProp], largestPossiblePadding);
			const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
			const max = clientSize - arrowDimensions[length] - maxPadding;
			const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
			const offset = clamp(minPadding, center, max);
			const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
			const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max : 0;
			return {
				[axis]: coords[axis] + alignmentOffset,
				data: {
					[axis]: offset,
					centerOffset: center - offset - alignmentOffset,
					...shouldAddOffset && { alignmentOffset }
				},
				reset: shouldAddOffset
			};
		}
	});
	flip$2 = function(options) {
		if (options === void 0) options = {};
		return {
			name: "flip",
			options,
			async fn(state) {
				var _middlewareData$arrow, _middlewareData$flip;
				const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
				const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
				if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
				const side = getSide(placement);
				const initialSideAxis = getSideAxis(initialPlacement);
				const isBasePlacement = getSide(initialPlacement) === initialPlacement;
				const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
				const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
				const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
				if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
				const placements = [initialPlacement, ...fallbackPlacements];
				const overflow = await platform.detectOverflow(state, detectOverflowOptions);
				const overflows = [];
				let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
				if (checkMainAxis) overflows.push(overflow[side]);
				if (checkCrossAxis) {
					const sides = getAlignmentSides(placement, rects, rtl);
					overflows.push(overflow[sides[0]], overflow[sides[1]]);
				}
				overflowsData = [...overflowsData, {
					placement,
					overflows
				}];
				if (!overflows.every((side) => side <= 0)) {
					var _middlewareData$flip2, _overflowsData$filter;
					const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
					const nextPlacement = placements[nextIndex];
					if (nextPlacement) {
						if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
							data: {
								index: nextIndex,
								overflows: overflowsData
							},
							reset: { placement: nextPlacement }
						};
					}
					let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
					if (!resetPlacement) switch (fallbackStrategy) {
						case "bestFit": {
							var _overflowsData$filter2;
							const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
								if (hasFallbackAxisSideDirection) {
									const currentSideAxis = getSideAxis(d.placement);
									return currentSideAxis === initialSideAxis || currentSideAxis === "y";
								}
								return true;
							}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
							if (placement) resetPlacement = placement;
							break;
						}
						case "initialPlacement":
							resetPlacement = initialPlacement;
							break;
					}
					if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
				}
				return {};
			}
		};
	};
	hide$2 = function(options) {
		if (options === void 0) options = {};
		return {
			name: "hide",
			options,
			async fn(state) {
				const { rects, platform } = state;
				const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
				switch (strategy) {
					case "referenceHidden": {
						const offsets = getSideOffsets(await platform.detectOverflow(state, {
							...detectOverflowOptions,
							elementContext: "reference"
						}), rects.reference);
						return { data: {
							referenceHiddenOffsets: offsets,
							referenceHidden: isAnySideFullyClipped(offsets)
						} };
					}
					case "escaped": {
						const offsets = getSideOffsets(await platform.detectOverflow(state, {
							...detectOverflowOptions,
							altBoundary: true
						}), rects.floating);
						return { data: {
							escapedOffsets: offsets,
							escaped: isAnySideFullyClipped(offsets)
						} };
					}
					default: return {};
				}
			}
		};
	};
	originSides = /*#__PURE__*/ new Set(["left", "top"]);
	offset$2 = function(options) {
		if (options === void 0) options = 0;
		return {
			name: "offset",
			options,
			async fn(state) {
				var _middlewareData$offse, _middlewareData$arrow;
				const { x, y, placement, middlewareData } = state;
				const diffCoords = await convertValueToCoords(state, options);
				if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
				return {
					x: x + diffCoords.x,
					y: y + diffCoords.y,
					data: {
						...diffCoords,
						placement
					}
				};
			}
		};
	};
	shift$2 = function(options) {
		if (options === void 0) options = {};
		return {
			name: "shift",
			options,
			async fn(state) {
				const { x, y, placement, platform } = state;
				const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
					let { x, y } = _ref;
					return {
						x,
						y
					};
				} }, ...detectOverflowOptions } = evaluate(options, state);
				const coords = {
					x,
					y
				};
				const overflow = await platform.detectOverflow(state, detectOverflowOptions);
				const crossAxis = getSideAxis(placement);
				const mainAxis = getOppositeAxis(crossAxis);
				let mainAxisCoord = coords[mainAxis];
				let crossAxisCoord = coords[crossAxis];
				const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
				if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
				if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
				const limitedCoords = limiter.fn({
					...state,
					[mainAxis]: mainAxisCoord,
					[crossAxis]: crossAxisCoord
				});
				return {
					...limitedCoords,
					data: {
						x: limitedCoords.x - x,
						y: limitedCoords.y - y,
						enabled: {
							[mainAxis]: checkMainAxis,
							[crossAxis]: checkCrossAxis
						}
					}
				};
			}
		};
	};
	limitShift$2 = function(options) {
		if (options === void 0) options = {};
		return {
			options,
			fn(state) {
				var _rawOffset$mainAxis, _rawOffset$crossAxis;
				const { x, y, placement, rects, middlewareData } = state;
				const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
				const coords = {
					x,
					y
				};
				const crossAxis = getSideAxis(placement);
				const mainAxis = getOppositeAxis(crossAxis);
				let mainAxisCoord = coords[mainAxis];
				let crossAxisCoord = coords[crossAxis];
				const rawOffset = evaluate(offset, state);
				const computedOffset = typeof rawOffset === "number" ? {
					mainAxis: rawOffset,
					crossAxis: 0
				} : {
					mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
					crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
				};
				if (checkMainAxis) {
					const len = mainAxis === "y" ? "height" : "width";
					const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
					const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
					if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
					else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
				}
				if (checkCrossAxis) {
					var _middlewareData$offse, _middlewareData$offse2;
					const len = mainAxis === "y" ? "width" : "height";
					const isOriginSide = originSides.has(getSide(placement));
					const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
					const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
					if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
					else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
				}
				return {
					[mainAxis]: mainAxisCoord,
					[crossAxis]: crossAxisCoord
				};
			}
		};
	};
	size$2 = function(options) {
		if (options === void 0) options = {};
		return {
			name: "size",
			options,
			async fn(state) {
				const { placement, rects, platform, elements } = state;
				const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
				const overflow = await platform.detectOverflow(state, detectOverflowOptions);
				const side = getSide(placement);
				const alignment = getAlignment(placement);
				const isYAxis = getSideAxis(placement) === "y";
				const { width, height } = rects.floating;
				let heightSide;
				let widthSide;
				if (side === "top" || side === "bottom") {
					heightSide = side;
					widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
				} else {
					widthSide = side;
					heightSide = alignment === "end" ? "top" : "bottom";
				}
				const maximumClippingHeight = height - overflow.top - overflow.bottom;
				const maximumClippingWidth = width - overflow.left - overflow.right;
				const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
				const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
				const shiftData = state.middlewareData.shift;
				const noShift = !shiftData;
				let availableHeight = overflowAvailableHeight;
				let availableWidth = overflowAvailableWidth;
				if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
				if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
				if (noShift && !alignment) if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
				else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
				await apply({
					...state,
					availableWidth,
					availableHeight
				});
				const nextDimensions = await platform.getDimensions(elements.floating);
				if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
				return {};
			}
		};
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement$1(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement$1(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement$1(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement$1(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
var noOffsets, SCROLLBAR_MAX, getElementRects, platform, offset$1, shift$1, flip$1, size$1, hide$1, arrow$2, limitShift$1, computePosition;
var init_floating_ui_dom = __esmMin((() => {
	init_floating_ui_core();
	init_floating_ui_utils();
	init_floating_ui_utils_dom();
	noOffsets = /*#__PURE__*/ createCoords(0);
	SCROLLBAR_MAX = 25;
	getElementRects = async function(data) {
		const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
		const getDimensionsFn = this.getDimensions;
		const floatingDimensions = await getDimensionsFn(data.floating);
		return {
			reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
			floating: {
				x: 0,
				y: 0,
				width: floatingDimensions.width,
				height: floatingDimensions.height
			}
		};
	};
	platform = {
		convertOffsetParentRelativeRectToViewportRelativeRect,
		getDocumentElement,
		getClippingRect,
		getOffsetParent,
		getElementRects,
		getClientRects,
		getDimensions,
		getScale,
		isElement,
		isRTL
	};
	offset$1 = offset$2;
	shift$1 = shift$2;
	flip$1 = flip$2;
	size$1 = size$2;
	hide$1 = hide$2;
	arrow$2 = arrow$3;
	limitShift$1 = limitShift$2;
	computePosition = (reference, floating, options) => {
		const cache = /* @__PURE__ */ new Map();
		const mergedOptions = options != null ? options : {};
		const platformWithCache = {
			...platform,
			...mergedOptions.platform,
			_c: cache
		};
		return computePosition$1(reference, floating, {
			...mergedOptions,
			platform: platformWithCache
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+react-dom@2.1.9_react-dom@19.2.8_react@19.2.8/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (typeof a === "function" && a.toString() === b.toString()) return true;
	let length;
	let i;
	let keys;
	if (a && b && typeof a === "object") {
		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
			return true;
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;
		for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (key === "_owner" && a.$$typeof) continue;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
	const ref = import_react$170.useRef(value);
	index(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Provides data to position a floating element.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating$1(options) {
	if (options === void 0) options = {};
	const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
	const [data, setData] = import_react$170.useState({
		x: 0,
		y: 0,
		strategy,
		placement,
		middlewareData: {},
		isPositioned: false
	});
	const [latestMiddleware, setLatestMiddleware] = import_react$170.useState(middleware);
	if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
	const [_reference, _setReference] = import_react$170.useState(null);
	const [_floating, _setFloating] = import_react$170.useState(null);
	const setReference = import_react$170.useCallback((node) => {
		if (node !== referenceRef.current) {
			referenceRef.current = node;
			_setReference(node);
		}
	}, []);
	const setFloating = import_react$170.useCallback((node) => {
		if (node !== floatingRef.current) {
			floatingRef.current = node;
			_setFloating(node);
		}
	}, []);
	const referenceEl = externalReference || _reference;
	const floatingEl = externalFloating || _floating;
	const referenceRef = import_react$170.useRef(null);
	const floatingRef = import_react$170.useRef(null);
	const dataRef = import_react$170.useRef(data);
	const hasWhileElementsMounted = whileElementsMounted != null;
	const whileElementsMountedRef = useLatestRef(whileElementsMounted);
	const platformRef = useLatestRef(platform);
	const openRef = useLatestRef(open);
	const update = import_react$170.useCallback(() => {
		if (!referenceRef.current || !floatingRef.current) return;
		const config = {
			placement,
			strategy,
			middleware: latestMiddleware
		};
		if (platformRef.current) config.platform = platformRef.current;
		computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
			const fullData = {
				...data,
				isPositioned: openRef.current !== false
			};
			if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
				dataRef.current = fullData;
				import_react_dom$6.flushSync(() => {
					setData(fullData);
				});
			}
		});
	}, [
		latestMiddleware,
		placement,
		strategy,
		platformRef,
		openRef
	]);
	index(() => {
		if (open === false && dataRef.current.isPositioned) {
			dataRef.current.isPositioned = false;
			setData((data) => ({
				...data,
				isPositioned: false
			}));
		}
	}, [open]);
	const isMountedRef = import_react$170.useRef(false);
	index(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	index(() => {
		if (referenceEl) referenceRef.current = referenceEl;
		if (floatingEl) floatingRef.current = floatingEl;
		if (referenceEl && floatingEl) {
			if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
			update();
		}
	}, [
		referenceEl,
		floatingEl,
		update,
		whileElementsMountedRef,
		hasWhileElementsMounted
	]);
	const refs = import_react$170.useMemo(() => ({
		reference: referenceRef,
		floating: floatingRef,
		setReference,
		setFloating
	}), [setReference, setFloating]);
	const elements = import_react$170.useMemo(() => ({
		reference: referenceEl,
		floating: floatingEl
	}), [referenceEl, floatingEl]);
	const floatingStyles = import_react$170.useMemo(() => {
		const initialStyles = {
			position: strategy,
			left: 0,
			top: 0
		};
		if (!elements.floating) return initialStyles;
		const x = roundByDPR(elements.floating, data.x);
		const y = roundByDPR(elements.floating, data.y);
		if (transform) return {
			...initialStyles,
			transform: "translate(" + x + "px, " + y + "px)",
			...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: x,
			top: y
		};
	}, [
		strategy,
		transform,
		elements.floating,
		data.x,
		data.y
	]);
	return import_react$170.useMemo(() => ({
		...data,
		update,
		refs,
		elements,
		floatingStyles
	}), [
		data,
		update,
		refs,
		elements,
		floatingStyles
	]);
}
var import_react$170, import_react$171, import_react_dom$6, index, arrow$1, offset, shift, limitShift, flip, size, hide, arrow;
var init_floating_ui_react_dom = __esmMin((() => {
	init_floating_ui_dom();
	import_react$170 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$171 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$6 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	index = typeof document !== "undefined" ? import_react$171.useLayoutEffect : function noop() {};
	arrow$1 = (options) => {
		function isRef(value) {
			return {}.hasOwnProperty.call(value, "current");
		}
		return {
			name: "arrow",
			options,
			fn(state) {
				const { element, padding } = typeof options === "function" ? options(state) : options;
				if (element && isRef(element)) {
					if (element.current != null) return arrow$2({
						element: element.current,
						padding
					}).fn(state);
					return {};
				}
				if (element) return arrow$2({
					element,
					padding
				}).fn(state);
				return {};
			}
		};
	};
	offset = (options, deps) => {
		const result = offset$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	shift = (options, deps) => {
		const result = shift$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	limitShift = (options, deps) => {
		return {
			fn: limitShift$1(options).fn,
			options: [options, deps]
		};
	};
	flip = (options, deps) => {
		const result = flip$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	size = (options, deps) => {
		const result = size$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	hide = (options, deps) => {
		const result = hide$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	arrow = (options, deps) => {
		const result = arrow$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+react@0.27.17_react-dom@19.2.8_react@19.2.8/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
/**
* Merges an array of refs into a single memoized callback ref or `null`.
* @see https://floating-ui.com/docs/react-utils#usemergerefs
*/
function useMergeRefs$2(refs) {
	const cleanupRef = import_react$169.useRef(void 0);
	const refEffect = import_react$169.useCallback((instance) => {
		const cleanups = refs.map((ref) => {
			if (ref == null) return;
			if (typeof ref === "function") {
				const refCallback = ref;
				const refCleanup = refCallback(instance);
				return typeof refCleanup === "function" ? refCleanup : () => {
					refCallback(null);
				};
			}
			ref.current = instance;
			return () => {
				ref.current = null;
			};
		});
		return () => {
			cleanups.forEach((refCleanup) => refCleanup == null ? void 0 : refCleanup());
		};
	}, refs);
	return import_react$169.useMemo(() => {
		if (refs.every((ref) => ref == null)) return null;
		return (value) => {
			if (cleanupRef.current) {
				cleanupRef.current();
				cleanupRef.current = void 0;
			}
			if (value != null) cleanupRef.current = refEffect(value);
		};
	}, refs);
}
function useFloatingId() {
	const [id, setId] = import_react$169.useState(() => serverHandoffComplete ? genId() : void 0);
	index$1(() => {
		if (id == null) setId(genId());
	}, []);
	import_react$169.useEffect(() => {
		serverHandoffComplete = true;
	}, []);
	return id;
}
function createEventEmitter() {
	const map = /* @__PURE__ */ new Map();
	return {
		emit(event, data) {
			var _map$get;
			(_map$get = map.get(event)) == null || _map$get.forEach((listener) => listener(data));
		},
		on(event, listener) {
			if (!map.has(event)) map.set(event, /* @__PURE__ */ new Set());
			map.get(event).add(listener);
		},
		off(event, listener) {
			var _map$get2;
			(_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
		}
	};
}
function createAttribute(name) {
	return "data-floating-ui-" + name;
}
function clearTimeoutIfSet(timeoutRef) {
	if (timeoutRef.current !== -1) {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = -1;
	}
}
function getDelay(value, prop, pointerType) {
	if (pointerType && !isMouseLikePointerType(pointerType)) return 0;
	if (typeof value === "number") return value;
	if (typeof value === "function") {
		const result = value();
		if (typeof result === "number") return result;
		return result == null ? void 0 : result[prop];
	}
	return value == null ? void 0 : value[prop];
}
function getRestMs(value) {
	if (typeof value === "function") return value();
	return value;
}
/**
* Opens the floating element while hovering over the reference element, like
* CSS `:hover`.
* @see https://floating-ui.com/docs/useHover
*/
function useHover(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, dataRef, events, elements } = context;
	const { enabled = true, delay = 0, handleClose = null, mouseOnly = false, restMs = 0, move = true } = props;
	const tree = useFloatingTree();
	const parentId = useFloatingParentNodeId();
	const handleCloseRef = useLatestRef$1(handleClose);
	const delayRef = useLatestRef$1(delay);
	const openRef = useLatestRef$1(open);
	const restMsRef = useLatestRef$1(restMs);
	const pointerTypeRef = import_react$169.useRef();
	const timeoutRef = import_react$169.useRef(-1);
	const handlerRef = import_react$169.useRef();
	const restTimeoutRef = import_react$169.useRef(-1);
	const blockMouseMoveRef = import_react$169.useRef(true);
	const performedPointerEventsMutationRef = import_react$169.useRef(false);
	const unbindMouseMoveRef = import_react$169.useRef(() => {});
	const restTimeoutPendingRef = import_react$169.useRef(false);
	const isHoverOpen = useEffectEvent$1(() => {
		var _dataRef$current$open;
		const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
		return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
	});
	import_react$169.useEffect(() => {
		if (!enabled) return;
		function onOpenChange(_ref) {
			let { open } = _ref;
			if (!open) {
				clearTimeoutIfSet(timeoutRef);
				clearTimeoutIfSet(restTimeoutRef);
				blockMouseMoveRef.current = true;
				restTimeoutPendingRef.current = false;
			}
		}
		events.on("openchange", onOpenChange);
		return () => {
			events.off("openchange", onOpenChange);
		};
	}, [enabled, events]);
	import_react$169.useEffect(() => {
		if (!enabled) return;
		if (!handleCloseRef.current) return;
		if (!open) return;
		function onLeave(event) {
			if (isHoverOpen()) onOpenChange(false, event, "hover");
		}
		const html = getDocument$1(elements.floating).documentElement;
		html.addEventListener("mouseleave", onLeave);
		return () => {
			html.removeEventListener("mouseleave", onLeave);
		};
	}, [
		elements.floating,
		open,
		onOpenChange,
		enabled,
		handleCloseRef,
		isHoverOpen
	]);
	const closeWithDelay = import_react$169.useCallback(function(event, runElseBranch, reason) {
		if (runElseBranch === void 0) runElseBranch = true;
		if (reason === void 0) reason = "hover";
		const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
		if (closeDelay && !handlerRef.current) {
			clearTimeoutIfSet(timeoutRef);
			timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
		} else if (runElseBranch) {
			clearTimeoutIfSet(timeoutRef);
			onOpenChange(false, event, reason);
		}
	}, [delayRef, onOpenChange]);
	const cleanupMouseMoveHandler = useEffectEvent$1(() => {
		unbindMouseMoveRef.current();
		handlerRef.current = void 0;
	});
	const clearPointerEvents = useEffectEvent$1(() => {
		if (performedPointerEventsMutationRef.current) {
			const body = getDocument$1(elements.floating).body;
			body.style.pointerEvents = "";
			body.removeAttribute(safePolygonIdentifier);
			performedPointerEventsMutationRef.current = false;
		}
	});
	const isClickLikeOpenEvent = useEffectEvent$1(() => {
		return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
	});
	import_react$169.useEffect(() => {
		if (!enabled) return;
		function onReferenceMouseEnter(event) {
			clearTimeoutIfSet(timeoutRef);
			blockMouseMoveRef.current = false;
			if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || getRestMs(restMsRef.current) > 0 && !getDelay(delayRef.current, "open")) return;
			const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
			if (openDelay) timeoutRef.current = window.setTimeout(() => {
				if (!openRef.current) onOpenChange(true, event, "hover");
			}, openDelay);
			else if (!open) onOpenChange(true, event, "hover");
		}
		function onReferenceMouseLeave(event) {
			if (isClickLikeOpenEvent()) {
				clearPointerEvents();
				return;
			}
			unbindMouseMoveRef.current();
			const doc = getDocument$1(elements.floating);
			clearTimeoutIfSet(restTimeoutRef);
			restTimeoutPendingRef.current = false;
			if (handleCloseRef.current && dataRef.current.floatingContext) {
				if (!open) clearTimeoutIfSet(timeoutRef);
				handlerRef.current = handleCloseRef.current({
					...dataRef.current.floatingContext,
					tree,
					x: event.clientX,
					y: event.clientY,
					onClose() {
						clearPointerEvents();
						cleanupMouseMoveHandler();
						if (!isClickLikeOpenEvent()) closeWithDelay(event, true, "safe-polygon");
					}
				});
				const handler = handlerRef.current;
				doc.addEventListener("mousemove", handler);
				unbindMouseMoveRef.current = () => {
					doc.removeEventListener("mousemove", handler);
				};
				return;
			}
			if (pointerTypeRef.current === "touch" ? !contains(elements.floating, event.relatedTarget) : true) closeWithDelay(event);
		}
		function onScrollMouseLeave(event) {
			if (isClickLikeOpenEvent()) return;
			if (!dataRef.current.floatingContext) return;
			handleCloseRef.current == null || handleCloseRef.current({
				...dataRef.current.floatingContext,
				tree,
				x: event.clientX,
				y: event.clientY,
				onClose() {
					clearPointerEvents();
					cleanupMouseMoveHandler();
					if (!isClickLikeOpenEvent()) closeWithDelay(event);
				}
			})(event);
		}
		function onFloatingMouseEnter() {
			clearTimeoutIfSet(timeoutRef);
		}
		function onFloatingMouseLeave(event) {
			if (!isClickLikeOpenEvent()) closeWithDelay(event, false);
		}
		if (isElement(elements.domReference)) {
			const reference = elements.domReference;
			const floating = elements.floating;
			if (open) reference.addEventListener("mouseleave", onScrollMouseLeave);
			if (move) reference.addEventListener("mousemove", onReferenceMouseEnter, { once: true });
			reference.addEventListener("mouseenter", onReferenceMouseEnter);
			reference.addEventListener("mouseleave", onReferenceMouseLeave);
			if (floating) {
				floating.addEventListener("mouseleave", onScrollMouseLeave);
				floating.addEventListener("mouseenter", onFloatingMouseEnter);
				floating.addEventListener("mouseleave", onFloatingMouseLeave);
			}
			return () => {
				if (open) reference.removeEventListener("mouseleave", onScrollMouseLeave);
				if (move) reference.removeEventListener("mousemove", onReferenceMouseEnter);
				reference.removeEventListener("mouseenter", onReferenceMouseEnter);
				reference.removeEventListener("mouseleave", onReferenceMouseLeave);
				if (floating) {
					floating.removeEventListener("mouseleave", onScrollMouseLeave);
					floating.removeEventListener("mouseenter", onFloatingMouseEnter);
					floating.removeEventListener("mouseleave", onFloatingMouseLeave);
				}
			};
		}
	}, [
		elements,
		enabled,
		context,
		mouseOnly,
		move,
		closeWithDelay,
		cleanupMouseMoveHandler,
		clearPointerEvents,
		onOpenChange,
		open,
		openRef,
		tree,
		delayRef,
		handleCloseRef,
		dataRef,
		isClickLikeOpenEvent,
		restMsRef
	]);
	index$1(() => {
		var _handleCloseRef$curre;
		if (!enabled) return;
		if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && (_handleCloseRef$curre = _handleCloseRef$curre.__options) != null && _handleCloseRef$curre.blockPointerEvents && isHoverOpen()) {
			performedPointerEventsMutationRef.current = true;
			const floatingEl = elements.floating;
			if (isElement(elements.domReference) && floatingEl) {
				var _tree$nodesRef$curren;
				const body = getDocument$1(elements.floating).body;
				body.setAttribute(safePolygonIdentifier, "");
				const ref = elements.domReference;
				const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
				if (parentFloating) parentFloating.style.pointerEvents = "";
				body.style.pointerEvents = "none";
				ref.style.pointerEvents = "auto";
				floatingEl.style.pointerEvents = "auto";
				return () => {
					body.style.pointerEvents = "";
					ref.style.pointerEvents = "";
					floatingEl.style.pointerEvents = "";
				};
			}
		}
	}, [
		enabled,
		open,
		parentId,
		elements,
		tree,
		handleCloseRef,
		isHoverOpen
	]);
	index$1(() => {
		if (!open) {
			pointerTypeRef.current = void 0;
			restTimeoutPendingRef.current = false;
			cleanupMouseMoveHandler();
			clearPointerEvents();
		}
	}, [
		open,
		cleanupMouseMoveHandler,
		clearPointerEvents
	]);
	import_react$169.useEffect(() => {
		return () => {
			cleanupMouseMoveHandler();
			clearTimeoutIfSet(timeoutRef);
			clearTimeoutIfSet(restTimeoutRef);
			clearPointerEvents();
		};
	}, [
		enabled,
		elements.domReference,
		cleanupMouseMoveHandler,
		clearPointerEvents
	]);
	const reference = import_react$169.useMemo(() => {
		function setPointerRef(event) {
			pointerTypeRef.current = event.pointerType;
		}
		return {
			onPointerDown: setPointerRef,
			onPointerEnter: setPointerRef,
			onMouseMove(event) {
				const { nativeEvent } = event;
				function handleMouseMove() {
					if (!blockMouseMoveRef.current && !openRef.current) onOpenChange(true, nativeEvent, "hover");
				}
				if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current)) return;
				if (open || getRestMs(restMsRef.current) === 0) return;
				if (restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2) return;
				clearTimeoutIfSet(restTimeoutRef);
				if (pointerTypeRef.current === "touch") handleMouseMove();
				else {
					restTimeoutPendingRef.current = true;
					restTimeoutRef.current = window.setTimeout(handleMouseMove, getRestMs(restMsRef.current));
				}
			}
		};
	}, [
		mouseOnly,
		onOpenChange,
		open,
		openRef,
		restMsRef
	]);
	return import_react$169.useMemo(() => enabled ? { reference } : {}, [enabled, reference]);
}
/**
* Provides context for a group of floating elements that should share a
* `delay`.
* @see https://floating-ui.com/docs/FloatingDelayGroup
*/
function FloatingDelayGroup(props) {
	const { children, delay, timeoutMs = 0 } = props;
	const [state, setState] = import_react$169.useReducer((prev, next) => ({
		...prev,
		...next
	}), {
		delay,
		timeoutMs,
		initialDelay: delay,
		currentId: null,
		isInstantPhase: false
	});
	const initialCurrentIdRef = import_react$169.useRef(null);
	const setCurrentId = import_react$169.useCallback((currentId) => {
		setState({ currentId });
	}, []);
	index$1(() => {
		if (state.currentId) {
			if (initialCurrentIdRef.current === null) initialCurrentIdRef.current = state.currentId;
			else if (!state.isInstantPhase) setState({ isInstantPhase: true });
		} else {
			if (state.isInstantPhase) setState({ isInstantPhase: false });
			initialCurrentIdRef.current = null;
		}
	}, [state.currentId, state.isInstantPhase]);
	return /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)(FloatingDelayGroupContext.Provider, {
		value: import_react$169.useMemo(() => ({
			...state,
			setState,
			setCurrentId
		}), [state, setCurrentId]),
		children
	});
}
/**
* Enables grouping when called inside a component that's a child of a
* `FloatingDelayGroup`.
* @see https://floating-ui.com/docs/FloatingDelayGroup
*/
function useDelayGroup(context, options) {
	if (options === void 0) options = {};
	const { open, onOpenChange, floatingId } = context;
	const { id: optionId, enabled = true } = options;
	const id = optionId != null ? optionId : floatingId;
	const groupContext = useDelayGroupContext();
	const { currentId, setCurrentId, initialDelay, setState, timeoutMs } = groupContext;
	index$1(() => {
		if (!enabled) return;
		if (!currentId) return;
		setState({ delay: {
			open: 1,
			close: getDelay(initialDelay, "close")
		} });
		if (currentId !== id) onOpenChange(false);
	}, [
		enabled,
		id,
		onOpenChange,
		setState,
		currentId,
		initialDelay
	]);
	index$1(() => {
		function unset() {
			onOpenChange(false);
			setState({
				delay: initialDelay,
				currentId: null
			});
		}
		if (!enabled) return;
		if (!currentId) return;
		if (!open && currentId === id) {
			if (timeoutMs) {
				const timeout = window.setTimeout(unset, timeoutMs);
				return () => {
					clearTimeout(timeout);
				};
			}
			unset();
		}
	}, [
		enabled,
		open,
		setState,
		currentId,
		id,
		onOpenChange,
		initialDelay,
		timeoutMs
	]);
	index$1(() => {
		if (!enabled) return;
		if (setCurrentId === NOOP || !open) return;
		setCurrentId(id);
	}, [
		enabled,
		open,
		setCurrentId,
		id
	]);
	return groupContext;
}
function enqueueFocus(el, options) {
	if (options === void 0) options = {};
	const { preventScroll = false, cancelPrevious = true, sync = false } = options;
	cancelPrevious && cancelAnimationFrame(rafId);
	const exec = () => el == null ? void 0 : el.focus({ preventScroll });
	if (sync) exec();
	else rafId = requestAnimationFrame(exec);
}
function getDocument(node) {
	return (node == null ? void 0 : node.ownerDocument) || document;
}
function getCounterMap(control) {
	if (control === "inert") return counters.inert;
	if (control === "aria-hidden") return counters["aria-hidden"];
	return counters.none;
}
function applyAttributeToOthers$1(uncorrectedAvoidElements, body, ariaHidden, inert) {
	const markerName = "data-floating-ui-inert";
	const controlAttribute = inert ? "inert" : ariaHidden ? "aria-hidden" : null;
	const avoidElements = correctElements(body, uncorrectedAvoidElements);
	const elementsToKeep = /* @__PURE__ */ new Set();
	const elementsToStop = new Set(avoidElements);
	const hiddenElements = [];
	if (!markerMap$1[markerName]) markerMap$1[markerName] = /* @__PURE__ */ new WeakMap();
	const markerCounter = markerMap$1[markerName];
	avoidElements.forEach(keep);
	deep(body);
	elementsToKeep.clear();
	function keep(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		el.parentNode && keep(el.parentNode);
	}
	function deep(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		[].forEach.call(parent.children, (node) => {
			if (getNodeName(node) === "script") return;
			if (elementsToKeep.has(node)) deep(node);
			else {
				const attr = controlAttribute ? node.getAttribute(controlAttribute) : null;
				const alreadyHidden = attr !== null && attr !== "false";
				const counterMap = getCounterMap(controlAttribute);
				const counterValue = (counterMap.get(node) || 0) + 1;
				const markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenElements.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledElementsSet.add(node);
				if (markerValue === 1) node.setAttribute(markerName, "");
				if (!alreadyHidden && controlAttribute) node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
			}
		});
	}
	lockCount$1++;
	return () => {
		hiddenElements.forEach((element) => {
			const counterMap = getCounterMap(controlAttribute);
			const counterValue = (counterMap.get(element) || 0) - 1;
			const markerValue = (markerCounter.get(element) || 0) - 1;
			counterMap.set(element, counterValue);
			markerCounter.set(element, markerValue);
			if (!counterValue) {
				if (!uncontrolledElementsSet.has(element) && controlAttribute) element.removeAttribute(controlAttribute);
				uncontrolledElementsSet.delete(element);
			}
			if (!markerValue) element.removeAttribute(markerName);
		});
		lockCount$1--;
		if (!lockCount$1) {
			counters.inert = /* @__PURE__ */ new WeakMap();
			counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
			counters.none = /* @__PURE__ */ new WeakMap();
			uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
			markerMap$1 = {};
		}
	};
}
function markOthers(avoidElements, ariaHidden, inert) {
	if (ariaHidden === void 0) ariaHidden = false;
	if (inert === void 0) inert = false;
	const body = getDocument(avoidElements[0]).body;
	return applyAttributeToOthers$1(avoidElements.concat(Array.from(body.querySelectorAll("[aria-live],[role=\"status\"],output"))), body, ariaHidden, inert);
}
/**
* @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
*/
function useFloatingPortalNode(props) {
	if (props === void 0) props = {};
	const { id, root } = props;
	const uniqueId = useId$9();
	const portalContext = usePortalContext$2();
	const [portalNode, setPortalNode] = import_react$169.useState(null);
	const portalNodeRef = import_react$169.useRef(null);
	index$1(() => {
		return () => {
			portalNode?.remove();
			queueMicrotask(() => {
				portalNodeRef.current = null;
			});
		};
	}, [portalNode]);
	index$1(() => {
		if (!uniqueId) return;
		if (portalNodeRef.current) return;
		const existingIdRoot = id ? document.getElementById(id) : null;
		if (!existingIdRoot) return;
		const subRoot = document.createElement("div");
		subRoot.id = uniqueId;
		subRoot.setAttribute(attr, "");
		existingIdRoot.appendChild(subRoot);
		portalNodeRef.current = subRoot;
		setPortalNode(subRoot);
	}, [id, uniqueId]);
	index$1(() => {
		if (root === null) return;
		if (!uniqueId) return;
		if (portalNodeRef.current) return;
		let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
		if (container && !isNode(container)) container = container.current;
		container = container || document.body;
		let idWrapper = null;
		if (id) {
			idWrapper = document.createElement("div");
			idWrapper.id = id;
			container.appendChild(idWrapper);
		}
		const subRoot = document.createElement("div");
		subRoot.id = uniqueId;
		subRoot.setAttribute(attr, "");
		container = idWrapper || container;
		container.appendChild(subRoot);
		portalNodeRef.current = subRoot;
		setPortalNode(subRoot);
	}, [
		id,
		root,
		uniqueId,
		portalContext
	]);
	return portalNode;
}
/**
* Portals the floating element into a given container element — by default,
* outside of the app root and into the body.
* This is necessary to ensure the floating element can appear outside any
* potential parent containers that cause clipping (such as `overflow: hidden`),
* while retaining its location in the React tree.
* @see https://floating-ui.com/docs/FloatingPortal
*/
function FloatingPortal(props) {
	const { children, id, root, preserveTabOrder = true } = props;
	const portalNode = useFloatingPortalNode({
		id,
		root
	});
	const [focusManagerState, setFocusManagerState] = import_react$169.useState(null);
	const beforeOutsideRef = import_react$169.useRef(null);
	const afterOutsideRef = import_react$169.useRef(null);
	const beforeInsideRef = import_react$169.useRef(null);
	const afterInsideRef = import_react$169.useRef(null);
	const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
	const open = focusManagerState == null ? void 0 : focusManagerState.open;
	const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && preserveTabOrder && !!(root || portalNode);
	import_react$169.useEffect(() => {
		if (!portalNode || !preserveTabOrder || modal) return;
		function onFocus(event) {
			if (portalNode && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(portalNode);
		}
		portalNode.addEventListener("focusin", onFocus, true);
		portalNode.addEventListener("focusout", onFocus, true);
		return () => {
			portalNode.removeEventListener("focusin", onFocus, true);
			portalNode.removeEventListener("focusout", onFocus, true);
		};
	}, [
		portalNode,
		preserveTabOrder,
		modal
	]);
	import_react$169.useEffect(() => {
		if (!portalNode) return;
		if (open) return;
		enableFocusInside(portalNode);
	}, [open, portalNode]);
	return /*#__PURE__*/ (0, import_jsx_runtime$127.jsxs)(PortalContext.Provider, {
		value: import_react$169.useMemo(() => ({
			preserveTabOrder,
			beforeOutsideRef,
			afterOutsideRef,
			beforeInsideRef,
			afterInsideRef,
			portalNode,
			setFocusManagerState
		}), [preserveTabOrder, portalNode]),
		children: [
			shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)(FocusGuard, {
				"data-type": "outside",
				ref: beforeOutsideRef,
				onFocus: (event) => {
					if (isOutsideEvent(event, portalNode)) {
						var _beforeInsideRef$curr;
						(_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
					} else getPreviousTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
				}
			}),
			shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("span", {
				"aria-owns": portalNode.id,
				style: HIDDEN_OWNER_STYLES
			}),
			portalNode && /*#__PURE__*/ import_react_dom$5.createPortal(children, portalNode),
			shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)(FocusGuard, {
				"data-type": "outside",
				ref: afterOutsideRef,
				onFocus: (event) => {
					if (isOutsideEvent(event, portalNode)) {
						var _afterInsideRef$curre;
						(_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
					} else {
						getNextTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
						focusManagerState != null && focusManagerState.closeOnFocusOut && focusManagerState?.onOpenChange(false, event.nativeEvent, "focus-out");
					}
				}
			})
		]
	});
}
function useLiteMergeRefs(refs) {
	return import_react$169.useMemo(() => {
		return (value) => {
			refs.forEach((ref) => {
				if (ref) ref.current = value;
			});
		};
	}, refs);
}
function clearDisconnectedPreviouslyFocusedElements() {
	previouslyFocusedElements = previouslyFocusedElements.filter((el) => el.isConnected);
}
function addPreviouslyFocusedElement(element) {
	clearDisconnectedPreviouslyFocusedElements();
	if (element && getNodeName(element) !== "body") {
		previouslyFocusedElements.push(element);
		if (previouslyFocusedElements.length > LIST_LIMIT) previouslyFocusedElements = previouslyFocusedElements.slice(-20);
	}
}
function getPreviouslyFocusedElement() {
	clearDisconnectedPreviouslyFocusedElements();
	return previouslyFocusedElements[previouslyFocusedElements.length - 1];
}
function getFirstTabbableElement(container) {
	const tabbableOptions = getTabbableOptions();
	if (isTabbable(container, tabbableOptions)) return container;
	return tabbable(container, tabbableOptions)[0] || container;
}
function handleTabIndex(floatingFocusElement, orderRef) {
	var _floatingFocusElement;
	if (!orderRef.current.includes("floating") && !((_floatingFocusElement = floatingFocusElement.getAttribute("role")) != null && _floatingFocusElement.includes("dialog"))) return;
	const options = getTabbableOptions();
	const tabbableContent = focusable(floatingFocusElement, options).filter((element) => {
		const dataTabIndex = element.getAttribute("data-tabindex") || "";
		return isTabbable(element, options) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
	});
	const tabIndex = floatingFocusElement.getAttribute("tabindex");
	if (orderRef.current.includes("floating") || tabbableContent.length === 0) {
		if (tabIndex !== "0") floatingFocusElement.setAttribute("tabindex", "0");
	} else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
		floatingFocusElement.setAttribute("tabindex", "-1");
		floatingFocusElement.setAttribute("data-tabindex", "-1");
	}
}
/**
* Provides focus management for the floating element.
* @see https://floating-ui.com/docs/FloatingFocusManager
*/
function FloatingFocusManager(props) {
	const { context, children, disabled = false, order = ["content"], guards: _guards = true, initialFocus = 0, returnFocus = true, restoreFocus = false, modal = true, visuallyHiddenDismiss = false, closeOnFocusOut = true, outsideElementsInert = false, getInsideElements: _getInsideElements = () => [] } = props;
	const { open, onOpenChange, events, dataRef, elements: { domReference, floating } } = context;
	const getNodeId = useEffectEvent$1(() => {
		var _dataRef$current$floa;
		return (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
	});
	const getInsideElements = useEffectEvent$1(_getInsideElements);
	const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
	const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
	const inertSupported = supportsInert();
	const guards = inertSupported ? _guards : true;
	const useInert = !guards || inertSupported && outsideElementsInert;
	const orderRef = useLatestRef$1(order);
	const initialFocusRef = useLatestRef$1(initialFocus);
	const returnFocusRef = useLatestRef$1(returnFocus);
	const tree = useFloatingTree();
	const portalContext = usePortalContext$2();
	const startDismissButtonRef = import_react$169.useRef(null);
	const endDismissButtonRef = import_react$169.useRef(null);
	const preventReturnFocusRef = import_react$169.useRef(false);
	const isPointerDownRef = import_react$169.useRef(false);
	const tabbableIndexRef = import_react$169.useRef(-1);
	const blurTimeoutRef = import_react$169.useRef(-1);
	const isInsidePortal = portalContext != null;
	const floatingFocusElement = getFloatingFocusElement(floating);
	const getTabbableContent = useEffectEvent$1(function(container) {
		if (container === void 0) container = floatingFocusElement;
		return container ? tabbable(container, getTabbableOptions()) : [];
	});
	const getTabbableElements = useEffectEvent$1((container) => {
		const content = getTabbableContent(container);
		return orderRef.current.map((type) => {
			if (domReference && type === "reference") return domReference;
			if (floatingFocusElement && type === "floating") return floatingFocusElement;
			return content;
		}).filter(Boolean).flat();
	});
	import_react$169.useEffect(() => {
		if (disabled) return;
		if (!modal) return;
		function onKeyDown(event) {
			if (event.key === "Tab") {
				if (contains(floatingFocusElement, activeElement(getDocument$1(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) stopEvent(event);
				const els = getTabbableElements();
				const target = getTarget(event);
				if (orderRef.current[0] === "reference" && target === domReference) {
					stopEvent(event);
					if (event.shiftKey) enqueueFocus(els[els.length - 1]);
					else enqueueFocus(els[1]);
				}
				if (orderRef.current[1] === "floating" && target === floatingFocusElement && event.shiftKey) {
					stopEvent(event);
					enqueueFocus(els[0]);
				}
			}
		}
		const doc = getDocument$1(floatingFocusElement);
		doc.addEventListener("keydown", onKeyDown);
		return () => {
			doc.removeEventListener("keydown", onKeyDown);
		};
	}, [
		disabled,
		domReference,
		floatingFocusElement,
		modal,
		orderRef,
		isUntrappedTypeableCombobox,
		getTabbableContent,
		getTabbableElements
	]);
	import_react$169.useEffect(() => {
		if (disabled) return;
		if (!floating) return;
		function handleFocusIn(event) {
			const target = getTarget(event);
			const tabbableIndex = getTabbableContent().indexOf(target);
			if (tabbableIndex !== -1) tabbableIndexRef.current = tabbableIndex;
		}
		floating.addEventListener("focusin", handleFocusIn);
		return () => {
			floating.removeEventListener("focusin", handleFocusIn);
		};
	}, [
		disabled,
		floating,
		getTabbableContent
	]);
	import_react$169.useEffect(() => {
		if (disabled) return;
		if (!closeOnFocusOut) return;
		function handlePointerDown() {
			isPointerDownRef.current = true;
			setTimeout(() => {
				isPointerDownRef.current = false;
			});
		}
		function handleFocusOutside(event) {
			const relatedTarget = event.relatedTarget;
			const currentTarget = event.currentTarget;
			const target = getTarget(event);
			queueMicrotask(() => {
				const nodeId = getNodeId();
				const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute("focus-guard")) || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => {
					var _node$context, _node$context2;
					return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
				}) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => {
					var _node$context3, _node$context4, _node$context5;
					return [(_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating, getFloatingFocusElement((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.floating)].includes(relatedTarget) || ((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.domReference) === relatedTarget;
				})));
				if (currentTarget === domReference && floatingFocusElement) handleTabIndex(floatingFocusElement, orderRef);
				if (restoreFocus && currentTarget !== domReference && !(target != null && target.isConnected) && activeElement(getDocument$1(floatingFocusElement)) === getDocument$1(floatingFocusElement).body) {
					if (isHTMLElement$1(floatingFocusElement)) floatingFocusElement.focus();
					const prevTabbableIndex = tabbableIndexRef.current;
					const tabbableContent = getTabbableContent();
					const nodeToFocus = tabbableContent[prevTabbableIndex] || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
					if (isHTMLElement$1(nodeToFocus)) nodeToFocus.focus();
				}
				if (dataRef.current.insideReactTree) {
					dataRef.current.insideReactTree = false;
					return;
				}
				if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && relatedTarget !== getPreviouslyFocusedElement()) {
					preventReturnFocusRef.current = true;
					onOpenChange(false, event, "focus-out");
				}
			});
		}
		const shouldHandleBlurCapture = Boolean(!tree && portalContext);
		function markInsideReactTree() {
			clearTimeoutIfSet(blurTimeoutRef);
			dataRef.current.insideReactTree = true;
			blurTimeoutRef.current = window.setTimeout(() => {
				dataRef.current.insideReactTree = false;
			});
		}
		if (floating && isHTMLElement$1(domReference)) {
			domReference.addEventListener("focusout", handleFocusOutside);
			domReference.addEventListener("pointerdown", handlePointerDown);
			floating.addEventListener("focusout", handleFocusOutside);
			if (shouldHandleBlurCapture) floating.addEventListener("focusout", markInsideReactTree, true);
			return () => {
				domReference.removeEventListener("focusout", handleFocusOutside);
				domReference.removeEventListener("pointerdown", handlePointerDown);
				floating.removeEventListener("focusout", handleFocusOutside);
				if (shouldHandleBlurCapture) floating.removeEventListener("focusout", markInsideReactTree, true);
			};
		}
	}, [
		disabled,
		domReference,
		floating,
		floatingFocusElement,
		modal,
		tree,
		portalContext,
		onOpenChange,
		closeOnFocusOut,
		restoreFocus,
		getTabbableContent,
		isUntrappedTypeableCombobox,
		getNodeId,
		orderRef,
		dataRef
	]);
	const beforeGuardRef = import_react$169.useRef(null);
	const afterGuardRef = import_react$169.useRef(null);
	const mergedBeforeGuardRef = useLiteMergeRefs([beforeGuardRef, portalContext == null ? void 0 : portalContext.beforeInsideRef]);
	const mergedAfterGuardRef = useLiteMergeRefs([afterGuardRef, portalContext == null ? void 0 : portalContext.afterInsideRef]);
	import_react$169.useEffect(() => {
		var _portalContext$portal, _ancestors$find;
		if (disabled) return;
		if (!floating) return;
		const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute("portal") + "]")) || []);
		const rootAncestorComboboxDomReference = (_ancestors$find = (tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : []).find((node) => {
			var _node$context6;
			return isTypeableCombobox(((_node$context6 = node.context) == null ? void 0 : _node$context6.elements.domReference) || null);
		})) == null || (_ancestors$find = _ancestors$find.context) == null ? void 0 : _ancestors$find.elements.domReference;
		const insideElements = [
			floating,
			rootAncestorComboboxDomReference,
			...portalNodes,
			...getInsideElements(),
			startDismissButtonRef.current,
			endDismissButtonRef.current,
			beforeGuardRef.current,
			afterGuardRef.current,
			portalContext == null ? void 0 : portalContext.beforeOutsideRef.current,
			portalContext == null ? void 0 : portalContext.afterOutsideRef.current,
			orderRef.current.includes("reference") || isUntrappedTypeableCombobox ? domReference : null
		].filter((x) => x != null);
		const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, !useInert, useInert) : markOthers(insideElements);
		return () => {
			cleanup();
		};
	}, [
		disabled,
		domReference,
		floating,
		modal,
		orderRef,
		portalContext,
		isUntrappedTypeableCombobox,
		guards,
		useInert,
		tree,
		getNodeId,
		getInsideElements
	]);
	index$1(() => {
		if (disabled || !isHTMLElement$1(floatingFocusElement)) return;
		const previouslyFocusedElement = activeElement(getDocument$1(floatingFocusElement));
		queueMicrotask(() => {
			const focusableElements = getTabbableElements(floatingFocusElement);
			const initialFocusValue = initialFocusRef.current;
			const elToFocus = (typeof initialFocusValue === "number" ? focusableElements[initialFocusValue] : initialFocusValue.current) || floatingFocusElement;
			const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
			if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) enqueueFocus(elToFocus, { preventScroll: elToFocus === floatingFocusElement });
		});
	}, [
		disabled,
		open,
		floatingFocusElement,
		ignoreInitialFocus,
		getTabbableElements,
		initialFocusRef
	]);
	index$1(() => {
		if (disabled || !floatingFocusElement) return;
		const doc = getDocument$1(floatingFocusElement);
		addPreviouslyFocusedElement(activeElement(doc));
		function onOpenChange(_ref) {
			let { reason, event, nested } = _ref;
			if (["hover", "safe-polygon"].includes(reason) && event.type === "mouseleave") preventReturnFocusRef.current = true;
			if (reason !== "outside-press") return;
			if (nested) preventReturnFocusRef.current = false;
			else if (isVirtualClick(event) || isVirtualPointerEvent(event)) preventReturnFocusRef.current = false;
			else {
				let isPreventScrollSupported = false;
				document.createElement("div").focus({ get preventScroll() {
					isPreventScrollSupported = true;
					return false;
				} });
				if (isPreventScrollSupported) preventReturnFocusRef.current = false;
				else preventReturnFocusRef.current = true;
			}
		}
		events.on("openchange", onOpenChange);
		const fallbackEl = doc.createElement("span");
		fallbackEl.setAttribute("tabindex", "-1");
		fallbackEl.setAttribute("aria-hidden", "true");
		Object.assign(fallbackEl.style, HIDDEN_STYLES);
		if (isInsidePortal && domReference) domReference.insertAdjacentElement("afterend", fallbackEl);
		function getReturnElement() {
			if (typeof returnFocusRef.current === "boolean") {
				const el = domReference || getPreviouslyFocusedElement();
				return el && el.isConnected ? el : fallbackEl;
			}
			return returnFocusRef.current.current || fallbackEl;
		}
		return () => {
			events.off("openchange", onOpenChange);
			const activeEl = activeElement(doc);
			const isFocusInsideFloatingTree = contains(floating, activeEl) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => {
				var _node$context7;
				return contains((_node$context7 = node.context) == null ? void 0 : _node$context7.elements.floating, activeEl);
			});
			const returnElement = getReturnElement();
			queueMicrotask(() => {
				const tabbableReturnElement = getFirstTabbableElement(returnElement);
				if (returnFocusRef.current && !preventReturnFocusRef.current && isHTMLElement$1(tabbableReturnElement) && (tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) tabbableReturnElement.focus({ preventScroll: true });
				fallbackEl.remove();
			});
		};
	}, [
		disabled,
		floating,
		floatingFocusElement,
		returnFocusRef,
		dataRef,
		events,
		tree,
		isInsidePortal,
		domReference,
		getNodeId
	]);
	import_react$169.useEffect(() => {
		queueMicrotask(() => {
			preventReturnFocusRef.current = false;
		});
		return () => {
			queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
		};
	}, [disabled]);
	index$1(() => {
		if (disabled) return;
		if (!portalContext) return;
		portalContext.setFocusManagerState({
			modal,
			closeOnFocusOut,
			open,
			onOpenChange,
			domReference
		});
		return () => {
			portalContext.setFocusManagerState(null);
		};
	}, [
		disabled,
		portalContext,
		modal,
		open,
		onOpenChange,
		closeOnFocusOut,
		domReference
	]);
	index$1(() => {
		if (disabled) return;
		if (!floatingFocusElement) return;
		handleTabIndex(floatingFocusElement, orderRef);
	}, [
		disabled,
		floatingFocusElement,
		orderRef
	]);
	function renderDismissButton(location) {
		if (disabled || !visuallyHiddenDismiss || !modal) return null;
		return /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)(VisuallyHiddenDismiss, {
			ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
			onClick: (event) => onOpenChange(false, event.nativeEvent),
			children: typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss"
		});
	}
	const shouldRenderGuards = !disabled && guards && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
	return /*#__PURE__*/ (0, import_jsx_runtime$127.jsxs)(import_jsx_runtime$127.Fragment, { children: [
		shouldRenderGuards && /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)(FocusGuard, {
			"data-type": "inside",
			ref: mergedBeforeGuardRef,
			onFocus: (event) => {
				if (modal) {
					const els = getTabbableElements();
					enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
				} else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
					preventReturnFocusRef.current = false;
					if (isOutsideEvent(event, portalContext.portalNode)) getNextTabbable(domReference)?.focus();
					else {
						var _portalContext$before;
						(_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
					}
				}
			}
		}),
		!isUntrappedTypeableCombobox && renderDismissButton("start"),
		children,
		renderDismissButton("end"),
		shouldRenderGuards && /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)(FocusGuard, {
			"data-type": "inside",
			ref: mergedAfterGuardRef,
			onFocus: (event) => {
				if (modal) enqueueFocus(getTabbableElements()[0]);
				else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
					if (closeOnFocusOut) preventReturnFocusRef.current = true;
					if (isOutsideEvent(event, portalContext.portalNode)) getPreviousTabbable(domReference)?.focus();
					else {
						var _portalContext$afterO;
						(_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
					}
				}
			}
		})
	] });
}
/**
* Closes the floating element when a dismissal is requested — by default, when
* the user presses the `escape` key or outside of the floating element.
* @see https://floating-ui.com/docs/useDismiss
*/
function useDismiss(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, elements, dataRef } = context;
	const { enabled = true, escapeKey = true, outsidePress: unstable_outsidePress = true, outsidePressEvent = "pointerdown", referencePress = false, referencePressEvent = "pointerdown", ancestorScroll = false, bubbles, capture } = props;
	const tree = useFloatingTree();
	const outsidePressFn = useEffectEvent$1(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
	const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
	const endedOrStartedInsideRef = import_react$169.useRef(false);
	const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
	const { escapeKey: escapeKeyCapture, outsidePress: outsidePressCapture } = normalizeProp(capture);
	const isComposingRef = import_react$169.useRef(false);
	const closeOnEscapeKeyDown = useEffectEvent$1((event) => {
		var _dataRef$current$floa;
		if (!open || !enabled || !escapeKey || event.key !== "Escape") return;
		if (isComposingRef.current) return;
		const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
		const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
		if (!escapeKeyBubbles) {
			event.stopPropagation();
			if (children.length > 0) {
				let shouldDismiss = true;
				children.forEach((child) => {
					var _child$context;
					if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
						shouldDismiss = false;
						return;
					}
				});
				if (!shouldDismiss) return;
			}
		}
		onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, "escape-key");
	});
	const closeOnEscapeKeyDownCapture = useEffectEvent$1((event) => {
		var _getTarget2;
		const callback = () => {
			var _getTarget;
			closeOnEscapeKeyDown(event);
			(_getTarget = getTarget(event)) == null || _getTarget.removeEventListener("keydown", callback);
		};
		(_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener("keydown", callback);
	});
	const closeOnPressOutside = useEffectEvent$1((event) => {
		var _dataRef$current$floa2;
		const insideReactTree = dataRef.current.insideReactTree;
		dataRef.current.insideReactTree = false;
		const endedOrStartedInside = endedOrStartedInsideRef.current;
		endedOrStartedInsideRef.current = false;
		if (outsidePressEvent === "click" && endedOrStartedInside) return;
		if (insideReactTree) return;
		if (typeof outsidePress === "function" && !outsidePress(event)) return;
		const target = getTarget(event);
		const inertSelector = "[" + createAttribute("inert") + "]";
		const markers = getDocument$1(elements.floating).querySelectorAll(inertSelector);
		let targetRootAncestor = isElement(target) ? target : null;
		while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
			const nextParent = getParentNode(targetRootAncestor);
			if (isLastTraversableNode(nextParent) || !isElement(nextParent)) break;
			targetRootAncestor = nextParent;
		}
		if (markers.length && isElement(target) && !isRootElement(target) && !contains(target, elements.floating) && Array.from(markers).every((marker) => !contains(targetRootAncestor, marker))) return;
		if (isHTMLElement$1(target) && floating) {
			const lastTraversableNode = isLastTraversableNode(target);
			const style = getComputedStyle$1(target);
			const scrollRe = /auto|scroll/;
			const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
			const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
			const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
			const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
			const isRTL = style.direction === "rtl";
			const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
			const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
			if (pressedVerticalScrollbar || pressedHorizontalScrollbar) return;
		}
		const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
		const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => {
			var _node$context;
			return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
		});
		if (isEventTargetWithin(event, elements.floating) || isEventTargetWithin(event, elements.domReference) || targetIsInsideChildren) return;
		const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
		if (children.length > 0) {
			let shouldDismiss = true;
			children.forEach((child) => {
				var _child$context2;
				if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
					shouldDismiss = false;
					return;
				}
			});
			if (!shouldDismiss) return;
		}
		onOpenChange(false, event, "outside-press");
	});
	const closeOnPressOutsideCapture = useEffectEvent$1((event) => {
		var _getTarget4;
		const callback = () => {
			var _getTarget3;
			closeOnPressOutside(event);
			(_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
		};
		(_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
	});
	import_react$169.useEffect(() => {
		if (!open || !enabled) return;
		dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
		dataRef.current.__outsidePressBubbles = outsidePressBubbles;
		let compositionTimeout = -1;
		function onScroll(event) {
			onOpenChange(false, event, "ancestor-scroll");
		}
		function handleCompositionStart() {
			window.clearTimeout(compositionTimeout);
			isComposingRef.current = true;
		}
		function handleCompositionEnd() {
			compositionTimeout = window.setTimeout(() => {
				isComposingRef.current = false;
			}, isWebKit() ? 5 : 0);
		}
		const doc = getDocument$1(elements.floating);
		if (escapeKey) {
			doc.addEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
			doc.addEventListener("compositionstart", handleCompositionStart);
			doc.addEventListener("compositionend", handleCompositionEnd);
		}
		outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
		let ancestors = [];
		if (ancestorScroll) {
			if (isElement(elements.domReference)) ancestors = getOverflowAncestors(elements.domReference);
			if (isElement(elements.floating)) ancestors = ancestors.concat(getOverflowAncestors(elements.floating));
			if (!isElement(elements.reference) && elements.reference && elements.reference.contextElement) ancestors = ancestors.concat(getOverflowAncestors(elements.reference.contextElement));
		}
		ancestors = ancestors.filter((ancestor) => {
			var _doc$defaultView;
			return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
		});
		ancestors.forEach((ancestor) => {
			ancestor.addEventListener("scroll", onScroll, { passive: true });
		});
		return () => {
			if (escapeKey) {
				doc.removeEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
				doc.removeEventListener("compositionstart", handleCompositionStart);
				doc.removeEventListener("compositionend", handleCompositionEnd);
			}
			outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
			ancestors.forEach((ancestor) => {
				ancestor.removeEventListener("scroll", onScroll);
			});
			window.clearTimeout(compositionTimeout);
		};
	}, [
		dataRef,
		elements,
		escapeKey,
		outsidePress,
		outsidePressEvent,
		open,
		onOpenChange,
		ancestorScroll,
		enabled,
		escapeKeyBubbles,
		outsidePressBubbles,
		closeOnEscapeKeyDown,
		escapeKeyCapture,
		closeOnEscapeKeyDownCapture,
		closeOnPressOutside,
		outsidePressCapture,
		closeOnPressOutsideCapture
	]);
	import_react$169.useEffect(() => {
		dataRef.current.insideReactTree = false;
	}, [
		dataRef,
		outsidePress,
		outsidePressEvent
	]);
	const reference = import_react$169.useMemo(() => ({
		onKeyDown: closeOnEscapeKeyDown,
		...referencePress && {
			[bubbleHandlerKeys[referencePressEvent]]: (event) => {
				onOpenChange(false, event.nativeEvent, "reference-press");
			},
			...referencePressEvent !== "click" && { onClick(event) {
				onOpenChange(false, event.nativeEvent, "reference-press");
			} }
		}
	}), [
		closeOnEscapeKeyDown,
		onOpenChange,
		referencePress,
		referencePressEvent
	]);
	const floating = import_react$169.useMemo(() => ({
		onKeyDown: closeOnEscapeKeyDown,
		onMouseDown() {
			endedOrStartedInsideRef.current = true;
		},
		onMouseUp() {
			endedOrStartedInsideRef.current = true;
		},
		[captureHandlerKeys[outsidePressEvent]]: () => {
			dataRef.current.insideReactTree = true;
		}
	}), [
		closeOnEscapeKeyDown,
		outsidePressEvent,
		dataRef
	]);
	return import_react$169.useMemo(() => enabled ? {
		reference,
		floating
	} : {}, [
		enabled,
		reference,
		floating
	]);
}
function useFloatingRootContext(options) {
	const { open = false, onOpenChange: onOpenChangeProp, elements: elementsProp } = options;
	const floatingId = useId$9();
	const dataRef = import_react$169.useRef({});
	const [events] = import_react$169.useState(() => createEventEmitter());
	const nested = useFloatingParentNodeId() != null;
	const [positionReference, setPositionReference] = import_react$169.useState(elementsProp.reference);
	const onOpenChange = useEffectEvent$1((open, event, reason) => {
		dataRef.current.openEvent = open ? event : void 0;
		events.emit("openchange", {
			open,
			event,
			reason,
			nested
		});
		onOpenChangeProp?.(open, event, reason);
	});
	const refs = import_react$169.useMemo(() => ({ setPositionReference }), []);
	const elements = import_react$169.useMemo(() => ({
		reference: positionReference || elementsProp.reference || null,
		floating: elementsProp.floating || null,
		domReference: elementsProp.reference
	}), [
		positionReference,
		elementsProp.reference,
		elementsProp.floating
	]);
	return import_react$169.useMemo(() => ({
		dataRef,
		open,
		onOpenChange,
		elements,
		events,
		floatingId,
		refs
	}), [
		open,
		onOpenChange,
		elements,
		events,
		floatingId,
		refs
	]);
}
/**
* Provides data to position a floating element and context to add interactions.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(options) {
	if (options === void 0) options = {};
	const { nodeId } = options;
	const internalRootContext = useFloatingRootContext({
		...options,
		elements: {
			reference: null,
			floating: null,
			...options.elements
		}
	});
	const rootContext = options.rootContext || internalRootContext;
	const computedElements = rootContext.elements;
	const [_domReference, setDomReference] = import_react$169.useState(null);
	const [positionReference, _setPositionReference] = import_react$169.useState(null);
	const domReference = (computedElements == null ? void 0 : computedElements.domReference) || _domReference;
	const domReferenceRef = import_react$169.useRef(null);
	const tree = useFloatingTree();
	index$1(() => {
		if (domReference) domReferenceRef.current = domReference;
	}, [domReference]);
	const position = useFloating$1({
		...options,
		elements: {
			...computedElements,
			...positionReference && { reference: positionReference }
		}
	});
	const setPositionReference = import_react$169.useCallback((node) => {
		const computedPositionReference = isElement(node) ? {
			getBoundingClientRect: () => node.getBoundingClientRect(),
			getClientRects: () => node.getClientRects(),
			contextElement: node
		} : node;
		_setPositionReference(computedPositionReference);
		position.refs.setReference(computedPositionReference);
	}, [position.refs]);
	const setReference = import_react$169.useCallback((node) => {
		if (isElement(node) || node === null) {
			domReferenceRef.current = node;
			setDomReference(node);
		}
		if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) position.refs.setReference(node);
	}, [position.refs]);
	const refs = import_react$169.useMemo(() => ({
		...position.refs,
		setReference,
		setPositionReference,
		domReference: domReferenceRef
	}), [
		position.refs,
		setReference,
		setPositionReference
	]);
	const elements = import_react$169.useMemo(() => ({
		...position.elements,
		domReference
	}), [position.elements, domReference]);
	const context = import_react$169.useMemo(() => ({
		...position,
		...rootContext,
		refs,
		elements,
		nodeId
	}), [
		position,
		refs,
		elements,
		nodeId,
		rootContext
	]);
	index$1(() => {
		rootContext.dataRef.current.floatingContext = context;
		const node = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.id === nodeId);
		if (node) node.context = context;
	});
	return import_react$169.useMemo(() => ({
		...position,
		context,
		refs,
		elements
	}), [
		position,
		refs,
		elements,
		context
	]);
}
function isMacSafari() {
	return isMac$1() && isSafari$1();
}
/**
* Opens the floating element while the reference element has focus, like CSS
* `:focus`.
* @see https://floating-ui.com/docs/useFocus
*/
function useFocus(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, events, dataRef, elements } = context;
	const { enabled = true, visibleOnly = true } = props;
	const blockFocusRef = import_react$169.useRef(false);
	const timeoutRef = import_react$169.useRef(-1);
	const keyboardModalityRef = import_react$169.useRef(true);
	import_react$169.useEffect(() => {
		if (!enabled) return;
		const win = getWindow(elements.domReference);
		function onBlur() {
			if (!open && isHTMLElement$1(elements.domReference) && elements.domReference === activeElement(getDocument$1(elements.domReference))) blockFocusRef.current = true;
		}
		function onKeyDown() {
			keyboardModalityRef.current = true;
		}
		function onPointerDown() {
			keyboardModalityRef.current = false;
		}
		win.addEventListener("blur", onBlur);
		if (isMacSafari()) {
			win.addEventListener("keydown", onKeyDown, true);
			win.addEventListener("pointerdown", onPointerDown, true);
		}
		return () => {
			win.removeEventListener("blur", onBlur);
			if (isMacSafari()) {
				win.removeEventListener("keydown", onKeyDown, true);
				win.removeEventListener("pointerdown", onPointerDown, true);
			}
		};
	}, [
		elements.domReference,
		open,
		enabled
	]);
	import_react$169.useEffect(() => {
		if (!enabled) return;
		function onOpenChange(_ref) {
			let { reason } = _ref;
			if (reason === "reference-press" || reason === "escape-key") blockFocusRef.current = true;
		}
		events.on("openchange", onOpenChange);
		return () => {
			events.off("openchange", onOpenChange);
		};
	}, [events, enabled]);
	import_react$169.useEffect(() => {
		return () => {
			clearTimeoutIfSet(timeoutRef);
		};
	}, []);
	const reference = import_react$169.useMemo(() => ({
		onMouseLeave() {
			blockFocusRef.current = false;
		},
		onFocus(event) {
			if (blockFocusRef.current) return;
			const target = getTarget(event.nativeEvent);
			if (visibleOnly && isElement(target)) {
				if (isMacSafari() && !event.relatedTarget) {
					if (!keyboardModalityRef.current && !isTypeableElement(target)) return;
				} else if (!matchesFocusVisible(target)) return;
			}
			onOpenChange(true, event.nativeEvent, "focus");
		},
		onBlur(event) {
			blockFocusRef.current = false;
			const relatedTarget = event.relatedTarget;
			const nativeEvent = event.nativeEvent;
			const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
			timeoutRef.current = window.setTimeout(() => {
				var _dataRef$current$floa;
				const activeEl = activeElement(elements.domReference ? elements.domReference.ownerDocument : document);
				if (!relatedTarget && activeEl === elements.domReference) return;
				if (contains((_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.refs.floating.current, activeEl) || contains(elements.domReference, activeEl) || movedToFocusGuard) return;
				onOpenChange(false, nativeEvent, "focus");
			});
		}
	}), [
		dataRef,
		elements.domReference,
		onOpenChange,
		visibleOnly
	]);
	return import_react$169.useMemo(() => enabled ? { reference } : {}, [enabled, reference]);
}
function mergeProps$3(userProps, propsList, elementKey) {
	const map = /* @__PURE__ */ new Map();
	const isItem = elementKey === "item";
	let domUserProps = userProps;
	if (isItem && userProps) {
		const { [ACTIVE_KEY]: _, [SELECTED_KEY]: __, ...validProps } = userProps;
		domUserProps = validProps;
	}
	return {
		...elementKey === "floating" && {
			tabIndex: -1,
			[FOCUSABLE_ATTRIBUTE]: ""
		},
		...domUserProps,
		...propsList.map((value) => {
			const propsOrGetProps = value ? value[elementKey] : null;
			if (typeof propsOrGetProps === "function") return userProps ? propsOrGetProps(userProps) : null;
			return propsOrGetProps;
		}).concat(userProps).reduce((acc, props) => {
			if (!props) return acc;
			Object.entries(props).forEach((_ref) => {
				let [key, value] = _ref;
				if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) return;
				if (key.indexOf("on") === 0) {
					if (!map.has(key)) map.set(key, []);
					if (typeof value === "function") {
						var _map$get;
						(_map$get = map.get(key)) == null || _map$get.push(value);
						acc[key] = function() {
							var _map$get2;
							for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
							return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
						};
					}
				} else acc[key] = value;
			});
			return acc;
		}, {})
	};
}
/**
* Merges an array of interaction hooks' props into prop getters, allowing
* event handler functions to be composed together without overwriting one
* another.
* @see https://floating-ui.com/docs/useInteractions
*/
function useInteractions(propsList) {
	if (propsList === void 0) propsList = [];
	const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
	const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
	const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
	const getReferenceProps = import_react$169.useCallback((userProps) => mergeProps$3(userProps, propsList, "reference"), referenceDeps);
	const getFloatingProps = import_react$169.useCallback((userProps) => mergeProps$3(userProps, propsList, "floating"), floatingDeps);
	const getItemProps = import_react$169.useCallback((userProps) => mergeProps$3(userProps, propsList, "item"), itemDeps);
	return import_react$169.useMemo(() => ({
		getReferenceProps,
		getFloatingProps,
		getItemProps
	}), [
		getReferenceProps,
		getFloatingProps,
		getItemProps
	]);
}
/**
* Adds base screen reader props to the reference and floating elements for a
* given floating element `role`.
* @see https://floating-ui.com/docs/useRole
*/
function useRole(context, props) {
	var _elements$domReferenc, _componentRoleToAriaR;
	if (props === void 0) props = {};
	const { open, elements, floatingId: defaultFloatingId } = context;
	const { enabled = true, role = "dialog" } = props;
	const defaultReferenceId = useId$9();
	const referenceId = ((_elements$domReferenc = elements.domReference) == null ? void 0 : _elements$domReferenc.id) || defaultReferenceId;
	const floatingId = import_react$169.useMemo(() => {
		var _getFloatingFocusElem;
		return ((_getFloatingFocusElem = getFloatingFocusElement(elements.floating)) == null ? void 0 : _getFloatingFocusElem.id) || defaultFloatingId;
	}, [elements.floating, defaultFloatingId]);
	const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
	const isNested = useFloatingParentNodeId() != null;
	const reference = import_react$169.useMemo(() => {
		if (ariaRole === "tooltip" || role === "label") return { ["aria-" + (role === "label" ? "labelledby" : "describedby")]: open ? floatingId : void 0 };
		return {
			"aria-expanded": open ? "true" : "false",
			"aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
			"aria-controls": open ? floatingId : void 0,
			...ariaRole === "listbox" && { role: "combobox" },
			...ariaRole === "menu" && { id: referenceId },
			...ariaRole === "menu" && isNested && { role: "menuitem" },
			...role === "select" && { "aria-autocomplete": "none" },
			...role === "combobox" && { "aria-autocomplete": "list" }
		};
	}, [
		ariaRole,
		floatingId,
		isNested,
		open,
		referenceId,
		role
	]);
	const floating = import_react$169.useMemo(() => {
		const floatingProps = {
			id: floatingId,
			...ariaRole && { role: ariaRole }
		};
		if (ariaRole === "tooltip" || role === "label") return floatingProps;
		return {
			...floatingProps,
			...ariaRole === "menu" && { "aria-labelledby": referenceId }
		};
	}, [
		ariaRole,
		floatingId,
		referenceId,
		role
	]);
	const item = import_react$169.useCallback((_ref) => {
		let { active, selected } = _ref;
		const commonProps = {
			role: "option",
			...active && { id: floatingId + "-fui-option" }
		};
		switch (role) {
			case "select":
			case "combobox": return {
				...commonProps,
				"aria-selected": selected
			};
		}
		return {};
	}, [floatingId, role]);
	return import_react$169.useMemo(() => enabled ? {
		reference,
		floating,
		item
	} : {}, [
		enabled,
		reference,
		floating,
		item
	]);
}
var import_react$169, import_jsx_runtime$127, import_react_dom$5, FOCUSABLE_ATTRIBUTE, ACTIVE_KEY, SELECTED_KEY, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN, horizontalKeys, verticalKeys, SafeReact, serverHandoffComplete, count$4, genId, useId$9, FloatingArrow, FloatingNodeContext, FloatingTreeContext, useFloatingParentNodeId, useFloatingTree, safePolygonIdentifier, NOOP, FloatingDelayGroupContext, useDelayGroupContext, rafId, counters, uncontrolledElementsSet, markerMap$1, lockCount$1, supportsInert, unwrapHost$1, correctElements, HIDDEN_STYLES, FocusGuard, HIDDEN_OWNER_STYLES, PortalContext, attr, usePortalContext$2, LIST_LIMIT, previouslyFocusedElements, VisuallyHiddenDismiss, bubbleHandlerKeys, captureHandlerKeys, normalizeProp, componentRoleToAriaRoleMap;
var init_floating_ui_react = __esmMin((() => {
	import_react$169 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_floating_ui_react_utils();
	import_jsx_runtime$127 = require_jsx_runtime();
	init_floating_ui_utils_dom();
	init_index_esm();
	import_react_dom$5 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_floating_ui_react_dom();
	FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
	ACTIVE_KEY = "active";
	SELECTED_KEY = "selected";
	ARROW_LEFT = "ArrowLeft";
	ARROW_RIGHT = "ArrowRight";
	ARROW_UP = "ArrowUp";
	ARROW_DOWN = "ArrowDown";
	horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
	verticalKeys = [ARROW_UP, ARROW_DOWN];
	[...horizontalKeys, ...verticalKeys];
	SafeReact = { ...import_react$169 };
	serverHandoffComplete = false;
	count$4 = 0;
	genId = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + count$4++;
	useId$9 = SafeReact.useId || useFloatingId;
	FloatingArrow = /*#__PURE__*/ import_react$169.forwardRef(function FloatingArrow(props, ref) {
		const { context: { placement, elements: { floating }, middlewareData: { arrow, shift } }, width = 14, height = 7, tipRadius = 0, strokeWidth = 0, staticOffset, stroke, d, style: { transform, ...restStyle } = {}, ...rest } = props;
		const clipPathId = useId$9();
		const [isRTL, setIsRTL] = import_react$169.useState(false);
		index$1(() => {
			if (!floating) return;
			if (getComputedStyle$1(floating).direction === "rtl") setIsRTL(true);
		}, [floating]);
		if (!floating) return null;
		const [side, alignment] = placement.split("-");
		const isVerticalSide = side === "top" || side === "bottom";
		let computedStaticOffset = staticOffset;
		if (isVerticalSide && shift != null && shift.x || !isVerticalSide && shift != null && shift.y) computedStaticOffset = null;
		const computedStrokeWidth = strokeWidth * 2;
		const halfStrokeWidth = computedStrokeWidth / 2;
		const svgX = width / 2 * (tipRadius / -8 + 1);
		const svgY = height / 2 * tipRadius / 4;
		const isCustomShape = !!d;
		const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
		let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
		if (computedStaticOffset && isRTL) xOffsetProp = alignment === "end" ? "left" : "right";
		const arrowX = (arrow == null ? void 0 : arrow.x) != null ? computedStaticOffset || arrow.x : "";
		const arrowY = (arrow == null ? void 0 : arrow.y) != null ? computedStaticOffset || arrow.y : "";
		const dValue = d || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
		const rotation = {
			top: isCustomShape ? "rotate(180deg)" : "",
			left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
			bottom: isCustomShape ? "" : "rotate(180deg)",
			right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
		}[side];
		return /*#__PURE__*/ (0, import_jsx_runtime$127.jsxs)("svg", {
			...rest,
			"aria-hidden": true,
			ref,
			width: isCustomShape ? width : width + computedStrokeWidth,
			height: width,
			viewBox: "0 0 " + width + " " + (height > width ? height : width),
			style: {
				position: "absolute",
				pointerEvents: "none",
				[xOffsetProp]: arrowX,
				[yOffsetProp]: arrowY,
				[side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
				transform: [rotation, transform].filter((t) => !!t).join(" "),
				...restStyle
			},
			children: [
				computedStrokeWidth > 0 && /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("path", {
					clipPath: "url(#" + clipPathId + ")",
					fill: "none",
					stroke,
					strokeWidth: computedStrokeWidth + (d ? 0 : 1),
					d: dValue
				}),
				/*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("path", {
					stroke: computedStrokeWidth && !d ? rest.fill : "none",
					d: dValue
				}),
				/*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("clipPath", {
					id: clipPathId,
					children: /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("rect", {
						x: -halfStrokeWidth,
						y: halfStrokeWidth * (isCustomShape ? -1 : 1),
						width: width + computedStrokeWidth,
						height: width
					})
				})
			]
		});
	});
	FloatingNodeContext = /*#__PURE__*/ import_react$169.createContext(null);
	FloatingTreeContext = /*#__PURE__*/ import_react$169.createContext(null);
	useFloatingParentNodeId = () => {
		var _React$useContext;
		return ((_React$useContext = import_react$169.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
	};
	useFloatingTree = () => import_react$169.useContext(FloatingTreeContext);
	safePolygonIdentifier = /*#__PURE__*/ createAttribute("safe-polygon");
	NOOP = () => {};
	FloatingDelayGroupContext = /*#__PURE__*/ import_react$169.createContext({
		delay: 0,
		initialDelay: 0,
		timeoutMs: 0,
		currentId: null,
		setCurrentId: NOOP,
		setState: NOOP,
		isInstantPhase: false
	});
	useDelayGroupContext = () => import_react$169.useContext(FloatingDelayGroupContext);
	rafId = 0;
	counters = {
		inert: /*#__PURE__*/ new WeakMap(),
		"aria-hidden": /*#__PURE__*/ new WeakMap(),
		none: /*#__PURE__*/ new WeakMap()
	};
	uncontrolledElementsSet = /*#__PURE__*/ new WeakSet();
	markerMap$1 = {};
	lockCount$1 = 0;
	supportsInert = () => typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
	unwrapHost$1 = (node) => node && (node.host || unwrapHost$1(node.parentNode));
	correctElements = (parent, targets) => targets.map((target) => {
		if (parent.contains(target)) return target;
		const correctedTarget = unwrapHost$1(target);
		if (parent.contains(correctedTarget)) return correctedTarget;
		return null;
	}).filter((x) => x != null);
	HIDDEN_STYLES = {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: "1px",
		margin: "-1px",
		overflow: "hidden",
		padding: 0,
		position: "fixed",
		whiteSpace: "nowrap",
		width: "1px",
		top: 0,
		left: 0
	};
	FocusGuard = /*#__PURE__*/ import_react$169.forwardRef(function FocusGuard(props, ref) {
		const [role, setRole] = import_react$169.useState();
		index$1(() => {
			if (isSafari$1()) setRole("button");
		}, []);
		const restProps = {
			ref,
			tabIndex: 0,
			role,
			"aria-hidden": role ? void 0 : true,
			[createAttribute("focus-guard")]: "",
			style: HIDDEN_STYLES
		};
		return /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("span", {
			...props,
			...restProps
		});
	});
	HIDDEN_OWNER_STYLES = {
		clipPath: "inset(50%)",
		position: "fixed",
		top: 0,
		left: 0
	};
	PortalContext = /*#__PURE__*/ import_react$169.createContext(null);
	attr = /*#__PURE__*/ createAttribute("portal");
	usePortalContext$2 = () => import_react$169.useContext(PortalContext);
	LIST_LIMIT = 20;
	previouslyFocusedElements = [];
	VisuallyHiddenDismiss = /*#__PURE__*/ import_react$169.forwardRef(function VisuallyHiddenDismiss(props, ref) {
		return /*#__PURE__*/ (0, import_jsx_runtime$127.jsx)("button", {
			...props,
			type: "button",
			ref,
			tabIndex: -1,
			style: HIDDEN_STYLES
		});
	});
	bubbleHandlerKeys = {
		pointerdown: "onPointerDown",
		mousedown: "onMouseDown",
		click: "onClick"
	};
	captureHandlerKeys = {
		pointerdown: "onPointerDownCapture",
		mousedown: "onMouseDownCapture",
		click: "onClickCapture"
	};
	normalizeProp = (normalizable) => {
		var _normalizable$escapeK, _normalizable$outside;
		return {
			escapeKey: typeof normalizable === "boolean" ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
			outsidePress: typeof normalizable === "boolean" ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
		};
	};
	componentRoleToAriaRoleMap = /*#__PURE__*/ new Map([
		["select", "listbox"],
		["combobox", "listbox"],
		["label", false]
	]);
})), import_jsx_runtime$126, hoverDelay, TooltipProvider;
var init_TooltipProvider = __esmMin((() => {
	require_react();
	import_jsx_runtime$126 = require_jsx_runtime();
	init_floating_ui_react();
	hoverDelay = {
		open: 300,
		close: 0
	};
	TooltipProvider = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime$126.jsx)(FloatingDelayGroup, {
		delay: hoverDelay,
		timeoutMs: 300,
		children
	});
	TooltipProvider.displayName = "TooltipProvider";
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Tooltip/useTooltip.js
function useTooltip({ open: controlledOpen, disabled = false, onOpenChange, placement = "bottom", isTriggerInteractive, caption, "aria-atomic": ariaAtomic, "aria-live": ariaLive, boundary, ...props }) {
	const labelId = (0, import_react$167.useId)();
	const captionId = (0, import_react$167.useId)();
	const arrowRef = (0, import_react$167.useRef)(null);
	const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react$167.useState)(false);
	const open = disabled ? false : controlledOpen ?? uncontrolledOpen;
	const setOpen = (open, event, reason) => {
		onOpenChange?.(open, event, reason);
		if (controlledOpen === void 0) setUncontrolledOpen(open);
	};
	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(6),
			flip({
				crossAxis: placement.includes("-"),
				fallbackAxisSideDirection: "start",
				padding: 5,
				boundary
			}),
			shift({ padding: 5 }),
			boundary ? hide({
				strategy: "escaped",
				boundary,
				padding: 6
			}) : null,
			arrow({ element: arrowRef })
		]
	});
	const context = data.context;
	const { delay, initialDelay } = useDelayGroup(context);
	if (initialDelay !== hoverDelay) throw new Error("Tooltips must be wrapped in a global <TooltipProvider>");
	const hover = useHover(context, {
		move: false,
		enabled: controlledOpen === void 0,
		delay: isTriggerInteractive ? delay : {},
		mouseOnly: true
	});
	const focus = useFocus(context, { enabled: controlledOpen === void 0 });
	const pressTimer = (0, import_react$167.useRef)(void 0);
	(0, import_react$167.useEffect)(() => () => window.clearTimeout(pressTimer.current), []);
	const press = (0, import_react$167.useMemo)(() => {
		const onTouchEnd = () => {
			if (pressTimer.current === void 0) pressTimer.current = window.setTimeout(() => {
				setOpen(false);
				pressTimer.current = void 0;
			}, 1500);
			else window.clearTimeout(pressTimer.current);
		};
		return { reference: {
			onTouchStart: () => {
				if (pressTimer.current !== void 0) window.clearTimeout(pressTimer.current);
				pressTimer.current = window.setTimeout(() => {
					setOpen(true);
					pressTimer.current = void 0;
				}, 500);
			},
			onTouchEnd,
			onTouchCancel: onTouchEnd
		} };
	}, []);
	const dismiss = useDismiss(context);
	const purpose = "label" in props ? "label" : "description";
	const role = useRole(context, {
		enabled: purpose === "description",
		role: "tooltip"
	});
	const interactions = useInteractions([
		hover,
		focus,
		press,
		dismiss,
		role,
		(0, import_react$167.useMemo)(() => purpose === "label" ? { reference: {
			"aria-labelledby": labelId,
			"aria-describedby": caption ? captionId : void 0
		} } : {}, [
			purpose,
			labelId,
			captionId
		])
	]);
	return (0, import_react$167.useMemo)(() => ({
		labelId,
		captionId: caption ? captionId : void 0,
		caption,
		purpose,
		open,
		setOpen,
		tooltipProps: {
			"aria-atomic": ariaAtomic,
			"aria-live": ariaLive
		},
		...interactions,
		...data,
		arrowRef
	}), [
		labelId,
		captionId,
		caption,
		role,
		open,
		setOpen,
		interactions,
		data,
		arrowRef
	]);
}
var import_react$167;
var init_useTooltip = __esmMin((() => {
	init_TooltipProvider();
	import_react$167 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_floating_ui_react();
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Tooltip/TooltipContext.js
/**
* Provides the context for the Tooltip components.
*/
function useTooltipContext() {
	const context = (0, import_react$166.useContext)(TooltipContext);
	if (context == null) throw new Error("Tooltip components must be wrapped in <Tooltip />");
	return context;
}
var import_react$166, TooltipContext;
var init_TooltipContext = __esmMin((() => {
	import_react$166 = /* @__PURE__ */ __toESM(require_react(), 1);
	TooltipContext = (0, import_react$166.createContext)(null);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Tooltip/Tooltip.module.js
var Tooltip_module_default;
var init_Tooltip_module = __esmMin((() => {
	Tooltip_module_default = {
		tooltip: "_tooltip_1nqnq_8",
		invisible: "_invisible_1nqnq_21",
		caption: "_caption_1nqnq_28",
		arrow: "_arrow_1nqnq_33"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Tooltip/Tooltip.js
/**
* A tooltip component
*/
function Tooltip({ children, isTriggerInteractive = true, nonInteractiveTriggerTabIndex = 0, ...props }) {
	const context = useTooltip({
		isTriggerInteractive,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$125.jsxs)(TooltipContext.Provider, {
		value: context,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$125.jsx)(TooltipAnchor, {
			isTriggerInteractive,
			nonInteractiveTriggerTabIndex,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime$125.jsxs)(TooltipContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime$125.jsx)("span", {
			id: context.labelId,
			children: hasLabel(props) ? props.label : props.description
		}), /* @__PURE__ */ (0, import_jsx_runtime$125.jsx)(Caption, {})] })]
	});
}
function Caption() {
	const { caption, captionId } = useTooltipContext();
	if (!caption) return null;
	/**
	* Forcing dark theme, so that we have the correct contrast when
	* using the text color secondary on a solid dark background.
	* This is temporary and should only remain until we figure out
	* the approach to on-solid tokens
	**/
	return /* @__PURE__ */ (0, import_jsx_runtime$125.jsx)(typeof caption === "string" ? "span" : "div", {
		id: captionId,
		className: (0, import_classnames$24.default)(Tooltip_module_default.caption, "cpd-theme-dark"),
		children: caption
	});
}
/**
* The content of the tooltip
* @param children
*/
function TooltipContent({ children }) {
	const { context: floatingContext, open, arrowRef, purpose, ...rest } = useTooltipContext();
	if (!open && purpose !== "label") return null;
	const escaped = floatingContext.middlewareData?.hide?.escaped ?? false;
	return /* @__PURE__ */ (0, import_jsx_runtime$125.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime$125.jsxs)("div", {
		ref: rest.refs.setFloating,
		style: rest.floatingStyles,
		...rest.tooltipProps,
		...rest.getFloatingProps(),
		className: (0, import_classnames$24.default)(Tooltip_module_default.tooltip, { [Tooltip_module_default.invisible]: purpose === "label" && !open || escaped }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$125.jsx)(FloatingArrow, {
			ref: arrowRef,
			context: floatingContext,
			width: 10,
			height: 6,
			className: Tooltip_module_default.arrow
		}), children]
	}) });
}
var import_classnames$24, import_react$165, import_jsx_runtime$125, hasLabel, TooltipAnchor;
var init_Tooltip = __esmMin((() => {
	init_useTooltip();
	init_TooltipContext();
	init_Tooltip_module();
	import_classnames$24 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$165 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$125 = require_jsx_runtime();
	init_floating_ui_react();
	hasLabel = (props) => "label" in props && !!props.label;
	TooltipAnchor = ({ children, isTriggerInteractive, nonInteractiveTriggerTabIndex }) => {
		const context = useTooltipContext();
		const childrenRef = children?.ref;
		const ref = useMergeRefs$2([context.refs.setReference, childrenRef]);
		const element = (0, import_react$165.useMemo)(() => {
			if (!(0, import_react$165.isValidElement)(children)) return;
			if (isTriggerInteractive) return (0, import_react$165.cloneElement)(children, context.getReferenceProps({
				...typeof children.props === "object" ? children.props : {},
				ref
			}));
			else {
				const { "aria-labelledby": labelId, "aria-describedby": descriptionId, ...spanProps } = context.getReferenceProps({
					ref,
					tabIndex: nonInteractiveTriggerTabIndex
				});
				return /* @__PURE__ */ (0, import_jsx_runtime$125.jsx)("span", {
					tabIndex: nonInteractiveTriggerTabIndex,
					...spanProps,
					children: (0, import_react$165.cloneElement)(children, {
						"aria-labelledby": labelId,
						"aria-describedby": descriptionId
					})
				});
			}
		}, [
			context,
			ref,
			children
		]);
		if (!element) throw new Error("Tooltip anchor must be a single valid React element");
		return element;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Button/IconButton/IconButton.module.js
var IconButton_module_default;
var init_IconButton_module = __esmMin((() => {
	IconButton_module_default = {
		"icon-button": "_icon-button_1215g_8",
		"no-background": "_no-background_1215g_42",
		destructive: "_destructive_1215g_95"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Button/IconButton/IconButton.js
var import_classnames$23, import_react$164, import_jsx_runtime$124, IconButton;
var init_IconButton = __esmMin((() => {
	init_UnstyledButton();
	init_IconButton_module();
	init_IndicatorIcon();
	init_Tooltip();
	import_classnames$23 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$164 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$124 = require_jsx_runtime();
	IconButton = (0, import_react$164.forwardRef)(function IconButton({ kind = "primary", children, className, indicator, size = "32px", style, disabled, destructive, tooltip, tooltipPlacement, noBackground = false, onTooltipOpenChange, ...props }, ref) {
		const button = /* @__PURE__ */ (0, import_jsx_runtime$124.jsx)(UnstyledButton, {
			as: "button",
			ref,
			className: (0, import_classnames$23.default)(IconButton_module_default["icon-button"], className, {
				[IconButton_module_default.destructive]: destructive,
				[IconButton_module_default["no-background"]]: noBackground
			}),
			style: {
				"--cpd-icon-button-size": size,
				...style
			},
			disabled,
			...props,
			"data-indicator": indicator,
			"data-kind": kind,
			children: /* @__PURE__ */ (0, import_jsx_runtime$124.jsx)(IndicatorIcon, {
				indicator,
				colour: disabled ? "var(--cpd-color-icon-disabled)" : void 0,
				children: import_react$164.Children.only(children)
			})
		});
		return tooltip ? /* @__PURE__ */ (0, import_jsx_runtime$124.jsx)(Tooltip, {
			label: tooltip,
			placement: tooltipPlacement,
			onOpenChange: onTooltipOpenChange,
			children: button
		}) : button;
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
function ErrorSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$123.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$123.jsx)("path", { d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22" })
	});
}
var import_react$163, import_jsx_runtime$123, error_solid_default;
var init_error_solid = __esmMin((() => {
	import_react$163 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$123 = require_jsx_runtime();
	ErrorSolidIcon.displayName = "ErrorSolidIcon";
	error_solid_default = (0, import_react$163.forwardRef)(ErrorSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/info.js
function InfoIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$122.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$122.jsx)("path", { d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713" }), /*#__PURE__*/ (0, import_jsx_runtime$122.jsx)("path", {
			fillRule: "evenodd",
			d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
			clipRule: "evenodd"
		})]
	});
}
var import_react$162, import_jsx_runtime$122, info_default;
var init_info = __esmMin((() => {
	import_react$162 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$122 = require_jsx_runtime();
	InfoIcon.displayName = "InfoIcon";
	info_default = (0, import_react$162.forwardRef)(InfoIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
function CloseIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$121.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$121.jsx)("path", { d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414" })
	});
}
var import_react$161, import_jsx_runtime$121, close_default;
var init_close = __esmMin((() => {
	import_react$161 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$121 = require_jsx_runtime();
	CloseIcon.displayName = "CloseIcon";
	close_default = (0, import_react$161.forwardRef)(CloseIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/utils/string.js
/**
* returns the first (non-sigil) character of 'name',
* converted to uppercase
* @param {string} name
* @return {string} the first letter
*/
function getInitialLetter(name) {
	if (name.length < 1) return "";
	const initial = name[0];
	if ([
		"@",
		"#",
		"+"
	].includes(initial)) name = name.substring(1);
	const result = graphemeSegmenter.segment(name)[Symbol.iterator]().next();
	return result.done ? "" : result.value.segment;
}
var graphemeSegmenter;
var init_string = __esmMin((() => {
	graphemeSegmenter = new Intl.Segmenter();
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Avatar/useIdColorHash.js
/**
* Determines a number for a given Matrix ID or room ID, helps disambiguating users
* who are trying to impersonate someone else.
* @param id - a Matrix ID or room ID
* @returns a hash of the ID provided
*/
function useIdColorHash(id) {
	return id.split("").reduce((sum, char) => {
		return sum + char.charCodeAt(0);
	}, 0) % 6 + 1;
}
var init_useIdColorHash = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Avatar/Avatar.module.js
var Avatar_module_default;
var init_Avatar_module = __esmMin((() => {
	Avatar_module_default = {
		avatar: "_avatar_va14e_8",
		image: "_image_va14e_43",
		"avatar-imageless": "_avatar-imageless_va14e_55",
		"stacked-avatars": "_stacked-avatars_va14e_109",
		"clip-path": "_clip-path_va14e_128"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Avatar/Avatar.js
/**
* Some props warrant that the avatar become a button for accessibility purposes
* @param props Avatar props
* @returns whether the avatar should be a button or not
*/
function shouldBeAButton(props) {
	return !!(props.onClick || props.onKeyDown || props.onKeyUp);
}
var import_classnames$22, import_react$160, import_jsx_runtime$120, Avatar;
var init_Avatar = __esmMin((() => {
	init_string();
	init_Avatar_module();
	init_useIdColorHash();
	import_classnames$22 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$160 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$120 = require_jsx_runtime();
	Avatar = (0, import_react$160.forwardRef)(function Avatar({ src, id, name = "", type = "round", className = "", size, style = {}, onError, ...props }, ref) {
		return import_react$160.createElement(shouldBeAButton(props) ? "button" : "span", {
			ref,
			role: "img",
			"aria-label": id,
			...props,
			"data-type": type,
			"data-color": useIdColorHash(id),
			className: (0, import_classnames$22.default)(Avatar_module_default.avatar, className, { [Avatar_module_default["avatar-imageless"]]: !src }),
			style: {
				...style,
				"--cpd-avatar-size": size
			}
		}, /* @__PURE__ */ (0, import_jsx_runtime$120.jsx)(import_react$160.Fragment, { children: !src ? getInitialLetter(name) : /* @__PURE__ */ (0, import_jsx_runtime$120.jsx)("img", {
			loading: "lazy",
			alt: "",
			src,
			referrerPolicy: "no-referrer",
			className: (0, import_classnames$22.default)(Avatar_module_default.image),
			"data-type": type,
			style,
			width: size,
			height: size,
			onError
		}) }));
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Avatar/avatar-clip.mask.js
var avatar_clip_mask_default;
var init_avatar_clip_mask = __esmMin((() => {
	avatar_clip_mask_default = "<!--\nCopyright 2023 New Vector Ltd.\nCopyright 2026 Element Creations Ltd.\n\nSPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial\nPlease see LICENSE files in the repository root for full details.\n-->\n\n<svg>\n  <clipPath id=\"cpdAvatarClip\" clipPathUnits=\"objectBoundingBox\">\n    <!-- \n        All values below need to be between 0 and 1\n        for objectBoundingBox to work\n     -->\n    <path d=\"M 0,0 V 1 H 0.7683594 A 0.6,0.6 0 0 1 0.5,0.5 0.6,0.6 0 0 1 0.7683594,0 Z\" />\n  </clipPath>\n</svg>\n";
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Avatar/AvatarStack.js
var import_classnames$21, import_react$159, import_jsx_runtime$119, AVATAR_MASK_ID, AvatarStackUsageCount, AvatarStack;
var init_AvatarStack = __esmMin((() => {
	init_Avatar_module();
	init_avatar_clip_mask();
	import_classnames$21 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$159 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$119 = require_jsx_runtime();
	AVATAR_MASK_ID = "cpdAvatarClipSvg";
	AvatarStackUsageCount = 0;
	AvatarStack = ({ children, className }) => {
		/**
		* The `clip-path` property in CSS supports a `path()` function, however
		* that has to use pixel values.
		* `clipPathUnits="objectBoundingBox"` only exists inside an SVG document.
		* Which is why we have the external `avatar-clip.mask.svg`.
		*
		* It is possible to load this SVG externally using `url(path/to/doc.svg#id)`
		* But this is only supported in Firefox
		* This leaves us with no choice but rendering SVG inline in the HTML document
		* And making sure there is always only a single instance regardless of the
		* amount of `AvatarStack` instance in the document.
		*/
		(0, import_react$159.useEffect)(() => {
			if (AvatarStackUsageCount === 0) {
				const svgMask = `
        <div aria-hidden="true" id="${AVATAR_MASK_ID}" class="${Avatar_module_default["clip-path"]}">
          ${avatar_clip_mask_default}
        </div>
      `;
				document.body.insertAdjacentHTML("beforeend", svgMask);
			}
			AvatarStackUsageCount++;
			return () => {
				AvatarStackUsageCount--;
				if (AvatarStackUsageCount <= 0) document.getElementById(AVATAR_MASK_ID)?.remove();
			};
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$119.jsx)("div", {
			className: (0, import_classnames$21.default)(Avatar_module_default["stacked-avatars"], className),
			children
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Badge/Badge.module.js
var Badge_module_default;
var init_Badge_module = __esmMin((() => {
	Badge_module_default = {
		badge: "_badge_10dml_8",
		"has-icon": "_has-icon_10dml_18"
	};
})), import_classnames$20, import_jsx_runtime$118, Badge;
var init_Badge = __esmMin((() => {
	init_Typography();
	init_Badge_module();
	import_classnames$20 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	require_react();
	import_jsx_runtime$118 = require_jsx_runtime();
	Badge = ({ children, Icon, kind = "default", className }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$118.jsxs)(Typography, {
			as: "span",
			size: "sm",
			weight: "medium",
			className: (0, import_classnames$20.default)(Badge_module_default.badge, className, { [Badge_module_default["has-icon"]]: !!Icon }),
			"data-kind": kind,
			children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime$118.jsx)(Icon, {
				width: "16",
				height: "16",
				"aria-hidden": true
			}), children]
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/MenuTitle.module.js
var MenuTitle_module_default;
var init_MenuTitle_module = __esmMin((() => {
	MenuTitle_module_default = { "menu-title": "_menu-title_1sgvx_8" };
})), import_classnames$19, import_jsx_runtime$117, MenuTitle;
var init_MenuTitle = __esmMin((() => {
	init_Text$1();
	init_MenuTitle_module();
	import_classnames$19 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	require_react();
	import_jsx_runtime$117 = require_jsx_runtime();
	MenuTitle = ({ title, id, className }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$117.jsx)(Text, {
			as: "h3",
			id,
			className: (0, import_classnames$19.default)(MenuTitle_module_default["menu-title"], className),
			size: "sm",
			weight: "semibold",
			children: title
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/FloatingMenu.module.js
var FloatingMenu_module_default;
var init_FloatingMenu_module = __esmMin((() => {
	FloatingMenu_module_default = {
		menu: "_menu_so651_8",
		"slide-in": "_slide-in_so651_1",
		"fade-in": "_fade-in_so651_1",
		"fade-out": "_fade-out_so651_1",
		title: "_title_so651_65"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/FloatingMenu.js
var import_classnames$18, import_react$156, import_jsx_runtime$116, FloatingMenu;
var init_FloatingMenu = __esmMin((() => {
	init_FloatingMenu_module();
	init_MenuTitle();
	import_classnames$18 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$156 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$116 = require_jsx_runtime();
	FloatingMenu = (0, import_react$156.forwardRef)(({ title, showTitle = true, className, children, ...props }, ref) => {
		const titleId = (0, import_react$156.useId)();
		return /* @__PURE__ */ (0, import_jsx_runtime$116.jsxs)("div", {
			role: "menu",
			ref,
			"aria-label": showTitle ? void 0 : title,
			"aria-labelledby": showTitle ? titleId : void 0,
			className: (0, import_classnames$18.default)(className, FloatingMenu_module_default.menu),
			...props,
			children: [showTitle && /* @__PURE__ */ (0, import_jsx_runtime$116.jsx)(MenuTitle, {
				className: FloatingMenu_module_default.title,
				title,
				id: titleId
			}), children]
		});
	});
	FloatingMenu.displayName = "FloatingMenu";
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/DrawerMenu.module.js
var DrawerMenu_module_default;
var init_DrawerMenu_module = __esmMin((() => {
	DrawerMenu_module_default = {
		bg: "_bg_610zp_8",
		drawer: "_drawer_610zp_17",
		body: "_body_610zp_51"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/MenuContext.js
var import_react$155, MenuContext;
var init_MenuContext = __esmMin((() => {
	import_react$155 = /* @__PURE__ */ __toESM(require_react(), 1);
	MenuContext = (0, import_react$155.createContext)(null);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/utils/platform.js
/**
* Gets the platform on which the application is running.
* If the userAgent could not be determined, this will default to "other"
*/
function getPlatform() {
	const userAgent = globalThis.navigator?.userAgent;
	if (/android/i.test(userAgent)) return "android";
	else if (/iPad|iPhone|iPod|Mac/.test(userAgent) && "ontouchend" in document) return "ios";
	else return "other";
}
var init_platform = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/DrawerMenu.js
var import_classnames$17, import_react$154, import_jsx_runtime$115, DrawerMenu;
var init_DrawerMenu = __esmMin((() => {
	init_DrawerMenu_module();
	init_platform();
	import_classnames$17 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$154 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$115 = require_jsx_runtime();
	DrawerMenu = (0, import_react$154.forwardRef)(({ title, children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime$115.jsx)("div", {
		ref,
		className: (0, import_classnames$17.default)(className, DrawerMenu_module_default.drawer),
		"aria-label": title,
		"data-platform": getPlatform(),
		...props,
		role: "menu",
		children: /* @__PURE__ */ (0, import_jsx_runtime$115.jsx)("div", {
			className: DrawerMenu_module_default.body,
			children
		})
	}));
	DrawerMenu.displayName = "DrawerMenu";
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers$1(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler?.(event);
	};
}
var init_dist$47 = __esmMin((() => {
	typeof window !== "undefined" && window.document && window.document.createElement;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-context/dist/index.mjs
function createContextScope$1(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react$153.createContext(defaultContext);
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = (props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react$153.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime$114.jsx)(Context.Provider, {
				value,
				children
			});
		};
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope) {
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react$153.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		return [Provider, useContext2];
	}
	const createScope = () => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react$153.createContext(defaultContext);
		});
		return function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react$153.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		};
	};
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes$1(createScope, ...createContextScopeDeps)];
}
function composeContextScopes$1(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = () => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react$153.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		};
	};
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
var import_react$153, import_jsx_runtime$114;
var init_dist$46 = __esmMin((() => {
	import_react$153 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$114 = require_jsx_runtime();
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function setRef$3(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function composeRefs$2(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$3(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$3(refs[i], null);
			}
		};
	};
}
function useComposedRefs$2(...refs) {
	return import_react$152.useCallback(composeRefs$2(...refs), refs);
}
var import_react$152;
var init_dist$45 = __esmMin((() => {
	import_react$152 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function createSlot$2(ownerName) {
	const SlotClone = /* @__PURE__ */ createSlotClone$1(ownerName);
	const Slot2 = import_react$151.forwardRef((props, forwardedRef) => {
		const { children, ...slotProps } = props;
		const childrenArray = import_react$151.Children.toArray(children);
		const slottable = childrenArray.find(isSlottable$2);
		if (slottable) {
			const newElement = slottable.props.children;
			const newChildren = childrenArray.map((child) => {
				if (child === slottable) {
					if (import_react$151.Children.count(newElement) > 1) return import_react$151.Children.only(null);
					return import_react$151.isValidElement(newElement) ? newElement.props.children : null;
				} else return child;
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$113.jsx)(SlotClone, {
				...slotProps,
				ref: forwardedRef,
				children: import_react$151.isValidElement(newElement) ? import_react$151.cloneElement(newElement, void 0, newChildren) : null
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime$113.jsx)(SlotClone, {
			...slotProps,
			ref: forwardedRef,
			children
		});
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone$1(ownerName) {
	const SlotClone = import_react$151.forwardRef((props, forwardedRef) => {
		const { children, ...slotProps } = props;
		if (import_react$151.isValidElement(children)) {
			const childrenRef = getElementRef$4(children);
			const props2 = mergeProps$2(slotProps, children.props);
			if (children.type !== import_react$151.Fragment) props2.ref = forwardedRef ? composeRefs$2(forwardedRef, childrenRef) : childrenRef;
			return import_react$151.cloneElement(children, props2);
		}
		return import_react$151.Children.count(children) > 1 ? import_react$151.Children.only(null) : null;
	});
	SlotClone.displayName = `${ownerName}.SlotClone`;
	return SlotClone;
}
function isSlottable$2(child) {
	return import_react$151.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef$4(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
var import_react$151, import_jsx_runtime$113, SLOTTABLE_IDENTIFIER$2;
var init_dist$44 = __esmMin((() => {
	import_react$151 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$45();
	import_jsx_runtime$113 = require_jsx_runtime();
	SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-primitive/dist/index.mjs
function dispatchDiscreteCustomEvent$1(target, event) {
	if (target) import_react_dom$4.flushSync(() => target.dispatchEvent(event));
}
var import_react$150, import_react_dom$4, import_jsx_runtime$112, Primitive$2;
var init_dist$43 = __esmMin((() => {
	import_react$150 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$4 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_dist$44();
	import_jsx_runtime$112 = require_jsx_runtime();
	Primitive$2 = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul"
	].reduce((primitive, node) => {
		const Slot = /* @__PURE__ */ createSlot$2(`Primitive.${node}`);
		const Node = import_react$150.forwardRef((props, forwardedRef) => {
			const { asChild, ...primitiveProps } = props;
			const Comp = asChild ? Slot : node;
			if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
			return /* @__PURE__ */ (0, import_jsx_runtime$112.jsx)(Comp, {
				...primitiveProps,
				ref: forwardedRef
			});
		});
		Node.displayName = `Primitive.${node}`;
		return {
			...primitive,
			[node]: Node
		};
	}, {});
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-collection/dist/index.mjs
function createCollection(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = createContextScope$1(PROVIDER_NAME);
	const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	});
	const CollectionProvider = (props) => {
		const { scope, children } = props;
		const ref = import_react$148.useRef(null);
		const itemMap = import_react$148.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, import_jsx_runtime$110.jsx)(CollectionProviderImpl, {
			scope,
			itemMap,
			collectionRef: ref,
			children
		});
	};
	CollectionProvider.displayName = PROVIDER_NAME;
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot$2(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react$148.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		const composedRefs = useComposedRefs$2(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef);
		return /* @__PURE__ */ (0, import_jsx_runtime$110.jsx)(CollectionSlotImpl, {
			ref: composedRefs,
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot$2(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react$148.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react$148.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		const context = useCollectionContext(ITEM_SLOT_NAME, scope);
		import_react$148.useEffect(() => {
			context.itemMap.set(ref, {
				ref,
				...itemData
			});
			return () => void context.itemMap.delete(ref);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime$110.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useCollection(scope) {
		const context = useCollectionContext(name + "CollectionConsumer", scope);
		return import_react$148.useCallback(() => {
			const collectionNode = context.collectionRef.current;
			if (!collectionNode) return [];
			const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
			return Array.from(context.itemMap.values()).sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
		}, [context.collectionRef, context.itemMap]);
	}
	return [
		{
			Provider: CollectionProvider,
			Slot: CollectionSlot,
			ItemSlot: CollectionItemSlot
		},
		useCollection,
		createCollectionScope
	];
}
var import_react$148, import_jsx_runtime$110;
var init_dist$42 = __esmMin((() => {
	import_react$148 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$46();
	init_dist$45();
	init_dist$44();
	import_jsx_runtime$110 = require_jsx_runtime();
	require_react();
	require_jsx_runtime();
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-direction/dist/index.mjs
function useDirection(localDir) {
	const globalDir = import_react$147.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
var import_react$147, DirectionContext;
var init_dist$41 = __esmMin((() => {
	import_react$147 = /* @__PURE__ */ __toESM(require_react(), 1);
	require_jsx_runtime();
	DirectionContext = import_react$147.createContext(void 0);
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function useCallbackRef$3(callback) {
	const callbackRef = import_react$146.useRef(callback);
	import_react$146.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react$146.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
var import_react$146;
var init_dist$40 = __esmMin((() => {
	import_react$146 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
	const onEscapeKeyDown = useCallbackRef$3(onEscapeKeyDownProp);
	import_react$145.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onEscapeKeyDown(event);
		};
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [onEscapeKeyDown, ownerDocument]);
}
var import_react$145;
var init_dist$39 = __esmMin((() => {
	import_react$145 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$40();
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
function usePointerDownOutside$1(onPointerDownOutside, ownerDocument = globalThis?.document) {
	const handlePointerDownOutside = useCallbackRef$3(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react$144.useRef(false);
	const handleClickRef = import_react$144.useRef(() => {});
	import_react$144.useEffect(() => {
		const handlePointerDown = (event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					handleAndDispatchCustomEvent$1(POINTER_DOWN_OUTSIDE$1, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				const eventDetail = { originalEvent: event };
				if (event.pointerType === "touch") {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				} else handleAndDispatchPointerDownOutsideEvent2();
			} else ownerDocument.removeEventListener("click", handleClickRef.current);
			isPointerInsideReactTreeRef.current = false;
		};
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
		};
	}, [ownerDocument, handlePointerDownOutside]);
	return { onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true };
}
function useFocusOutside$1(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$3(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react$144.useRef(false);
	import_react$144.useEffect(() => {
		const handleFocus = (event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent$1(FOCUS_OUTSIDE$1, handleFocusOutside, { originalEvent: event }, { discrete: false });
		};
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
		onBlurCapture: () => isFocusInsideReactTreeRef.current = false
	};
}
function dispatchUpdate$1() {
	const event = new CustomEvent(CONTEXT_UPDATE$1);
	document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent$1(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent$1(target, event);
	else target.dispatchEvent(event);
}
var import_react$144, import_jsx_runtime$108, DISMISSABLE_LAYER_NAME, CONTEXT_UPDATE$1, POINTER_DOWN_OUTSIDE$1, FOCUS_OUTSIDE$1, originalBodyPointerEvents$1, DismissableLayerContext$1, DismissableLayer$1, BRANCH_NAME, DismissableLayerBranch;
var init_dist$38 = __esmMin((() => {
	import_react$144 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$47();
	init_dist$43();
	init_dist$45();
	init_dist$40();
	init_dist$39();
	import_jsx_runtime$108 = require_jsx_runtime();
	DISMISSABLE_LAYER_NAME = "DismissableLayer";
	CONTEXT_UPDATE$1 = "dismissableLayer.update";
	POINTER_DOWN_OUTSIDE$1 = "dismissableLayer.pointerDownOutside";
	FOCUS_OUTSIDE$1 = "dismissableLayer.focusOutside";
	DismissableLayerContext$1 = import_react$144.createContext({
		layers: /* @__PURE__ */ new Set(),
		layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
		branches: /* @__PURE__ */ new Set()
	});
	DismissableLayer$1 = import_react$144.forwardRef((props, forwardedRef) => {
		const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
		const context = import_react$144.useContext(DismissableLayerContext$1);
		const [node, setNode] = import_react$144.useState(null);
		const ownerDocument = node?.ownerDocument ?? globalThis?.document;
		const [, force] = import_react$144.useState({});
		const composedRefs = useComposedRefs$2(forwardedRef, (node2) => setNode(node2));
		const layers = Array.from(context.layers);
		const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
		const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
		const index = node ? layers.indexOf(node) : -1;
		const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
		const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
		const pointerDownOutside = usePointerDownOutside$1((event) => {
			const target = event.target;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
			onPointerDownOutside?.(event);
			onInteractOutside?.(event);
			if (!event.defaultPrevented) onDismiss?.();
		}, ownerDocument);
		const focusOutside = useFocusOutside$1((event) => {
			const target = event.target;
			if ([...context.branches].some((branch) => branch.contains(target))) return;
			onFocusOutside?.(event);
			onInteractOutside?.(event);
			if (!event.defaultPrevented) onDismiss?.();
		}, ownerDocument);
		useEscapeKeydown((event) => {
			if (!(index === context.layers.size - 1)) return;
			onEscapeKeyDown?.(event);
			if (!event.defaultPrevented && onDismiss) {
				event.preventDefault();
				onDismiss();
			}
		}, ownerDocument);
		import_react$144.useEffect(() => {
			if (!node) return;
			if (disableOutsidePointerEvents) {
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
					originalBodyPointerEvents$1 = ownerDocument.body.style.pointerEvents;
					ownerDocument.body.style.pointerEvents = "none";
				}
				context.layersWithOutsidePointerEventsDisabled.add(node);
			}
			context.layers.add(node);
			dispatchUpdate$1();
			return () => {
				if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents$1;
			};
		}, [
			node,
			ownerDocument,
			disableOutsidePointerEvents,
			context
		]);
		import_react$144.useEffect(() => {
			return () => {
				if (!node) return;
				context.layers.delete(node);
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				dispatchUpdate$1();
			};
		}, [node, context]);
		import_react$144.useEffect(() => {
			const handleUpdate = () => force({});
			document.addEventListener(CONTEXT_UPDATE$1, handleUpdate);
			return () => document.removeEventListener(CONTEXT_UPDATE$1, handleUpdate);
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$108.jsx)(Primitive$2.div, {
			...layerProps,
			ref: composedRefs,
			style: {
				pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
				...props.style
			},
			onFocusCapture: composeEventHandlers$1(props.onFocusCapture, focusOutside.onFocusCapture),
			onBlurCapture: composeEventHandlers$1(props.onBlurCapture, focusOutside.onBlurCapture),
			onPointerDownCapture: composeEventHandlers$1(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
		});
	});
	DismissableLayer$1.displayName = DISMISSABLE_LAYER_NAME;
	BRANCH_NAME = "DismissableLayerBranch";
	DismissableLayerBranch = import_react$144.forwardRef((props, forwardedRef) => {
		const context = import_react$144.useContext(DismissableLayerContext$1);
		const ref = import_react$144.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		import_react$144.useEffect(() => {
			const node = ref.current;
			if (node) {
				context.branches.add(node);
				return () => {
					context.branches.delete(node);
				};
			}
		}, [context.branches]);
		return /* @__PURE__ */ (0, import_jsx_runtime$108.jsx)(Primitive$2.div, {
			...props,
			ref: composedRefs
		});
	});
	DismissableLayerBranch.displayName = BRANCH_NAME;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
function useFocusGuards$1() {
	import_react$143.useEffect(() => {
		const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
		document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard$1());
		document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard$1());
		count$3++;
		return () => {
			if (count$3 === 1) document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
			count$3--;
		};
	}, []);
}
function createFocusGuard$1() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
var import_react$143, count$3;
var init_dist$37 = __esmMin((() => {
	import_react$143 = /* @__PURE__ */ __toESM(require_react(), 1);
	count$3 = 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
function focusFirst$3(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus$1(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
function getTabbableEdges$1(container) {
	const candidates = getTabbableCandidates$1(container);
	return [findVisible$1(candidates, container), findVisible$1(candidates.reverse(), container)];
}
function getTabbableCandidates$1(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
function findVisible$1(elements, container) {
	for (const element of elements) if (!isHidden$1(element, { upTo: container })) return element;
}
function isHidden$1(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
function isSelectableInput$1(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
function focus$1(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput$1(element) && select) element.select();
	}
}
function createFocusScopesStack$1() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove$1(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove$1(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
function arrayRemove$1(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
function removeLinks$1(items) {
	return items.filter((item) => item.tagName !== "A");
}
var import_react$142, import_jsx_runtime$107, AUTOFOCUS_ON_MOUNT$1, AUTOFOCUS_ON_UNMOUNT$1, EVENT_OPTIONS$2, FOCUS_SCOPE_NAME, FocusScope$1, focusScopesStack$1;
var init_dist$36 = __esmMin((() => {
	import_react$142 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$45();
	init_dist$43();
	init_dist$40();
	import_jsx_runtime$107 = require_jsx_runtime();
	AUTOFOCUS_ON_MOUNT$1 = "focusScope.autoFocusOnMount";
	AUTOFOCUS_ON_UNMOUNT$1 = "focusScope.autoFocusOnUnmount";
	EVENT_OPTIONS$2 = {
		bubbles: false,
		cancelable: true
	};
	FOCUS_SCOPE_NAME = "FocusScope";
	FocusScope$1 = import_react$142.forwardRef((props, forwardedRef) => {
		const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
		const [container, setContainer] = import_react$142.useState(null);
		const onMountAutoFocus = useCallbackRef$3(onMountAutoFocusProp);
		const onUnmountAutoFocus = useCallbackRef$3(onUnmountAutoFocusProp);
		const lastFocusedElementRef = import_react$142.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, (node) => setContainer(node));
		const focusScope = import_react$142.useRef({
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		}).current;
		import_react$142.useEffect(() => {
			if (trapped) {
				let handleFocusIn2 = function(event) {
					if (focusScope.paused || !container) return;
					const target = event.target;
					if (container.contains(target)) lastFocusedElementRef.current = target;
					else focus$1(lastFocusedElementRef.current, { select: true });
				}, handleFocusOut2 = function(event) {
					if (focusScope.paused || !container) return;
					const relatedTarget = event.relatedTarget;
					if (relatedTarget === null) return;
					if (!container.contains(relatedTarget)) focus$1(lastFocusedElementRef.current, { select: true });
				}, handleMutations2 = function(mutations) {
					if (document.activeElement !== document.body) return;
					for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus$1(container);
				};
				document.addEventListener("focusin", handleFocusIn2);
				document.addEventListener("focusout", handleFocusOut2);
				const mutationObserver = new MutationObserver(handleMutations2);
				if (container) mutationObserver.observe(container, {
					childList: true,
					subtree: true
				});
				return () => {
					document.removeEventListener("focusin", handleFocusIn2);
					document.removeEventListener("focusout", handleFocusOut2);
					mutationObserver.disconnect();
				};
			}
		}, [
			trapped,
			container,
			focusScope.paused
		]);
		import_react$142.useEffect(() => {
			if (container) {
				focusScopesStack$1.add(focusScope);
				const previouslyFocusedElement = document.activeElement;
				if (!container.contains(previouslyFocusedElement)) {
					const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT$1, EVENT_OPTIONS$2);
					container.addEventListener(AUTOFOCUS_ON_MOUNT$1, onMountAutoFocus);
					container.dispatchEvent(mountEvent);
					if (!mountEvent.defaultPrevented) {
						focusFirst$3(removeLinks$1(getTabbableCandidates$1(container)), { select: true });
						if (document.activeElement === previouslyFocusedElement) focus$1(container);
					}
				}
				return () => {
					container.removeEventListener(AUTOFOCUS_ON_MOUNT$1, onMountAutoFocus);
					setTimeout(() => {
						const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT$1, EVENT_OPTIONS$2);
						container.addEventListener(AUTOFOCUS_ON_UNMOUNT$1, onUnmountAutoFocus);
						container.dispatchEvent(unmountEvent);
						if (!unmountEvent.defaultPrevented) focus$1(previouslyFocusedElement ?? document.body, { select: true });
						container.removeEventListener(AUTOFOCUS_ON_UNMOUNT$1, onUnmountAutoFocus);
						focusScopesStack$1.remove(focusScope);
					}, 0);
				};
			}
		}, [
			container,
			onMountAutoFocus,
			onUnmountAutoFocus,
			focusScope
		]);
		const handleKeyDown = import_react$142.useCallback((event) => {
			if (!loop && !trapped) return;
			if (focusScope.paused) return;
			const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
			const focusedElement = document.activeElement;
			if (isTabKey && focusedElement) {
				const container2 = event.currentTarget;
				const [first, last] = getTabbableEdges$1(container2);
				if (!(first && last)) {
					if (focusedElement === container2) event.preventDefault();
				} else if (!event.shiftKey && focusedElement === last) {
					event.preventDefault();
					if (loop) focus$1(first, { select: true });
				} else if (event.shiftKey && focusedElement === first) {
					event.preventDefault();
					if (loop) focus$1(last, { select: true });
				}
			}
		}, [
			loop,
			trapped,
			focusScope.paused
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime$107.jsx)(Primitive$2.div, {
			tabIndex: -1,
			...scopeProps,
			ref: composedRefs,
			onKeyDown: handleKeyDown
		});
	});
	FocusScope$1.displayName = FOCUS_SCOPE_NAME;
	focusScopesStack$1 = createFocusScopesStack$1();
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react$141, useLayoutEffect2$1;
var init_dist$35 = __esmMin((() => {
	import_react$141 = /* @__PURE__ */ __toESM(require_react(), 1);
	useLayoutEffect2$1 = globalThis?.document ? import_react$141.useLayoutEffect : () => {};
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-id/dist/index.mjs
function useId$6(deterministicId) {
	const [id, setId] = import_react$140.useState(useReactId$1());
	useLayoutEffect2$1(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$2++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
var import_react$140, useReactId$1, count$2;
var init_dist$34 = __esmMin((() => {
	import_react$140 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$35();
	useReactId$1 = import_react$140[" useId ".trim().toString()] || (() => void 0);
	count$2 = 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-arrow@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-arrow/dist/index.mjs
var import_react$139, import_jsx_runtime$106, NAME$2, Arrow$1, Root$5;
var init_dist$33 = __esmMin((() => {
	import_react$139 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$43();
	import_jsx_runtime$106 = require_jsx_runtime();
	NAME$2 = "Arrow";
	Arrow$1 = import_react$139.forwardRef((props, forwardedRef) => {
		const { children, width = 10, height = 5, ...arrowProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime$106.jsx)(Primitive$2.svg, {
			...arrowProps,
			ref: forwardedRef,
			width,
			height,
			viewBox: "0 0 30 10",
			preserveAspectRatio: "none",
			children: props.asChild ? children : /* @__PURE__ */ (0, import_jsx_runtime$106.jsx)("polygon", { points: "0,0 30,0 15,10" })
		});
	});
	Arrow$1.displayName = NAME$2;
	Root$5 = Arrow$1;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-size/dist/index.mjs
function useSize(element) {
	const [size, setSize] = import_react$138.useState(void 0);
	useLayoutEffect2$1(() => {
		if (element) {
			setSize({
				width: element.offsetWidth,
				height: element.offsetHeight
			});
			const resizeObserver = new ResizeObserver((entries) => {
				if (!Array.isArray(entries)) return;
				if (!entries.length) return;
				const entry = entries[0];
				let width;
				let height;
				if ("borderBoxSize" in entry) {
					const borderSizeEntry = entry["borderBoxSize"];
					const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
					width = borderSize["inlineSize"];
					height = borderSize["blockSize"];
				} else {
					width = element.offsetWidth;
					height = element.offsetHeight;
				}
				setSize({
					width,
					height
				});
			});
			resizeObserver.observe(element, { box: "border-box" });
			return () => resizeObserver.unobserve(element);
		} else setSize(void 0);
	}, [element]);
	return size;
}
var import_react$138;
var init_dist$32 = __esmMin((() => {
	import_react$138 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$35();
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popper@1.2.8_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-popper/dist/index.mjs
function isNotNull(value) {
	return value !== null;
}
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
var import_react$137, import_jsx_runtime$105, POPPER_NAME, createPopperContext, createPopperScope, PopperProvider, usePopperContext, Popper, ANCHOR_NAME$1, PopperAnchor, CONTENT_NAME$4, PopperContentProvider, useContentContext, PopperContent, ARROW_NAME$3, OPPOSITE_SIDE, PopperArrow, transformOrigin, Root2$2, Anchor, Content$1, Arrow;
var init_dist$31 = __esmMin((() => {
	import_react$137 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_floating_ui_react_dom();
	init_dist$33();
	init_dist$45();
	init_dist$46();
	init_dist$43();
	init_dist$40();
	init_dist$35();
	init_dist$32();
	import_jsx_runtime$105 = require_jsx_runtime();
	POPPER_NAME = "Popper";
	[createPopperContext, createPopperScope] = createContextScope$1(POPPER_NAME);
	[PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
	Popper = (props) => {
		const { __scopePopper, children } = props;
		const [anchor, setAnchor] = import_react$137.useState(null);
		return /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)(PopperProvider, {
			scope: __scopePopper,
			anchor,
			onAnchorChange: setAnchor,
			children
		});
	};
	Popper.displayName = POPPER_NAME;
	ANCHOR_NAME$1 = "PopperAnchor";
	PopperAnchor = import_react$137.forwardRef((props, forwardedRef) => {
		const { __scopePopper, virtualRef, ...anchorProps } = props;
		const context = usePopperContext(ANCHOR_NAME$1, __scopePopper);
		const ref = import_react$137.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		const anchorRef = import_react$137.useRef(null);
		import_react$137.useEffect(() => {
			const previousAnchor = anchorRef.current;
			anchorRef.current = virtualRef?.current || ref.current;
			if (previousAnchor !== anchorRef.current) context.onAnchorChange(anchorRef.current);
		});
		return virtualRef ? null : /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)(Primitive$2.div, {
			...anchorProps,
			ref: composedRefs
		});
	});
	PopperAnchor.displayName = ANCHOR_NAME$1;
	CONTENT_NAME$4 = "PopperContent";
	[PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$4);
	PopperContent = import_react$137.forwardRef((props, forwardedRef) => {
		const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
		const context = usePopperContext(CONTENT_NAME$4, __scopePopper);
		const [content, setContent] = import_react$137.useState(null);
		const composedRefs = useComposedRefs$2(forwardedRef, (node) => setContent(node));
		const [arrow$4, setArrow] = import_react$137.useState(null);
		const arrowSize = useSize(arrow$4);
		const arrowWidth = arrowSize?.width ?? 0;
		const arrowHeight = arrowSize?.height ?? 0;
		const desiredPlacement = side + (align !== "center" ? "-" + align : "");
		const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...collisionPaddingProp
		};
		const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
		const hasExplicitBoundaries = boundary.length > 0;
		const detectOverflowOptions = {
			padding: collisionPadding,
			boundary: boundary.filter(isNotNull),
			altBoundary: hasExplicitBoundaries
		};
		const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating$1({
			strategy: "fixed",
			placement: desiredPlacement,
			whileElementsMounted: (...args) => {
				return autoUpdate(...args, { animationFrame: updatePositionStrategy === "always" });
			},
			elements: { reference: context.anchor },
			middleware: [
				offset({
					mainAxis: sideOffset + arrowHeight,
					alignmentAxis: alignOffset
				}),
				avoidCollisions && shift({
					mainAxis: true,
					crossAxis: false,
					limiter: sticky === "partial" ? limitShift() : void 0,
					...detectOverflowOptions
				}),
				avoidCollisions && flip({ ...detectOverflowOptions }),
				size({
					...detectOverflowOptions,
					apply: ({ elements, rects, availableWidth, availableHeight }) => {
						const { width: anchorWidth, height: anchorHeight } = rects.reference;
						const contentStyle = elements.floating.style;
						contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
						contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
						contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
						contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
					}
				}),
				arrow$4 && arrow({
					element: arrow$4,
					padding: arrowPadding
				}),
				transformOrigin({
					arrowWidth,
					arrowHeight
				}),
				hideWhenDetached && hide({
					strategy: "referenceHidden",
					...detectOverflowOptions
				})
			]
		});
		const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
		const handlePlaced = useCallbackRef$3(onPlaced);
		useLayoutEffect2$1(() => {
			if (isPositioned) handlePlaced?.();
		}, [isPositioned, handlePlaced]);
		const arrowX = middlewareData.arrow?.x;
		const arrowY = middlewareData.arrow?.y;
		const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
		const [contentZIndex, setContentZIndex] = import_react$137.useState();
		useLayoutEffect2$1(() => {
			if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
		}, [content]);
		return /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)("div", {
			ref: refs.setFloating,
			"data-radix-popper-content-wrapper": "",
			style: {
				...floatingStyles,
				transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
				minWidth: "max-content",
				zIndex: contentZIndex,
				["--radix-popper-transform-origin"]: [middlewareData.transformOrigin?.x, middlewareData.transformOrigin?.y].join(" "),
				...middlewareData.hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			},
			dir: props.dir,
			children: /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)(PopperContentProvider, {
				scope: __scopePopper,
				placedSide,
				onArrowChange: setArrow,
				arrowX,
				arrowY,
				shouldHideArrow: cannotCenterArrow,
				children: /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)(Primitive$2.div, {
					"data-side": placedSide,
					"data-align": placedAlign,
					...contentProps,
					ref: composedRefs,
					style: {
						...contentProps.style,
						animation: !isPositioned ? "none" : void 0
					}
				})
			})
		});
	});
	PopperContent.displayName = CONTENT_NAME$4;
	ARROW_NAME$3 = "PopperArrow";
	OPPOSITE_SIDE = {
		top: "bottom",
		right: "left",
		bottom: "top",
		left: "right"
	};
	PopperArrow = import_react$137.forwardRef(function PopperArrow2(props, forwardedRef) {
		const { __scopePopper, ...arrowProps } = props;
		const contentContext = useContentContext(ARROW_NAME$3, __scopePopper);
		const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
		return /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)("span", {
			ref: contentContext.onArrowChange,
			style: {
				position: "absolute",
				left: contentContext.arrowX,
				top: contentContext.arrowY,
				[baseSide]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0"
				}[contentContext.placedSide],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: `rotate(180deg)`,
					left: "translateY(50%) rotate(-90deg) translateX(50%)"
				}[contentContext.placedSide],
				visibility: contentContext.shouldHideArrow ? "hidden" : void 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime$105.jsx)(Root$5, {
				...arrowProps,
				ref: forwardedRef,
				style: {
					...arrowProps.style,
					display: "block"
				}
			})
		});
	});
	PopperArrow.displayName = ARROW_NAME$3;
	transformOrigin = (options) => ({
		name: "transformOrigin",
		options,
		fn(data) {
			const { placement, rects, middlewareData } = data;
			const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlign = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = "";
			let y = "";
			if (placedSide === "bottom") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === "top") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === "right") {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			} else if (placedSide === "left") {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			}
			return { data: {
				x,
				y
			} };
		}
	});
	Root2$2 = Popper;
	Anchor = PopperAnchor;
	Content$1 = PopperContent;
	Arrow = PopperArrow;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.9_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react$136, import_react_dom$3, import_jsx_runtime$104, PORTAL_NAME$4, Portal$3;
var init_dist$30 = __esmMin((() => {
	import_react$136 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$3 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_dist$43();
	init_dist$35();
	import_jsx_runtime$104 = require_jsx_runtime();
	PORTAL_NAME$4 = "Portal";
	Portal$3 = import_react$136.forwardRef((props, forwardedRef) => {
		const { container: containerProp, ...portalProps } = props;
		const [mounted, setMounted] = import_react$136.useState(false);
		useLayoutEffect2$1(() => setMounted(true), []);
		const container = containerProp || mounted && globalThis?.document?.body;
		return container ? import_react_dom$3.createPortal(/* @__PURE__ */ (0, import_jsx_runtime$104.jsx)(Primitive$2.div, {
			...portalProps,
			ref: forwardedRef
		}), container) : null;
	});
	Portal$3.displayName = PORTAL_NAME$4;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-presence/dist/index.mjs
function useStateMachine$1(initialState, machine) {
	return import_react$135.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
function usePresence$1(present) {
	const [node, setNode] = import_react$134.useState();
	const stylesRef = import_react$134.useRef(null);
	const prevPresentRef = import_react$134.useRef(present);
	const prevAnimationNameRef = import_react$134.useRef("none");
	const [state, send] = useStateMachine$1(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react$134.useEffect(() => {
		const currentAnimationName = getAnimationName$1(stylesRef.current);
		prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
	}, [state]);
	useLayoutEffect2$1(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName$1(styles);
			if (present) send("MOUNT");
			else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2$1(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = (event) => {
				const isCurrentAnimation = getAnimationName$1(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			};
			const handleAnimationStart = (event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName$1(stylesRef.current);
			};
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react$134.useCallback((node2) => {
			stylesRef.current = node2 ? getComputedStyle(node2) : null;
			setNode(node2);
		}, [])
	};
}
function getAnimationName$1(styles) {
	return styles?.animationName || "none";
}
function getElementRef$3(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
var import_react$134, import_react$135, Presence$1;
var init_dist$29 = __esmMin((() => {
	import_react$134 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$45();
	init_dist$35();
	import_react$135 = /* @__PURE__ */ __toESM(require_react(), 1);
	Presence$1 = (props) => {
		const { present, children } = props;
		const presence = usePresence$1(present);
		const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react$134.Children.only(children);
		const ref = useComposedRefs$2(presence.ref, getElementRef$3(child));
		return typeof children === "function" || presence.isPresent ? import_react$134.cloneElement(child, { ref }) : null;
	};
	Presence$1.displayName = "Presence";
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function useControllableState$2({ prop, defaultProp, onChange = () => {}, caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState$2({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	const value = isControlled ? prop : uncontrolledProp;
	{
		const isControlledRef = import_react$132.useRef(prop !== void 0);
		import_react$132.useEffect(() => {
			const wasControlled = isControlledRef.current;
			if (wasControlled !== isControlled) console.warn(`${caller} is changing from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			isControlledRef.current = isControlled;
		}, [isControlled, caller]);
	}
	return [value, import_react$132.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction$1(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
function useUncontrolledState$2({ defaultProp, onChange }) {
	const [value, setValue] = import_react$132.useState(defaultProp);
	const prevValueRef = import_react$132.useRef(value);
	const onChangeRef = import_react$132.useRef(onChange);
	useInsertionEffect$1(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react$132.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
function isFunction$1(value) {
	return typeof value === "function";
}
var import_react$132, useInsertionEffect$1;
var init_dist$28 = __esmMin((() => {
	import_react$132 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$35();
	require_react();
	useInsertionEffect$1 = import_react$132[" useInsertionEffect ".trim().toString()] || useLayoutEffect2$1;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
function getDirectionAwareKey(key, dir) {
	if (dir !== "rtl") return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
	if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst$2(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
function wrapArray$1(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var import_react$131, import_jsx_runtime$103, ENTRY_FOCUS, EVENT_OPTIONS$1, GROUP_NAME$3, Collection$1, useCollection$1, createCollectionScope$1, createRovingFocusGroupContext, createRovingFocusGroupScope, RovingFocusProvider, useRovingFocusContext, RovingFocusGroup, RovingFocusGroupImpl, ITEM_NAME$3, RovingFocusGroupItem, MAP_KEY_TO_FOCUS_INTENT, Root$4, Item;
var init_dist$27 = __esmMin((() => {
	import_react$131 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$47();
	init_dist$42();
	init_dist$45();
	init_dist$46();
	init_dist$34();
	init_dist$43();
	init_dist$40();
	init_dist$28();
	init_dist$41();
	import_jsx_runtime$103 = require_jsx_runtime();
	ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
	EVENT_OPTIONS$1 = {
		bubbles: false,
		cancelable: true
	};
	GROUP_NAME$3 = "RovingFocusGroup";
	[Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME$3);
	[createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope$1(GROUP_NAME$3, [createCollectionScope$1]);
	[RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3);
	RovingFocusGroup = import_react$131.forwardRef((props, forwardedRef) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(Collection$1.Provider, {
			scope: props.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(Collection$1.Slot, {
				scope: props.__scopeRovingFocusGroup,
				children: /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(RovingFocusGroupImpl, {
					...props,
					ref: forwardedRef
				})
			})
		});
	});
	RovingFocusGroup.displayName = GROUP_NAME$3;
	RovingFocusGroupImpl = import_react$131.forwardRef((props, forwardedRef) => {
		const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
		const ref = import_react$131.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		const direction = useDirection(dir);
		const [currentTabStopId, setCurrentTabStopId] = useControllableState$2({
			prop: currentTabStopIdProp,
			defaultProp: defaultCurrentTabStopId ?? null,
			onChange: onCurrentTabStopIdChange,
			caller: GROUP_NAME$3
		});
		const [isTabbingBackOut, setIsTabbingBackOut] = import_react$131.useState(false);
		const handleEntryFocus = useCallbackRef$3(onEntryFocus);
		const getItems = useCollection$1(__scopeRovingFocusGroup);
		const isClickFocusRef = import_react$131.useRef(false);
		const [focusableItemsCount, setFocusableItemsCount] = import_react$131.useState(0);
		import_react$131.useEffect(() => {
			const node = ref.current;
			if (node) {
				node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
				return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
			}
		}, [handleEntryFocus]);
		return /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(RovingFocusProvider, {
			scope: __scopeRovingFocusGroup,
			orientation,
			dir: direction,
			loop,
			currentTabStopId,
			onItemFocus: import_react$131.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
			onItemShiftTab: import_react$131.useCallback(() => setIsTabbingBackOut(true), []),
			onFocusableItemAdd: import_react$131.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
			onFocusableItemRemove: import_react$131.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
			children: /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(Primitive$2.div, {
				tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
				"data-orientation": orientation,
				...groupProps,
				ref: composedRefs,
				style: {
					outline: "none",
					...props.style
				},
				onMouseDown: composeEventHandlers$1(props.onMouseDown, () => {
					isClickFocusRef.current = true;
				}),
				onFocus: composeEventHandlers$1(props.onFocus, (event) => {
					const isKeyboardFocus = !isClickFocusRef.current;
					if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
						const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS$1);
						event.currentTarget.dispatchEvent(entryFocusEvent);
						if (!entryFocusEvent.defaultPrevented) {
							const items = getItems().filter((item) => item.focusable);
							focusFirst$2([
								items.find((item) => item.active),
								items.find((item) => item.id === currentTabStopId),
								...items
							].filter(Boolean).map((item) => item.ref.current), preventScrollOnEntryFocus);
						}
					}
					isClickFocusRef.current = false;
				}),
				onBlur: composeEventHandlers$1(props.onBlur, () => setIsTabbingBackOut(false))
			})
		});
	});
	ITEM_NAME$3 = "RovingFocusGroupItem";
	RovingFocusGroupItem = import_react$131.forwardRef((props, forwardedRef) => {
		const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
		const autoId = useId$6();
		const id = tabStopId || autoId;
		const context = useRovingFocusContext(ITEM_NAME$3, __scopeRovingFocusGroup);
		const isCurrentTabStop = context.currentTabStopId === id;
		const getItems = useCollection$1(__scopeRovingFocusGroup);
		const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
		import_react$131.useEffect(() => {
			if (focusable) {
				onFocusableItemAdd();
				return () => onFocusableItemRemove();
			}
		}, [
			focusable,
			onFocusableItemAdd,
			onFocusableItemRemove
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(Collection$1.ItemSlot, {
			scope: __scopeRovingFocusGroup,
			id,
			focusable,
			active,
			children: /* @__PURE__ */ (0, import_jsx_runtime$103.jsx)(Primitive$2.span, {
				tabIndex: isCurrentTabStop ? 0 : -1,
				"data-orientation": context.orientation,
				...itemProps,
				ref: forwardedRef,
				onMouseDown: composeEventHandlers$1(props.onMouseDown, (event) => {
					if (!focusable) event.preventDefault();
					else context.onItemFocus(id);
				}),
				onFocus: composeEventHandlers$1(props.onFocus, () => context.onItemFocus(id)),
				onKeyDown: composeEventHandlers$1(props.onKeyDown, (event) => {
					if (event.key === "Tab" && event.shiftKey) {
						context.onItemShiftTab();
						return;
					}
					if (event.target !== event.currentTarget) return;
					const focusIntent = getFocusIntent(event, context.orientation, context.dir);
					if (focusIntent !== void 0) {
						if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
						event.preventDefault();
						let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
						if (focusIntent === "last") candidateNodes.reverse();
						else if (focusIntent === "prev" || focusIntent === "next") {
							if (focusIntent === "prev") candidateNodes.reverse();
							const currentIndex = candidateNodes.indexOf(event.currentTarget);
							candidateNodes = context.loop ? wrapArray$1(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
						}
						setTimeout(() => focusFirst$2(candidateNodes));
					}
				}),
				children: typeof children === "function" ? children({
					isCurrentTabStop,
					hasTabStop: currentTabStopId != null
				}) : children
			})
		});
	});
	RovingFocusGroupItem.displayName = ITEM_NAME$3;
	MAP_KEY_TO_FOCUS_INTENT = {
		ArrowLeft: "prev",
		ArrowUp: "prev",
		ArrowRight: "next",
		ArrowDown: "next",
		PageUp: "first",
		Home: "first",
		PageDown: "last",
		End: "last"
	};
	Root$4 = RovingFocusGroup;
	Item = RovingFocusGroupItem;
}));
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent, counterMap, uncontrolledNodes, markerMap, lockCount, unwrapHost, correctTargets, applyAttributeToOthers, hideOthers;
var init_es2015$6 = __esmMin((() => {
	getDefaultParent = function(originalTarget) {
		if (typeof document === "undefined") return null;
		return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
	};
	counterMap = /* @__PURE__ */ new WeakMap();
	uncontrolledNodes = /* @__PURE__ */ new WeakMap();
	markerMap = {};
	lockCount = 0;
	unwrapHost = function(node) {
		return node && (node.host || unwrapHost(node.parentNode));
	};
	correctTargets = function(parent, targets) {
		return targets.map(function(target) {
			if (parent.contains(target)) return target;
			var correctedTarget = unwrapHost(target);
			if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
			console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
			return null;
		}).filter(function(x) {
			return Boolean(x);
		});
	};
	applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
		var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
		if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
		var markerCounter = markerMap[markerName];
		var hiddenNodes = [];
		var elementsToKeep = /* @__PURE__ */ new Set();
		var elementsToStop = new Set(targets);
		var keep = function(el) {
			if (!el || elementsToKeep.has(el)) return;
			elementsToKeep.add(el);
			keep(el.parentNode);
		};
		targets.forEach(keep);
		var deep = function(parent) {
			if (!parent || elementsToStop.has(parent)) return;
			Array.prototype.forEach.call(parent.children, function(node) {
				if (elementsToKeep.has(node)) deep(node);
				else try {
					var attr = node.getAttribute(controlAttribute);
					var alreadyHidden = attr !== null && attr !== "false";
					var counterValue = (counterMap.get(node) || 0) + 1;
					var markerValue = (markerCounter.get(node) || 0) + 1;
					counterMap.set(node, counterValue);
					markerCounter.set(node, markerValue);
					hiddenNodes.push(node);
					if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
					if (markerValue === 1) node.setAttribute(markerName, "true");
					if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
				} catch (e) {
					console.error("aria-hidden: cannot operate on ", node, e);
				}
			});
		};
		deep(parentNode);
		elementsToKeep.clear();
		lockCount++;
		return function() {
			hiddenNodes.forEach(function(node) {
				var counterValue = counterMap.get(node) - 1;
				var markerValue = markerCounter.get(node) - 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				if (!counterValue) {
					if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
					uncontrolledNodes.delete(node);
				}
				if (!markerValue) node.removeAttribute(markerName);
			});
			lockCount--;
			if (!lockCount) {
				counterMap = /* @__PURE__ */ new WeakMap();
				counterMap = /* @__PURE__ */ new WeakMap();
				uncontrolledNodes = /* @__PURE__ */ new WeakMap();
				markerMap = {};
			}
		};
	};
	hideOthers = function(originalTarget, parentNode, markerName) {
		if (markerName === void 0) markerName = "data-aria-hidden";
		var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
		var activeParentNode = parentNode || getDefaultParent(originalTarget);
		if (!activeParentNode) return function() {
			return null;
		};
		targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
		return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
var __assign;
var init_tslib_es6 = __esmMin((() => {
	__assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName, fullWidthClassName, noScrollbarsClassName, removedBarSizeVariable;
var init_constants = __esmMin((() => {
	zeroRightClassName = "right-scroll-bar-position";
	fullWidthClassName = "width-before-scroll-bar";
	noScrollbarsClassName = "with-scroll-bars-hidden";
	removedBarSizeVariable = "--removed-body-scroll-bar-size";
}));
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef$1(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
var init_assignRef = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/useRef.js
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef$2(initialValue, callback) {
	var ref = (0, import_react$130.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
var import_react$130;
var init_useRef = __esmMin((() => {
	import_react$130 = /* @__PURE__ */ __toESM(require_react());
}));
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs$1(refs, defaultValue) {
	var callbackRef = useCallbackRef$2(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef$1(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect$1(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef$1(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef$1(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
var import_react$129, useIsomorphicLayoutEffect$1, currentValues;
var init_useMergeRef = __esmMin((() => {
	import_react$129 = /* @__PURE__ */ __toESM(require_react());
	init_assignRef();
	init_useRef();
	useIsomorphicLayoutEffect$1 = typeof window !== "undefined" ? import_react$129.useLayoutEffect : import_react$129.useEffect;
	currentValues = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/index.js
var init_es2015$5 = __esmMin((() => {
	init_useRef();
	init_useMergeRef();
}));
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
var init_medium$1 = __esmMin((() => {
	init_tslib_es6();
}));
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/use-sidecar/dist/es2015/exports.js
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
var import_react$128, SideCar;
var init_exports = __esmMin((() => {
	init_tslib_es6();
	import_react$128 = /* @__PURE__ */ __toESM(require_react());
	SideCar = function(_a) {
		var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
		if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
		var Target = sideCar.read();
		if (!Target) throw new Error("Sidecar medium not found");
		return import_react$128.createElement(Target, __assign({}, rest));
	};
	SideCar.isSideCarExport = true;
}));
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/use-sidecar/dist/es2015/index.js
var init_es2015$4 = __esmMin((() => {
	init_tslib_es6();
	init_medium$1();
	init_exports();
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar;
var init_medium = __esmMin((() => {
	init_es2015$4();
	effectCar = createSidecarMedium();
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/UI.js
var import_react$127, nothing, RemoveScroll;
var init_UI = __esmMin((() => {
	init_tslib_es6();
	import_react$127 = /* @__PURE__ */ __toESM(require_react());
	init_constants();
	init_es2015$5();
	init_medium();
	nothing = function() {};
	RemoveScroll = import_react$127.forwardRef(function(props, parentRef) {
		var ref = import_react$127.useRef(null);
		var _a = import_react$127.useState({
			onScrollCapture: nothing,
			onWheelCapture: nothing,
			onTouchMoveCapture: nothing
		}), callbacks = _a[0], setCallbacks = _a[1];
		var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
			"forwardProps",
			"children",
			"className",
			"removeScrollBar",
			"enabled",
			"shards",
			"sideCar",
			"noRelative",
			"noIsolation",
			"inert",
			"allowPinchZoom",
			"as",
			"gapMode"
		]);
		var SideCar = sideCar;
		var containerRef = useMergeRefs$1([ref, parentRef]);
		var containerProps = __assign(__assign({}, rest), callbacks);
		return import_react$127.createElement(import_react$127.Fragment, null, enabled && import_react$127.createElement(SideCar, {
			sideCar: effectCar,
			removeScrollBar,
			shards,
			noRelative,
			noIsolation,
			inert,
			setCallbacks,
			allowPinchZoom: !!allowPinchZoom,
			lockRef: ref,
			gapMode
		}), forwardProps ? import_react$127.cloneElement(import_react$127.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react$127.createElement(Container, __assign({}, containerProps, {
			className,
			ref: containerRef
		}), children));
	});
	RemoveScroll.defaultProps = {
		enabled: true,
		removeScrollBar: true,
		inert: false
	};
	RemoveScroll.classNames = {
		fullWidth: fullWidthClassName,
		zeroRight: zeroRightClassName
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce, getNonce;
var init_es2015$3 = __esmMin((() => {
	getNonce = function() {
		if (currentNonce) return currentNonce;
		if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.17_react@19.2.8/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css) {
	if (tag.styleSheet) tag.styleSheet.cssText = css;
	else tag.appendChild(document.createTextNode(css));
}
function insertStyleTag(tag) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
}
var stylesheetSingleton;
var init_singleton = __esmMin((() => {
	init_es2015$3();
	stylesheetSingleton = function() {
		var counter = 0;
		var stylesheet = null;
		return {
			add: function(style) {
				if (counter == 0) {
					if (stylesheet = makeStyleTag()) {
						injectStyles(stylesheet, style);
						insertStyleTag(stylesheet);
					}
				}
				counter++;
			},
			remove: function() {
				counter--;
				if (!counter && stylesheet) {
					stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
					stylesheet = null;
				}
			}
		};
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.17_react@19.2.8/node_modules/react-style-singleton/dist/es2015/hook.js
var import_react$126, styleHookSingleton;
var init_hook = __esmMin((() => {
	import_react$126 = /* @__PURE__ */ __toESM(require_react());
	init_singleton();
	styleHookSingleton = function() {
		var sheet = stylesheetSingleton();
		return function(styles, isDynamic) {
			import_react$126.useEffect(function() {
				sheet.add(styles);
				return function() {
					sheet.remove();
				};
			}, [styles && isDynamic]);
		};
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.17_react@19.2.8/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton;
var init_component$1 = __esmMin((() => {
	init_hook();
	styleSingleton = function() {
		var useStyle = styleHookSingleton();
		var Sheet = function(_a) {
			var styles = _a.styles, dynamic = _a.dynamic;
			useStyle(styles, dynamic);
			return null;
		};
		return Sheet;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.17_react@19.2.8/node_modules/react-style-singleton/dist/es2015/index.js
var init_es2015$2 = __esmMin((() => {
	init_component$1();
	init_singleton();
	init_hook();
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap, parse, getOffset, getGapWidth;
var init_utils$1 = __esmMin((() => {
	zeroGap = {
		left: 0,
		top: 0,
		right: 0,
		gap: 0
	};
	parse = function(x) {
		return parseInt(x || "", 10) || 0;
	};
	getOffset = function(gapMode) {
		var cs = window.getComputedStyle(document.body);
		var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
		var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
		var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
		return [
			parse(left),
			parse(top),
			parse(right)
		];
	};
	getGapWidth = function(gapMode) {
		if (gapMode === void 0) gapMode = "margin";
		if (typeof window === "undefined") return zeroGap;
		var offsets = getOffset(gapMode);
		var documentWidth = document.documentElement.clientWidth;
		var windowWidth = window.innerWidth;
		return {
			left: offsets[0],
			top: offsets[1],
			right: offsets[2],
			gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
		};
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var import_react$125, Style, lockAttribute, getStyles, getCurrentUseCounter, useLockAttribute, RemoveScrollBar;
var init_component = __esmMin((() => {
	import_react$125 = /* @__PURE__ */ __toESM(require_react());
	init_es2015$2();
	init_constants();
	init_utils$1();
	Style = styleSingleton();
	lockAttribute = "data-scroll-locked";
	getStyles = function(_a, allowRelative, gapMode, important) {
		var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
		if (gapMode === void 0) gapMode = "margin";
		return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
			allowRelative && "position: relative ".concat(important, ";"),
			gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
			gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
		].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
	};
	getCurrentUseCounter = function() {
		var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
		return isFinite(counter) ? counter : 0;
	};
	useLockAttribute = function() {
		import_react$125.useEffect(function() {
			document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
			return function() {
				var newCounter = getCurrentUseCounter() - 1;
				if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
				else document.body.setAttribute(lockAttribute, newCounter.toString());
			};
		}, []);
	};
	RemoveScrollBar = function(_a) {
		var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
		useLockAttribute();
		var gap = import_react$125.useMemo(function() {
			return getGapWidth(gapMode);
		}, [gapMode]);
		return import_react$125.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll-bar/dist/es2015/index.js
var init_es2015$1 = __esmMin((() => {
	init_component();
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported, options, nonPassive;
var init_aggresiveCapture = __esmMin((() => {
	passiveSupported = false;
	if (typeof window !== "undefined") try {
		options = Object.defineProperty({}, "passive", { get: function() {
			passiveSupported = true;
			return true;
		} });
		window.addEventListener("test", options, options);
		window.removeEventListener("test", options, options);
	} catch (err) {
		passiveSupported = false;
	}
	nonPassive = passiveSupported ? { passive: false } : false;
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll, elementCanBeScrolled, elementCouldBeVScrolled, elementCouldBeHScrolled, locationCouldBeScrolled, getVScrollVariables, getHScrollVariables, elementCouldBeScrolled, getScrollVariables, getDirectionFactor, handleScroll;
var init_handleScroll = __esmMin((() => {
	alwaysContainsScroll = function(node) {
		return node.tagName === "TEXTAREA";
	};
	elementCanBeScrolled = function(node, overflow) {
		if (!(node instanceof Element)) return false;
		var styles = window.getComputedStyle(node);
		return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
	};
	elementCouldBeVScrolled = function(node) {
		return elementCanBeScrolled(node, "overflowY");
	};
	elementCouldBeHScrolled = function(node) {
		return elementCanBeScrolled(node, "overflowX");
	};
	locationCouldBeScrolled = function(axis, node) {
		var ownerDocument = node.ownerDocument;
		var current = node;
		do {
			if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
			if (elementCouldBeScrolled(axis, current)) {
				var _a = getScrollVariables(axis, current);
				if (_a[1] > _a[2]) return true;
			}
			current = current.parentNode;
		} while (current && current !== ownerDocument.body);
		return false;
	};
	getVScrollVariables = function(_a) {
		return [
			_a.scrollTop,
			_a.scrollHeight,
			_a.clientHeight
		];
	};
	getHScrollVariables = function(_a) {
		return [
			_a.scrollLeft,
			_a.scrollWidth,
			_a.clientWidth
		];
	};
	elementCouldBeScrolled = function(axis, node) {
		return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
	};
	getScrollVariables = function(axis, node) {
		return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
	};
	getDirectionFactor = function(axis, direction) {
		/**
		* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
		* and then increasingly negative as you scroll towards the end of the content.
		* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
		*/
		return axis === "h" && direction === "rtl" ? -1 : 1;
	};
	handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
		var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
		var delta = directionFactor * sourceDelta;
		var target = event.target;
		var targetInLock = endTarget.contains(target);
		var shouldCancelScroll = false;
		var isDeltaPositive = delta > 0;
		var availableScroll = 0;
		var availableScrollTop = 0;
		do {
			if (!target) break;
			var _a = getScrollVariables(axis, target), position = _a[0];
			var elementScroll = _a[1] - _a[2] - directionFactor * position;
			if (position || elementScroll) {
				if (elementCouldBeScrolled(axis, target)) {
					availableScroll += elementScroll;
					availableScrollTop += position;
				}
			}
			var parent_1 = target.parentNode;
			target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
		} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
		if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
		else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
		return shouldCancelScroll;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react$124.useRef([]);
	var touchStartRef = import_react$124.useRef([0, 0]);
	var activeAxis = import_react$124.useRef();
	var id = import_react$124.useState(idCounter++)[0];
	var Style = import_react$124.useState(styleSingleton)[0];
	var lastProps = import_react$124.useRef(props);
	import_react$124.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react$124.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react$124.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react$124.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react$124.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react$124.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react$124.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react$124.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react$124.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react$124.createElement(import_react$124.Fragment, null, inert ? import_react$124.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react$124.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
var import_react$124, getTouchXY, getDeltaXY, extractRef, deltaCompare, generateStyle, idCounter, lockStack;
var init_SideEffect = __esmMin((() => {
	init_tslib_es6();
	import_react$124 = /* @__PURE__ */ __toESM(require_react());
	init_es2015$1();
	init_es2015$2();
	init_aggresiveCapture();
	init_handleScroll();
	getTouchXY = function(event) {
		return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
	};
	getDeltaXY = function(event) {
		return [event.deltaX, event.deltaY];
	};
	extractRef = function(ref) {
		return ref && "current" in ref ? ref.current : ref;
	};
	deltaCompare = function(x, y) {
		return x[0] === y[0] && x[1] === y[1];
	};
	generateStyle = function(id) {
		return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
	};
	idCounter = 0;
	lockStack = [];
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default;
var init_sidecar = __esmMin((() => {
	init_es2015$4();
	init_SideEffect();
	init_medium();
	sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/Combination.js
var import_react$123, ReactRemoveScroll;
var init_Combination = __esmMin((() => {
	init_tslib_es6();
	import_react$123 = /* @__PURE__ */ __toESM(require_react());
	init_UI();
	init_sidecar();
	ReactRemoveScroll = import_react$123.forwardRef(function(props, ref) {
		return import_react$123.createElement(RemoveScroll, __assign({}, props, {
			ref,
			sideCar: sidecar_default
		}));
	});
	ReactRemoveScroll.classNames = RemoveScroll.classNames;
}));
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/index.js
var init_es2015 = __esmMin((() => {
	init_Combination();
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-menu@2.1.16_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-menu/dist/index.mjs
function getOpenState(open) {
	return open ? "open" : "closed";
}
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getCheckedState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst$1(candidates) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus();
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
	if (normalizedSearch.length === 1) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const ii = polygon[i];
		const jj = polygon[j];
		const xi = ii.x;
		const yi = ii.y;
		const xj = jj.x;
		const yj = jj.y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function isPointerInGraceArea(event, area) {
	if (!area) return false;
	return isPointInPolygon({
		x: event.clientX,
		y: event.clientY
	}, area);
}
function whenMouse(handler) {
	return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var import_react$122, import_jsx_runtime$102, SELECTION_KEYS, FIRST_KEYS, LAST_KEYS, FIRST_LAST_KEYS, SUB_OPEN_KEYS, SUB_CLOSE_KEYS, MENU_NAME, Collection, useCollection, createCollectionScope, createMenuContext, createMenuScope, usePopperScope, useRovingFocusGroupScope, MenuProvider, useMenuContext, MenuRootProvider, useMenuRootContext, Menu$1, ANCHOR_NAME, MenuAnchor, PORTAL_NAME$3, PortalProvider$1, usePortalContext$1, MenuPortal, CONTENT_NAME$3, MenuContentProvider, useMenuContentContext, MenuContent, MenuRootContentModal, MenuRootContentNonModal, Slot$2, MenuContentImpl, GROUP_NAME$2, MenuGroup, LABEL_NAME$3, MenuLabel, ITEM_NAME$2, ITEM_SELECT, MenuItem$1, MenuItemImpl, CHECKBOX_ITEM_NAME$2, MenuCheckboxItem, RADIO_GROUP_NAME$2, RadioGroupProvider, useRadioGroupContext, MenuRadioGroup, RADIO_ITEM_NAME$2, MenuRadioItem, ITEM_INDICATOR_NAME, ItemIndicatorProvider, useItemIndicatorContext, MenuItemIndicator, SEPARATOR_NAME$2, MenuSeparator, ARROW_NAME$2, MenuArrow, SUB_NAME$1, MenuSubProvider, useMenuSubContext, MenuSub, SUB_TRIGGER_NAME$2, MenuSubTrigger, SUB_CONTENT_NAME$2, MenuSubContent, Root3, Anchor2, Portal$2, Content2$2, Group, Label$1, Item2, CheckboxItem, RadioGroup, RadioItem, ItemIndicator, Separator$2, Arrow2, Sub, SubTrigger, SubContent;
var init_dist$26 = __esmMin((() => {
	import_react$122 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$47();
	init_dist$42();
	init_dist$45();
	init_dist$46();
	init_dist$41();
	init_dist$38();
	init_dist$37();
	init_dist$36();
	init_dist$34();
	init_dist$31();
	init_dist$30();
	init_dist$29();
	init_dist$43();
	init_dist$27();
	init_dist$44();
	init_dist$40();
	init_es2015$6();
	init_es2015();
	import_jsx_runtime$102 = require_jsx_runtime();
	SELECTION_KEYS = ["Enter", " "];
	FIRST_KEYS = [
		"ArrowDown",
		"PageUp",
		"Home"
	];
	LAST_KEYS = [
		"ArrowUp",
		"PageDown",
		"End"
	];
	FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
	SUB_OPEN_KEYS = {
		ltr: [...SELECTION_KEYS, "ArrowRight"],
		rtl: [...SELECTION_KEYS, "ArrowLeft"]
	};
	SUB_CLOSE_KEYS = {
		ltr: ["ArrowLeft"],
		rtl: ["ArrowRight"]
	};
	MENU_NAME = "Menu";
	[Collection, useCollection, createCollectionScope] = createCollection(MENU_NAME);
	[createMenuContext, createMenuScope] = createContextScope$1(MENU_NAME, [
		createCollectionScope,
		createPopperScope,
		createRovingFocusGroupScope
	]);
	usePopperScope = createPopperScope();
	useRovingFocusGroupScope = createRovingFocusGroupScope();
	[MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
	[MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
	Menu$1 = (props) => {
		const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
		const popperScope = usePopperScope(__scopeMenu);
		const [content, setContent] = import_react$122.useState(null);
		const isUsingKeyboardRef = import_react$122.useRef(false);
		const handleOpenChange = useCallbackRef$3(onOpenChange);
		const direction = useDirection(dir);
		import_react$122.useEffect(() => {
			const handleKeyDown = () => {
				isUsingKeyboardRef.current = true;
				document.addEventListener("pointerdown", handlePointer, {
					capture: true,
					once: true
				});
				document.addEventListener("pointermove", handlePointer, {
					capture: true,
					once: true
				});
			};
			const handlePointer = () => isUsingKeyboardRef.current = false;
			document.addEventListener("keydown", handleKeyDown, { capture: true });
			return () => {
				document.removeEventListener("keydown", handleKeyDown, { capture: true });
				document.removeEventListener("pointerdown", handlePointer, { capture: true });
				document.removeEventListener("pointermove", handlePointer, { capture: true });
			};
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Root2$2, {
			...popperScope,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuProvider, {
				scope: __scopeMenu,
				open,
				onOpenChange: handleOpenChange,
				content,
				onContentChange: setContent,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuRootProvider, {
					scope: __scopeMenu,
					onClose: import_react$122.useCallback(() => handleOpenChange(false), [handleOpenChange]),
					isUsingKeyboardRef,
					dir: direction,
					modal,
					children
				})
			})
		});
	};
	Menu$1.displayName = MENU_NAME;
	ANCHOR_NAME = "MenuAnchor";
	MenuAnchor = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, ...anchorProps } = props;
		const popperScope = usePopperScope(__scopeMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Anchor, {
			...popperScope,
			...anchorProps,
			ref: forwardedRef
		});
	});
	MenuAnchor.displayName = ANCHOR_NAME;
	PORTAL_NAME$3 = "MenuPortal";
	[PortalProvider$1, usePortalContext$1] = createMenuContext(PORTAL_NAME$3, { forceMount: void 0 });
	MenuPortal = (props) => {
		const { __scopeMenu, forceMount, children, container } = props;
		const context = useMenuContext(PORTAL_NAME$3, __scopeMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(PortalProvider$1, {
			scope: __scopeMenu,
			forceMount,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Presence$1, {
				present: forceMount || context.open,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Portal$3, {
					asChild: true,
					container,
					children
				})
			})
		});
	};
	MenuPortal.displayName = PORTAL_NAME$3;
	CONTENT_NAME$3 = "MenuContent";
	[MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$3);
	MenuContent = import_react$122.forwardRef((props, forwardedRef) => {
		const portalContext = usePortalContext$1(CONTENT_NAME$3, props.__scopeMenu);
		const { forceMount = portalContext.forceMount, ...contentProps } = props;
		const context = useMenuContext(CONTENT_NAME$3, props.__scopeMenu);
		const rootContext = useMenuRootContext(CONTENT_NAME$3, props.__scopeMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Collection.Provider, {
			scope: props.__scopeMenu,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Presence$1, {
				present: forceMount || context.open,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Collection.Slot, {
					scope: props.__scopeMenu,
					children: rootContext.modal ? /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuRootContentModal, {
						...contentProps,
						ref: forwardedRef
					}) : /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuRootContentNonModal, {
						...contentProps,
						ref: forwardedRef
					})
				})
			})
		});
	});
	MenuRootContentModal = import_react$122.forwardRef((props, forwardedRef) => {
		const context = useMenuContext(CONTENT_NAME$3, props.__scopeMenu);
		const ref = import_react$122.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		import_react$122.useEffect(() => {
			const content = ref.current;
			if (content) return hideOthers(content);
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuContentImpl, {
			...props,
			ref: composedRefs,
			trapFocus: context.open,
			disableOutsidePointerEvents: context.open,
			disableOutsideScroll: true,
			onFocusOutside: composeEventHandlers$1(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false }),
			onDismiss: () => context.onOpenChange(false)
		});
	});
	MenuRootContentNonModal = import_react$122.forwardRef((props, forwardedRef) => {
		const context = useMenuContext(CONTENT_NAME$3, props.__scopeMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuContentImpl, {
			...props,
			ref: forwardedRef,
			trapFocus: false,
			disableOutsidePointerEvents: false,
			disableOutsideScroll: false,
			onDismiss: () => context.onOpenChange(false)
		});
	});
	Slot$2 = /* @__PURE__ */ createSlot$2("MenuContent.ScrollLock");
	MenuContentImpl = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
		const context = useMenuContext(CONTENT_NAME$3, __scopeMenu);
		const rootContext = useMenuRootContext(CONTENT_NAME$3, __scopeMenu);
		const popperScope = usePopperScope(__scopeMenu);
		const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
		const getItems = useCollection(__scopeMenu);
		const [currentItemId, setCurrentItemId] = import_react$122.useState(null);
		const contentRef = import_react$122.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, contentRef, context.onContentChange);
		const timerRef = import_react$122.useRef(0);
		const searchRef = import_react$122.useRef("");
		const pointerGraceTimerRef = import_react$122.useRef(0);
		const pointerGraceIntentRef = import_react$122.useRef(null);
		const pointerDirRef = import_react$122.useRef("right");
		const lastPointerXRef = import_react$122.useRef(0);
		const ScrollLockWrapper = disableOutsideScroll ? ReactRemoveScroll : import_react$122.Fragment;
		const scrollLockWrapperProps = disableOutsideScroll ? {
			as: Slot$2,
			allowPinchZoom: true
		} : void 0;
		const handleTypeaheadSearch = (key) => {
			const search = searchRef.current + key;
			const items = getItems().filter((item) => !item.disabled);
			const currentItem = document.activeElement;
			const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
			const nextMatch = getNextMatch(items.map((item) => item.textValue), search, currentMatch);
			const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
			(function updateSearch(value) {
				searchRef.current = value;
				window.clearTimeout(timerRef.current);
				if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
			})(search);
			if (newItem) setTimeout(() => newItem.focus());
		};
		import_react$122.useEffect(() => {
			return () => window.clearTimeout(timerRef.current);
		}, []);
		useFocusGuards$1();
		const isPointerMovingToSubmenu = import_react$122.useCallback((event) => {
			return pointerDirRef.current === pointerGraceIntentRef.current?.side && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuContentProvider, {
			scope: __scopeMenu,
			searchRef,
			onItemEnter: import_react$122.useCallback((event) => {
				if (isPointerMovingToSubmenu(event)) event.preventDefault();
			}, [isPointerMovingToSubmenu]),
			onItemLeave: import_react$122.useCallback((event) => {
				if (isPointerMovingToSubmenu(event)) return;
				contentRef.current?.focus();
				setCurrentItemId(null);
			}, [isPointerMovingToSubmenu]),
			onTriggerLeave: import_react$122.useCallback((event) => {
				if (isPointerMovingToSubmenu(event)) event.preventDefault();
			}, [isPointerMovingToSubmenu]),
			pointerGraceTimerRef,
			onPointerGraceIntentChange: import_react$122.useCallback((intent) => {
				pointerGraceIntentRef.current = intent;
			}, []),
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(ScrollLockWrapper, {
				...scrollLockWrapperProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(FocusScope$1, {
					asChild: true,
					trapped: trapFocus,
					onMountAutoFocus: composeEventHandlers$1(onOpenAutoFocus, (event) => {
						event.preventDefault();
						contentRef.current?.focus({ preventScroll: true });
					}),
					onUnmountAutoFocus: onCloseAutoFocus,
					children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(DismissableLayer$1, {
						asChild: true,
						disableOutsidePointerEvents,
						onEscapeKeyDown,
						onPointerDownOutside,
						onFocusOutside,
						onInteractOutside,
						onDismiss,
						children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Root$4, {
							asChild: true,
							...rovingFocusGroupScope,
							dir: rootContext.dir,
							orientation: "vertical",
							loop,
							currentTabStopId: currentItemId,
							onCurrentTabStopIdChange: setCurrentItemId,
							onEntryFocus: composeEventHandlers$1(onEntryFocus, (event) => {
								if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
							}),
							preventScrollOnEntryFocus: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Content$1, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": getOpenState(context.open),
								"data-radix-menu-content": "",
								dir: rootContext.dir,
								...popperScope,
								...contentProps,
								ref: composedRefs,
								style: {
									outline: "none",
									...contentProps.style
								},
								onKeyDown: composeEventHandlers$1(contentProps.onKeyDown, (event) => {
									const isKeyDownInside = event.target.closest("[data-radix-menu-content]") === event.currentTarget;
									const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
									const isCharacterKey = event.key.length === 1;
									if (isKeyDownInside) {
										if (event.key === "Tab") event.preventDefault();
										if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
									}
									const content = contentRef.current;
									if (event.target !== content) return;
									if (!FIRST_LAST_KEYS.includes(event.key)) return;
									event.preventDefault();
									const candidateNodes = getItems().filter((item) => !item.disabled).map((item) => item.ref.current);
									if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
									focusFirst$1(candidateNodes);
								}),
								onBlur: composeEventHandlers$1(props.onBlur, (event) => {
									if (!event.currentTarget.contains(event.target)) {
										window.clearTimeout(timerRef.current);
										searchRef.current = "";
									}
								}),
								onPointerMove: composeEventHandlers$1(props.onPointerMove, whenMouse((event) => {
									const target = event.target;
									const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
									if (event.currentTarget.contains(target) && pointerXHasChanged) {
										const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
										pointerDirRef.current = newDir;
										lastPointerXRef.current = event.clientX;
									}
								}))
							})
						})
					})
				})
			})
		});
	});
	MenuContent.displayName = CONTENT_NAME$3;
	GROUP_NAME$2 = "MenuGroup";
	MenuGroup = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, ...groupProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Primitive$2.div, {
			role: "group",
			...groupProps,
			ref: forwardedRef
		});
	});
	MenuGroup.displayName = GROUP_NAME$2;
	LABEL_NAME$3 = "MenuLabel";
	MenuLabel = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, ...labelProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Primitive$2.div, {
			...labelProps,
			ref: forwardedRef
		});
	});
	MenuLabel.displayName = LABEL_NAME$3;
	ITEM_NAME$2 = "MenuItem";
	ITEM_SELECT = "menu.itemSelect";
	MenuItem$1 = import_react$122.forwardRef((props, forwardedRef) => {
		const { disabled = false, onSelect, ...itemProps } = props;
		const ref = import_react$122.useRef(null);
		const rootContext = useMenuRootContext(ITEM_NAME$2, props.__scopeMenu);
		const contentContext = useMenuContentContext(ITEM_NAME$2, props.__scopeMenu);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		const isPointerDownRef = import_react$122.useRef(false);
		const handleSelect = () => {
			const menuItem = ref.current;
			if (!disabled && menuItem) {
				const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
					bubbles: true,
					cancelable: true
				});
				menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
				dispatchDiscreteCustomEvent$1(menuItem, itemSelectEvent);
				if (itemSelectEvent.defaultPrevented) isPointerDownRef.current = false;
				else rootContext.onClose();
			}
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuItemImpl, {
			...itemProps,
			ref: composedRefs,
			disabled,
			onClick: composeEventHandlers$1(props.onClick, handleSelect),
			onPointerDown: (event) => {
				props.onPointerDown?.(event);
				isPointerDownRef.current = true;
			},
			onPointerUp: composeEventHandlers$1(props.onPointerUp, (event) => {
				if (!isPointerDownRef.current) event.currentTarget?.click();
			}),
			onKeyDown: composeEventHandlers$1(props.onKeyDown, (event) => {
				const isTypingAhead = contentContext.searchRef.current !== "";
				if (disabled || isTypingAhead && event.key === " ") return;
				if (SELECTION_KEYS.includes(event.key)) {
					event.currentTarget.click();
					event.preventDefault();
				}
			})
		});
	});
	MenuItem$1.displayName = ITEM_NAME$2;
	MenuItemImpl = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
		const contentContext = useMenuContentContext(ITEM_NAME$2, __scopeMenu);
		const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
		const ref = import_react$122.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		const [isFocused, setIsFocused] = import_react$122.useState(false);
		const [textContent, setTextContent] = import_react$122.useState("");
		import_react$122.useEffect(() => {
			const menuItem = ref.current;
			if (menuItem) setTextContent((menuItem.textContent ?? "").trim());
		}, [itemProps.children]);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Collection.ItemSlot, {
			scope: __scopeMenu,
			disabled,
			textValue: textValue ?? textContent,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Item, {
				asChild: true,
				...rovingFocusGroupScope,
				focusable: !disabled,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Primitive$2.div, {
					role: "menuitem",
					"data-highlighted": isFocused ? "" : void 0,
					"aria-disabled": disabled || void 0,
					"data-disabled": disabled ? "" : void 0,
					...itemProps,
					ref: composedRefs,
					onPointerMove: composeEventHandlers$1(props.onPointerMove, whenMouse((event) => {
						if (disabled) contentContext.onItemLeave(event);
						else {
							contentContext.onItemEnter(event);
							if (!event.defaultPrevented) event.currentTarget.focus({ preventScroll: true });
						}
					})),
					onPointerLeave: composeEventHandlers$1(props.onPointerLeave, whenMouse((event) => contentContext.onItemLeave(event))),
					onFocus: composeEventHandlers$1(props.onFocus, () => setIsFocused(true)),
					onBlur: composeEventHandlers$1(props.onBlur, () => setIsFocused(false))
				})
			})
		});
	});
	CHECKBOX_ITEM_NAME$2 = "MenuCheckboxItem";
	MenuCheckboxItem = import_react$122.forwardRef((props, forwardedRef) => {
		const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(ItemIndicatorProvider, {
			scope: props.__scopeMenu,
			checked,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuItem$1, {
				role: "menuitemcheckbox",
				"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
				...checkboxItemProps,
				ref: forwardedRef,
				"data-state": getCheckedState(checked),
				onSelect: composeEventHandlers$1(checkboxItemProps.onSelect, () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked), { checkForDefaultPrevented: false })
			})
		});
	});
	MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$2;
	RADIO_GROUP_NAME$2 = "MenuRadioGroup";
	[RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$2, {
		value: void 0,
		onValueChange: () => {}
	});
	MenuRadioGroup = import_react$122.forwardRef((props, forwardedRef) => {
		const { value, onValueChange, ...groupProps } = props;
		const handleValueChange = useCallbackRef$3(onValueChange);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(RadioGroupProvider, {
			scope: props.__scopeMenu,
			value,
			onValueChange: handleValueChange,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuGroup, {
				...groupProps,
				ref: forwardedRef
			})
		});
	});
	MenuRadioGroup.displayName = RADIO_GROUP_NAME$2;
	RADIO_ITEM_NAME$2 = "MenuRadioItem";
	MenuRadioItem = import_react$122.forwardRef((props, forwardedRef) => {
		const { value, ...radioItemProps } = props;
		const context = useRadioGroupContext(RADIO_ITEM_NAME$2, props.__scopeMenu);
		const checked = value === context.value;
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(ItemIndicatorProvider, {
			scope: props.__scopeMenu,
			checked,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuItem$1, {
				role: "menuitemradio",
				"aria-checked": checked,
				...radioItemProps,
				ref: forwardedRef,
				"data-state": getCheckedState(checked),
				onSelect: composeEventHandlers$1(radioItemProps.onSelect, () => context.onValueChange?.(value), { checkForDefaultPrevented: false })
			})
		});
	});
	MenuRadioItem.displayName = RADIO_ITEM_NAME$2;
	ITEM_INDICATOR_NAME = "MenuItemIndicator";
	[ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, { checked: false });
	MenuItemIndicator = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
		const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Presence$1, {
			present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Primitive$2.span, {
				...itemIndicatorProps,
				ref: forwardedRef,
				"data-state": getCheckedState(indicatorContext.checked)
			})
		});
	});
	MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
	SEPARATOR_NAME$2 = "MenuSeparator";
	MenuSeparator = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, ...separatorProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Primitive$2.div, {
			role: "separator",
			"aria-orientation": "horizontal",
			...separatorProps,
			ref: forwardedRef
		});
	});
	MenuSeparator.displayName = SEPARATOR_NAME$2;
	ARROW_NAME$2 = "MenuArrow";
	MenuArrow = import_react$122.forwardRef((props, forwardedRef) => {
		const { __scopeMenu, ...arrowProps } = props;
		const popperScope = usePopperScope(__scopeMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Arrow, {
			...popperScope,
			...arrowProps,
			ref: forwardedRef
		});
	});
	MenuArrow.displayName = ARROW_NAME$2;
	SUB_NAME$1 = "MenuSub";
	[MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME$1);
	MenuSub = (props) => {
		const { __scopeMenu, children, open = false, onOpenChange } = props;
		const parentMenuContext = useMenuContext(SUB_NAME$1, __scopeMenu);
		const popperScope = usePopperScope(__scopeMenu);
		const [trigger, setTrigger] = import_react$122.useState(null);
		const [content, setContent] = import_react$122.useState(null);
		const handleOpenChange = useCallbackRef$3(onOpenChange);
		import_react$122.useEffect(() => {
			if (parentMenuContext.open === false) handleOpenChange(false);
			return () => handleOpenChange(false);
		}, [parentMenuContext.open, handleOpenChange]);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Root2$2, {
			...popperScope,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuProvider, {
				scope: __scopeMenu,
				open,
				onOpenChange: handleOpenChange,
				content,
				onContentChange: setContent,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuSubProvider, {
					scope: __scopeMenu,
					contentId: useId$6(),
					triggerId: useId$6(),
					trigger,
					onTriggerChange: setTrigger,
					children
				})
			})
		});
	};
	MenuSub.displayName = SUB_NAME$1;
	SUB_TRIGGER_NAME$2 = "MenuSubTrigger";
	MenuSubTrigger = import_react$122.forwardRef((props, forwardedRef) => {
		const context = useMenuContext(SUB_TRIGGER_NAME$2, props.__scopeMenu);
		const rootContext = useMenuRootContext(SUB_TRIGGER_NAME$2, props.__scopeMenu);
		const subContext = useMenuSubContext(SUB_TRIGGER_NAME$2, props.__scopeMenu);
		const contentContext = useMenuContentContext(SUB_TRIGGER_NAME$2, props.__scopeMenu);
		const openTimerRef = import_react$122.useRef(null);
		const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
		const scope = { __scopeMenu: props.__scopeMenu };
		const clearOpenTimer = import_react$122.useCallback(() => {
			if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
			openTimerRef.current = null;
		}, []);
		import_react$122.useEffect(() => clearOpenTimer, [clearOpenTimer]);
		import_react$122.useEffect(() => {
			const pointerGraceTimer = pointerGraceTimerRef.current;
			return () => {
				window.clearTimeout(pointerGraceTimer);
				onPointerGraceIntentChange(null);
			};
		}, [pointerGraceTimerRef, onPointerGraceIntentChange]);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuAnchor, {
			asChild: true,
			...scope,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuItemImpl, {
				id: subContext.triggerId,
				"aria-haspopup": "menu",
				"aria-expanded": context.open,
				"aria-controls": subContext.contentId,
				"data-state": getOpenState(context.open),
				...props,
				ref: composeRefs$2(forwardedRef, subContext.onTriggerChange),
				onClick: (event) => {
					props.onClick?.(event);
					if (props.disabled || event.defaultPrevented) return;
					event.currentTarget.focus();
					if (!context.open) context.onOpenChange(true);
				},
				onPointerMove: composeEventHandlers$1(props.onPointerMove, whenMouse((event) => {
					contentContext.onItemEnter(event);
					if (event.defaultPrevented) return;
					if (!props.disabled && !context.open && !openTimerRef.current) {
						contentContext.onPointerGraceIntentChange(null);
						openTimerRef.current = window.setTimeout(() => {
							context.onOpenChange(true);
							clearOpenTimer();
						}, 100);
					}
				})),
				onPointerLeave: composeEventHandlers$1(props.onPointerLeave, whenMouse((event) => {
					clearOpenTimer();
					const contentRect = context.content?.getBoundingClientRect();
					if (contentRect) {
						const side = context.content?.dataset.side;
						const rightSide = side === "right";
						const bleed = rightSide ? -5 : 5;
						const contentNearEdge = contentRect[rightSide ? "left" : "right"];
						const contentFarEdge = contentRect[rightSide ? "right" : "left"];
						contentContext.onPointerGraceIntentChange({
							area: [
								{
									x: event.clientX + bleed,
									y: event.clientY
								},
								{
									x: contentNearEdge,
									y: contentRect.top
								},
								{
									x: contentFarEdge,
									y: contentRect.top
								},
								{
									x: contentFarEdge,
									y: contentRect.bottom
								},
								{
									x: contentNearEdge,
									y: contentRect.bottom
								}
							],
							side
						});
						window.clearTimeout(pointerGraceTimerRef.current);
						pointerGraceTimerRef.current = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
					} else {
						contentContext.onTriggerLeave(event);
						if (event.defaultPrevented) return;
						contentContext.onPointerGraceIntentChange(null);
					}
				})),
				onKeyDown: composeEventHandlers$1(props.onKeyDown, (event) => {
					const isTypingAhead = contentContext.searchRef.current !== "";
					if (props.disabled || isTypingAhead && event.key === " ") return;
					if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
						context.onOpenChange(true);
						context.content?.focus();
						event.preventDefault();
					}
				})
			})
		});
	});
	MenuSubTrigger.displayName = SUB_TRIGGER_NAME$2;
	SUB_CONTENT_NAME$2 = "MenuSubContent";
	MenuSubContent = import_react$122.forwardRef((props, forwardedRef) => {
		const portalContext = usePortalContext$1(CONTENT_NAME$3, props.__scopeMenu);
		const { forceMount = portalContext.forceMount, ...subContentProps } = props;
		const context = useMenuContext(CONTENT_NAME$3, props.__scopeMenu);
		const rootContext = useMenuRootContext(CONTENT_NAME$3, props.__scopeMenu);
		const subContext = useMenuSubContext(SUB_CONTENT_NAME$2, props.__scopeMenu);
		const ref = import_react$122.useRef(null);
		const composedRefs = useComposedRefs$2(forwardedRef, ref);
		return /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Collection.Provider, {
			scope: props.__scopeMenu,
			children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Presence$1, {
				present: forceMount || context.open,
				children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(Collection.Slot, {
					scope: props.__scopeMenu,
					children: /* @__PURE__ */ (0, import_jsx_runtime$102.jsx)(MenuContentImpl, {
						id: subContext.contentId,
						"aria-labelledby": subContext.triggerId,
						...subContentProps,
						ref: composedRefs,
						align: "start",
						side: rootContext.dir === "rtl" ? "left" : "right",
						disableOutsidePointerEvents: false,
						disableOutsideScroll: false,
						trapFocus: false,
						onOpenAutoFocus: (event) => {
							if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
							event.preventDefault();
						},
						onCloseAutoFocus: (event) => event.preventDefault(),
						onFocusOutside: composeEventHandlers$1(props.onFocusOutside, (event) => {
							if (event.target !== subContext.trigger) context.onOpenChange(false);
						}),
						onEscapeKeyDown: composeEventHandlers$1(props.onEscapeKeyDown, (event) => {
							rootContext.onClose();
							event.preventDefault();
						}),
						onKeyDown: composeEventHandlers$1(props.onKeyDown, (event) => {
							const isKeyDownInside = event.currentTarget.contains(event.target);
							const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
							if (isKeyDownInside && isCloseKey) {
								context.onOpenChange(false);
								subContext.trigger?.focus();
								event.preventDefault();
							}
						})
					})
				})
			})
		});
	});
	MenuSubContent.displayName = SUB_CONTENT_NAME$2;
	Root3 = Menu$1;
	Anchor2 = MenuAnchor;
	Portal$2 = MenuPortal;
	Content2$2 = MenuContent;
	Group = MenuGroup;
	Label$1 = MenuLabel;
	Item2 = MenuItem$1;
	CheckboxItem = MenuCheckboxItem;
	RadioGroup = MenuRadioGroup;
	RadioItem = MenuRadioItem;
	ItemIndicator = MenuItemIndicator;
	Separator$2 = MenuSeparator;
	Arrow2 = MenuArrow;
	Sub = MenuSub;
	SubTrigger = MenuSubTrigger;
	SubContent = MenuSubContent;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context-menu@2.2.16_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-context-menu/dist/index.mjs
function whenTouchOrPen(handler) {
	return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
var import_react$121, import_jsx_runtime$101, CONTEXT_MENU_NAME, createContextMenuContext, createContextMenuScope, useMenuScope$1, ContextMenuProvider, useContextMenuContext, ContextMenu$1, TRIGGER_NAME$2, ContextMenuTrigger, PORTAL_NAME$2, ContextMenuPortal, CONTENT_NAME$2, ContextMenuContent, GROUP_NAME$1, ContextMenuGroup, LABEL_NAME$2, ContextMenuLabel, ITEM_NAME$1, ContextMenuItem, CHECKBOX_ITEM_NAME$1, ContextMenuCheckboxItem, RADIO_GROUP_NAME$1, ContextMenuRadioGroup, RADIO_ITEM_NAME$1, ContextMenuRadioItem, INDICATOR_NAME$1, ContextMenuItemIndicator, SEPARATOR_NAME$1, ContextMenuSeparator, ARROW_NAME$1, ContextMenuArrow, SUB_NAME, ContextMenuSub, SUB_TRIGGER_NAME$1, ContextMenuSubTrigger, SUB_CONTENT_NAME$1, ContextMenuSubContent, Root2$1, Trigger$1, Portal2$1, Content2$1;
var init_dist$25 = __esmMin((() => {
	import_react$121 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$47();
	init_dist$46();
	init_dist$43();
	init_dist$26();
	init_dist$40();
	init_dist$28();
	import_jsx_runtime$101 = require_jsx_runtime();
	CONTEXT_MENU_NAME = "ContextMenu";
	[createContextMenuContext, createContextMenuScope] = createContextScope$1(CONTEXT_MENU_NAME, [createMenuScope]);
	useMenuScope$1 = createMenuScope();
	[ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
	ContextMenu$1 = (props) => {
		const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
		const [open, setOpen] = import_react$121.useState(false);
		const menuScope = useMenuScope$1(__scopeContextMenu);
		const handleOpenChangeProp = useCallbackRef$3(onOpenChange);
		const handleOpenChange = import_react$121.useCallback((open2) => {
			setOpen(open2);
			handleOpenChangeProp(open2);
		}, [handleOpenChangeProp]);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(ContextMenuProvider, {
			scope: __scopeContextMenu,
			open,
			onOpenChange: handleOpenChange,
			modal,
			children: /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Root3, {
				...menuScope,
				dir,
				open,
				onOpenChange: handleOpenChange,
				modal,
				children
			})
		});
	};
	ContextMenu$1.displayName = CONTEXT_MENU_NAME;
	TRIGGER_NAME$2 = "ContextMenuTrigger";
	ContextMenuTrigger = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
		const context = useContextMenuContext(TRIGGER_NAME$2, __scopeContextMenu);
		const menuScope = useMenuScope$1(__scopeContextMenu);
		const pointRef = import_react$121.useRef({
			x: 0,
			y: 0
		});
		const virtualRef = import_react$121.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
			width: 0,
			height: 0,
			...pointRef.current
		}) });
		const longPressTimerRef = import_react$121.useRef(0);
		const clearLongPress = import_react$121.useCallback(() => window.clearTimeout(longPressTimerRef.current), []);
		const handleOpen = (event) => {
			pointRef.current = {
				x: event.clientX,
				y: event.clientY
			};
			context.onOpenChange(true);
		};
		import_react$121.useEffect(() => clearLongPress, [clearLongPress]);
		import_react$121.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsxs)(import_jsx_runtime$101.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Anchor2, {
			...menuScope,
			virtualRef
		}), /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Primitive$2.span, {
			"data-state": context.open ? "open" : "closed",
			"data-disabled": disabled ? "" : void 0,
			...triggerProps,
			ref: forwardedRef,
			style: {
				WebkitTouchCallout: "none",
				...props.style
			},
			onContextMenu: disabled ? props.onContextMenu : composeEventHandlers$1(props.onContextMenu, (event) => {
				clearLongPress();
				handleOpen(event);
				event.preventDefault();
			}),
			onPointerDown: disabled ? props.onPointerDown : composeEventHandlers$1(props.onPointerDown, whenTouchOrPen((event) => {
				clearLongPress();
				longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
			})),
			onPointerMove: disabled ? props.onPointerMove : composeEventHandlers$1(props.onPointerMove, whenTouchOrPen(clearLongPress)),
			onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers$1(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
			onPointerUp: disabled ? props.onPointerUp : composeEventHandlers$1(props.onPointerUp, whenTouchOrPen(clearLongPress))
		})] });
	});
	ContextMenuTrigger.displayName = TRIGGER_NAME$2;
	PORTAL_NAME$2 = "ContextMenuPortal";
	ContextMenuPortal = (props) => {
		const { __scopeContextMenu, ...portalProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Portal$2, {
			...menuScope,
			...portalProps
		});
	};
	ContextMenuPortal.displayName = PORTAL_NAME$2;
	CONTENT_NAME$2 = "ContextMenuContent";
	ContextMenuContent = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...contentProps } = props;
		const context = useContextMenuContext(CONTENT_NAME$2, __scopeContextMenu);
		const menuScope = useMenuScope$1(__scopeContextMenu);
		const hasInteractedOutsideRef = import_react$121.useRef(false);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Content2$2, {
			...menuScope,
			...contentProps,
			ref: forwardedRef,
			side: "right",
			sideOffset: 2,
			align: "start",
			onCloseAutoFocus: (event) => {
				props.onCloseAutoFocus?.(event);
				if (!event.defaultPrevented && hasInteractedOutsideRef.current) event.preventDefault();
				hasInteractedOutsideRef.current = false;
			},
			onInteractOutside: (event) => {
				props.onInteractOutside?.(event);
				if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
			},
			style: {
				...props.style,
				"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
				"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
				"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
			}
		});
	});
	ContextMenuContent.displayName = CONTENT_NAME$2;
	GROUP_NAME$1 = "ContextMenuGroup";
	ContextMenuGroup = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...groupProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Group, {
			...menuScope,
			...groupProps,
			ref: forwardedRef
		});
	});
	ContextMenuGroup.displayName = GROUP_NAME$1;
	LABEL_NAME$2 = "ContextMenuLabel";
	ContextMenuLabel = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...labelProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Label$1, {
			...menuScope,
			...labelProps,
			ref: forwardedRef
		});
	});
	ContextMenuLabel.displayName = LABEL_NAME$2;
	ITEM_NAME$1 = "ContextMenuItem";
	ContextMenuItem = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...itemProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Item2, {
			...menuScope,
			...itemProps,
			ref: forwardedRef
		});
	});
	ContextMenuItem.displayName = ITEM_NAME$1;
	CHECKBOX_ITEM_NAME$1 = "ContextMenuCheckboxItem";
	ContextMenuCheckboxItem = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...checkboxItemProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(CheckboxItem, {
			...menuScope,
			...checkboxItemProps,
			ref: forwardedRef
		});
	});
	ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
	RADIO_GROUP_NAME$1 = "ContextMenuRadioGroup";
	ContextMenuRadioGroup = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...radioGroupProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(RadioGroup, {
			...menuScope,
			...radioGroupProps,
			ref: forwardedRef
		});
	});
	ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
	RADIO_ITEM_NAME$1 = "ContextMenuRadioItem";
	ContextMenuRadioItem = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...radioItemProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(RadioItem, {
			...menuScope,
			...radioItemProps,
			ref: forwardedRef
		});
	});
	ContextMenuRadioItem.displayName = RADIO_ITEM_NAME$1;
	INDICATOR_NAME$1 = "ContextMenuItemIndicator";
	ContextMenuItemIndicator = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...itemIndicatorProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(ItemIndicator, {
			...menuScope,
			...itemIndicatorProps,
			ref: forwardedRef
		});
	});
	ContextMenuItemIndicator.displayName = INDICATOR_NAME$1;
	SEPARATOR_NAME$1 = "ContextMenuSeparator";
	ContextMenuSeparator = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...separatorProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Separator$2, {
			...menuScope,
			...separatorProps,
			ref: forwardedRef
		});
	});
	ContextMenuSeparator.displayName = SEPARATOR_NAME$1;
	ARROW_NAME$1 = "ContextMenuArrow";
	ContextMenuArrow = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...arrowProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Arrow2, {
			...menuScope,
			...arrowProps,
			ref: forwardedRef
		});
	});
	ContextMenuArrow.displayName = ARROW_NAME$1;
	SUB_NAME = "ContextMenuSub";
	ContextMenuSub = (props) => {
		const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		const [open, setOpen] = useControllableState$2({
			prop: openProp,
			defaultProp: defaultOpen ?? false,
			onChange: onOpenChange,
			caller: SUB_NAME
		});
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(Sub, {
			...menuScope,
			open,
			onOpenChange: setOpen,
			children
		});
	};
	ContextMenuSub.displayName = SUB_NAME;
	SUB_TRIGGER_NAME$1 = "ContextMenuSubTrigger";
	ContextMenuSubTrigger = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...triggerItemProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(SubTrigger, {
			...menuScope,
			...triggerItemProps,
			ref: forwardedRef
		});
	});
	ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
	SUB_CONTENT_NAME$1 = "ContextMenuSubContent";
	ContextMenuSubContent = import_react$121.forwardRef((props, forwardedRef) => {
		const { __scopeContextMenu, ...subContentProps } = props;
		const menuScope = useMenuScope$1(__scopeContextMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$101.jsx)(SubContent, {
			...menuScope,
			...subContentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
				"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
				"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
			}
		});
	});
	ContextMenuSubContent.displayName = SUB_CONTENT_NAME$1;
	Root2$1 = ContextMenu$1;
	Trigger$1 = ContextMenuTrigger;
	Portal2$1 = ContextMenuPortal;
	Content2$1 = ContextMenuContent;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$14(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
function getOwnerWindow(element) {
	if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
	if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
function isFrame(element) {
	return element.tagName === "IFRAME";
}
var __defProp$14, __name$14, canUseDOM;
var init_dist$24 = __esmMin((() => {
	__defProp$14 = Object.defineProperty;
	__name$14 = (target, value) => __defProp$14(target, "name", {
		value,
		configurable: true
	});
	canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	__name$14(composeEventHandlers, "composeEventHandlers");
	__name$14(getOwnerWindow, "getOwnerWindow");
	__name$14(getOwnerDocument, "getOwnerDocument");
	__name$14(getActiveElement, "getActiveElement");
	__name$14(isFrame, "isFrame");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function setRef$2(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function composeRefs$1(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$2(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$2(refs[i], null);
			}
		};
	};
}
function useComposedRefs$1(...refs) {
	return import_react$120.useCallback(composeRefs$1(...refs), refs);
}
var import_react$120, __defProp$13, __name$13;
var init_dist$23 = __esmMin((() => {
	import_react$120 = /* @__PURE__ */ __toESM(require_react(), 1);
	__defProp$13 = Object.defineProperty;
	__name$13 = (target, value) => __defProp$13(target, "name", {
		value,
		configurable: true
	});
	__name$13(setRef$2, "setRef");
	__name$13(composeRefs$1, "composeRefs");
	__name$13(useComposedRefs$1, "useComposedRefs");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-context/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react$119.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$12((props) => {
		const { children, ...context } = props;
		const value = import_react$119.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime$100.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react$119.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$12(useContext2, "useContext");
	return [Provider, useContext2];
}
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react$119.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$12((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react$119.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime$100.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react$119.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$12(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$12(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$12(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react$119.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$12(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react$119.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$12(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$12(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react$119.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
var import_react$119, import_jsx_runtime$100, __defProp$12, __name$12;
var init_dist$22 = __esmMin((() => {
	import_react$119 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$100 = require_jsx_runtime();
	__defProp$12 = Object.defineProperty;
	__name$12 = (target, value) => __defProp$12(target, "name", {
		value,
		configurable: true
	});
	__name$12(createContext2, "createContext");
	__name$12(createContextScope, "createContextScope");
	__name$12(composeContextScopes, "composeContextScopes");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react$118, useLayoutEffect2;
var init_dist$21 = __esmMin((() => {
	import_react$118 = /* @__PURE__ */ __toESM(require_react(), 1);
	useLayoutEffect2 = globalThis?.document ? import_react$118.useLayoutEffect : () => {};
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-id/dist/index.mjs
function useId$5(deterministicId) {
	const [id, setId] = import_react$117.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
var import_react$117, __defProp$11, __name$11, useReactId, count$1;
var init_dist$20 = __esmMin((() => {
	import_react$117 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$21();
	__defProp$11 = Object.defineProperty;
	__name$11 = (target, value) => __defProp$11(target, "name", {
		value,
		configurable: true
	});
	useReactId = import_react$117[" useId ".trim().toString()] || (() => void 0);
	count$1 = 0;
	__name$11(useId$5, "useId");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/internal/is-development.false.mjs
var init_is_development_false = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-effect-event@0.0.5_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react$116.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react$116.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
var import_react$116, __defProp$10, __name$10, useReactEffectEvent, useReactInsertionEffect;
var init_dist$19 = __esmMin((() => {
	init_dist$21();
	import_react$116 = /* @__PURE__ */ __toESM(require_react(), 1);
	__defProp$10 = Object.defineProperty;
	__name$10 = (target, value) => __defProp$10(target, "name", {
		value,
		configurable: true
	});
	useReactEffectEvent = import_react$116[" useEffectEvent ".trim().toString()];
	useReactInsertionEffect = import_react$116[" useInsertionEffect ".trim().toString()];
	__name$10(useEffectEvent, "useEffectEvent");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function useControllableState$1({ prop, defaultProp, onChange = /* @__PURE__ */ __name$9(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState$1({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react$114.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
function useUncontrolledState$1({ defaultProp, onChange }) {
	const [value, setValue] = import_react$114.useState(defaultProp);
	const prevValueRef = import_react$114.useRef(value);
	const onChangeRef = import_react$114.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react$114.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
function isFunction(value) {
	return typeof value === "function";
}
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react$115.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react$115.useRef(uncontrolledState);
	import_react$115.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react$115.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react$115.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
var import_react$114, import_react$115, __defProp$9, __name$9, useInsertionEffect, SYNC_STATE;
var init_dist$18 = __esmMin((() => {
	import_react$114 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_is_development_false();
	init_dist$21();
	import_react$115 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$19();
	__defProp$9 = Object.defineProperty;
	__name$9 = (target, value) => __defProp$9(target, "name", {
		value,
		configurable: true
	});
	useInsertionEffect = import_react$114[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
	__name$9(useControllableState$1, "useControllableState");
	__name$9(useUncontrolledState$1, "useUncontrolledState");
	__name$9(isFunction, "isFunction");
	SYNC_STATE = Symbol("RADIX:SYNC_STATE");
	__name$9(useControllableStateReducer, "useControllableStateReducer");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function createSlot$1(ownerName) {
	const Slot2 = import_react$113.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$1(children) && typeof use$1 === "function") children = use$1(children._payload);
		import_react$113.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$1(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$1(child) && typeof use$1 === "function") child = use$1(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react$113.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react$113.Children.count(children) === 1 && import_react$113.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$2(slottableElement) : void 0;
		const composedRef = useComposedRefs$1(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps$1(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react$113.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react$113.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$8((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$1;
	return Slottable2;
}
function mergeProps$1(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef$2(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
function isSlottable$1(child) {
	return import_react$113.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function isLazyComponent$1(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$1 && "_payload" in element && isPromiseLike$1(element._payload);
}
function isPromiseLike$1(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
var import_react$113, __defProp$8, __name$8, Slot$1, SLOTTABLE_IDENTIFIER$1, getSlottableElementFromSlottable, REACT_LAZY_TYPE$1, createSlotError, createSlottableError, use$1;
var init_dist$17 = __esmMin((() => {
	import_react$113 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$23();
	__defProp$8 = Object.defineProperty;
	__name$8 = (target, value) => __defProp$8(target, "name", {
		value,
		configurable: true
	});
	__name$8(createSlot$1, "createSlot");
	Slot$1 = /* @__PURE__ */ createSlot$1("Slot");
	SLOTTABLE_IDENTIFIER$1 = Symbol.for("radix.slottable");
	__name$8(createSlottable, "createSlottable");
	getSlottableElementFromSlottable = /* @__PURE__ */ __name$8((slottable, child) => {
		if ("child" in slottable.props) {
			const child2 = slottable.props.child;
			if (!import_react$113.isValidElement(child2)) return null;
			return import_react$113.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
		}
		return import_react$113.isValidElement(child) ? child : null;
	}, "getSlottableElementFromSlottable");
	__name$8(mergeProps$1, "mergeProps");
	__name$8(getElementRef$2, "getElementRef");
	__name$8(isSlottable$1, "isSlottable");
	REACT_LAZY_TYPE$1 = Symbol.for("react.lazy");
	__name$8(isLazyComponent$1, "isLazyComponent");
	__name$8(isPromiseLike$1, "isPromiseLike");
	createSlotError = /* @__PURE__ */ __name$8((ownerName) => {
		return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
	}, "createSlotError");
	createSlottableError = /* @__PURE__ */ __name$8((ownerName) => {
		return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
	}, "createSlottableError");
	use$1 = import_react$113[" use ".trim().toString()];
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-primitive/dist/index.mjs
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom$2.flushSync(() => target.dispatchEvent(event));
}
var import_react$112, import_react_dom$2, import_jsx_runtime$99, __defProp$7, __name$7, Primitive$1;
var init_dist$16 = __esmMin((() => {
	import_react$112 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$2 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_dist$17();
	import_jsx_runtime$99 = require_jsx_runtime();
	__defProp$7 = Object.defineProperty;
	__name$7 = (target, value) => __defProp$7(target, "name", {
		value,
		configurable: true
	});
	Primitive$1 = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul"
	].reduce((primitive, node) => {
		const Slot = /* @__PURE__ */ createSlot$1(`Primitive.${node}`);
		const Node = import_react$112.forwardRef((props, forwardedRef) => {
			const { asChild, ...primitiveProps } = props;
			const Comp = asChild ? Slot : node;
			if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
			return /* @__PURE__ */ (0, import_jsx_runtime$99.jsx)(Comp, {
				...primitiveProps,
				ref: forwardedRef
			});
		});
		Node.displayName = `Primitive.${node}`;
		return {
			...primitive,
			[node]: Node
		};
	}, {});
	__name$7(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function useCallbackRef$1(callback) {
	const callbackRef = import_react$111.useRef(callback);
	import_react$111.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react$111.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
var import_react$111, __defProp$6, __name$6;
var init_dist$15 = __esmMin((() => {
	import_react$111 = /* @__PURE__ */ __toESM(require_react(), 1);
	__defProp$6 = Object.defineProperty;
	__name$6 = (target, value) => __defProp$6(target, "name", {
		value,
		configurable: true
	});
	__name$6(useCallbackRef$1, "useCallbackRef");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.19_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
function useDismissableLayerSurface() {
	const context = import_react$110.useContext(DismissableLayerContext);
	const [node, setNode] = import_react$110.useState(null);
	import_react$110.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react$110.useRef(false);
	const isPointerDownOutsideRef = import_react$110.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react$110.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react$110.useRef(() => {});
	import_react$110.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$5(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$5(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$5(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$5(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$5(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$5(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$1(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react$110.useRef(false);
	import_react$110.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
var import_react$110, import_jsx_runtime$98, __defProp$5, __name$5, CONTEXT_UPDATE, POINTER_DOWN_OUTSIDE, FOCUS_OUTSIDE, originalBodyPointerEvents, DismissableLayerContext, DismissableLayer, IS_TRUE;
var init_dist$14 = __esmMin((() => {
	import_react$110 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$24();
	init_dist$16();
	init_dist$23();
	init_dist$15();
	import_jsx_runtime$98 = require_jsx_runtime();
	__defProp$5 = Object.defineProperty;
	__name$5 = (target, value) => __defProp$5(target, "name", {
		value,
		configurable: true
	});
	CONTEXT_UPDATE = "dismissableLayer.update";
	POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
	FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
	DismissableLayerContext = import_react$110.createContext({
		layers: /* @__PURE__ */ new Set(),
		layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
		branches: /* @__PURE__ */ new Set(),
		dismissableSurfaces: /* @__PURE__ */ new Set()
	});
	DismissableLayer = /* @__PURE__ */ import_react$110.forwardRef(/* @__PURE__ */ __name$5(function DismissableLayer2(props, forwardedRef) {
		const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
		const context = import_react$110.useContext(DismissableLayerContext);
		const [node, setNode] = import_react$110.useState(null);
		const ownerDocument = node?.ownerDocument ?? globalThis?.document;
		const [, force] = import_react$110.useState({});
		const composedRefs = useComposedRefs$1(forwardedRef, setNode);
		const layers = Array.from(context.layers);
		const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
		const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
		const index = node ? layers.indexOf(node) : -1;
		const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
		const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
		const isDeferredPointerDownOutsideRef = import_react$110.useRef(false);
		const pointerDownOutside = usePointerDownOutside((event) => {
			onPointerDownOutside?.(event);
			onInteractOutside?.(event);
			if (!event.defaultPrevented) onDismiss?.();
		}, {
			ownerDocument,
			deferPointerDownOutside,
			isDeferredPointerDownOutsideRef,
			dismissableSurfaces: context.dismissableSurfaces,
			shouldHandlePointerDownOutside: import_react$110.useCallback((target) => {
				if (!(target instanceof Node)) return false;
				const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
				return isPointerEventsEnabled && !isPointerDownOnBranch;
			}, [context.branches, isPointerEventsEnabled])
		});
		const focusOutside = useFocusOutside((event) => {
			if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
			const target = event.target;
			if ([...context.branches].some((branch) => branch.contains(target))) return;
			onFocusOutside?.(event);
			onInteractOutside?.(event);
			if (!event.defaultPrevented) onDismiss?.();
		}, ownerDocument);
		const isHighestLayer = node ? index === layers.length - 1 : false;
		const handleKeyDown = useCallbackRef$1((event) => {
			if (event.key !== "Escape") return;
			onEscapeKeyDown?.(event);
			if (!event.defaultPrevented && onDismiss) {
				event.preventDefault();
				onDismiss();
			}
		});
		import_react$110.useEffect(() => {
			if (!isHighestLayer) return;
			ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
			return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
		}, [
			ownerDocument,
			isHighestLayer,
			handleKeyDown
		]);
		import_react$110.useEffect(() => {
			if (!node) return;
			if (disableOutsidePointerEvents) {
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
					originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
					ownerDocument.body.style.pointerEvents = "none";
				}
				context.layersWithOutsidePointerEventsDisabled.add(node);
			}
			context.layers.add(node);
			dispatchUpdate();
			return () => {
				if (disableOutsidePointerEvents) {
					context.layersWithOutsidePointerEventsDisabled.delete(node);
					if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
				}
			};
		}, [
			node,
			ownerDocument,
			disableOutsidePointerEvents,
			context
		]);
		import_react$110.useEffect(() => {
			return () => {
				if (!node) return;
				context.layers.delete(node);
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				dispatchUpdate();
			};
		}, [node, context]);
		import_react$110.useEffect(() => {
			const handleUpdate = /* @__PURE__ */ __name$5(() => force({}), "handleUpdate");
			document.addEventListener(CONTEXT_UPDATE, handleUpdate);
			return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$98.jsx)(Primitive$1.div, {
			...layerProps,
			ref: composedRefs,
			style: {
				pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
				...props.style
			},
			onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
			onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
			onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
		});
	}, "DismissableLayer"));
	__name$5(useDismissableLayerSurface, "useDismissableLayerSurface");
	IS_TRUE = /* @__PURE__ */ __name$5(() => true, "IS_TRUE");
	__name$5(usePointerDownOutside, "usePointerDownOutside");
	__name$5(useFocusOutside, "useFocusOutside");
	__name$5(dispatchUpdate, "dispatchUpdate");
	__name$5(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.16_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$4((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
var import_react$109, import_jsx_runtime$97, __defProp$4, __name$4, AUTOFOCUS_ON_MOUNT, AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS, FocusScope, focusScopesStack;
var init_dist$13 = __esmMin((() => {
	import_react$109 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$23();
	init_dist$16();
	init_dist$15();
	import_jsx_runtime$97 = require_jsx_runtime();
	__defProp$4 = Object.defineProperty;
	__name$4 = (target, value) => __defProp$4(target, "name", {
		value,
		configurable: true
	});
	AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
	AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
	EVENT_OPTIONS = {
		bubbles: false,
		cancelable: true
	};
	FocusScope = /* @__PURE__ */ import_react$109.forwardRef(/* @__PURE__ */ __name$4(function FocusScope2(props, forwardedRef) {
		const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
		const [container, setContainer] = import_react$109.useState(null);
		const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
		const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
		const lastFocusedElementRef = import_react$109.useRef(null);
		const composedRefs = useComposedRefs$1(forwardedRef, setContainer);
		const focusScope = import_react$109.useRef({
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		}).current;
		import_react$109.useEffect(() => {
			if (trapped) {
				let handleFocusIn2 = function(event) {
					if (focusScope.paused || !container) return;
					const target = event.target;
					if (container.contains(target)) lastFocusedElementRef.current = target;
					else focus(lastFocusedElementRef.current, { select: true });
				}, handleFocusOut2 = function(event) {
					if (focusScope.paused || !container) return;
					const relatedTarget = event.relatedTarget;
					if (relatedTarget === null) return;
					if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
				}, handleMutations2 = function(mutations) {
					if (document.activeElement !== document.body) return;
					for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
				};
				__name$4(handleFocusIn2, "handleFocusIn");
				__name$4(handleFocusOut2, "handleFocusOut");
				__name$4(handleMutations2, "handleMutations");
				document.addEventListener("focusin", handleFocusIn2);
				document.addEventListener("focusout", handleFocusOut2);
				const mutationObserver = new MutationObserver(handleMutations2);
				if (container) mutationObserver.observe(container, {
					childList: true,
					subtree: true
				});
				return () => {
					document.removeEventListener("focusin", handleFocusIn2);
					document.removeEventListener("focusout", handleFocusOut2);
					mutationObserver.disconnect();
				};
			}
		}, [
			trapped,
			container,
			focusScope.paused
		]);
		import_react$109.useEffect(() => {
			if (container) {
				focusScopesStack.add(focusScope);
				const previouslyFocusedElement = document.activeElement;
				if (!container.contains(previouslyFocusedElement)) {
					const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
					container.dispatchEvent(mountEvent);
					if (!mountEvent.defaultPrevented) {
						focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
						if (document.activeElement === previouslyFocusedElement) focus(container);
					}
				}
				return () => {
					container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
					setTimeout(() => {
						const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
						container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
						container.dispatchEvent(unmountEvent);
						if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
						container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
						focusScopesStack.remove(focusScope);
					}, 0);
				};
			}
		}, [
			container,
			onMountAutoFocus,
			onUnmountAutoFocus,
			focusScope
		]);
		const handleKeyDown = import_react$109.useCallback((event) => {
			if (!loop && !trapped) return;
			if (focusScope.paused) return;
			const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
			const focusedElement = document.activeElement;
			if (isTabKey && focusedElement) {
				const container2 = event.currentTarget;
				const [first, last] = getTabbableEdges(container2);
				if (!(first && last)) {
					if (focusedElement === container2) event.preventDefault();
				} else if (!event.shiftKey && focusedElement === last) {
					event.preventDefault();
					if (loop) focus(first, { select: true });
				} else if (event.shiftKey && focusedElement === first) {
					event.preventDefault();
					if (loop) focus(last, { select: true });
				}
			}
		}, [
			loop,
			trapped,
			focusScope.paused
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime$97.jsx)(Primitive$1.div, {
			tabIndex: -1,
			...scopeProps,
			ref: composedRefs,
			onKeyDown: handleKeyDown
		});
	}, "FocusScope"));
	__name$4(focusFirst, "focusFirst");
	__name$4(getTabbableEdges, "getTabbableEdges");
	__name$4(getTabbableCandidates, "getTabbableCandidates");
	__name$4(findVisible, "findVisible");
	__name$4(isHidden, "isHidden");
	__name$4(isSelectableInput, "isSelectableInput");
	__name$4(focus, "focus");
	focusScopesStack = createFocusScopesStack();
	__name$4(createFocusScopesStack, "createFocusScopesStack");
	__name$4(arrayRemove, "arrayRemove");
	__name$4(removeLinks, "removeLinks");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.17_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react$108, import_react_dom$1, import_jsx_runtime$96, __defProp$3, __name$3, Portal$1;
var init_dist$12 = __esmMin((() => {
	import_react$108 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$1 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_dist$16();
	init_dist$21();
	import_jsx_runtime$96 = require_jsx_runtime();
	__defProp$3 = Object.defineProperty;
	__name$3 = (target, value) => __defProp$3(target, "name", {
		value,
		configurable: true
	});
	Portal$1 = /* @__PURE__ */ import_react$108.forwardRef(/* @__PURE__ */ __name$3(function Portal2(props, forwardedRef) {
		const { container: containerProp, ...portalProps } = props;
		const [mounted, setMounted] = import_react$108.useState(false);
		useLayoutEffect2(() => setMounted(true), []);
		const container = containerProp || mounted && globalThis?.document?.body;
		return container ? import_react_dom$1.createPortal(/* @__PURE__ */ (0, import_jsx_runtime$96.jsx)(Primitive$1.div, {
			...portalProps,
			ref: forwardedRef
		}), container) : null;
	}, "Portal"));
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.10_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-presence/dist/index.mjs
function useStateMachine(initialState, machine) {
	return import_react$107.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
function usePresence(present) {
	const [node, setNode] = import_react$106.useState();
	const stylesRef = import_react$106.useRef(null);
	const prevPresentRef = import_react$106.useRef(present);
	const prevAnimationNameRef = import_react$106.useRef("none");
	const mountAnimationNameRef = import_react$106.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react$106.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$2((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$2((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react$106.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function useStableComposedRefs(...refs) {
	const refsRef = import_react$106.useRef(refs);
	refsRef.current = refs;
	return import_react$106.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef$1(currentRefs[i], null);
			}
		};
	}, []);
}
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
var import_react$106, import_react$107, __defProp$2, __name$2, Presence;
var init_dist$11 = __esmMin((() => {
	import_react$106 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$21();
	import_react$107 = /* @__PURE__ */ __toESM(require_react(), 1);
	__defProp$2 = Object.defineProperty;
	__name$2 = (target, value) => __defProp$2(target, "name", {
		value,
		configurable: true
	});
	__name$2(useStateMachine, "useStateMachine");
	Presence = /* @__PURE__ */ __name$2((props) => {
		const { present, children } = props;
		const presence = usePresence(present);
		const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react$106.Children.only(children);
		const ref = useStableComposedRefs(presence.ref, getElementRef$1(child));
		return typeof children === "function" || presence.isPresent ? import_react$106.cloneElement(child, { ref }) : null;
	}, "Presence");
	__name$2(usePresence, "usePresence");
	__name$2(setRef$1, "setRef");
	__name$2(useStableComposedRefs, "useStableComposedRefs");
	__name$2(getAnimationName, "getAnimationName");
	__name$2(getElementRef$1, "getElementRef");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
function useFocusGuards() {
	import_react$105.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
var import_react$105, __defProp$1, __name$1, count, guards;
var init_dist$10 = __esmMin((() => {
	import_react$105 = /* @__PURE__ */ __toESM(require_react(), 1);
	__defProp$1 = Object.defineProperty;
	__name$1 = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
	count = 0;
	guards = null;
	__name$1(FocusGuards, "FocusGuards");
	__name$1(useFocusGuards, "useFocusGuards");
	__name$1(createFocusGuard, "createFocusGuard");
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.23_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-dialog/dist/index.mjs
function getState(open) {
	return open ? "open" : "closed";
}
var import_react$104, import_jsx_runtime$95, __defProp, __name, DIALOG_NAME, createDialogContext, createDialogScope, DialogProvider, useDialogContext, Dialog, TRIGGER_NAME$1, DialogTrigger, PORTAL_NAME$1, PortalProvider, usePortalContext, DialogPortal, OVERLAY_NAME, DialogOverlay, Slot, DialogOverlayImpl, CONTENT_NAME$1, DialogContent, DialogContentModal, DialogContentNonModal, DialogContentImpl, TITLE_NAME, DialogTitle, DESCRIPTION_NAME, DialogDescription, CLOSE_NAME, DialogClose;
var init_dist$9 = __esmMin((() => {
	import_react$104 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$24();
	init_dist$23();
	init_dist$22();
	init_dist$20();
	init_dist$18();
	init_dist$14();
	init_dist$13();
	init_dist$12();
	init_dist$11();
	init_dist$16();
	init_dist$10();
	init_dist$21();
	init_es2015();
	init_es2015$6();
	init_dist$17();
	import_jsx_runtime$95 = require_jsx_runtime();
	__defProp = Object.defineProperty;
	__name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	DIALOG_NAME = "Dialog";
	[createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
	[DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
	Dialog = /* @__PURE__ */ __name((props) => {
		const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
		const triggerRef = import_react$104.useRef(null);
		const contentRef = import_react$104.useRef(null);
		const [open, setOpen] = useControllableState$1({
			prop: openProp,
			defaultProp: defaultOpen ?? false,
			onChange: onOpenChange,
			caller: DIALOG_NAME
		});
		const [titleCount, setTitleCount] = import_react$104.useState(0);
		const [descriptionCount, setDescriptionCount] = import_react$104.useState(0);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DialogProvider, {
			scope: __scopeDialog,
			triggerRef,
			contentRef,
			contentId: useId$5(),
			titleId: useId$5(),
			descriptionId: useId$5(),
			titlePresent: titleCount > 0,
			descriptionPresent: descriptionCount > 0,
			setTitleCount,
			setDescriptionCount,
			open,
			onOpenChange: setOpen,
			onOpenToggle: import_react$104.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
			modal,
			children
		});
	}, "Dialog");
	TRIGGER_NAME$1 = "DialogTrigger";
	DialogTrigger = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogTrigger2(props, forwardedRef) {
		const { __scopeDialog, ...triggerProps } = props;
		const context = useDialogContext(TRIGGER_NAME$1, __scopeDialog);
		const composedTriggerRef = useComposedRefs$1(forwardedRef, context.triggerRef);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Primitive$1.button, {
			type: "button",
			"aria-haspopup": "dialog",
			"aria-expanded": context.open,
			"aria-controls": context.open ? context.contentId : void 0,
			"data-state": getState(context.open),
			...triggerProps,
			ref: composedTriggerRef,
			onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
		});
	}, "DialogTrigger"));
	PORTAL_NAME$1 = "DialogPortal";
	[PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME$1, { forceMount: void 0 });
	DialogPortal = /* @__PURE__ */ __name((props) => {
		const { __scopeDialog, forceMount, children, container } = props;
		const context = useDialogContext(PORTAL_NAME$1, __scopeDialog);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(PortalProvider, {
			scope: __scopeDialog,
			forceMount,
			children: import_react$104.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Presence, {
				present: forceMount || context.open,
				children: /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Portal$1, {
					asChild: true,
					container,
					children: child
				})
			}))
		});
	}, "DialogPortal");
	OVERLAY_NAME = "DialogOverlay";
	DialogOverlay = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogOverlay2(props, forwardedRef) {
		const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
		const { forceMount = portalContext.forceMount, ...overlayProps } = props;
		const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
		return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DialogOverlayImpl, {
				...overlayProps,
				ref: forwardedRef
			})
		}) : null;
	}, "DialogOverlay"));
	Slot = /* @__PURE__ */ createSlot$1("DialogOverlay.RemoveScroll");
	DialogOverlayImpl = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogOverlayImpl2(props, forwardedRef) {
		const { __scopeDialog, ...overlayProps } = props;
		const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
		const composedRefs = useComposedRefs$1(forwardedRef, useDismissableLayerSurface());
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(ReactRemoveScroll, {
			as: Slot,
			allowPinchZoom: true,
			shards: [context.contentRef],
			children: /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Primitive$1.div, {
				"data-state": getState(context.open),
				...overlayProps,
				ref: composedRefs,
				style: {
					pointerEvents: "auto",
					...overlayProps.style
				}
			})
		});
	}, "DialogOverlayImpl"));
	CONTENT_NAME$1 = "DialogContent";
	DialogContent = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogContent2(props, forwardedRef) {
		const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopeDialog);
		const { forceMount = portalContext.forceMount, ...contentProps } = props;
		const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Presence, {
			present: forceMount || context.open,
			children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DialogContentModal, {
				...contentProps,
				ref: forwardedRef
			}) : /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DialogContentNonModal, {
				...contentProps,
				ref: forwardedRef
			})
		});
	}, "DialogContent"));
	DialogContentModal = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogContentModal2(props, forwardedRef) {
		const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
		const contentRef = import_react$104.useRef(null);
		const composedRefs = useComposedRefs$1(forwardedRef, context.contentRef, contentRef);
		import_react$104.useEffect(() => {
			const content = contentRef.current;
			if (content) return hideOthers(content);
		}, []);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DialogContentImpl, {
			...props,
			ref: composedRefs,
			trapFocus: context.open,
			disableOutsidePointerEvents: context.open,
			onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
				event.preventDefault();
				context.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
				const originalEvent = event.detail.originalEvent;
				const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
				if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
			}),
			onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
		});
	}, "DialogContentModal"));
	DialogContentNonModal = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogContentNonModal2(props, forwardedRef) {
		const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
		const hasInteractedOutsideRef = import_react$104.useRef(false);
		const hasPointerDownOutsideRef = import_react$104.useRef(false);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DialogContentImpl, {
			...props,
			ref: forwardedRef,
			trapFocus: false,
			disableOutsidePointerEvents: false,
			onCloseAutoFocus: (event) => {
				props.onCloseAutoFocus?.(event);
				if (!event.defaultPrevented) {
					if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
					event.preventDefault();
				}
				hasInteractedOutsideRef.current = false;
				hasPointerDownOutsideRef.current = false;
			},
			onInteractOutside: (event) => {
				props.onInteractOutside?.(event);
				if (!event.defaultPrevented) {
					hasInteractedOutsideRef.current = true;
					if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
				}
				const target = event.target;
				if (context.triggerRef.current?.contains(target)) event.preventDefault();
				if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
			}
		});
	}, "DialogContentNonModal"));
	DialogContentImpl = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogContentImpl2(props, forwardedRef) {
		const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
		const context = useDialogContext(CONTENT_NAME$1, __scopeDialog);
		useFocusGuards();
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(import_jsx_runtime$95.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(FocusScope, {
			asChild: true,
			loop: true,
			trapped: trapFocus,
			onMountAutoFocus: onOpenAutoFocus,
			onUnmountAutoFocus: onCloseAutoFocus,
			children: /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(DismissableLayer, {
				role: "dialog",
				id: context.contentId,
				"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
				"aria-labelledby": context.titlePresent ? context.titleId : void 0,
				"data-state": getState(context.open),
				...contentProps,
				ref: forwardedRef,
				deferPointerDownOutside: true,
				onDismiss: () => context.onOpenChange(false)
			})
		}) });
	}, "DialogContentImpl"));
	TITLE_NAME = "DialogTitle";
	DialogTitle = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogTitle2(props, forwardedRef) {
		const { __scopeDialog, ...titleProps } = props;
		const context = useDialogContext(TITLE_NAME, __scopeDialog);
		const { setTitleCount } = context;
		useLayoutEffect2(() => {
			setTitleCount((count) => count + 1);
			return () => setTitleCount((count) => count - 1);
		}, [setTitleCount]);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Primitive$1.h2, {
			id: context.titleId,
			...titleProps,
			ref: forwardedRef
		});
	}, "DialogTitle"));
	DESCRIPTION_NAME = "DialogDescription";
	DialogDescription = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogDescription2(props, forwardedRef) {
		const { __scopeDialog, ...descriptionProps } = props;
		const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
		const { setDescriptionCount } = context;
		useLayoutEffect2(() => {
			setDescriptionCount((count) => count + 1);
			return () => setDescriptionCount((count) => count - 1);
		}, [setDescriptionCount]);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Primitive$1.p, {
			id: context.descriptionId,
			...descriptionProps,
			ref: forwardedRef
		});
	}, "DialogDescription"));
	CLOSE_NAME = "DialogClose";
	DialogClose = /* @__PURE__ */ import_react$104.forwardRef(/* @__PURE__ */ __name(function DialogClose2(props, forwardedRef) {
		const { __scopeDialog, ...closeProps } = props;
		const context = useDialogContext(CLOSE_NAME, __scopeDialog);
		return /* @__PURE__ */ (0, import_jsx_runtime$95.jsx)(Primitive$1.button, {
			type: "button",
			...closeProps,
			ref: forwardedRef,
			onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
		});
	}, "DialogClose"));
	__name(getState, "getState");
}));
//#endregion
//#region ../../node_modules/.pnpm/vaul@1.1.2_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/vaul/dist/index.mjs
function __insertCSS(code) {
	if (!code || typeof document == "undefined") return;
	let head = document.head || document.getElementsByTagName("head")[0];
	let style = document.createElement("style");
	style.type = "text/css";
	head.appendChild(style);
	style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
function isMobileFirefox() {
	const userAgent = navigator.userAgent;
	return typeof window !== "undefined" && (/Firefox/.test(userAgent) && /Mobile/.test(userAgent) || /FxiOS/.test(userAgent));
}
function isMac() {
	return testPlatform(/^Mac/);
}
function isIPhone() {
	return testPlatform(/^iPhone/);
}
function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function isIPad() {
	return testPlatform(/^iPad/) || isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
	return isIPhone() || isIPad();
}
function testPlatform(re) {
	return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator.platform) : void 0;
}
function chain$1(...callbacks) {
	return (...args) => {
		for (let callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}
function isScrollable(node) {
	let style = window.getComputedStyle(node);
	return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getScrollParent(node) {
	if (isScrollable(node)) node = node.parentElement;
	while (node && !isScrollable(node)) node = node.parentElement;
	return node || document.scrollingElement || document.documentElement;
}
/**
* Prevents scrolling on the document body on mount, and
* restores it on unmount. Also ensures that content does not
* shift due to the scrollbars disappearing.
*/ function usePreventScroll(options = {}) {
	let { isDisabled } = options;
	useIsomorphicLayoutEffect(() => {
		if (isDisabled) return;
		preventScrollCount++;
		if (preventScrollCount === 1) {
			if (isIOS()) restore = preventScrollMobileSafari();
		}
		return () => {
			preventScrollCount--;
			if (preventScrollCount === 0) restore?.();
		};
	}, [isDisabled]);
}
function preventScrollMobileSafari() {
	let scrollable;
	let lastY = 0;
	let onTouchStart = (e) => {
		scrollable = getScrollParent(e.target);
		if (scrollable === document.documentElement && scrollable === document.body) return;
		lastY = e.changedTouches[0].pageY;
	};
	let onTouchMove = (e) => {
		if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
			e.preventDefault();
			return;
		}
		let y = e.changedTouches[0].pageY;
		let scrollTop = scrollable.scrollTop;
		let bottom = scrollable.scrollHeight - scrollable.clientHeight;
		if (bottom === 0) return;
		if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
		lastY = y;
	};
	let onTouchEnd = (e) => {
		let target = e.target;
		if (isInput(target) && target !== document.activeElement) {
			e.preventDefault();
			target.style.transform = "translateY(-2000px)";
			target.focus();
			requestAnimationFrame(() => {
				target.style.transform = "";
			});
		}
	};
	let onFocus = (e) => {
		let target = e.target;
		if (isInput(target)) {
			target.style.transform = "translateY(-2000px)";
			requestAnimationFrame(() => {
				target.style.transform = "";
				if (visualViewport) if (visualViewport.height < window.innerHeight) requestAnimationFrame(() => {
					scrollIntoView(target);
				});
				else visualViewport.addEventListener("resize", () => scrollIntoView(target), { once: true });
			});
		}
	};
	let onWindowScroll = () => {
		window.scrollTo(0, 0);
	};
	let scrollX = window.pageXOffset;
	let scrollY = window.pageYOffset;
	let restoreStyles = chain$1(setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
	window.scrollTo(0, 0);
	let removeEvents = chain$1(addEvent(document, "touchstart", onTouchStart, {
		passive: false,
		capture: true
	}), addEvent(document, "touchmove", onTouchMove, {
		passive: false,
		capture: true
	}), addEvent(document, "touchend", onTouchEnd, {
		passive: false,
		capture: true
	}), addEvent(document, "focus", onFocus, true), addEvent(window, "scroll", onWindowScroll));
	return () => {
		restoreStyles();
		removeEvents();
		window.scrollTo(scrollX, scrollY);
	};
}
function setStyle(element, style, value) {
	let cur = element.style[style];
	element.style[style] = value;
	return () => {
		element.style[style] = cur;
	};
}
function addEvent(target, event, handler, options) {
	target.addEventListener(event, handler, options);
	return () => {
		target.removeEventListener(event, handler, options);
	};
}
function scrollIntoView(target) {
	let root = document.scrollingElement || document.documentElement;
	while (target && target !== root) {
		let scrollable = getScrollParent(target);
		if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
			let scrollableTop = scrollable.getBoundingClientRect().top;
			let targetTop = target.getBoundingClientRect().top;
			if (target.getBoundingClientRect().bottom > scrollable.getBoundingClientRect().bottom + KEYBOARD_BUFFER) scrollable.scrollTop += targetTop - scrollableTop;
		}
		target = scrollable.parentElement;
	}
}
function isInput(target) {
	return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
/**
* Set a given ref to a given value
* This utility takes care of different types of refs: callback refs and RefObject(s)
*/ function setRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
/**
* A utility to compose multiple refs together
* Accepts callback refs and RefObject(s)
*/ function composeRefs(...refs) {
	return (node) => refs.forEach((ref) => setRef(ref, node));
}
/**
* A custom hook that composes multiple refs
* Accepts callback refs and RefObject(s)
*/ function useComposedRefs(...refs) {
	return import_react$102.useCallback(composeRefs(...refs), refs);
}
function set(el, styles, ignoreCache = false) {
	if (!el || !(el instanceof HTMLElement)) return;
	let originalStyles = {};
	Object.entries(styles).forEach(([key, value]) => {
		if (key.startsWith("--")) {
			el.style.setProperty(key, value);
			return;
		}
		originalStyles[key] = el.style[key];
		el.style[key] = value;
	});
	if (ignoreCache) return;
	cache.set(el, originalStyles);
}
function reset(el, prop) {
	if (!el || !(el instanceof HTMLElement)) return;
	let originalStyles = cache.get(el);
	if (!originalStyles) return;
	el.style[prop] = originalStyles[prop];
}
function getTranslate(element, direction) {
	if (!element) return null;
	const style = window.getComputedStyle(element);
	const transform = style.transform || style.webkitTransform || style.mozTransform;
	let mat = transform.match(/^matrix3d\((.+)\)$/);
	if (mat) return parseFloat(mat[1].split(", ")[isVertical(direction) ? 13 : 12]);
	mat = transform.match(/^matrix\((.+)\)$/);
	return mat ? parseFloat(mat[1].split(", ")[isVertical(direction) ? 5 : 4]) : null;
}
function dampenValue(v) {
	return 8 * (Math.log(v + 1) - 2);
}
function assignStyle(element, style) {
	if (!element) return () => {};
	const prevStyle = element.style.cssText;
	Object.assign(element.style, style);
	return () => {
		element.style.cssText = prevStyle;
	};
}
function useCallbackRef(callback) {
	const callbackRef = import_react$103.useRef(callback);
	import_react$103.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react$103.useMemo(() => (...args) => callbackRef.current == null ? void 0 : callbackRef.current.call(callbackRef, ...args), []);
}
function useUncontrolledState({ defaultProp, onChange }) {
	const uncontrolledState = import_react$103.useState(defaultProp);
	const [value] = uncontrolledState;
	const prevValueRef = import_react$103.useRef(value);
	const handleChange = useCallbackRef(onChange);
	import_react$103.useEffect(() => {
		if (prevValueRef.current !== value) {
			handleChange(value);
			prevValueRef.current = value;
		}
	}, [
		value,
		prevValueRef,
		handleChange
	]);
	return uncontrolledState;
}
function useControllableState({ prop, defaultProp, onChange = () => {} }) {
	const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	const value = isControlled ? prop : uncontrolledProp;
	const handleChange = useCallbackRef(onChange);
	return [value, import_react$103.useCallback((nextValue) => {
		if (isControlled) {
			const value = typeof nextValue === "function" ? nextValue(prop) : nextValue;
			if (value !== prop) handleChange(value);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		handleChange
	])];
}
function useSnapPoints({ activeSnapPointProp, setActiveSnapPointProp, snapPoints, drawerRef, overlayRef, fadeFromIndex, onSnapPointChange, direction = "bottom", container, snapToSequentialPoint }) {
	const [activeSnapPoint, setActiveSnapPoint] = useControllableState({
		prop: activeSnapPointProp,
		defaultProp: snapPoints == null ? void 0 : snapPoints[0],
		onChange: setActiveSnapPointProp
	});
	const [windowDimensions, setWindowDimensions] = import_react$103.useState(typeof window !== "undefined" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	import_react$103.useEffect(() => {
		function onResize() {
			setWindowDimensions({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			});
		}
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	const isLastSnapPoint = import_react$103.useMemo(() => activeSnapPoint === (snapPoints == null ? void 0 : snapPoints[snapPoints.length - 1]) || null, [snapPoints, activeSnapPoint]);
	const activeSnapPointIndex = import_react$103.useMemo(() => {
		var _snapPoints_findIndex;
		return (_snapPoints_findIndex = snapPoints == null ? void 0 : snapPoints.findIndex((snapPoint) => snapPoint === activeSnapPoint)) != null ? _snapPoints_findIndex : null;
	}, [snapPoints, activeSnapPoint]);
	const shouldFade = snapPoints && snapPoints.length > 0 && (fadeFromIndex || fadeFromIndex === 0) && !Number.isNaN(fadeFromIndex) && snapPoints[fadeFromIndex] === activeSnapPoint || !snapPoints;
	const snapPointsOffset = import_react$103.useMemo(() => {
		const containerSize = container ? {
			width: container.getBoundingClientRect().width,
			height: container.getBoundingClientRect().height
		} : typeof window !== "undefined" ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		var _snapPoints_map;
		return (_snapPoints_map = snapPoints == null ? void 0 : snapPoints.map((snapPoint) => {
			const isPx = typeof snapPoint === "string";
			let snapPointAsNumber = 0;
			if (isPx) snapPointAsNumber = parseInt(snapPoint, 10);
			if (isVertical(direction)) {
				const height = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * containerSize.height : 0;
				if (windowDimensions) return direction === "bottom" ? containerSize.height - height : -containerSize.height + height;
				return height;
			}
			const width = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * containerSize.width : 0;
			if (windowDimensions) return direction === "right" ? containerSize.width - width : -containerSize.width + width;
			return width;
		})) != null ? _snapPoints_map : [];
	}, [
		snapPoints,
		windowDimensions,
		container
	]);
	const activeSnapPointOffset = import_react$103.useMemo(() => activeSnapPointIndex !== null ? snapPointsOffset == null ? void 0 : snapPointsOffset[activeSnapPointIndex] : null, [snapPointsOffset, activeSnapPointIndex]);
	const snapToPoint = import_react$103.useCallback((dimension) => {
		var _snapPointsOffset_findIndex;
		const newSnapPointIndex = (_snapPointsOffset_findIndex = snapPointsOffset == null ? void 0 : snapPointsOffset.findIndex((snapPointDim) => snapPointDim === dimension)) != null ? _snapPointsOffset_findIndex : null;
		onSnapPointChange(newSnapPointIndex);
		set(drawerRef.current, {
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			transform: isVertical(direction) ? `translate3d(0, ${dimension}px, 0)` : `translate3d(${dimension}px, 0, 0)`
		});
		if (snapPointsOffset && newSnapPointIndex !== snapPointsOffset.length - 1 && fadeFromIndex !== void 0 && newSnapPointIndex !== fadeFromIndex && newSnapPointIndex < fadeFromIndex) set(overlayRef.current, {
			transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			opacity: "0"
		});
		else set(overlayRef.current, {
			transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			opacity: "1"
		});
		setActiveSnapPoint(snapPoints == null ? void 0 : snapPoints[Math.max(newSnapPointIndex, 0)]);
	}, [
		drawerRef.current,
		snapPoints,
		snapPointsOffset,
		fadeFromIndex,
		overlayRef,
		setActiveSnapPoint
	]);
	import_react$103.useEffect(() => {
		if (activeSnapPoint || activeSnapPointProp) {
			var _snapPoints_findIndex;
			const newIndex = (_snapPoints_findIndex = snapPoints == null ? void 0 : snapPoints.findIndex((snapPoint) => snapPoint === activeSnapPointProp || snapPoint === activeSnapPoint)) != null ? _snapPoints_findIndex : -1;
			if (snapPointsOffset && newIndex !== -1 && typeof snapPointsOffset[newIndex] === "number") snapToPoint(snapPointsOffset[newIndex]);
		}
	}, [
		activeSnapPoint,
		activeSnapPointProp,
		snapPoints,
		snapPointsOffset,
		snapToPoint
	]);
	function onRelease({ draggedDistance, closeDrawer, velocity, dismissible }) {
		if (fadeFromIndex === void 0) return;
		const currentPosition = direction === "bottom" || direction === "right" ? (activeSnapPointOffset != null ? activeSnapPointOffset : 0) - draggedDistance : (activeSnapPointOffset != null ? activeSnapPointOffset : 0) + draggedDistance;
		const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
		const isFirst = activeSnapPointIndex === 0;
		const hasDraggedUp = draggedDistance > 0;
		if (isOverlaySnapPoint) set(overlayRef.current, { transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})` });
		if (!snapToSequentialPoint && velocity > 2 && !hasDraggedUp) {
			if (dismissible) closeDrawer();
			else snapToPoint(snapPointsOffset[0]);
			return;
		}
		if (!snapToSequentialPoint && velocity > 2 && hasDraggedUp && snapPointsOffset && snapPoints) {
			snapToPoint(snapPointsOffset[snapPoints.length - 1]);
			return;
		}
		const closestSnapPoint = snapPointsOffset == null ? void 0 : snapPointsOffset.reduce((prev, curr) => {
			if (typeof prev !== "number" || typeof curr !== "number") return prev;
			return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
		});
		const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
		if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * .4) {
			const dragDirection = hasDraggedUp ? 1 : -1;
			if (dragDirection > 0 && isLastSnapPoint && snapPoints) {
				snapToPoint(snapPointsOffset[snapPoints.length - 1]);
				return;
			}
			if (isFirst && dragDirection < 0 && dismissible) closeDrawer();
			if (activeSnapPointIndex === null) return;
			snapToPoint(snapPointsOffset[activeSnapPointIndex + dragDirection]);
			return;
		}
		snapToPoint(closestSnapPoint);
	}
	function onDrag({ draggedDistance }) {
		if (activeSnapPointOffset === null) return;
		const newValue = direction === "bottom" || direction === "right" ? activeSnapPointOffset - draggedDistance : activeSnapPointOffset + draggedDistance;
		if ((direction === "bottom" || direction === "right") && newValue < snapPointsOffset[snapPointsOffset.length - 1]) return;
		if ((direction === "top" || direction === "left") && newValue > snapPointsOffset[snapPointsOffset.length - 1]) return;
		set(drawerRef.current, { transform: isVertical(direction) ? `translate3d(0, ${newValue}px, 0)` : `translate3d(${newValue}px, 0, 0)` });
	}
	function getPercentageDragged(absDraggedDistance, isDraggingDown) {
		if (!snapPoints || typeof activeSnapPointIndex !== "number" || !snapPointsOffset || fadeFromIndex === void 0) return null;
		const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
		if (activeSnapPointIndex >= fadeFromIndex && isDraggingDown) return 0;
		if (isOverlaySnapPoint && !isDraggingDown) return 1;
		if (!shouldFade && !isOverlaySnapPoint) return null;
		const targetSnapPointIndex = isOverlaySnapPoint ? activeSnapPointIndex + 1 : activeSnapPointIndex - 1;
		const snapPointDistance = isOverlaySnapPoint ? snapPointsOffset[targetSnapPointIndex] - snapPointsOffset[targetSnapPointIndex - 1] : snapPointsOffset[targetSnapPointIndex + 1] - snapPointsOffset[targetSnapPointIndex];
		const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);
		if (isOverlaySnapPoint) return 1 - percentageDragged;
		else return percentageDragged;
	}
	return {
		isLastSnapPoint,
		activeSnapPoint,
		shouldFade,
		getPercentageDragged,
		setActiveSnapPoint,
		activeSnapPointIndex,
		onRelease,
		onDrag,
		snapPointsOffset
	};
}
function useScaleBackground() {
	const { direction, isOpen, shouldScaleBackground, setBackgroundColorOnScale, noBodyStyles } = useDrawerContext();
	const timeoutIdRef = import_react$103.useRef(null);
	const initialBackgroundColor = (0, import_react$103.useMemo)(() => document.body.style.backgroundColor, []);
	function getScale() {
		return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
	}
	import_react$103.useEffect(() => {
		if (isOpen && shouldScaleBackground) {
			if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
			const wrapper = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!wrapper) return;
			setBackgroundColorOnScale && !noBodyStyles && assignStyle(document.body, { background: "black" }), assignStyle(wrapper, {
				transformOrigin: isVertical(direction) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${TRANSITIONS.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
			});
			const wrapperStylesCleanup = assignStyle(wrapper, {
				borderRadius: `${BORDER_RADIUS}px`,
				overflow: "hidden",
				...isVertical(direction) ? { transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			return () => {
				wrapperStylesCleanup();
				timeoutIdRef.current = window.setTimeout(() => {
					if (initialBackgroundColor) document.body.style.background = initialBackgroundColor;
					else document.body.style.removeProperty("background");
				}, TRANSITIONS.DURATION * 1e3);
			};
		}
	}, [
		isOpen,
		shouldScaleBackground,
		initialBackgroundColor
	]);
}
/**
* This hook is necessary to prevent buggy behavior on iOS devices (need to test on Android).
* I won't get into too much detail about what bugs it solves, but so far I've found that setting the body to `position: fixed` is the most reliable way to prevent those bugs.
* Issues that this hook solves:
* https://github.com/emilkowalski/vaul/issues/435
* https://github.com/emilkowalski/vaul/issues/433
* And more that I discovered, but were just not reported.
*/ function usePositionFixed({ isOpen, modal, nested, hasBeenOpened, preventScrollRestoration, noBodyStyles }) {
	const [activeUrl, setActiveUrl] = import_react$103.useState(() => typeof window !== "undefined" ? window.location.href : "");
	const scrollPos = import_react$103.useRef(0);
	const setPositionFixed = import_react$103.useCallback(() => {
		if (!isSafari()) return;
		if (previousBodyPosition === null && isOpen && !noBodyStyles) {
			previousBodyPosition = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height,
				right: "unset"
			};
			const { scrollX, innerHeight } = window;
			document.body.style.setProperty("position", "fixed", "important");
			Object.assign(document.body.style, {
				top: `${-scrollPos.current}px`,
				left: `${-scrollX}px`,
				right: "0px",
				height: "auto"
			});
			window.setTimeout(() => window.requestAnimationFrame(() => {
				const bottomBarHeight = innerHeight - window.innerHeight;
				if (bottomBarHeight && scrollPos.current >= innerHeight) document.body.style.top = `${-(scrollPos.current + bottomBarHeight)}px`;
			}), 300);
		}
	}, [isOpen]);
	const restorePositionSetting = import_react$103.useCallback(() => {
		if (!isSafari()) return;
		if (previousBodyPosition !== null && !noBodyStyles) {
			const y = -parseInt(document.body.style.top, 10);
			const x = -parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, previousBodyPosition);
			window.requestAnimationFrame(() => {
				if (preventScrollRestoration && activeUrl !== window.location.href) {
					setActiveUrl(window.location.href);
					return;
				}
				window.scrollTo(x, y);
			});
			previousBodyPosition = null;
		}
	}, [activeUrl]);
	import_react$103.useEffect(() => {
		function onScroll() {
			scrollPos.current = window.scrollY;
		}
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	import_react$103.useEffect(() => {
		if (!modal) return;
		return () => {
			if (typeof document === "undefined") return;
			if (!!document.querySelector("[data-vaul-drawer]")) return;
			restorePositionSetting();
		};
	}, [modal, restorePositionSetting]);
	import_react$103.useEffect(() => {
		if (nested || !hasBeenOpened) return;
		if (isOpen) {
			!window.matchMedia("(display-mode: standalone)").matches && setPositionFixed();
			if (!modal) window.setTimeout(() => {
				restorePositionSetting();
			}, 500);
		} else restorePositionSetting();
	}, [
		isOpen,
		hasBeenOpened,
		activeUrl,
		modal,
		nested,
		setPositionFixed,
		restorePositionSetting
	]);
	return { restorePositionSetting };
}
function Root$3({ open: openProp, onOpenChange, children, onDrag: onDragProp, onRelease: onReleaseProp, snapPoints, shouldScaleBackground = false, setBackgroundColorOnScale = true, closeThreshold = CLOSE_THRESHOLD, scrollLockTimeout = SCROLL_LOCK_TIMEOUT, dismissible = true, handleOnly = false, fadeFromIndex = snapPoints && snapPoints.length - 1, activeSnapPoint: activeSnapPointProp, setActiveSnapPoint: setActiveSnapPointProp, fixed, modal = true, onClose, nested, noBodyStyles = false, direction = "bottom", defaultOpen = false, disablePreventScroll = true, snapToSequentialPoint = false, preventScrollRestoration = false, repositionInputs = true, onAnimationEnd, container, autoFocus = false }) {
	var _drawerRef_current, _drawerRef_current1;
	const [isOpen = false, setIsOpen] = useControllableState({
		defaultProp: defaultOpen,
		prop: openProp,
		onChange: (o) => {
			onOpenChange?.(o);
			if (!o && !nested) restorePositionSetting();
			setTimeout(() => {
				onAnimationEnd?.(o);
			}, TRANSITIONS.DURATION * 1e3);
			if (o && !modal) {
				if (typeof window !== "undefined") window.requestAnimationFrame(() => {
					document.body.style.pointerEvents = "auto";
				});
			}
			if (!o) document.body.style.pointerEvents = "auto";
		}
	});
	const [hasBeenOpened, setHasBeenOpened] = import_react$103.useState(false);
	const [isDragging, setIsDragging] = import_react$103.useState(false);
	const [justReleased, setJustReleased] = import_react$103.useState(false);
	const overlayRef = import_react$103.useRef(null);
	const openTime = import_react$103.useRef(null);
	const dragStartTime = import_react$103.useRef(null);
	const dragEndTime = import_react$103.useRef(null);
	const lastTimeDragPrevented = import_react$103.useRef(null);
	const isAllowedToDrag = import_react$103.useRef(false);
	const nestedOpenChangeTimer = import_react$103.useRef(null);
	const pointerStart = import_react$103.useRef(0);
	const keyboardIsOpen = import_react$103.useRef(false);
	const shouldAnimate = import_react$103.useRef(!defaultOpen);
	const previousDiffFromInitial = import_react$103.useRef(0);
	const drawerRef = import_react$103.useRef(null);
	const drawerHeightRef = import_react$103.useRef(((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0);
	const drawerWidthRef = import_react$103.useRef(((_drawerRef_current1 = drawerRef.current) == null ? void 0 : _drawerRef_current1.getBoundingClientRect().width) || 0);
	const initialDrawerHeight = import_react$103.useRef(0);
	const { activeSnapPoint, activeSnapPointIndex, setActiveSnapPoint, onRelease: onReleaseSnapPoints, snapPointsOffset, onDrag: onDragSnapPoints, shouldFade, getPercentageDragged: getSnapPointsPercentageDragged } = useSnapPoints({
		snapPoints,
		activeSnapPointProp,
		setActiveSnapPointProp,
		drawerRef,
		fadeFromIndex,
		overlayRef,
		onSnapPointChange: import_react$103.useCallback((activeSnapPointIndex) => {
			if (snapPoints && activeSnapPointIndex === snapPointsOffset.length - 1) openTime.current = /* @__PURE__ */ new Date();
		}, []),
		direction,
		container,
		snapToSequentialPoint
	});
	usePreventScroll({ isDisabled: !isOpen || isDragging || !modal || justReleased || !hasBeenOpened || !repositionInputs || !disablePreventScroll });
	const { restorePositionSetting } = usePositionFixed({
		isOpen,
		modal,
		nested: nested != null ? nested : false,
		hasBeenOpened,
		preventScrollRestoration,
		noBodyStyles
	});
	function getScale() {
		return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
	}
	function onPress(event) {
		var _drawerRef_current, _drawerRef_current1;
		if (!dismissible && !snapPoints) return;
		if (drawerRef.current && !drawerRef.current.contains(event.target)) return;
		drawerHeightRef.current = ((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0;
		drawerWidthRef.current = ((_drawerRef_current1 = drawerRef.current) == null ? void 0 : _drawerRef_current1.getBoundingClientRect().width) || 0;
		setIsDragging(true);
		dragStartTime.current = /* @__PURE__ */ new Date();
		if (isIOS()) window.addEventListener("touchend", () => isAllowedToDrag.current = false, { once: true });
		event.target.setPointerCapture(event.pointerId);
		pointerStart.current = isVertical(direction) ? event.pageY : event.pageX;
	}
	function shouldDrag(el, isDraggingInDirection) {
		var _window_getSelection;
		let element = el;
		const highlightedText = (_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString();
		const swipeAmount = drawerRef.current ? getTranslate(drawerRef.current, direction) : null;
		const date = /* @__PURE__ */ new Date();
		if (element.tagName === "SELECT") return false;
		if (element.hasAttribute("data-vaul-no-drag") || element.closest("[data-vaul-no-drag]")) return false;
		if (direction === "right" || direction === "left") return true;
		if (openTime.current && date.getTime() - openTime.current.getTime() < 500) return false;
		if (swipeAmount !== null) {
			if (direction === "bottom" ? swipeAmount > 0 : swipeAmount < 0) return true;
		}
		if (highlightedText && highlightedText.length > 0) return false;
		if (lastTimeDragPrevented.current && date.getTime() - lastTimeDragPrevented.current.getTime() < scrollLockTimeout && swipeAmount === 0) {
			lastTimeDragPrevented.current = date;
			return false;
		}
		if (isDraggingInDirection) {
			lastTimeDragPrevented.current = date;
			return false;
		}
		while (element) {
			if (element.scrollHeight > element.clientHeight) {
				if (element.scrollTop !== 0) {
					lastTimeDragPrevented.current = /* @__PURE__ */ new Date();
					return false;
				}
				if (element.getAttribute("role") === "dialog") return true;
			}
			element = element.parentNode;
		}
		return true;
	}
	function onDrag(event) {
		if (!drawerRef.current) return;
		if (isDragging) {
			const directionMultiplier = direction === "bottom" || direction === "right" ? 1 : -1;
			const draggedDistance = (pointerStart.current - (isVertical(direction) ? event.pageY : event.pageX)) * directionMultiplier;
			const isDraggingInDirection = draggedDistance > 0;
			const noCloseSnapPointsPreCondition = snapPoints && !dismissible && !isDraggingInDirection;
			if (noCloseSnapPointsPreCondition && activeSnapPointIndex === 0) return;
			const absDraggedDistance = Math.abs(draggedDistance);
			const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
			let percentageDragged = absDraggedDistance / (direction === "bottom" || direction === "top" ? drawerHeightRef.current : drawerWidthRef.current);
			const snapPointPercentageDragged = getSnapPointsPercentageDragged(absDraggedDistance, isDraggingInDirection);
			if (snapPointPercentageDragged !== null) percentageDragged = snapPointPercentageDragged;
			if (noCloseSnapPointsPreCondition && percentageDragged >= 1) return;
			if (!isAllowedToDrag.current && !shouldDrag(event.target, isDraggingInDirection)) return;
			drawerRef.current.classList.add(DRAG_CLASS);
			isAllowedToDrag.current = true;
			set(drawerRef.current, { transition: "none" });
			set(overlayRef.current, { transition: "none" });
			if (snapPoints) onDragSnapPoints({ draggedDistance });
			if (isDraggingInDirection && !snapPoints) {
				const dampenedDraggedDistance = dampenValue(draggedDistance);
				const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;
				set(drawerRef.current, { transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)` });
				return;
			}
			const opacityValue = 1 - percentageDragged;
			if (shouldFade || fadeFromIndex && activeSnapPointIndex === fadeFromIndex - 1) {
				onDragProp?.(event, percentageDragged);
				set(overlayRef.current, {
					opacity: `${opacityValue}`,
					transition: "none"
				}, true);
			}
			if (wrapper && overlayRef.current && shouldScaleBackground) {
				const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);
				const borderRadiusValue = 8 - percentageDragged * 8;
				const translateValue = Math.max(0, 14 - percentageDragged * 14);
				set(wrapper, {
					borderRadius: `${borderRadiusValue}px`,
					transform: isVertical(direction) ? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)` : `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,
					transition: "none"
				}, true);
			}
			if (!snapPoints) {
				const translateValue = absDraggedDistance * directionMultiplier;
				set(drawerRef.current, { transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)` });
			}
		}
	}
	import_react$103.useEffect(() => {
		window.requestAnimationFrame(() => {
			shouldAnimate.current = true;
		});
	}, []);
	import_react$103.useEffect(() => {
		var _window_visualViewport;
		function onVisualViewportChange() {
			if (!drawerRef.current || !repositionInputs) return;
			const focusedElement = document.activeElement;
			if (isInput(focusedElement) || keyboardIsOpen.current) {
				var _window_visualViewport;
				const visualViewportHeight = ((_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.height) || 0;
				const totalHeight = window.innerHeight;
				let diffFromInitial = totalHeight - visualViewportHeight;
				const drawerHeight = drawerRef.current.getBoundingClientRect().height || 0;
				const isTallEnough = drawerHeight > totalHeight * .8;
				if (!initialDrawerHeight.current) initialDrawerHeight.current = drawerHeight;
				const offsetFromTop = drawerRef.current.getBoundingClientRect().top;
				if (Math.abs(previousDiffFromInitial.current - diffFromInitial) > 60) keyboardIsOpen.current = !keyboardIsOpen.current;
				if (snapPoints && snapPoints.length > 0 && snapPointsOffset && activeSnapPointIndex) {
					const activeSnapPointHeight = snapPointsOffset[activeSnapPointIndex] || 0;
					diffFromInitial += activeSnapPointHeight;
				}
				previousDiffFromInitial.current = diffFromInitial;
				if (drawerHeight > visualViewportHeight || keyboardIsOpen.current) {
					const height = drawerRef.current.getBoundingClientRect().height;
					let newDrawerHeight = height;
					if (height > visualViewportHeight) newDrawerHeight = visualViewportHeight - (isTallEnough ? offsetFromTop : WINDOW_TOP_OFFSET);
					if (fixed) drawerRef.current.style.height = `${height - Math.max(diffFromInitial, 0)}px`;
					else drawerRef.current.style.height = `${Math.max(newDrawerHeight, visualViewportHeight - offsetFromTop)}px`;
				} else if (!isMobileFirefox()) drawerRef.current.style.height = `${initialDrawerHeight.current}px`;
				if (snapPoints && snapPoints.length > 0 && !keyboardIsOpen.current) drawerRef.current.style.bottom = `0px`;
				else drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
			}
		}
		(_window_visualViewport = window.visualViewport) == null || _window_visualViewport.addEventListener("resize", onVisualViewportChange);
		return () => {
			var _window_visualViewport;
			return (_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.removeEventListener("resize", onVisualViewportChange);
		};
	}, [
		activeSnapPointIndex,
		snapPoints,
		snapPointsOffset
	]);
	function closeDrawer(fromWithin) {
		cancelDrag();
		onClose?.();
		if (!fromWithin) setIsOpen(false);
		setTimeout(() => {
			if (snapPoints) setActiveSnapPoint(snapPoints[0]);
		}, TRANSITIONS.DURATION * 1e3);
	}
	function resetDrawer() {
		if (!drawerRef.current) return;
		const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
		const currentSwipeAmount = getTranslate(drawerRef.current, direction);
		set(drawerRef.current, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
		});
		set(overlayRef.current, {
			transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			opacity: "1"
		});
		if (shouldScaleBackground && currentSwipeAmount && currentSwipeAmount > 0 && isOpen) set(wrapper, {
			borderRadius: `${BORDER_RADIUS}px`,
			overflow: "hidden",
			...isVertical(direction) ? {
				transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${TRANSITIONS.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
		}, true);
	}
	function cancelDrag() {
		if (!isDragging || !drawerRef.current) return;
		drawerRef.current.classList.remove(DRAG_CLASS);
		isAllowedToDrag.current = false;
		setIsDragging(false);
		dragEndTime.current = /* @__PURE__ */ new Date();
	}
	function onRelease(event) {
		if (!isDragging || !drawerRef.current) return;
		drawerRef.current.classList.remove(DRAG_CLASS);
		isAllowedToDrag.current = false;
		setIsDragging(false);
		dragEndTime.current = /* @__PURE__ */ new Date();
		const swipeAmount = getTranslate(drawerRef.current, direction);
		if (!event || !shouldDrag(event.target, false) || !swipeAmount || Number.isNaN(swipeAmount)) return;
		if (dragStartTime.current === null) return;
		const timeTaken = dragEndTime.current.getTime() - dragStartTime.current.getTime();
		const distMoved = pointerStart.current - (isVertical(direction) ? event.pageY : event.pageX);
		const velocity = Math.abs(distMoved) / timeTaken;
		if (velocity > .05) {
			setJustReleased(true);
			setTimeout(() => {
				setJustReleased(false);
			}, 200);
		}
		if (snapPoints) {
			onReleaseSnapPoints({
				draggedDistance: distMoved * (direction === "bottom" || direction === "right" ? 1 : -1),
				closeDrawer,
				velocity,
				dismissible
			});
			onReleaseProp?.(event, true);
			return;
		}
		if (direction === "bottom" || direction === "right" ? distMoved > 0 : distMoved < 0) {
			resetDrawer();
			onReleaseProp?.(event, true);
			return;
		}
		if (velocity > VELOCITY_THRESHOLD) {
			closeDrawer();
			onReleaseProp?.(event, false);
			return;
		}
		var _drawerRef_current_getBoundingClientRect_height;
		const visibleDrawerHeight = Math.min((_drawerRef_current_getBoundingClientRect_height = drawerRef.current.getBoundingClientRect().height) != null ? _drawerRef_current_getBoundingClientRect_height : 0, window.innerHeight);
		var _drawerRef_current_getBoundingClientRect_width;
		const visibleDrawerWidth = Math.min((_drawerRef_current_getBoundingClientRect_width = drawerRef.current.getBoundingClientRect().width) != null ? _drawerRef_current_getBoundingClientRect_width : 0, window.innerWidth);
		if (Math.abs(swipeAmount) >= (direction === "left" || direction === "right" ? visibleDrawerWidth : visibleDrawerHeight) * closeThreshold) {
			closeDrawer();
			onReleaseProp?.(event, false);
			return;
		}
		onReleaseProp?.(event, true);
		resetDrawer();
	}
	import_react$103.useEffect(() => {
		if (isOpen) {
			set(document.documentElement, { scrollBehavior: "auto" });
			openTime.current = /* @__PURE__ */ new Date();
		}
		return () => {
			reset(document.documentElement, "scrollBehavior");
		};
	}, [isOpen]);
	function onNestedOpenChange(o) {
		const scale = o ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;
		const initialTranslate = o ? -16 : 0;
		if (nestedOpenChangeTimer.current) window.clearTimeout(nestedOpenChangeTimer.current);
		set(drawerRef.current, {
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${initialTranslate}px, 0)` : `scale(${scale}) translate3d(${initialTranslate}px, 0, 0)`
		});
		if (!o && drawerRef.current) nestedOpenChangeTimer.current = setTimeout(() => {
			const translateValue = getTranslate(drawerRef.current, direction);
			set(drawerRef.current, {
				transition: "none",
				transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
			});
		}, 500);
	}
	function onNestedDrag(_event, percentageDragged) {
		if (percentageDragged < 0) return;
		const initialScale = (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth;
		const newScale = initialScale + percentageDragged * (1 - initialScale);
		const newTranslate = -16 + percentageDragged * NESTED_DISPLACEMENT;
		set(drawerRef.current, {
			transform: isVertical(direction) ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)` : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
			transition: "none"
		});
	}
	function onNestedRelease(_event, o) {
		const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
		const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
		const translate = o ? -16 : 0;
		if (o) set(drawerRef.current, {
			transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
			transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${translate}px, 0)` : `scale(${scale}) translate3d(${translate}px, 0, 0)`
		});
	}
	import_react$103.useEffect(() => {
		if (!modal) window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		});
	}, [modal]);
	return /*#__PURE__*/ import_react$103.createElement(Dialog, {
		defaultOpen,
		onOpenChange: (open) => {
			if (!dismissible && !open) return;
			if (open) setHasBeenOpened(true);
			else closeDrawer(true);
			setIsOpen(open);
		},
		open: isOpen
	}, /*#__PURE__*/ import_react$103.createElement(DrawerContext.Provider, { value: {
		activeSnapPoint,
		snapPoints,
		setActiveSnapPoint,
		drawerRef,
		overlayRef,
		onOpenChange,
		onPress,
		onRelease,
		onDrag,
		dismissible,
		shouldAnimate,
		handleOnly,
		isOpen,
		isDragging,
		shouldFade,
		closeDrawer,
		onNestedDrag,
		onNestedOpenChange,
		onNestedRelease,
		keyboardIsOpen,
		modal,
		snapPointsOffset,
		activeSnapPointIndex,
		direction,
		shouldScaleBackground,
		setBackgroundColorOnScale,
		noBodyStyles,
		container,
		autoFocus
	} }, children));
}
function NestedRoot({ onDrag, onOpenChange, open: nestedIsOpen, ...rest }) {
	const { onNestedDrag, onNestedOpenChange, onNestedRelease } = useDrawerContext();
	if (!onNestedDrag) throw new Error("Drawer.NestedRoot must be placed in another drawer");
	return /*#__PURE__*/ import_react$103.createElement(Root$3, {
		nested: true,
		open: nestedIsOpen,
		onClose: () => {
			onNestedOpenChange(false);
		},
		onDrag: (e, p) => {
			onNestedDrag(e, p);
			onDrag?.(e, p);
		},
		onOpenChange: (o) => {
			if (o) onNestedOpenChange(o);
			onOpenChange?.(o);
		},
		onRelease: onNestedRelease,
		...rest
	});
}
function Portal(props) {
	const context = useDrawerContext();
	const { container = context.container, ...portalProps } = props;
	return /*#__PURE__*/ import_react$103.createElement(DialogPortal, {
		container,
		...portalProps
	});
}
var import_react$102, import_react$103, DrawerContext, useDrawerContext, KEYBOARD_BUFFER, useIsomorphicLayoutEffect, visualViewport, nonTextInputTypes, preventScrollCount, restore, cache, isVertical, TRANSITIONS, VELOCITY_THRESHOLD, CLOSE_THRESHOLD, SCROLL_LOCK_TIMEOUT, BORDER_RADIUS, NESTED_DISPLACEMENT, WINDOW_TOP_OFFSET, DRAG_CLASS, previousBodyPosition, Overlay, Content, LONG_HANDLE_PRESS_TIMEOUT, DOUBLE_TAP_TIMEOUT, Handle, Drawer;
var init_dist$8 = __esmMin((() => {
	init_dist$9();
	import_react$102 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$103 = /* @__PURE__ */ __toESM(require_react(), 1);
	DrawerContext = import_react$103.createContext({
		drawerRef: { current: null },
		overlayRef: { current: null },
		onPress: () => {},
		onRelease: () => {},
		onDrag: () => {},
		onNestedDrag: () => {},
		onNestedOpenChange: () => {},
		onNestedRelease: () => {},
		openProp: void 0,
		dismissible: false,
		isOpen: false,
		isDragging: false,
		keyboardIsOpen: { current: false },
		snapPointsOffset: null,
		snapPoints: null,
		handleOnly: false,
		modal: false,
		shouldFade: false,
		activeSnapPoint: null,
		onOpenChange: () => {},
		setActiveSnapPoint: () => {},
		closeDrawer: () => {},
		direction: "bottom",
		shouldAnimate: { current: true },
		shouldScaleBackground: false,
		setBackgroundColorOnScale: true,
		noBodyStyles: false,
		container: null,
		autoFocus: false
	});
	useDrawerContext = () => {
		const context = import_react$103.useContext(DrawerContext);
		if (!context) throw new Error("useDrawerContext must be used within a Drawer.Root");
		return context;
	};
	__insertCSS("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
	KEYBOARD_BUFFER = 24;
	useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react$103.useLayoutEffect : import_react$103.useEffect;
	visualViewport = typeof document !== "undefined" && window.visualViewport;
	nonTextInputTypes = /* @__PURE__ */ new Set([
		"checkbox",
		"radio",
		"range",
		"color",
		"file",
		"image",
		"button",
		"submit",
		"reset"
	]);
	preventScrollCount = 0;
	cache = /* @__PURE__ */ new WeakMap();
	isVertical = (direction) => {
		switch (direction) {
			case "top":
			case "bottom": return true;
			case "left":
			case "right": return false;
			default: return direction;
		}
	};
	TRANSITIONS = {
		DURATION: .5,
		EASE: [
			.32,
			.72,
			0,
			1
		]
	};
	VELOCITY_THRESHOLD = .4;
	CLOSE_THRESHOLD = .25;
	SCROLL_LOCK_TIMEOUT = 100;
	BORDER_RADIUS = 8;
	NESTED_DISPLACEMENT = 16;
	WINDOW_TOP_OFFSET = 26;
	DRAG_CLASS = "vaul-dragging";
	previousBodyPosition = null;
	Overlay = /*#__PURE__*/ import_react$103.forwardRef(function({ ...rest }, ref) {
		const { overlayRef, snapPoints, onRelease, shouldFade, isOpen, modal, shouldAnimate } = useDrawerContext();
		const composedRef = useComposedRefs(ref, overlayRef);
		const hasSnapPoints = snapPoints && snapPoints.length > 0;
		if (!modal) return null;
		const onMouseUp = import_react$103.useCallback((event) => onRelease(event), [onRelease]);
		return /*#__PURE__*/ import_react$103.createElement(DialogOverlay, {
			onMouseUp,
			ref: composedRef,
			"data-vaul-overlay": "",
			"data-vaul-snap-points": isOpen && hasSnapPoints ? "true" : "false",
			"data-vaul-snap-points-overlay": isOpen && shouldFade ? "true" : "false",
			"data-vaul-animate": (shouldAnimate == null ? void 0 : shouldAnimate.current) ? "true" : "false",
			...rest
		});
	});
	Overlay.displayName = "Drawer.Overlay";
	Content = /*#__PURE__*/ import_react$103.forwardRef(function({ onPointerDownOutside, style, onOpenAutoFocus, ...rest }, ref) {
		const { drawerRef, onPress, onRelease, onDrag, keyboardIsOpen, snapPointsOffset, activeSnapPointIndex, modal, isOpen, direction, snapPoints, container, handleOnly, shouldAnimate, autoFocus } = useDrawerContext();
		const [delayedSnapPoints, setDelayedSnapPoints] = import_react$103.useState(false);
		const composedRef = useComposedRefs(ref, drawerRef);
		const pointerStartRef = import_react$103.useRef(null);
		const lastKnownPointerEventRef = import_react$103.useRef(null);
		const wasBeyondThePointRef = import_react$103.useRef(false);
		const hasSnapPoints = snapPoints && snapPoints.length > 0;
		useScaleBackground();
		const isDeltaInDirection = (delta, direction, threshold = 0) => {
			if (wasBeyondThePointRef.current) return true;
			const deltaY = Math.abs(delta.y);
			const deltaX = Math.abs(delta.x);
			const isDeltaX = deltaX > deltaY;
			const dFactor = ["bottom", "right"].includes(direction) ? 1 : -1;
			if (direction === "left" || direction === "right") {
				if (!(delta.x * dFactor < 0) && deltaX >= 0 && deltaX <= threshold) return isDeltaX;
			} else if (!(delta.y * dFactor < 0) && deltaY >= 0 && deltaY <= threshold) return !isDeltaX;
			wasBeyondThePointRef.current = true;
			return true;
		};
		import_react$103.useEffect(() => {
			if (hasSnapPoints) window.requestAnimationFrame(() => {
				setDelayedSnapPoints(true);
			});
		}, []);
		function handleOnPointerUp(event) {
			pointerStartRef.current = null;
			wasBeyondThePointRef.current = false;
			onRelease(event);
		}
		return /*#__PURE__*/ import_react$103.createElement(DialogContent, {
			"data-vaul-drawer-direction": direction,
			"data-vaul-drawer": "",
			"data-vaul-delayed-snap-points": delayedSnapPoints ? "true" : "false",
			"data-vaul-snap-points": isOpen && hasSnapPoints ? "true" : "false",
			"data-vaul-custom-container": container ? "true" : "false",
			"data-vaul-animate": (shouldAnimate == null ? void 0 : shouldAnimate.current) ? "true" : "false",
			...rest,
			ref: composedRef,
			style: snapPointsOffset && snapPointsOffset.length > 0 ? {
				"--snap-point-height": `${snapPointsOffset[activeSnapPointIndex != null ? activeSnapPointIndex : 0]}px`,
				...style
			} : style,
			onPointerDown: (event) => {
				if (handleOnly) return;
				rest.onPointerDown == null || rest.onPointerDown.call(rest, event);
				pointerStartRef.current = {
					x: event.pageX,
					y: event.pageY
				};
				onPress(event);
			},
			onOpenAutoFocus: (e) => {
				onOpenAutoFocus?.(e);
				if (!autoFocus) e.preventDefault();
			},
			onPointerDownOutside: (e) => {
				onPointerDownOutside?.(e);
				if (!modal || e.defaultPrevented) {
					e.preventDefault();
					return;
				}
				if (keyboardIsOpen.current) keyboardIsOpen.current = false;
			},
			onFocusOutside: (e) => {
				if (!modal) {
					e.preventDefault();
					return;
				}
			},
			onPointerMove: (event) => {
				lastKnownPointerEventRef.current = event;
				if (handleOnly) return;
				rest.onPointerMove == null || rest.onPointerMove.call(rest, event);
				if (!pointerStartRef.current) return;
				const yPosition = event.pageY - pointerStartRef.current.y;
				const xPosition = event.pageX - pointerStartRef.current.x;
				const swipeStartThreshold = event.pointerType === "touch" ? 10 : 2;
				if (isDeltaInDirection({
					x: xPosition,
					y: yPosition
				}, direction, swipeStartThreshold)) onDrag(event);
				else if (Math.abs(xPosition) > swipeStartThreshold || Math.abs(yPosition) > swipeStartThreshold) pointerStartRef.current = null;
			},
			onPointerUp: (event) => {
				rest.onPointerUp == null || rest.onPointerUp.call(rest, event);
				pointerStartRef.current = null;
				wasBeyondThePointRef.current = false;
				onRelease(event);
			},
			onPointerOut: (event) => {
				rest.onPointerOut == null || rest.onPointerOut.call(rest, event);
				handleOnPointerUp(lastKnownPointerEventRef.current);
			},
			onContextMenu: (event) => {
				rest.onContextMenu == null || rest.onContextMenu.call(rest, event);
				if (lastKnownPointerEventRef.current) handleOnPointerUp(lastKnownPointerEventRef.current);
			}
		});
	});
	Content.displayName = "Drawer.Content";
	LONG_HANDLE_PRESS_TIMEOUT = 250;
	DOUBLE_TAP_TIMEOUT = 120;
	Handle = /*#__PURE__*/ import_react$103.forwardRef(function({ preventCycle = false, children, ...rest }, ref) {
		const { closeDrawer, isDragging, snapPoints, activeSnapPoint, setActiveSnapPoint, dismissible, handleOnly, isOpen, onPress, onDrag } = useDrawerContext();
		const closeTimeoutIdRef = import_react$103.useRef(null);
		const shouldCancelInteractionRef = import_react$103.useRef(false);
		function handleStartCycle() {
			if (shouldCancelInteractionRef.current) {
				handleCancelInteraction();
				return;
			}
			window.setTimeout(() => {
				handleCycleSnapPoints();
			}, DOUBLE_TAP_TIMEOUT);
		}
		function handleCycleSnapPoints() {
			if (isDragging || preventCycle || shouldCancelInteractionRef.current) {
				handleCancelInteraction();
				return;
			}
			handleCancelInteraction();
			if (!snapPoints || snapPoints.length === 0) {
				if (!dismissible) closeDrawer();
				return;
			}
			if (activeSnapPoint === snapPoints[snapPoints.length - 1] && dismissible) {
				closeDrawer();
				return;
			}
			const currentSnapIndex = snapPoints.findIndex((point) => point === activeSnapPoint);
			if (currentSnapIndex === -1) return;
			const nextSnapPoint = snapPoints[currentSnapIndex + 1];
			setActiveSnapPoint(nextSnapPoint);
		}
		function handleStartInteraction() {
			closeTimeoutIdRef.current = window.setTimeout(() => {
				shouldCancelInteractionRef.current = true;
			}, LONG_HANDLE_PRESS_TIMEOUT);
		}
		function handleCancelInteraction() {
			if (closeTimeoutIdRef.current) window.clearTimeout(closeTimeoutIdRef.current);
			shouldCancelInteractionRef.current = false;
		}
		return /*#__PURE__*/ import_react$103.createElement("div", {
			onClick: handleStartCycle,
			onPointerCancel: handleCancelInteraction,
			onPointerDown: (e) => {
				if (handleOnly) onPress(e);
				handleStartInteraction();
			},
			onPointerMove: (e) => {
				if (handleOnly) onDrag(e);
			},
			ref,
			"data-vaul-drawer-visible": isOpen ? "true" : "false",
			"data-vaul-handle": "",
			"aria-hidden": "true",
			...rest
		}, /*#__PURE__*/ import_react$103.createElement("span", {
			"data-vaul-handle-hitarea": "",
			"aria-hidden": "true"
		}, children));
	});
	Handle.displayName = "Drawer.Handle";
	Drawer = {
		Root: Root$3,
		NestedRoot,
		Content,
		Overlay,
		Trigger: DialogTrigger,
		Portal,
		Handle,
		Close: DialogClose,
		Title: DialogTitle,
		Description: DialogDescription
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/ContextMenu.js
var import_classnames$16, import_react$101, import_jsx_runtime$94, ContextMenuItemWrapper, ContextSubMenuWrapper, ContextMenu;
var init_ContextMenu = __esmMin((() => {
	init_FloatingMenu();
	init_DrawerMenu_module();
	init_MenuContext();
	init_platform();
	init_DrawerMenu();
	import_classnames$16 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$101 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$94 = require_jsx_runtime();
	init_dist$25();
	init_dist$8();
	ContextMenuItemWrapper = ({ onSelect, children }) => /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(ContextMenuItem, {
		onSelect: onSelect ?? void 0,
		asChild: true,
		children
	});
	ContextSubMenuWrapper = ({ trigger, children, open, onOpenChange }) => /* @__PURE__ */ (0, import_jsx_runtime$94.jsxs)(ContextMenuSub, {
		open,
		onOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(ContextMenuSubTrigger, {
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(ContextMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(ContextMenuSubContent, {
			asChild: true,
			alignOffset: -20,
			children: /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(FloatingMenu, {
				title: "",
				showTitle: false,
				children
			})
		}) })]
	});
	ContextMenu = ({ title, showTitle = true, onOpenChange: onOpenChangeProp, trigger: triggerProp, hasAccessibleAlternative, children: childrenProp }) => {
		const [open, setOpen] = (0, import_react$101.useState)(false);
		const onOpenChange = (0, import_react$101.useCallback)((value) => {
			setOpen(value);
			onOpenChangeProp?.(value);
		}, [setOpen, onOpenChangeProp]);
		const platform = getPlatform();
		const drawer = platform === "android" || platform === "ios";
		const context = (0, import_react$101.useMemo)(() => ({
			MenuItemWrapper: drawer ? null : ContextMenuItemWrapper,
			SubMenuWrapper: drawer ? null : ContextSubMenuWrapper,
			onOpenChange
		}), [onOpenChange]);
		const children = /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(MenuContext.Provider, {
			value: context,
			children: childrenProp
		});
		const trigger = /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Trigger$1, {
			"aria-haspopup": "menu",
			tabIndex: hasAccessibleAlternative ? void 0 : 0,
			asChild: true,
			children: triggerProp
		});
		return drawer ? /* @__PURE__ */ (0, import_jsx_runtime$94.jsxs)(import_jsx_runtime$94.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Root2$1, {
			onOpenChange,
			children: trigger
		}), /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Drawer.Root, {
			open,
			onOpenChange,
			children: /* @__PURE__ */ (0, import_jsx_runtime$94.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Drawer.Overlay, { className: (0, import_classnames$16.default)(DrawerMenu_module_default.bg) }), /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Drawer.Content, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(DrawerMenu, {
					title,
					children
				})
			})] })
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime$94.jsxs)(Root2$1, {
			onOpenChange,
			children: [trigger, /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(Content2$1, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime$94.jsx)(FloatingMenu, {
					showTitle,
					title,
					children
				})
			}) })]
		});
	};
})), import_jsx_runtime$93, Heading, H1;
var init_Heading = __esmMin((() => {
	init_Typography();
	require_react();
	import_jsx_runtime$93 = require_jsx_runtime();
	Heading = ({ as = "h1", children, ...props }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$93.jsx)(Typography, {
			as,
			type: "heading",
			...props,
			children
		});
	};
	H1 = ({ children, ...props }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$93.jsx)(Heading, {
			as: "h1",
			weight: "semibold",
			size: "xl",
			...props,
			children
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Link/Link.module.js
var Link_module_default;
var init_Link_module = __esmMin((() => {
	Link_module_default = { link: "_link_13esb_8" };
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Link/Link.js
var import_classnames$15, import_react$99, import_jsx_runtime$92, Link;
var init_Link = __esmMin((() => {
	init_Link_module();
	import_classnames$15 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$99 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$92 = require_jsx_runtime();
	Link = (0, import_react$99.forwardRef)(function Link({ children, className, kind = "primary", size = "md", ...props }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$92.jsx)("a", {
			ref,
			...props,
			rel: "noreferrer noopener",
			className: (0, import_classnames$15.default)(Link_module_default.link, className),
			"data-kind": kind,
			"data-size": size,
			children
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.16_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_react$98, import_jsx_runtime$91, DROPDOWN_MENU_NAME, createDropdownMenuContext, createDropdownMenuScope, useMenuScope, DropdownMenuProvider, useDropdownMenuContext, DropdownMenu, TRIGGER_NAME, DropdownMenuTrigger, PORTAL_NAME, DropdownMenuPortal, CONTENT_NAME, DropdownMenuContent, GROUP_NAME, DropdownMenuGroup, LABEL_NAME$1, DropdownMenuLabel, ITEM_NAME, DropdownMenuItem, CHECKBOX_ITEM_NAME, DropdownMenuCheckboxItem, RADIO_GROUP_NAME, DropdownMenuRadioGroup, RADIO_ITEM_NAME, DropdownMenuRadioItem, INDICATOR_NAME, DropdownMenuItemIndicator, SEPARATOR_NAME, DropdownMenuSeparator, ARROW_NAME, DropdownMenuArrow, DropdownMenuSub, SUB_TRIGGER_NAME, DropdownMenuSubTrigger, SUB_CONTENT_NAME, DropdownMenuSubContent, Root2, Trigger, Portal2, Content2;
var init_dist$7 = __esmMin((() => {
	import_react$98 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$47();
	init_dist$45();
	init_dist$46();
	init_dist$28();
	init_dist$43();
	init_dist$26();
	init_dist$34();
	import_jsx_runtime$91 = require_jsx_runtime();
	DROPDOWN_MENU_NAME = "DropdownMenu";
	[createDropdownMenuContext, createDropdownMenuScope] = createContextScope$1(DROPDOWN_MENU_NAME, [createMenuScope]);
	useMenuScope = createMenuScope();
	[DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
	DropdownMenu = (props) => {
		const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		const triggerRef = import_react$98.useRef(null);
		const [open, setOpen] = useControllableState$2({
			prop: openProp,
			defaultProp: defaultOpen ?? false,
			onChange: onOpenChange,
			caller: DROPDOWN_MENU_NAME
		});
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(DropdownMenuProvider, {
			scope: __scopeDropdownMenu,
			triggerId: useId$6(),
			triggerRef,
			contentId: useId$6(),
			open,
			onOpenChange: setOpen,
			onOpenToggle: import_react$98.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
			modal,
			children: /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Root3, {
				...menuScope,
				open,
				onOpenChange: setOpen,
				dir,
				modal,
				children
			})
		});
	};
	DropdownMenu.displayName = DROPDOWN_MENU_NAME;
	TRIGGER_NAME = "DropdownMenuTrigger";
	DropdownMenuTrigger = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
		const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Anchor2, {
			asChild: true,
			...menuScope,
			children: /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Primitive$2.button, {
				type: "button",
				id: context.triggerId,
				"aria-haspopup": "menu",
				"aria-expanded": context.open,
				"aria-controls": context.open ? context.contentId : void 0,
				"data-state": context.open ? "open" : "closed",
				"data-disabled": disabled ? "" : void 0,
				disabled,
				...triggerProps,
				ref: composeRefs$2(forwardedRef, context.triggerRef),
				onPointerDown: composeEventHandlers$1(props.onPointerDown, (event) => {
					if (!disabled && event.button === 0 && event.ctrlKey === false) {
						context.onOpenToggle();
						if (!context.open) event.preventDefault();
					}
				}),
				onKeyDown: composeEventHandlers$1(props.onKeyDown, (event) => {
					if (disabled) return;
					if (["Enter", " "].includes(event.key)) context.onOpenToggle();
					if (event.key === "ArrowDown") context.onOpenChange(true);
					if ([
						"Enter",
						" ",
						"ArrowDown"
					].includes(event.key)) event.preventDefault();
				})
			})
		});
	});
	DropdownMenuTrigger.displayName = TRIGGER_NAME;
	PORTAL_NAME = "DropdownMenuPortal";
	DropdownMenuPortal = (props) => {
		const { __scopeDropdownMenu, ...portalProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Portal$2, {
			...menuScope,
			...portalProps
		});
	};
	DropdownMenuPortal.displayName = PORTAL_NAME;
	CONTENT_NAME = "DropdownMenuContent";
	DropdownMenuContent = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...contentProps } = props;
		const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
		const menuScope = useMenuScope(__scopeDropdownMenu);
		const hasInteractedOutsideRef = import_react$98.useRef(false);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Content2$2, {
			id: context.contentId,
			"aria-labelledby": context.triggerId,
			...menuScope,
			...contentProps,
			ref: forwardedRef,
			onCloseAutoFocus: composeEventHandlers$1(props.onCloseAutoFocus, (event) => {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				hasInteractedOutsideRef.current = false;
				event.preventDefault();
			}),
			onInteractOutside: composeEventHandlers$1(props.onInteractOutside, (event) => {
				const originalEvent = event.detail.originalEvent;
				const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
				const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
				if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
			}),
			style: {
				...props.style,
				"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
				"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
				"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
			}
		});
	});
	DropdownMenuContent.displayName = CONTENT_NAME;
	GROUP_NAME = "DropdownMenuGroup";
	DropdownMenuGroup = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...groupProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Group, {
			...menuScope,
			...groupProps,
			ref: forwardedRef
		});
	});
	DropdownMenuGroup.displayName = GROUP_NAME;
	LABEL_NAME$1 = "DropdownMenuLabel";
	DropdownMenuLabel = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...labelProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Label$1, {
			...menuScope,
			...labelProps,
			ref: forwardedRef
		});
	});
	DropdownMenuLabel.displayName = LABEL_NAME$1;
	ITEM_NAME = "DropdownMenuItem";
	DropdownMenuItem = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...itemProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Item2, {
			...menuScope,
			...itemProps,
			ref: forwardedRef
		});
	});
	DropdownMenuItem.displayName = ITEM_NAME;
	CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
	DropdownMenuCheckboxItem = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...checkboxItemProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(CheckboxItem, {
			...menuScope,
			...checkboxItemProps,
			ref: forwardedRef
		});
	});
	DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
	RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
	DropdownMenuRadioGroup = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...radioGroupProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(RadioGroup, {
			...menuScope,
			...radioGroupProps,
			ref: forwardedRef
		});
	});
	DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
	RADIO_ITEM_NAME = "DropdownMenuRadioItem";
	DropdownMenuRadioItem = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...radioItemProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(RadioItem, {
			...menuScope,
			...radioItemProps,
			ref: forwardedRef
		});
	});
	DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
	INDICATOR_NAME = "DropdownMenuItemIndicator";
	DropdownMenuItemIndicator = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(ItemIndicator, {
			...menuScope,
			...itemIndicatorProps,
			ref: forwardedRef
		});
	});
	DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
	SEPARATOR_NAME = "DropdownMenuSeparator";
	DropdownMenuSeparator = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...separatorProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Separator$2, {
			...menuScope,
			...separatorProps,
			ref: forwardedRef
		});
	});
	DropdownMenuSeparator.displayName = SEPARATOR_NAME;
	ARROW_NAME = "DropdownMenuArrow";
	DropdownMenuArrow = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...arrowProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Arrow2, {
			...menuScope,
			...arrowProps,
			ref: forwardedRef
		});
	});
	DropdownMenuArrow.displayName = ARROW_NAME;
	DropdownMenuSub = (props) => {
		const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		const [open, setOpen] = useControllableState$2({
			prop: openProp,
			defaultProp: defaultOpen ?? false,
			onChange: onOpenChange,
			caller: "DropdownMenuSub"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(Sub, {
			...menuScope,
			open,
			onOpenChange: setOpen,
			children
		});
	};
	SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
	DropdownMenuSubTrigger = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...subTriggerProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(SubTrigger, {
			...menuScope,
			...subTriggerProps,
			ref: forwardedRef
		});
	});
	DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
	SUB_CONTENT_NAME = "DropdownMenuSubContent";
	DropdownMenuSubContent = import_react$98.forwardRef((props, forwardedRef) => {
		const { __scopeDropdownMenu, ...subContentProps } = props;
		const menuScope = useMenuScope(__scopeDropdownMenu);
		return /* @__PURE__ */ (0, import_jsx_runtime$91.jsx)(SubContent, {
			...menuScope,
			...subContentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
				"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
				"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
			}
		});
	});
	DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
	Root2 = DropdownMenu;
	Trigger = DropdownMenuTrigger;
	Portal2 = DropdownMenuPortal;
	Content2 = DropdownMenuContent;
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/Menu.js
var import_classnames$14, import_react$97, import_jsx_runtime$90, DropdownMenuItemWrapper, MENU_ANIMATION_DURATION, DropdownSubMenuWrapper, Menu;
var init_Menu = __esmMin((() => {
	init_FloatingMenu();
	init_DrawerMenu_module();
	init_MenuContext();
	init_platform();
	init_DrawerMenu();
	import_classnames$14 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$97 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$90 = require_jsx_runtime();
	init_dist$8();
	init_dist$7();
	DropdownMenuItemWrapper = ({ onSelect, children }) => /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(DropdownMenuItem, {
		onSelect: onSelect ?? void 0,
		asChild: true,
		children
	});
	MENU_ANIMATION_DURATION = 180;
	DropdownSubMenuWrapper = ({ trigger, children, open: openProp, onOpenChange }) => {
		const [deferredOpen, setDeferredOpen] = (0, import_react$97.useState)(false);
		(0, import_react$97.useEffect)(() => {
			if (openProp) {
				const timer = setTimeout(() => setDeferredOpen(true), MENU_ANIMATION_DURATION);
				return () => clearTimeout(timer);
			} else setDeferredOpen(false);
		}, [openProp]);
		return /* @__PURE__ */ (0, import_jsx_runtime$90.jsxs)(DropdownMenuSub, {
			open: openProp ? deferredOpen : openProp,
			onOpenChange,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(DropdownMenuSubTrigger, {
				asChild: true,
				children: trigger
			}), /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(DropdownMenuSubContent, {
				asChild: true,
				alignOffset: -20,
				children: /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(FloatingMenu, {
					title: "",
					showTitle: false,
					children
				})
			}) })]
		});
	};
	Menu = ({ className, title, showTitle = true, open, onOpenChange, trigger, children: childrenProp, side = "bottom", align = "center" }) => {
		const platform = getPlatform();
		const drawer = platform === "android" || platform === "ios";
		const context = (0, import_react$97.useMemo)(() => ({
			MenuItemWrapper: drawer ? null : DropdownMenuItemWrapper,
			SubMenuWrapper: drawer ? null : DropdownSubMenuWrapper,
			onOpenChange
		}), [onOpenChange]);
		const children = /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(MenuContext.Provider, {
			value: context,
			children: childrenProp
		});
		return drawer ? /* @__PURE__ */ (0, import_jsx_runtime$90.jsxs)(Drawer.Root, {
			open,
			onOpenChange,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(Drawer.Trigger, {
				asChild: true,
				children: trigger
			}), /* @__PURE__ */ (0, import_jsx_runtime$90.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(Drawer.Overlay, { className: (0, import_classnames$14.default)(DrawerMenu_module_default.bg) }), /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(Drawer.Content, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(DrawerMenu, {
					title,
					children
				})
			})] })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime$90.jsxs)(Root2, {
			open,
			onOpenChange,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(Trigger, {
				asChild: true,
				children: trigger
			}), /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(Content2, {
				asChild: true,
				side,
				align,
				sideOffset: 8,
				children: /* @__PURE__ */ (0, import_jsx_runtime$90.jsx)(FloatingMenu, {
					className,
					title,
					showTitle,
					children
				})
			}) })]
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/MenuItem.module.js
var MenuItem_module_default;
var init_MenuItem_module = __esmMin((() => {
	MenuItem_module_default = {
		item: "_item_bym9p_8",
		interactive: "_interactive_bym9p_26",
		"no-label": "_no-label_bym9p_31",
		label: "_label_bym9p_35",
		"no-icon": "_no-icon_bym9p_42",
		icon: "_icon_bym9p_51",
		"nav-hint": "_nav-hint_bym9p_60",
		disabled: "_disabled_bym9p_140"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-right.js
function ChevronRightIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$89.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$89.jsx)("path", { d: "M8.7 17.3a.95.95 0 0 1-.275-.7q0-.425.275-.7l3.9-3.9-3.9-3.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
var import_react$96, import_jsx_runtime$89, chevron_right_default;
var init_chevron_right = __esmMin((() => {
	import_react$96 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$89 = require_jsx_runtime();
	ChevronRightIcon.displayName = "ChevronRightIcon";
	chevron_right_default = (0, import_react$96.forwardRef)(ChevronRightIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/MenuItem.js
var import_classnames$13, import_react$95, import_jsx_runtime$88, MenuItem;
var init_MenuItem = __esmMin((() => {
	init_Text$1();
	init_MenuContext();
	init_MenuItem_module();
	import_classnames$13 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$95 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$88 = require_jsx_runtime();
	init_chevron_right();
	init_dist$17();
	MenuItem = ({ as, className, Icon, label, labelProps, onSelect, kind = "primary", children, onClick: onClickProp, disabled, hideChevron, ...props }) => {
		const Component = as ?? "button";
		const context = (0, import_react$95.useContext)(MenuContext);
		const onClick = (0, import_react$95.useCallback)((e) => {
			onClickProp?.(e);
			if (onSelect !== null && context?.MenuItemWrapper == null) {
				const selectEvent = new CustomEvent("menu.itemSelect", {
					bubbles: true,
					cancelable: true
				});
				onSelect(selectEvent);
				if (!selectEvent.defaultPrevented) context?.onOpenChange(false);
			}
		}, [context, onSelect]);
		const iconIsReactElement = (0, import_react$95.isValidElement)(Icon);
		const componentIcon = Icon;
		const SvgIcon = Icon;
		const content = /* @__PURE__ */ (0, import_jsx_runtime$88.jsxs)(Component, {
			role: "menuitem",
			...props,
			className: (0, import_classnames$13.default)(className, MenuItem_module_default.item, {
				[MenuItem_module_default.interactive]: onSelect !== null,
				[MenuItem_module_default["no-label"]]: label === null,
				[MenuItem_module_default["no-icon"]]: !Icon,
				[MenuItem_module_default["disabled"]]: disabled
			}),
			"data-kind": kind,
			onClick,
			disabled: Component === "button" ? disabled : void 0,
			"aria-disabled": Component === "button" ? void 0 : disabled,
			children: [
				Icon && (iconIsReactElement ? /* @__PURE__ */ (0, import_jsx_runtime$88.jsx)(Slot$1, {
					className: MenuItem_module_default.icon,
					children: componentIcon
				}) : /* @__PURE__ */ (0, import_jsx_runtime$88.jsx)(SvgIcon, {
					width: 24,
					height: 24,
					className: MenuItem_module_default.icon,
					"aria-hidden": true
				})),
				label !== null && /* @__PURE__ */ (0, import_jsx_runtime$88.jsx)(Text, {
					className: (0, import_classnames$13.default)(MenuItem_module_default.label, labelProps?.className),
					size: "md",
					weight: "medium",
					as: "span",
					...labelProps,
					children: label
				}),
				!hideChevron && (Component === "button" || Component === "a") && /* @__PURE__ */ (0, import_jsx_runtime$88.jsx)(chevron_right_default, {
					width: 8,
					height: 24,
					className: MenuItem_module_default["nav-hint"],
					"aria-hidden": true,
					viewBox: "8 0 8 24"
				}),
				children
			]
		});
		return context?.MenuItemWrapper == null || onSelect === null ? content : /* @__PURE__ */ (0, import_jsx_runtime$88.jsx)(context.MenuItemWrapper, {
			onSelect,
			children: content
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/SubMenu.js
var import_react$94, import_jsx_runtime$87, SubMenu;
var init_SubMenu = __esmMin((() => {
	init_MenuContext();
	import_react$94 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$87 = require_jsx_runtime();
	SubMenu = ({ trigger, open, onOpenChange, children }) => {
		const context = (0, import_react$94.useContext)(MenuContext);
		if (context?.SubMenuWrapper == null) return /* @__PURE__ */ (0, import_jsx_runtime$87.jsxs)(import_jsx_runtime$87.Fragment, { children: [trigger, children] });
		return /* @__PURE__ */ (0, import_jsx_runtime$87.jsx)(context.SubMenuWrapper, {
			trigger,
			open,
			onOpenChange,
			children
		});
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Controls/Text/Text.module.js
var Text_module_default;
var init_Text_module = __esmMin((() => {
	Text_module_default = {
		control: "_control_d83jn_10",
		"enable-ligatures": "_enable-ligatures_d83jn_63"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-label@2.1.7_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-label/dist/index.mjs
var import_react$93, import_jsx_runtime$86, NAME$1, Label;
var init_dist$6 = __esmMin((() => {
	import_react$93 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$43();
	import_jsx_runtime$86 = require_jsx_runtime();
	NAME$1 = "Label";
	Label = import_react$93.forwardRef((props, forwardedRef) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$86.jsx)(Primitive$2.label, {
			...props,
			ref: forwardedRef,
			onMouseDown: (event) => {
				if (event.target.closest("button, input, select, textarea")) return;
				props.onMouseDown?.(event);
				if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
			}
		});
	});
	Label.displayName = NAME$1;
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-form@0.1.8_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-form/dist/index.mjs
function validityStateToObject(validity) {
	const object = {};
	for (const key in validity) object[key] = validity[key];
	return object;
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isFormControl(element) {
	return "validity" in element;
}
function isInvalid(control) {
	return isFormControl(control) && (control.validity.valid === false || control.getAttribute("aria-invalid") === "true");
}
function getFirstInvalidControl(form) {
	const elements = form.elements;
	const [firstInvalidControl] = Array.from(elements).filter(isHTMLElement).filter(isInvalid);
	return firstInvalidControl;
}
function isAsyncCustomMatcherEntry(entry, args) {
	return entry.match.constructor.name === "AsyncFunction" || returnsPromise(entry.match, args);
}
function isSyncCustomMatcherEntry(entry) {
	return entry.match.constructor.name === "Function";
}
function returnsPromise(func, args) {
	return func(...args) instanceof Promise;
}
function hasBuiltInError(validity) {
	let error = false;
	for (const validityKey in validity) {
		const key = validityKey;
		if (key !== "valid" && key !== "customError" && validity[key]) {
			error = true;
			break;
		}
	}
	return error;
}
function getValidAttribute(validity, serverInvalid) {
	if (validity?.valid === true && !serverInvalid) return true;
}
function getInvalidAttribute(validity, serverInvalid) {
	if (validity?.valid === false || serverInvalid) return true;
}
var import_react$92, import_jsx_runtime$85, createFormContext, createFormScope, FORM_NAME, ValidationProvider, useValidationContext, AriaDescriptionProvider, useAriaDescriptionContext, Form, FIELD_NAME, FormFieldProvider, useFormFieldContext, FormField, LABEL_NAME, FormLabel, CONTROL_NAME, FormControl, DEFAULT_INVALID_MESSAGE, DEFAULT_BUILT_IN_MESSAGES, MESSAGE_NAME, FormMessage, FormBuiltInMessage, FormCustomMessage, FormMessageImpl, VALIDITY_STATE_NAME, FormValidityState, SUBMIT_NAME, FormSubmit, Root$2, Field, Control, Submit;
var init_dist$5 = __esmMin((() => {
	import_react$92 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$47();
	init_dist$45();
	init_dist$46();
	init_dist$34();
	init_dist$6();
	init_dist$43();
	import_jsx_runtime$85 = require_jsx_runtime();
	[createFormContext, createFormScope] = createContextScope$1("Form");
	FORM_NAME = "Form";
	[ValidationProvider, useValidationContext] = createFormContext(FORM_NAME);
	[AriaDescriptionProvider, useAriaDescriptionContext] = createFormContext(FORM_NAME);
	Form = import_react$92.forwardRef((props, forwardedRef) => {
		const { __scopeForm, onClearServerErrors = () => {}, ...rootProps } = props;
		const composedFormRef = useComposedRefs$2(forwardedRef, import_react$92.useRef(null));
		const [validityMap, setValidityMap] = import_react$92.useState({});
		const getFieldValidity = import_react$92.useCallback((fieldName) => validityMap[fieldName], [validityMap]);
		const handleFieldValidityChange = import_react$92.useCallback((fieldName, validity) => setValidityMap((prevValidityMap) => ({
			...prevValidityMap,
			[fieldName]: {
				...prevValidityMap[fieldName] ?? {},
				...validity
			}
		})), []);
		const handleFieldValiditionClear = import_react$92.useCallback((fieldName) => {
			setValidityMap((prevValidityMap) => ({
				...prevValidityMap,
				[fieldName]: void 0
			}));
			setCustomErrorsMap((prevCustomErrorsMap) => ({
				...prevCustomErrorsMap,
				[fieldName]: {}
			}));
		}, []);
		const [customMatcherEntriesMap, setCustomMatcherEntriesMap] = import_react$92.useState({});
		const getFieldCustomMatcherEntries = import_react$92.useCallback((fieldName) => customMatcherEntriesMap[fieldName] ?? [], [customMatcherEntriesMap]);
		const handleFieldCustomMatcherAdd = import_react$92.useCallback((fieldName, matcherEntry) => {
			setCustomMatcherEntriesMap((prevCustomMatcherEntriesMap) => ({
				...prevCustomMatcherEntriesMap,
				[fieldName]: [...prevCustomMatcherEntriesMap[fieldName] ?? [], matcherEntry]
			}));
		}, []);
		const handleFieldCustomMatcherRemove = import_react$92.useCallback((fieldName, matcherEntryId) => {
			setCustomMatcherEntriesMap((prevCustomMatcherEntriesMap) => ({
				...prevCustomMatcherEntriesMap,
				[fieldName]: (prevCustomMatcherEntriesMap[fieldName] ?? []).filter((matcherEntry) => matcherEntry.id !== matcherEntryId)
			}));
		}, []);
		const [customErrorsMap, setCustomErrorsMap] = import_react$92.useState({});
		const getFieldCustomErrors = import_react$92.useCallback((fieldName) => customErrorsMap[fieldName] ?? {}, [customErrorsMap]);
		const handleFieldCustomErrorsChange = import_react$92.useCallback((fieldName, customErrors) => {
			setCustomErrorsMap((prevCustomErrorsMap) => ({
				...prevCustomErrorsMap,
				[fieldName]: {
					...prevCustomErrorsMap[fieldName] ?? {},
					...customErrors
				}
			}));
		}, []);
		const [messageIdsMap, setMessageIdsMap] = import_react$92.useState({});
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(ValidationProvider, {
			scope: __scopeForm,
			getFieldValidity,
			onFieldValidityChange: handleFieldValidityChange,
			getFieldCustomMatcherEntries,
			onFieldCustomMatcherEntryAdd: handleFieldCustomMatcherAdd,
			onFieldCustomMatcherEntryRemove: handleFieldCustomMatcherRemove,
			getFieldCustomErrors,
			onFieldCustomErrorsChange: handleFieldCustomErrorsChange,
			onFieldValiditionClear: handleFieldValiditionClear,
			children: /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(AriaDescriptionProvider, {
				scope: __scopeForm,
				onFieldMessageIdAdd: import_react$92.useCallback((fieldName, id) => {
					setMessageIdsMap((prevMessageIdsMap) => {
						const fieldDescriptionIds = new Set(prevMessageIdsMap[fieldName]).add(id);
						return {
							...prevMessageIdsMap,
							[fieldName]: fieldDescriptionIds
						};
					});
				}, []),
				onFieldMessageIdRemove: import_react$92.useCallback((fieldName, id) => {
					setMessageIdsMap((prevMessageIdsMap) => {
						const fieldDescriptionIds = new Set(prevMessageIdsMap[fieldName]);
						fieldDescriptionIds.delete(id);
						return {
							...prevMessageIdsMap,
							[fieldName]: fieldDescriptionIds
						};
					});
				}, []),
				getFieldDescription: import_react$92.useCallback((fieldName) => Array.from(messageIdsMap[fieldName] ?? []).join(" ") || void 0, [messageIdsMap]),
				children: /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(Primitive$2.form, {
					...rootProps,
					ref: composedFormRef,
					onInvalid: composeEventHandlers$1(props.onInvalid, (event) => {
						const firstInvalidControl = getFirstInvalidControl(event.currentTarget);
						if (firstInvalidControl === event.target) firstInvalidControl.focus();
						event.preventDefault();
					}),
					onSubmit: composeEventHandlers$1(props.onSubmit, onClearServerErrors, { checkForDefaultPrevented: false }),
					onReset: composeEventHandlers$1(props.onReset, onClearServerErrors)
				})
			})
		});
	});
	Form.displayName = FORM_NAME;
	FIELD_NAME = "FormField";
	[FormFieldProvider, useFormFieldContext] = createFormContext(FIELD_NAME);
	FormField = import_react$92.forwardRef((props, forwardedRef) => {
		const { __scopeForm, name, serverInvalid = false, ...fieldProps } = props;
		const validity = useValidationContext(FIELD_NAME, __scopeForm).getFieldValidity(name);
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(FormFieldProvider, {
			scope: __scopeForm,
			id: useId$6(),
			name,
			serverInvalid,
			children: /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(Primitive$2.div, {
				"data-valid": getValidAttribute(validity, serverInvalid),
				"data-invalid": getInvalidAttribute(validity, serverInvalid),
				...fieldProps,
				ref: forwardedRef
			})
		});
	});
	FormField.displayName = FIELD_NAME;
	LABEL_NAME = "FormLabel";
	FormLabel = import_react$92.forwardRef((props, forwardedRef) => {
		const { __scopeForm, ...labelProps } = props;
		const validationContext = useValidationContext(LABEL_NAME, __scopeForm);
		const fieldContext = useFormFieldContext(LABEL_NAME, __scopeForm);
		const htmlFor = labelProps.htmlFor || fieldContext.id;
		const validity = validationContext.getFieldValidity(fieldContext.name);
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(Label, {
			"data-valid": getValidAttribute(validity, fieldContext.serverInvalid),
			"data-invalid": getInvalidAttribute(validity, fieldContext.serverInvalid),
			...labelProps,
			ref: forwardedRef,
			htmlFor
		});
	});
	FormLabel.displayName = LABEL_NAME;
	CONTROL_NAME = "FormControl";
	FormControl = import_react$92.forwardRef((props, forwardedRef) => {
		const { __scopeForm, ...controlProps } = props;
		const validationContext = useValidationContext(CONTROL_NAME, __scopeForm);
		const fieldContext = useFormFieldContext(CONTROL_NAME, __scopeForm);
		const ariaDescriptionContext = useAriaDescriptionContext(CONTROL_NAME, __scopeForm);
		const ref = import_react$92.useRef(null);
		const composedRef = useComposedRefs$2(forwardedRef, ref);
		const name = controlProps.name || fieldContext.name;
		const id = controlProps.id || fieldContext.id;
		const customMatcherEntries = validationContext.getFieldCustomMatcherEntries(name);
		const { onFieldValidityChange, onFieldCustomErrorsChange, onFieldValiditionClear } = validationContext;
		const updateControlValidity = import_react$92.useCallback(async (control) => {
			if (hasBuiltInError(control.validity)) {
				const controlValidity2 = validityStateToObject(control.validity);
				onFieldValidityChange(name, controlValidity2);
				return;
			}
			const formData = control.form ? new FormData(control.form) : new FormData();
			const matcherArgs = [control.value, formData];
			const syncCustomMatcherEntries = [];
			const ayncCustomMatcherEntries = [];
			customMatcherEntries.forEach((customMatcherEntry) => {
				if (isAsyncCustomMatcherEntry(customMatcherEntry, matcherArgs)) ayncCustomMatcherEntries.push(customMatcherEntry);
				else if (isSyncCustomMatcherEntry(customMatcherEntry)) syncCustomMatcherEntries.push(customMatcherEntry);
			});
			const syncCustomErrors = syncCustomMatcherEntries.map(({ id: id2, match }) => {
				return [id2, match(...matcherArgs)];
			});
			const syncCustomErrorsById = Object.fromEntries(syncCustomErrors);
			const hasSyncCustomErrors = Object.values(syncCustomErrorsById).some(Boolean);
			const hasCustomError = hasSyncCustomErrors;
			control.setCustomValidity(hasCustomError ? DEFAULT_INVALID_MESSAGE : "");
			const controlValidity = validityStateToObject(control.validity);
			onFieldValidityChange(name, controlValidity);
			onFieldCustomErrorsChange(name, syncCustomErrorsById);
			if (!hasSyncCustomErrors && ayncCustomMatcherEntries.length > 0) {
				const promisedCustomErrors = ayncCustomMatcherEntries.map(({ id: id2, match }) => match(...matcherArgs).then((matches) => [id2, matches]));
				const asyncCustomErrors = await Promise.all(promisedCustomErrors);
				const asyncCustomErrorsById = Object.fromEntries(asyncCustomErrors);
				const hasCustomError2 = Object.values(asyncCustomErrorsById).some(Boolean);
				control.setCustomValidity(hasCustomError2 ? DEFAULT_INVALID_MESSAGE : "");
				const controlValidity2 = validityStateToObject(control.validity);
				onFieldValidityChange(name, controlValidity2);
				onFieldCustomErrorsChange(name, asyncCustomErrorsById);
			}
		}, [
			customMatcherEntries,
			name,
			onFieldCustomErrorsChange,
			onFieldValidityChange
		]);
		import_react$92.useEffect(() => {
			const control = ref.current;
			if (control) {
				const handleChange = () => updateControlValidity(control);
				control.addEventListener("change", handleChange);
				return () => control.removeEventListener("change", handleChange);
			}
		}, [updateControlValidity]);
		const resetControlValidity = import_react$92.useCallback(() => {
			const control = ref.current;
			if (control) {
				control.setCustomValidity("");
				onFieldValiditionClear(name);
			}
		}, [name, onFieldValiditionClear]);
		import_react$92.useEffect(() => {
			const form = ref.current?.form;
			if (form) {
				form.addEventListener("reset", resetControlValidity);
				return () => form.removeEventListener("reset", resetControlValidity);
			}
		}, [resetControlValidity]);
		import_react$92.useEffect(() => {
			const control = ref.current;
			const form = control?.closest("form");
			if (form && fieldContext.serverInvalid) {
				const firstInvalidControl = getFirstInvalidControl(form);
				if (firstInvalidControl === control) firstInvalidControl.focus();
			}
		}, [fieldContext.serverInvalid]);
		const validity = validationContext.getFieldValidity(name);
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(Primitive$2.input, {
			"data-valid": getValidAttribute(validity, fieldContext.serverInvalid),
			"data-invalid": getInvalidAttribute(validity, fieldContext.serverInvalid),
			"aria-invalid": fieldContext.serverInvalid ? true : void 0,
			"aria-describedby": ariaDescriptionContext.getFieldDescription(name),
			title: "",
			...controlProps,
			ref: composedRef,
			id,
			name,
			onInvalid: composeEventHandlers$1(props.onInvalid, (event) => {
				const control = event.currentTarget;
				updateControlValidity(control);
			}),
			onChange: composeEventHandlers$1(props.onChange, (_event) => {
				resetControlValidity();
			})
		});
	});
	FormControl.displayName = CONTROL_NAME;
	DEFAULT_INVALID_MESSAGE = "This value is not valid";
	DEFAULT_BUILT_IN_MESSAGES = {
		badInput: DEFAULT_INVALID_MESSAGE,
		patternMismatch: "This value does not match the required pattern",
		rangeOverflow: "This value is too large",
		rangeUnderflow: "This value is too small",
		stepMismatch: "This value does not match the required step",
		tooLong: "This value is too long",
		tooShort: "This value is too short",
		typeMismatch: "This value does not match the required type",
		valid: void 0,
		valueMissing: "This value is missing"
	};
	MESSAGE_NAME = "FormMessage";
	FormMessage = import_react$92.forwardRef((props, forwardedRef) => {
		const { match, name: nameProp, ...messageProps } = props;
		const fieldContext = useFormFieldContext(MESSAGE_NAME, props.__scopeForm);
		const name = nameProp ?? fieldContext.name;
		if (match === void 0) return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(FormMessageImpl, {
			...messageProps,
			ref: forwardedRef,
			name,
			children: props.children || DEFAULT_INVALID_MESSAGE
		});
		else if (typeof match === "function") return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(FormCustomMessage, {
			match,
			...messageProps,
			ref: forwardedRef,
			name
		});
		else return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(FormBuiltInMessage, {
			match,
			...messageProps,
			ref: forwardedRef,
			name
		});
	});
	FormMessage.displayName = MESSAGE_NAME;
	FormBuiltInMessage = import_react$92.forwardRef((props, forwardedRef) => {
		const { match, forceMatch = false, name, children, ...messageProps } = props;
		const validity = useValidationContext(MESSAGE_NAME, messageProps.__scopeForm).getFieldValidity(name);
		if (forceMatch || validity?.[match]) return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(FormMessageImpl, {
			ref: forwardedRef,
			...messageProps,
			name,
			children: children ?? DEFAULT_BUILT_IN_MESSAGES[match]
		});
		return null;
	});
	FormCustomMessage = import_react$92.forwardRef((props, forwardedRef) => {
		const { match, forceMatch = false, name, id: idProp, children, ...messageProps } = props;
		const validationContext = useValidationContext(MESSAGE_NAME, messageProps.__scopeForm);
		const composedRef = useComposedRefs$2(forwardedRef, import_react$92.useRef(null));
		const _id = useId$6();
		const id = idProp ?? _id;
		const customMatcherEntry = import_react$92.useMemo(() => ({
			id,
			match
		}), [id, match]);
		const { onFieldCustomMatcherEntryAdd, onFieldCustomMatcherEntryRemove } = validationContext;
		import_react$92.useEffect(() => {
			onFieldCustomMatcherEntryAdd(name, customMatcherEntry);
			return () => onFieldCustomMatcherEntryRemove(name, customMatcherEntry.id);
		}, [
			customMatcherEntry,
			name,
			onFieldCustomMatcherEntryAdd,
			onFieldCustomMatcherEntryRemove
		]);
		const validity = validationContext.getFieldValidity(name);
		const hasMatchingCustomError = validationContext.getFieldCustomErrors(name)[id];
		if (forceMatch || validity && !hasBuiltInError(validity) && hasMatchingCustomError) return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(FormMessageImpl, {
			id,
			ref: composedRef,
			...messageProps,
			name,
			children: children ?? DEFAULT_INVALID_MESSAGE
		});
		return null;
	});
	FormMessageImpl = import_react$92.forwardRef((props, forwardedRef) => {
		const { __scopeForm, id: idProp, name, ...messageProps } = props;
		const ariaDescriptionContext = useAriaDescriptionContext(MESSAGE_NAME, __scopeForm);
		const _id = useId$6();
		const id = idProp ?? _id;
		const { onFieldMessageIdAdd, onFieldMessageIdRemove } = ariaDescriptionContext;
		import_react$92.useEffect(() => {
			onFieldMessageIdAdd(name, id);
			return () => onFieldMessageIdRemove(name, id);
		}, [
			name,
			id,
			onFieldMessageIdAdd,
			onFieldMessageIdRemove
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(Primitive$2.span, {
			id,
			...messageProps,
			ref: forwardedRef
		});
	});
	VALIDITY_STATE_NAME = "FormValidityState";
	FormValidityState = (props) => {
		const { __scopeForm, name: nameProp, children } = props;
		const validationContext = useValidationContext(VALIDITY_STATE_NAME, __scopeForm);
		const fieldContext = useFormFieldContext(VALIDITY_STATE_NAME, __scopeForm);
		const name = nameProp ?? fieldContext.name;
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(import_jsx_runtime$85.Fragment, { children: children(validationContext.getFieldValidity(name)) });
	};
	FormValidityState.displayName = VALIDITY_STATE_NAME;
	SUBMIT_NAME = "FormSubmit";
	FormSubmit = import_react$92.forwardRef((props, forwardedRef) => {
		const { __scopeForm, ...submitProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime$85.jsx)(Primitive$2.button, {
			type: "submit",
			...submitProps,
			ref: forwardedRef
		});
	});
	FormSubmit.displayName = SUBMIT_NAME;
	Root$2 = Form;
	Field = FormField;
	Control = FormControl;
	Submit = FormSubmit;
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Controls/Text/Text.js
var import_classnames$12, import_react$91, import_jsx_runtime$84, TextInput, TextControl;
var init_Text = __esmMin((() => {
	init_Text_module();
	import_classnames$12 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$91 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$84 = require_jsx_runtime();
	init_dist$5();
	TextInput = (0, import_react$91.forwardRef)(function TextInput({ className, enableLigatures, ...props }, ref) {
		const classes = (0, import_classnames$12.default)(Text_module_default.control, className, { [Text_module_default["enable-ligatures"]]: enableLigatures });
		return /* @__PURE__ */ (0, import_jsx_runtime$84.jsx)("input", {
			ref,
			...props,
			className: classes
		});
	});
	TextControl = (0, import_react$91.forwardRef)(function TextControl(props, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$84.jsx)(Control, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$84.jsx)(TextInput, {
				ref,
				...props
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-on.js
function VisibilityOnIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$83.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$83.jsx)("path", { d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7 8.813 8.313 7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 9.3 11.5q0-1.125.787-1.912A2.6 2.6 0 0 1 12 8.8q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912A2.6 2.6 0 0 1 12 14.2m0 4.8q-3.475 0-6.35-1.837Q2.775 15.324 1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.775.8.8 0 0 1 .1-.313q1.475-3.125 4.35-4.962Q8.525 4 12 4t6.35 1.838T22.7 10.8a.8.8 0 0 1 .1.313 3 3 0 0 1 0 .774.8.8 0 0 1-.1.313q-1.475 3.125-4.35 4.963Q15.475 19 12 19m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 20.8 11.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 12 6a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 11.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 12 17" })
	});
}
var import_react$90, import_jsx_runtime$83, visibility_on_default;
var init_visibility_on = __esmMin((() => {
	import_react$90 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$83 = require_jsx_runtime();
	VisibilityOnIcon.displayName = "VisibilityOnIcon";
	visibility_on_default = (0, import_react$90.forwardRef)(VisibilityOnIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/visibility-off.js
function VisibilityOffIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$82.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$82.jsx)("path", { d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z" })
	});
}
var import_react$89, import_jsx_runtime$82, visibility_off_default;
var init_visibility_off = __esmMin((() => {
	import_react$89 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$82 = require_jsx_runtime();
	VisibilityOffIcon.displayName = "VisibilityOffIcon";
	visibility_off_default = (0, import_react$89.forwardRef)(VisibilityOffIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Controls/Checkbox/Checkbox.module.js
var Checkbox_module_default;
var init_Checkbox_module = __esmMin((() => {
	Checkbox_module_default = {
		container: "_container_153f2_10",
		input: "_input_153f2_18",
		ui: "_ui_153f2_19"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js
function CheckIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$81.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$81.jsx)("path", { d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
var import_react$88, import_jsx_runtime$81, check_default;
var init_check = __esmMin((() => {
	import_react$88 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$81 = require_jsx_runtime();
	CheckIcon.displayName = "CheckIcon";
	check_default = (0, import_react$88.forwardRef)(CheckIcon);
})), import_classnames$11, import_react$87, import_jsx_runtime$80, CheckboxInput;
var init_Checkbox = __esmMin((() => {
	init_Checkbox_module();
	import_classnames$11 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$87 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$80 = require_jsx_runtime();
	init_dist$5();
	init_check();
	CheckboxInput = (0, import_react$87.forwardRef)(function Checkbox({ className, ...props }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$80.jsxs)("div", {
			className: (0, import_classnames$11.default)(Checkbox_module_default.container, className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$80.jsx)("input", {
				ref,
				className: Checkbox_module_default.input,
				...props,
				type: "checkbox"
			}), /* @__PURE__ */ (0, import_jsx_runtime$80.jsx)("div", {
				className: Checkbox_module_default.ui,
				children: /* @__PURE__ */ (0, import_jsx_runtime$80.jsx)(check_default, { "aria-hidden": true })
			})]
		});
	});
	(0, import_react$87.forwardRef)(function CheckboxControl(props, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$80.jsx)(Control, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$80.jsx)(CheckboxInput, {
				ref,
				...props
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Controls/Radio/Radio.module.js
var Radio_module_default;
var init_Radio_module = __esmMin((() => {
	Radio_module_default = {
		container: "_container_1ug7n_10",
		input: "_input_1ug7n_18",
		ui: "_ui_1ug7n_19"
	};
})), import_classnames$10, import_react$86, import_jsx_runtime$79, RadioInput;
var init_Radio = __esmMin((() => {
	init_Radio_module();
	import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$86 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$79 = require_jsx_runtime();
	init_dist$5();
	RadioInput = (0, import_react$86.forwardRef)(function Radio({ className, ...props }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$79.jsxs)("div", {
			className: (0, import_classnames$10.default)(Radio_module_default.container, className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$79.jsx)("input", {
				ref,
				...props,
				className: Radio_module_default.input,
				type: "radio"
			}), /* @__PURE__ */ (0, import_jsx_runtime$79.jsx)("div", { className: Radio_module_default.ui })]
		});
	});
	(0, import_react$86.forwardRef)(function RadioControl(props, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$79.jsx)(Control, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$79.jsx)(RadioInput, {
				ref,
				...props
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Controls/Toggle/Toggle.module.js
var Toggle_module_default;
var init_Toggle_module = __esmMin((() => {
	Toggle_module_default = {
		container: "_container_udcm8_10",
		input: "_input_udcm8_24",
		ui: "_ui_udcm8_34"
	};
})), import_classnames$9, import_react$85, import_jsx_runtime$78, ToggleInput;
var init_Toggle = __esmMin((() => {
	init_Toggle_module();
	import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$85 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$78 = require_jsx_runtime();
	init_dist$5();
	ToggleInput = (0, import_react$85.forwardRef)(function Toggle({ className, ...props }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$78.jsxs)("div", {
			className: (0, import_classnames$9.default)(Toggle_module_default.container, className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$78.jsx)("input", {
				role: "switch",
				ref,
				className: Toggle_module_default.input,
				...props,
				type: "checkbox"
			}), /* @__PURE__ */ (0, import_jsx_runtime$78.jsx)("div", { className: Toggle_module_default.ui })]
		});
	});
	(0, import_react$85.forwardRef)(function ToggleControl(props, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$78.jsx)(Control, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$78.jsx)(ToggleInput, {
				ref,
				...props
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/form.module.js
var form_module_default;
var init_form_module = __esmMin((() => {
	form_module_default = {
		root: "_root_1o4d9_17",
		field: "_field_1o4d9_27",
		"inline-field": "_inline-field_1o4d9_33",
		"inline-field-body": "_inline-field-body_1o4d9_39",
		"inline-field-control": "_inline-field-control_1o4d9_45",
		label: "_label_1o4d9_60",
		message: "_message_1o4d9_86",
		"help-message": "_help-message_1o4d9_92",
		"error-message": "_error-message_1o4d9_96",
		"success-message": "_success-message_1o4d9_100"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/InlineSpinner/InlineSpinner.module.js
var InlineSpinner_module_default;
var init_InlineSpinner_module = __esmMin((() => {
	InlineSpinner_module_default = {
		icon: "_icon_1855a_18",
		spin: "_spin_1855a_1"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/spinner.js
function SpinnerIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$77.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$77.jsx)("path", {
			fillRule: "evenodd",
			d: "M12 4.031a8 8 0 1 0 8 8 1 1 0 0 1 2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10a1 1 0 1 1 0 2",
			clipRule: "evenodd"
		})
	});
}
var import_react$84, import_jsx_runtime$77, spinner_default;
var init_spinner = __esmMin((() => {
	import_react$84 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$77 = require_jsx_runtime();
	SpinnerIcon.displayName = "SpinnerIcon";
	spinner_default = (0, import_react$84.forwardRef)(SpinnerIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/InlineSpinner/InlineSpinner.js
var import_classnames$8, import_react$83, import_jsx_runtime$76, InlineSpinner;
var init_InlineSpinner = __esmMin((() => {
	init_InlineSpinner_module();
	import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$83 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$76 = require_jsx_runtime();
	init_spinner();
	InlineSpinner = (0, import_react$83.forwardRef)(function InlineSpinner({ size = 20, className, ...props }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$76.jsx)(spinner_default, {
			ref,
			className: (0, import_classnames$8.default)(InlineSpinner_module_default.icon, className),
			style: {
				width: size,
				height: size
			},
			...props
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Root.js
var import_classnames$7, import_react$82, import_jsx_runtime$75, Root$1;
var init_Root = __esmMin((() => {
	init_form_module();
	import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$82 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$75 = require_jsx_runtime();
	init_dist$5();
	Root$1 = (0, import_react$82.forwardRef)(function Root$2$1({ children, ...props }, ref) {
		const classes = (0, import_classnames$7.default)(form_module_default.root, props.className);
		return /* @__PURE__ */ (0, import_jsx_runtime$75.jsx)(Root$2, {
			ref,
			...props,
			className: classes,
			children
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Field.js
var import_classnames$6, import_react$81, import_jsx_runtime$74, Field$1;
var init_Field = __esmMin((() => {
	init_form_module();
	import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$81 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$74 = require_jsx_runtime();
	init_dist$5();
	Field$1 = (0, import_react$81.forwardRef)(function Field$2({ children, ...props }, ref) {
		const classes = (0, import_classnames$6.default)(form_module_default.field, props.className);
		return /* @__PURE__ */ (0, import_jsx_runtime$74.jsx)(Field, {
			ref,
			...props,
			className: classes,
			children
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Form/Submit.js
var import_react$80, import_jsx_runtime$73, Submit$1;
var init_Submit = __esmMin((() => {
	init_Button();
	import_react$80 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$73 = require_jsx_runtime();
	init_dist$5();
	Submit$1 = (0, import_react$80.forwardRef)(function Submit$2(props, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$73.jsx)(Submit, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$73.jsx)(Button, {
				type: "submit",
				ref,
				...props
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/RadioMenuItem.js
var import_react$79, import_jsx_runtime$72, RadioMenuItem;
var init_RadioMenuItem = __esmMin((() => {
	init_MenuItem();
	init_Radio();
	import_react$79 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$72 = require_jsx_runtime();
	RadioMenuItem = (0, import_react$79.forwardRef)(function RadioMenuItem({ className, label, onSelect, checked, disabled }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$72.jsx)(MenuItem, {
			as: "div",
			role: "menuitemradio",
			"aria-checked": checked,
			className,
			label,
			onSelect,
			disabled,
			Icon: /* @__PURE__ */ (0, import_jsx_runtime$72.jsx)(RadioInput, {
				id: (0, import_react$79.useId)(),
				ref,
				"aria-hidden": true,
				checked,
				disabled,
				onChange: (0, import_react$79.useCallback)(() => {}, [])
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-slot/dist/index.mjs
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
	const Slot2 = import_react$78.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		const childrenArray = import_react$78.Children.toArray(children);
		const slottable = childrenArray.find(isSlottable);
		if (slottable) {
			const newElement = slottable.props.children;
			const newChildren = childrenArray.map((child) => {
				if (child === slottable) {
					if (import_react$78.Children.count(newElement) > 1) return import_react$78.Children.only(null);
					return import_react$78.isValidElement(newElement) ? newElement.props.children : null;
				} else return child;
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$71.jsx)(SlotClone, {
				...slotProps,
				ref: forwardedRef,
				children: import_react$78.isValidElement(newElement) ? import_react$78.cloneElement(newElement, void 0, newChildren) : null
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime$71.jsx)(SlotClone, {
			...slotProps,
			ref: forwardedRef,
			children
		});
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
	const SlotClone = import_react$78.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		if (import_react$78.isValidElement(children)) {
			const childrenRef = getElementRef(children);
			const props2 = mergeProps(slotProps, children.props);
			if (children.type !== import_react$78.Fragment) props2.ref = forwardedRef ? composeRefs$2(forwardedRef, childrenRef) : childrenRef;
			return import_react$78.cloneElement(children, props2);
		}
		return import_react$78.Children.count(children) > 1 ? import_react$78.Children.only(null) : null;
	});
	SlotClone.displayName = `${ownerName}.SlotClone`;
	return SlotClone;
}
function isSlottable(child) {
	return import_react$78.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
var import_react$78, import_jsx_runtime$71, REACT_LAZY_TYPE, use, SLOTTABLE_IDENTIFIER;
var init_dist$4 = __esmMin((() => {
	import_react$78 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$45();
	import_jsx_runtime$71 = require_jsx_runtime();
	REACT_LAZY_TYPE = Symbol.for("react.lazy");
	use = import_react$78[" use ".trim().toString()];
	SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
})), import_react$77, import_jsx_runtime$70, Primitive;
var init_dist$3 = __esmMin((() => {
	import_react$77 = /* @__PURE__ */ __toESM(require_react(), 1);
	require_react_dom();
	init_dist$4();
	import_jsx_runtime$70 = require_jsx_runtime();
	Primitive = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul"
	].reduce((primitive, node) => {
		const Slot = /* @__PURE__ */ createSlot(`Primitive.${node}`);
		const Node = import_react$77.forwardRef((props, forwardedRef) => {
			const { asChild, ...primitiveProps } = props;
			const Comp = asChild ? Slot : node;
			if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
			return /* @__PURE__ */ (0, import_jsx_runtime$70.jsx)(Comp, {
				...primitiveProps,
				ref: forwardedRef
			});
		});
		Node.displayName = `Primitive.${node}`;
		return {
			...primitive,
			[node]: Node
		};
	}, {});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Separator/Separator.module.js
var Separator_module_default;
var init_Separator_module = __esmMin((() => {
	Separator_module_default = { separator: "_separator_13qwf_8" };
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-separator@1.1.8_@types+react-dom@19.2.3_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8/node_modules/@radix-ui/react-separator/dist/index.mjs
function isValidOrientation(orientation) {
	return ORIENTATIONS.includes(orientation);
}
var import_react$76, import_jsx_runtime$69, NAME, DEFAULT_ORIENTATION, ORIENTATIONS, Separator$1, Root;
var init_dist$2 = __esmMin((() => {
	import_react$76 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$3();
	import_jsx_runtime$69 = require_jsx_runtime();
	NAME = "Separator";
	DEFAULT_ORIENTATION = "horizontal";
	ORIENTATIONS = ["horizontal", "vertical"];
	Separator$1 = import_react$76.forwardRef((props, forwardedRef) => {
		const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
		const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
		const semanticProps = decorative ? { role: "none" } : {
			"aria-orientation": orientation === "vertical" ? orientation : void 0,
			role: "separator"
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$69.jsx)(Primitive.div, {
			"data-orientation": orientation,
			...semanticProps,
			...domProps,
			ref: forwardedRef
		});
	});
	Separator$1.displayName = NAME;
	Root = Separator$1;
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Separator/Separator.js
var import_classnames$5, import_react$75, import_jsx_runtime$68, SPACING_CUSTOM_PROP, Separator;
var init_Separator = __esmMin((() => {
	init_Separator_module();
	import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$75 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$68 = require_jsx_runtime();
	init_floating_ui_react();
	init_dist$2();
	SPACING_CUSTOM_PROP = "--cpd-separator-spacing";
	Separator = (0, import_react$75.forwardRef)(({ className, spacing, kind = "primary", ...props }, theirRef) => {
		const classes = (0, import_classnames$5.default)(Separator_module_default.separator, className);
		const ourRef = (0, import_react$75.useRef)(null);
		const ref = useMergeRefs$2([ourRef, theirRef]);
		(0, import_react$75.useEffect)(() => {
			const style = ourRef.current?.style;
			if (spacing) style?.setProperty(SPACING_CUSTOM_PROP, spacing);
			else style?.removeProperty(SPACING_CUSTOM_PROP);
		}, [spacing]);
		return /* @__PURE__ */ (0, import_jsx_runtime$68.jsx)(Root, {
			...props,
			className: classes,
			ref,
			"data-kind": kind
		});
	});
	Separator.displayName = "Separator";
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/ToggleMenuItem.js
var import_react$74, import_jsx_runtime$67, ToggleMenuItem;
var init_ToggleMenuItem = __esmMin((() => {
	init_MenuItem();
	init_Toggle();
	import_react$74 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$67 = require_jsx_runtime();
	ToggleMenuItem = (0, import_react$74.forwardRef)(function ToggleMenuItem({ className, Icon, label, onSelect, checked, disabled, onClick }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$67.jsx)(MenuItem, {
			as: "button",
			role: "menuitemcheckbox",
			"aria-checked": checked,
			className,
			Icon,
			label,
			hideChevron: true,
			onSelect,
			disabled,
			onClick,
			children: /* @__PURE__ */ (0, import_jsx_runtime$67.jsx)(ToggleInput, {
				id: (0, import_react$74.useId)(),
				ref,
				"aria-hidden": true,
				tabIndex: -1,
				checked,
				disabled,
				onChange: (0, import_react$74.useCallback)(() => {}, [])
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Menu/CheckboxMenuItem.js
var import_react$73, import_jsx_runtime$66, CheckboxMenuItem;
var init_CheckboxMenuItem = __esmMin((() => {
	init_MenuItem();
	init_Checkbox();
	import_react$73 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$66 = require_jsx_runtime();
	CheckboxMenuItem = (0, import_react$73.forwardRef)(function CheckboxMenuItem({ className, label, onSelect, checked, disabled }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$66.jsx)(MenuItem, {
			as: "button",
			role: "menuitemcheckbox",
			"aria-checked": checked,
			className,
			label,
			hideChevron: true,
			onSelect,
			disabled,
			Icon: /* @__PURE__ */ (0, import_jsx_runtime$66.jsx)(CheckboxInput, {
				id: (0, import_react$73.useId)(),
				ref,
				"aria-hidden": true,
				tabIndex: -1,
				checked,
				disabled,
				onChange: (0, import_react$73.useCallback)(() => {}, [])
			})
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ReleaseAnnouncement/ReleaseAnnouncement.module.js
var ReleaseAnnouncement_module_default;
var init_ReleaseAnnouncement_module = __esmMin((() => {
	ReleaseAnnouncement_module_default = {
		content: "_content_16f2y_8",
		header: "_header_16f2y_37",
		description: "_description_16f2y_43",
		button: "_button_16f2y_48",
		arrow: "_arrow_16f2y_53"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ReleaseAnnouncement/useReleaseAnnouncement.js
/**
* This hook provides the necessary props to create a release announcement.
*/
function useReleaseAnnouncement({ open, header, description, closeLabel, placement, onClick, displayArrow }) {
	const labelId = (0, import_react$72.useId)();
	const descriptionId = (0, import_react$72.useId)();
	const arrowRef = (0, import_react$72.useRef)(null);
	const data = useFloating({
		placement,
		open,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(16),
			shift({ limiter: limitShift({ offset: 50 }) }),
			displayArrow && arrow({ element: arrowRef })
		]
	});
	const role = useRole(data.context);
	const interactions = useInteractions([role]);
	return (0, import_react$72.useMemo)(() => ({
		open,
		...data,
		...interactions,
		labelId,
		descriptionId,
		header,
		description,
		closeLabel,
		onClick,
		displayArrow,
		arrowRef
	}), [
		open,
		role,
		interactions,
		data,
		labelId,
		descriptionId,
		header,
		description,
		closeLabel,
		onClick,
		displayArrow,
		arrowRef
	]);
}
var import_react$72;
var init_useReleaseAnnouncement = __esmMin((() => {
	import_react$72 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_floating_ui_react();
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ReleaseAnnouncement/ReleaseAnnouncementContext.js
/**
* Provides the context for the ReleaseAnnouncement components.
*/
function useReleaseAnnouncementContext() {
	const context = (0, import_react$71.useContext)(ReleaseAnnouncementContext);
	if (context == null) throw new Error("ReleaseAnnouncement components must be wrapped in <ReleaseAnnouncement />");
	return context;
}
var import_react$71, ReleaseAnnouncementContext;
var init_ReleaseAnnouncementContext = __esmMin((() => {
	import_react$71 = /* @__PURE__ */ __toESM(require_react(), 1);
	ReleaseAnnouncementContext = (0, import_react$71.createContext)(null);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ReleaseAnnouncement/ReleaseAnnouncement.js
/**
* The ReleaseAnnouncement component purpose is to inform the user of a new available feature.
* This component is a floating component that will appear next to an anchor.
* @param children - Act as an anchor, the component will be displayed alongside of it.
* @param placement - The placement of the component
*/
function ReleaseAnnouncement({ children, placement = "right", displayArrow = true, ...props }) {
	const context = useReleaseAnnouncement({
		placement,
		displayArrow,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$65.jsxs)(ReleaseAnnouncementContext.Provider, {
		value: context,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(ReleaseAnnouncementAnchor, { children }), /* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(ReleaseAnnouncementContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(ReleaseAnnouncementContent, {}) })]
	});
}
/**
* The anchor for the ReleaseAnnouncement components.
* The Release Announcement will appear next to this element.
* @param children - should be a single valid React element
* @constructor
*/
function ReleaseAnnouncementAnchor({ children }) {
	const context = useReleaseAnnouncementContext();
	const childrenRef = children?.ref;
	const ref = useMergeRefs$2([context.refs.setReference, childrenRef]);
	if (!(0, import_react$70.isValidElement)(children)) throw new Error("ReleaseAnnouncement anchor must be a single valid React element");
	const referenceProps = context.getReferenceProps({
		ref,
		...context.open && { "aria-describedby": context.getFloatingProps().id }
	});
	delete referenceProps["aria-expanded"];
	return (0, import_react$70.cloneElement)(children, referenceProps);
}
/**
* The container for the ReleaseAnnouncement components.
* Manage focus and positioning of the children.
* @param children
*/
function ReleaseAnnouncementContainer({ children }) {
	const { context: floatingContext, arrowRef, displayArrow, ...rest } = useReleaseAnnouncementContext();
	if (!floatingContext.open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(FloatingFocusManager, {
		context: floatingContext,
		modal: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime$65.jsxs)("div", {
			ref: rest.refs.setFloating,
			style: rest.floatingStyles,
			"aria-labelledby": rest.labelId,
			"aria-describedby": rest.descriptionId,
			...rest.getFloatingProps(),
			className: ReleaseAnnouncement_module_default.content,
			children: [displayArrow && /* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(FloatingArrow, {
				ref: arrowRef,
				context: floatingContext,
				width: 20,
				height: 12,
				className: ReleaseAnnouncement_module_default.arrow
			}), children]
		})
	}) });
}
/**
* The content of the ReleaseAnnouncement component.
* ---------------------------------------------------------------
* - The header in a bold text                  -------------    -
* - A description in a regular text           | Close button |  -
* - Description can be on multiple lines       -------------    -
* ---------------------------------------------------------------
*/
function ReleaseAnnouncementContent() {
	const { labelId, descriptionId, header, description, closeLabel, onClick } = useReleaseAnnouncementContext();
	return /* @__PURE__ */ (0, import_jsx_runtime$65.jsxs)(import_jsx_runtime$65.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(Text, {
			as: "h3",
			id: labelId,
			className: ReleaseAnnouncement_module_default.header,
			size: "lg",
			weight: "semibold",
			children: header
		}),
		/* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(Text, {
			as: "span",
			id: descriptionId,
			className: ReleaseAnnouncement_module_default.description,
			size: "sm",
			weight: "regular",
			children: description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime$65.jsx)(Button, {
			size: "md",
			kind: "secondary",
			className: ReleaseAnnouncement_module_default.button,
			onClick,
			children: closeLabel
		})
	] });
}
var import_react$70, import_jsx_runtime$65;
var init_ReleaseAnnouncement = __esmMin((() => {
	init_Text$1();
	init_Button();
	init_ReleaseAnnouncement_module();
	init_useReleaseAnnouncement();
	init_ReleaseAnnouncementContext();
	import_react$70 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$65 = require_jsx_runtime();
	init_floating_ui_react();
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Toast/Toast.module.js
var Toast_module_default;
var init_Toast_module = __esmMin((() => {
	Toast_module_default = {
		"toast-container": "_toast-container_1jkz7_8",
		clickable: "_clickable_1jkz7_33",
		icon: "_icon_1jkz7_55",
		"has-close": "_has-close_1jkz7_59",
		content: "_content_1jkz7_68",
		close: "_close_1jkz7_75"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Toast/Toast.js
var import_classnames$4, import_react$69, import_jsx_runtime$64, Toast;
var init_Toast = __esmMin((() => {
	init_Text$1();
	init_IconButton();
	init_Toast_module();
	import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$69 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_close();
	import_jsx_runtime$64 = require_jsx_runtime();
	Toast = (0, import_react$69.forwardRef)(function Toast({ children, className, Icon, onClick, onClose, tooltip, ...props }, ref) {
		const content = /* @__PURE__ */ (0, import_jsx_runtime$64.jsxs)(Text, {
			as: "div",
			size: "sm",
			weight: "medium",
			className: Toast_module_default.content,
			children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime$64.jsx)(Icon, {
				className: Toast_module_default.icon,
				width: 20,
				height: 20,
				"aria-hidden": true
			}), children]
		});
		if (onClick) return /* @__PURE__ */ (0, import_jsx_runtime$64.jsx)("button", {
			...props,
			ref,
			type: "button",
			onClick,
			className: (0, import_classnames$4.default)(Toast_module_default["toast-container"], Toast_module_default.clickable, className),
			children: content
		});
		const hasCloseButton = Boolean(onClose);
		return /* @__PURE__ */ (0, import_jsx_runtime$64.jsxs)("div", {
			...props,
			ref,
			className: (0, import_classnames$4.default)(Toast_module_default["toast-container"], className, { [Toast_module_default["has-close"]]: hasCloseButton }),
			children: [content, hasCloseButton && /* @__PURE__ */ (0, import_jsx_runtime$64.jsx)(IconButton, {
				size: "24px",
				kind: "secondary",
				noBackground: true,
				tooltip,
				tooltipPlacement: "right",
				className: Toast_module_default.close,
				onClick: onClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime$64.jsx)(close_default, {})
			})]
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Dropdown/Dropdown.module.js
var Dropdown_module_default;
var init_Dropdown_module = __esmMin((() => {
	Dropdown_module_default = {
		container: "_container_1xtut_8",
		"trigger-button": "_trigger-button_1xtut_18",
		chevron: "_chevron_1xtut_34",
		"open-trigger": "_open-trigger_1xtut_41",
		placeholder: "_placeholder_1xtut_58",
		content: "_content_1xtut_62",
		seamless: "_seamless_1xtut_118",
		open: "_open_1xtut_41",
		help: "_help_1xtut_143",
		error: "_error_1xtut_148"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-down.js
function ChevronDownIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$63.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$63.jsx)("path", { d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063" })
	});
}
var import_react$68, import_jsx_runtime$63, chevron_down_default;
var init_chevron_down = __esmMin((() => {
	import_react$68 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$63 = require_jsx_runtime();
	ChevronDownIcon.displayName = "ChevronDownIcon";
	chevron_down_default = (0, import_react$68.forwardRef)(ChevronDownIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/Dropdown/Dropdown.js
/**
* A hook to manage the open state of the dropdown.
*/
function useOpen() {
	const [open, setOpen] = (0, import_react$67.useState)(false);
	const ref = (0, import_react$67.useRef)(null);
	(0, import_react$67.useEffect)(() => {
		const closeIfOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("click", closeIfOutside);
		return () => document.removeEventListener("click", closeIfOutside);
	}, [setOpen]);
	return [
		open,
		setOpen,
		ref
	];
}
/**
* A hook to manage the keyboard shortcuts of the dropdown.
* @param open - the dropdown open state.
* @param setOpen - the dropdown open state setter.
* @param setValue - set the selected value and text
*/
function useKeyboardShortcut(open, setOpen, setValue) {
	const listRef = (0, import_react$67.useRef)(null);
	return {
		listRef,
		onComboboxKeyDown: (0, import_react$67.useCallback)(({ key }) => {
			switch (key) {
				case "Escape":
					setOpen(false);
					break;
				case "ArrowDown":
					setOpen(true);
					if (open) (listRef.current?.firstElementChild)?.focus();
					break;
				case "ArrowUp":
					setOpen(true);
					break;
				case "Home":
					setOpen(true);
					Promise.resolve().then(() => {
						(listRef.current?.firstElementChild)?.focus();
					});
					break;
				case "End":
					setOpen(true);
					Promise.resolve().then(() => {
						(listRef.current?.lastElementChild)?.focus();
					});
					break;
			}
		}, [
			listRef,
			open,
			setOpen
		]),
		onOptionKeyDown: (0, import_react$67.useCallback)((evt, value) => {
			const { key, altKey } = evt;
			evt.stopPropagation();
			evt.preventDefault();
			switch (key) {
				case "Enter":
				case " ":
					setValue(value);
					setOpen(false);
					break;
				case "Tab":
				case "Escape":
					setOpen(false);
					break;
				case "ArrowDown": {
					const currentFocus = document.activeElement;
					if (listRef.current?.contains(currentFocus) && currentFocus) currentFocus.nextElementSibling?.focus();
					break;
				}
				case "ArrowUp":
					if (altKey) {
						setValue(value);
						setOpen(false);
					} else {
						const currentFocus = document.activeElement;
						if (listRef.current?.contains(currentFocus) && currentFocus) currentFocus.previousElementSibling?.focus();
					}
					break;
				case "Home":
					(listRef.current?.firstElementChild)?.focus();
					break;
				case "End":
					(listRef.current?.lastElementChild)?.focus();
					break;
			}
		}, [
			listRef,
			setValue,
			setOpen
		])
	};
}
var import_classnames$3, import_react$67, import_jsx_runtime$62, Dropdown, DropdownItem;
var init_Dropdown = __esmMin((() => {
	init_Dropdown_module();
	import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$67 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_error_solid();
	import_jsx_runtime$62 = require_jsx_runtime();
	init_check();
	init_chevron_down();
	Dropdown = (0, import_react$67.forwardRef)(function Dropdown({ className, label, placeholder, helpLabel, onValueChange, error, value: controlledValue, defaultValue, values, trigger, ...props }, ref) {
		const [uncontrolledValue, setUncontrolledValue] = (0, import_react$67.useState)(defaultValue);
		const value = controlledValue ?? uncontrolledValue;
		const text = (0, import_react$67.useMemo)(() => value === void 0 ? placeholder : values.find(([v]) => v === value)?.[1] ?? placeholder, [
			value,
			values,
			placeholder
		]);
		const setValue = (0, import_react$67.useCallback)((value) => {
			setUncontrolledValue(value);
			onValueChange?.(value);
		}, [setUncontrolledValue, onValueChange]);
		const [open, setOpen, dropdownRef] = useOpen();
		const { listRef, onComboboxKeyDown, onOptionKeyDown } = useKeyboardShortcut(open, setOpen, setValue);
		const buttonRef = (0, import_react$67.useRef)(null);
		(0, import_react$67.useEffect)(() => {
			if (value !== void 0) buttonRef.current?.focus();
		}, [value]);
		const hasPlaceholder = text === placeholder;
		const buttonClasses = (0, import_classnames$3.default)({
			[Dropdown_module_default["trigger-button"]]: true,
			[Dropdown_module_default.placeholder]: hasPlaceholder,
			[Dropdown_module_default["open-trigger"]]: open
		});
		const contentClasses = (0, import_classnames$3.default)(Dropdown_module_default.content, {
			[Dropdown_module_default.open]: open,
			[Dropdown_module_default.seamless]: !trigger
		});
		/**
		* Ids for accessibility.
		*/
		const labelId = (0, import_react$67.useId)();
		const contentId = (0, import_react$67.useId)();
		const combinedRef = (element) => {
			buttonRef.current = element;
			if (typeof ref === "function") ref(element);
			else if (ref) ref.current = element;
		};
		const triggerProps = {
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-controls": contentId,
			"aria-expanded": open,
			onClick: () => setOpen((_open) => !_open),
			onKeyDown: onComboboxKeyDown
		};
		if (label) triggerProps["aria-labelledby"] = labelId;
		return /* @__PURE__ */ (0, import_jsx_runtime$62.jsxs)("div", {
			ref: dropdownRef,
			className: (0, import_classnames$3.default)(className, Dropdown_module_default.container),
			"aria-invalid": Boolean(error),
			children: [
				label && /* @__PURE__ */ (0, import_jsx_runtime$62.jsx)("label", {
					id: labelId,
					children: label
				}),
				trigger ? trigger(triggerProps) : /* @__PURE__ */ (0, import_jsx_runtime$62.jsxs)("button", {
					className: buttonClasses,
					...triggerProps,
					ref: combinedRef,
					...props,
					children: [text, /* @__PURE__ */ (0, import_jsx_runtime$62.jsx)(chevron_down_default, {
						className: Dropdown_module_default.chevron,
						width: "24",
						height: "24"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$62.jsx)("div", {
					className: contentClasses,
					children: /* @__PURE__ */ (0, import_jsx_runtime$62.jsx)("ul", {
						ref: listRef,
						id: contentId,
						role: "listbox",
						className: Dropdown_module_default.content,
						children: values.map(([v, text]) => /* @__PURE__ */ (0, import_jsx_runtime$62.jsx)(DropdownItem, {
							isDisplayed: open,
							isSelected: value === v,
							onClick: () => {
								setOpen(false);
								setValue(v);
							},
							onKeyDown: (e) => onOptionKeyDown(e, v),
							children: text
						}, v))
					})
				}),
				!error && helpLabel && /* @__PURE__ */ (0, import_jsx_runtime$62.jsx)("span", {
					className: Dropdown_module_default.help,
					children: helpLabel
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime$62.jsxs)("span", {
					className: Dropdown_module_default.error,
					children: [/* @__PURE__ */ (0, import_jsx_runtime$62.jsx)(error_solid_default, {
						width: "20",
						height: "20"
					}), error]
				})
			]
		});
	});
	DropdownItem = (0, import_react$67.memo)(function DropdownItem({ children, isSelected, isDisplayed, ...props }) {
		const ref = (0, import_react$67.useRef)(null);
		(0, import_react$67.useEffect)(() => {
			if (isSelected && isDisplayed) ref.current?.focus();
		}, [isSelected, isDisplayed]);
		return /* @__PURE__ */ (0, import_jsx_runtime$62.jsxs)("li", {
			tabIndex: 0,
			role: "option",
			ref,
			"aria-selected": isSelected,
			...props,
			children: [
				children,
				" ",
				isSelected && /* @__PURE__ */ (0, import_jsx_runtime$62.jsx)(check_default, {
					width: "20",
					height: "20"
				})
			]
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
function ChevronLeftIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$61.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$61.jsx)("path", { d: "m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275" })
	});
}
var import_react$66, import_jsx_runtime$61, chevron_left_default;
var init_chevron_left = __esmMin((() => {
	import_react$66 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$61 = require_jsx_runtime();
	ChevronLeftIcon.displayName = "ChevronLeftIcon";
	chevron_left_default = (0, import_react$66.forwardRef)(ChevronLeftIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ChatFilter/ChatFilter.module.js
var ChatFilter_module_default;
var init_ChatFilter_module = __esmMin((() => {
	ChatFilter_module_default = { "chat-filter": "_chat-filter_5qdp0_8" };
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ChatFilter/ChatFilter.js
var import_react$65, import_jsx_runtime$60, ChatFilter;
var init_ChatFilter = __esmMin((() => {
	init_UnstyledButton();
	init_ChatFilter_module();
	import_react$65 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$60 = require_jsx_runtime();
	ChatFilter = (0, import_react$65.forwardRef)(function ChatFilter({ children, selected, ...props }, ref) {
		return /* @__PURE__ */ (0, import_jsx_runtime$60.jsx)(UnstyledButton, {
			...props,
			className: ChatFilter_module_default["chat-filter"],
			"aria-selected": selected,
			as: "button",
			ref,
			tabIndex: 0,
			children
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ActivityMarker/UnreadCounter.module.js
var UnreadCounter_module_default;
var init_UnreadCounter_module = __esmMin((() => {
	UnreadCounter_module_default = { "unread-counter": "_unread-counter_1147r_8" };
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ActivityMarker/UnreadCounter.js
function UnreadCounter({ count, ...props }) {
	if (count === null) return /* @__PURE__ */ (0, import_jsx_runtime$59.jsx)("div", {
		...props,
		className: UnreadCounter_module_default["unread-counter"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$59.jsx)("span", {
		...props,
		className: UnreadCounter_module_default["unread-counter"],
		children: count
	});
}
var import_jsx_runtime$59;
var init_UnreadCounter = __esmMin((() => {
	init_UnreadCounter_module();
	require_react();
	import_jsx_runtime$59 = require_jsx_runtime();
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ActivityMarker/Unread.module.js
var Unread_module_default;
var init_Unread_module = __esmMin((() => {
	Unread_module_default = { unread: "_unread_cti0f_8" };
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/components/ActivityMarker/Unread.js
function Unread(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$58.jsx)("div", {
		...props,
		className: Unread_module_default.unread,
		children: /* @__PURE__ */ (0, import_jsx_runtime$58.jsx)("div", {})
	});
}
var import_jsx_runtime$58;
var init_Unread = __esmMin((() => {
	init_Unread_module();
	require_react();
	import_jsx_runtime$58 = require_jsx_runtime();
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-web@9.9.0_@fontsource+inconsolata@5.2.8_@fontsource+inter@5.3.0_@ty_251620f615c5d06a3996de7dfa279870/node_modules/@vector-im/compound-web/dist/index.js
var init_dist$1 = __esmMin((() => {
	init_Text$1();
	init_Button();
	init_IndicatorIcon();
	init_TooltipProvider();
	init_Tooltip();
	init_IconButton();
	init_Avatar();
	init_AvatarStack();
	init_Badge();
	init_MenuTitle();
	init_ContextMenu();
	init_Heading();
	init_Link();
	init_Menu();
	init_MenuItem();
	init_SubMenu();
	init_Text();
	init_InlineSpinner();
	init_Root();
	init_Field();
	init_Submit();
	init_RadioMenuItem();
	init_Separator();
	init_ToggleMenuItem();
	init_CheckboxMenuItem();
	init_ReleaseAnnouncement();
	init_Toast();
	init_Dropdown();
	init_ChatFilter();
	init_UnreadCounter();
	init_Unread();
}));
//#endregion
//#region src/core/utils/Flex/Flex.module.css
var flex, Flex_module_default;
var init_Flex_module = __esmMin((() => {
	flex = "_flex_mceqs_10";
	Flex_module_default = { flex };
}));
//#endregion
//#region src/core/utils/Flex/Flex.ts
/**
* A flexbox container helper
*/
function Flex({ as = "div", display = "flex", direction = "row", align = "start", justify = "start", gap = "0", wrap = "nowrap", className, children, ...props }) {
	const style = (0, import_react$62.useMemo)(() => ({
		"--mx-flex-display": display,
		"--mx-flex-direction": direction,
		"--mx-flex-align": align,
		"--mx-flex-justify": justify,
		"--mx-flex-gap": gap,
		"--mx-flex-wrap": wrap
	}), [
		align,
		direction,
		display,
		gap,
		justify,
		wrap
	]);
	return import_react$62.createElement(as, {
		...props,
		className: (0, import_classnames$2.default)(Flex_module_default.flex, className),
		style
	}, children);
}
var import_classnames$2, import_react$62;
var init_Flex$1 = __esmMin((() => {
	import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	import_react$62 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Flex_module();
	Flex.__docgenInfo = {
		"description": "A flexbox container helper",
		"methods": [],
		"displayName": "Flex",
		"props": {
			"as": {
				"required": false,
				"tsType": { "name": "T" },
				"description": "The type of the HTML element\n@default div",
				"defaultValue": {
					"value": "\"div\"",
					"computed": false
				}
			},
			"className": {
				"required": false,
				"tsType": { "name": "string" },
				"description": "The CSS class name."
			},
			"display": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"flex\" | \"inline-flex\"",
					"elements": [{
						"name": "literal",
						"value": "\"flex\""
					}, {
						"name": "literal",
						"value": "\"inline-flex\""
					}]
				},
				"description": "The type of flex container\n@default flex",
				"defaultValue": {
					"value": "\"flex\"",
					"computed": false
				}
			},
			"direction": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"row\" | \"column\" | \"row-reverse\" | \"column-reverse\"",
					"elements": [
						{
							"name": "literal",
							"value": "\"row\""
						},
						{
							"name": "literal",
							"value": "\"column\""
						},
						{
							"name": "literal",
							"value": "\"row-reverse\""
						},
						{
							"name": "literal",
							"value": "\"column-reverse\""
						}
					]
				},
				"description": "The flow direction of the flex children\n@default row",
				"defaultValue": {
					"value": "\"row\"",
					"computed": false
				}
			},
			"align": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"start\" | \"center\" | \"end\" | \"baseline\" | \"stretch\" | \"normal\"",
					"elements": [
						{
							"name": "literal",
							"value": "\"start\""
						},
						{
							"name": "literal",
							"value": "\"center\""
						},
						{
							"name": "literal",
							"value": "\"end\""
						},
						{
							"name": "literal",
							"value": "\"baseline\""
						},
						{
							"name": "literal",
							"value": "\"stretch\""
						},
						{
							"name": "literal",
							"value": "\"normal\""
						}
					]
				},
				"description": "The alignment of the flex children\n@default start",
				"defaultValue": {
					"value": "\"start\"",
					"computed": false
				}
			},
			"justify": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"start\" | \"center\" | \"end\" | \"space-between\"",
					"elements": [
						{
							"name": "literal",
							"value": "\"start\""
						},
						{
							"name": "literal",
							"value": "\"center\""
						},
						{
							"name": "literal",
							"value": "\"end\""
						},
						{
							"name": "literal",
							"value": "\"space-between\""
						}
					]
				},
				"description": "The justification of the flex children\n@default start",
				"defaultValue": {
					"value": "\"start\"",
					"computed": false
				}
			},
			"wrap": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"wrap\" | \"nowrap\" | \"wrap-reverse\"",
					"elements": [
						{
							"name": "literal",
							"value": "\"wrap\""
						},
						{
							"name": "literal",
							"value": "\"nowrap\""
						},
						{
							"name": "literal",
							"value": "\"wrap-reverse\""
						}
					]
				},
				"description": "The wrapping of the flex children\n@default nowrap",
				"defaultValue": {
					"value": "\"nowrap\"",
					"computed": false
				}
			},
			"gap": {
				"required": false,
				"tsType": { "name": "string" },
				"description": "The spacing between the flex children, expressed with the CSS unit\n@default 0",
				"defaultValue": {
					"value": "\"0\"",
					"computed": false
				}
			},
			"onClick": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(e: React.MouseEvent) => void",
					"signature": {
						"arguments": [{
							"type": {
								"name": "ReactMouseEvent",
								"raw": "React.MouseEvent"
							},
							"name": "e"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "the on click event callback"
			}
		}
	};
}));
//#endregion
//#region src/core/utils/Flex/index.ts
var init_Flex = __esmMin((() => {
	init_Flex$1();
}));
//#endregion
//#region src/core/viewmodel/Disposables.ts
var init_Disposables = __esmMin((() => {}));
//#endregion
//#region src/core/viewmodel/Snapshot.ts
var init_Snapshot = __esmMin((() => {}));
//#endregion
//#region src/core/viewmodel/ViewModelSubscriptions.ts
var init_ViewModelSubscriptions = __esmMin((() => {}));
//#endregion
//#region src/core/viewmodel/BaseViewModel.ts
var init_BaseViewModel = __esmMin((() => {}));
//#endregion
//#region src/core/viewmodel/MockViewModel.ts
var MockViewModel;
var init_MockViewModel = __esmMin((() => {
	MockViewModel = class {
		snapshot;
		constructor(snapshot) {
			this.snapshot = snapshot;
		}
		getSnapshot = () => {
			return this.snapshot;
		};
		subscribe(listener) {
			return () => void 0;
		}
	};
}));
var init_useCreateAutoDisposedViewModel = __esmMin((() => {
	require_react();
}));
//#endregion
//#region src/core/viewmodel/useMockedViewModel.ts
/**
* Hook helper to return a mocked view model created with the given snapshot and actions.
* This is useful for testing components in isolation with a mocked view model and allows to use primitive types in stories.
*
* @param snapshot
* @param actions
*/
function useMockedViewModel(snapshot, actions) {
	return (0, import_react$60.useMemo)(() => {
		const vm = new MockViewModel(snapshot);
		Object.assign(vm, actions);
		return vm;
	}, [snapshot, actions]);
}
var import_react$60;
var init_useMockedViewModel = __esmMin((() => {
	import_react$60 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_MockViewModel();
}));
//#endregion
//#region src/core/viewmodel/useViewModel.ts
/**
* A small wrapper around useSyncExternalStore to use a view model in a shared component view
* @param vm The view model to use
* @returns The current snapshot
*/
function useViewModel(vm) {
	return (0, import_react$59.useSyncExternalStore)(vm.subscribe, vm.getSnapshot, vm.getSnapshot);
}
var import_react$59;
var init_useViewModel = __esmMin((() => {
	import_react$59 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region src/core/viewmodel/index.ts
var init_viewmodel = __esmMin((() => {
	init_BaseViewModel();
	init_Disposables();
	init_Snapshot();
	init_ViewModelSubscriptions();
	init_MockViewModel();
	init_useCreateAutoDisposedViewModel();
	init_useMockedViewModel();
	init_useViewModel();
}));
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0/node_modules/matrix-web-i18n/lib/utils.js
/**
* Returns a language string with underscores replaced with
* hyphens, and lower-cased.
*
* @param {string} language The language string to be normalized
* @returns {string} The normalized language string
*/
function normalizeLanguageKey(language) {
	return language.toLowerCase().replace("_", "-");
}
/**
* Turns a language string, normalises it,
* (see normalizeLanguageKey) into an array of language strings
* with fallback to generic languages
* (e.g. 'pt-BR' => ['pt-br', 'pt'])
*
* @param language The input language string
* @return a list of normalised languages
*/
function getNormalizedLanguageKeys(language) {
	const languageKeys = [];
	const normalizedLanguage = normalizeLanguageKey(language);
	const languageParts = normalizedLanguage.split("-");
	if (languageParts.length === 2 && languageParts[0] === languageParts[1]) languageKeys.push(languageParts[0]);
	else {
		languageKeys.push(normalizedLanguage);
		if (languageParts.length === 2) languageKeys.push(languageParts[0]);
	}
	return languageKeys;
}
var init_utils = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/matrix-web-i18n@3.6.0/node_modules/matrix-web-i18n/lib/index.js
var init_lib = __esmMin((() => {
	init_utils();
}));
//#endregion
//#region ../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
var require_extend = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var defineProperty = Object.defineProperty;
	var gOPD = Object.getOwnPropertyDescriptor;
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === "function") return Array.isArray(arr);
		return toStr.call(arr) === "[object Array]";
	};
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== "[object Object]") return false;
		var hasOwnConstructor = hasOwn.call(obj, "constructor");
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
		var key;
		for (key in obj);
		return typeof key === "undefined" || hasOwn.call(obj, key);
	};
	var setProperty = function setProperty(target, options) {
		if (defineProperty && options.name === "__proto__") defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
		else target[options.name] = options.newValue;
	};
	var getProperty = function getProperty(obj, name) {
		if (name === "__proto__") {
			if (!hasOwn.call(obj, name)) return;
			else if (gOPD) return gOPD(obj, name).value;
		}
		return obj[name];
	};
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[1] || {};
			i = 2;
		}
		if (target == null || typeof target !== "object" && typeof target !== "function") target = {};
		for (; i < length; ++i) {
			options = arguments[i];
			if (options != null) for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);
				if (target !== copy) {
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else clone = src && isPlainObject(src) ? src : {};
						setProperty(target, {
							name,
							newValue: extend(deep, clone, copy)
						});
					} else if (typeof copy !== "undefined") setProperty(target, {
						name,
						newValue: copy
					});
				}
			}
		}
		return target;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js
var require_shams$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./shams')} */
	module.exports = function hasSymbols() {
		if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
		if (typeof Symbol.iterator === "symbol") return true;
		/** @type {{ [k in symbol]?: unknown }} */
		var obj = {};
		var sym = Symbol("test");
		var symObj = Object(sym);
		if (typeof sym === "string") return false;
		if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
		if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) return false;
		if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
		if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) return false;
		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
		if (typeof Object.getOwnPropertyDescriptor === "function") {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
		}
		return true;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js
var require_shams = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasSymbols = require_shams$1();
	/** @type {import('.')} */
	module.exports = function hasToStringTagShams() {
		return hasSymbols() && !!Symbol.toStringTag;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js
var require_es_object_atoms = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('.')} */
	module.exports = Object;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js
var require_es_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('.')} */
	module.exports = Error;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js
var require_eval = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./eval')} */
	module.exports = EvalError;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js
var require_range = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./range')} */
	module.exports = RangeError;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js
var require_ref = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./ref')} */
	module.exports = ReferenceError;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js
var require_syntax = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./syntax')} */
	module.exports = SyntaxError;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js
var require_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./type')} */
	module.exports = TypeError;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js
var require_uri = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./uri')} */
	module.exports = URIError;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js
var require_abs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./abs')} */
	module.exports = Math.abs;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js
var require_floor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./floor')} */
	module.exports = Math.floor;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js
var require_max = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./max')} */
	module.exports = Math.max;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js
var require_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./min')} */
	module.exports = Math.min;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js
var require_pow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./pow')} */
	module.exports = Math.pow;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js
var require_round = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./round')} */
	module.exports = Math.round;
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js
var require_isNaN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./isNaN')} */
	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js
var require_sign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $isNaN = require_isNaN();
	/** @type {import('./sign')} */
	module.exports = function sign(number) {
		if ($isNaN(number) || number === 0) return number;
		return number < 0 ? -1 : 1;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js
var require_gOPD = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./gOPD')} */
	module.exports = Object.getOwnPropertyDescriptor;
}));
//#endregion
//#region ../../node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js
var require_gopd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('.')} */
	var $gOPD = require_gOPD();
	if ($gOPD) try {
		$gOPD([], "length");
	} catch (e) {
		$gOPD = null;
	}
	module.exports = $gOPD;
}));
//#endregion
//#region ../../node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js
var require_es_define_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('.')} */
	var $defineProperty = Object.defineProperty || false;
	if ($defineProperty) try {
		$defineProperty({}, "a", { value: 1 });
	} catch (e) {
		$defineProperty = false;
	}
	module.exports = $defineProperty;
}));
//#endregion
//#region ../../node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js
var require_has_symbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var origSymbol = typeof Symbol !== "undefined" && Symbol;
	var hasSymbolSham = require_shams$1();
	/** @type {import('.')} */
	module.exports = function hasNativeSymbols() {
		if (typeof origSymbol !== "function") return false;
		if (typeof Symbol !== "function") return false;
		if (typeof origSymbol("foo") !== "symbol") return false;
		if (typeof Symbol("bar") !== "symbol") return false;
		return hasSymbolSham();
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./Reflect.getPrototypeOf')} */
	module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
}));
//#endregion
//#region ../../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./Object.getPrototypeOf')} */
	module.exports = require_es_object_atoms().getPrototypeOf || null;
}));
//#endregion
//#region ../../node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js
var require_implementation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
	var toStr = Object.prototype.toString;
	var max = Math.max;
	var funcType = "[object Function]";
	var concatty = function concatty(a, b) {
		var arr = [];
		for (var i = 0; i < a.length; i += 1) arr[i] = a[i];
		for (var j = 0; j < b.length; j += 1) arr[j + a.length] = b[j];
		return arr;
	};
	var slicy = function slicy(arrLike, offset) {
		var arr = [];
		for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) arr[j] = arrLike[i];
		return arr;
	};
	var joiny = function(arr, joiner) {
		var str = "";
		for (var i = 0; i < arr.length; i += 1) {
			str += arr[i];
			if (i + 1 < arr.length) str += joiner;
		}
		return str;
	};
	module.exports = function bind(that) {
		var target = this;
		if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
		var args = slicy(arguments, 1);
		var bound;
		var binder = function() {
			if (this instanceof bound) {
				var result = target.apply(this, concatty(args, arguments));
				if (Object(result) === result) return result;
				return this;
			}
			return target.apply(that, concatty(args, arguments));
		};
		var boundLength = max(0, target.length - args.length);
		var boundArgs = [];
		for (var i = 0; i < boundLength; i++) boundArgs[i] = "$" + i;
		bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
		if (target.prototype) {
			var Empty = function Empty() {};
			Empty.prototype = target.prototype;
			bound.prototype = new Empty();
			Empty.prototype = null;
		}
		return bound;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js
var require_function_bind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var implementation = require_implementation();
	module.exports = Function.prototype.bind || implementation;
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./functionCall')} */
	module.exports = Function.prototype.call;
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./functionApply')} */
	module.exports = Function.prototype.apply;
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('./reflectApply')} */
	module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind = require_function_bind();
	var $apply = require_functionApply();
	var $call = require_functionCall();
	/** @type {import('./actualApply')} */
	module.exports = require_reflectApply() || bind.call($call, $apply);
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind = require_function_bind();
	var $TypeError = require_type();
	var $call = require_functionCall();
	var $actualApply = require_actualApply();
	/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
	module.exports = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== "function") throw new $TypeError("a function is required");
		return $actualApply(bind, $call, args);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var callBind = require_call_bind_apply_helpers();
	var gOPD = require_gopd();
	var hasProtoAccessor;
	try {
		hasProtoAccessor = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__");
	var $Object = Object;
	var $getPrototypeOf = $Object.getPrototypeOf;
	/** @type {import('./get')} */
	module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
		return $getPrototypeOf(value == null ? value : $Object(value));
	} : false;
}));
//#endregion
//#region ../../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js
var require_get_proto = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reflectGetProto = require_Reflect_getPrototypeOf();
	var originalGetProto = require_Object_getPrototypeOf();
	var getDunderProto = require_get();
	/** @type {import('.')} */
	module.exports = reflectGetProto ? function getProto(O) {
		return reflectGetProto(O);
	} : originalGetProto ? function getProto(O) {
		if (!O || typeof O !== "object" && typeof O !== "function") throw new TypeError("getProto: not an object");
		return originalGetProto(O);
	} : getDunderProto ? function getProto(O) {
		return getDunderProto(O);
	} : null;
}));
//#endregion
//#region ../../node_modules/.pnpm/hasown@2.0.4/node_modules/hasown/index.js
var require_hasown = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	/** @type {import('.')} */
	module.exports = require_function_bind().call(call, $hasOwn);
}));
//#endregion
//#region ../../node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js
var require_get_intrinsic = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var undefined;
	var $Object = require_es_object_atoms();
	var $Error = require_es_errors();
	var $EvalError = require_eval();
	var $RangeError = require_range();
	var $ReferenceError = require_ref();
	var $SyntaxError = require_syntax();
	var $TypeError = require_type();
	var $URIError = require_uri();
	var abs = require_abs();
	var floor = require_floor();
	var max = require_max();
	var min = require_min();
	var pow = require_pow();
	var round = require_round();
	var sign = require_sign();
	var $Function = Function;
	var getEvalledConstructor = function(expressionSyntax) {
		try {
			return $Function("\"use strict\"; return (" + expressionSyntax + ").constructor;")();
		} catch (e) {}
	};
	var $gOPD = require_gopd();
	var $defineProperty = require_es_define_property();
	var throwTypeError = function() {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD ? function() {
		try {
			arguments.callee;
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				return $gOPD(arguments, "callee").get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}() : throwTypeError;
	var hasSymbols = require_has_symbols()();
	var getProto = require_get_proto();
	var $ObjectGPO = require_Object_getPrototypeOf();
	var $ReflectGPO = require_Reflect_getPrototypeOf();
	var $apply = require_functionApply();
	var $call = require_functionCall();
	var needsEval = {};
	var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
	var INTRINSICS = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
		"%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
		"%AsyncFromSyncIteratorPrototype%": undefined,
		"%AsyncFunction%": needsEval,
		"%AsyncGenerator%": needsEval,
		"%AsyncGeneratorFunction%": needsEval,
		"%AsyncIteratorPrototype%": needsEval,
		"%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
		"%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
		"%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
		"%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
		"%Boolean%": Boolean,
		"%DataView%": typeof DataView === "undefined" ? undefined : DataView,
		"%Date%": Date,
		"%decodeURI%": decodeURI,
		"%decodeURIComponent%": decodeURIComponent,
		"%encodeURI%": encodeURI,
		"%encodeURIComponent%": encodeURIComponent,
		"%Error%": $Error,
		"%eval%": eval,
		"%EvalError%": $EvalError,
		"%Float16Array%": typeof Float16Array === "undefined" ? undefined : Float16Array,
		"%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
		"%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
		"%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
		"%Function%": $Function,
		"%GeneratorFunction%": needsEval,
		"%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
		"%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
		"%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
		"%isFinite%": isFinite,
		"%isNaN%": isNaN,
		"%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
		"%JSON%": typeof JSON === "object" ? JSON : undefined,
		"%Map%": typeof Map === "undefined" ? undefined : Map,
		"%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
		"%Math%": Math,
		"%Number%": Number,
		"%Object%": $Object,
		"%Object.getOwnPropertyDescriptor%": $gOPD,
		"%parseFloat%": parseFloat,
		"%parseInt%": parseInt,
		"%Promise%": typeof Promise === "undefined" ? undefined : Promise,
		"%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
		"%RangeError%": $RangeError,
		"%ReferenceError%": $ReferenceError,
		"%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
		"%RegExp%": RegExp,
		"%Set%": typeof Set === "undefined" ? undefined : Set,
		"%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
		"%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
		"%String%": String,
		"%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
		"%Symbol%": hasSymbols ? Symbol : undefined,
		"%SyntaxError%": $SyntaxError,
		"%ThrowTypeError%": ThrowTypeError,
		"%TypedArray%": TypedArray,
		"%TypeError%": $TypeError,
		"%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
		"%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
		"%URIError%": $URIError,
		"%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
		"%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
		"%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet,
		"%Function.prototype.call%": $call,
		"%Function.prototype.apply%": $apply,
		"%Object.defineProperty%": $defineProperty,
		"%Object.getPrototypeOf%": $ObjectGPO,
		"%Math.abs%": abs,
		"%Math.floor%": floor,
		"%Math.max%": max,
		"%Math.min%": min,
		"%Math.pow%": pow,
		"%Math.round%": round,
		"%Math.sign%": sign,
		"%Reflect.getPrototypeOf%": $ReflectGPO
	};
	if (getProto) try {
		null.error;
	} catch (e) {
		INTRINSICS["%Error.prototype%"] = getProto(getProto(e));
	}
	var doEval = function doEval(name) {
		var value;
		if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
		else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
		else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
		else if (name === "%AsyncGenerator%") {
			var fn = doEval("%AsyncGeneratorFunction%");
			if (fn) value = fn.prototype;
		} else if (name === "%AsyncIteratorPrototype%") {
			var gen = doEval("%AsyncGenerator%");
			if (gen && getProto) value = getProto(gen.prototype);
		}
		INTRINSICS[name] = value;
		return value;
	};
	var LEGACY_ALIASES = {
		__proto__: null,
		"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
		"%ArrayPrototype%": ["Array", "prototype"],
		"%ArrayProto_entries%": [
			"Array",
			"prototype",
			"entries"
		],
		"%ArrayProto_forEach%": [
			"Array",
			"prototype",
			"forEach"
		],
		"%ArrayProto_keys%": [
			"Array",
			"prototype",
			"keys"
		],
		"%ArrayProto_values%": [
			"Array",
			"prototype",
			"values"
		],
		"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
		"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
		"%AsyncGeneratorPrototype%": [
			"AsyncGeneratorFunction",
			"prototype",
			"prototype"
		],
		"%BooleanPrototype%": ["Boolean", "prototype"],
		"%DataViewPrototype%": ["DataView", "prototype"],
		"%DatePrototype%": ["Date", "prototype"],
		"%ErrorPrototype%": ["Error", "prototype"],
		"%EvalErrorPrototype%": ["EvalError", "prototype"],
		"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
		"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
		"%FunctionPrototype%": ["Function", "prototype"],
		"%Generator%": ["GeneratorFunction", "prototype"],
		"%GeneratorPrototype%": [
			"GeneratorFunction",
			"prototype",
			"prototype"
		],
		"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
		"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
		"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
		"%JSONParse%": ["JSON", "parse"],
		"%JSONStringify%": ["JSON", "stringify"],
		"%MapPrototype%": ["Map", "prototype"],
		"%NumberPrototype%": ["Number", "prototype"],
		"%ObjectPrototype%": ["Object", "prototype"],
		"%ObjProto_toString%": [
			"Object",
			"prototype",
			"toString"
		],
		"%ObjProto_valueOf%": [
			"Object",
			"prototype",
			"valueOf"
		],
		"%PromisePrototype%": ["Promise", "prototype"],
		"%PromiseProto_then%": [
			"Promise",
			"prototype",
			"then"
		],
		"%Promise_all%": ["Promise", "all"],
		"%Promise_reject%": ["Promise", "reject"],
		"%Promise_resolve%": ["Promise", "resolve"],
		"%RangeErrorPrototype%": ["RangeError", "prototype"],
		"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
		"%RegExpPrototype%": ["RegExp", "prototype"],
		"%SetPrototype%": ["Set", "prototype"],
		"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
		"%StringPrototype%": ["String", "prototype"],
		"%SymbolPrototype%": ["Symbol", "prototype"],
		"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
		"%TypedArrayPrototype%": ["TypedArray", "prototype"],
		"%TypeErrorPrototype%": ["TypeError", "prototype"],
		"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
		"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
		"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
		"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
		"%URIErrorPrototype%": ["URIError", "prototype"],
		"%WeakMapPrototype%": ["WeakMap", "prototype"],
		"%WeakSetPrototype%": ["WeakSet", "prototype"]
	};
	var bind = require_function_bind();
	var hasOwn = require_hasown();
	var $concat = bind.call($call, Array.prototype.concat);
	var $spliceApply = bind.call($apply, Array.prototype.splice);
	var $replace = bind.call($call, String.prototype.replace);
	var $strSlice = bind.call($call, String.prototype.slice);
	var $exec = bind.call($call, RegExp.prototype.exec);
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g;
	var stringToPath = function stringToPath(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
		else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
		var result = [];
		$replace(string, rePropName, function(match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
		});
		return result;
	};
	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = "%" + alias[0] + "%";
		}
		if (hasOwn(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) value = doEval(intrinsicName);
			if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
			return {
				alias,
				name: intrinsicName,
				value
			};
		}
		throw new $SyntaxError("intrinsic " + name + " does not exist!");
	};
	module.exports = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError("\"allowMissing\" argument must be a boolean");
		if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var parts = stringToPath(name);
		var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
		var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
		var intrinsicRealName = intrinsic.name;
		var value = intrinsic.value;
		var skipFurtherCaching = false;
		var alias = intrinsic.alias;
		if (alias) {
			intrinsicBaseName = alias[0];
			$spliceApply(parts, $concat([0, 1], alias));
		}
		for (var i = 1, isOwn = true; i < parts.length; i += 1) {
			var part = parts[i];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if ((first === "\"" || first === "'" || first === "`" || last === "\"" || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
			if (part === "constructor" || !isOwn) skipFurtherCaching = true;
			intrinsicBaseName += "." + part;
			intrinsicRealName = "%" + intrinsicBaseName + "%";
			if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
			else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
					return;
				}
				if ($gOPD && i + 1 >= parts.length) {
					var desc = $gOPD(value, part);
					isOwn = !!desc;
					if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
					else value = value[part];
				} else {
					isOwn = hasOwn(value, part);
					value = value[part];
				}
				if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
			}
		}
		return value;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js
var require_call_bound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var GetIntrinsic = require_get_intrinsic();
	var callBindBasic = require_call_bind_apply_helpers();
	/** @type {(thisArg: string, searchString: string, position?: number) => number} */
	var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
	/** @type {import('.')} */
	module.exports = function callBoundIntrinsic(name, allowMissing) {
		var intrinsic = GetIntrinsic(name, !!allowMissing);
		if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBindBasic([intrinsic]);
		return intrinsic;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/is-arguments@1.2.0/node_modules/is-arguments/index.js
var require_is_arguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasToStringTag = require_shams()();
	var $toString = require_call_bound()("Object.prototype.toString");
	/** @type {import('.')} */
	var isStandardArguments = function isArguments(value) {
		if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
		return $toString(value) === "[object Arguments]";
	};
	/** @type {import('.')} */
	var isLegacyArguments = function isArguments(value) {
		if (isStandardArguments(value)) return true;
		return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
	};
	var supportsStandardArguments = function() {
		return isStandardArguments(arguments);
	}();
	isStandardArguments.isLegacyArguments = isLegacyArguments;
	/** @type {import('.')} */
	module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
}));
//#endregion
//#region ../../node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js
var require_is_regex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var callBound = require_call_bound();
	var hasToStringTag = require_shams()();
	var hasOwn = require_hasown();
	var gOPD = require_gopd();
	/** @type {import('.')} */
	var fn;
	if (hasToStringTag) {
		/** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
		var $exec = callBound("RegExp.prototype.exec");
		/** @type {object} */
		var isRegexMarker = {};
		var throwRegexMarker = function() {
			throw isRegexMarker;
		};
		/** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
		var badStringifier = {
			toString: throwRegexMarker,
			valueOf: throwRegexMarker
		};
		if (typeof Symbol.toPrimitive === "symbol") badStringifier[Symbol.toPrimitive] = throwRegexMarker;
		/** @type {import('.')} */
		fn = function isRegex(value) {
			if (!value || typeof value !== "object") return false;
			var descriptor = gOPD(value, "lastIndex");
			if (!(descriptor && hasOwn(descriptor, "value"))) return false;
			try {
				$exec(value, badStringifier);
			} catch (e) {
				return e === isRegexMarker;
			}
		};
	} else {
		/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
		var $toString = callBound("Object.prototype.toString");
		/** @const @type {'[object RegExp]'} */
		var regexClass = "[object RegExp]";
		/** @type {import('.')} */
		fn = function isRegex(value) {
			if (!value || typeof value !== "object" && typeof value !== "function") return false;
			return $toString(value) === regexClass;
		};
	}
	module.exports = fn;
}));
//#endregion
//#region ../../node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js
var require_safe_regex_test = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var callBound = require_call_bound();
	var isRegex = require_is_regex();
	var $exec = callBound("RegExp.prototype.exec");
	var $TypeError = require_type();
	/** @type {import('.')} */
	module.exports = function regexTester(regex) {
		if (!isRegex(regex)) throw new $TypeError("`regex` must be a RegExp");
		return function test(s) {
			return $exec(regex, s) !== null;
		};
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/generator-function@2.0.1/node_modules/generator-function/index.js
var require_generator_function = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cached = function* () {}.constructor;
	/** @type {import('.')} */
	module.exports = () => cached;
}));
//#endregion
//#region ../../node_modules/.pnpm/is-generator-function@1.1.2/node_modules/is-generator-function/index.js
var require_is_generator_function = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var callBound = require_call_bound();
	var isFnRegex = require_safe_regex_test()(/^\s*(?:function)?\*/);
	var hasToStringTag = require_shams()();
	var getProto = require_get_proto();
	var toStr = callBound("Object.prototype.toString");
	var fnToStr = callBound("Function.prototype.toString");
	var getGeneratorFunction = require_generator_function();
	/** @type {import('.')} */
	module.exports = function isGeneratorFunction(fn) {
		if (typeof fn !== "function") return false;
		if (isFnRegex(fnToStr(fn))) return true;
		if (!hasToStringTag) return toStr(fn) === "[object GeneratorFunction]";
		if (!getProto) return false;
		var GeneratorFunction = getGeneratorFunction();
		return GeneratorFunction && getProto(fn) === GeneratorFunction.prototype;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js
var require_is_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fnToStr = Function.prototype.toString;
	var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
	var badArrayLike;
	var isCallableMarker;
	if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") try {
		badArrayLike = Object.defineProperty({}, "length", { get: function() {
			throw isCallableMarker;
		} });
		isCallableMarker = {};
		reflectApply(function() {
			throw 42;
		}, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) reflectApply = null;
	}
	else reflectApply = null;
	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
		try {
			var fnStr = fnToStr.call(value);
			return constructorRegex.test(fnStr);
		} catch (e) {
			return false;
		}
	};
	var tryFunctionObject = function tryFunctionToStr(value) {
		try {
			if (isES6ClassFn(value)) return false;
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var objectClass = "[object Object]";
	var fnClass = "[object Function]";
	var genClass = "[object GeneratorFunction]";
	var ddaClass = "[object HTMLAllCollection]";
	var ddaClass2 = "[object HTML document.all class]";
	var ddaClass3 = "[object HTMLCollection]";
	var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
	var isIE68 = !(0 in [,]);
	var isDDA = function isDocumentDotAll() {
		return false;
	};
	if (typeof document === "object") {
		var all = document.all;
		if (toStr.call(all) === toStr.call(document.all)) isDDA = function isDocumentDotAll(value) {
			if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
				var str = toStr.call(value);
				return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
			} catch (e) {}
			return false;
		};
	}
	module.exports = reflectApply ? function isCallable(value) {
		if (isDDA(value)) return true;
		if (!value) return false;
		if (typeof value !== "function" && typeof value !== "object") return false;
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) return false;
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	} : function isCallable(value) {
		if (isDDA(value)) return true;
		if (!value) return false;
		if (typeof value !== "function" && typeof value !== "object") return false;
		if (hasToStringTag) return tryFunctionObject(value);
		if (isES6ClassFn(value)) return false;
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
		return tryFunctionObject(value);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/for-each@0.3.5/node_modules/for-each/index.js
var require_for_each = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isCallable = require_is_callable();
	var toStr = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
	var forEachArray = function forEachArray(array, iterator, receiver) {
		for (var i = 0, len = array.length; i < len; i++) if (hasOwnProperty.call(array, i)) if (receiver == null) iterator(array[i], i, array);
		else iterator.call(receiver, array[i], i, array);
	};
	/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
	var forEachString = function forEachString(string, iterator, receiver) {
		for (var i = 0, len = string.length; i < len; i++) if (receiver == null) iterator(string.charAt(i), i, string);
		else iterator.call(receiver, string.charAt(i), i, string);
	};
	/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
	var forEachObject = function forEachObject(object, iterator, receiver) {
		for (var k in object) if (hasOwnProperty.call(object, k)) if (receiver == null) iterator(object[k], k, object);
		else iterator.call(receiver, object[k], k, object);
	};
	/** @type {(x: unknown) => x is readonly unknown[]} */
	function isArray(x) {
		return toStr.call(x) === "[object Array]";
	}
	/** @type {import('.')._internal} */
	module.exports = function forEach(list, iterator, thisArg) {
		if (!isCallable(iterator)) throw new TypeError("iterator must be a function");
		var receiver;
		if (arguments.length >= 3) receiver = thisArg;
		if (isArray(list)) forEachArray(list, iterator, receiver);
		else if (typeof list === "string") forEachString(list, iterator, receiver);
		else forEachObject(list, iterator, receiver);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/possible-typed-array-names@1.1.0/node_modules/possible-typed-array-names/index.js
var require_possible_typed_array_names = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type {import('.')} */
	module.exports = [
		"Float16Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Int16Array",
		"Int32Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array"
	];
}));
//#endregion
//#region ../../node_modules/.pnpm/available-typed-arrays@1.0.7/node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var possibleNames = require_possible_typed_array_names();
	var g = typeof globalThis === "undefined" ? global : globalThis;
	/** @type {import('.')} */
	module.exports = function availableTypedArrays() {
		var out = [];
		for (var i = 0; i < possibleNames.length; i++) if (typeof g[possibleNames[i]] === "function") out[out.length] = possibleNames[i];
		return out;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js
var require_define_data_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $defineProperty = require_es_define_property();
	var $SyntaxError = require_syntax();
	var $TypeError = require_type();
	var gopd = require_gopd();
	/** @type {import('.')} */
	module.exports = function defineDataProperty(obj, property, value) {
		if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
		if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
		if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
		if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
		if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
		var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
		var nonWritable = arguments.length > 4 ? arguments[4] : null;
		var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
		var loose = arguments.length > 6 ? arguments[6] : false;
		var desc = !!gopd && gopd(obj, property);
		if ($defineProperty) $defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
		else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) obj[property] = value;
		else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $defineProperty = require_es_define_property();
	var hasPropertyDescriptors = function hasPropertyDescriptors() {
		return !!$defineProperty;
	};
	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		if (!$defineProperty) return null;
		try {
			return $defineProperty([], "length", { value: 1 }).length !== 1;
		} catch (e) {
			return true;
		}
	};
	module.exports = hasPropertyDescriptors;
}));
//#endregion
//#region ../../node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js
var require_set_function_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var GetIntrinsic = require_get_intrinsic();
	var define = require_define_data_property();
	var hasDescriptors = require_has_property_descriptors()();
	var gOPD = require_gopd();
	var $TypeError = require_type();
	var $floor = GetIntrinsic("%Math.floor%");
	/** @type {import('.')} */
	module.exports = function setFunctionLength(fn, length) {
		if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
		if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
		var loose = arguments.length > 2 && !!arguments[2];
		var functionLengthIsConfigurable = true;
		var functionLengthIsWritable = true;
		if ("length" in fn && gOPD) {
			var desc = gOPD(fn, "length");
			if (desc && !desc.configurable) functionLengthIsConfigurable = false;
			if (desc && !desc.writable) functionLengthIsWritable = false;
		}
		if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) if (hasDescriptors) define(fn, "length", length, true, true);
		else define(fn, "length", length);
		return fn;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/applyBind.js
var require_applyBind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bind = require_function_bind();
	var $apply = require_functionApply();
	var actualApply = require_actualApply();
	/** @type {import('./applyBind')} */
	module.exports = function applyBind() {
		return actualApply(bind, $apply, arguments);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/call-bind@1.0.8/node_modules/call-bind/index.js
var require_call_bind = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var setFunctionLength = require_set_function_length();
	var $defineProperty = require_es_define_property();
	var callBindBasic = require_call_bind_apply_helpers();
	var applyBind = require_applyBind();
	module.exports = function callBind(originalFunction) {
		var func = callBindBasic(arguments);
		var adjustedLength = originalFunction.length - (arguments.length - 1);
		return setFunctionLength(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
	};
	if ($defineProperty) $defineProperty(module.exports, "apply", { value: applyBind });
	else module.exports.apply = applyBind;
}));
//#endregion
//#region ../../node_modules/.pnpm/which-typed-array@1.1.20/node_modules/which-typed-array/index.js
var require_which_typed_array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var forEach = require_for_each();
	var availableTypedArrays = require_available_typed_arrays();
	var callBind = require_call_bind();
	var callBound = require_call_bound();
	var gOPD = require_gopd();
	var getProto = require_get_proto();
	var $toString = callBound("Object.prototype.toString");
	var hasToStringTag = require_shams()();
	var g = typeof globalThis === "undefined" ? global : globalThis;
	var typedArrays = availableTypedArrays();
	var $slice = callBound("String.prototype.slice");
	/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
	var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
		for (var i = 0; i < array.length; i += 1) if (array[i] === value) return i;
		return -1;
	};
	/** @typedef {import('./types').Getter} Getter */
	/** @type {import('./types').Cache} */
	var cache = { __proto__: null };
	if (hasToStringTag && gOPD && getProto) forEach(typedArrays, function(typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr && getProto) {
			var proto = getProto(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor && proto) descriptor = gOPD(getProto(proto), Symbol.toStringTag);
			if (descriptor && descriptor.get) {
				var bound = callBind(descriptor.get);
				cache["$" + typedArray] = bound;
			}
		}
	});
	else forEach(typedArrays, function(typedArray) {
		var arr = new g[typedArray]();
		var fn = arr.slice || arr.set;
		if (fn) {
			var bound = callBind(fn);
			cache["$" + typedArray] = bound;
		}
	});
	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var tryTypedArrays = function tryAllTypedArrays(value) {
		/** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
		forEach(
			cache,
			/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
			function(getter, typedArray) {
				if (!found) try {
					if ("$" + getter(value) === typedArray) found = $slice(typedArray, 1);
				} catch (e) {}
			}
		);
		return found;
	};
	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var trySlices = function tryAllSlices(value) {
		/** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
		forEach(
			cache,
			/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
			function(getter, name) {
				if (!found) try {
					getter(value);
					found = $slice(name, 1);
				} catch (e) {}
			}
		);
		return found;
	};
	/** @type {import('.')} */
	module.exports = function whichTypedArray(value) {
		if (!value || typeof value !== "object") return false;
		if (!hasToStringTag) {
			/** @type {string} */
			var tag = $slice($toString(value), 8, -1);
			if ($indexOf(typedArrays, tag) > -1) return tag;
			if (tag !== "Object") return false;
			return trySlices(value);
		}
		if (!gOPD) return null;
		return tryTypedArrays(value);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/is-typed-array@1.1.15/node_modules/is-typed-array/index.js
var require_is_typed_array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var whichTypedArray = require_which_typed_array();
	/** @type {import('.')} */
	module.exports = function isTypedArray(value) {
		return !!whichTypedArray(value);
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/util@0.12.5/node_modules/util/support/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	var isArgumentsObject = require_is_arguments();
	var isGeneratorFunction = require_is_generator_function();
	var whichTypedArray = require_which_typed_array();
	var isTypedArray = require_is_typed_array();
	function uncurryThis(f) {
		return f.call.bind(f);
	}
	var BigIntSupported = typeof BigInt !== "undefined";
	var SymbolSupported = typeof Symbol !== "undefined";
	var ObjectToString = uncurryThis(Object.prototype.toString);
	var numberValue = uncurryThis(Number.prototype.valueOf);
	var stringValue = uncurryThis(String.prototype.valueOf);
	var booleanValue = uncurryThis(Boolean.prototype.valueOf);
	if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
	if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
	function checkBoxedPrimitive(value, prototypeValueOf) {
		if (typeof value !== "object") return false;
		try {
			prototypeValueOf(value);
			return true;
		} catch (e) {
			return false;
		}
	}
	exports.isArgumentsObject = isArgumentsObject;
	exports.isGeneratorFunction = isGeneratorFunction;
	exports.isTypedArray = isTypedArray;
	function isPromise(input) {
		return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
	}
	exports.isPromise = isPromise;
	function isArrayBufferView(value) {
		if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) return ArrayBuffer.isView(value);
		return isTypedArray(value) || isDataView(value);
	}
	exports.isArrayBufferView = isArrayBufferView;
	function isUint8Array(value) {
		return whichTypedArray(value) === "Uint8Array";
	}
	exports.isUint8Array = isUint8Array;
	function isUint8ClampedArray(value) {
		return whichTypedArray(value) === "Uint8ClampedArray";
	}
	exports.isUint8ClampedArray = isUint8ClampedArray;
	function isUint16Array(value) {
		return whichTypedArray(value) === "Uint16Array";
	}
	exports.isUint16Array = isUint16Array;
	function isUint32Array(value) {
		return whichTypedArray(value) === "Uint32Array";
	}
	exports.isUint32Array = isUint32Array;
	function isInt8Array(value) {
		return whichTypedArray(value) === "Int8Array";
	}
	exports.isInt8Array = isInt8Array;
	function isInt16Array(value) {
		return whichTypedArray(value) === "Int16Array";
	}
	exports.isInt16Array = isInt16Array;
	function isInt32Array(value) {
		return whichTypedArray(value) === "Int32Array";
	}
	exports.isInt32Array = isInt32Array;
	function isFloat32Array(value) {
		return whichTypedArray(value) === "Float32Array";
	}
	exports.isFloat32Array = isFloat32Array;
	function isFloat64Array(value) {
		return whichTypedArray(value) === "Float64Array";
	}
	exports.isFloat64Array = isFloat64Array;
	function isBigInt64Array(value) {
		return whichTypedArray(value) === "BigInt64Array";
	}
	exports.isBigInt64Array = isBigInt64Array;
	function isBigUint64Array(value) {
		return whichTypedArray(value) === "BigUint64Array";
	}
	exports.isBigUint64Array = isBigUint64Array;
	function isMapToString(value) {
		return ObjectToString(value) === "[object Map]";
	}
	isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
	function isMap(value) {
		if (typeof Map === "undefined") return false;
		return isMapToString.working ? isMapToString(value) : value instanceof Map;
	}
	exports.isMap = isMap;
	function isSetToString(value) {
		return ObjectToString(value) === "[object Set]";
	}
	isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
	function isSet(value) {
		if (typeof Set === "undefined") return false;
		return isSetToString.working ? isSetToString(value) : value instanceof Set;
	}
	exports.isSet = isSet;
	function isWeakMapToString(value) {
		return ObjectToString(value) === "[object WeakMap]";
	}
	isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
	function isWeakMap(value) {
		if (typeof WeakMap === "undefined") return false;
		return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
	}
	exports.isWeakMap = isWeakMap;
	function isWeakSetToString(value) {
		return ObjectToString(value) === "[object WeakSet]";
	}
	isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
	function isWeakSet(value) {
		return isWeakSetToString(value);
	}
	exports.isWeakSet = isWeakSet;
	function isArrayBufferToString(value) {
		return ObjectToString(value) === "[object ArrayBuffer]";
	}
	isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(/* @__PURE__ */ new ArrayBuffer());
	function isArrayBuffer(value) {
		if (typeof ArrayBuffer === "undefined") return false;
		return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
	}
	exports.isArrayBuffer = isArrayBuffer;
	function isDataViewToString(value) {
		return ObjectToString(value) === "[object DataView]";
	}
	isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function isDataView(value) {
		if (typeof DataView === "undefined") return false;
		return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
	}
	exports.isDataView = isDataView;
	var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
	function isSharedArrayBufferToString(value) {
		return ObjectToString(value) === "[object SharedArrayBuffer]";
	}
	function isSharedArrayBuffer(value) {
		if (typeof SharedArrayBufferCopy === "undefined") return false;
		if (typeof isSharedArrayBufferToString.working === "undefined") isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
		return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
	}
	exports.isSharedArrayBuffer = isSharedArrayBuffer;
	function isAsyncFunction(value) {
		return ObjectToString(value) === "[object AsyncFunction]";
	}
	exports.isAsyncFunction = isAsyncFunction;
	function isMapIterator(value) {
		return ObjectToString(value) === "[object Map Iterator]";
	}
	exports.isMapIterator = isMapIterator;
	function isSetIterator(value) {
		return ObjectToString(value) === "[object Set Iterator]";
	}
	exports.isSetIterator = isSetIterator;
	function isGeneratorObject(value) {
		return ObjectToString(value) === "[object Generator]";
	}
	exports.isGeneratorObject = isGeneratorObject;
	function isWebAssemblyCompiledModule(value) {
		return ObjectToString(value) === "[object WebAssembly.Module]";
	}
	exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
	function isNumberObject(value) {
		return checkBoxedPrimitive(value, numberValue);
	}
	exports.isNumberObject = isNumberObject;
	function isStringObject(value) {
		return checkBoxedPrimitive(value, stringValue);
	}
	exports.isStringObject = isStringObject;
	function isBooleanObject(value) {
		return checkBoxedPrimitive(value, booleanValue);
	}
	exports.isBooleanObject = isBooleanObject;
	function isBigIntObject(value) {
		return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
	}
	exports.isBigIntObject = isBigIntObject;
	function isSymbolObject(value) {
		return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
	}
	exports.isSymbolObject = isSymbolObject;
	function isBoxedPrimitive(value) {
		return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
	}
	exports.isBoxedPrimitive = isBoxedPrimitive;
	function isAnyArrayBuffer(value) {
		return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
	}
	exports.isAnyArrayBuffer = isAnyArrayBuffer;
	[
		"isProxy",
		"isExternal",
		"isModuleNamespaceObject"
	].forEach(function(method) {
		Object.defineProperty(exports, method, {
			enumerable: false,
			value: function() {
				throw new Error(method + " is not supported in userland");
			}
		});
	});
}));
//#endregion
//#region ../../node_modules/.pnpm/util@0.12.5/node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function isBuffer(arg) {
		return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (typeof Object.create === "function") module.exports = function inherits(ctor, superCtor) {
		if (superCtor) {
			ctor.super_ = superCtor;
			ctor.prototype = Object.create(superCtor.prototype, { constructor: {
				value: ctor,
				enumerable: false,
				writable: true,
				configurable: true
			} });
		}
	};
	else module.exports = function inherits(ctor, superCtor) {
		if (superCtor) {
			ctor.super_ = superCtor;
			var TempCtor = function() {};
			TempCtor.prototype = superCtor.prototype;
			ctor.prototype = new TempCtor();
			ctor.prototype.constructor = ctor;
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/util@0.12.5/node_modules/util/util.js
var require_util = /* @__PURE__ */ __commonJSMin(((exports) => {
	init_dist$48();
	var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
		var keys = Object.keys(obj);
		var descriptors = {};
		for (var i = 0; i < keys.length; i++) descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
		return descriptors;
	};
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
		if (!isString(f)) {
			var objects = [];
			for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
			return objects.join(" ");
		}
		var i = 1;
		var args = arguments;
		var len = args.length;
		var str = String(f).replace(formatRegExp, function(x) {
			if (x === "%%") return "%";
			if (i >= len) return x;
			switch (x) {
				case "%s": return String(args[i++]);
				case "%d": return Number(args[i++]);
				case "%j": try {
					return JSON.stringify(args[i++]);
				} catch (_) {
					return "[Circular]";
				}
				default: return x;
			}
		});
		for (var x = args[i]; i < len; x = args[++i]) if (isNull(x) || !isObject(x)) str += " " + x;
		else str += " " + inspect(x);
		return str;
	};
	exports.deprecate = function(fn, msg) {
		if (typeof process$1 !== "undefined" && process$1.noDeprecation === true) return fn;
		if (typeof process$1 === "undefined") return function() {
			return exports.deprecate(fn, msg).apply(this, arguments);
		};
		var warned = false;
		function deprecated() {
			if (!warned) {
				if (process$1.throwDeprecation) throw new Error(msg);
				else if (process$1.traceDeprecation) console.trace(msg);
				else console.error(msg);
				warned = true;
			}
			return fn.apply(this, arguments);
		}
		return deprecated;
	};
	var debugs = {};
	var debugEnvRegex = /^$/;
	if ({}.NODE_DEBUG) {
		var debugEnv = {}.NODE_DEBUG;
		debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
		debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
	}
	exports.debuglog = function(set) {
		set = set.toUpperCase();
		if (!debugs[set]) if (debugEnvRegex.test(set)) {
			var pid = process$1.pid;
			debugs[set] = function() {
				var msg = exports.format.apply(exports, arguments);
				console.error("%s %d: %s", set, pid, msg);
			};
		} else debugs[set] = function() {};
		return debugs[set];
	};
	/**
	* Echos the value of a value. Trys to print the value out
	* in the best way possible given the different types.
	*
	* @param {Object} obj The object to print out.
	* @param {Object} opts Optional options object that alters the output.
	*/
	function inspect(obj, opts) {
		var ctx = {
			seen: [],
			stylize: stylizeNoColor
		};
		if (arguments.length >= 3) ctx.depth = arguments[2];
		if (arguments.length >= 4) ctx.colors = arguments[3];
		if (isBoolean(opts)) ctx.showHidden = opts;
		else if (opts) exports._extend(ctx, opts);
		if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		if (isUndefined(ctx.depth)) ctx.depth = 2;
		if (isUndefined(ctx.colors)) ctx.colors = false;
		if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		if (ctx.colors) ctx.stylize = stylizeWithColor;
		return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	inspect.colors = {
		"bold": [1, 22],
		"italic": [3, 23],
		"underline": [4, 24],
		"inverse": [7, 27],
		"white": [37, 39],
		"grey": [90, 39],
		"black": [30, 39],
		"blue": [34, 39],
		"cyan": [36, 39],
		"green": [32, 39],
		"magenta": [35, 39],
		"red": [31, 39],
		"yellow": [33, 39]
	};
	inspect.styles = {
		"special": "cyan",
		"number": "yellow",
		"boolean": "yellow",
		"undefined": "grey",
		"null": "bold",
		"string": "green",
		"date": "magenta",
		"regexp": "red"
	};
	function stylizeWithColor(str, styleType) {
		var style = inspect.styles[styleType];
		if (style) return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
		else return str;
	}
	function stylizeNoColor(str, styleType) {
		return str;
	}
	function arrayToHash(array) {
		var hash = {};
		array.forEach(function(val, idx) {
			hash[val] = true;
		});
		return hash;
	}
	function formatValue(ctx, value, recurseTimes) {
		if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
			var ret = value.inspect(recurseTimes, ctx);
			if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
			return ret;
		}
		var primitive = formatPrimitive(ctx, value);
		if (primitive) return primitive;
		var keys = Object.keys(value);
		var visibleKeys = arrayToHash(keys);
		if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
		if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
		if (keys.length === 0) {
			if (isFunction(value)) {
				var name = value.name ? ": " + value.name : "";
				return ctx.stylize("[Function" + name + "]", "special");
			}
			if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
			if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
			if (isError(value)) return formatError(value);
		}
		var base = "", array = false, braces = ["{", "}"];
		if (isArray(value)) {
			array = true;
			braces = ["[", "]"];
		}
		if (isFunction(value)) base = " [Function" + (value.name ? ": " + value.name : "") + "]";
		if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
		if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
		if (isError(value)) base = " " + formatError(value);
		if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
		if (recurseTimes < 0) if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
		else return ctx.stylize("[Object]", "special");
		ctx.seen.push(value);
		var output;
		if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		else output = keys.map(function(key) {
			return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		});
		ctx.seen.pop();
		return reduceToSingleString(output, base, braces);
	}
	function formatPrimitive(ctx, value) {
		if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
		if (isString(value)) {
			var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
			return ctx.stylize(simple, "string");
		}
		if (isNumber(value)) return ctx.stylize("" + value, "number");
		if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
		if (isNull(value)) return ctx.stylize("null", "null");
	}
	function formatError(value) {
		return "[" + Error.prototype.toString.call(value) + "]";
	}
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		var output = [];
		for (var i = 0, l = value.length; i < l; ++i) if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
		else output.push("");
		keys.forEach(function(key) {
			if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
		});
		return output;
	}
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		var name, str, desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		if (desc.get) if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
		else str = ctx.stylize("[Getter]", "special");
		else if (desc.set) str = ctx.stylize("[Setter]", "special");
		if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
		if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
			if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
			else str = formatValue(ctx, desc.value, recurseTimes - 1);
			if (str.indexOf("\n") > -1) if (array) str = str.split("\n").map(function(line) {
				return "  " + line;
			}).join("\n").slice(2);
			else str = "\n" + str.split("\n").map(function(line) {
				return "   " + line;
			}).join("\n");
		} else str = ctx.stylize("[Circular]", "special");
		if (isUndefined(name)) {
			if (array && key.match(/^\d+$/)) return str;
			name = JSON.stringify("" + key);
			if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
				name = name.slice(1, -1);
				name = ctx.stylize(name, "name");
			} else {
				name = name.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
				name = ctx.stylize(name, "string");
			}
		}
		return name + ": " + str;
	}
	function reduceToSingleString(output, base, braces) {
		var numLinesEst = 0;
		if (output.reduce(function(prev, cur) {
			numLinesEst++;
			if (cur.indexOf("\n") >= 0) numLinesEst++;
			return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
		}, 0) > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
		return braces[0] + base + " " + output.join(", ") + " " + braces[1];
	}
	exports.types = require_types();
	function isArray(ar) {
		return Array.isArray(ar);
	}
	exports.isArray = isArray;
	function isBoolean(arg) {
		return typeof arg === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNull(arg) {
		return arg === null;
	}
	exports.isNull = isNull;
	function isNullOrUndefined(arg) {
		return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	function isNumber(arg) {
		return typeof arg === "number";
	}
	exports.isNumber = isNumber;
	function isString(arg) {
		return typeof arg === "string";
	}
	exports.isString = isString;
	function isSymbol(arg) {
		return typeof arg === "symbol";
	}
	exports.isSymbol = isSymbol;
	function isUndefined(arg) {
		return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	function isRegExp(re) {
		return isObject(re) && objectToString(re) === "[object RegExp]";
	}
	exports.isRegExp = isRegExp;
	exports.types.isRegExp = isRegExp;
	function isObject(arg) {
		return typeof arg === "object" && arg !== null;
	}
	exports.isObject = isObject;
	function isDate(d) {
		return isObject(d) && objectToString(d) === "[object Date]";
	}
	exports.isDate = isDate;
	exports.types.isDate = isDate;
	function isError(e) {
		return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
	}
	exports.isError = isError;
	exports.types.isNativeError = isError;
	function isFunction(arg) {
		return typeof arg === "function";
	}
	exports.isFunction = isFunction;
	function isPrimitive(arg) {
		return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
	}
	exports.isPrimitive = isPrimitive;
	exports.isBuffer = require_isBufferBrowser();
	function objectToString(o) {
		return Object.prototype.toString.call(o);
	}
	function pad(n) {
		return n < 10 ? "0" + n.toString(10) : n.toString(10);
	}
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	function timestamp() {
		var d = /* @__PURE__ */ new Date();
		var time = [
			pad(d.getHours()),
			pad(d.getMinutes()),
			pad(d.getSeconds())
		].join(":");
		return [
			d.getDate(),
			months[d.getMonth()],
			time
		].join(" ");
	}
	exports.log = function() {
		console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
	};
	/**
	* Inherit the prototype methods from one constructor into another.
	*
	* The Function.prototype.inherits from lang.js rewritten as a standalone
	* function (not on Function.prototype). NOTE: If this file is to be loaded
	* during bootstrapping this function needs to be rewritten using some native
	* functions as prototype setup using normal JavaScript does not work as
	* expected during bootstrapping (see mirror.js in r114903).
	*
	* @param {function} ctor Constructor function which needs to inherit the
	*     prototype.
	* @param {function} superCtor Constructor function to inherit prototype from.
	*/
	exports.inherits = require_inherits_browser();
	exports._extend = function(origin, add) {
		if (!add || !isObject(add)) return origin;
		var keys = Object.keys(add);
		var i = keys.length;
		while (i--) origin[keys[i]] = add[keys[i]];
		return origin;
	};
	function hasOwnProperty(obj, prop) {
		return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
	exports.promisify = function promisify(original) {
		if (typeof original !== "function") throw new TypeError("The \"original\" argument must be of type Function");
		if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
			var fn = original[kCustomPromisifiedSymbol];
			if (typeof fn !== "function") throw new TypeError("The \"util.promisify.custom\" argument must be of type Function");
			Object.defineProperty(fn, kCustomPromisifiedSymbol, {
				value: fn,
				enumerable: false,
				writable: false,
				configurable: true
			});
			return fn;
		}
		function fn() {
			var promiseResolve, promiseReject;
			var promise = new Promise(function(resolve, reject) {
				promiseResolve = resolve;
				promiseReject = reject;
			});
			var args = [];
			for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
			args.push(function(err, value) {
				if (err) promiseReject(err);
				else promiseResolve(value);
			});
			try {
				original.apply(this, args);
			} catch (err) {
				promiseReject(err);
			}
			return promise;
		}
		Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
		if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
			value: fn,
			enumerable: false,
			writable: false,
			configurable: true
		});
		return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
	};
	exports.promisify.custom = kCustomPromisifiedSymbol;
	function callbackifyOnRejected(reason, cb) {
		if (!reason) {
			var newReason = /* @__PURE__ */ new Error("Promise was rejected with a falsy value");
			newReason.reason = reason;
			reason = newReason;
		}
		return cb(reason);
	}
	function callbackify(original) {
		if (typeof original !== "function") throw new TypeError("The \"original\" argument must be of type Function");
		function callbackified() {
			var args = [];
			for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
			var maybeCb = args.pop();
			if (typeof maybeCb !== "function") throw new TypeError("The last argument must be of type Function");
			var self = this;
			var cb = function() {
				return maybeCb.apply(self, arguments);
			};
			original.apply(this, args).then(function(ret) {
				process$1.nextTick(cb.bind(null, null, ret));
			}, function(rej) {
				process$1.nextTick(callbackifyOnRejected.bind(null, rej, cb));
			});
		}
		Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
		Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
		return callbackified;
	}
	exports.callbackify = callbackify;
}));
//#endregion
//#region ../../node_modules/.pnpm/sprintf-js@1.1.3/node_modules/sprintf-js/src/sprintf.js
var require_sprintf = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var re = {
			not_string: /[^s]/,
			not_bool: /[^t]/,
			not_type: /[^T]/,
			not_primitive: /[^v]/,
			number: /[diefg]/,
			numeric_arg: /[bcdiefguxX]/,
			json: /[j]/,
			not_json: /[^j]/,
			text: /^[^\x25]+/,
			modulo: /^\x25{2}/,
			placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
			key: /^([a-z_][a-z_\d]*)/i,
			key_access: /^\.([a-z_][a-z_\d]*)/i,
			index_access: /^\[(\d+)\]/,
			sign: /^[+-]/
		};
		function sprintf(key) {
			return sprintf_format(sprintf_parse(key), arguments);
		}
		function vsprintf(fmt, argv) {
			return sprintf.apply(null, [fmt].concat(argv || []));
		}
		function sprintf_format(parse_tree, argv) {
			var cursor = 1, tree_length = parse_tree.length, arg, output = "", i, k, ph, pad, pad_character, pad_length, is_positive, sign;
			for (i = 0; i < tree_length; i++) if (typeof parse_tree[i] === "string") output += parse_tree[i];
			else if (typeof parse_tree[i] === "object") {
				ph = parse_tree[i];
				if (ph.keys) {
					arg = argv[cursor];
					for (k = 0; k < ph.keys.length; k++) {
						if (arg == void 0) throw new Error(sprintf("[sprintf] Cannot access property \"%s\" of undefined value \"%s\"", ph.keys[k], ph.keys[k - 1]));
						arg = arg[ph.keys[k]];
					}
				} else if (ph.param_no) arg = argv[ph.param_no];
				else arg = argv[cursor++];
				if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) arg = arg();
				if (re.numeric_arg.test(ph.type) && typeof arg !== "number" && isNaN(arg)) throw new TypeError(sprintf("[sprintf] expecting number but found %T", arg));
				if (re.number.test(ph.type)) is_positive = arg >= 0;
				switch (ph.type) {
					case "b":
						arg = parseInt(arg, 10).toString(2);
						break;
					case "c":
						arg = String.fromCharCode(parseInt(arg, 10));
						break;
					case "d":
					case "i":
						arg = parseInt(arg, 10);
						break;
					case "j":
						arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
						break;
					case "e":
						arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
						break;
					case "f":
						arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
						break;
					case "g":
						arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
						break;
					case "o":
						arg = (parseInt(arg, 10) >>> 0).toString(8);
						break;
					case "s":
						arg = String(arg);
						arg = ph.precision ? arg.substring(0, ph.precision) : arg;
						break;
					case "t":
						arg = String(!!arg);
						arg = ph.precision ? arg.substring(0, ph.precision) : arg;
						break;
					case "T":
						arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
						arg = ph.precision ? arg.substring(0, ph.precision) : arg;
						break;
					case "u":
						arg = parseInt(arg, 10) >>> 0;
						break;
					case "v":
						arg = arg.valueOf();
						arg = ph.precision ? arg.substring(0, ph.precision) : arg;
						break;
					case "x":
						arg = (parseInt(arg, 10) >>> 0).toString(16);
						break;
					case "X":
						arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
						break;
				}
				if (re.json.test(ph.type)) output += arg;
				else {
					if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
						sign = is_positive ? "+" : "-";
						arg = arg.toString().replace(re.sign, "");
					} else sign = "";
					pad_character = ph.pad_char ? ph.pad_char === "0" ? "0" : ph.pad_char.charAt(1) : " ";
					pad_length = ph.width - (sign + arg).length;
					pad = ph.width ? pad_length > 0 ? pad_character.repeat(pad_length) : "" : "";
					output += ph.align ? sign + arg + pad : pad_character === "0" ? sign + pad + arg : pad + sign + arg;
				}
			}
			return output;
		}
		var sprintf_cache = Object.create(null);
		function sprintf_parse(fmt) {
			if (sprintf_cache[fmt]) return sprintf_cache[fmt];
			var _fmt = fmt, match, parse_tree = [], arg_names = 0;
			while (_fmt) {
				if ((match = re.text.exec(_fmt)) !== null) parse_tree.push(match[0]);
				else if ((match = re.modulo.exec(_fmt)) !== null) parse_tree.push("%");
				else if ((match = re.placeholder.exec(_fmt)) !== null) {
					if (match[2]) {
						arg_names |= 1;
						var field_list = [], replacement_field = match[2], field_match = [];
						if ((field_match = re.key.exec(replacement_field)) !== null) {
							field_list.push(field_match[1]);
							while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") if ((field_match = re.key_access.exec(replacement_field)) !== null) field_list.push(field_match[1]);
							else if ((field_match = re.index_access.exec(replacement_field)) !== null) field_list.push(field_match[1]);
							else throw new SyntaxError("[sprintf] failed to parse named argument key");
						} else throw new SyntaxError("[sprintf] failed to parse named argument key");
						match[2] = field_list;
					} else arg_names |= 2;
					if (arg_names === 3) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
					parse_tree.push({
						placeholder: match[0],
						param_no: match[1],
						keys: match[2],
						sign: match[3],
						pad_char: match[4],
						align: match[5],
						width: match[6],
						precision: match[7],
						type: match[8]
					});
				} else throw new SyntaxError("[sprintf] unexpected placeholder");
				_fmt = _fmt.substring(match[0].length);
			}
			return sprintf_cache[fmt] = parse_tree;
		}
		/**
		* export to either browser or node.js
		*/
		if (typeof exports !== "undefined") {
			exports["sprintf"] = sprintf;
			exports["vsprintf"] = vsprintf;
		}
		if (typeof window !== "undefined") {
			window["sprintf"] = sprintf;
			window["vsprintf"] = vsprintf;
			if (typeof define === "function" && define["amd"]) define(function() {
				return {
					"sprintf": sprintf,
					"vsprintf": vsprintf
				};
			});
		}
	})();
}));
//#endregion
//#region ../../node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
var require_events = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var R = typeof Reflect === "object" ? Reflect : null;
	var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
		return Function.prototype.apply.call(target, receiver, args);
	};
	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
	else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
		return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
	};
	else ReflectOwnKeys = function ReflectOwnKeys(target) {
		return Object.getOwnPropertyNames(target);
	};
	function ProcessEmitWarning(warning) {
		if (console && console.warn) console.warn(warning);
	}
	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
		return value !== value;
	};
	function EventEmitter() {
		EventEmitter.init.call(this);
	}
	module.exports = EventEmitter;
	module.exports.once = once;
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.prototype._events = void 0;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = void 0;
	var defaultMaxListeners = 10;
	function checkListener(listener) {
		if (typeof listener !== "function") throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof listener);
	}
	Object.defineProperty(EventEmitter, "defaultMaxListeners", {
		enumerable: true,
		get: function() {
			return defaultMaxListeners;
		},
		set: function(arg) {
			if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + arg + ".");
			defaultMaxListeners = arg;
		}
	});
	EventEmitter.init = function() {
		if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
			this._events = Object.create(null);
			this._eventsCount = 0;
		}
		this._maxListeners = this._maxListeners || void 0;
	};
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
		if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + n + ".");
		this._maxListeners = n;
		return this;
	};
	function _getMaxListeners(that) {
		if (that._maxListeners === void 0) return EventEmitter.defaultMaxListeners;
		return that._maxListeners;
	}
	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
		return _getMaxListeners(this);
	};
	EventEmitter.prototype.emit = function emit(type) {
		var args = [];
		for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
		var doError = type === "error";
		var events = this._events;
		if (events !== void 0) doError = doError && events.error === void 0;
		else if (!doError) return false;
		if (doError) {
			var er;
			if (args.length > 0) er = args[0];
			if (er instanceof Error) throw er;
			var err = /* @__PURE__ */ new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
			err.context = er;
			throw err;
		}
		var handler = events[type];
		if (handler === void 0) return false;
		if (typeof handler === "function") ReflectApply(handler, this, args);
		else {
			var len = handler.length;
			var listeners = arrayClone(handler, len);
			for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
		}
		return true;
	};
	function _addListener(target, type, listener, prepend) {
		var m;
		var events;
		var existing;
		checkListener(listener);
		events = target._events;
		if (events === void 0) {
			events = target._events = Object.create(null);
			target._eventsCount = 0;
		} else {
			if (events.newListener !== void 0) {
				target.emit("newListener", type, listener.listener ? listener.listener : listener);
				events = target._events;
			}
			existing = events[type];
		}
		if (existing === void 0) {
			existing = events[type] = listener;
			++target._eventsCount;
		} else {
			if (typeof existing === "function") existing = events[type] = prepend ? [listener, existing] : [existing, listener];
			else if (prepend) existing.unshift(listener);
			else existing.push(listener);
			m = _getMaxListeners(target);
			if (m > 0 && existing.length > m && !existing.warned) {
				existing.warned = true;
				var w = /* @__PURE__ */ new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
				w.name = "MaxListenersExceededWarning";
				w.emitter = target;
				w.type = type;
				w.count = existing.length;
				ProcessEmitWarning(w);
			}
		}
		return target;
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
		return _addListener(this, type, listener, false);
	};
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	EventEmitter.prototype.prependListener = function prependListener(type, listener) {
		return _addListener(this, type, listener, true);
	};
	function onceWrapper() {
		if (!this.fired) {
			this.target.removeListener(this.type, this.wrapFn);
			this.fired = true;
			if (arguments.length === 0) return this.listener.call(this.target);
			return this.listener.apply(this.target, arguments);
		}
	}
	function _onceWrap(target, type, listener) {
		var state = {
			fired: false,
			wrapFn: void 0,
			target,
			type,
			listener
		};
		var wrapped = onceWrapper.bind(state);
		wrapped.listener = listener;
		state.wrapFn = wrapped;
		return wrapped;
	}
	EventEmitter.prototype.once = function once(type, listener) {
		checkListener(listener);
		this.on(type, _onceWrap(this, type, listener));
		return this;
	};
	EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
		checkListener(listener);
		this.prependListener(type, _onceWrap(this, type, listener));
		return this;
	};
	EventEmitter.prototype.removeListener = function removeListener(type, listener) {
		var list, events, position, i, originalListener;
		checkListener(listener);
		events = this._events;
		if (events === void 0) return this;
		list = events[type];
		if (list === void 0) return this;
		if (list === listener || list.listener === listener) if (--this._eventsCount === 0) this._events = Object.create(null);
		else {
			delete events[type];
			if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
		}
		else if (typeof list !== "function") {
			position = -1;
			for (i = list.length - 1; i >= 0; i--) if (list[i] === listener || list[i].listener === listener) {
				originalListener = list[i].listener;
				position = i;
				break;
			}
			if (position < 0) return this;
			if (position === 0) list.shift();
			else spliceOne(list, position);
			if (list.length === 1) events[type] = list[0];
			if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
		}
		return this;
	};
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
		var listeners, events = this._events, i;
		if (events === void 0) return this;
		if (events.removeListener === void 0) {
			if (arguments.length === 0) {
				this._events = Object.create(null);
				this._eventsCount = 0;
			} else if (events[type] !== void 0) if (--this._eventsCount === 0) this._events = Object.create(null);
			else delete events[type];
			return this;
		}
		if (arguments.length === 0) {
			var keys = Object.keys(events);
			var key;
			for (i = 0; i < keys.length; ++i) {
				key = keys[i];
				if (key === "removeListener") continue;
				this.removeAllListeners(key);
			}
			this.removeAllListeners("removeListener");
			this._events = Object.create(null);
			this._eventsCount = 0;
			return this;
		}
		listeners = events[type];
		if (typeof listeners === "function") this.removeListener(type, listeners);
		else if (listeners !== void 0) for (i = listeners.length - 1; i >= 0; i--) this.removeListener(type, listeners[i]);
		return this;
	};
	function _listeners(target, type, unwrap) {
		var events = target._events;
		if (events === void 0) return [];
		var evlistener = events[type];
		if (evlistener === void 0) return [];
		if (typeof evlistener === "function") return unwrap ? [evlistener.listener || evlistener] : [evlistener];
		return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}
	EventEmitter.prototype.listeners = function listeners(type) {
		return _listeners(this, type, true);
	};
	EventEmitter.prototype.rawListeners = function rawListeners(type) {
		return _listeners(this, type, false);
	};
	EventEmitter.listenerCount = function(emitter, type) {
		if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
		else return listenerCount.call(emitter, type);
	};
	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
		var events = this._events;
		if (events !== void 0) {
			var evlistener = events[type];
			if (typeof evlistener === "function") return 1;
			else if (evlistener !== void 0) return evlistener.length;
		}
		return 0;
	}
	EventEmitter.prototype.eventNames = function eventNames() {
		return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};
	function arrayClone(arr, n) {
		var copy = new Array(n);
		for (var i = 0; i < n; ++i) copy[i] = arr[i];
		return copy;
	}
	function spliceOne(list, index) {
		for (; index + 1 < list.length; index++) list[index] = list[index + 1];
		list.pop();
	}
	function unwrapListeners(arr) {
		var ret = new Array(arr.length);
		for (var i = 0; i < ret.length; ++i) ret[i] = arr[i].listener || arr[i];
		return ret;
	}
	function once(emitter, name) {
		return new Promise(function(resolve, reject) {
			function errorListener(err) {
				emitter.removeListener(name, resolver);
				reject(err);
			}
			function resolver() {
				if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
				resolve([].slice.call(arguments));
			}
			eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
			if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
		});
	}
	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
		if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
	}
	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
		if (typeof emitter.on === "function") if (flags.once) emitter.once(name, listener);
		else emitter.on(name, listener);
		else if (typeof emitter.addEventListener === "function") emitter.addEventListener(name, function wrapListener(arg) {
			if (flags.once) emitter.removeEventListener(name, wrapListener);
			listener(arg);
		});
		else throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof emitter);
	}
}));
//#endregion
//#region ../../node_modules/.pnpm/indexof@0.0.1/node_modules/indexof/index.js
var require_indexof = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var indexOf = [].indexOf;
	module.exports = function(arr, obj) {
		if (indexOf) return arr.indexOf(obj);
		for (var i = 0; i < arr.length; ++i) if (arr[i] === obj) return i;
		return -1;
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/except@0.1.3/node_modules/except/index.js
var require_except = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ap = Array.prototype;
	var concat = ap.concat;
	var slice = ap.slice;
	var indexOf = require_indexof();
	function except(object) {
		var result = {};
		var keys = concat.apply(ap, slice.call(arguments, 1));
		for (var key in object) if (indexOf(keys, key) === -1) result[key] = object[key];
		return result;
	}
	module.exports = except;
}));
//#endregion
//#region ../../node_modules/.pnpm/date-names@0.1.13/node_modules/date-names/en.js
var require_en$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		__locale: "en",
		days: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		abbreviated_days: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		abbreviated_months: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		am: "AM",
		pm: "PM"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/date-names@0.1.13/node_modules/date-names/index.js
var require_date_names = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_en$2();
}));
//#endregion
//#region ../../node_modules/.pnpm/counterpart@0.18.6/node_modules/counterpart/strftime.js
var require_strftime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var dateNames = require_date_names();
	function strftime(date, format, names) {
		var timestamp = date.getTime();
		names = names || dateNames;
		return format.replace(/%([-_0]?.)/g, function(_, c) {
			var padding = null;
			if (c.length == 2) {
				switch (c[0]) {
					case "-":
						padding = "";
						break;
					case "_":
						padding = " ";
						break;
					case "0":
						padding = "0";
						break;
					default: return _;
				}
				c = c[1];
			}
			switch (c) {
				case "A": return names.days[date.getDay()];
				case "a": return names.abbreviated_days[date.getDay()];
				case "B": return names.months[date.getMonth()];
				case "b": return names.abbreviated_months[date.getMonth()];
				case "C": return pad(Math.floor(date.getFullYear() / 100), padding);
				case "D": return strftime(date, "%m/%d/%y");
				case "d": return pad(date.getDate(), padding);
				case "e": return date.getDate();
				case "F": return strftime(date, "%Y-%m-%d");
				case "H": return pad(date.getHours(), padding);
				case "h": return names.abbreviated_months[date.getMonth()];
				case "I": return pad(hours12(date), padding);
				case "j": return pad(Math.ceil((date.getTime() - new Date(date.getFullYear(), 0, 1).getTime()) / (1e3 * 60 * 60 * 24)), 3);
				case "k": return pad(date.getHours(), padding === null ? " " : padding);
				case "L": return pad(Math.floor(timestamp % 1e3), 3);
				case "l": return pad(hours12(date), padding === null ? " " : padding);
				case "M": return pad(date.getMinutes(), padding);
				case "m": return pad(date.getMonth() + 1, padding);
				case "n": return "\n";
				case "o": return String(date.getDate()) + ordinal(date.getDate());
				case "P": return date.getHours() < 12 ? names.am.toLowerCase() : names.pm.toLowerCase();
				case "p": return date.getHours() < 12 ? names.am.toUpperCase() : names.pm.toUpperCase();
				case "R": return strftime(date, "%H:%M");
				case "r": return strftime(date, "%I:%M:%S %p");
				case "S": return pad(date.getSeconds(), padding);
				case "s": return Math.floor(timestamp / 1e3);
				case "T": return strftime(date, "%H:%M:%S");
				case "t": return "	";
				case "U": return pad(weekNumber(date, "sunday"), padding);
				case "u": return date.getDay() === 0 ? 7 : date.getDay();
				case "v": return strftime(date, "%e-%b-%Y");
				case "W": return pad(weekNumber(date, "monday"), padding);
				case "w": return date.getDay();
				case "Y": return date.getFullYear();
				case "y":
					var y = String(date.getFullYear());
					return y.slice(y.length - 2);
				case "Z":
					var tzString = date.toString().match(/\((\w+)\)/);
					return tzString && tzString[1] || "";
				case "z":
					var off = date.getTimezoneOffset();
					return (off > 0 ? "-" : "+") + pad(Math.round(Math.abs(off / 60)), 2) + ":" + pad(off % 60, 2);
				default: return c;
			}
		});
	}
	function pad(n, padding, length) {
		if (typeof padding === "number") {
			length = padding;
			padding = "0";
		}
		if (padding === null) padding = "0";
		length = length || 2;
		var s = String(n);
		if (padding) while (s.length < length) s = padding + s;
		return s;
	}
	function hours12(date) {
		var hour = date.getHours();
		if (hour === 0) hour = 12;
		else if (hour > 12) hour -= 12;
		return hour;
	}
	function ordinal(n) {
		var i = n % 10, ii = n % 100;
		if (ii >= 11 && ii <= 13 || i === 0 || i >= 4) return "th";
		switch (i) {
			case 1: return "st";
			case 2: return "nd";
			case 3: return "rd";
		}
	}
	function weekNumber(date, firstWeekday) {
		firstWeekday = firstWeekday || "sunday";
		var wday = date.getDay();
		if (firstWeekday == "monday") if (wday === 0) wday = 6;
		else wday--;
		var weekNum = ((date - new Date(date.getFullYear(), 0, 1)) / 864e5 + 7 - wday) / 7;
		return Math.floor(weekNum);
	}
	module.exports = strftime;
}));
//#endregion
//#region ../../node_modules/.pnpm/pluralizers@0.1.7/node_modules/pluralizers/en.js
var require_en$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(entry, count) {
		var key;
		if (count === 0 && "zero" in entry) key = "zero";
		key = key || (count === 1 ? "one" : "other");
		return entry[key];
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/counterpart@0.18.6/node_modules/counterpart/locales/en.js
var require_en = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = { counterpart: {
		names: require_en$2(),
		pluralize: require_en$1(),
		formats: {
			date: {
				"default": "%a, %e %b %Y",
				long: "%A, %B %o, %Y",
				short: "%b %e"
			},
			time: {
				"default": "%H:%M",
				long: "%H:%M:%S %z",
				short: "%H:%M"
			},
			datetime: {
				"default": "%a, %e %b %Y %H:%M",
				long: "%A, %B %o, %Y %H:%M:%S %z",
				short: "%e %b %H:%M"
			}
		}
	} };
}));
//#endregion
//#region ../../node_modules/.pnpm/counterpart@0.18.6/node_modules/counterpart/index.js
var require_counterpart = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var extend = require_extend();
	var isArray = require_util().isArray;
	var isDate = require_util().isDate;
	var sprintf = require_sprintf().sprintf;
	var events = require_events();
	var except = require_except();
	var strftime = require_strftime();
	var translationScope = "counterpart";
	function isString(val) {
		return typeof val === "string" || Object.prototype.toString.call(val) === "[object String]";
	}
	function isFunction(val) {
		return typeof val === "function" || Object.prototype.toString.call(val) === "[object Function]";
	}
	function isPlainObject(val) {
		if (val === null) return false;
		return Object.prototype.toString.call(val) === "[object Object]";
	}
	function isSymbol(key) {
		return isString(key) && key[0] === ":";
	}
	function hasOwnProp(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key);
	}
	function getEntry(translations, keys) {
		return keys.reduce(function(result, key) {
			if (isPlainObject(result) && hasOwnProp(result, key)) return result[key];
			else return null;
		}, translations);
	}
	function Counterpart() {
		events.EventEmitter.apply(this);
		this._registry = {
			locale: "en",
			interpolate: true,
			fallbackLocales: [],
			scope: null,
			translations: {},
			interpolations: {},
			normalizedKeys: {},
			separator: ".",
			keepTrailingDot: false,
			keyTransformer: function(key) {
				return key;
			},
			generateMissingEntry: function(key) {
				return "missing translation: " + key;
			}
		};
		this.registerTranslations("en", require_en());
		this.setMaxListeners(0);
	}
	Counterpart.prototype = events.EventEmitter.prototype;
	Counterpart.prototype.constructor = events.EventEmitter;
	Counterpart.prototype.getLocale = function() {
		return this._registry.locale;
	};
	Counterpart.prototype.setLocale = function(value) {
		var previous = this._registry.locale;
		if (previous != value) {
			this._registry.locale = value;
			this.emit("localechange", value, previous);
		}
		return previous;
	};
	Counterpart.prototype.getFallbackLocale = function() {
		return this._registry.fallbackLocales;
	};
	Counterpart.prototype.setFallbackLocale = function(value) {
		var previous = this._registry.fallbackLocales;
		this._registry.fallbackLocales = [].concat(value || []);
		return previous;
	};
	Counterpart.prototype.getAvailableLocales = function() {
		return this._registry.availableLocales || Object.keys(this._registry.translations);
	};
	Counterpart.prototype.setAvailableLocales = function(value) {
		var previous = this.getAvailableLocales();
		this._registry.availableLocales = value;
		return previous;
	};
	Counterpart.prototype.getSeparator = function() {
		return this._registry.separator;
	};
	Counterpart.prototype.setSeparator = function(value) {
		var previous = this._registry.separator;
		this._registry.separator = value;
		return previous;
	};
	Counterpart.prototype.setInterpolate = function(value) {
		var previous = this._registry.interpolate;
		this._registry.interpolate = value;
		return previous;
	};
	Counterpart.prototype.getInterpolate = function() {
		return this._registry.interpolate;
	};
	Counterpart.prototype.setKeyTransformer = function(value) {
		var previous = this._registry.keyTransformer;
		this._registry.keyTransformer = value;
		return previous;
	};
	Counterpart.prototype.getKeyTransformer = function() {
		return this._registry.keyTransformer;
	};
	Counterpart.prototype.setMissingEntryGenerator = function(value) {
		var previous = this._registry.generateMissingEntry;
		this._registry.generateMissingEntry = value;
		return previous;
	};
	Counterpart.prototype.getMissingEntryGenerator = function() {
		return this._registry.generateMissingEntry;
	};
	Counterpart.prototype.registerTranslations = function(locale, data) {
		var translations = {};
		translations[locale] = data;
		extend(true, this._registry.translations, translations);
		return translations;
	};
	Counterpart.prototype.registerInterpolations = function(data) {
		return extend(true, this._registry.interpolations, data);
	};
	Counterpart.prototype.onLocaleChange = Counterpart.prototype.addLocaleChangeListener = function(callback) {
		this.addListener("localechange", callback);
	};
	Counterpart.prototype.offLocaleChange = Counterpart.prototype.removeLocaleChangeListener = function(callback) {
		this.removeListener("localechange", callback);
	};
	Counterpart.prototype.onTranslationNotFound = Counterpart.prototype.addTranslationNotFoundListener = function(callback) {
		this.addListener("translationnotfound", callback);
	};
	Counterpart.prototype.offTranslationNotFound = Counterpart.prototype.removeTranslationNotFoundListener = function(callback) {
		this.removeListener("translationnotfound", callback);
	};
	Counterpart.prototype.onError = Counterpart.prototype.addErrorListener = function(callback) {
		this.addListener("error", callback);
	};
	Counterpart.prototype.offError = Counterpart.prototype.removeErrorListener = function(callback) {
		this.removeListener("error", callback);
	};
	Counterpart.prototype.translate = function(key, options) {
		if (!isArray(key) && !isString(key) || !key.length) throw new Error("invalid argument: key");
		if (isSymbol(key)) key = key.substr(1);
		key = this._registry.keyTransformer(key, options);
		options = extend(true, {}, options);
		var locale = options.locale || this._registry.locale;
		delete options.locale;
		var scope = options.scope || this._registry.scope;
		delete options.scope;
		var separator = options.separator || this._registry.separator;
		delete options.separator;
		var fallbackLocales = [].concat(options.fallbackLocale || this._registry.fallbackLocales);
		delete options.fallbackLocale;
		var keys = this._normalizeKeys(locale, scope, key, separator);
		var entry = getEntry(this._registry.translations, keys);
		if (entry === null) {
			this.emit("translationnotfound", locale, key, options.fallback, scope);
			if (options.fallback) entry = this._fallback(locale, scope, key, options.fallback, options);
		}
		if (entry === null && fallbackLocales.length > 0 && fallbackLocales.indexOf(locale) === -1) for (var i = 0, ii = fallbackLocales.length; i < ii; i++) {
			var fallbackLocale = fallbackLocales[i];
			var fallbackKeys = this._normalizeKeys(fallbackLocale, scope, key, separator);
			entry = getEntry(this._registry.translations, fallbackKeys);
			if (entry) {
				locale = fallbackLocale;
				break;
			}
		}
		if (entry === null) entry = this._registry.generateMissingEntry(keys.join(separator));
		entry = this._pluralize(locale, entry, options.count);
		if (this._registry.interpolate !== false && options.interpolate !== false) entry = this._interpolate(entry, options);
		return entry;
	};
	Counterpart.prototype.localize = function(object, options) {
		if (!isDate(object)) throw new Error("invalid argument: object must be a date");
		options = extend(true, {}, options);
		var locale = options.locale || this._registry.locale;
		var scope = options.scope || translationScope;
		var type = options.type || "datetime";
		var format = options.format || "default";
		options = {
			locale,
			scope,
			interpolate: false
		};
		format = this.translate([
			"formats",
			type,
			format
		], extend(true, {}, options));
		return strftime(object, format, this.translate("names", options));
	};
	Counterpart.prototype._pluralize = function(locale, entry, count) {
		if (typeof entry !== "object" || entry === null || typeof count !== "number") return entry;
		var pluralizeFunc = this.translate("pluralize", {
			locale,
			scope: translationScope
		});
		if (Object.prototype.toString.call(pluralizeFunc) !== "[object Function]") return pluralizeFunc;
		return pluralizeFunc(entry, count);
	};
	Counterpart.prototype.withLocale = function(locale, callback, context) {
		var previous = this._registry.locale;
		this._registry.locale = locale;
		var result = callback.call(context);
		this._registry.locale = previous;
		return result;
	};
	Counterpart.prototype.withScope = function(scope, callback, context) {
		var previous = this._registry.scope;
		this._registry.scope = scope;
		var result = callback.call(context);
		this._registry.scope = previous;
		return result;
	};
	Counterpart.prototype.withSeparator = function(separator, callback, context) {
		var previous = this.setSeparator(separator);
		var result = callback.call(context);
		this.setSeparator(previous);
		return result;
	};
	Counterpart.prototype._normalizeKeys = function(locale, scope, key, separator) {
		var keys = [];
		keys = keys.concat(this._normalizeKey(locale, separator));
		keys = keys.concat(this._normalizeKey(scope, separator));
		keys = keys.concat(this._normalizeKey(key, separator));
		return keys;
	};
	Counterpart.prototype._normalizeKey = function(key, separator) {
		this._registry.normalizedKeys[separator] = this._registry.normalizedKeys[separator] || {};
		this._registry.normalizedKeys[separator][key] = this._registry.normalizedKeys[separator][key] || function(key) {
			if (isArray(key)) {
				var normalizedKeyArray = key.map(function(k) {
					return this._normalizeKey(k, separator);
				}.bind(this));
				return [].concat.apply([], normalizedKeyArray);
			} else {
				if (typeof key === "undefined" || key === null) return [];
				var keys = key.split(separator);
				for (var i = keys.length - 1; i >= 0; i--) if (keys[i] === "") {
					keys.splice(i, 1);
					if (this._registry.keepTrailingDot === true && i == keys.length) keys[keys.length - 1] += "" + separator;
				}
				return keys;
			}
		}.bind(this)(key);
		return this._registry.normalizedKeys[separator][key];
	};
	Counterpart.prototype._interpolate = function(entry, values) {
		if (typeof entry !== "string") return entry;
		try {
			return sprintf(entry, extend({}, this._registry.interpolations, values));
		} catch (err) {
			if (this.listenerCount("error") > 0) this.emit("error", err, entry, values);
			else throw err;
			return null;
		}
	};
	Counterpart.prototype._resolve = function(locale, scope, object, subject, options) {
		options = options || {};
		if (options.resolve === false) return subject;
		var result;
		if (isSymbol(subject)) result = this.translate(subject, extend({}, options, {
			locale,
			scope
		}));
		else if (isFunction(subject)) {
			var dateOrTime;
			if (options.object) {
				dateOrTime = options.object;
				delete options.object;
			} else dateOrTime = object;
			result = this._resolve(locale, scope, object, subject(dateOrTime, options));
		} else result = subject;
		return /^missing translation:/.test(result) ? null : result;
	};
	Counterpart.prototype._fallback = function(locale, scope, object, subject, options) {
		options = except(options, "fallback");
		if (isArray(subject)) {
			for (var i = 0, ii = subject.length; i < ii; i++) {
				var result = this._resolve(locale, scope, object, subject[i], options);
				if (result) return result;
			}
			return null;
		} else return this._resolve(locale, scope, object, subject, options);
	};
	var instance = new Counterpart();
	function translate() {
		return instance.translate.apply(instance, arguments);
	}
	extend(translate, instance, {
		Instance: Counterpart,
		Translator: Counterpart
	});
	module.exports = translate;
}));
//#endregion
//#region src/core/i18n/i18n.tsx
function registerTranslations(locale, data) {
	import_counterpart.default.registerTranslations(locale, data);
}
function getLocale() {
	return import_counterpart.default.getLocale();
}
function _td(s) {
	return s;
}
function isValidTranslation(translated) {
	return typeof translated === "string" && !translated.startsWith("missing translation:");
}
function safeCounterpartTranslate(text, variables) {
	const options = {
		...variables,
		interpolate: false
	};
	if (options && typeof options === "object") Object.keys(options).forEach((k) => {
		if (options[k] === void 0) {
			console.warn("safeCounterpartTranslate called with undefined interpolation name: " + k);
			options[k] = "undefined";
		}
		if (options[k] === null) {
			console.warn("safeCounterpartTranslate called with null interpolation name: " + k);
			options[k] = "null";
		}
	});
	return translateWithFallback(text, options);
}
function _t(text, variables, tags) {
	const { translated } = safeCounterpartTranslate(text, variables);
	const substituted = substitute(translated, variables, tags);
	return annotateStrings(substituted, text);
}
function _tDom(text, variables, tags) {
	const { translated, isFallback } = safeCounterpartTranslate(text, variables);
	const substituted = substitute(translated, variables, tags);
	return annotateStrings(isFallback ? /* @__PURE__ */ (0, import_jsx_runtime$57.jsx)("span", {
		lang: "en",
		children: substituted
	}) : substituted, text);
}
function substitute(text, variables, tags) {
	let result = text;
	if (variables !== void 0) {
		const regexpMapping = {};
		for (const variable in variables) regexpMapping[`%\\(${variable}\\)s`] = variables[variable];
		result = replaceByRegexes(result, regexpMapping);
	}
	if (tags !== void 0) {
		const regexpMapping = {};
		for (const tag in tags) regexpMapping[`(<${tag}>(.*?)<\\/${tag}>|<${tag}>|<${tag}\\s*\\/>)`] = tags[tag];
		result = replaceByRegexes(result, regexpMapping);
	}
	return result;
}
function replaceByRegexes(text, mapping) {
	const output = [text];
	let shouldWrapInSpan = false;
	for (const regexpString in mapping) {
		const regexp = new RegExp(regexpString, "g");
		let matchFoundSomewhere = false;
		for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
			const inputText = output[outputIndex];
			if (typeof inputText !== "string") continue;
			let match = regexp.exec(inputText);
			if (!match) continue;
			matchFoundSomewhere = true;
			const head = inputText.slice(0, match.index);
			const parts = [];
			let prevMatch;
			while (match) {
				prevMatch = match;
				const capturedGroups = match.slice(2);
				let replaced;
				if (mapping[regexpString] instanceof Function) replaced = mapping[regexpString](...capturedGroups);
				else replaced = mapping[regexpString];
				if (typeof replaced === "object") shouldWrapInSpan = true;
				if (typeof replaced !== "string" || replaced !== "") parts.push(replaced);
				match = regexp.exec(inputText);
				let tail;
				if (match) {
					const startIndex = prevMatch.index + prevMatch[0].length;
					tail = inputText.slice(startIndex, match.index);
				} else tail = inputText.slice(prevMatch.index + prevMatch[0].length);
				if (tail) parts.push(tail);
			}
			output.splice(outputIndex, 1, ...parts);
			if (head !== "") output.splice(outputIndex, 0, head);
		}
		if (!matchFoundSomewhere) {
			if (regexpString !== "%\\(count\\)s" && regexpString !== "%\\(locale\\)s") console.log(`Could not find ${regexp} in ${text}`);
		}
	}
	if (shouldWrapInSpan) return import_react$58.createElement("span", null, ...output);
	else return output.join("");
}
/**
* Sets the language for the application.
* In Element web,`languageHandler.setLanguage` should be used instead.
* @param language
*/
async function setLanguage(language) {
	const availableLanguages = await getLangsJson();
	const chosenLanguage = language in availableLanguages ? language : "en";
	const languageData = await getLanguage(i18nFolder + availableLanguages[chosenLanguage]);
	import_counterpart.default.registerTranslations(chosenLanguage, languageData);
	import_counterpart.default.setLocale(chosenLanguage);
}
async function getLanguage(langPath) {
	console.log("Loading language from", langPath);
	const res = await fetch(langPath, { method: "GET" });
	if (!res.ok) throw new Error(`Failed to load ${langPath}, got ${res.status}`);
	return res.json();
}
async function getLangsJson() {
	const url = "i18n/languages.json";
	const res = await fetch(url, { method: "GET" });
	if (!res.ok) throw new Error(`Failed to load ${url}, got ${res.status}`);
	return res.json();
}
var import_react$58, import_counterpart, import_jsx_runtime$57, i18nFolder, FALLBACK_LOCALE, translateWithFallback, annotateStrings;
var init_i18n = __esmMin((() => {
	import_react$58 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_lib();
	import_counterpart = /* @__PURE__ */ __toESM(require_counterpart(), 1);
	import_jsx_runtime$57 = require_jsx_runtime();
	i18nFolder = "i18n/";
	import_counterpart.default.setSeparator("|");
	FALLBACK_LOCALE = "en";
	import_counterpart.default.setFallbackLocale(FALLBACK_LOCALE);
	translateWithFallback = (text, options) => {
		const translated = import_counterpart.default.translate(text, {
			...options,
			fallbackLocale: import_counterpart.default.getLocale()
		});
		if (isValidTranslation(translated)) return { translated };
		const fallbackTranslated = import_counterpart.default.translate(text, {
			...options,
			locale: FALLBACK_LOCALE
		});
		if (isValidTranslation(fallbackTranslated)) return {
			translated: fallbackTranslated,
			isFallback: true
		};
		return {
			translated: text,
			isFallback: true
		};
	};
	annotateStrings = (result, translationKey) => {
		return result;
	};
	_t.__docgenInfo = {
		"description": "",
		"methods": [],
		"displayName": "_t"
	};
	_tDom.__docgenInfo = {
		"description": "",
		"methods": [],
		"displayName": "_tDom"
	};
	replaceByRegexes.__docgenInfo = {
		"description": "",
		"methods": [],
		"displayName": "replaceByRegexes"
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-down.js
function ArrowDownIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$56.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$56.jsx)("path", { d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1" })
	});
}
var import_react$57, import_jsx_runtime$56, arrow_down_default;
var init_arrow_down = __esmMin((() => {
	import_react$57 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$56 = require_jsx_runtime();
	ArrowDownIcon.displayName = "ArrowDownIcon";
	arrow_down_default = (0, import_react$57.forwardRef)(ArrowDownIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/arrow-right.js
function ArrowRightIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$55.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$55.jsx)("path", { d: "M11.793 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.086 13H5.5a1 1 0 1 1 0-2h10.586l-4.293-4.293a1 1 0 0 1 0-1.414" })
	});
}
var import_react$56, import_jsx_runtime$55, arrow_right_default;
var init_arrow_right = __esmMin((() => {
	import_react$56 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$55 = require_jsx_runtime();
	ArrowRightIcon.displayName = "ArrowRightIcon";
	arrow_right_default = (0, import_react$56.forwardRef)(ArrowRightIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/ask-to-join.js
function AskToJoinIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$54.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$54.jsx)("path", { d: "M12 18.156q.478 0 .802-.323.323-.324.323-.802h-2.25q0 .478.323.802.324.323.802.323M8.063 16.47h7.874a.54.54 0 0 0 .394-.169.54.54 0 0 0 0-.788.54.54 0 0 0-.393-.168h-.563V12.7q0-1.237-.675-2.25a3 3 0 0 0-1.856-1.294v-.281a.82.82 0 0 0-.24-.605.82.82 0 0 0-.604-.239.82.82 0 0 0-.844.844v.281A3 3 0 0 0 9.3 10.45a3.97 3.97 0 0 0-.675 2.25v2.644h-.562a.54.54 0 0 0-.394.168.54.54 0 0 0 0 .788.54.54 0 0 0 .394.169M3 19.844V9.719q0-.534.24-1.013.238-.478.66-.787l6.75-5.063q.31-.225.647-.337.338-.113.703-.113.366 0 .703.113.337.112.647.337L20.1 7.92q.422.309.66.787.24.479.24 1.013v10.125q0 .927-.66 1.589-.662.66-1.59.66H5.25q-.928 0-1.59-.66-.66-.66-.66-1.59m2.25 0h13.5V9.719L12 4.656 5.25 9.72z" })
	});
}
var import_react$55, import_jsx_runtime$54, ask_to_join_default;
var init_ask_to_join = __esmMin((() => {
	import_react$55 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$54 = require_jsx_runtime();
	AskToJoinIcon.displayName = "AskToJoinIcon";
	ask_to_join_default = (0, import_react$55.forwardRef)(AskToJoinIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js
function AttachmentIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$53.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$53.jsx)("path", { d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2t2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18t-1.775-.725T9 15.5V6.75A.73.73 0 0 1 9.75 6a.73.73 0 0 1 .75.75v8.75q0 .424.287.712.288.288.713.288.424 0 .713-.288a.97.97 0 0 0 .287-.712V6q0-1.05-.725-1.775T10 3.5t-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5t2.825-1.175T15.5 16.5V6.75a.73.73 0 0 1 .75-.75.73.73 0 0 1 .75.75v9.75q0 2.3-1.6 3.9T11.5 22" })
	});
}
var import_react$54, import_jsx_runtime$53, attachment_default;
var init_attachment = __esmMin((() => {
	import_react$54 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$53 = require_jsx_runtime();
	AttachmentIcon.displayName = "AttachmentIcon";
	attachment_default = (0, import_react$54.forwardRef)(AttachmentIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/block.js
function BlockIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$52.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$52.jsx)("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9" })
	});
}
var import_react$53, import_jsx_runtime$52, block_default;
var init_block = __esmMin((() => {
	import_react$53 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$52 = require_jsx_runtime();
	BlockIcon.displayName = "BlockIcon";
	block_default = (0, import_react$53.forwardRef)(BlockIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat-problem.js
function ChatProblemIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$51.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$51.jsx)("path", { d: "M12.713 16.713A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16q0-.424.287-.713A.97.97 0 0 1 12 15q.424 0 .713.287.287.288.287.713 0 .424-.287.712m0-3.999A.97.97 0 0 1 12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12V8q0-.424.287-.713A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8v4q0 .424-.287.713" }), /*#__PURE__*/ (0, import_jsx_runtime$51.jsx)("path", { d: "M2.95 16.3a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1zm4.2 2.8a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712l-.95 3.2z" })]
	});
}
var import_react$52, import_jsx_runtime$51, chat_problem_default;
var init_chat_problem = __esmMin((() => {
	import_react$52 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$51 = require_jsx_runtime();
	ChatProblemIcon.displayName = "ChatProblemIcon";
	chat_problem_default = (0, import_react$52.forwardRef)(ChatProblemIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/chat.js
function ChatIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$50.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$50.jsx)("path", { d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z" })
	});
}
var import_react$51, import_jsx_runtime$50, chat_default;
var init_chat = __esmMin((() => {
	import_react$51 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$50 = require_jsx_runtime();
	ChatIcon.displayName = "ChatIcon";
	chat_default = (0, import_react$51.forwardRef)(ChatIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse-all.js
function CollapseAllIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$49.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$49.jsx)("path", { d: "m12 16.975-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575l3.875 3.875a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275zm0-9.8 3.9-3.9A.95.95 0 0 1 16.6 3q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L13.425 8.55q-.575.575-1.425.575t-1.425-.575L6.7 4.675a.95.95 0 0 1-.275-.7q0-.425.275-.7A.95.95 0 0 1 7.4 3q.425 0 .7.275z" })
	});
}
var import_react$50, import_jsx_runtime$49, collapse_all_default;
var init_collapse_all = __esmMin((() => {
	import_react$50 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$49 = require_jsx_runtime();
	CollapseAllIcon.displayName = "CollapseAllIcon";
	collapse_all_default = (0, import_react$50.forwardRef)(CollapseAllIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/collapse.js
function CollapseIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$48.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$48.jsx)("path", { d: "M12 11.034a1 1 0 0 0 .29.702l.005.005c.18.18.43.29.705.29h8a1 1 0 0 0 0-2h-5.586L22 3.445a1 1 0 0 0-1.414-1.414L14 8.617V3.031a1 1 0 1 0-2 0zm0 1.963a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 11 12H3a1 1 0 1 0 0 2h5.586L2 20.586A1 1 0 1 0 3.414 22L10 15.414V21a1 1 0 0 0 2 0z" })
	});
}
var import_react$49, import_jsx_runtime$48, collapse_default;
var init_collapse = __esmMin((() => {
	import_react$49 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$48 = require_jsx_runtime();
	CollapseIcon.displayName = "CollapseIcon";
	collapse_default = (0, import_react$49.forwardRef)(CollapseIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/delete.js
function DeleteIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$47.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$47.jsx)("path", { d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z" })
	});
}
var import_react$48, import_jsx_runtime$47, delete_default;
var init_delete = __esmMin((() => {
	import_react$48 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$47 = require_jsx_runtime();
	DeleteIcon.displayName = "DeleteIcon";
	delete_default = (0, import_react$48.forwardRef)(DeleteIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/devices.js
function DevicesIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$46.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$46.jsx)("path", { d: "M3.5 20q-.625 0-1.062-.437A1.45 1.45 0 0 1 2 18.5q0-.625.438-1.062A1.45 1.45 0 0 1 3.5 17H4V6q0-.824.588-1.412A1.93 1.93 0 0 1 6 4h14q.424 0 .712.287Q21 4.576 21 5t-.288.713A.97.97 0 0 1 20 6H6v11h4.5q.624 0 1.063.438.437.437.437 1.062t-.437 1.063A1.45 1.45 0 0 1 10.5 20zM15 20a.97.97 0 0 1-.713-.288A.97.97 0 0 1 14 19V9q0-.424.287-.713A.97.97 0 0 1 15 8h6q.424 0 .712.287Q22 8.576 22 9v10q0 .424-.288.712A.97.97 0 0 1 21 20zm1-3h4v-7h-4z" })
	});
}
var import_react$47, import_jsx_runtime$46, devices_default;
var init_devices = __esmMin((() => {
	import_react$47 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$46 = require_jsx_runtime();
	DevicesIcon.displayName = "DevicesIcon";
	devices_default = (0, import_react$47.forwardRef)(DevicesIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/download.js
function DownloadIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$45.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$45.jsx)("path", { d: "M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.95.95 0 0 1-.275-.7q0-.425.275-.7.274-.275.712-.288t.713.263L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875q.274-.274.713-.263.437.014.712.288a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z" })
	});
}
var import_react$46, import_jsx_runtime$45, download_default;
var init_download = __esmMin((() => {
	import_react$46 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$45 = require_jsx_runtime();
	DownloadIcon.displayName = "DownloadIcon";
	download_default = (0, import_react$46.forwardRef)(DownloadIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/edit.js
function EditIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$44.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$44.jsx)("path", {
			fillRule: "evenodd",
			d: "M15.706 2.637a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L9.605 20.052a1 1 0 0 1-.465.263L3.483 21.73a1 1 0 0 1-1.212-1.213l1.414-5.657a1 1 0 0 1 .263-.465zm1.224 7.262L14.102 7.07l-8.544 8.544-.943 3.771 3.771-.943z",
			clipRule: "evenodd"
		})
	});
}
var import_react$45, import_jsx_runtime$44, edit_default;
var init_edit = __esmMin((() => {
	import_react$45 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$44 = require_jsx_runtime();
	EditIcon.displayName = "EditIcon";
	edit_default = (0, import_react$45.forwardRef)(EditIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/email-solid.js
function EmailSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$43.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$43.jsx)("path", { d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111" })
	});
}
var import_react$44, import_jsx_runtime$43, email_solid_default;
var init_email_solid = __esmMin((() => {
	import_react$44 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$43 = require_jsx_runtime();
	EmailSolidIcon.displayName = "EmailSolidIcon";
	email_solid_default = (0, import_react$44.forwardRef)(EmailSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand-all.js
function ExpandAllIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$42.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$42.jsx)("path", { d: "m12 19.2 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275zm0-14.25-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l3.875-3.875Q11.15 3 12 3t1.425.575L17.3 7.45a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z" })
	});
}
var import_react$43, import_jsx_runtime$42, expand_all_default;
var init_expand_all = __esmMin((() => {
	import_react$43 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$42 = require_jsx_runtime();
	ExpandAllIcon.displayName = "ExpandAllIcon";
	expand_all_default = (0, import_react$43.forwardRef)(ExpandAllIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/expand.js
function ExpandIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$41.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$41.jsx)("path", { d: "M21 3.997a1 1 0 0 0-.29-.702l-.005-.004A1 1 0 0 0 20 3h-8a1 1 0 1 0 0 2h5.586L5 17.586V12a1 1 0 1 0-2 0v8.003a1 1 0 0 0 .29.702l.005.004c.18.18.43.291.705.291h8a1 1 0 1 0 0-2H6.414L19 6.414V12a1 1 0 1 0 2 0z" })
	});
}
var import_react$42, import_jsx_runtime$41, expand_default;
var init_expand = __esmMin((() => {
	import_react$42 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$41 = require_jsx_runtime();
	ExpandIcon.displayName = "ExpandIcon";
	expand_default = (0, import_react$42.forwardRef)(ExpandIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/favourite.js
function FavouriteIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$40.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$40.jsx)("path", { d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z" })
	});
}
var import_react$41, import_jsx_runtime$40, favourite_default;
var init_favourite = __esmMin((() => {
	import_react$41 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$40 = require_jsx_runtime();
	FavouriteIcon.displayName = "FavouriteIcon";
	favourite_default = (0, import_react$41.forwardRef)(FavouriteIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/file-error.js
function FileErrorIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$39.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$39.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762v3.516A6 6 0 0 0 18 12V9h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4H6v16h6.341c.264.745.67 1.423 1.187 2z" }), /*#__PURE__*/ (0, import_jsx_runtime$39.jsx)("path", { d: "M18 14a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
var import_react$40, import_jsx_runtime$39, file_error_default;
var init_file_error = __esmMin((() => {
	import_react$40 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$39 = require_jsx_runtime();
	FileErrorIcon.displayName = "FileErrorIcon";
	file_error_default = (0, import_react$40.forwardRef)(FileErrorIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/history.js
function HistoryIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$38.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$38.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" }), /*#__PURE__*/ (0, import_jsx_runtime$38.jsx)("path", { d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z" })]
	});
}
var import_react$39, import_jsx_runtime$38, history_default;
var init_history = __esmMin((() => {
	import_react$39 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$38 = require_jsx_runtime();
	HistoryIcon.displayName = "HistoryIcon";
	history_default = (0, import_react$39.forwardRef)(HistoryIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/home.js
function HomeIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$37.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$37.jsx)("path", {
			fillRule: "evenodd",
			d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
			clipRule: "evenodd"
		})
	});
}
var import_react$38, import_jsx_runtime$37, home_default;
var init_home = __esmMin((() => {
	import_react$38 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$37 = require_jsx_runtime();
	HomeIcon.displayName = "HomeIcon";
	home_default = (0, import_react$38.forwardRef)(HomeIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/image-error.js
function ImageErrorIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$36.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$36.jsx)("path", { d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.803a6 6 0 0 1-.72-2H5v-3.172l4-4 3.585 3.585a6 6 0 0 1 1.172-1.656l-3.343-3.343a2 2 0 0 0-2.828 0L5 13V5h14v7.083c.718.12 1.393.368 2 .72V5a2 2 0 0 0-2-2z" }), /*#__PURE__*/ (0, import_jsx_runtime$36.jsx)("path", { d: "M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })]
	});
}
var import_react$37, import_jsx_runtime$36, image_error_default;
var init_image_error = __esmMin((() => {
	import_react$37 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$36 = require_jsx_runtime();
	ImageErrorIcon.displayName = "ImageErrorIcon";
	image_error_default = (0, import_react$37.forwardRef)(ImageErrorIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
function InlineCodeIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$35.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$35.jsx)("path", { d: "M14.958 5.62a1 1 0 0 0-1.916-.574l-4 13.333a1 1 0 0 0 1.916.575zM5.974 7.232a1 1 0 0 0-1.409.128l-3.333 4a1 1 0 0 0 0 1.28l3.333 4a1 1 0 1 0 1.537-1.28L3.302 12l2.8-3.36a1 1 0 0 0-.128-1.408m12.053 0a1 1 0 0 1 1.408.128l3.333 4a1 1 0 0 1 0 1.28l-3.333 4a1 1 0 1 1-1.537-1.28l2.8-3.36-2.8-3.36a1 1 0 0 1 .128-1.408" })
	});
}
var import_react$36, import_jsx_runtime$35, inline_code_default;
var init_inline_code = __esmMin((() => {
	import_react$36 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$35 = require_jsx_runtime();
	InlineCodeIcon.displayName = "InlineCodeIcon";
	inline_code_default = (0, import_react$36.forwardRef)(InlineCodeIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/leave.js
function LeaveIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$34.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$34.jsx)("path", { d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287" }), /*#__PURE__*/ (0, import_jsx_runtime$34.jsx)("path", { d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z" })]
	});
}
var import_react$35, import_jsx_runtime$34, leave_default;
var init_leave = __esmMin((() => {
	import_react$35 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$34 = require_jsx_runtime();
	LeaveIcon.displayName = "LeaveIcon";
	leave_default = (0, import_react$35.forwardRef)(LeaveIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
function LinkIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$33.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$33.jsx)("path", { d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z" })
	});
}
var import_react$34, import_jsx_runtime$33, link_default;
var init_link = __esmMin((() => {
	import_react$34 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$33 = require_jsx_runtime();
	LinkIcon.displayName = "LinkIcon";
	link_default = (0, import_react$34.forwardRef)(LinkIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-solid.js
function LockSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$32.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$32.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
var import_react$33, import_jsx_runtime$32, lock_solid_default;
var init_lock_solid = __esmMin((() => {
	import_react$33 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$32 = require_jsx_runtime();
	LockSolidIcon.displayName = "LockSolidIcon";
	lock_solid_default = (0, import_react$33.forwardRef)(LockSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock.js
function LockIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$31.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$31.jsx)("path", { d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm0-2h12V10H6zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z" })
	});
}
var import_react$32, import_jsx_runtime$31, lock_default;
var init_lock = __esmMin((() => {
	import_react$32 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$31 = require_jsx_runtime();
	LockIcon.displayName = "LockIcon";
	lock_default = (0, import_react$32.forwardRef)(LockIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-read.js
function MarkAsReadIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$30.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$30.jsx)("path", { d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0" })
	});
}
var import_react$31, import_jsx_runtime$30, mark_as_read_default;
var init_mark_as_read = __esmMin((() => {
	import_react$31 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$30 = require_jsx_runtime();
	MarkAsReadIcon.displayName = "MarkAsReadIcon";
	mark_as_read_default = (0, import_react$31.forwardRef)(MarkAsReadIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mark-as-unread.js
function MarkAsUnreadIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$29.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$29.jsx)("path", { d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }), /*#__PURE__*/ (0, import_jsx_runtime$29.jsx)("path", {
			fillRule: "evenodd",
			d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
			clipRule: "evenodd"
		})]
	});
}
var import_react$30, import_jsx_runtime$29, mark_as_unread_default;
var init_mark_as_unread = __esmMin((() => {
	import_react$30 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$29 = require_jsx_runtime();
	MarkAsUnreadIcon.displayName = "MarkAsUnreadIcon";
	mark_as_unread_default = (0, import_react$30.forwardRef)(MarkAsUnreadIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/mention.js
function MentionIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$28.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$28.jsx)("path", { d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0" })
	});
}
var import_react$29, import_jsx_runtime$28, mention_default;
var init_mention = __esmMin((() => {
	import_react$29 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$28 = require_jsx_runtime();
	MentionIcon.displayName = "MentionIcon";
	mention_default = (0, import_react$29.forwardRef)(MentionIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js
function MinusIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$27.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$27.jsx)("path", { d: "M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13z" })
	});
}
var import_react$28, import_jsx_runtime$27, minus_default;
var init_minus = __esmMin((() => {
	import_react$28 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$27 = require_jsx_runtime();
	MinusIcon.displayName = "MinusIcon";
	minus_default = (0, import_react$28.forwardRef)(MinusIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid.js
function NotificationsOffSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$26.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$26.jsx)("path", { d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z" }), /*#__PURE__*/ (0, import_jsx_runtime$26.jsx)("path", { d: "M10 20h4a2 2 0 0 1-4 0" })]
	});
}
var import_react$27, import_jsx_runtime$26, notifications_off_solid_default;
var init_notifications_off_solid = __esmMin((() => {
	import_react$27 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$26 = require_jsx_runtime();
	NotificationsOffSolidIcon.displayName = "NotificationsOffSolidIcon";
	notifications_off_solid_default = (0, import_react$27.forwardRef)(NotificationsOffSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/notifications-solid.js
function NotificationsSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$25.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$25.jsx)("path", { d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2" })
	});
}
var import_react$26, import_jsx_runtime$25, notifications_solid_default;
var init_notifications_solid = __esmMin((() => {
	import_react$26 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$25 = require_jsx_runtime();
	NotificationsSolidIcon.displayName = "NotificationsSolidIcon";
	notifications_solid_default = (0, import_react$26.forwardRef)(NotificationsSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js
function OverflowHorizontalIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$24.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$24.jsx)("path", { d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14" })
	});
}
var import_react$25, import_jsx_runtime$24, overflow_horizontal_default;
var init_overflow_horizontal = __esmMin((() => {
	import_react$25 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$24 = require_jsx_runtime();
	OverflowHorizontalIcon.displayName = "OverflowHorizontalIcon";
	overflow_horizontal_default = (0, import_react$25.forwardRef)(OverflowHorizontalIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pin.js
function PinIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$23.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$23.jsx)("path", {
			fillRule: "evenodd",
			d: "M6.119 2a.5.5 0 0 0-.35.857L7.85 4.9a.5.5 0 0 1 .15.357v4.487a.5.5 0 0 1-.15.356l-3.7 3.644A.5.5 0 0 0 4 14.1v1.4a.5.5 0 0 0 .5.5H11v6a1 1 0 1 0 2 0v-6h6.5a.5.5 0 0 0 .5-.5v-1.4a.5.5 0 0 0-.15-.356l-3.7-3.644a.5.5 0 0 1-.15-.356V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857zM10 4h4v5.744a2.5 2.5 0 0 0 .746 1.781L17.26 14H6.74l2.514-2.475A2.5 2.5 0 0 0 10 9.744z",
			clipRule: "evenodd"
		})
	});
}
var import_react$24, import_jsx_runtime$23, pin_default;
var init_pin = __esmMin((() => {
	import_react$24 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$23 = require_jsx_runtime();
	PinIcon.displayName = "PinIcon";
	pin_default = (0, import_react$24.forwardRef)(PinIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/pop-out.js
function PopOutIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$22.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$22.jsx)("path", { d: "M5 3h6a1 1 0 1 1 0 2H5v14h14v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" }), /*#__PURE__*/ (0, import_jsx_runtime$22.jsx)("path", { d: "M15 3h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L17.586 5H15a1 1 0 1 1 0-2" })]
	});
}
var import_react$23, import_jsx_runtime$22, pop_out_default;
var init_pop_out = __esmMin((() => {
	import_react$23 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$22 = require_jsx_runtime();
	PopOutIcon.displayName = "PopOutIcon";
	pop_out_default = (0, import_react$23.forwardRef)(PopOutIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction-add.js
function ReactionAddIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$21.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$21.jsx)("path", { d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887" }), /*#__PURE__*/ (0, import_jsx_runtime$21.jsx)("path", { d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z" })]
	});
}
var import_react$22, import_jsx_runtime$21, reaction_add_default;
var init_reaction_add = __esmMin((() => {
	import_react$22 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$21 = require_jsx_runtime();
	ReactionAddIcon.displayName = "ReactionAddIcon";
	reaction_add_default = (0, import_react$22.forwardRef)(ReactionAddIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js
function ReactionIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$20.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$20.jsx)("path", { d: "M15.536 15.536a1 1 0 0 0-1.415-1.415 3 3 0 0 1-2.12.879 3 3 0 0 1-2.122-.879 1 1 0 1 0-1.414 1.415A5 5 0 0 0 12 17c1.38 0 2.632-.56 3.536-1.464M10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" }), /*#__PURE__*/ (0, import_jsx_runtime$20.jsx)("path", { d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0" })]
	});
}
var import_react$21, import_jsx_runtime$20, reaction_default;
var init_reaction = __esmMin((() => {
	import_react$21 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$20 = require_jsx_runtime();
	ReactionIcon.displayName = "ReactionIcon";
	reaction_default = (0, import_react$21.forwardRef)(ReactionIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/reply.js
function ReplyIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$19.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$19.jsx)("path", { d: "M9.405 5.708c.39-.39.39-1.025 0-1.416a.996.996 0 0 0-1.412 0L3.294 9.006a1.004 1.004 0 0 0 0 1.416l4.699 4.714a.996.996 0 0 0 1.412 0c.39-.39.39-1.025 0-1.416l-3.043-3.053h9.153c1.887 0 3.485 1.604 3.485 3.666C19 16.396 17.402 18 15.515 18h-2.093a1 1 0 1 0 0 2h2.093C18.58 20 21 17.425 21 14.333s-2.419-5.666-5.485-5.666H6.456z" })
	});
}
var import_react$20, import_jsx_runtime$19, reply_default;
var init_reply = __esmMin((() => {
	import_react$20 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$19 = require_jsx_runtime();
	ReplyIcon.displayName = "ReplyIcon";
	reply_default = (0, import_react$20.forwardRef)(ReplyIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/restart.js
function RestartIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$18.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$18.jsx)("path", { d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4" })
	});
}
var import_react$19, import_jsx_runtime$18, restart_default;
var init_restart = __esmMin((() => {
	import_react$19 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$18 = require_jsx_runtime();
	RestartIcon.displayName = "RestartIcon";
	restart_default = (0, import_react$19.forwardRef)(RestartIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/settings.js
function SettingsIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$17.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$17.jsx)("path", { d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }), /*#__PURE__*/ (0, import_jsx_runtime$17.jsx)("path", { d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312" })]
	});
}
var import_react$18, import_jsx_runtime$17, settings_default;
var init_settings = __esmMin((() => {
	import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$17 = require_jsx_runtime();
	SettingsIcon.displayName = "SettingsIcon";
	settings_default = (0, import_react$18.forwardRef)(SettingsIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads-solid.js
function ThreadsSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$16.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$16.jsx)("path", { d: "M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-2.293 2.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2m3 7h10q.424 0 .712-.287A.97.97 0 0 0 18 9a.97.97 0 0 0-.288-.713A.97.97 0 0 0 17 8H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 9q0 .424.287.713Q6.576 10 7 10m0 4h6q.424 0 .713-.287A.97.97 0 0 0 14 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 13 12H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 13q0 .424.287.713Q6.576 14 7 14" })
	});
}
var import_react$17, import_jsx_runtime$16, threads_solid_default;
var init_threads_solid = __esmMin((() => {
	import_react$17 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$16 = require_jsx_runtime();
	ThreadsSolidIcon.displayName = "ThreadsSolidIcon";
	threads_solid_default = (0, import_react$17.forwardRef)(ThreadsSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/threads.js
function ThreadsIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$15.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$15.jsx)("path", { d: "M7 10a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 9q0-.424.287-.713A.97.97 0 0 1 7 8h10q.424 0 .712.287Q18 8.576 18 9t-.288.713A.97.97 0 0 1 17 10zm0 4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 6 13q0-.424.287-.713A.97.97 0 0 1 7 12h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 13 14z" }), /*#__PURE__*/ (0, import_jsx_runtime$15.jsx)("path", { d: "M3.707 21.293c-.63.63-1.707.184-1.707-.707V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6zM6 17h14V5H4v13.172l.586-.586A2 2 0 0 1 6 17" })]
	});
}
var import_react$16, import_jsx_runtime$15, threads_default;
var init_threads = __esmMin((() => {
	import_react$16 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$15 = require_jsx_runtime();
	ThreadsIcon.displayName = "ThreadsIcon";
	threads_default = (0, import_react$16.forwardRef)(ThreadsIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/unpin.js
function UnpinIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$14.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$14.jsx)("path", {
			fillRule: "evenodd",
			d: "M5.457 2.083a1 1 0 0 0-1.414 1.414L8.04 7.494v2.25a.5.5 0 0 1-.15.356l-3.7 3.644a.5.5 0 0 0-.15.356v1.4a.5.5 0 0 0 .5.5h6.5v6a1 1 0 0 0 2 0v-6h3.506l4.497 4.497a1 1 0 0 0 1.414-1.414zM14.546 14 10.04 9.494v.25a2.5 2.5 0 0 1-.746 1.781L6.78 14z",
			clipRule: "evenodd"
		}), /*#__PURE__*/ (0, import_jsx_runtime$14.jsx)("path", { d: "M14.04 4v3.85l2.015 2.015a.5.5 0 0 1-.015-.12V5.257a.5.5 0 0 1 .15-.357l2.081-2.043a.5.5 0 0 0-.35-.857h-9.73l2 2z" })]
	});
}
var import_react$15, import_jsx_runtime$14, unpin_default;
var init_unpin = __esmMin((() => {
	import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$14 = require_jsx_runtime();
	UnpinIcon.displayName = "UnpinIcon";
	unpin_default = (0, import_react$15.forwardRef)(UnpinIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-add.js
function UserAddIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$13.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$13.jsx)("path", { d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287" })
	});
}
var import_react$14, import_jsx_runtime$13, user_add_default;
var init_user_add = __esmMin((() => {
	import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$13 = require_jsx_runtime();
	UserAddIcon.displayName = "UserAddIcon";
	user_add_default = (0, import_react$14.forwardRef)(UserAddIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/user-profile-solid.js
function UserProfileSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$12.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$12.jsx)("path", { d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15" }), /*#__PURE__*/ (0, import_jsx_runtime$12.jsx)("path", { d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387" })]
	});
}
var import_react$13, import_jsx_runtime$12, user_profile_solid_default;
var init_user_profile_solid = __esmMin((() => {
	import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$12 = require_jsx_runtime();
	UserProfileSolidIcon.displayName = "UserProfileSolidIcon";
	user_profile_solid_default = (0, import_react$13.forwardRef)(UserProfileSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-declined-solid.js
function VideoCallDeclinedSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$11.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$11.jsx)("path", { d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm10.828 6.828q.3-.3.3-.707 0-.405-.3-.707L11.414 12l1.414-1.414q.3-.3.3-.707t-.3-.707-.707-.301q-.405 0-.707.3L10 10.587 8.586 9.172q-.3-.3-.707-.301-.407 0-.707.3t-.3.708q0 .405.3.707L8.586 12l-1.414 1.414q-.3.3-.3.707t.3.707.707.3q.405 0 .707-.3L10 13.414l1.414 1.414q.3.3.707.3t.707-.3" })
	});
}
var import_react$12, import_jsx_runtime$11, video_call_declined_solid_default;
var init_video_call_declined_solid = __esmMin((() => {
	import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$11 = require_jsx_runtime();
	VideoCallDeclinedSolidIcon.displayName = "VideoCallDeclinedSolidIcon";
	video_call_declined_solid_default = (0, import_react$12.forwardRef)(VideoCallDeclinedSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/video-call-solid.js
function VideoCallSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$10.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$10.jsx)("path", { d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4" })
	});
}
var import_react$11, import_jsx_runtime$10, video_call_solid_default;
var init_video_call_solid = __esmMin((() => {
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$10 = require_jsx_runtime();
	VideoCallSolidIcon.displayName = "VideoCallSolidIcon";
	video_call_solid_default = (0, import_react$11.forwardRef)(VideoCallSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-declined-solid.js
function VoiceCallDeclinedSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$9.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$9.jsx)("path", { d: "M7.623 3.04a1.07 1.07 0 0 1 1.086.929l.542 3.954q.039.27-.038.504a1.1 1.1 0 0 1-.272.427l-1.64 1.64Q7.806 11.5 8.456 12.4c.433.601 1.444 1.697 1.444 1.697.013.012 1.098 1.014 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.194-.194.426-.27a1.1 1.1 0 0 1 .504-.04l3.953.543q.407.058.67.358.26.301.26.728l.04 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.116-6.56q0-.426.329-.756Q3.67 3 4.095 3zM20.25 3q.405 0 .707.3.3.301.3.708t-.3.707l-1.414 1.414 1.414 1.414q.3.3.3.707t-.3.707-.707.3-.707-.3l-1.414-1.414-1.414 1.414q-.3.3-.707.3t-.707-.3T15 8.25q0-.406.3-.707l1.415-1.414L15.3 4.715q-.3-.3-.301-.707 0-.407.3-.707t.71-.301q.405 0 .707.3l1.414 1.415L19.543 3.3q.3-.3.707-.301" })
	});
}
var import_react$10, import_jsx_runtime$9, voice_call_declined_solid_default;
var init_voice_call_declined_solid = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$9 = require_jsx_runtime();
	VoiceCallDeclinedSolidIcon.displayName = "VoiceCallDeclinedSolidIcon";
	voice_call_declined_solid_default = (0, import_react$10.forwardRef)(VoiceCallDeclinedSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/voice-call-solid.js
function VoiceCallSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$8.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime$8.jsx)("path", { d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727" })
	});
}
var import_react$9, import_jsx_runtime$8, voice_call_solid_default;
var init_voice_call_solid = __esmMin((() => {
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$8 = require_jsx_runtime();
	VoiceCallSolidIcon.displayName = "VoiceCallSolidIcon";
	voice_call_solid_default = (0, import_react$9.forwardRef)(VoiceCallSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/volume-on-solid.js
function VolumeOnSolidIcon(props, ref) {
	return /*#__PURE__*/ (0, import_jsx_runtime$7.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		fill: "currentColor",
		viewBox: "0 0 24 24",
		ref,
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime$7.jsx)("path", { d: "M3 14v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707L7 16H5a2 2 0 0 1-2-2m11.122-5.536a1 1 0 0 1 1.414 0A5 5 0 0 1 17 12c0 1.38-.56 2.632-1.464 3.536a1 1 0 0 1-1.415-1.415 3 3 0 0 0 .88-2.121c0-.829-.335-1.577-.88-2.121a1 1 0 0 1 0-1.415" }), /*#__PURE__*/ (0, import_jsx_runtime$7.jsx)("path", { d: "M16.95 5.636a1 1 0 0 1 1.414 0A8.98 8.98 0 0 1 21 12a8.98 8.98 0 0 1-2.636 6.364 1 1 0 0 1-1.414-1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95 1 1 0 0 1 0-1.414" })]
	});
}
var import_react$8, import_jsx_runtime$7, volume_on_solid_default;
var init_volume_on_solid = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$7 = require_jsx_runtime();
	VolumeOnSolidIcon.displayName = "VolumeOnSolidIcon";
	volume_on_solid_default = (0, import_react$8.forwardRef)(VolumeOnSolidIcon);
}));
//#endregion
//#region ../../node_modules/.pnpm/@vector-im+compound-design-tokens@10.2.1_@types+react@19.2.17_react@19.2.8/node_modules/@vector-im/compound-design-tokens/assets/web/icons/index.js
var init_icons = __esmMin((() => {
	init_arrow_down();
	init_arrow_right();
	init_ask_to_join();
	init_attachment();
	init_block();
	init_chat_problem();
	init_chat();
	init_check();
	init_chevron_down();
	init_chevron_left();
	init_chevron_right();
	init_close();
	init_collapse_all();
	init_collapse();
	init_delete();
	init_devices();
	init_download();
	init_edit();
	init_email_solid();
	init_error_solid();
	init_expand_all();
	init_expand();
	init_favourite();
	init_file_error();
	init_history();
	init_home();
	init_image_error();
	init_info();
	init_inline_code();
	init_leave();
	init_link();
	init_lock_solid();
	init_lock();
	init_mark_as_read();
	init_mark_as_unread();
	init_mention();
	init_minus();
	init_notifications_off_solid();
	init_notifications_solid();
	init_overflow_horizontal();
	init_pin();
	init_pop_out();
	init_reaction_add();
	init_reaction();
	init_reply();
	init_restart();
	init_settings();
	init_spinner();
	init_threads_solid();
	init_threads();
	init_unpin();
	init_user_add();
	init_user_profile_solid();
	init_video_call_declined_solid();
	init_video_call_solid();
	init_visibility_off();
	init_visibility_on();
	init_voice_call_declined_solid();
	init_voice_call_solid();
	init_volume_on_solid();
}));
//#endregion
//#region ../../node_modules/.pnpm/react-merge-refs@3.0.2_react@19.2.8/node_modules/react-merge-refs/dist/index.js
function mergeRefsReact16(refs) {
	return (value) => {
		for (const ref of refs) assignRef(ref, value);
	};
}
function mergeRefsReact19(refs) {
	return (value) => {
		const cleanups = [];
		for (const ref of refs) {
			const cleanup = assignRef(ref, value);
			const isCleanup = typeof cleanup === "function";
			cleanups.push(isCleanup ? cleanup : () => assignRef(ref, null));
		}
		return () => {
			for (const cleanup of cleanups) cleanup();
		};
	};
}
function assignRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref) ref.current = value;
}
function useMergeRefs(refs) {
	return (0, import_react$7.useMemo)(() => mergeRefs(refs), refs);
}
var import_react$7, mergeRefs;
var init_dist = __esmMin((() => {
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
	mergeRefs = parseInt(import_react$7.version.split(".")[0], 10) >= 19 ? mergeRefsReact19 : mergeRefsReact16;
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.module.css
var sectionLabel, RoomListItemMoreOptionsMenu_module_default;
var init_RoomListItemMoreOptionsMenu_module = __esmMin((() => {
	sectionLabel = "_sectionLabel_10c27_9";
	RoomListItemMoreOptionsMenu_module_default = { sectionLabel };
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemMoreOptionsMenu.tsx
/**
* The more options menu for room list items.
* Displays additional room actions like mark as read/unread, favorite, invite, etc.
*/
function RoomListItemMoreOptionsMenu({ vm, onOpenChange }) {
	const [open, setOpen] = (0, import_react$6.useState)(false);
	const onMenuOpenChange = (open) => {
		setOpen(open);
		onOpenChange?.(open);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Menu, {
		open,
		onOpenChange: onMenuOpenChange,
		title: _t("room_list|room|more_options"),
		showTitle: false,
		align: "start",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(IconButton, {
			tooltip: _t("room_list|room|more_options"),
			"aria-label": _t("room_list|room|more_options"),
			size: "24px",
			style: { padding: "2px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(overflow_horizontal_default, {})
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MoreOptionContent, { vm })
	});
}
function MoreOptionContent({ vm }) {
	const snapshot = useViewModel(vm);
	const hasSections = snapshot.sections.length > 0;
	const isInSection = (0, import_react$6.useMemo)(() => snapshot.sections.some((section) => section.isSelected), [snapshot.sections]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		onKeyDown: (e) => e.stopPropagation(),
		children: [
			snapshot.canMarkAsRead && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
				Icon: mark_as_read_default,
				label: _t("room_list|more_options|mark_read"),
				onSelect: vm.onMarkAsRead,
				onClick: (evt) => evt.stopPropagation(),
				hideChevron: true
			}),
			snapshot.canMarkAsUnread && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
				Icon: mark_as_unread_default,
				label: _t("room_list|more_options|mark_unread"),
				onSelect: vm.onMarkAsUnread,
				onClick: (evt) => evt.stopPropagation(),
				hideChevron: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ToggleMenuItem, {
				checked: snapshot.isFavourite,
				Icon: favourite_default,
				label: _t("room_list|more_options|favourited"),
				onSelect: vm.onToggleFavorite,
				onClick: (evt) => evt.stopPropagation()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ToggleMenuItem, {
				checked: snapshot.isLowPriority,
				Icon: arrow_down_default,
				label: _t("room_list|more_options|low_priority"),
				onSelect: vm.onToggleLowPriority,
				onClick: (evt) => evt.stopPropagation()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Separator, {}),
			snapshot.canInvite && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
				Icon: user_add_default,
				label: _t("action|invite"),
				onSelect: vm.onInvite,
				onClick: (evt) => evt.stopPropagation(),
				hideChevron: true
			}),
			snapshot.canCopyRoomLink && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
				Icon: link_default,
				label: _t("room_list|more_options|copy_link"),
				onSelect: vm.onCopyRoomLink,
				onClick: (evt) => evt.stopPropagation(),
				hideChevron: true
			}),
			snapshot.areSectionsEnabled && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(SubMenu, {
				trigger: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
					Icon: arrow_right_default,
					label: _t("room_list|more_options|move_to_section"),
					onSelect: null
				}),
				children: [
					snapshot.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
						label: section.name,
						labelProps: { className: RoomListItemMoreOptionsMenu_module_default.sectionLabel },
						onSelect: () => vm.onToggleSection(section.tag),
						onClick: (evt) => evt.stopPropagation(),
						hideChevron: true,
						"aria-checked": section.isSelected,
						children: section.isSelected && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(check_default, {
							color: "var(--cpd-color-icon-tertiary)",
							width: "24px",
							height: "24px"
						})
					}, section.tag)),
					hasSections && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
						label: _t("action|new_section"),
						onSelect: vm.onCreateSection,
						hideChevron: true
					})
				]
			}), isInSection && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
				Icon: minus_default,
				label: _t("room_list|more_options|remove_from_section"),
				onSelect: vm.onRemoveFromSection,
				onClick: (evt) => evt.stopPropagation(),
				hideChevron: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItem, {
				kind: "critical",
				Icon: leave_default,
				label: _t("room_list|more_options|leave_room"),
				onSelect: vm.onLeaveRoom,
				onClick: (evt) => evt.stopPropagation(),
				hideChevron: true
			})
		]
	});
}
var import_react$6, import_jsx_runtime$6;
var init_RoomListItemMoreOptionsMenu = __esmMin((() => {
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$1();
	init_icons();
	init_i18n();
	init_viewmodel();
	init_RoomListItemMoreOptionsMenu_module();
	import_jsx_runtime$6 = require_jsx_runtime();
	RoomListItemMoreOptionsMenu.__docgenInfo = {
		"description": "The more options menu for room list items.\nDisplays additional room actions like mark as read/unread, favorite, invite, etc.",
		"methods": [],
		"displayName": "RoomListItemMoreOptionsMenu",
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
			"onOpenChange": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(open: boolean) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "boolean" },
							"name": "open"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Reports open state to the row, which keeps the hover menu mounted while the popover is open"
			}
		}
	};
	MoreOptionContent.__docgenInfo = {
		"description": "",
		"methods": [],
		"displayName": "MoreOptionContent",
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
			"description": ""
		} }
	};
})), import_jsx_runtime$5, RoomListItemContextMenu;
var init_RoomListItemContextMenu = __esmMin((() => {
	require_react();
	init_dist$1();
	init_i18n();
	init_RoomListItemMoreOptionsMenu();
	import_jsx_runtime$5 = require_jsx_runtime();
	RoomListItemContextMenu = ({ vm, children }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ContextMenu, {
			title: _t("room_list|room|more_options"),
			showTitle: false,
			hasAccessibleAlternative: true,
			trigger: children,
			children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(MoreOptionContent, { vm })
		});
	};
	RoomListItemContextMenu.__docgenInfo = {
		"description": "The context menu for room list items.\nWraps the trigger element with a right-click context menu displaying room options.",
		"methods": [],
		"displayName": "RoomListItemContextMenu",
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
		} }
	};
})), import_jsx_runtime$4, NotificationDecoration;
var init_NotificationDecoration = __esmMin((() => {
	require_react();
	init_icons();
	init_dist$1();
	init_Flex();
	import_jsx_runtime$4 = require_jsx_runtime();
	NotificationDecoration = ({ hasAnyNotificationOrActivity, muted, callType, isUnsentMessage, invited, isMention, isNotification, isActivityNotification, count }) => {
		if (!hasAnyNotificationOrActivity && !muted && !callType) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(Flex, {
			align: "center",
			justify: "center",
			gap: "var(--cpd-space-1x)",
			"data-testid": "notification-decoration",
			children: [
				isUnsentMessage && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(error_solid_default, {
					width: "20px",
					height: "20px",
					fill: "var(--cpd-color-icon-critical-primary)"
				}),
				callType === "video" && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(video_call_solid_default, {
					width: "20px",
					height: "20px",
					fill: "var(--cpd-color-icon-accent-primary)"
				}),
				callType === "voice" && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(voice_call_solid_default, {
					width: "20px",
					height: "20px",
					fill: "var(--cpd-color-icon-accent-primary)"
				}),
				invited && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(email_solid_default, {
					width: "20px",
					height: "20px",
					fill: "var(--cpd-color-icon-accent-primary)"
				}),
				isMention && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(mention_default, {
					width: "20px",
					height: "20px",
					fill: "var(--cpd-color-icon-accent-primary)"
				}),
				(isMention || isNotification) && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(UnreadCounter, { count: count || null }),
				isActivityNotification && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Unread, {}),
				muted && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(notifications_off_solid_default, {
					width: "20px",
					height: "20px",
					fill: "var(--cpd-color-icon-tertiary)"
				})
			]
		});
	};
	NotificationDecoration.__docgenInfo = {
		"description": "Renders notification badges and indicators for rooms/items",
		"methods": [],
		"displayName": "NotificationDecoration",
		"props": {
			"hasAnyNotificationOrActivity": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether there is any notification or activity to display"
			},
			"isUnsentMessage": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether there's an unsent message"
			},
			"invited": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the user is invited to the room"
			},
			"isMention": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the notification is a mention"
			},
			"isActivityNotification": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether there's activity (not a full notification)"
			},
			"isNotification": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether there's a notification (not just activity)"
			},
			"hasUnreadCount": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether there are unread messages with a count"
			},
			"count": {
				"required": true,
				"tsType": { "name": "number" },
				"description": "Notification count"
			},
			"muted": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether notifications are muted"
			},
			"callType": {
				"required": false,
				"tsType": {
					"name": "union",
					"raw": "\"video\" | \"voice\"",
					"elements": [{
						"name": "literal",
						"value": "\"video\""
					}, {
						"name": "literal",
						"value": "\"voice\""
					}]
				},
				"description": "Optional call type indicator"
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomNotifs.ts
var RoomNotifState;
var init_RoomNotifs = __esmMin((() => {
	RoomNotifState = /* @__PURE__ */ function(RoomNotifState) {
		/** All messages (default) */
		RoomNotifState["AllMessages"] = "all_messages";
		/** All messages with sound */
		RoomNotifState["AllMessagesLoud"] = "all_messages_loud";
		/** Only mentions and keywords */
		RoomNotifState["MentionsOnly"] = "mentions_only";
		/** Muted */
		RoomNotifState["Mute"] = "mute";
		return RoomNotifState;
	}({});
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemNotificationMenu.tsx
/**
* The notification settings menu for room list items.
* Displays options to change notification settings.
*/
function RoomListItemNotificationMenu({ vm, onOpenChange }) {
	const snapshot = useViewModel(vm);
	const [open, setOpen] = (0, import_react$3.useState)(false);
	const isMuted = snapshot.roomNotifState === RoomNotifState.Mute;
	const checkComponent = /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(check_default, {
		width: "24px",
		height: "24px",
		color: "var(--cpd-color-icon-primary)"
	});
	const onMenuOpenChange = (open) => {
		setOpen(open);
		onOpenChange?.(open);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Menu, {
		open,
		onOpenChange: onMenuOpenChange,
		title: _t("room_list|notification_options"),
		showTitle: false,
		align: "start",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(IconButton, {
			size: "24px",
			style: { padding: "2px" },
			tooltip: _t("room_list|notification_options"),
			"aria-label": _t("room_list|notification_options"),
			children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(notifications_off_solid_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(notifications_solid_default, {})
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			onKeyDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(MenuItem, {
					"aria-selected": snapshot.roomNotifState === RoomNotifState.AllMessages,
					hideChevron: true,
					label: _t("notifications|default_settings"),
					onSelect: () => vm.onSetRoomNotifState(RoomNotifState.AllMessages),
					onClick: (evt) => evt.stopPropagation(),
					children: snapshot.roomNotifState === RoomNotifState.AllMessages && checkComponent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(MenuItem, {
					"aria-selected": snapshot.roomNotifState === RoomNotifState.AllMessagesLoud,
					hideChevron: true,
					label: _t("notifications|all_messages"),
					onSelect: () => vm.onSetRoomNotifState(RoomNotifState.AllMessagesLoud),
					onClick: (evt) => evt.stopPropagation(),
					children: snapshot.roomNotifState === RoomNotifState.AllMessagesLoud && checkComponent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(MenuItem, {
					"aria-selected": snapshot.roomNotifState === RoomNotifState.MentionsOnly,
					hideChevron: true,
					label: _t("notifications|mentions_keywords"),
					onSelect: () => vm.onSetRoomNotifState(RoomNotifState.MentionsOnly),
					onClick: (evt) => evt.stopPropagation(),
					children: snapshot.roomNotifState === RoomNotifState.MentionsOnly && checkComponent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(MenuItem, {
					"aria-selected": snapshot.roomNotifState === RoomNotifState.Mute,
					hideChevron: true,
					label: _t("notifications|mute_room"),
					onSelect: () => vm.onSetRoomNotifState(RoomNotifState.Mute),
					onClick: (evt) => evt.stopPropagation(),
					children: snapshot.roomNotifState === RoomNotifState.Mute && checkComponent
				})
			]
		})
	});
}
var import_react$3, import_jsx_runtime$3;
var init_RoomListItemNotificationMenu = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$1();
	init_icons();
	init_i18n();
	init_RoomNotifs();
	init_viewmodel();
	import_jsx_runtime$3 = require_jsx_runtime();
	RoomListItemNotificationMenu.__docgenInfo = {
		"description": "The notification settings menu for room list items.\nDisplays options to change notification settings.",
		"methods": [],
		"displayName": "RoomListItemNotificationMenu",
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
			"onOpenChange": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(open: boolean) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "boolean" },
							"name": "open"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Reports open state to the row, which keeps the hover menu mounted while the popover is open"
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.module.css
var roomListItem, hoverMenu, keyboardActive, container, selected, notificationDecoration, dragging, dragSource, content, text, ellipsis, roomName, userStatusEmoji, bold, firstItem, lastItem, RoomListItemView_module_default;
var init_RoomListItemView_module = __esmMin((() => {
	roomListItem = "_roomListItem_1huqe_9";
	hoverMenu = "_hoverMenu_1huqe_33";
	keyboardActive = "_keyboardActive_1huqe_43";
	container = "_container_1huqe_50";
	selected = "_selected_1huqe_55";
	notificationDecoration = "_notificationDecoration_1huqe_64";
	dragging = "_dragging_1huqe_77";
	dragSource = "_dragSource_1huqe_83";
	content = "_content_1huqe_87";
	text = "_text_1huqe_92";
	ellipsis = "_ellipsis_1huqe_96";
	roomName = "_roomName_1huqe_97";
	userStatusEmoji = "_userStatusEmoji_1huqe_108";
	bold = "_bold_1huqe_132";
	firstItem = "_firstItem_1huqe_146";
	lastItem = "_lastItem_1huqe_150";
	RoomListItemView_module_default = {
		roomListItem,
		hoverMenu,
		keyboardActive,
		container,
		selected,
		notificationDecoration,
		dragging,
		dragSource,
		content,
		text,
		ellipsis,
		roomName,
		userStatusEmoji,
		bold,
		firstItem,
		lastItem
	};
})), import_jsx_runtime$2, RoomListItemHoverMenu;
var init_RoomListItemHoverMenu = __esmMin((() => {
	require_react();
	init_Flex();
	init_RoomListItemMoreOptionsMenu();
	init_RoomListItemNotificationMenu();
	init_RoomListItemView_module();
	import_jsx_runtime$2 = require_jsx_runtime();
	RoomListItemHoverMenu = ({ showMoreOptionsMenu, showNotificationMenu, vm, onMenuOpenChange }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(Flex, {
			className: RoomListItemView_module_default.hoverMenu,
			align: "center",
			gap: "var(--cpd-space-1x)",
			children: [showMoreOptionsMenu && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListItemMoreOptionsMenu, {
				vm,
				onOpenChange: onMenuOpenChange
			}), showNotificationMenu && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RoomListItemNotificationMenu, {
				vm,
				onOpenChange: onMenuOpenChange
			})]
		});
	};
	RoomListItemHoverMenu.__docgenInfo = {
		"description": "The hover menu for room list items.\nDisplays more options and notification settings menus.",
		"methods": [],
		"displayName": "RoomListItemHoverMenu",
		"props": {
			"showMoreOptionsMenu": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the more options menu should be shown"
			},
			"showNotificationMenu": {
				"required": true,
				"tsType": { "name": "boolean" },
				"description": "Whether the notification menu should be shown"
			},
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
			"onMenuOpenChange": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(open: boolean) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "boolean" },
							"name": "open"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Reports open state of either menu to the row, which keeps this mounted while a popover is open"
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemContent.tsx
var import_react$1, import_classnames$1, import_jsx_runtime$1, RoomListItemContent;
var init_RoomListItemContent = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$1();
	import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_Flex();
	init_viewmodel();
	init_NotificationDecoration();
	init_RoomListItemHoverMenu();
	init_RoomListItemView_module();
	import_jsx_runtime$1 = require_jsx_runtime();
	RoomListItemContent = (0, import_react$1.memo)(function RoomListItemContent({ vm, renderAvatar, isDragging = false, showHoverMenu = false, onMenuOpenChange }) {
		const item = useViewModel(vm);
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Flex, {
			className: (0, import_classnames$1.default)(RoomListItemView_module_default.container, { [RoomListItemView_module_default.dragging]: isDragging }),
			gap: "var(--cpd-space-3x)",
			align: "center",
			children: [renderAvatar(item.room), /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Flex, {
				className: RoomListItemView_module_default.content,
				gap: "var(--cpd-space-2x)",
				align: "center",
				justify: "space-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
						className: RoomListItemView_module_default.ellipsis,
						children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
							className: RoomListItemView_module_default.roomName,
							title: item.name,
							"data-testid": "room-name",
							children: [item.name, item.userStatus && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Tooltip, {
								description: item.userStatus.text,
								children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
									as: "span",
									className: RoomListItemView_module_default.userStatusEmoji,
									children: item.userStatus.emoji
								})
							})]
						}), item.messagePreview && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
							as: "div",
							size: "sm",
							className: RoomListItemView_module_default.ellipsis,
							title: item.messagePreview,
							children: item.messagePreview
						})]
					}),
					!isDragging && showHoverMenu && (item.showMoreOptionsMenu || item.showNotificationMenu) && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(RoomListItemHoverMenu, {
						showMoreOptionsMenu: item.showMoreOptionsMenu,
						showNotificationMenu: item.showNotificationMenu,
						vm,
						onMenuOpenChange
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						className: RoomListItemView_module_default.notificationDecoration,
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(NotificationDecoration, { ...item.notification })
					})
				]
			})]
		});
	});
	RoomListItemContent.__docgenInfo = {
		"description": "The inner content of a room list item: avatar, room name, message preview,\nhover menu and notification decoration. Used both inside the full\n{@link RoomListItemView} and inside the drag overlay.",
		"methods": [],
		"displayName": "RoomListItemContent",
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
			"isDragging": {
				"required": false,
				"tsType": { "name": "boolean" },
				"description": "Whether the item is being dragged",
				"defaultValue": {
					"value": "false",
					"computed": false
				}
			},
			"showHoverMenu": {
				"required": false,
				"tsType": { "name": "boolean" },
				"description": "Whether to mount the hover menu. The menu is only mounted while the row is hovered, keyboard\nfocused, or has an open popover, because each of its icon buttons carries a label tooltip whose\nfloating element stays in the DOM permanently and runs a Floating-UI `autoUpdate` loop. Mounting\nthose for every visible row makes scrolling attach and tear down scroll listeners and resize\nobservers for the whole viewport on every frame.",
				"defaultValue": {
					"value": "false",
					"computed": false
				}
			},
			"onMenuOpenChange": {
				"required": false,
				"tsType": {
					"name": "signature",
					"type": "function",
					"raw": "(open: boolean) => void",
					"signature": {
						"arguments": [{
							"type": { "name": "boolean" },
							"name": "open"
						}],
						"return": { "name": "void" }
					}
				},
				"description": "Reports open state of either hover menu popover to the row"
			}
		}
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.tsx
/**
* Generate an accessible label for a room based on its notification state.
*/
function getA11yLabel(roomName, notification) {
	if (notification.isUnsentMessage) return _t("room_list|a11y|unsent_message", { roomName });
	else if (notification.invited) return _t("room_list|a11y|invitation", { roomName });
	else if (notification.isMention && notification.count) return _t("room_list|a11y|mention", {
		roomName,
		count: notification.count
	});
	else if (notification.hasUnreadCount && notification.count) return _t("room_list|a11y|unread", {
		roomName,
		count: notification.count
	});
	else if (notification.callType === "voice") return _t("room_list|a11y|voice_call", { roomName });
	else if (notification.callType === "video") return _t("room_list|a11y|video_call", { roomName });
	else return _t("room_list|a11y|default", { roomName });
}
var import_react, import_classnames, import_jsx_runtime, RoomListItemView;
var init_RoomListItemView$1 = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_classnames = /* @__PURE__ */ __toESM(require_classnames(), 1);
	init_dist();
	init_Flex();
	init_RoomListItemContextMenu();
	init_RoomListItemContent();
	init_RoomListItemView_module();
	init_viewmodel();
	init_i18n();
	import_jsx_runtime = require_jsx_runtime();
	RoomListItemView = (0, import_react.memo)(function RoomListItemView({ vm, isSelected, isFocused, onFocus, isFirstItem, isLastItem, renderAvatar, isDragSource = false, ref, ...props }) {
		const internalRef = (0, import_react.useRef)(null);
		const mergedRef = useMergeRefs([ref, internalRef]);
		const item = useViewModel(vm);
		const [keyboardActive, setKeyboardActive] = (0, import_react.useState)(false);
		const [hovered, setHovered] = (0, import_react.useState)(false);
		const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
		(0, import_react.useEffect)(() => {
			if (isFocused) internalRef.current?.focus({ preventScroll: true });
		}, [isFocused]);
		const onItemFocus = (e) => {
			onFocus(item.id, e);
			if (!e.currentTarget.contains(e.relatedTarget) && e.currentTarget.matches(":focus-visible")) setKeyboardActive(true);
		};
		const onItemBlur = (e) => {
			if (!e.currentTarget.contains(e.relatedTarget) && !e.currentTarget.querySelector("[data-state=\"open\"]")) setKeyboardActive(false);
		};
		const a11yLabel = getA11yLabel(item.name, item.notification);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListItemContextMenu, {
			vm,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
				as: "button",
				ref: mergedRef,
				className: (0, import_classnames.default)(RoomListItemView_module_default.roomListItem, "mx_RoomListItemView", {
					[RoomListItemView_module_default.keyboardActive]: keyboardActive,
					[RoomListItemView_module_default.selected]: isSelected,
					[RoomListItemView_module_default.bold]: item.isBold,
					[RoomListItemView_module_default.firstItem]: isFirstItem,
					[RoomListItemView_module_default.lastItem]: isLastItem,
					[RoomListItemView_module_default.dragSource]: isDragSource,
					mx_RoomListItemView_selected: isSelected
				}),
				gap: "var(--cpd-space-3x)",
				align: "stretch",
				type: "button",
				"aria-label": a11yLabel,
				onClick: vm.onOpenRoom,
				onFocus: onItemFocus,
				onBlur: onItemBlur,
				onMouseMove: () => setHovered(true),
				onMouseLeave: () => setHovered(false),
				tabIndex: isFocused ? 0 : -1,
				"aria-selected": props.role === "option" ? isSelected : void 0,
				...props,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListItemContent, {
					vm,
					renderAvatar,
					showHoverMenu: hovered || keyboardActive || menuOpen,
					onMenuOpenChange: setMenuOpen
				})
			})
		});
	});
	RoomListItemView.__docgenInfo = {
		"description": "A presentational room list item component.\nDisplays room name, avatar, message preview, and notifications.",
		"methods": [],
		"displayName": "RoomListItemView",
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
				"description": "Whether this item is the source of an active drag operation",
				"defaultValue": {
					"value": "false",
					"computed": false
				}
			},
			"ref": {
				"required": false,
				"tsType": {
					"name": "Ref",
					"elements": [{ "name": "Element" }],
					"raw": "Ref<Element>"
				},
				"description": ""
			}
		},
		"composes": ["Omit"]
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/index.ts
var init_RoomListItemView = __esmMin((() => {
	init_RoomListItemView$1();
	init_RoomListItemContent();
	init_RoomListItemNotificationMenu();
	init_RoomListItemMoreOptionsMenu();
	init_RoomListItemHoverMenu();
	init_RoomListItemContextMenu();
	init_NotificationDecoration();
	init_RoomNotifs();
}));
//#endregion
export { init_lock_solid as $, init_MenuTitle as $n, init_useMockedViewModel as $t, unpin_default as A, init_Root as An, init_chat as At, reply_default as B, init_Text as Bn, init_arrow_down as Bt, init_video_call_declined_solid as C, RadioMenuItem as Cn, init_Text$1 as Cr, delete_default as Ct, init_user_add as D, Field$1 as Dn, collapse_all_default as Dt, user_profile_solid_default as E, init_Submit as En, init_collapse as Et, init_settings as F, init_visibility_off as Fn, attachment_default as Ft, init_pop_out as G, Menu as Gn, registerTranslations as Gt, reaction_default as H, init_MenuItem as Hn, _td as Ht, settings_default as I, visibility_off_default as In, init_attachment as It, pin_default as J, init_Link as Jn, getNormalizedLanguageKeys as Jt, pop_out_default as K, init_Menu as Kn, setLanguage as Kt, init_restart as L, init_visibility_on as Ln, ask_to_join_default as Lt, threads_default as M, init_InlineSpinner as Mn, init_chat_problem as Mt, init_threads_solid as N, check_default as Nn, block_default as Nt, user_add_default as O, init_Field as On, init_collapse_all as Ot, threads_solid_default as P, init_check as Pn, init_block as Pt, lock_default as Q, MenuTitle as Qn, useViewModel as Qt, restart_default as R, visibility_on_default as Rn, init_ask_to_join as Rt, video_call_solid_default as S, init_Separator as Sn, Text as Sr, init_devices as St, init_user_profile_solid as T, Submit$1 as Tn, require_classnames as Tr, collapse_default as Tt, init_reaction_add as U, chevron_right_default as Un, getLocale as Ut, init_reaction as V, MenuItem as Vn, _t as Vt, reaction_add_default as W, init_chevron_right as Wn, init_i18n as Wt, overflow_horizontal_default as X, Heading as Xn, init_viewmodel as Xt, init_overflow_horizontal as Y, H1 as Yn, init_utils as Yt, init_lock as Z, init_Heading as Zn, init_useViewModel as Zt, init_voice_call_solid as _, ReleaseAnnouncement as _n, init_TooltipProvider as _r, edit_default as _t, init_RoomListItemContent as a, init_Flex$1 as an, init_Avatar as ar, image_error_default as at, voice_call_declined_solid_default as b, init_CheckboxMenuItem as bn, Button as br, init_download as bt, RoomNotifState as c, init_ChatFilter as cn, info_default as cr, init_home as ct, init_NotificationDecoration as d, Dropdown as dn, init_error_solid as dr, file_error_default as dt, useMockedViewModel as en, Badge as er, lock_solid_default as et, init_dist as f, init_Dropdown as fn, IconButton as fr, init_file_error as ft, volume_on_solid_default as g, init_Toast as gn, TooltipProvider as gr, init_expand_all as gt, init_volume_on_solid as h, Toast as hn, init_Tooltip as hr, expand_all_default as ht, RoomListItemContent as i, Flex as in, Avatar as ir, inline_code_default as it, init_threads as j, InlineSpinner as jn, chat_problem_default as jt, init_unpin as k, Root$1 as kn, chat_default as kt, init_RoomNotifs as l, chevron_left_default as ln, init_info as lr, history_default as lt, init_icons as m, init_chevron_down as mn, Tooltip as mr, init_expand as mt, RoomListItemView as n, init_MockViewModel as nn, AvatarStack as nr, link_default as nt, RoomListItemView_module_default as o, init_dist$1 as on, close_default as or, init_image_error as ot, useMergeRefs as p, chevron_down_default as pn, init_IconButton as pr, expand_default as pt, init_pin as q, Link as qn, init_lib as qt, init_RoomListItemView$1 as r, init_Flex as rn, init_AvatarStack as rr, init_inline_code as rt, init_RoomListItemView_module as s, ChatFilter as sn, init_close as sr, home_default as st, init_RoomListItemView as t, MockViewModel as tn, init_Badge as tr, init_link as tt, NotificationDecoration as u, init_chevron_left as un, error_solid_default as ur, init_history as ut, voice_call_solid_default as v, init_ReleaseAnnouncement as vn, IndicatorIcon as vr, init_edit as vt, video_call_declined_solid_default as w, init_RadioMenuItem as wn, require_jsx_runtime as wr, init_delete as wt, init_video_call_solid as x, Separator as xn, init_Button as xr, devices_default as xt, init_voice_call_declined_solid as y, CheckboxMenuItem as yn, init_IndicatorIcon as yr, download_default as yt, init_reply as z, TextControl as zn, arrow_down_default as zt };

//# sourceMappingURL=RoomListItemView-DYy9li3y.js.map