interface Todos {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Array<Todos>;

// api
const fetchTodoItems = (): Array<Todos> => {
  const todos: Array<Todos> = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
};

// crud methods
const fetchTodos = (): Array<Todos> => {
  const todos = fetchTodoItems();
  return todos;
};

const addTodo = (todo: Todos): void => {
  todoItems.push(todo);
};

const deleteTodo = (index: number): void => {
  todoItems.splice(index, 1);
};

const completeTodo = (index: number, todo: Todos): void => {
  todo.done = true;
  todoItems.splice(index, 1, todo);
};

// business logic
const logFirstTodo = (): Todos => {
  return todoItems[0];
};
const showCompleted = (): Array<Todos> => {
  return todoItems.filter((item: Todos) => !item.done);
};

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
const addTwoTodoItems = (): void => {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item4: Todos = {
    id: 4,
    title: "item_4",
    done: false,
  };
  addTodo(item4);

  addTodo({
    id: 5,
    title: "item_5",
    done: false,
  });
};

// NOTE: 유틸 함수
const log = (): void => {
  console.log(todoItems);
};

todoItems = fetchTodoItems();
addTwoTodoItems();
// log();
showCompleted();
