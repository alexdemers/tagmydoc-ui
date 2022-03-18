import React, { FC, useEffect, useState } from 'react';
import BaseModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import { Button } from 'Button';
import { Intent, Size, Variant } from 'types';

export enum ModalSize {
	XSmall = 'max-w-md',
	Small = 'max-w-xl',
	Medium = 'max-w-2xl',
	Large = 'max-w-3xl',
	XLarge = 'max-w-4xl'
}

export type ModalProps = BaseModal.Props & {
	size?: ModalSize;
	className?: string;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
	closeable?: boolean;
};

interface ModalBodyProps {
	className?: string;
	disabled?: boolean;
}

export const Modal: FC<ModalProps> = ({ size = ModalSize.Medium, onSubmit, className = '', isOpen: initialIsOpen = false, closeable, ...props }) => {
	const [doneOpening, setDoneOpening] = useState(false);
	const [isOpen, setIsOpen] = useState(initialIsOpen);

	useEffect(() => {
		if (!isOpen) {
			setDoneOpening(false);
		}
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(initialIsOpen);
	}, [initialIsOpen]);

	const overlayClassNames = classNames(
		'flex sm:items-center justify-center z-30 fixed overflow-x-hidden overflow-y-auto w-full h-full left-0 top-0 transition-colors ease-in-out duration-500 bg-black',
		{
			'bg-opacity-50': doneOpening,
			'bg-opacity-0': !doneOpening
		}
	);

	const modalClassNames = classNames(
		'absolute bottom-0 left-0 right-0 sm:static w-full bg-white rounded-t-xl sm:rounded-b-xl sm:shadow-xl outline-none sm:h-auto transform transition-all ease-in-out duration-500',
		size,
		{
			'opacity-100 translate-y-0': doneOpening,
			'opacity-0 translate-y-8': !doneOpening
		}
	);

	const modalBodyClassNames = classNames('transition-transform flex flex-col max-h-[90vh] sm:max-h-screen', className);

	const children = (
		<>
			{closeable !== undefined && (
				<div className="absolute top-4 right-4">
					<Button disabled={!closeable} circle icon="times" type="button" variant={Variant.light} intent={Intent.secondary} onClick={() => setIsOpen(false)} size={Size.sm} />
				</div>
			)}
			{props.children}
		</>
	);

	return (
		<BaseModal
			{...props}
			isOpen={isOpen}
			onAfterOpen={() => setDoneOpening(true)}
			closeTimeoutMS={500}
			bodyOpenClassName="overflow-hidden"
			ariaHideApp={false}
			overlayClassName={overlayClassNames}
			className={modalClassNames}>
			{onSubmit !== undefined && (
				<form onSubmit={onSubmit} className={modalBodyClassNames}>
					{children}
				</form>
			)}
			{onSubmit === undefined && <div className={modalBodyClassNames}>{children}</div>}
		</BaseModal>
	);
};

export type ModalHeaderProps = {
	className?: string;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ className = '', children }) => {
	return <header className={`${className} px-6 sm:px-8 pt-6 sm:pt-8 flex items-start justify-between`}>{children}</header>;
};

export type ModalHeaderOnlyTitleProps = {
	className?: string;
	icon?: IconProp;
};

export const ModalHeaderOnlyTitle: FC<ModalHeaderOnlyTitleProps> = ({ className = '', icon, children }) => {
	return (
		<ModalHeader className={className}>
			<h3 className="text-lg font-medium text-gray-900">
				{icon !== undefined && <FontAwesomeIcon icon={icon} className="mr-2 text-gray-400" />}
				{children}
			</h3>
		</ModalHeader>
	);
};

export type ModalFooterProps = {
	className?: string;
};

export const ModalFooter: FC<ModalFooterProps> = ({ className = '', children }) => {
	return <footer className={`${className} sm:rounded-b-xl px-6 sm:px-8 py-4 bg-gray-100 items-center space-x-4 flex`}>{children}</footer>;
};

export const ModalBody: FC<ModalBodyProps> = ({ className = '', disabled = undefined, children, ...props }) => {
	const Tag = disabled !== undefined ? 'fieldset' : 'main';
	return (
		<Tag {...props} className={`${className} px-6 sm:px-8 py-6 flex-1 sm:flex-auto max-h-screen md:max-h-3/4-screen overflow-auto`}>
			{children}
		</Tag>
	);
};
