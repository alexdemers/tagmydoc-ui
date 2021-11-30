import { ButtonHTMLAttributes, FC } from 'react';
import { Intent } from './types';
export declare type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    intent?: Intent;
    inverse?: boolean;
};
export declare const Badge: FC<BadgeProps>;
