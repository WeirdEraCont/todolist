import { React, useContext } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import EditTaskForm from "./EditTaskForm";
import TasksContext from '../tasksContext';
import TASKS_URL from "../databaseURL.js";

function EditTaskScreen () {

    const { tasks, setTasks } = useContext(TasksContext);
    const location = useLocation();
    const {task} = location.state;

    async function edit_task(updated_content) {
    
        const index = tasks.findIndex(a_task => task.id === a_task.id);
        const newTasks = tasks; // copy tasks
        const updated_task = task; // copy target task
        updated_task.content = updated_content; // set new content value
        newTasks[index] = updated_task; // update task at its index
        setTasks(newTasks); //update state

        // update database
        try {
            axios.patch(TASKS_URL+task.id,updated_task);
        } catch(error) {
            console.log(error);
        }
      }
    
    return(
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <div>
                <EditTaskForm task={task} onEditTask={edit_task}/>
            </div>
        </TasksContext.Provider>
    );
}

export default EditTaskScreen;