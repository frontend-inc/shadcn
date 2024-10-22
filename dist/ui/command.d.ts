import { type DialogProps } from '@radix-ui/react-dialog';
declare const Command: any;
interface CommandDialogProps extends DialogProps {
}
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => any;
declare const CommandInput: any;
declare const CommandList: any;
declare const CommandEmpty: any;
declare const CommandGroup: any;
declare const CommandSeparator: any;
declare const CommandItem: any;
declare const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): any;
    displayName: string;
};
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
