import {useSelector, useDispatch} from "react-redux";
import {removeTodo} from "../features/todo/todoSlice";
import { StoreStateType } from "../app/store";

export default function DisplayTodo(){
    const todos = useSelector((state: StoreStateType) => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Todos</h3>
            {todos.todos.map(todo =>
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={()=>{
                        dispatch(removeTodo(todo.id));
                    }}>Remove Todo</button>
                </div>
            )}
        </div>
    )
}