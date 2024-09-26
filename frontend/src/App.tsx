import "./index.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {ToDo} from "./ToDo.ts";
import TodoColumn from "./TodoColumn.tsx";
import {allPossibleTodos} from "./TodoStatus.ts";


function App() {


    const [todos, setTodos] = useState<ToDo[]>()

    useEffect(() => {
        axios.get("/api/todo")
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.error("Error fetching data", error))
    }, [])

    if (!todos) {
        return "Loading..."
    }


    return (
        <>

            <h1 className={"h1"}>ToDos</h1>
            <div className={"page"}>
                {
                    allPossibleTodos.map(status => {
                        const filteredTodos = todos.filter(todo => todo.status === status)
                        return <TodoColumn status={status} todos={filteredTodos}/>
                    })
                }
            </div>

        </>
    )
}

export default App
