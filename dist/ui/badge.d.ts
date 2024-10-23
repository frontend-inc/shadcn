import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    className?: string;
}
declare function Badge({ className, variant, ...props }: BadgeProps): any;
export { Badge, badgeVariants };
