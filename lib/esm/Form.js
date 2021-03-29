var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputMask from 'react-input-mask';
import { ID } from './StringUtils';
import { Intent, Size } from './types';
import { parseISO } from 'date-fns';
export const InputClassNames = 'border border-gray-300 focus-within:outline-none focus-within:ring-blue-200 focus-within:ring focus-within:border-blue-400 bg-white rounded disabled:bg-gray-200 transition-shadow';
export const Row = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return _jsx("div", Object.assign({ className: `mb-6 last:mb-0 ${className}` }, props), void 0);
};
export const Label = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return _jsx("label", Object.assign({ className: `${className} block font-medium text-gray-700 mb-2` }, props), void 0);
};
export const HelperText = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return _jsx("p", Object.assign({ className: `mt-1 text-xs text-gray-600 ${className}` }, props), void 0);
};
export const Toggle = (_a) => {
    var { intent = Intent.primary, size = Size.md, className = '', checked } = _a, props = __rest(_a, ["intent", "size", "className", "checked"]);
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
    return (_jsx("div", Object.assign({ className: `inline-flex items-center justify-center cursor-pointer ${className}` }, { children: _jsxs("div", Object.assign({ className: `relative rounded-full ${containerClassName} transition ${checked ? 'bg-blue-500' : 'bg-gray-400'}` }, { children: [_jsx("label", { htmlFor: props.id || `toggle-${id.current}`, className: `${checked ? 'translate-x-full border-blue-500' : 'translate-x-0 border-gray-400'} absolute left-0 bg-white border-2 ${toggleClassName} rounded-full transition transform duration-100 ease-linear cursor-pointer` }, void 0),
                _jsx("input", Object.assign({}, props, { checked: checked, type: "checkbox", id: props.id || `toggle-${id.current}`, className: "w-full h-full p-0 text-transparent bg-transparent border-0 appearance-none focus:ring-0 focus:ring-offset-0 focus:outline-none checked:bg-none bg-none active:outline-none" }), void 0)] }), void 0) }), void 0));
};
export const TextAreaRenderFunction = (_a, ref) => {
    var { className = '', size = Size.md, block = false } = _a, textAreaProps = __rest(_a, ["className", "size", "block"]);
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
    return _jsx("textarea", Object.assign({ ref: ref, className: `${className} ${InputClassNames}` }, textAreaProps), void 0);
};
const InputRenderFunction = (_a, ref) => {
    var { type = 'text', size = Size.md, icon, iconColor = 'text-gray-400', block = false } = _a, props = __rest(_a, ["type", "size", "icon", "iconColor", "block"]);
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
        child = (_jsx(InputMask, Object.assign({ mask: props.mask, maskPlaceholder: props.maskChar || null, value: props.value, onChange: props.onChange }, { children: (inputProps) => _jsx("input", Object.assign({ type: type }, props, inputProps, { ref: ref }), void 0) }), void 0));
    }
    else {
        child = _jsx("input", Object.assign({ type: type }, props, { ref: ref }), void 0);
    }
    if (icon !== null) {
        return (_jsxs("div", Object.assign({ className: `relative items-center ${block ? 'flex w-full' : 'inline-flex'}` }, { children: [child, typeof icon === 'string' ? _jsx(FontAwesomeIcon, { icon: icon, className: `absolute ${iconColor} left-4` }, void 0) : icon] }), void 0));
    }
    return child;
};
const InputBlockRenderFunction = (props, ref) => _jsx(Input, Object.assign({ ref: ref }, props, { block: true }), void 0);
const InputGroupRenderFunction = (_a, ref) => {
    var { appended = null, prepended = null } = _a, inputProps = __rest(_a, ["appended", "prepended"]);
    return (_jsxs("div", Object.assign({ className: "relative w-full" }, { children: [_jsx(InputBlock, Object.assign({ ref: ref }, inputProps), void 0),
            prepended !== null && _jsx("div", Object.assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, { children: prepended }), void 0),
            appended !== null && _jsx("div", Object.assign({ className: `absolute inset-y-0 right-0 flex items-center ${inputProps.type === 'number' ? 'pr-10' : 'pr-3'} pointer-events-none` }, { children: appended }), void 0)] }), void 0));
};
const PasswordInputRenderFunction = (props, ref) => _jsx(Input, Object.assign({ ref: ref, type: "password", autoComplete: "new-password" }, props), void 0);
const PasswordInputBlockRenderFunction = (props, ref) => _jsx(PasswordInput, Object.assign({ ref: ref }, props, { block: true }), void 0);
const CheckboxRenderFunction = (_a, ref) => {
    var { size = null, className = '', children } = _a, props = __rest(_a, ["size", "className", "children"]);
    const id = ID();
    return (_jsxs("label", Object.assign({ className: `flex items-center ${className}`, htmlFor: id }, { children: [_jsx("input", Object.assign({ ref: ref, type: "checkbox", id: id, className: `${InputClassNames} ${children !== undefined ? 'mr-2' : ''}` }, props), void 0), children] }), void 0));
};
const SelectRenderFunction = (_a, ref) => {
    var { size = Size.md, block = false, className = '' } = _a, props = __rest(_a, ["size", "block", "className"]);
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
    return _jsx("select", Object.assign({ ref: ref, className: `${className} ${InputClassNames}` }, props), void 0);
};
const isDateTimeLocalSupported = false;
export const InputDateTime = (_a) => {
    var { value: initialValue, onChange } = _a, inputProps = __rest(_a, ["value", "onChange"]);
    const [polyfillDateValue, setPolyfillDateValue] = useState();
    const [polyfillTimeValue, setPolyfillTimeValue] = useState();
    const nativeOnChange = (e) => {
        onChange && onChange(e.target.value);
    };
    const dateOnChange = (e) => {
        setPolyfillDateValue(e.target.value);
    };
    const timeOnChange = (e) => {
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
        return _jsx(Input, Object.assign({ type: "datetime-local", onChange: nativeOnChange }, inputProps), void 0);
    }
    return (_jsxs("span", Object.assign({ className: `inline-flex ${InputClassNames}` }, { children: [_jsx("input", { type: "date", className: "bg-transparent border-0 focus:ring-0", value: polyfillDateValue, onChange: dateOnChange }, void 0),
            _jsx("input", { type: "time", className: "bg-transparent border-0 focus:ring-0", value: polyfillTimeValue, onChange: timeOnChange }, void 0)] }), void 0));
};
export const Checkbox = forwardRef(CheckboxRenderFunction);
export const Select = forwardRef(SelectRenderFunction);
export const Input = forwardRef(InputRenderFunction);
export const InputBlock = forwardRef(InputBlockRenderFunction);
export const InputGroup = forwardRef(InputGroupRenderFunction);
export const PasswordInput = forwardRef(PasswordInputRenderFunction);
export const PasswordInputBlock = forwardRef(PasswordInputBlockRenderFunction);
export const TextArea = forwardRef(TextAreaRenderFunction);
