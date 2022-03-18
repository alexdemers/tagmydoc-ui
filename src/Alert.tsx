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

	const containerClassNames = classNames('relative border-l-4 rounded', className, {
		// Variants
		'border-red-700 text-red-700 bg-red-100': variant === Variant.danger,
		'border-yellow-700 bg-yellow-100': variant === Variant.warning,
		'border-blue-400 bg-blue-50': variant === Variant.info,
		'border-green-700 text-green-700 bg-green-100': variant === Variant.success,

		// Sizes
		'px-2 py-1 text-sm': size === Size.xs,
		'px-3 py-1 text-sm': size === Size.sm,
		'px-4 py-3 text-base': size === Size.md
	});

	const textClassNames = classNames('flex-1', {
		// Variants
		'text-yellow-600': variant === Variant.warning,
		'text-blue-700': variant === Variant.info,

		// Sizes
		'text-xs': size === Size.xs,
		'text-sm': size === Size.sm || size === Size.md
	});

	const iconClassNames = classNames({
		// Sizes
		'mr-1.5 text-xs': size === Size.xs,
		'mr-2 text-base mt-0.5': size === Size.sm,
		'mr-2 text-lg mt-0.5': size === Size.md,

		'text-blue-400': variant === Variant.info,
		'text-yellow-400': variant === Variant.warning
	});

	return (
		<div className={containerClassNames}>
			<div className={`flex items-start ${onClose !== undefined ? 'pr-8' : ''}`}>
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
