import React, { FC } from 'react';
import BaseModal from 'react-modal';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export declare enum ModalSize {
    XSmall = "max-w-md",
    Small = "max-w-xl",
    Medium = "max-w-2xl",
    Large = "max-w-3xl",
    XLarge = "max-w-4xl"
}
export declare type ModalProps = BaseModal.Props & {
    size?: ModalSize;
    className?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    closeable?: boolean;
};
interface ModalBodyProps {
    className?: string;
    disabled?: boolean;
}
export declare const Modal: FC<ModalProps>;
export declare type ModalHeaderProps = {
    className?: string;
};
export declare const ModalHeader: FC<ModalHeaderProps>;
export declare type ModalHeaderOnlyTitleProps = {
    className?: string;
    icon?: IconProp;
};
export declare const ModalHeaderOnlyTitle: FC<ModalHeaderOnlyTitleProps>;
export declare type ModalFooterProps = {
    className?: string;
};
export declare const ModalFooter: FC<ModalFooterProps>;
export declare const ModalBody: FC<ModalBodyProps>;
export {};
