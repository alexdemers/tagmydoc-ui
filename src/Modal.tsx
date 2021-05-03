import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import BaseModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export enum ModalSize {
	XSmall = 'max-w-md',
	Small = 'max-w-xl',
	Medium = 'max-w-2xl',
	Large = 'max-w-3xl',
	XLarge = 'max-w-4xl'
}

export type ModalProps = PropsWithChildren<BaseModal.Props> & {
	size?: ModalSize;
	className?: string;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

interface ModalBodyProps {
	className?: string;
	disabled?: boolean;
}

const Modal: FC<ModalProps> = ({ size = ModalSize.Medium, onSubmit, className = '', isOpen = false, overlayClassName = '', bodyOpenClassName = '', ...props }) => {
	const [doneOpening, setDoneOpening] = useState(false);

	useEffect(() => {
		if (!isOpen) {
			setDoneOpening(false);
		}
	}, [isOpen]);

	return (
		<BaseModal
			{...props}
			isOpen={isOpen}
			onAfterOpen={() => setDoneOpening(true)}
			closeTimeoutMS={500}
			bodyOpenClassName={`${bodyOpenClassName} overflow-hidden`}
			ariaHideApp={false}
			overlayClassName={`${overlayClassName} z-30 fixed overflow-x-hidden overflow-y-auto w-full h-full left-0 top-0 transition-colors ease-in-out duration-500 bg-black ${
				doneOpening ? 'bg-opacity-50' : 'bg-opacity-0'
			} flex sm:items-center justify-center`}
			className={`w-full bg-white sm:rounded-xl shadow-xl outline-none sm:h-auto ${size} transform transition-all ease-in-out duration-500 ${
				doneOpening ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
			}`}>
			{onSubmit !== undefined && (
				<form onSubmit={onSubmit} className={`transition-transform flex flex-col h-full max-h-screen ${className}`}>
					{props.children}
				</form>
			)}
			{onSubmit === undefined && <div className={`transition-transform flex flex-col h-full max-h-screen ${className}`}>{props.children}</div>}
		</BaseModal>
	);
};

export const ModalHeader = ({ className = '', children }: PropsWithChildren<{ className?: string }>) => {
	return <header className={`${className} px-8 pt-8 flex items-start justify-between`}>{children}</header>;
};

export const ModalHeaderOnlyTitle = ({ className = '', icon = null, children }: PropsWithChildren<{ className?: string; icon?: IconProp | null }>) => {
	return (
		<ModalHeader className={className}>
			<h3 className="text-lg font-medium text-gray-900">
				{icon !== null && <FontAwesomeIcon icon={icon} className="mr-2 text-gray-400" />}
				{children}
			</h3>
		</ModalHeader>
	);
};

export const ModalFooter = ({ className = '', children }: PropsWithChildren<{ className?: string }>) => {
	return <footer className={`${className} sm:rounded-b-xl px-8 py-4 bg-gray-100 items-center space-x-4 flex`}>{children}</footer>;
};

export const ModalBody: FC<ModalBodyProps> = ({ className = '', disabled = undefined, children, ...props }) => {
	const Tag = disabled !== undefined ? 'fieldset' : 'main';
	return (
		<Tag {...props} className={`${className} px-8 py-6 flex-1 sm:flex-auto max-h-screen md:max-h-3/4-screen overflow-auto`}>
			{children}
		</Tag>
	);
};

export default Modal;
