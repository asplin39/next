import { useState } from "react";
import type { SetterOrUpdater } from "recoil";
import { useSetRecoilState } from "recoil";
import { todoListState } from "src/pages";

export const ItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList: SetterOrUpdater<any> = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: any) => [
      ...oldTodoList,
      {
        id: getId(),
        isComplete: false,
        text: inputValue,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
