enum Shoes {
  Nike,
  Adidas,
}

const myShoes1 = Shoes.Nike;
const myShoes2 = Shoes.Adidas;
console.log(myShoes1);
console.log(myShoes2);

enum Answer {
  Yes = "Y",
  No = "N",
}

const ask = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
};
ask(Answer.No);
