interface Developer {
  name: string;
  stack: string;
}
interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: "SH", stack: "a", age: 3 };
};

const SH = introduce();
// console.log(SH.stack); // type gaurd 필요

const isDeveloper = (target: Developer | Person): target is Developer => {
  return;
};
