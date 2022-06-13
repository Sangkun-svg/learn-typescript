interface User {
  name: string;
  age: number;
}

// 변수에 Interface 활용
const sangkun: User = {
  name: "상햑",
  age: 23,
};

// 함수에 Interface 활용
const getUser = (user: User) => {
  console.log(user);
};

const cap = {
  name: "cap",
  age: 222,
};
getUser({ age: 21, name: "SVG" });

// 함수 구조(스펙)에 Interface 활용
interface SumFunction {
  (a: number, b: number): number;
}
const sum: SumFunction = (a, b) => {
  return a + b;
};

// indexing , 인덱싱
interface StringArray {
  [index: number]: string;
}
const arr: StringArray = ["a", "b", "c"];
// arr[0] = 10 // Error

// interface 딕션너리 페턴
interface StringRedexDictionary {
  [key: string]: RegExp;
}
const obj: StringRedexDictionary = {
  sth: /aaa/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// interface 확장
interface person {
  name: string;
  age: number;
}
interface developer extends person {
  stack: string;
}

const me: developer = {
  stack: "ts",
  age: 23,
  name: "svg",
};
