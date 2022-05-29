import { React, useContext } from 'react';
import { useLocation } from "react-router-dom";

import EditTaskForm from "./EditTaskForm";
import TasksContext from '../tasksContext';

function EditTaskScreen () {

    const { tasks, setTasks } = useContext(TasksContext);
    const location = useLocation();
    const {task} = location.state;

    function edit_task(updated_content, updated_requirements) {
    
        const index = tasks.findIndex(a_task => task.id === a_task.id);
        const newTasks = tasks; // copy tasks
        const updated_task = task; // copy target task
        updated_task.content = updated_content; // set new content value
        updated_task.resuirements = updated_requirements; // set new content value
        newTasks[index] = updated_task; // update task at its index
        setTasks(newTasks); //update state
      }
    return(
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <div>
                <EditTaskForm current_task={task} onEditTask={edit_task}/>
            </div>
        </TasksContext.Provider>
    );
}

export default EditTaskScreen;