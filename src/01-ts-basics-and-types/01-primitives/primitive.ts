// For all TS primitives

export {}; // to avoid redeclaration errors




// Assigning basic primitive types

// js primitives
const counter : number  = 1      ;
let   name    : string  = 'John' ;
let   active  : boolean = true   ;
// other primitives supported by ts: symbol, undefined, null


// string literal types
// If you set an explicit string value in the type, and the variable can only
// be assigned that value.
let click: 'click';
// You can use this behavior to create variables that can hold only a small
// number of pre-defined values.
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// To avoid repetition, you can create a type alias of the type and reuse that.
// Furthermore, consider pros/cons of using Enums instead.



// Assigning a bigint:
// const big : bigint = 9007199254740991n;
// BigInt literals are not available when targeting lower than ES2020.