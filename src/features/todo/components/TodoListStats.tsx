import { selector, useRecoilValue } from "recoil";
import { todoListState } from "src/pages";

const todoListStatsState = selector({
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      percentCompleted,
      totalCompletedNum,
      totalNum,
      totalUncompletedNum,
    };
  },
  key: "TodoListStats",
});

export const TodoListStats = () => {
  const { percentCompleted, totalCompletedNum, totalNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};
