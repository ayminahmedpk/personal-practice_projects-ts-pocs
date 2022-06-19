

// Interfaces can also be generic.
// Eg:
//   interface interfaceName<T> { ... }
//   interface interfaceName<U,V> { ... }

interface Pair<K, V> {
  monthNumber : V ;
  monthName   : K ;
}

let month: Pair<string, number> = {
  monthNumber : 1     ,
  monthName   : 'Jan' ,
};

console.log(month);



// Generic interfaces that describe methods:

interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T>{
  private items: T[] = [];

  add(o: T): void {
      this.items.push(o);
  }
  remove(o: T): void {
      let index = this.items.indexOf(o);
      if (index > -1) {
          this.items.splice(index, 1);
      }
  }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}

// Basically, you can use those alphabets to describe methods which will
// learn their type when the implementing class is defined.



// You can declare interfaces which describe the type of index:
interface Options<T> {
  [name: string]: T
}

let inputOptions: Options<boolean> = {
  'disabled': false,
  'visible': true
};
// Note: An index signature parameter type must be 'string', 'number', 'symbol',
// or a template literal type.