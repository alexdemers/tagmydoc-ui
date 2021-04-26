import { ButtonHTMLAttributes, FC } from 'react';
import { Intent } from './types';
declare type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    intent?: Intent;
    inverse?: boolean;
};
declare const Badge: FC<BadgeProps>;
export default Badge;
