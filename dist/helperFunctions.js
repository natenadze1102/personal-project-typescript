"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
function validate(obj) {
    if (!obj.call)
        throw new Error('No Call Function is specified');
    if (!obj.index)
        throw new Error('No Index Is specified');
    if (!obj.meta || !obj.meta.title || !obj.meta.description)
        throw new Error('No Meta or some property of meta');
}
exports.validate = validate;
