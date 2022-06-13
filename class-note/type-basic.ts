// JS
const str = "";
const num = 0;
const arrNumber = [1, 2, 3];
const arrString = ["A", "B", "C"];
// TS
const strTS: string = "";
const numTS: number = 0;
const arrNumberTS: Array<number> = [1, 2, 3]; // number[] 로도 타입을 지정할 수 있음
const arrStringTS: Array<string> = ["A", "B", "C"]; // string[] 로도 타입을 지정할 수 있음
const object: object = {};
const person: { name: string; age: number } = {
  name: "sangkun",
  age: 23,
};
const show: boolean = true;
const isFalse: boolean = false;

// TS 튜플
const addresses: [string, number] = ["gangnam", 110];
