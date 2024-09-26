import ToDoCard from "./ToDoCard.tsx";
import {ToDo} from "./ToDo.ts";
import {TodoStatus} from "./TodoStatus.ts";

type Props = {
    todos: ToDo[],
    status: TodoStatus,

}

export default function TodoColumn(props: Props) {
    return (
        <div className={"column"}>
            <h3>{props.status}</h3>
            {
                props.todos.map(todo => <ToDoCard todo={todo} key={todo.id}/>)
            }
        </div>
    );
}