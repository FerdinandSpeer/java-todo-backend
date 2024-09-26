import ToDoCard from "./ToDoCard.tsx";
import {ToDo} from "./ToDo.ts";
import {TodoStatus} from "./TodoStatus.ts";
import NewTodoCard from "./NewTodoCard.tsx";

type Props = {
    todos: ToDo[],
    status: TodoStatus,
    onTodoItemChange : () => void,
}

export default function TodoColumn(props: Props) {
    return (
        <div className={"column"}>
            <h3>{props.status}</h3>
            {
                props.todos.map(todo => <ToDoCard todo={todo} key={todo.id} onTodoItemChange={props.onTodoItemChange}/>)
            }
            {
                (props.status === "OPEN") && <NewTodoCard onTodoItemChange={props.onTodoItemChange} />
            }

        </div>
    );
}