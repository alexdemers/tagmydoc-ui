import { ButtonHTMLAttributes, FC } from 'react';
import { Intent, Variant } from 'types';
export declare type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    intent?: Intent;
    inverse?: boolean;
};
export declare const Badge: FC<BadgeProps>;
