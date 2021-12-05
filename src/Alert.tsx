import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Variant, Size } from 'types';

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
			className += ' border-red-700 text-red-700 bg-red-100';
			icon = icon || 'exclamation-circle';
			break;
		case Variant.warning:
			className += ' border-yellow-700 text-yellow-700 bg-yellow-100';
			icon = icon || 'exclamation-triangle';
			break;
		case Variant.info:
			className += ' border-blue-700 text-blue-700 bg-blue-100';
			icon = icon || 'info-circle';
			break;
		case Variant.success:
			className += ' border-green-700 text-green-700 bg-green-100';
			icon = icon || 'check-circle';
			break;
	}

	switch (size) {
		case Size.sm:
			className += ' px-3 py-1 text-sm';
			break;
		case Size.md:
			className += ' mb-4 px-4 py-2 text-base';
			break;
	}

	return (
		<div className={`relative border-l-4 ${className}`}>
			<div className={`flex items-start ${onClose !== undefined ? 'pr-8' : ''}`}>
				{onClose !== undefined && (
					<button className="absolute right-4 top-4" type="button" onClick={() => onClose()}>
						<FontAwesomeIcon icon="times" fixedWidth />
					</button>
				)}
				{icon !== undefined && <FontAwesomeIcon icon={icon} className="mt-1 mr-2" />}
				<p className="flex-1">{children}</p>
			</div>
		</div>
	);
};
