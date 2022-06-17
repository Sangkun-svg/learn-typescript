// const logMessage = (data: any) => {
//   console.log(data);
// };
// logMessage("hello");
// logMessage(100);

const logMessage = (data: string | number) => {
  console.log(data);
};
logMessage("hello");
logMessage(100);

interface Human {
  name: string;
  age: number;
}
interface Developers {
  name: string;
  skill: string;
}

const askSomeone = (someOne: Human | Developers) => {
  someOne.name;
  //   someOne.age; Error : 보장되지 않은 속성입니다.
  //   someOne.skill; Error : 보장되지 않은 속성입니다.
};
const askSomeone2 = (someOne: Human & Developers) => {
  someOne.name;
  someOne.age; // intersection type을 이용해서 Human 과 Developers 의 모든 속성을 사용가능하게 한다.
  someOne.skill;
};
