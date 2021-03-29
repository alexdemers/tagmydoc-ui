import React, { FC, ForwardRefRenderFunction, ReactNode, LabelHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Intent, Size } from './types';
export declare const InputClassNames = "border border-gray-300 focus-within:outline-none focus-within:ring-blue-200 focus-within:ring focus-within:border-blue-400 bg-white rounded disabled:bg-gray-200 transition-shadow";
export declare const Row: FC<HTMLAttributes<HTMLDivElement>>;
export declare const Label: FC<LabelHTMLAttributes<HTMLLabelElement>>;
export declare const HelperText: FC<HTMLAttributes<HTMLParagraphElement>>;
export declare const Toggle: FC<ToggleProps>;
export declare type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean;
    size?: Size;
};
export declare const TextAreaRenderFunction: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps>;
export declare type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    icon?: FontAwesomeIconProps | IconProp | null;
    iconColor?: string;
    block?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    size?: Size;
};
declare type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    intent?: Intent;
    size?: Size;
};
declare type InputDateTimeProps = Omit<InputProps, 'onChange'> & {
    onChange?: (datetimeIso: string) => void;
};
export declare const InputDateTime: FC<InputDateTimeProps>;
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const Select: React.ForwardRefExoticComponent<Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    size?: Size | undefined;
    block?: boolean | undefined;
} & React.RefAttributes<HTMLSelectElement>>;
export declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const InputBlock: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const InputGroup: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & {
    appended?: ReactNode;
    prepended?: ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export declare const PasswordInput: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const PasswordInputBlock: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const TextArea: React.ForwardRefExoticComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean | undefined;
    size?: Size | undefined;
} & React.RefAttributes<HTMLTextAreaElement>>;
export {};
