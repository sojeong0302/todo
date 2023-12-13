import "./App.css";
import Header from "./component/Header.js";
import TodoEditor from "./component/TodoEditor.js";
import TodoList from "./component/TodoList.js";
import { useState } from "react";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "태규 만나기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "컴활 공부하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
export default App;
