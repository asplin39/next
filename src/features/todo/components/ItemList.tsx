import { useRecoilValue } from "recoil";

import { ItemCreator } from "./ItemCreator";
import { TodoListFilters } from "./ItemFilter";
import { TodoItem } from "./TodoItem";
import { TodoListStats } from "./TodoListStats";
import { filteredTodoListState } from "src/pages";

export const TodoList = () => {
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
};
