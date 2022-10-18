import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Intent, Size, Variant } from '../';
import classNames from 'classnames';
import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import BaseModal, { OnAfterOpenCallbackOptions } from 'react-modal';
import { useSwipeable } from 'react-swipeable';

export enum ModalSize {
	XSmall = 'max-w-md',
	Small = 'max-w-xl',
	Medium = 'max-w-2xl',
	Large = 'max-w-3xl',
	XLarge = 'max-w-4xl'
}

export const ModalContext = createContext<{
	setSize: Dispatch<SetStateAction<ModalSize>>;
}>({
	setSize: () => {}
});

export type ModalProps = BaseModal.Props & {
	size?: ModalSize;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
	closeable?: boolean;
	url?: string;
};

interface ModalBodyProps {
	className?: string;
	disabled?: boolean;
}

export const Modal: FC<ModalProps> = ({ size: initialSize = ModalSize.Medium, onSubmit, className, isOpen: initialIsOpen = false, closeable, url, ...props }) => {
	const [isOpen, setIsOpen] = useState(initialIsOpen);
	const [size, setSize] = useState<ModalSize>(initialSize);
	const [doneOpening, setDoneOpening] = useState(false);
	const [absoluteY, setAbsoluteY] = useState<number>();
	const [backOnClose, setBackOnClose] = useState(true);

	const oldState = useRef(window.history.state);

	const popStateListener = useMemo(
		() => () => {
			setBackOnClose(false);
			setIsOpen(false);
		},
		[]
	);

	useEffect(() => {
		if (!isOpen) {
			setDoneOpening(false);
		}
	}, [isOpen]);

	// useLayoutEffect(() => {
	// 	if (!isOpen) {
	// 		window.history.back();
	// 		window.history.replaceState(oldState.current, '', url);
	// 	} else {
	// 		window.history.pushState(null, '', url);
	// 		window.addEventListener('popstate', popStateListener);
	// 	}
	// 	console.log(`useLayoutEffect for ${url}: ${JSON.stringify({ url, isOpen })}`);
	// 	return () => {
	// 		window.removeEventListener('popstate', popStateListener);
	// 	};
	// }, [isOpen]);

	// When opens
	useLayoutEffect(() => {
		if (isOpen) {
			window.history.pushState(null, '', url);
			window.addEventListener('popstate', popStateListener);
		}
		return () => {
			if (isOpen) {
				window.removeEventListener('popstate', popStateListener);
			}
		};
	}, [isOpen]);

	useEffect(() => {
		setSize(initialSize);
	}, [initialSize]);

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

	const modalClassNames = classNames(className, 'overflow-hidden z-[11] fixed bottom-0 left-0 right-0 sm:static w-full bg-white rounded-t-xl sm:rounded-b-xl sm:shadow-xl outline-none sm:h-auto', {
		'transition duration-250': !absoluteY,
		'opacity-100 translate-y-0': doneOpening,
		'opacity-0 translate-y-8': !doneOpening,
		'max-w-md': size === ModalSize.XSmall,
		'max-w-xl': size === ModalSize.Small,
		'max-w-2xl': size === ModalSize.Medium,
		'max-w-3xl': size === ModalSize.Large,
		'max-w-4xl': size === ModalSize.XLarge
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

	// When closed
	const onAfterClose = () => {
		if (backOnClose) {
			window.history.back();
		}
		setBackOnClose(true);
		window.history.replaceState(oldState.current, '', '');
		if (props.onAfterClose) {
			props.onAfterClose();
		}
	};

	return (
		<ModalContext.Provider value={{ setSize }}>
			<BaseModal
				{...props}
				isOpen={isOpen}
				onAfterOpen={onAfterOpen}
				onAfterClose={onAfterClose}
				closeTimeoutMS={250}
				bodyOpenClassName="overflow-hidden"
				ariaHideApp={false}
				className={modalClassNames}
				style={{ content: { paddingBottom: `env(safe-area-inset-bottom)`, transform: absoluteY ? `translateY(${absoluteY}px)` : undefined } }}
				overlayClassName={overlayClassNames}>
				{onSubmit ? <form onSubmit={onSubmit}>{children}</form> : children}
			</BaseModal>
		</ModalContext.Provider>
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
