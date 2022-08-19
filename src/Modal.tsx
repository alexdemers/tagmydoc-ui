import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Intent, Size, Variant } from '../';
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import BaseModal, { OnAfterOpenCallbackOptions } from 'react-modal';
import { useSwipeable } from 'react-swipeable';

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
	const [isOpen, setIsOpen] = useState(initialIsOpen);
	const [doneOpening, setDoneOpening] = useState(false);
	const [absoluteY, setAbsoluteY] = useState<number>();

	useEffect(() => {
		if (!isOpen) {
			setDoneOpening(false);
		}
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(initialIsOpen);
	}, [initialIsOpen]);

	const handleHandlers = useSwipeable({
		trackMouse: true,
		onSwiping: event => {
			setAbsoluteY(Math.max(0, event.deltaY));
		},
		onSwiped: event => {
			if (event.vxvy[1] > 0.75) {
				setIsOpen(false);
				return;
			}
			setAbsoluteY(undefined);
		}
	});

	const overlayClassNames = classNames(
		'flex sm:items-center justify-center z-30 fixed overflow-x-hidden overflow-y-auto w-full h-full left-0 top-0 transition-colors ease-in-out duration-250 bg-black',
		{
			'bg-opacity-50': doneOpening,
			'bg-opacity-0': !doneOpening
		}
	);

	const modalClassNames = classNames('z-[11] fixed bottom-0 left-0 right-0 sm:static w-full bg-white rounded-t-xl sm:rounded-b-xl sm:shadow-xl outline-none sm:h-auto', size, {
		'transition duration-250': !absoluteY,
		'opacity-100 translate-y-0': doneOpening,
		'opacity-0 translate-y-8': !doneOpening
	});

	const children = (
		<>
			{closeable !== undefined && (
				<div className="absolute top-4 right-4">
					<Button disabled={!closeable} circle icon="times" type="button" variant={Variant.light} intent={Intent.secondary} onClick={() => setIsOpen(false)} size={Size.sm} />
				</div>
			)}
			<div className="py-6 md:hidden" {...handleHandlers}>
				<div className="w-32 h-1 mx-auto bg-gray-300 rounded-full active:bg-gray-500"></div>
			</div>
			<div className="flex flex-col max-h-[80vh] sm:max-h-screen">{props.children}</div>
		</>
	);

	const onAfterOpen = (options?: OnAfterOpenCallbackOptions) => {
		setDoneOpening(true);
		if (props.onAfterOpen) {
			props.onAfterOpen(options);
		}
	};

	return (
		<BaseModal
			{...props}
			isOpen={isOpen}
			onAfterOpen={onAfterOpen}
			closeTimeoutMS={250}
			bodyOpenClassName="overflow-hidden"
			ariaHideApp={false}
			className={modalClassNames}
			style={{ content: { paddingBottom: `env(safe-area-inset-bottom)`, transform: absoluteY ? `translateY(${absoluteY}px)` : undefined } }}
			overlayClassName={overlayClassNames}>
			{onSubmit ? <form onSubmit={onSubmit}>{children}</form> : children}
		</BaseModal>
	);
};

export type ModalHeaderProps = {
	className?: string;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ className = '', children }) => {
	return <header className={`${className} px-6 md:pt-6 sm:px-8 flex items-start justify-between`}>{children}</header>;
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
	return (
		<main {...props} className={`${className} px-6 sm:px-8 py-6 overflow-auto flex-1`}>
			{disabled !== undefined ? <fieldset disabled={disabled}>{children}</fieldset> : children}
		</main>
	);
};
