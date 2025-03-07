import { useContext, useRef } from "react";
import { newTodoConext } from "../TodoList";

export function TodoItem({id,Name ,completed}){
const {toggleTodo,delTodo,updateTodoName} = useContext(newTodoConext)
const [isEditing,setIsEditing] = useState(false)
    const nameRef = useRef()
    function handleSubmit(e){
        e.preventDefault()
        setIsEditing(false)
        if(nameRef.current.value === "") return
        updateTodoName(id,nameRef.current.value)
    }
return <li>
{isEditing ? <form action="form" onSubmit={handleSubmit}>
    <input type="text" name="" id="" defaultValue={Name} ref={nameRef}  />
    <button>Edit</button>
</form> : 
<>
 
<input
type="checkbox"
checked={completed}
name=""
id=""
onChange={(e) => toggleTodo(id, e.target.checked)}/>
   <span> {Name} </span>
 
<button onClick={() => delTodo(id)}>Delete</button>
</>}
</li> 
}
