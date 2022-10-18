import { FC } from 'react';
import { InputProps } from '.';
export declare type InputDateTimeProps = Omit<InputProps, 'onChange'> & {
    onChange?: (datetimeIso: string) => void;
};
export declare const InputDateTime: FC<InputDateTimeProps>;
