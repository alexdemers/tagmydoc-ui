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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const types_1 = require("./types");
const Badge = (_a) => {
    var { intent = null, inverse = false, className = '' } = _a, props = __rest(_a, ["intent", "inverse", "className"]);
    let hover = '', active = '', disabled = 'disabled:bg-opacity-50';
    switch (intent) {
        case types_1.Intent.danger:
            hover += 'hover:bg-red-600';
            className += ` ${inverse ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800'}`;
            active += 'active:bg-red-800';
            break;
        case types_1.Intent.warning:
            hover += 'hover:bg-yellow-500';
            className += ' bg-yellow-300 text-yellow-800';
            active += 'active:bg-yellow-700';
            break;
        case types_1.Intent.primary:
            hover += 'hover:bg-blue-400';
            className += ' bg-blue-200 text-blue-800';
            active += 'active:bg-blue-600';
            break;
        case types_1.Intent.success:
            hover += 'hover:bg-green-400';
            className += ' bg-green-200 text-green-800';
            active += 'active:bg-green-600';
            break;
        case types_1.Intent.secondary:
            className += ' bg-gray-300';
            disabled += ' disabled:text-gray-500';
            break;
        default:
            disabled += ' disabled:text-gray-500';
            // hover += 'hover:bg-blue-400';
            className += ' text-gray-800';
            // active += 'active:bg-blue-600';
            break;
    }
    const Tag = !!props.type ? 'button' : 'span';
    return (jsx_runtime_1.jsx(Tag, Object.assign({ className: `whitespace-nowrap px-2 inline-flex font-semibold text-xs hover:transition-colors focus:ring ease-in-out duration-100 rounded-full ${disabled} ${props.onClick ? active : ''} ${props.onClick ? hover : ''} ${className}` }, props), void 0));
};
exports.default = Badge;
