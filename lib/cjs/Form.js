"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = exports.PasswordInputBlock = exports.PasswordInput = exports.InputGroup = exports.InputBlock = exports.Input = exports.Select = exports.Checkbox = exports.InputDateTime = exports.TextAreaRenderFunction = exports.Toggle = exports.HelperText = exports.Label = exports.Row = exports.InputClassNames = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_input_mask_1 = __importDefault(require("react-input-mask"));
const StringUtils_1 = require("./StringUtils");
const types_1 = require("./types");
const date_fns_1 = require("date-fns");
exports.InputClassNames = 'border border-gray-300 focus-within:outline-none focus-within:ring-blue-200 focus-within:ring focus-within:border-blue-400 bg-white rounded disabled:bg-gray-200 transition-shadow';
const Row = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: `mb-6 last:mb-0 ${className}` }, props), void 0);
};
exports.Row = Row;
const Label = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return (0, jsx_runtime_1.jsx)("label", Object.assign({ className: `${className} block font-medium text-gray-700 mb-2` }, props), void 0);
};
exports.Label = Label;
const HelperText = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return (0, jsx_runtime_1.jsx)("p", Object.assign({ className: `mt-1 text-xs text-gray-600 ${className}` }, props), void 0);
};
exports.HelperText = HelperText;
const Toggle = (_a) => {
    var { intent = types_1.Intent.primary, size = types_1.Size.md, className = '', checked } = _a, props = __rest(_a, ["intent", "size", "className", "checked"]);
    const id = (0, react_1.useRef)((0, StringUtils_1.ID)());
    let containerClassName = '';
    let toggleClassName = '';
    switch (size) {
        case types_1.Size.sm:
            containerClassName = 'w-10 h-5';
            toggleClassName = 'mb-1 w-5 h-5';
            break;
        case types_1.Size.md:
            containerClassName = 'w-12 h-6';
            toggleClassName = 'mb-2 w-6 h-6';
            break;
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `inline-flex items-center justify-center cursor-pointer ${className}` }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `relative rounded-full ${containerClassName} transition ${checked ? 'bg-blue-500' : 'bg-gray-400'}` }, { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: props.id || `toggle-${id.current}`, className: `${checked ? 'translate-x-full border-blue-500' : 'translate-x-0 border-gray-400'} absolute left-0 bg-white border-2 ${toggleClassName} rounded-full transition transform duration-100 ease-linear cursor-pointer` }, void 0), (0, jsx_runtime_1.jsx)("input", Object.assign({}, props, { checked: checked, type: "checkbox", id: props.id || `toggle-${id.current}`, className: "w-full h-full p-0 text-transparent bg-transparent border-0 appearance-none focus:ring-0 focus:ring-offset-0 focus:outline-none checked:bg-none bg-none active:outline-none" }), void 0)] }), void 0) }), void 0));
};
exports.Toggle = Toggle;
const TextAreaRenderFunction = (_a, ref) => {
    var { className = '', size = types_1.Size.md, block = false } = _a, textAreaProps = __rest(_a, ["className", "size", "block"]);
    switch (size) {
        case types_1.Size.md:
            className += ' px-3 py-2 text-base';
            break;
        case types_1.Size.sm:
            className += ' px-2 py-1 text-sm';
            break;
    }
    if (block) {
        className += ' w-full';
    }
    return (0, jsx_runtime_1.jsx)("textarea", Object.assign({ ref: ref, className: `${className} ${exports.InputClassNames}` }, textAreaProps), void 0);
};
exports.TextAreaRenderFunction = TextAreaRenderFunction;
const InputRenderFunction = (_a, ref) => {
    var { type = 'text', size = types_1.Size.md, icon, iconColor = 'text-gray-400', block = false } = _a, props = __rest(_a, ["type", "size", "icon", "iconColor", "block"]);
    let className = '';
    switch (size) {
        case types_1.Size.md:
            className = 'px-3 py-2 text-base';
            break;
        case types_1.Size.sm:
            className = 'px-2 py-1 text-sm';
            break;
    }
    props.className = `${block ? 'block w-full' : 'inline-flex'} ${className} ${exports.InputClassNames} ${icon ? 'pl-10' : ''} ${props.className !== undefined ? props.className : ''}`;
    let child = null;
    if (props.mask !== undefined) {
        child = ((0, jsx_runtime_1.jsx)(react_input_mask_1.default, Object.assign({ mask: props.mask, maskPlaceholder: props.maskChar || null, value: props.value, onChange: props.onChange }, { children: (inputProps) => (0, jsx_runtime_1.jsx)("input", Object.assign({ type: type }, props, inputProps, { ref: ref }), void 0) }), void 0));
    }
    else {
        child = (0, jsx_runtime_1.jsx)("input", Object.assign({ type: type }, props, { ref: ref }), void 0);
    }
    if (icon !== null) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `relative items-center ${block ? 'flex w-full' : 'inline-flex'}` }, { children: [child, typeof icon === 'string' ? (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: icon, className: `absolute ${iconColor} left-4` }, void 0) : icon] }), void 0));
    }
    return child;
};
const InputBlockRenderFunction = (props, ref) => (0, jsx_runtime_1.jsx)(exports.Input, Object.assign({ ref: ref }, props, { block: true }), void 0);
const InputGroupRenderFunction = (_a, ref) => {
    var { appended = null, prepended = null } = _a, inputProps = __rest(_a, ["appended", "prepended"]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative w-full" }, { children: [(0, jsx_runtime_1.jsx)(exports.InputBlock, Object.assign({ ref: ref }, inputProps), void 0), prepended !== null && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, { children: prepended }), void 0), appended !== null && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: `absolute inset-y-0 right-0 flex items-center ${inputProps.type === 'number' ? 'pr-10' : 'pr-3'} pointer-events-none` }, { children: appended }), void 0)] }), void 0));
};
const PasswordInputRenderFunction = (props, ref) => (0, jsx_runtime_1.jsx)(exports.Input, Object.assign({ ref: ref, type: "password", autoComplete: "new-password" }, props), void 0);
const PasswordInputBlockRenderFunction = (props, ref) => (0, jsx_runtime_1.jsx)(exports.PasswordInput, Object.assign({ ref: ref }, props, { block: true }), void 0);
const CheckboxRenderFunction = (_a, ref) => {
    var { size = null, className = '', children } = _a, props = __rest(_a, ["size", "className", "children"]);
    const id = (0, StringUtils_1.ID)();
    return ((0, jsx_runtime_1.jsxs)("label", Object.assign({ className: `flex items-center ${className}`, htmlFor: id }, { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ ref: ref, type: "checkbox", id: id, className: `${exports.InputClassNames} ${children !== undefined ? 'mr-2' : ''}` }, props), void 0), children] }), void 0));
};
const SelectRenderFunction = (_a, ref) => {
    var { size = types_1.Size.md, block = false, className = '' } = _a, props = __rest(_a, ["size", "block", "className"]);
    switch (size) {
        case types_1.Size.sm:
            className += ' text-sm';
            break;
        default:
            className += ' text-base';
            break;
    }
    if (block) {
        className += ' w-full';
    }
    return (0, jsx_runtime_1.jsx)("select", Object.assign({ ref: ref, className: `${className} ${exports.InputClassNames}` }, props), void 0);
};
const isDateTimeLocalSupported = false;
const InputDateTime = (_a) => {
    var { value: initialValue, onChange } = _a, inputProps = __rest(_a, ["value", "onChange"]);
    const [polyfillDateValue, setPolyfillDateValue] = (0, react_1.useState)();
    const [polyfillTimeValue, setPolyfillTimeValue] = (0, react_1.useState)();
    const nativeOnChange = (e) => {
        onChange && onChange(e.target.value);
    };
    const dateOnChange = (e) => {
        setPolyfillDateValue(e.target.value);
    };
    const timeOnChange = (e) => {
        setPolyfillTimeValue(e.target.value);
    };
    (0, react_1.useEffect)(() => {
        if (!polyfillDateValue || !polyfillTimeValue) {
            onChange && onChange('');
            return;
        }
        const datetime = (0, date_fns_1.parseISO)(`${polyfillDateValue} ${polyfillTimeValue}`);
        // eslint-disable-next-line no-self-compare
        if (datetime.getTime() === datetime.getTime()) {
            onChange && onChange(`${polyfillDateValue}T${polyfillTimeValue}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [polyfillDateValue, polyfillTimeValue]);
    if (isDateTimeLocalSupported) {
        return (0, jsx_runtime_1.jsx)(exports.Input, Object.assign({ type: "datetime-local", onChange: nativeOnChange }, inputProps), void 0);
    }
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: `inline-flex ${exports.InputClassNames}` }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "date", className: "bg-transparent border-0 focus:ring-0", value: polyfillDateValue, onChange: dateOnChange }, void 0), (0, jsx_runtime_1.jsx)("input", { type: "time", className: "bg-transparent border-0 focus:ring-0", value: polyfillTimeValue, onChange: timeOnChange }, void 0)] }), void 0));
};
exports.InputDateTime = InputDateTime;
exports.Checkbox = (0, react_1.forwardRef)(CheckboxRenderFunction);
exports.Select = (0, react_1.forwardRef)(SelectRenderFunction);
exports.Input = (0, react_1.forwardRef)(InputRenderFunction);
exports.InputBlock = (0, react_1.forwardRef)(InputBlockRenderFunction);
exports.InputGroup = (0, react_1.forwardRef)(InputGroupRenderFunction);
exports.PasswordInput = (0, react_1.forwardRef)(PasswordInputRenderFunction);
exports.PasswordInputBlock = (0, react_1.forwardRef)(PasswordInputBlockRenderFunction);
exports.TextArea = (0, react_1.forwardRef)(exports.TextAreaRenderFunction);
