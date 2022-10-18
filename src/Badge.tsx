import classNames from 'classnames';
import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react';
import { Intent, Variant } from 'types';

export type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: Variant;
	intent?: Intent;
	inverse?: boolean;
};

export const BadgeRenderFn: ForwardRefRenderFunction<HTMLButtonElement, BadgeProps> = ({ variant, inverse = false, className = '', ...props }, ref) => {
	const tagClassNames = classNames(className, 'whitespace-nowrap px-2 inline-flex font-semibold text-xs hover:transition-colors focus:ring ease-in-out duration-100 rounded-full', {
		'bg-red-200 text-red-600': variant === Variant.danger && !inverse,
		'bg-red-600 text-white': variant === Variant.danger && inverse,
		'hover:bg-red-600 active:bg-red-800': variant === Variant.danger && !!props.onClick,

		'bg-yellow-200 text-yellow-700': variant === Variant.warning && !inverse,
		'bg-yellow-600 text-white': variant === Variant.warning && inverse,
		'hover:bg-yellow-500 active:bg-yellow-700': variant === Variant.warning && !!props.onClick,

		'bg-blue-100 text-blue-800': variant === Variant.primary && !inverse,
		'bg-blue-800 text-white': variant === Variant.primary && inverse,
		'hover:bg-blue-400 active:bg-blue-600': variant === Variant.primary && !!props.onClick,

		'bg-green-200 text-green-800': variant === Variant.success && !inverse,
		'bg-green-800 text-white': variant === Variant.success && inverse,
		'hover:bg-green-400 active:bg-green-600': variant === Variant.success && !!props.onClick,

		'bg-gray-300 text-white': variant === Variant.dark && !inverse,
		'bg-white text-gray-300': variant === Variant.dark && inverse,
		'hover:bg-green-400 active:bg-green-600 disabled:text-gray-500': variant === Variant.dark && !!props.onClick,

		'bg-gray-100 text-gray-800': variant === Variant.light,
		'hover:bg-gray-200 active:bg-gray-800 disabled:text-white': variant === Variant.light && !!props.onClick,

		'disabled:bg-opacity-50': !!props.onClick
	});

	const Tag = !!props.type || props.onClick ? 'button' : 'span';

	return <Tag className={tagClassNames} ref={ref} {...props} />;
};

export const Badge = forwardRef(BadgeRenderFn);
