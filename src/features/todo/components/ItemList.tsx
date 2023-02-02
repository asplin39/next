import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "src/pages";
import { ItemCreator } from "./ItemCreator";
import { TodoListFilters } from "./ItemFilter";
import { TodoItem } from "./TodoItem";
import { TodoListStats } from "./TodoListStats";


export const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <ItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}