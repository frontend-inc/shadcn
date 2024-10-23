declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React.ComponentProps<typeof import("vaul").Root>): any;
    displayName: string;
};
declare const DrawerTrigger: React.ForwardRefExoticComponent<any>;
declare const DrawerPortal: typeof import("vaul").Portal;
declare const DrawerClose: React.ForwardRefExoticComponent<any>;
declare const DrawerOverlay: any;
declare const DrawerContent: any;
declare const DrawerHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): any;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): any;
    displayName: string;
};
declare const DrawerTitle: any;
declare const DrawerDescription: any;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, };
