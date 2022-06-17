function Person(name, age) {
  this.name = name;
  this.age = age;
}
const capt = new Person("Capt", 34);

// syntatic sugar

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const capt2 = new Person2("Capt2", 34);
