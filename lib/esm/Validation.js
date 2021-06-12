import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const ValidationField = ({ validation, fieldName, errorMessage, children }) => {
    let errorText = null;
    if (fieldName in validation) {
        errorText = validation[fieldName][0];
        if (errorMessage !== undefined) {
            errorText = errorMessage;
        }
    }
    return (_jsxs(_Fragment, { children: [React.cloneElement(children, { className: `${children.props.className || ''} ${fieldName in validation ? 'border-red-600 rounded-b-none' : ''}` }),
            fieldName in validation && (_jsx("div", Object.assign({ className: "px-2 py-1 text-white bg-red-600 rounded-b" }, { children: _jsx("p", Object.assign({ className: "text-sm" }, { children: errorText }), void 0) }), void 0))] }, void 0));
};
