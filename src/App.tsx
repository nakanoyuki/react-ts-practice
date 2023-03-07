import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TodoType } from "./todo.model";

const App: React.FC = () => {
  const [todos,setTodos] = useState<TodoType[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos=>[...prevTodos,{id:Math.random.toString(),text:text}])
  };
  return (
    <div className="App">
      <NewTodo onAddtodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
