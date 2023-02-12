import Link from "next/link";
import { atom, selector, useRecoilState } from "recoil";
import { Layout } from "src/components/Layout";
import { SelectField } from "src/components/SelectField";
import { Table } from "src/components/Table";
import { TodoList } from "src/features/todo/components/ItemList";
import { pagesPath } from "src/lib/$path";

export const countState = atom({ key: 'count', default: 0 });
export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});

export const todoListState = atom({
  key: 'TodoList',
  default: [],
});

export type TodoItemType = {
  id: number;
  text: string;
  isComplete: boolean;
}

export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list: TodoItemType[] = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default function Home() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <Layout>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <Link href={pagesPath.test.$url()}>テストページへ</Link>
      <h2>タイトル</h2>
      <div>
        <SelectField />
      </div>

      <div>
        <TodoList />
      </div>
      <div className="w-full">
        <h3>テーブル</h3>
        <Table />
      </div>
    </Layout>
  )
}
