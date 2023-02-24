import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../../recoil/selectors";
import TodoListFilter from "./TodoListFilter";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
