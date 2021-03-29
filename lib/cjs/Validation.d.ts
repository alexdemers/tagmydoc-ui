import { FC } from 'react';
declare type ValidationFieldProps = {
    validation: Record<string, string[]>;
    fieldName: string;
    errorMessage?: string;
    children: JSX.Element;
};
export declare const ValidationField: FC<ValidationFieldProps>;
export {};
