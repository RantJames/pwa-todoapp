import { useState, useEffect } from "react"
import { getAllTasksFromDB } from "../utils/helpers"
import { Task } from "./Task"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tasks = () => {
    const [TaskList, setTaskList] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const existingTasks = await getAllTasksFromDB()
        setTaskList(existingTasks)
    }, [])

    return (
        <div>
            <link rel="manifest" href="/manifest.json"></link>
            <span className="border">
            {TaskList ?
                TaskList.map((task, index) => <Task key={index} taskname={task.taskname} duedate={task.duedate} assignedTo={task.assignedTo}/>)
                : "Loading..."}
               
             </span>   
        </div>
    )
}