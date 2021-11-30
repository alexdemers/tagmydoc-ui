import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Intent, Size, Variant } from './types';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ButtonOptions = {
	disabled?: boolean;
	intent?: Intent;
	className?: string;
	size?: Size;
	circle?: boolean;
	block?: boolean;
	shadow?: boolean;
	variant?: Variant;
	icon?: IconProp;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;

const ButtonRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ children, icon, ...props }, ref) => {
	return (
		<button {...props} ref={ref} className={resolveClassName({ icon, ...props })}>
			{children}
			{icon !== undefined && <FontAwesomeIcon icon="arrow-right" className="ml-4 transition transform group-hover:translate-x-1" />}
		</button>
	);
};

export const resolveClassName = ({
	disabled = false,
	circle = false,
	intent = Intent.primary,
	variant = Variant.primary,
	className = '',
	block = false,
	size = Size.md,
	shadow = false,
	icon
}: ButtonOptions) => {
	return classNames(
		className,
		'focus:ring focus:ring-opacity-30 disabled:opacity-50 select-none disabled:cursor-default hover:transition-colors focus:outline-none ease-in-out duration-200 whitespace-nowrap items-center justify-center',
		{
			// Variant.primary (blue)
			'bg-blue-500 active:bg-blue-600': variant === Variant.primary && intent === Intent.primary,
			'hover:bg-blue-400': variant === Variant.primary && intent === Intent.primary && !disabled,
			'text-blue-500 border-blue-200 active:border-blue-600 active:bg-blue-600': variant === Variant.primary && intent === Intent.primary,
			'hover:border-blue-300 hover:text-blue-600': variant === Variant.primary && intent === Intent.secondary && !disabled,
			'text-blue-600 active:text-blue-700': variant === Variant.primary && intent === Intent.tertiary,
			'hover:text-blue-500': variant === Variant.primary && intent === Intent.tertiary && !disabled,
			'focus:ring-blue-500': variant === Variant.primary, // focus

			// Variant.success (green)
			'bg-green-600 active:bg-green-700': variant === Variant.success && intent === Intent.primary,
			'hover:bg-green-500': variant === Variant.success && intent === Intent.primary && !disabled,
			'text-green-600 border-green-600 active:border-green-700 active:bg-green-700': variant === Variant.success && intent === Intent.secondary,
			'hover:border-green-700 hover:text-green-800': variant === Variant.success && intent === Intent.secondary && !disabled,
			'text-green-600 active:text-green-700': variant === Variant.success && intent === Intent.tertiary,
			'hover:text-green-500': variant === Variant.success && intent === Intent.tertiary && !disabled,
			'focus:ring-green-600': variant === Variant.success, // focus

			// Variant.warning (yellow)
			'bg-yellow-600 active:bg-yellow-700': variant === Variant.warning && intent === Intent.primary,
			'hover:bg-yellow-500': variant === Variant.warning && intent === Intent.primary && !disabled,
			'text-yellow-600 border-yellow-600 active:border-yellow-700 active:bg-yellow-700': variant === Variant.warning && intent === Intent.secondary,
			'hover:border-yellow-700 hover:text-yellow-800': variant === Variant.warning && intent === Intent.secondary && !disabled,
			'text-yellow-600 active:text-yellow-700': variant === Variant.warning && intent === Intent.tertiary,
			'hover:text-yellow-500': variant === Variant.warning && intent === Intent.tertiary && !disabled,
			'focus:ring-yellow-600': variant === Variant.warning, // focus

			// Variant.danger (red)
			'bg-red-600 active:bg-red-700': variant === Variant.danger && intent === Intent.primary,
			'hover:bg-red-500': variant === Variant.danger && intent === Intent.primary && !disabled,
			'text-red-600 border-red-600 active:border-red-700 active:bg-red-700': variant === Variant.danger && intent === Intent.secondary,
			'hover:border-red-700 hover:text-red-800': variant === Variant.danger && intent === Intent.secondary && !disabled,
			'text-red-600 active:text-red-700': variant === Variant.danger && intent === Intent.tertiary,
			'hover:text-red-500': variant === Variant.danger && intent === Intent.tertiary && !disabled,
			'focus:ring-red-600': variant === Variant.danger, // focus

			// Variant.neutral (gray)
			'bg-gray-500 active:bg-gray-600': variant === Variant.neutral && intent === Intent.primary,
			'hover:bg-gray-400': variant === Variant.neutral && intent === Intent.primary && !disabled,
			'text-gray-500 border-gray-200 active:border-gray-700 active:bg-gray-700': variant === Variant.neutral && intent === Intent.secondary,
			'hover:border-gray-300 hover:text-gray-800': variant === Variant.neutral && intent === Intent.secondary && !disabled,
			'text-gray-600 active:text-gray-700': variant === Variant.neutral && intent === Intent.tertiary,
			'hover:text-gray-500': variant === Variant.neutral && intent === Intent.tertiary && !disabled,
			'focus:ring-gray-600': variant === Variant.neutral, // focus

			// Intent.primary
			'border border-transparent text-white': intent === Intent.primary && variant !== undefined,

			// Intent.secondary
			'bg-white active:text-white border': intent === Intent.secondary && variant !== undefined,

			// Size.xs
			'text-xs rounded': size === Size.xs,
			'px-2 py-0.5': size === Size.xs && !circle,
			'w-6 h-6': size === Size.xs && circle,

			// Size.sm
			'text-sm rounded': size === Size.sm,
			'px-3 py-1': size === Size.sm && !circle,
			'w-8 h-8': size === Size.sm && circle,

			// Size.md
			'text-base rounded-md': size === Size.md,
			'px-3 py-1.5': size === Size.md && !circle,
			'h-10 w-10': size === Size.md && circle,

			// Size.lg
			'text-lg rounded-md font-medium': size === Size.lg,
			'px-5 py-2': size === Size.lg && !circle,
			'h-12 w-12': size === Size.lg && circle,

			// Size.xl
			'text-xl rounded-lg font-semibold': size === Size.xl,
			'px-5 py-3': size === Size.xl && !circle,
			'h-16 w-16': size === Size.xl && circle,

			// Size['2xl']
			'text-2xl rounded-lg font-semibold': size === Size['2xl'],
			'px-6 py-4': size === Size['2xl'] && !circle,
			'h-20 w-20': size === Size['2xl'] && circle,

			// circle
			'p-0 rounded-full': circle,

			// block
			'flex w-full': block,
			'inline-flex flex-wrap': !block,

			// icon
			group: icon !== undefined,

			// shadow && !disabled
			'shadow-md active:shadow-none': shadow && !disabled
		}
	);
};

export const Button = forwardRef(ButtonRenderFunction);
