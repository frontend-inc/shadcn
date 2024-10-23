import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues = undefined>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => any;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import("react-hook-form").FieldError;
    id: any;
    name: any;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: any;
declare const FormLabel: any;
declare const FormControl: any;
declare const FormDescription: any;
declare const FormMessage: any;
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, };
