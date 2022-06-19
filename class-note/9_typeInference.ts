// 타입 추론 기본
const a = "A";
const getB = (b) => {
  const c = "c";
  return b + c;
};

//

interface DropDown<T> {
  value: T;
  title: string;
}

const shoppingItems: DropDown<string> = {
  value: "value", // TS recommand string type
  title: "title",
};

// 복잡한 구조에서의 타입 추론
interface Item<T> {
  name: string;
  value: T;
}
interface detailItem<K> extends Item<K> {
  description: string;
  tag: K;
}

const detailMac: detailItem<string> = {
  name: "name",
  value: "v",
  description: "string",
  tag: "t",
};
