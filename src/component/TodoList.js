import "./TodoList.css";
import TodoItem from "./TodoItem.js";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search));
  };

  const analyzeTodo = () => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = analyzeTodo();

  return (
    <div className="TodoList">
      <h4>Todo List </h4>
      <div className="situation">
        <h6>💜 총 개수: {totalCount}</h6>
        <h6>💜 완료: {doneCount}</h6>
        <h6>💜 해야하는 일: {notDoneCount}</h6>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
