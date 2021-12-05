import React from 'react';
import { Intent, Size, Variant } from './types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
};
export declare type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;
export declare const resolveButtonClassNames: ({ disabled, circle, intent, variant, className, block, size, shadow, icon }: ButtonOptions) => string;
export declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions & React.RefAttributes<HTMLButtonElement>>;
export {};
