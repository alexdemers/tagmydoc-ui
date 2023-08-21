import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {
	cloneElement,
	FC,
	forwardRef,
	ForwardRefRenderFunction,
	HTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
	ReactNode,
	SelectHTMLAttributes,
	TextareaHTMLAttributes,
	useLayoutEffect,
	useRef,
	useState
} from 'react';
import { ID } from '../StringUtils';
import { Intent, Size } from '../types';

export const InputClassNames = 'border focus:outline-none border-gray-300 focus:ring-theme-primary-lightest focus:ring focus:border-theme-lighter bg-white rounded disabled:bg-gray-200 transition';

export const Row: FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => <div className={`mb-6 last:mb-0 relative ${className}`} {...props} />;

export const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ className = '', ...props }) => <label className={`${className} block font-medium text-gray-700 mb-2`} {...props} />;

export const HelperText: FC<HTMLAttributes<HTMLParagraphElement>> = ({ className = '', ...props }) => <p className={`mt-1 text-xs text-gray-600 ${className}`} {...props} />;

export const Toggle: FC<ToggleProps> = ({ intent = Intent.primary, size = Size.md, className = '', checked, disabled, ...props }) => {
	const id = useRef(ID());

	const containerClassName = classNames('relative rounded-full transition', {
		'w-10 h-5': size === Size.sm,
		'w-12 h-6': size === Size.md,
		'bg-theme-primary': checked,
		'bg-gray-400': !checked,
		'opacity-50': disabled
	});

	const labelClassName = classNames('absolute left-0 bg-white border-2 rounded-full transition transform duration-100 ease-linear cursor-pointer', {
		'mb-1 w-5 h-5': size === Size.sm,
		'mb-2 w-6 h-6': size === Size.md,
		'translate-x-full border-theme-primary': checked,
		'translate-x-0 border-gray-400': !checked
	});

	const inputClassName = classNames(
		'w-full h-full p-0 text-transparent bg-transparent border-0 appearance-none focus:ring-0 focus:ring-offset-0 focus:outline-none checked:bg-none bg-none active:outline-none',
		{}
	);

	return (
		<div className={`inline-flex items-center justify-center cursor-pointer ${className}`}>
			<div className={containerClassName}>
				<label htmlFor={props.id ?? `toggle-${id.current}`} className={labelClassName} />
				<input {...props} checked={checked} disabled={disabled} type="checkbox" id={props.id ?? `toggle-${id.current}`} className={inputClassName} />
			</div>
		</div>
	);
};

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	block?: boolean;
	size?: Size;
};

const TextAreaRenderFunction: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ className = '', size = Size.md, block = false, ...textAreaProps }, ref) => {
	const textAreaClassNames = classNames(InputClassNames, className, {
		'px-3 py-2 text-base': size === Size.md,
		'px-2 py-1 text-sm': size === Size.sm,
		'w-full': block
	});

	return <textarea ref={ref} className={textAreaClassNames} {...textAreaProps} />;
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
	icon?: FontAwesomeIconProps | IconProp | null;
	iconColor?: string;
	block?: boolean;
	mask?: string | Array<string | RegExp>;
	maskChar?: string | null;
	size?: Size;
};

export type InputGroupProps = InputProps & {
	appended?: ReactNode;
	prepended?: ReactNode;
};

export type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
	intent?: Intent;
	size?: Size;
};

const InputRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ className = '', type = 'text', size = Size.md, icon, iconColor = 'text-gray-400', block = false, ...props },
	ref
) => {
	const inputClassNames = classNames(InputClassNames, className, {
		'px-3 py-2 text-base': size === Size.md,
		'px-2 py-1 text-sm': size === Size.sm,
		'block w-full': block,
		'inline-flex': !block,
		'pl-10': icon
	});

	let child = <input type={type} className={inputClassNames} {...props} ref={ref} />;

	if (icon !== null) {
		return (
			<div className={`relative items-center ${block ? 'flex w-full' : 'inline-flex'}`}>
				{child}
				{typeof icon === 'string' ? <FontAwesomeIcon icon={icon} className={`absolute ${iconColor} left-4`} /> : icon}
			</div>
		);
	}

	return child;
};

const InputBlockRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => <Input ref={ref} {...props} block />;

const InputGroupRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputGroupProps> = ({ appended = null, prepended = null, ...inputProps }, ref) => {
	const prependDiv = useRef<HTMLDivElement>(null);
	const appendDiv = useRef<HTMLDivElement>(null);

	const [paddingLeft, setPaddingLeft] = useState<number>();
	const [paddingRight, setPaddingRight] = useState<number>();

	inputProps.style ??= {};

	if (prepended && prependDiv.current) {
		inputProps.style.paddingLeft = `${paddingLeft}px`;
	}

	if (appended && appendDiv.current) {
		inputProps.style.paddingRight = `${paddingRight}px`;
	}

	useLayoutEffect(() => {
		if (prependDiv.current) {
			setPaddingRight(prependDiv.current.offsetWidth);
		}
		if (appendDiv.current) {
			setPaddingLeft(appendDiv.current.offsetWidth);
		}
	}, [appended, prepended]);

	return (
		<div className={`relative ${!inputProps.block ? 'inline-block' : ''}`}>
			<Input ref={ref} {...inputProps} />
			{prepended !== null && (
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" ref={prependDiv}>
					{prepended}
				</div>
			)}
			{appended !== null && (
				<div className={`absolute inset-y-0 right-0 flex items-center ${inputProps.type === 'number' ? 'pl-10' : 'pr-3'} pointer-events-none`} ref={appendDiv}>
					{appended}
				</div>
			)}
		</div>
	);
};

const PasswordInputRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => <Input ref={ref} type="password" autoComplete="new-password" {...props} />;

const PasswordInputBlockRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => <PasswordInput ref={ref} {...props} block />;

const CheckboxRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ size = null, className = '', children, ...props }, ref) => {
	const id = ID();

	return (
		<label className={`flex items-center ${className}`} htmlFor={id}>
			<input ref={ref} type="checkbox" id={id} className={`text-theme-primary ${InputClassNames} ${children !== undefined ? 'mr-2' : ''}`} {...props} />
			{children}
		</label>
	);
};

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
	size?: Size;
	block?: boolean;
};

const SelectRenderFunction: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ size = Size.md, block = false, className = '', ...props }, ref) => {
	switch (size) {
		case Size.sm:
			className += ' text-sm';
			break;
		default:
			className += ' text-base';
			break;
	}

	if (block) {
		className += ' w-full';
	}

	return <select ref={ref} className={`${className} ${InputClassNames}`} {...props} />;
};

type ValidationFieldProps = {
	validation: Record<string, string[]>;
	fieldName: string;
	errorMessage?: string;
	children: JSX.Element;
};

export const ValidationField: FC<ValidationFieldProps> = ({ validation, fieldName, errorMessage, children }) => {
	let errorText = null;

	if (fieldName in validation) {
		errorText = validation[fieldName][0];

		if (errorMessage !== undefined) {
			errorText = errorMessage;
		}
	}

	return (
		<>
			{cloneElement(children, { className: `${children.props.className || ''} ${fieldName in validation ? 'border-red-600 rounded-b-none' : ''}` })}
			{fieldName in validation && (
				<div className="px-2 py-1 text-white bg-red-600 rounded-b">
					<p className="text-sm">{errorText}</p>
				</div>
			)}
		</>
	);
};

export const Checkbox = forwardRef(CheckboxRenderFunction);
export const Select = forwardRef(SelectRenderFunction);
export const Input = forwardRef(InputRenderFunction);
export const InputBlock = forwardRef(InputBlockRenderFunction);
export const InputGroup = forwardRef(InputGroupRenderFunction);
export const PasswordInput = forwardRef(PasswordInputRenderFunction);
export const PasswordInputBlock = forwardRef(PasswordInputBlockRenderFunction);
export const TextArea = forwardRef(TextAreaRenderFunction);
