"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ValidationField = ({ validation, fieldName, errorMessage, children }) => {
    let errorText = null;
    if (fieldName in validation) {
        errorText = validation[fieldName][0];
        if (errorMessage !== undefined) {
            errorText = errorMessage;
        }
    }
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [react_1.default.cloneElement(children, { className: `${children.props.className || ''} ${fieldName in validation ? 'border-red-600 rounded-b-none' : ''}` }),
            fieldName in validation && (jsx_runtime_1.jsx("div", Object.assign({ className: "px-2 py-1 text-white bg-red-600 rounded-b" }, { children: jsx_runtime_1.jsx("p", Object.assign({ className: "text-sm" }, { children: errorText }), void 0) }), void 0))] }, void 0));
};
exports.ValidationField = ValidationField;
