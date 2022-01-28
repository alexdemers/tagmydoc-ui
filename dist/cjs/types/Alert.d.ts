import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Variant, Size } from 'types';
export declare type AlertProps = {
    icon?: IconProp;
    className?: string;
    variant?: Variant;
    size?: Size;
    onClose?: () => void;
};
export declare const Alert: FC<AlertProps>;
