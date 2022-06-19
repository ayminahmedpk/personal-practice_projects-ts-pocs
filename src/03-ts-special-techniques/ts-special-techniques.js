"use strict";
exports = {};
const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
};
// You can type guard OOP using 'intanceof'
// You can type guard using 'in' by looking for a specific property in an object
/*
User-defined type guards:
Basically, you can have a function return 'x is y', where x the recieved
argument, and y is the type that you want it to confirm. Then, in the
implementation, you can simply return a boolean that is the result of whether
it was true or not.
This allows TS to be more helpful when using that typeguard in code.
Eg:

// function isCustomer(partner: any): partner is Customer {
//   return partner instanceof Customer;
// }
//
// function signContract(partner: BusinessPartner): string {
//     let message: string;
//     if (isCustomer(partner)) {
//         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
//     } else {
//         message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
//     }
//     return message;
// }
*/
// Type Casting:
// Converting an object into a different type of object.
// Usually used to give a more specific type to help TS offer relevant support:
let input = document.querySelector('input[type="text"]');
// Without asHTMLInputElement, TS would not add relevant methods/properties to
// the input variable.
// Alternate syntax:
let enteredText = input.value;
// HTMLInputElement is an inheritor of input, so the above type of casting is
// known as down casting (down the class tree I suppose).
// We can use down casting to our advantage:
let el;
el = new HTMLInputElement();
// HTMLInputElement is a type of HTMLElement, so this should give no errors.
/*
<>
Besides 'as', you can also use '<>' for type casting. However, you will
likely encounter errors with React when using <> due to conflicts with
JSX, fragments, etc, so avoid it.
Regardless, here's an example:
// let a: typeA;
// let b = <typeB>a;
*/
// Type Assertions:
// They also use the 'as' keyword like type casting, however, these are just
// hints to the compiler - no actual chaging of types takes place - they only
// tell the compiler what to do for type-checking purposes.
// "expression as targetType"
// Type assertions instruct the TS comipiler to treat a value as a specific
// type.
// A type assertion is also known as type narrowing. It allows you to narrow a
// type from a union type.
// You can use the <> syntax (like typecasting) for type assertions.
// However, this will cause errors within React, so avoid it.
// Regardless, here's an example:
// let netPrice = <number>getNetPrice(100, 0.05, false);
