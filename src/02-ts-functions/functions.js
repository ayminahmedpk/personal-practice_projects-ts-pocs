"use strict";
// For functions
exports = {};
// Functions need a types for parameters and return values
function madd(n1, n2) {
    return n1 + n2;
}
// Arrow syntax:
const addArrow = (n1, n2) => n1 + n2;
// Alternate syntax - avoid this thing:
let addArrowAlternate = (a, b) => a + b;
// What we did here is, created a variable which accepts a function of a given
// signature type, and then assigned to it a function that meets that signature.
// Very lengthy syntax.
// TS generally infers function return types based on context if you don't
// provide a return type.
// Optional parameters
const multiply = (a, b, c) => {
    if (typeof c != 'undefined') {
        return a * b * c;
    }
    return a * b;
};
// Optional parameters must be at the end of the parameter list
// You can have multiple optional parameters there
// You must check in your function code whether the optional arguments exist
// before you use them, otherwise you'll get an error.
// Default parameters work just like JS.
const defaultAdd = (a, b = 4) => a + b;
/*
If you have a default parameter, and non-default parameters after it, you must
explicitly pass 'undefined' so that TS/JS knows that the default-enabled
parameter's value has not been entered.

Default parameters are similar to Optional parameters. Both can be skipped, but
I guess the difference is that Optional parameters are assigned 'undefined' as
their default value.
*/
// Rest parameters (...rest)
const restfulAdd = (n1, n2, ...remainingNumbers) => {
    remainingNumbers.forEach(number => { n1 += number; });
    return n1 + n2;
};
function addition(a, b) { return a + b; } // implementation
/*
Basically, function overloading is done to enable TS tie different function
behavior and return values to different input types.

When implementing function overloading, the number of required parameters must
be the same. If an overload has more parameters than the other, you must make
the additional parameters optional (or find another solution - default params?).

This technique is also allowed inside classes (for methods).
*/
