// For all ts control types, like any, union, intersection, etc.

exports = {};


/*
'any'
The any type basically kills all TS type-checking for that variable.
It also takes away all compiler help or autocompletion.
It's basically like writing vanilla JS.
*/

let thing:any;



/*
'never'
Never is used on an item which will never have a value.
More common to see it used on functions that will never return anything,
like service worker, infinite loop functions, error throwing function, etc.
*/
let loop = function forever():never { while (true) { console.log('Hello'); } }


/*
'void'
Nothing. Usually used to declare that function will never return anything.
*/
let voidFunction = (n1: number):void => {console.log(n1);}


/*
'union'
Union type allows something to be a limited number of types.
This is in contrast to the typical pattern, where you set ONE explicit type.
This is in contrast to the 'any' keyword, where you disregard types completely.
By using a Union, you can retain some type-checking, and have some flexibility.

Use the | ('pipe' symbol) to describe possible types.
*/

let nameOrId:(string | number) = 17;
nameOrId = 'Joe';



/*
'intersection'
Intersection types are used to merge types.
Where type unions are typically just used to denote possible types for one
vairable, intersection types are a lot more powerful and are usually used to
merge type description or entire interfaces.

They use the '&' keyword.
*/

interface BusinessPartner { name : string;  credit: number; }
interface Identity        { id   : number;  name  : string; }
interface Contact         { email: string;  phone : string; }

// Using intersection types to create comples types bsed on existing types
type Employee = Identity & Contact        ;
type Customer = BusinessPartner & Contact ;

// Note: When merging tupes using intersect types, the order you provide the
// current types in, doesn't matter. They are merged based on TS own mechanism.
