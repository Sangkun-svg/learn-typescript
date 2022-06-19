interface Developer {
  name: string;
  stack: string;
}
interface Person2 {
  name: string;
}

let developer: Developer;
let person: Person2;

// developer = person; // Error
person = developer;
