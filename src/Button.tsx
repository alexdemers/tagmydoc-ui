import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Intent, Size } from './types';
import classNames from 'classnames';

export type ButtonOptions = {
	disabled?: boolean;
	intent?: Intent | 'inset' | null;
	className?: string;
	outline?: boolean;
	size?: Size;
	circle?: boolean;
	block?: boolean;
	shadow?: boolean;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;

const ButtonRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
	return <button {...props} ref={ref} className={resolveButtonClassName(props)} />;
};

export const resolveButtonClassName = ({ disabled = false, circle = false, outline = false, intent = null, className, block = false, size = Size.md, shadow = false }: ButtonOptions) => {
	return classNames(
		className,
		'focus:ring disabled:opacity-50 select-none disabled:cursor-default transition-colors focus:outline-none  ease-in-out duration-100 whitespace-nowrap items-center justify-center',
		{
			// Intent.primary
			'text-blue-500 bg-white border-blue-500': intent === Intent.primary && outline,
			'hover:text-white hover:bg-blue-500': intent === Intent.primary && outline && !disabled,
			'text-white bg-blue-500': intent === Intent.primary && !outline,
			'hover:bg-blue-400': intent === Intent.primary && !outline && !disabled,
			'focus:ring-blue-200 focus:bg-blue-600': intent === Intent.primary && !disabled, // focus

			// Intent.secondary
			// 'bg-gray-200 text-gray-700 focus:ring-gray-400': intent === Intent.secondary && outline,
			// 'hover:bg-gray-300': intent === Intent.secondary && outline && !disabled,
			'bg-gray-200 text-gray-700 focus:ring-gray-400': intent === Intent.secondary && !outline,
			'hover:bg-gray-300': intent === Intent.secondary && !outline && !disabled,
			'focus:ring-gray-400': intent === Intent.secondary && !disabled, // focus

			// Intent.tertiary
			'text-gray-600 bg-white border-gray-600': intent === Intent.tertiary && outline,
			'hover:text-gray-500': intent === Intent.tertiary && outline && !disabled,
			'text-white bg-gray-700 ': intent === Intent.tertiary && !outline,
			'hover:bg-gray-600': intent === Intent.tertiary && !outline && !disabled,
			'focus:ring-gray-200': intent === Intent.tertiary && !disabled, // focus

			// Intent.success
			'text-green-600 bg-white border-green-600': intent === Intent.success && outline,
			'hover:text-white hover:bg-green-600': intent === Intent.success && outline && !disabled,
			'text-white bg-green-600': intent === Intent.success && !outline,
			'hover:bg-green-500': intent === Intent.success && !outline && !disabled,
			'focus:ring-green-300 focus:bg-green-700': intent === Intent.success && !disabled, // focus

			// Intent.warning
			'text-yellow-600 bg-white border-yellow-600': intent === Intent.warning && outline,
			'hover:text-white hover:bg-yellow-600': intent === Intent.warning && outline && !disabled,
			'text-white bg-yellow-700': intent === Intent.warning && !outline,
			'hover:bg-yellow-600': intent === Intent.warning && !outline && !disabled,
			'focus:ring-yellow-200': intent === Intent.warning && !disabled, // focus

			// Intent.danger
			'text-red-600 bg-white border-red-600': intent === Intent.danger && outline,
			'hover:text-white hover:bg-red-600': intent === Intent.danger && outline && !disabled,
			'text-white bg-red-700': intent === Intent.danger && !outline,
			'hover:bg-red-600': intent === Intent.danger && !outline && !disabled,
			'focus:ring-red-300': intent === Intent.danger && !disabled, // focus

			// Intent.neutral
			'text-gray-600 bg-white': intent === Intent.neutral && outline,
			'hover:border-gray-400': intent === Intent.neutral && outline && !disabled,
			'border-gray-400': intent === Intent.neutral && outline && disabled,
			'text-black bg-white': intent === Intent.neutral && !outline,
			'hover:bg-gray-50': intent === Intent.neutral && !outline && !disabled,
			'focus:ring-gray-200 focus:border-gray-400': intent === Intent.neutral && !disabled, // focus

			// Size.xs
			'text-xs rounded': size === Size.xs,
			'w-6 h-6': size === Size.xs && circle,
			'px-2 py-1': size === Size.xs && !circle,

			// Size.sm
			'text-xs md:text-sm rounded': size === Size.sm,
			'w-8 h-8': size === Size.sm && circle,
			'px-2 md:px-3 py-1': size === Size.sm && !circle,

			// Size.md
			'text-base rounded-md': size === Size.md,
			'h-10 w-10': size === Size.md && circle,
			'px-4 py-2': size === Size.md && !circle,

			// Size.lg
			'text-lg rounded-md font-semibold': size === Size.lg,
			'h-12 w-12': size === Size.lg && circle,
			'px-5 py-2': size === Size.lg && !circle,

			// Size.xl
			'text-xl rounded-lg font-semibold': size === Size.xl,
			'h-16 w-16': size === Size.xl && circle,
			'px-5 py-3': size === Size.xl && !circle,

			// Size['2xl']
			'text-2xl rounded-lg font-bold': size === Size['2xl'],
			'h-20 w-20': size === Size['2xl'] && circle,
			'px-6 py-3': size === Size['2xl'] && !circle,

			// circle
			'p-0 rounded-full focus:bg-gray-200': circle,

			// outline
			border: outline,

			// block
			'flex w-full': block,
			'inline-flex flex-wrap': !block,

			// shadow && !disabled
			'shadow-md focus:shadow-none': shadow && !disabled
		}
	);
};

export const Button = forwardRef(ButtonRenderFunction);
