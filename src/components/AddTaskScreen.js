import { React, useContext } from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

import AddTaskForm from "./AddTaskForm";
import TasksContext from '../tasksContext';
import TASKS_URL from "../databaseURL";


function AddTaskScreen() {

    const { tasks, setTasks } = useContext(TasksContext);

    async function add_task(content, details){

        const newTask = {
            id:uuid(),
            completed:false,
            content:content,
        };

        setTasks([...tasks,newTask]);

        try {
            await axios.post(TASKS_URL, newTask)
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <div>
                <AddTaskForm onAddTask={add_task}/>
            </div>
        </TasksContext.Provider>
    );
}

export default AddTaskScreen;