import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FC, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Intent, Size } from '../types';
export declare const InputClassNames = "border focus:outline-none border-gray-300 focus:ring-theme-primary-lightest focus:ring focus:border-theme-primary-lighter bg-white rounded disabled:bg-gray-200 transition";
export declare const Row: FC<HTMLAttributes<HTMLDivElement>>;
export declare const Label: FC<LabelHTMLAttributes<HTMLLabelElement>>;
export declare const HelperText: FC<HTMLAttributes<HTMLParagraphElement>>;
export declare const Toggle: FC<ToggleProps>;
export declare type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean;
    size?: Size;
};
export declare type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    icon?: FontAwesomeIconProps | IconProp | null;
    iconColor?: string;
    block?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    size?: Size;
};
export declare type InputGroupProps = InputProps & {
    appended?: ReactNode;
    prepended?: ReactNode;
};
export declare type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    intent?: Intent;
    size?: Size;
};
export declare type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
    size?: Size;
    block?: boolean;
};
declare type ValidationFieldProps = {
    validation: Record<string, string[]>;
    fieldName: string;
    errorMessage?: string;
    children: JSX.Element;
};
export declare const ValidationField: FC<ValidationFieldProps>;
export declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const Select: import("react").ForwardRefExoticComponent<Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    size?: Size | undefined;
    block?: boolean | undefined;
} & import("react").RefAttributes<HTMLSelectElement>>;
export declare const Input: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const InputBlock: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const InputGroup: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & {
    appended?: ReactNode;
    prepended?: ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const PasswordInput: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const PasswordInputBlock: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const TextArea: import("react").ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean | undefined;
    size?: Size | undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
