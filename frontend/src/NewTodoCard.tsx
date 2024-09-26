import {useState} from "react";
import axios from "axios";
import {ToDo} from "./ToDo.ts";

type Props = {
    onTodoItemChange : () => void
}


export default function NewTodoCard(props: Props) {

    const [text, setText] = useState<string>('')

    function changeText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function saveTodo (){
        setText("")
        axios.post("/api/todo", {
            description: text,
            status: "OPEN",
        }as ToDo)
            .then(props.onTodoItemChange)
    }

    return (
        <div>
            <div className={"todo-card new-todo"}>
                <input type={"text"} placeholder={"New ToDo"} onInput={changeText} value={text}/>
                <button onClick={saveTodo}>Save</button>
            </div>
        </div>
    );
}

