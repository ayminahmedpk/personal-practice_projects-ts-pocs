exports = {};



// Index properties:
// 
// Prepares an interface (and maybe objects) to have new stuff asigned to them,
// but control the type of new stuff that gets added.
// eg:
//      interface ErrorContainer {
//          id: string;
//          [prop: string]: string;
//      }
// 
// This allows us to create interfaces where we don't know in advance how many
// properties we have, or what their exact names could be - but we do know the
// type that they should all conform to.
// 
// The issue with this is, the new values ([prop: string]: string;) and the
// manually edited values (id: string;) MUST BE OF THE SAME TYPE. Else you get
// an error.
// 
// This makes it less applicable. It's not a feature you can use to simply
// extend any interface and teach it how to deal with new values.
// It has specific use cases only.






// Type Guarding:

// Type guards allow you to narrow down the type of a variable inside a
// conditional block.

// Type guarding primitves / value types using the 'typeof' operator:
type alphanumeric = string | number;

const add = (a: alphanumeric, b: alphanumeric) => {
    if (typeof a === 'number' && typeof b === 'number') { return a + b;       }
    if (typeof a === 'string' && typeof b === 'string') { return a.concat(b); }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

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




// Discriminated unions
// A pattern where basically you just add to the interface or class a 'type'
// field and explicitly set the specific class / interface' name.
// Then you can check for that and run conditional code, instead of having to
// rely on instanceof, 'in', etc.
// Becomes especially useful when you have a union of types, and then need to
// type guard between them. Clearer than the two typeguards above.





// Type Casting:

// Converting an object into a different type of object.
// Usually used to give a more specific type to help TS offer relevant support:
let input = document.querySelector('input[type="text"]') as HTMLInputElement;
// Without asHTMLInputElement, TS would not add relevant methods/properties to
// the input variable.

// Alternate syntax:
let enteredText = (input as HTMLInputElement).value;

// HTMLInputElement is an inheritor of input, so the above type of casting is
// known as down casting (down the class tree I suppose).

// We can use down casting to our advantage:
let el: HTMLElement;
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
