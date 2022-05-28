import { React, useContext } from 'react';

import AddTaskForm from "./AddTaskForm";
import TasksContext from '../tasksContext';
import {v4 as uuid} from 'uuid';

function AddTaskScreen() {

    const { tasks, setTasks } = useContext(TasksContext);

    function add_task(content, details){

        const newTask = {
            id:uuid(),
            completed:false,
            content:content,
            details:details,
            date: Date.now()
        };
    
        setTasks([...tasks,newTask]);
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