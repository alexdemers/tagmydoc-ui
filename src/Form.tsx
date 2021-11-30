import {
	FC,
	forwardRef,
	ForwardRefRenderFunction,
	ReactNode,
	useRef,
	SelectHTMLAttributes,
	useState,
	useEffect,
	LabelHTMLAttributes,
	HTMLAttributes,
	InputHTMLAttributes,
	ChangeEvent,
	TextareaHTMLAttributes,
	useLayoutEffect,
	cloneElement
} from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import InputMask from 'react-input-mask';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ID } from './StringUtils';
import { Intent, Size } from './types';
import { parseISO } from 'date-fns';

export const InputClassNames =
	'border border-gray-300 focus-within:outline-none focus-within:ring-blue-200 focus-within:ring focus-within:border-blue-400 bg-white rounded disabled:bg-gray-200 transition-shadow';

export const Row: FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => <div className={`mb-6 last:mb-0 ${className}`} {...props} />;

export const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ className = '', ...props }) => <label className={`${className} block font-medium text-gray-700 mb-2`} {...props} />;

export const HelperText: FC<HTMLAttributes<HTMLParagraphElement>> = ({ className = '', ...props }) => <p className={`mt-1 text-xs text-gray-600 ${className}`} {...props} />;

export const Toggle: FC<ToggleProps> = ({ intent = Intent.primary, size = Size.md, className = '', checked, ...props }) => {
	const id = useRef(ID());

	let containerClassName = '';
	let toggleClassName = '';

	switch (size) {
		case Size.sm:
			containerClassName = 'w-10 h-5';
			toggleClassName = 'mb-1 w-5 h-5';
			break;
		case Size.md:
			containerClassName = 'w-12 h-6';
			toggleClassName = 'mb-2 w-6 h-6';
			break;
	}

	return (
		<div className={`inline-flex items-center justify-center cursor-pointer ${className}`}>
			<div className={`relative rounded-full ${containerClassName} transition ${checked ? 'bg-blue-500' : 'bg-gray-400'}`}>
				<label
					htmlFor={props.id || `toggle-${id.current}`}
					className={`${
						checked ? 'translate-x-full border-blue-500' : 'translate-x-0 border-gray-400'
					} absolute left-0 bg-white border-2 ${toggleClassName} rounded-full transition transform duration-100 ease-linear cursor-pointer`}
				/>
				<input
					{...props}
					checked={checked}
					type="checkbox"
					id={props.id || `toggle-${id.current}`}
					className="w-full h-full p-0 text-transparent bg-transparent border-0 appearance-none focus:ring-0 focus:ring-offset-0 focus:outline-none checked:bg-none bg-none active:outline-none"
				/>
			</div>
		</div>
	);
};

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	block?: boolean;
	size?: Size;
};

const TextAreaRenderFunction: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ className = '', size = Size.md, block = false, ...textAreaProps }, ref) => {
	switch (size) {
		case Size.md:
			className += ' px-3 py-2 text-base';
			break;
		case Size.sm:
			className += ' px-2 py-1 text-sm';
			break;
	}

	if (block) {
		className += ' w-full';
	}

	return <textarea ref={ref} className={`${className} ${InputClassNames}`} {...textAreaProps} />;
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

const InputRenderFunction: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ type = 'text', size = Size.md, icon, iconColor = 'text-gray-400', block = false, ...props }, ref) => {
	let className = '';

	switch (size) {
		case Size.md:
			className = 'px-3 py-2 text-base';
			break;
		case Size.sm:
			className = 'px-2 py-1 text-sm';
			break;
	}

	props.className = `${block ? 'block w-full' : 'inline-flex'} ${className} ${InputClassNames} ${icon ? 'pl-10' : ''} ${props.className !== undefined ? props.className : ''}`;

	let child = null;

	if (props.mask !== undefined) {
		child = (
			<InputMask mask={props.mask} maskPlaceholder={props.maskChar || null} value={props.value} onChange={props.onChange}>
				{(inputProps: Record<string, string>) => <input type={type} {...props} {...inputProps} ref={ref} />}
			</InputMask>
		);
	} else {
		child = <input type={type} {...props} ref={ref} />;
	}

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
			setPaddingLeft(prependDiv.current.offsetWidth);
		}
		if (appendDiv.current) {
			setPaddingRight(appendDiv.current.offsetWidth);
		}
	}, [appended, prepended]);

	return (
		<div className="relative w-full">
			<InputBlock ref={ref} {...inputProps} />
			{prepended !== null && (
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" ref={prependDiv}>
					{prepended}
				</div>
			)}
			{appended !== null && (
				<div className={`absolute inset-y-0 right-0 flex items-center ${inputProps.type === 'number' ? 'pr-10' : 'pr-3'} pointer-events-none`} ref={appendDiv}>
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
			<input ref={ref} type="checkbox" id={id} className={`${InputClassNames} ${children !== undefined ? 'mr-2' : ''}`} {...props} />
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

const isDateTimeLocalSupported = false;

export type InputDateTimeProps = Omit<InputProps, 'onChange'> & {
	onChange?: (datetimeIso: string) => void;
};

export const InputDateTime: FC<InputDateTimeProps> = ({ value: initialValue, onChange, ...inputProps }) => {
	const [polyfillDateValue, setPolyfillDateValue] = useState<string | number | readonly string[] | undefined>();
	const [polyfillTimeValue, setPolyfillTimeValue] = useState<string | number | readonly string[] | undefined>();

	const nativeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e.target.value);
	};

	const dateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPolyfillDateValue(e.target.value);
	};

	const timeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPolyfillTimeValue(e.target.value);
	};

	useEffect(() => {
		if (!polyfillDateValue || !polyfillTimeValue) {
			onChange && onChange('');
			return;
		}

		const datetime = parseISO(`${polyfillDateValue} ${polyfillTimeValue}`);
		// eslint-disable-next-line no-self-compare
		if (datetime.getTime() === datetime.getTime()) {
			onChange && onChange(`${polyfillDateValue}T${polyfillTimeValue}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [polyfillDateValue, polyfillTimeValue]);

	if (isDateTimeLocalSupported) {
		return <Input type="datetime-local" onChange={nativeOnChange} {...inputProps} />;
	}

	return (
		<span className={`inline-flex ${InputClassNames}`}>
			<input type="date" className="bg-transparent border-0 focus:ring-0" value={polyfillDateValue} onChange={dateOnChange} />
			<input type="time" className="bg-transparent border-0 focus:ring-0" value={polyfillTimeValue} onChange={timeOnChange} />
		</span>
	);
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
