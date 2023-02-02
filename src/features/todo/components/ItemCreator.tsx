import { useState } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { TodoItemType, todoListState } from "src/pages";


export const ItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList: SetterOrUpdater<any> = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: any) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}