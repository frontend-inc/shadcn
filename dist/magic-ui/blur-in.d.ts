import React from 'react';
interface BlurIntProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: {
            filter: string;
            opacity: number;
        };
        visible: {
            filter: string;
            opacity: number;
        };
    };
    duration?: number;
}
declare const BlurIn: ({ children, className, variant, duration, }: BlurIntProps) => any;
export default BlurIn;
