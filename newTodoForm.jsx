import { useContext, useRef } from "react";
import { newTodoConext } from "../TodoList";
export function NewTodoform() {
    const todocontext  = useContext(newTodoConext)
  const nameRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (!nameRef.current.value) return;
    addTodo(nameRef.current.value)
    nameRef.current.value = "";
  }
  return (
     <div>

      <input
        type="text"
        name=""
        id=""
        ref={nameRef}
         
      />
      <button className="add-btn" onClick={todocontext.addTodo}>
        Click Me
      </button>
 
        </div>
  );
}
