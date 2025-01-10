import { ReactNode } from 'react';
declare const BentoGrid: ({ children, className, }: {
    children: ReactNode;
    className?: string;
}) => any;
declare const BentoCard: ({ name, className, background, Icon, description, href, cta, }: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => any;
export { BentoCard, BentoGrid };
