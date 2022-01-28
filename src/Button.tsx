import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { Intent, Size, Variant } from './types';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonOptions = {
	disabled?: boolean;
	intent?: Intent;
	className?: string;
	size?: Size;
	circle?: boolean;
	block?: boolean;
	shadow?: boolean;
	variant?: Variant;
	icon?: IconProp;
	iconPosition?: 'left' | 'right';
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & ButtonOptions;

const ButtonRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ children, icon, iconPosition = 'left', ...props }, ref) => {
	return (
		<button {...props} ref={ref} className={resolveButtonClassNames({ icon, ...props })}>
			{icon !== undefined && iconPosition === 'left' && <FontAwesomeIcon icon={icon} className={resolveButtonIconClassNames({ icon, iconPosition, ...props })} />}
			{children}
			{icon !== undefined && iconPosition === 'right' && <FontAwesomeIcon icon={icon} className={resolveButtonIconClassNames({ icon, iconPosition, ...props })} />}
		</button>
	);
};

const resolveButtonIconClassNames = ({ disabled = false, circle = false, intent = Intent.primary, variant, className = '', size = Size.md, iconPosition = 'left' }: ButtonOptions) => {
	return classNames(className, {
		'text-white': intent === Intent.primary,
		'text-blue-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.primary,
		'text-green-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.success,
		'text-yellow-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.warning,
		'text-red-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.danger,
		'text-gray-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.light,
		// 'text-white': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.dark,

		'ml-1.5 group-hover:translate-x-0.5': size === Size.xs && !circle && iconPosition === 'right',
		'ml-2 group-hover:translate-x-0.5': size === Size.sm && !circle && iconPosition === 'right',
		'ml-2.5 group-hover:translate-x-0.5': size === Size.md && !circle && iconPosition === 'right',
		'ml-3 group-hover:translate-x-1': size === Size.lg && !circle && iconPosition === 'right',
		'ml-3 group-hover:translate-x-1 ': size === Size.xl && !circle && iconPosition === 'right',
		'ml-3.5 group-hover:translate-x-1': size === Size['2xl'] && !circle && iconPosition === 'right',

		'mr-1.5 group-hover:translate-x-0.5': size === Size.xs && !circle && iconPosition === 'left',
		'mr-2 group-hover:translate-x-0.5': size === Size.sm && !circle && iconPosition === 'left',
		'mr-2.5 group-hover:translate-x-0.5': size === Size.md && !circle && iconPosition === 'left',
		'mr-3 group-hover:translate-x-1': size === Size.lg && !circle && iconPosition === 'left',
		'mr-3 group-hover:translate-x-1 ': size === Size.xl && !circle && iconPosition === 'left',
		'mr-3.5 group-hover:translate-x-1': size === Size['2xl'] && !circle && iconPosition === 'left',

		'transition-all transform': !disabled
	});
};

export const resolveButtonClassNames = ({ disabled = false, circle = false, intent = Intent.primary, variant, className = '', block = false, size = Size.md, shadow = false, icon }: ButtonOptions) => {
	return classNames(
		className,
		'focus:ring focus:ring-opacity-30 disabled:opacity-50 select-none disabled:cursor-default transition-all focus:outline-none ease-in-out duration-200 whitespace-nowrap items-center justify-center',
		{
			// Variant.primary (blue)
			'bg-blue-500 active:bg-blue-600 text-white': variant === Variant.primary && intent === Intent.primary,
			'hover:bg-blue-400': variant === Variant.primary && intent === Intent.primary && !disabled,
			'text-blue-600 border-blue-200 active:border-blue-600 active:bg-blue-600 active:text-white bg-white': variant === Variant.primary && intent === Intent.secondary,
			'hover:border-blue-300 hover:text-blue-600': variant === Variant.primary && intent === Intent.secondary && !disabled,
			'text-blue-600 active:text-blue-700': variant === Variant.primary && intent === Intent.tertiary,
			'hover:text-blue-500': variant === Variant.primary && intent === Intent.tertiary && !disabled,
			'focus:ring-blue-500': variant === Variant.primary, // focus

			// Variant.success (green)
			'bg-green-600 active:bg-green-700 text-white': variant === Variant.success && intent === Intent.primary,
			'hover:bg-green-500': variant === Variant.success && intent === Intent.primary && !disabled,
			'text-green-600 border-green-600 active:border-green-700 active:bg-green-700 active:text-white bg-white': variant === Variant.success && intent === Intent.secondary,
			'hover:border-green-700 hover:text-green-800': variant === Variant.success && intent === Intent.secondary && !disabled,
			'text-green-600 active:text-green-700': variant === Variant.success && intent === Intent.tertiary,
			'hover:text-green-500': variant === Variant.success && intent === Intent.tertiary && !disabled,
			'focus:ring-green-600': variant === Variant.success, // focus

			// Variant.warning (yellow)
			'bg-yellow-600 active:bg-yellow-700 text-white': variant === Variant.warning && intent === Intent.primary,
			'hover:bg-yellow-500': variant === Variant.warning && intent === Intent.primary && !disabled,
			'text-yellow-600 border-yellow-600 active:border-yellow-700 active:bg-yellow-700 active:text-white bg-white': variant === Variant.warning && intent === Intent.secondary,
			'hover:border-yellow-700 hover:text-yellow-800': variant === Variant.warning && intent === Intent.secondary && !disabled,
			'text-yellow-600 active:text-yellow-700': variant === Variant.warning && intent === Intent.tertiary,
			'hover:text-yellow-500': variant === Variant.warning && intent === Intent.tertiary && !disabled,
			'focus:ring-yellow-600': variant === Variant.warning, // focus

			// Variant.danger (red)
			'bg-red-600 active:bg-red-700 text-white': variant === Variant.danger && intent === Intent.primary,
			'hover:bg-red-500': variant === Variant.danger && intent === Intent.primary && !disabled,
			'text-red-600 border-red-600 active:border-red-700 active:bg-red-700 active:text-white bg-white': variant === Variant.danger && intent === Intent.secondary,
			'hover:border-red-700 hover:text-red-800': variant === Variant.danger && intent === Intent.secondary && !disabled,
			'text-red-600 active:text-red-700': variant === Variant.danger && intent === Intent.tertiary,
			'hover:text-red-500': variant === Variant.danger && intent === Intent.tertiary && !disabled,
			'focus:ring-red-600': variant === Variant.danger, // focus

			// Variant.dark (gray)
			'bg-gray-500 active:bg-gray-600 text-white': variant === Variant.dark && intent === Intent.primary,
			'hover:bg-gray-400': variant === Variant.dark && intent === Intent.primary && !disabled,
			'text-gray-600 border-gray-200 active:border-gray-700 active:bg-gray-700 active:text-white bg-white': variant === Variant.dark && intent === Intent.secondary,
			'hover:border-gray-300 hover:text-gray-800': variant === Variant.dark && intent === Intent.secondary && !disabled,
			'text-gray-600 active:text-gray-700': variant === Variant.dark && intent === Intent.tertiary,
			'hover:text-gray-500': variant === Variant.dark && intent === Intent.tertiary && !disabled,
			'focus:ring-gray-600': variant === Variant.dark, // focus

			// Variant.light (white)
			'bg-white active:bg-gray-200 text-gray-600': variant === Variant.light && intent === Intent.primary,
			'hover:bg-gray-100': variant === Variant.light && intent === Intent.primary && !disabled,
			'text-gray-600 border-gray-200 active:border-gray-400 active:bg-gray-200 bg-white': variant === Variant.light && intent === Intent.secondary,
			'hover:border-gray-300 hover:text-gray-800 ': variant === Variant.light && intent === Intent.secondary && !disabled,
			'text-gray-600 active:text-gray-700 ': variant === Variant.light && intent === Intent.tertiary,
			'hover:text-gray-500 ': variant === Variant.light && intent === Intent.tertiary && !disabled,
			'focus:ring-gray-600 ': variant === Variant.light, // focus

			// Intent.primary
			'border border-transparent': intent === Intent.primary && variant !== undefined,

			// Intent.secondary
			border: intent === Intent.secondary && variant !== undefined,

			// Size.xs
			'text-xs': size === Size.xs,
			'px-2 py-0.5 rounded': size === Size.xs && !circle,
			'w-6 h-6': size === Size.xs && circle,

			// Size.sm
			'text-sm': size === Size.sm,
			'px-3 py-1 rounded': size === Size.sm && !circle,
			'w-8 h-8': size === Size.sm && circle,

			// Size.md
			'text-base': size === Size.md,
			'px-3 py-1.5 rounded-md': size === Size.md && !circle,
			'h-10 w-10': size === Size.md && circle,

			// Size.lg
			'text-lg font-medium': size === Size.lg,
			'px-5 py-2 rounded-md': size === Size.lg && !circle,
			'h-12 w-12': size === Size.lg && circle,

			// Size.xl
			'text-xl font-semibold': size === Size.xl,
			'px-5 py-3 rounded-lg': size === Size.xl && !circle,
			'h-16 w-16': size === Size.xl && circle,

			// Size['2xl']
			'text-2xl font-semibold': size === Size['2xl'],
			'px-6 py-4 rounded-lg': size === Size['2xl'] && !circle,
			'h-20 w-20': size === Size['2xl'] && circle,

			// circle
			'p-0 rounded-full': circle,

			// block
			'flex w-full': block,
			'inline-flex flex-wrap': !block,

			// icon
			group: icon !== undefined,

			// shadow && !disabled
			'shadow-md active:shadow-none': shadow && !disabled && intent !== Intent.tertiary
		}
	);
};

export const Button = forwardRef(ButtonRenderFunction);
