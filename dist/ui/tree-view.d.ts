import React from 'react';
interface TreeDataItem {
    id: string;
    name: string;
    icon?: any;
    selectedIcon?: any;
    openIcon?: any;
    children?: TreeDataItem[];
    actions?: React.ReactNode;
    onClick?: () => void;
}
declare const TreeView: any;
export { TreeView, type TreeDataItem };
