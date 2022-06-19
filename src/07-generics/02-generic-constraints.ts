// 'type contraints', 'extending types'
// You can add a constraint to generics to ensure they will be of a certain
// type even with the freedom they have.
// Eg: In the above function, TS doesn't prevent you from passing in a
// non-object to that function.
// So to prevent this, you can extend a type.
function saferMerge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
      ...obj1,
      ...obj2
  };
}
// Now, this new function of merge will only work with objects, not other types.



// 'Using type parameters in generic constraints'
// TypeScript allows you to declare a type parameter constrained by another type
// parameter.

// Eg:
//   before:
//      function prop<T, K>(obj: T, key: K) { return obj[key]; }
//      Compiler error: Type 'K' cannot be used to index type 'T'.
//   after:
//      function prop<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }
//      (works but only if you pass a property K which exists in object T)




// * Use extends keyword to constrain the type parameter to a specific type.
// * Use extends keyof to constrain a type that is the property of another
//   object.