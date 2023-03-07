import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "1", text: "コース完了" }];
  const todoAddHandler = (text:string)=>{

  }
  return (
    <div className="App">
      <NewTodo onAddtodo={todoAddHandler}/>
      <TodoList items={todos} />

    </div>
  );
};

export default App;
