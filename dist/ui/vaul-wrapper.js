"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaulWrapper = void 0;
var react_1 = __importDefault(require("react"));
function VaulWrapper(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { "data-vaul-drawer-wrapper": "" },
        react_1.default.createElement("div", { className: "relative flex min-h-screen flex-col bg-background" }, children)));
}
exports.VaulWrapper = VaulWrapper;
