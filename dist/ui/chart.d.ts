import * as React from 'react';
import * as RechartsPrimitive from 'recharts';
declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        icon?: React.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare const ChartContainer: any;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => any;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare const ChartTooltipContent: any;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare const ChartLegendContent: any;
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, };
