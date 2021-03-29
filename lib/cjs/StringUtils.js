"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID = void 0;
/**
 * Math.random should be unique because of its seeding algorithm.
 * Convert it to base 36 (numbers + letters), and grab the first 9 characters
 * after the decimal.
 */
const ID = () => {
    return "_" + Math.random().toString(36).substring(2, 9);
};
exports.ID = ID;
