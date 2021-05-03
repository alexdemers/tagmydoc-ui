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
import { useEffect, useState } from 'react';
import BaseModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export var ModalSize;
(function (ModalSize) {
    ModalSize["XSmall"] = "max-w-md";
    ModalSize["Small"] = "max-w-xl";
    ModalSize["Medium"] = "max-w-2xl";
    ModalSize["Large"] = "max-w-3xl";
    ModalSize["XLarge"] = "max-w-4xl";
})(ModalSize || (ModalSize = {}));
const Modal = (_a) => {
    var { size = ModalSize.Medium, onSubmit, className = '', isOpen = false, overlayClassName = '', bodyOpenClassName = '' } = _a, props = __rest(_a, ["size", "onSubmit", "className", "isOpen", "overlayClassName", "bodyOpenClassName"]);
    const [doneOpening, setDoneOpening] = useState(false);
    useEffect(() => {
        if (!isOpen) {
            setDoneOpening(false);
        }
    }, [isOpen]);
    return (_jsxs(BaseModal, Object.assign({}, props, { isOpen: isOpen, onAfterOpen: () => setDoneOpening(true), closeTimeoutMS: 500, bodyOpenClassName: `${bodyOpenClassName} overflow-hidden`, ariaHideApp: false, overlayClassName: `${overlayClassName} z-30 fixed overflow-x-hidden overflow-y-auto w-full h-full left-0 top-0 transition-colors ease-in-out duration-500 bg-black ${doneOpening ? 'bg-opacity-50' : 'bg-opacity-0'} flex sm:items-center justify-center`, className: `w-full bg-white sm:rounded-xl shadow-xl outline-none sm:h-auto ${size} transform transition-all ease-in-out duration-500 ${doneOpening ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` }, { children: [onSubmit !== undefined && (_jsx("form", Object.assign({ onSubmit: onSubmit, className: `transition-transform flex flex-col h-full max-h-screen ${className}` }, { children: props.children }), void 0)),
            onSubmit === undefined && _jsx("div", Object.assign({ className: `transition-transform flex flex-col h-full max-h-screen ${className}` }, { children: props.children }), void 0)] }), void 0));
};
export const ModalHeader = ({ className = '', children }) => {
    return _jsx("header", Object.assign({ className: `${className} px-8 pt-8 flex items-start justify-between` }, { children: children }), void 0);
};
export const ModalHeaderOnlyTitle = ({ className = '', icon = null, children }) => {
    return (_jsx(ModalHeader, Object.assign({ className: className }, { children: _jsxs("h3", Object.assign({ className: "text-lg font-medium text-gray-900" }, { children: [icon !== null && _jsx(FontAwesomeIcon, { icon: icon, className: "mr-2 text-gray-400" }, void 0), children] }), void 0) }), void 0));
};
export const ModalFooter = ({ className = '', children }) => {
    return _jsx("footer", Object.assign({ className: `${className} sm:rounded-b-xl px-8 py-4 bg-gray-100 items-center space-x-4 flex` }, { children: children }), void 0);
};
export const ModalBody = (_a) => {
    var { className = '', disabled = undefined, children } = _a, props = __rest(_a, ["className", "disabled", "children"]);
    const Tag = disabled !== undefined ? 'fieldset' : 'main';
    return (_jsx(Tag, Object.assign({}, props, { className: `${className} px-8 py-6 flex-1 sm:flex-auto max-h-screen md:max-h-3/4-screen overflow-auto` }, { children: children }), void 0));
};
export default Modal;
