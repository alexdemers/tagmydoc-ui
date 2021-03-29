import React, { FC, PropsWithChildren } from 'react';
import BaseModal from 'react-modal';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export declare enum ModalSize {
    XSmall = "max-w-md",
    Small = "max-w-xl",
    Medium = "max-w-2xl",
    Large = "max-w-3xl",
    XLarge = "max-w-4xl"
}
export declare type ModalProps = PropsWithChildren<BaseModal.Props> & {
    size?: ModalSize;
    className?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
interface ModalBodyProps {
    className?: string;
    disabled?: boolean;
}
declare const Modal: FC<ModalProps>;
export declare const ModalHeader: ({ className, children }: React.PropsWithChildren<{
    className?: string | undefined;
}>) => JSX.Element;
export declare const ModalHeaderOnlyTitle: ({ className, icon, children }: React.PropsWithChildren<{
    className?: string | undefined;
    icon?: IconProp | null | undefined;
}>) => JSX.Element;
export declare const ModalFooter: ({ className, children }: React.PropsWithChildren<{
    className?: string | undefined;
}>) => JSX.Element;
export declare const ModalBody: FC<ModalBodyProps>;
export default Modal;
