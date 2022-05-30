import { React, useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import axios from 'axios';

import './App.css';

import AllTasksScreen from './components/AllTasksScreen';
import AddTaskScreen from './components/AddTaskScreen';
import EditTaskScreen from './components/EditTaskScreen';
import TasksContext from './tasksContext';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
     
    async function fetch_tasks_from_api(){
      try {
        const response = await axios.get("https://sbjqg2rl.directus.app/items/tasks");
        console.log(response);
        const fetched_data = response.data.data;
        setTasks(fetched_data);
      } catch (error) {
        console.error(error);
        setTasks([]);
      }
    }

    fetch_tasks_from_api();
    
  }, []
  );

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <h1>Welcome to MyTodoList</h1>
        <p>Pre-alpha version 0.1.4<br/>
          Version name : <strong>Ugly but functional</strong>
        </p>
        <nav>
          <ul class="nav">
            <li key="tasks">
              <Link to="/tasks">Tasks list</Link>
            </li>
            {/* <li key="tree">
              <Link to="/tree">Tasks tree</Link>
            </li> */}
            <li key="new">
              <Link to="/tasks/add">Create a task</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AllTasksScreen />} />
          <Route path="/tasks" element={<AllTasksScreen />} />
          <Route path="/tasks/add" element={<AddTaskScreen />} />
          <Route path="/tasks/:id/edit" element={<EditTaskScreen />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

      </div>
    </TasksContext.Provider>
  );
}

export default App
