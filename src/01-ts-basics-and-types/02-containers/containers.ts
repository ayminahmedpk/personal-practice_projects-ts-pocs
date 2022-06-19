// For objects, arrays, tuples, enums




/*
Objects
Object types describe the primitives held by objects
Objects support all primitive types supported by TS

If you declare a variable with the object type, you can also assign it any value.
However, you cannot call a method on it even the method actually exists.
Use 'any' for that.
*/

// Basic object:

const basicObject: {
  name: string,
  age: number,
} = {
  name : 'John' ,
  age  : 30     ,
}

const nestedObject: {
  name: string,
  age: number,
  nestedObj: {
    nestedProperty: string,
  }
} = {
  name: 'Joe',
  age: 35,
  nestedObj: {nestedProperty: 'Nested'}
};






/*
* Arrays can hold many (numbered) values of the same type.
* Arrays can made to hold values of different types, by making that array be of a
  union type, rather than any specific primitive. Not ideal for TS.
*/
// Basic arrays:

const numberArray: number[] = [];
const stringArray: string[] = [];

// Inference of array with different value types = union typed array, not Tuple




/* 
Tuples are similar to arrays, but different in that:
  1. Tuples have a fixed length (fixed number of values)
  2. Each of those values has its own specific pre-defined type

Therefore, the order of values you pass to a tuple becomes important as well.

Tuples are usually defined as a type right after the variable name.

*/

let simpleTuple: [string, number] = ['John', 30];

// Tuples can be given optional elements using ?.
// The optional elements should be at the end of the tuple.

let optionalTuple: [string, number, string?] = ['John', 30];





/*

// Note: Consider the pros and cons of using unions of type literals instead.

Enum stands for "Enumerated Type"
An enum is a group of named constant values.

To define an enum you use the 'enum' keyword. Then, define constant values for
the enum.

A TS Enum is just a JS object which has both named properties and number keys,
Eg: The 'Month' enum below has 24 values in its compiled JS object,
12 values are like
  '0': 'Jan', '1':'Feb', ...
The other 12 values are like:
  Jan: 0, Feb: 1, .....

So you can call
  * Enum[0] to get 'Jan',
  * Enum.Jan to get 1

Also, you can specify an enum's constant's number.

"Do use an enum when you have a small set of fixed values that are closely
 related and known at compile time."
*/

// creating Enum
enum Month { Jan,  Feb,  Mar,  Apr,  May,  Jun,  Jul,  Aug,  Sep,  Oct,  Nov,  Dec };

// using the Enum
const isItSummer = (month: Month) => {
  let isSummer: boolean;
  switch (month) {
      case Month.Jun:
      case Month.Jul:
      case Month.Aug:
          isSummer = true;
          break;
      default:
          isSummer = false;
          break;
  }
  return isSummer;
}
// console.log(isItSummer(Month.Jun)); // true