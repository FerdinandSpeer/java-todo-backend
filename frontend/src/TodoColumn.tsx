import ToDoCard from "./ToDoCard.tsx";
import {ToDo} from "./ToDo.ts";
import {TodoStatus} from "./TodoStatus.ts";
import NewTodoCard from "./NewTodoCard.tsx";

type Props = {
    todos: ToDo[],
    status: TodoStatus,
    newItemSaved : () => void,

}

export default function TodoColumn(props: Props) {
    return (
        <div className={"column"}>
            <h3>{props.status}</h3>
            {
                props.todos.map(todo => <ToDoCard todo={todo} key={todo.id}/>)
            }
            {
                (props.status === "OPEN") && <NewTodoCard newItemSaved={props.newItemSaved} />
            }

        </div>
    );
}