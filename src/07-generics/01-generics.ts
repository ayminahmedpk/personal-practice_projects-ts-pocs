exports = {};
// TypeScript generics allow you to write the reusable and generalized form of
// functions, classes, and interfaces.

// Basically, OOP-fying types, aliases and interfaces.

// They allow us to implement some generic or algorithmic logic once and use it
// in multiple places, while providing contextual type-safety - rather than
// locking a specific type in and making different versions of the same
// code (functions, interfaces, classes).


// You can implement this with a generic, to return a random element from a
// given array, without having to specify the type of array that you will
// accept or value that you will return - but instead, letting it be determined
// by the context.
//
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
let numbers = [1, 5, 7, 4, 2, 9];
let randomElement = getRandomElement<number>(numbers); 
console.log(randomElement);
//
// let randomEle = getRandomElement(numbers); - Type inference would work, too.
// 
// Note that using the the letter T in <> is convention - we could use any other
// letter we wanted - so long as we replaced each instance of it in the above
// example.



// You can have generic functions with multiple types, eg:
function merge<U, V>(obj1: U, obj2: V) {
  return {
      ...obj1,
      ...obj2,
  };
}
let result = merge(
  { name: 'John' },
  { age: 35      },
);
console.log(result);


// * Use TypeScript generics to develop reusable, generalized, and type-safe
//   functions, interfaces, and classes.