exports = {};


// Basically just the es6 class syntax.
// There is the addition of type annotations - that's all.


// You know how this works under the hood.

/*
Creating a class (no modifiers)
// class Person {
//     ssn;
//     firstName;
//     lastName;

//     constructor(ssn, firstName, lastName) {
//         this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
*/



// Access modifiers:
// * public    : Accessible from anywhere (default)
// * private   : Accessible from within this class
// * protected : Accessible from within this and descendant classes
// Just add the respective keyword before variable/method name when defining.


/* 
Creating a class with modifiers (long syntax:)
// class Person {
//   protected ssn: string;
//   private   firstName: string;
//   private   lastName: string;

//   constructor(ssn: string, firstName: string, lastName: string) {
//       this.ssn = ssn;
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }

//   getFullName(): string {
//       return `${this.firstName} ${this.lastName}`; 
//   }
// }
 */

/*
TS allows a shorthand if you use the access modifiers in the constructor's
parameter field:
Creating a class with modifiers (shortened syntax:)
// class Person {
//   constructor(protected ssn: string, private firstName: string, private lastName: string) {
//       this.ssn = ssn;
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }

//   getFullName(): string {
//       return `${this.firstName} ${this.lastName}`;
//   }
// }
 */



// TS allows you to add read-only properties to classes.
// You can assign values to these properties in only 2 places:
//   1. Property declaration (declare + assign in same statement)
//   2. Constructor of that class
// 
// The difference between read-only properties and const is that you can assign
// values to read-only properties through the constructor even if you have
// declared them before. With a const, you have to assign something to it when
// you declare it.



// Class inheritance - as seen in ES6. Just add type annotations.

// Static properties and methods - as seen in ES6. Just add type annotations.


// Abstract classes - intuitive.
// 
//   * An abstract class must have at least one abstract method (which is
//     basically just a method signature, no implementation)
//   * An abstract class can't be instantiated - only inherited from
//   * To be instantiated, an inheriting class must have implemented all
//     abstract methods