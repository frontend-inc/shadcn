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
exports.Checkbox = void 0;
var React = __importStar(require("react"));
var CheckboxPrimitive = __importStar(require("@radix-ui/react-checkbox"));
var lucide_react_1 = require("lucide-react");
var utils_1 = require("../lib/utils");
var Checkbox = React.forwardRef(function (_a, ref) {
    var className = _a.className, checked = _a.checked, onCheckedChange = _a.onCheckedChange, props = __rest(_a, ["className", "checked", "onCheckedChange"]);
    return (React.createElement(CheckboxPrimitive.Root, __assign({ ref: ref, checked: checked, onCheckedChange: onCheckedChange, className: (0, utils_1.cn)("peer relative h-5 w-5 shrink-0 rounded-sm border-2 border-default-200 transition-all", "data-[state=checked]:bg-primary data-[state=checked]:border-primary", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", "disabled:cursor-not-allowed disabled:opacity-50", "after:content-[''] after:block after:absolute after:inset-0 after:rounded-sm after:bg-primary/20 after:scale-0 after:transition-transform after:duration-300", "active:after:scale-100", className) }, props),
        React.createElement(CheckboxPrimitive.Indicator, { className: (0, utils_1.cn)("flex items-center justify-center text-primary-foreground") },
            React.createElement(lucide_react_1.Check, { className: "h-3 w-3 transition-transform duration-200 ease-in-out" }))));
});
exports.Checkbox = Checkbox;
Checkbox.displayName = "Checkbox";
