import {React, useContext} from 'react';
import TaskPreview from './TaskPreview';
import TasksContext from '../tasksContext';

function AllTasksScreen() {

    const { tasks, setTasks } = useContext(TasksContext);

    
    function del_task(task){
        const new_tasks = tasks.filter(a_task => task.id !== a_task.id);
        setTasks([...new_tasks]);
    }

    function complete_task(task){
        
        const index = tasks.findIndex(a_task => task.id === a_task.id);
        const newTasks = tasks; // copy tasks
        const updated_task = task; // copy target task
        updated_task.completed = true; // set new completion value
        updated_task.completion_date = Date.now(); // set completion date
        newTasks[index] = updated_task; // update task at its index
        setTasks(newTasks); //update state
    }

    return (
        <TasksContext.Consumer>
            {({ tasks }) => (
            <div className="TaskMaster">
                <ul>
                    {tasks.map(task =>
                        <li key={task.id}>
                            <TaskPreview task={task} onDel={del_task} onCheck={complete_task}/>
                        </li>
                    )}
                </ul>
            </div>
            )}
        </TasksContext.Consumer>
    )
}

export default AllTasksScreen