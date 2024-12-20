// @ts-nocheck
// https://github.com/MrLightful/shadcn-tree-view
'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeView = void 0;
var react_1 = __importDefault(require("react"));
var AccordionPrimitive = __importStar(require("@radix-ui/react-accordion"));
var lucide_react_1 = require("lucide-react");
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("../lib/utils");
var treeVariants = (0, class_variance_authority_1.cva)('group hover:before:opacity-100 before:absolute before:rounded-lg before:left-0 px-2 before:w-full before:opacity-0 before:bg-accent/70 before:h-[2rem] before:-z-10');
var selectedTreeVariants = (0, class_variance_authority_1.cva)('before:opacity-100 before:bg-accent/70 text-accent-foreground');
var TreeView = react_1.default.forwardRef(function (_a, ref) {
    var data = _a.data, initialSelectedItemId = _a.initialSelectedItemId, onSelectChange = _a.onSelectChange, expandAll = _a.expandAll, defaultLeafIcon = _a.defaultLeafIcon, defaultNodeIcon = _a.defaultNodeIcon, className = _a.className, props = __rest(_a, ["data", "initialSelectedItemId", "onSelectChange", "expandAll", "defaultLeafIcon", "defaultNodeIcon", "className"]);
    var _b = react_1.default.useState(initialSelectedItemId), selectedItemId = _b[0], setSelectedItemId = _b[1];
    var handleSelectChange = react_1.default.useCallback(function (item) {
        setSelectedItemId(item === null || item === void 0 ? void 0 : item.id);
        if (onSelectChange) {
            onSelectChange(item);
        }
    }, [onSelectChange]);
    var expandedItemIds = react_1.default.useMemo(function () {
        if (!initialSelectedItemId) {
            return [];
        }
        var ids = [];
        function walkTreeItems(items, targetId) {
            if (items instanceof Array) {
                for (var i = 0; i < items.length; i++) {
                    ids.push(items[i].id);
                    if (walkTreeItems(items[i], targetId) && !expandAll) {
                        return true;
                    }
                    if (!expandAll)
                        ids.pop();
                }
            }
            else if (!expandAll && items.id === targetId) {
                return true;
            }
            else if (items.children) {
                return walkTreeItems(items.children, targetId);
            }
        }
        walkTreeItems(data, initialSelectedItemId);
        return ids;
    }, [data, expandAll, initialSelectedItemId]);
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)('overflow-hidden relative p-2', className) },
        react_1.default.createElement(TreeItem, __assign({ data: data, ref: ref, selectedItemId: selectedItemId, handleSelectChange: handleSelectChange, expandedItemIds: expandedItemIds, defaultLeafIcon: defaultLeafIcon, defaultNodeIcon: defaultNodeIcon }, props))));
});
exports.TreeView = TreeView;
TreeView.displayName = 'TreeView';
var TreeItem = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, data = _a.data, selectedItemId = _a.selectedItemId, handleSelectChange = _a.handleSelectChange, expandedItemIds = _a.expandedItemIds, defaultNodeIcon = _a.defaultNodeIcon, defaultLeafIcon = _a.defaultLeafIcon, props = __rest(_a, ["className", "data", "selectedItemId", "handleSelectChange", "expandedItemIds", "defaultNodeIcon", "defaultLeafIcon"]);
    if (!(data instanceof Array)) {
        data = [data];
    }
    return (react_1.default.createElement("div", __assign({ ref: ref, role: "tree", className: className }, props),
        react_1.default.createElement("ul", null, data.map(function (item) { return (react_1.default.createElement("li", { key: item.id }, item.children ? (react_1.default.createElement(TreeNode, { item: item, selectedItemId: selectedItemId, expandedItemIds: expandedItemIds, handleSelectChange: handleSelectChange, defaultNodeIcon: defaultNodeIcon, defaultLeafIcon: defaultLeafIcon })) : (react_1.default.createElement(TreeLeaf, { item: item, selectedItemId: selectedItemId, handleSelectChange: handleSelectChange, defaultLeafIcon: defaultLeafIcon })))); }))));
});
TreeItem.displayName = 'TreeItem';
var TreeNode = function (_a) {
    var item = _a.item, handleSelectChange = _a.handleSelectChange, expandedItemIds = _a.expandedItemIds, selectedItemId = _a.selectedItemId, defaultNodeIcon = _a.defaultNodeIcon, defaultLeafIcon = _a.defaultLeafIcon;
    var _b = react_1.default.useState(expandedItemIds.includes(item.id) ? [item.id] : []), value = _b[0], setValue = _b[1];
    return (react_1.default.createElement(AccordionPrimitive.Root, { type: "multiple", value: value, onValueChange: function (s) { return setValue(s); } },
        react_1.default.createElement(AccordionPrimitive.Item, { value: item.id },
            react_1.default.createElement(AccordionTrigger, { className: (0, utils_1.cn)(treeVariants(), selectedItemId === item.id && selectedTreeVariants()), onClick: function () {
                    var _a;
                    handleSelectChange(item);
                    (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.call(item);
                } },
                react_1.default.createElement(TreeIcon, { item: item, isSelected: selectedItemId === item.id, isOpen: value.includes(item.id), default: defaultNodeIcon }),
                react_1.default.createElement("span", { className: "text-sm truncate" }, item.name),
                react_1.default.createElement(TreeActions, { isSelected: selectedItemId === item.id }, item.actions)),
            react_1.default.createElement(AccordionContent, { className: "ml-4 pl-1 border-l" },
                react_1.default.createElement(TreeItem, { data: item.children ? item.children : item, selectedItemId: selectedItemId, handleSelectChange: handleSelectChange, expandedItemIds: expandedItemIds, defaultLeafIcon: defaultLeafIcon, defaultNodeIcon: defaultNodeIcon })))));
};
var TreeLeaf = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, item = _a.item, selectedItemId = _a.selectedItemId, handleSelectChange = _a.handleSelectChange, defaultLeafIcon = _a.defaultLeafIcon, props = __rest(_a, ["className", "item", "selectedItemId", "handleSelectChange", "defaultLeafIcon"]);
    return (react_1.default.createElement("div", __assign({ ref: ref, className: (0, utils_1.cn)('ml-5 flex text-left items-center py-2 cursor-pointer before:right-1', treeVariants(), className, selectedItemId === item.id && selectedTreeVariants()), onClick: function () {
            var _a;
            handleSelectChange(item);
            (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.call(item);
        } }, props),
        react_1.default.createElement(TreeIcon, { item: item, isSelected: selectedItemId === item.id, default: defaultLeafIcon }),
        react_1.default.createElement("span", { className: "flex-grow text-sm truncate" }, item.name),
        react_1.default.createElement(TreeActions, { isSelected: selectedItemId === item.id }, item.actions)));
});
TreeLeaf.displayName = 'TreeLeaf';
var AccordionTrigger = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(AccordionPrimitive.Header, null,
        react_1.default.createElement(AccordionPrimitive.Trigger, __assign({ ref: ref, className: (0, utils_1.cn)('flex flex-1 w-full items-center py-2 transition-all first:[&[data-state=open]>svg]:rotate-90', className) }, props),
            react_1.default.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4 shrink-0 transition-transform duration-200 text-accent-foreground/50 mr-1" }),
            children)));
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement(AccordionPrimitive.Content, __assign({ ref: ref, className: (0, utils_1.cn)('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className) }, props),
        react_1.default.createElement("div", { className: "pb-1 pt-0" }, children)));
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var TreeIcon = function (_a) {
    var item = _a.item, isOpen = _a.isOpen, isSelected = _a.isSelected, defaultIcon = _a.default;
    var Icon = defaultIcon;
    if (isSelected && item.selectedIcon) {
        Icon = item.selectedIcon;
    }
    else if (isOpen && item.openIcon) {
        Icon = item.openIcon;
    }
    else if (item.icon) {
        Icon = item.icon;
    }
    return Icon ? (react_1.default.createElement(Icon, { className: "h-4 w-4 shrink-0 mr-2" })) : (react_1.default.createElement(react_1.default.Fragment, null));
};
var TreeActions = function (_a) {
    var children = _a.children, isSelected = _a.isSelected;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)(isSelected ? 'block' : 'hidden', 'absolute right-3 group-hover:block') }, children));
};
