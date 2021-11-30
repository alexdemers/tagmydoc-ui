import React from 'react';
import { Intent, Size } from './types';
export declare type ButtonOptions = {
    disabled?: boolean;
    intent?: Intent | 'inset' | null;
    className?: string;
    outline?: boolean;
    size?: Size;
    circle?: boolean;
    block?: boolean;
    shadow?: boolean;
};
export declare type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;
export declare const resolveButtonClassName: ({ disabled, circle, outline, intent, className, block, size, shadow }: ButtonOptions) => string;
export declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions & React.RefAttributes<HTMLButtonElement>>;
