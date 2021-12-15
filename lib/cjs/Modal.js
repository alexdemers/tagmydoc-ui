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
exports.ModalBody = exports.ModalFooter = exports.ModalHeaderOnlyTitle = exports.ModalHeader = exports.ModalSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_modal_1 = __importDefault(require("react-modal"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var ModalSize;
(function (ModalSize) {
    ModalSize["XSmall"] = "max-w-md";
    ModalSize["Small"] = "max-w-xl";
    ModalSize["Medium"] = "max-w-2xl";
    ModalSize["Large"] = "max-w-3xl";
    ModalSize["XLarge"] = "max-w-4xl";
})(ModalSize = exports.ModalSize || (exports.ModalSize = {}));
const Modal = (_a) => {
    var { size = ModalSize.Medium, onSubmit, className = '', isOpen = false } = _a, props = __rest(_a, ["size", "onSubmit", "className", "isOpen"]);
    const [doneOpening, setDoneOpening] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!isOpen) {
            setDoneOpening(false);
        }
    }, [isOpen]);
    return ((0, jsx_runtime_1.jsxs)(react_modal_1.default, Object.assign({}, props, { isOpen: isOpen, onAfterOpen: () => setDoneOpening(true), closeTimeoutMS: 500, bodyOpenClassName: "overflow-hidden", ariaHideApp: false, overlayClassName: `z-30 fixed overflow-x-hidden overflow-y-auto w-full h-full left-0 top-0 transition-colors ease-in-out duration-500 bg-black ${doneOpening ? 'bg-opacity-50' : 'bg-opacity-0'} flex sm:items-center justify-center`, className: `w-full bg-white sm:rounded-xl shadow-xl outline-none sm:h-auto ${size} transform transition-all ease-in-out duration-500 ${doneOpening ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` }, { children: [onSubmit !== undefined && ((0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: onSubmit, className: `transition-transform flex flex-col h-full max-h-screen ${className}` }, { children: props.children }), void 0)), onSubmit === undefined && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: `transition-transform flex flex-col h-full max-h-screen ${className}` }, { children: props.children }), void 0)] }), void 0));
};
const ModalHeader = ({ className = '', children }) => {
    return (0, jsx_runtime_1.jsx)("header", Object.assign({ className: `${className} px-8 pt-8 flex items-start justify-between` }, { children: children }), void 0);
};
exports.ModalHeader = ModalHeader;
const ModalHeaderOnlyTitle = ({ className = '', icon = null, children }) => {
    return ((0, jsx_runtime_1.jsx)(exports.ModalHeader, Object.assign({ className: className }, { children: (0, jsx_runtime_1.jsxs)("h3", Object.assign({ className: "text-lg font-medium text-gray-900" }, { children: [icon !== null && (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: icon, className: "mr-2 text-gray-400" }, void 0), children] }), void 0) }), void 0));
};
exports.ModalHeaderOnlyTitle = ModalHeaderOnlyTitle;
const ModalFooter = ({ className = '', children }) => {
    return (0, jsx_runtime_1.jsx)("footer", Object.assign({ className: `${className} sm:rounded-b-xl px-8 py-4 bg-gray-100 items-center space-x-4 flex` }, { children: children }), void 0);
};
exports.ModalFooter = ModalFooter;
const ModalBody = (_a) => {
    var { className = '', disabled = undefined, children } = _a, props = __rest(_a, ["className", "disabled", "children"]);
    const Tag = disabled !== undefined ? 'fieldset' : 'main';
    return ((0, jsx_runtime_1.jsx)(Tag, Object.assign({}, props, { className: `${className} px-8 py-6 flex-1 sm:flex-auto max-h-screen md:max-h-3/4-screen overflow-auto` }, { children: children }), void 0));
};
exports.ModalBody = ModalBody;
exports.default = Modal;
