import Link from "next/link";
import { atom, selector, useRecoilState } from "recoil";
import { Layout } from "src/components/Layout";
import { SelectField } from "src/components/SelectField";
import { Table } from "src/components/Table";
import { TodoList } from "src/features/todo/components/ItemList";
import { pagesPath } from "src/lib/$path";

export const countState = atom({ default: 0, key: "count" });
export const todoListFilterState = atom({
  default: "Show All",
  key: "TodoListFilter",
});

export const todoListState = atom({
  default: [],
  key: "TodoList",
});

export type TodoItemType = {
  id: number;
  isComplete: boolean;
  text: string;
};

export const filteredTodoListState = selector({
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list: TodoItemType[] = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
  key: "FilteredTodoList",
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
      <button className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium leading-tight">
        テキスト
      </button>

      <div>
        <TodoList />
      </div>
      <div className="w-full text-center">
        <h3>テーブル</h3>
        <Table />
      </div>
    </Layout>
  );
}
