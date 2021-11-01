"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
function validate(obj) {
    if (!obj.call)
        throw new Error('No Call Function is specified');
    if (typeof (obj === null || obj === void 0 ? void 0 : obj.call) !== 'function')
        throw new Error('Call is not a function');
    if (!obj.index)
        throw new Error('No Index Is specified');
    if (!obj.meta || !obj.meta.title || !obj.meta.description)
        throw new Error('No Meta or some property of meta');
    if (typeof obj.meta !== 'object')
        throw new Error('Meta is not an object');
    if (typeof obj.meta.title !== 'string')
        throw new Error('Title is not a string');
    if (typeof obj.meta.description !== 'string')
        throw new Error('Description is not a string');
}
exports.validate = validate;
// გაქვს თუ არა ფროფერთი
// undefined? null?
// index => number??
// meta => object??
// meta.title => string??
// meta.description => string??
// call => function??
