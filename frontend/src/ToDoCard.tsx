import {ToDo} from "./ToDo.ts";

type Props = {
    todo: ToDo,
}

export default function ToDoCard(props: Props) {
    return (
        <div className={"todo-card"}>
            {props.todo.description}
        </div>
    );
}
;