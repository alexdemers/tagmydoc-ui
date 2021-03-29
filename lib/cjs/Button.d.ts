import React from 'react';
import { Intent, Size } from './types';
export declare type ButtonOptions = {
    disabled?: boolean;
    intent?: Intent | null;
    className?: string;
    outline?: boolean;
    size?: Size;
    circle?: boolean;
    block?: boolean;
    shadow?: boolean;
};
export declare const resolveClassName: ({ disabled, circle, outline, intent, className, block, size, shadow }: ButtonOptions) => string;
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions & React.RefAttributes<HTMLButtonElement>>;
export default Button;
