import {ToDo} from "./ToDo.ts";
import axios from "axios";
import {TodoStatus} from "./TodoStatus.ts";

type Props = {
    todo: ToDo,
    onTodoItemChange: () => void,
}

export default function ToDoCard(props: Props) {

    function deleteTodo() {
        axios.delete("/api/todo/" + props.todo.id)
            .then(props.onTodoItemChange)
    }

    function move(targetStatus: TodoStatus) {
        axios.put("/api/todo/" + props.todo.id, {
            ...props.todo,
            status: targetStatus,
        } as ToDo)
            .then(props.onTodoItemChange)
    }


    return (
        <div className={"todo-card"}>
            {props.todo.description}
            <div className={"button-container"}>
                {
                    props.todo.status === "OPEN"
                        ? <div></div>
                        : (
                            props.todo.status === "IN_PROGRESS"
                            ? <button className={"card-nav-button"} onClick={() => move("OPEN")}> Back </button>
                            :<button className={"card-nav-button"} onClick={() => move("IN_PROGRESS")}> Back </button>
                        )


                }
                <button className={"delete-button"} onClick={deleteTodo}> Delete</button>
                {
                    props.todo.status === "DONE"
                        ? <div></div>
                        : (
                            props.todo.status === "IN_PROGRESS"
                                ? <button className={"card-nav-button"} onClick={() => move("DONE")}> Forward</button>
                                : <button className={"card-nav-button"} onClick={() => move("IN_PROGRESS")}> Forward</button>
                    )
                }
            </div>
        </div>
    )
}
;