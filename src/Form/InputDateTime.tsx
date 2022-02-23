import { parseISO } from 'date-fns';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Input, InputClassNames, InputProps } from '.';

const _dateTimeInput = document.createElement('input');
_dateTimeInput.setAttribute('type', 'date');
_dateTimeInput.setAttribute('value', 'a');
const isDateTimeLocalSupported = _dateTimeInput.value !== 'a';

export type InputDateTimeProps = Omit<InputProps, 'onChange'> & {
	onChange?: (datetimeIso: string) => void;
};

export const InputDateTime: FC<InputDateTimeProps> = ({ onChange = () => {}, ...inputProps }) => {
	if (!isDateTimeLocalSupported) {
		return <Input type="datetime-local" onChange={e => onChange(e.target.value)} {...inputProps} />;
	}

	return <InputDateTimePolyfill onChange={onChange} {...inputProps} />;
};

const InputDateTimePolyfill: FC<InputDateTimeProps> = ({ onChange = () => {}, value: initialValue = '' }) => {
	const [polyfillDateValue, setPolyfillDateValue] = useState<string | number | readonly string[] | undefined>(initialValue);
	const [polyfillTimeValue, setPolyfillTimeValue] = useState<string | number | readonly string[] | undefined>(initialValue);

	const dateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPolyfillDateValue(e.target.value);
	};

	const timeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPolyfillTimeValue(e.target.value);
	};

	useEffect(() => {
		if (!polyfillDateValue) {
			onChange('');
			return;
		}

		if (!polyfillTimeValue) {
			onChange(`${polyfillDateValue}T00:00:00`);
			return;
		}

		const datetime = parseISO(`${polyfillDateValue} ${polyfillTimeValue}`);
		// eslint-disable-next-line no-self-compare
		if (datetime.getTime() === datetime.getTime()) {
			onChange && onChange(`${polyfillDateValue}T${polyfillTimeValue}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [polyfillDateValue, polyfillTimeValue]);

	return (
		<span className={`inline-flex ${InputClassNames} flex-wrap`}>
			<input type="date" className="bg-transparent border-0 focus:ring-0" value={polyfillDateValue} onChange={dateOnChange} />
			<input type="time" className="bg-transparent border-0 focus:ring-0" value={polyfillTimeValue} onChange={timeOnChange} />
		</span>
	);
};
