"use strict";
// For all ts control types, like any, union, intersection, etc.
exports = {};
/*
'any'
The any type basically kills all TS type-checking for that variable.
It also takes away all compiler help or autocompletion.
It's basically like writing vanilla JS.
*/
let thing;
/*
'never'
Never is used on an item which will never have a value.
More common to see it used on functions that will never return anything,
like service worker, infinite loop functions, error throwing function, etc.
*/
let loop = function forever() { while (true) {
    console.log('Hello');
} };
/*
'union'
Union type allows something to be a limited number of types.
This is in contrast to the typical pattern, where you set ONE explicit type.
This is in contrast to the 'any' keyword, where you disregard types completely.
By using a Union, you can retain some type-checking, and have some flexibility.

Use the | ('pipe' symbol) to describe possible types.
*/
let nameOrId = 17;
nameOrId = 'Joe';
// Note: When merging tupes using intersect types, the order you provide the
// current types in, doesn't matter. They are merged based on TS own mechanism.
