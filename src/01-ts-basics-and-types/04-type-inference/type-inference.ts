exports = {};

// TS will try to implicitly infer the type of variables.



// TS infers this to be let counter:number = 0; due to the given value.
let counter = 0;

// TS infers the value of 'max' based on the type of default parameter
const setCounter = (max = 100) => {/* ... */}

// TS infers the return value of the function based on the code
const increment = (counter = 100) => (counter++);
// (Infers the type of counter, infers the type of function return)




// TS tries to infer array types based on the best match

// TS infers items to be a number[]
let items = [1, 2, 3];

// TS infers nullableItems to be a (number | null)[]
let nullableItems = [1, 2, 3, null];

// TS infers mixedItems to be a (number | string)[] 
let mixedItems = [1, 2, 'Hi'];

// Note: To create a tuple, you must put the tuple into the TYPE of the object,
// not its value. So tuples can't really be inferred, but must be explicitly
// created.




// Contextual typing:

// TS can be smart and infer the specific type sometimes, based on the context

// JS Infers this as a click event due to the 'click'.
document.addEventListener('click', (event) => {console.log(event.button);});

// Compiler error; TS infers scroll event, but scroll event doesn't have button
// document.addEventListener('scroll', (event) => {console.log(event.button);});



/*
In practice, it is recommended to use type inference as much as possible.

Use type annotation (explicitly assigning types) in the following cases:
  * When you declare a variable and assign it a value later
  * When you want a variable that can't be inferred
  * When a function returns the 'any' type and you need to clarify the value
*/