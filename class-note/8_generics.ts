// const logText = (text) => {
//   console.log(text);
//   return text;
// };
// logText(10);
// logText("hi");
// logText(true);

import { isArrowFunction } from "typescript";

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("HI");

const logTextArrowFunc = <T>(text: T): T => {
  console.log(text);
  return text;
};

logTextArrowFunc<string>("Hi");

const logStringNumber = (text: string | number): string | number => {
  console.log(text);
  return text;
};

const test = logStringNumber("a");

// 제네릭의 타입 제한
const logTextLength = <T>(text: T[]): T[] => {
  console.log(text.length);

  return text;
};

// 제네릭의 타입 제한 - 2 : 정의된 타입 이용하기

interface LengthType {
  length: number;
}

const logTextLength2 = <T extends LengthType>(text: T): T => {
  console.log(text.length);
  return text;
};

// 제네릭의 타입 제한 - 3 : keyof 이용하기

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
const getShoppingItemOption = <T extends keyof ShoppingItem>(
  itemOption: T
): T => {
  return itemOption;
};

// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
getShoppingItemOption("name");
getShoppingItemOption("price");
getShoppingItemOption("stock");
