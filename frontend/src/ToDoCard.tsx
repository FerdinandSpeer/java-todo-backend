import {ToDo} from "./ToDo.ts";
import axios from "axios";

type Props = {
    todo: ToDo,
    onTodoItemChange: () => void,
}

export default function ToDoCard(props: Props) {

    function deleteTodo() {
        axios.delete("/api/todo/" + props.todo.id)
            .then(props.onTodoItemChange)
    }

    return (
        <div className={"todo-card"}>
            {props.todo.description}
            <button className={"delete-button"} onClick={deleteTodo}> Delete</button>
        </div>
    )
}
;