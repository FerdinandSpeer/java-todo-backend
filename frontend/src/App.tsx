import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {ToDo} from "./ToDo.ts";


function App() {

    const [dataToDo, setDataToDo] = useState<ToDo>([])

  useEffect(() => {
      axios.get("/api/todo")
          .then(response => {setDataToDo(response.data)})
          .catch(error => console.error("Error fetching data", error))
  },[])


  return (
    <>
        <h1>ToDo App</h1>
    </>
  )
}

export default App
