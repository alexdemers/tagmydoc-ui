import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Variant, Size } from 'types';
import classNames from 'classnames';

export type AlertProps = {
	icon?: IconProp;
	className?: string;
	variant?: Variant;
	size?: Size;
	onClose?: () => void;
};

export const Alert: FC<AlertProps> = ({ className = '', size = Size.md, icon, variant, onClose, children }) => {
	switch (variant) {
		case Variant.danger:
			icon = icon || 'exclamation-circle';
			break;
		case Variant.warning:
			icon = icon || 'exclamation-triangle';
			break;
		case Variant.info:
			icon = icon || 'info-circle';
			break;
		case Variant.success:
			icon = icon || 'check-circle';
			break;
	}

	const containerClassNames = classNames('relative border-l-4', className, {
		// Variants
		'border-red-700 text-red-700 bg-red-100': variant === Variant.danger,
		'border-yellow-700 text-yellow-700 bg-yellow-100': variant === Variant.warning,
		'border-blue-700 text-blue-700 bg-blue-100': variant === Variant.info,
		'border-green-700 text-green-700 bg-green-100': variant === Variant.success,

		// Sizes
		'px-2 py-1 text-sm': size === Size.xs,
		'px-3 py-1 text-sm': size === Size.sm,
		'px-4 py-2 text-base': size === Size.md
	});

	const textClassNames = classNames('flex-1', {
		// Variants
		'text-yellow-600': variant === Variant.warning,

		// Sizes
		'text-xs': size === Size.xs,
		'text-sm': size === Size.sm,
		'text-base': size === Size.md
	});

	const iconClassNames = classNames({
		// Sizes
		'mr-1.5 text-xs': size === Size.xs,
		'mr-2 text-base': size === Size.sm || size === Size.md
	});

	return (
		<div className={containerClassNames}>
			<div className={`flex items-baseline ${onClose !== undefined ? 'pr-8' : ''}`}>
				{onClose !== undefined && (
					<button className="absolute right-4 top-4" type="button" onClick={() => onClose()}>
						<FontAwesomeIcon icon="times" fixedWidth />
					</button>
				)}
				{icon !== undefined && <FontAwesomeIcon icon={icon} className={iconClassNames} />}
				<div className={textClassNames}>{children}</div>
			</div>
		</div>
	);
};
