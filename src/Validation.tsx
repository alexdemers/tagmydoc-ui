import React, { FC } from 'react';

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
			{React.cloneElement(children, { className: `${children.props.className || ''} ${fieldName in validation ? 'border-red-600 rounded-b-none' : ''}` })}
			{fieldName in validation && (
				<div className="px-2 py-1 text-white bg-red-600 rounded-b">
					<p className="text-sm">{errorText}</p>
				</div>
			)}
		</>
	);
};
