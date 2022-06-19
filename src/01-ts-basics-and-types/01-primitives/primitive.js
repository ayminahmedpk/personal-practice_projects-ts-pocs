"use strict";
// For all TS primitives
Object.defineProperty(exports, "__esModule", { value: true });
// Assigning basic primitive types
// js primitives
const counter = 1;
let name = 'John';
let active = true;
// other primitives supported by ts: symbol, undefined, null
// string literal types
// If you set an explicit string value in the type, and the variable can only
// be assigned that value.
let click;
// You can use this behavior to create variables that can hold only a small
// number of pre-defined values.
let mouseEvent;
// To avoid repetition, you can create a type alias of the type and reuse that.
// Furthermore, consider pros/cons of using Enums instead.
// Assigning a bigint:
// const big : bigint = 9007199254740991n;
// BigInt literals are not available when targeting lower than ES2020.
