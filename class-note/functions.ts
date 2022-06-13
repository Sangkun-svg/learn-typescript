const sumFunc = (a: number, b: number): number => {
  return a + b;
};

// sumFunc(1, 2, 3); // error : expect 2 argument , but got 3

const log = (a: string, b: string): string => {
  return a + b;
};

const optionalLog = (a: string, b?: string): string => {
  return a + b;
};

// log("hello world"); Error : expect 2 args , but got 1
optionalLog("hello world"); // optional parameter 를 이용해 동적인 함수를 생성할 수 있음
