import { useState } from "react"
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";

export default function AddTodo(){
    const [todoText, setTodoText] = useState("");
    const distpatch = useDispatch();
    return (
        <div>
            <input type="text" placeholder="Type Todo...." onChange={(e)=>{
                setTodoText(e.target.value);
            }}/>
            <button onClick={()=>{
                distpatch(addTodo(todoText));
            }}>Add Todo</button>
        </div>
    )
}