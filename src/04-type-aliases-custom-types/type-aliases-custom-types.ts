

exports = {};


// keyword 'type':
// We can create custom types in TS, to reduce repetition and for cleaner code.
// type aliasName = existingType;

type chars        = string          ;
let  message      : chars           ;
type flexibleText = string | number ;

// Works with objects as well
type person                          = {name: string, age: number}         ;
let  student: person                 = {name: 'John', age: 25}             ;
let  nestedGuy: { nestedObj:person } = {nestedObj: {name: 'Joe', age: 30}} ;

// Works with more or less anything.

// Issue is, we can probably only have one 'type' assigned to one variable.