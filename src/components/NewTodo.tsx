import React, { useRef } from "react";

type NewTodoProps={
  
}
const NewTodo: React.FC = props => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enterInputRef = textInputRef.current!.value;
    props.onAddtodo(enterInputRef)
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="Todo内容">Todo内容</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Todo追加</button>
    </form>
  );
};

export default NewTodo;
