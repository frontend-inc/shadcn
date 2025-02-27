"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollBar = exports.ScrollArea = void 0;
var React = __importStar(require("react"));
var ScrollAreaPrimitive = __importStar(require("@radix-ui/react-scroll-area"));
var utils_1 = require("../lib/utils");
var ScrollArea = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(ScrollAreaPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)('relative overflow-hidden', className) }, props),
        React.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
        React.createElement(ScrollBar, null),
        React.createElement(ScrollAreaPrimitive.Corner, null)));
});
exports.ScrollArea = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? 'vertical' : _b, props = __rest(_a, ["className", "orientation"]);
    return (React.createElement(ScrollAreaPrimitive.ScrollAreaScrollbar, __assign({ ref: ref, orientation: orientation, className: (0, utils_1.cn)('flex touch-none select-none transition-colors', orientation === 'vertical' &&
            'h-full w-2.5 border-l border-l-transparent p-[1px]', orientation === 'horizontal' &&
            'h-2.5 flex-col border-t border-t-transparent p-[1px]', className) }, props),
        React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })));
});
exports.ScrollBar = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
