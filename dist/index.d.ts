import * as react from 'react';
import react__default, { FC, ButtonHTMLAttributes, ForwardRefRenderFunction, HTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, Dispatch, SetStateAction } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Variant as Variant$1, Size as Size$1, Intent as Intent$1 } from 'types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import BaseModal from 'react-modal';

declare type AlertProps = {
    icon?: IconProp;
    className?: string;
    variant?: Variant$1;
    size?: Size$1;
    onClose?: () => void;
};
declare const Alert: FC<AlertProps>;

declare type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant$1;
    intent?: Intent$1;
    inverse?: boolean;
};
declare const BadgeRenderFn: ForwardRefRenderFunction<HTMLButtonElement, BadgeProps>;
declare const Badge: react.ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant$1 | undefined;
    intent?: Intent$1 | undefined;
    inverse?: boolean | undefined;
} & react.RefAttributes<HTMLButtonElement>>;

declare enum Size {
    xxs = "xxs",
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    '2xl' = "2xl"
}
declare enum Variant {
    primary = "primary",
    secondary = "secondary",
    danger = "danger",
    info = "info",
    warning = "warning",
    success = "success",
    dark = "dark",
    light = "light"
}
declare enum Intent {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}

declare type ButtonOptions = {
    disabled?: boolean;
    intent?: Intent;
    className?: string;
    size?: Size;
    circle?: boolean;
    block?: boolean;
    shadow?: boolean;
    variant?: Variant;
    icon?: IconProp;
    iconStart?: IconProp;
    iconEnd?: IconProp;
    loading?: boolean;
    animateIcon?: boolean;
};
declare type ButtonProps = react__default.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;
declare const resolveButtonClassNames: ({ disabled, circle, intent, variant, className, block, size, shadow, iconStart, iconEnd }: ButtonOptions) => string;
declare const Button: react__default.ForwardRefExoticComponent<react__default.ButtonHTMLAttributes<HTMLElement> & ButtonOptions & react__default.RefAttributes<HTMLButtonElement>>;

declare const InputClassNames = "border focus:outline-none border-gray-300 focus:ring-theme-primary-lightest focus:ring focus:border-theme-lighter bg-white rounded disabled:bg-gray-200 transition";
declare const Row: FC<HTMLAttributes<HTMLDivElement>>;
declare const Label: FC<LabelHTMLAttributes<HTMLLabelElement>>;
declare const HelperText: FC<HTMLAttributes<HTMLParagraphElement>>;
declare const Toggle: FC<ToggleProps>;
declare type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    block?: boolean;
    size?: Size;
};
declare type InputProps$1 = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    icon?: FontAwesomeIconProps | IconProp | null;
    iconColor?: string;
    block?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    size?: Size;
};
declare type InputGroupProps = InputProps$1 & {
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
declare type ValidationFieldProps = {
    validation: Record<string, string[]>;
    fieldName: string;
    errorMessage?: string;
    children: JSX.Element;
};
declare const ValidationField: FC<ValidationFieldProps>;
declare const Checkbox: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
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
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const InputBlock: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const InputGroup: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
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
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
    iconColor?: string | undefined;
    block?: boolean | undefined;
    mask?: string | (string | RegExp)[] | undefined;
    maskChar?: string | null | undefined;
    size?: Size | undefined;
} & react.RefAttributes<HTMLInputElement>>;
declare const PasswordInputBlock: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    icon?: IconProp | FontAwesomeIconProps | null | undefined;
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

declare type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    icon?: FontAwesomeIconProps | IconProp | null;
    iconColor?: string;
    block?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    size?: Size;
};

declare type InputDateTimeProps = Omit<InputProps, 'onChange'> & {
    onChange?: (datetimeIso: string) => void;
};
declare const InputDateTime: FC<InputDateTimeProps>;

declare enum ModalSize {
    XSmall = "max-w-md",
    Small = "max-w-xl",
    Medium = "max-w-2xl",
    Large = "max-w-3xl",
    XLarge = "max-w-4xl"
}
declare const ModalContext: react__default.Context<{
    setSize: Dispatch<SetStateAction<ModalSize>>;
}>;
declare type ModalProps = BaseModal.Props & {
    size?: ModalSize;
    onSubmit?: (event: react__default.FormEvent<HTMLFormElement>) => void;
    closeable?: boolean;
    url?: string;
};
declare type ModalBodyProps = HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
};
declare const Modal: FC<ModalProps>;
declare type ModalHeaderProps = {
    className?: string;
};
declare const ModalHeader: FC<ModalHeaderProps>;
declare type ModalHeaderOnlyTitleProps = {
    className?: string;
    icon?: IconProp;
};
declare const ModalHeaderOnlyTitle: FC<ModalHeaderOnlyTitleProps>;
declare type ModalFooterProps = {
    className?: string;
};
declare const ModalFooter: FC<ModalFooterProps>;
declare const ModalBody: FC<ModalBodyProps>;

/**
 * Math.random should be unique because of its seeding algorithm.
 * Convert it to base 36 (numbers + letters), and grab the first 9 characters
 * after the decimal.
 */
declare const ID: () => string;

export { Alert, AlertProps, Badge, BadgeProps, BadgeRenderFn, Button, ButtonProps, Checkbox, HelperText, ID, Input, InputBlock, InputClassNames, InputDateTime, InputDateTimeProps, InputGroup, InputGroupProps, InputProps$1 as InputProps, Intent, Label, Modal, ModalBody, ModalContext, ModalFooter, ModalFooterProps, ModalHeader, ModalHeaderOnlyTitle, ModalHeaderOnlyTitleProps, ModalHeaderProps, ModalProps, ModalSize, PasswordInput, PasswordInputBlock, Row, Select, SelectProps, Size, TextArea, TextAreaProps, Toggle, ToggleProps, ValidationField, Variant, resolveButtonClassNames };
