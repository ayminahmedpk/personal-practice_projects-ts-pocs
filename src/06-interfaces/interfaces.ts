// Usually, interfaces are used with objects/classes.
// Usually, types are used with functions.






// Items can be made to conform to interfaces.
// By conforming, they must have what the interface specifies, but may have more
// So they must implement the interface, but are not restricted to it.


// You can define interfaces as follows:

// interface Person {
//   firstName: string;
//   lastName: string;
// }


// You can apply interfaces as follows:
// 1. Type syntax:
//   function getFullName(person: Person) {
//     return `${person.firstName} ${person.lastName}`;
//   }
//   let john = { firstName: 'John', lastName: 'Doe'};
//   console.log(getFullName(john));




// Optional properties:
// To have an optional property, just add a ? at the end of it.
// Eg: interface Person {... middleName?: string; ... }




// Readonly properties:
// Readonly properties can only be assigned a value when the object is first
// created. To have a readonly property, just add the 'readonly' keyword before
// it. Eg:
// interface Person {... readonly ssn: string; ...}



// You can create an interface for a function
// 
// interface StringFormat {
//   (str: string, isUpper: boolean): string
// // }
// let format: StringFormat;
// format = function (src: string, upper: boolean) {
//     return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
// };
// console.log(format('hi', true));
// 
// Notice that in a interface for a class, we could probably put the
// (str: string, isUpper: boolean): string
// type in front of a function expression, to define it that way.
// 
// Notice also that the actual parameter names don't have to match the function
// signature.
// 
// The interface forces all callers of a function to pass in the required types
// of arguments. Even if the actual implementation doesn't require the argument
// and doesn't use it, the caller must still pass it to respect the interface.



// You can implement interfaces on classes. Eg:
// 
// interface Json {
//   toJSON(): string
// }
// 
// class Person implements Json {
//   constructor(private firstName: string,
//       private lastName: string) {
//   }
//   toJson(): string {
//       return JSON.stringify(this);
//   }
// }
// 
// You have an interface with a method, and implementing class must implement
// that method.



// Interfaces can be made to inherit from other interfaces.
// An interface can actually inherit from multiple interface.
// Just use the 'extends' keyword, in a manner similar to class inheritance.


// Interfaces can also be made to inherit from classes (!)
// In this case, they ill inherit all the public, protected and prive properties
// of that class.
// The encapsulation rules extend to interfaces as well.
// This means that classes with private/protected properties, that have
// interfaces inheriting from them including those properties, will have forced
// those interfaces to be usable only on that class or its inheriting classes
// respectively.




// Summary:
// * TypeScript interfaces define contracts in your code and provide explicit
//   names for type checking.
// * Interfaces may have optional properties or readonly properties.
// * Interfaces can be used as function types.
// * Interfaces are typically used as class types that make a contract between
//   unrelated classes.
// * An interface can exted one or multiple existing interfaces.
// * An interface can extend a class, and will become subject to the class'
//   encapsulation rules based on whether the class hade private/protected
//   properties.


