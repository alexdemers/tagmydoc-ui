import * as react from 'react';
import react__default, { FC, HTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, PropsWithChildren } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import BaseModal from 'react-modal';

declare enum Size {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    '2xl' = "2xl"
}
declare enum Intent {
    danger = "danger",
    info = "info",
    warning = "warning",
    success = "success",
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    neutral = "neutral"
}

declare type ButtonOptions = {
    disabled?: boolean;
    intent?: Intent | 'inset' | null;
    className?: string;
    outline?: boolean;
    size?: Size;
    circle?: boolean;
    block?: boolean;
    shadow?: boolean;
};
declare type ButtonProps = react__default.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;
declare const resolveButtonClassName: ({ disabled, circle, outline, intent, className, block, size, shadow }: ButtonOptions) => string;
declare const Button: react__default.ForwardRefExoticComponent<react__default.ButtonHTMLAttributes<HTMLElement> & ButtonOptions & react__default.RefAttributes<HTMLButtonElement>>;

declare const InputClassNames = "border border-gray-300 focus-within:outline-none focus-within:ring-blue-200 focus-within:ring focus-within:border-blue-400 bg-white rounded disabled:bg-gray-200 transition-shadow";
declare const Row: FC<HTMLAttributes<HTMLDivElement>>;
declare const Label: FC<LabelHTMLAttributes<HTMLLabelElement>>;
declare const HelperText: FC<HTMLAttributes<HTMLParagraphElement>>;
declare const Toggle: FC<ToggleProps>;
declare type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean;
    size?: Size;
};
declare type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    icon?: FontAwesomeIconProps | IconProp | null;
    iconColor?: string;
    block?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    size?: Size;
};
declare type InputGroupProps = InputProps & {
    appended?: ReactNode;
    prepended?: ReactNode;
};
declare type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    intent?: Intent;
    size?: Size;
};
declare type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
    size?: Size;
    block?: boolean;
};
declare type InputDateTimeProps = Omit<InputProps, 'onChange'> & {
    onChange?: (datetimeIso: string) => void;
};
declare const InputDateTime: FC<InputDateTimeProps>;
declare type ValidationFieldProps = {
    validation: Record<string, string[]>;
    fieldName: string;
    errorMessage?: string;
    children: JSX.Element;
};
declare const ValidationField: FC<ValidationFieldProps>;
declare const Checkbox: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const Select: react.ForwardRefExoticComponent<Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    size?: Size | undefined;
    block?: boolean | undefined;
} & react.RefAttributes<HTMLSelectElement>>;
declare const Input: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const InputBlock: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const InputGroup: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & {
    appended?: ReactNode;
    prepended?: ReactNode;
} & react.RefAttributes<HTMLInputElement>>;
declare const PasswordInput: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const PasswordInputBlock: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: FontAwesomeIconProps | IconProp | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const TextArea: react.ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLTextAreaElement>>;

declare enum ModalSize {
    XSmall = "max-w-md",
    Small = "max-w-xl",
    Medium = "max-w-2xl",
    Large = "max-w-3xl",
    XLarge = "max-w-4xl"
}
declare type ModalProps = PropsWithChildren<BaseModal.Props> & {
    size?: ModalSize;
    className?: string;
    onSubmit?: (event: react__default.FormEvent<HTMLFormElement>) => void;
};
interface ModalBodyProps {
    className?: string;
    disabled?: boolean;
}
declare const Modal: FC<ModalProps>;
declare const ModalHeader: ({ className, children }: react__default.PropsWithChildren<{
    className?: string | undefined;
}>) => JSX.Element;
declare const ModalHeaderOnlyTitle: ({ className, icon, children }: react__default.PropsWithChildren<{
    className?: string | undefined;
    icon?: IconProp | null | undefined;
}>) => JSX.Element;
declare const ModalFooter: ({ className, children }: react__default.PropsWithChildren<{
    className?: string | undefined;
}>) => JSX.Element;
declare const ModalBody: FC<ModalBodyProps>;

/**
 * Math.random should be unique because of its seeding algorithm.
 * Convert it to base 36 (numbers + letters), and grab the first 9 characters
 * after the decimal.
 */
declare const ID: () => string;

export { Button, ButtonOptions, ButtonProps, Checkbox, HelperText, ID, Input, InputBlock, InputClassNames, InputDateTime, InputDateTimeProps, InputGroup, InputGroupProps, InputProps, Intent, Label, Modal, ModalBody, ModalFooter, ModalHeader, ModalHeaderOnlyTitle, ModalProps, ModalSize, PasswordInput, PasswordInputBlock, Row, Select, SelectProps, Size, TextArea, TextAreaProps, Toggle, ToggleProps, ValidationField, resolveButtonClassName };