import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Intent, Size } from './types';

export type ButtonOptions = {
	disabled?: boolean;
	intent?: Intent | null;
	className?: string;
	outline?: boolean;
	size?: Size;
	circle?: boolean;
	block?: boolean;
	shadow?: boolean;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;

const ButtonRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
	return <button {...props} ref={ref} className={resolveClassName(props)} />;
};

export const resolveClassName = ({ disabled = false, circle = false, outline = false, intent = null, className = '', block = false, size = Size.md, shadow = false }: ButtonOptions) => {
	let sizeClasses = '',
		colorClasses = ' disabled:opacity-50 ';

	switch (intent) {
		case Intent.danger:
			if (outline) {
				colorClasses += `text-red-600 bg-white border-red-600 ${!disabled ? 'hover:text-white hover:bg-red-600' : ''}`;
			} else {
				colorClasses += `text-white bg-red-700 focus:ring-red-300 ${!disabled ? 'hover:bg-red-600' : ''}`;
			}
			break;
		case Intent.warning:
			if (outline) {
				colorClasses += `text-yellow-600 bg-white border-yellow-600 ${!disabled ? 'hover:text-white hover:bg-yellow-600' : ''}`;
			} else {
				colorClasses += `text-white bg-yellow-700 focus:ring-yellow-200 ${!disabled ? 'hover:bg-yellow-600' : ''}`;
			}
			break;
		case Intent.primary:
			if (outline) {
				colorClasses += `text-blue-500 bg-white border-blue-500 ${!disabled ? 'hover:text-white hover:bg-blue-500' : ''}`;
			} else {
				colorClasses += `text-white bg-blue-500 focus:ring-blue-200 focus:bg-blue-600 ${!disabled ? 'hover:bg-blue-400' : ''}`;
			}
			break;
		case Intent.success:
			if (outline) {
				colorClasses += `text-green-600 bg-white border-green-600 ${!disabled ? 'hover:text-white hover:bg-green-600' : ''}`;
			} else {
				colorClasses += `text-white bg-green-600 focus:ring-green-300 focus:bg-green-700 ${!disabled ? 'hover:bg-green-500' : ''}`;
			}
			break;
		case Intent.secondary:
			colorClasses += `bg-gray-200 text-gray-700 focus:ring-gray-400 ${!disabled ? 'hover:bg-gray-300' : ''}`;
			break;
		case Intent.tertiary:
			if (outline) {
				colorClasses += `text-gray-600 bg-white border-gray-600 focus:ring-gray-200 ${!disabled ? 'hover:text-gray-500' : ''}`;
			} else {
				colorClasses += `text-white bg-gray-700 focus:ring-gray-200 ${!disabled ? 'hover:bg-gray-600' : ''}`;
			}
			break;
		case Intent.neutral:
			if (outline) {
				colorClasses += `text-gray-600 bg-white focus:ring-gray-200 focus:border-gray-400 ${!disabled ? 'hover:border-gray-400' : 'border-gray-400'}`;
			} else {
				colorClasses += `text-black bg-white focus:ring-gray-400 ${!disabled ? 'hover:bg-gray-100' : ''}`;
			}
			break;
	}

	switch (size) {
		case Size.xs:
			sizeClasses = `${circle ? 'p-0 w-6 h-6' : 'px-2 py-1'} text-xs rounded`;
			break;
		case Size.sm:
			sizeClasses = `${circle ? 'p-0 w-8 h-8' : 'px-3 py-1'} text-sm rounded`;
			break;
		case Size.md:
			sizeClasses = `${circle ? 'p-0 h-10 w-10' : 'px-4 py-2'} text-base rounded-md`;
			break;
		case Size.lg:
			sizeClasses = `${circle ? 'p-0' : 'px-5 py-2'} text-lg rounded-md font-semibold`;
			break;
		case Size.xl:
			sizeClasses = `${circle ? 'p-0' : 'px-5 py-3'} text-xl rounded-lg font-semibold`;
			break;
		case Size['2xl']:
			sizeClasses = `${circle ? 'p-0' : 'px-6 py-3'} text-2xl rounded-lg font-bold`;
			break;
	}

	if (block) {
		className += ' flex w-full';
	} else {
		className += ' inline-flex';
	}

	if (shadow && !disabled) {
		className += ' shadow-md focus:shadow-none';
	}

	return `select-none disabled:cursor-default hover:transition-colors focus:outline-none ${circle ? 'rounded-full focus:bg-gray-200' : 'focus:ring'} ${
		outline ? 'border' : ''
	} ease-in-out duration-100 whitespace-nowrap ${sizeClasses} ${colorClasses} ${className} items-center justify-center`;
};

const Button = forwardRef(ButtonRenderFunction);

export default Button;
