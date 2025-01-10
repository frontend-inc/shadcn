import React from 'react';
interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}
export declare function RainbowButton({ children, className, ...props }: RainbowButtonProps): any;
export {};
