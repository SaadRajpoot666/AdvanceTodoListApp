import {    useContext } from "react";
import { newTodoConext } from "../TodoList";
import { TodoItem } from "./TodoItem";
export function TodoList(){
const {todos} = useContext(newTodoConext);

return <ul id="list">{todos.map((todo ) => {
    return (
       <TodoItem  key={todo.id} {...todo} />
    );
  })}</ul>

}
