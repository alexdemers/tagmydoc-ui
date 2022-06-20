import { ButtonHTMLAttributes, ForwardRefRenderFunction } from 'react';
import { Intent, Variant } from 'types';
export declare type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    intent?: Intent;
    inverse?: boolean;
};
export declare const BadgeRenderFn: ForwardRefRenderFunction<HTMLButtonElement, BadgeProps>;
export declare const Badge: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant | undefined;
    intent?: Intent | undefined;
    inverse?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
