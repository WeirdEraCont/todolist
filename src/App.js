import { React, useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';

import './App.css';

import AllTasksScreen from './components/AllTasksScreen';
import AddTaskScreen from './components/AddTaskScreen';
import EditTaskScreen from './components/EditTaskScreen';
import TasksContext from './tasksContext';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
     
    setTasks([{
      id:uuid(),
      content:"Task 01",
      completed:false,
      created:Date.now(),
      details:"Details on first task",
      requirements:[]
    },
    {
      id:uuid(),
      content:"Task 02",
      completed:true,
      created:Date.now(),
      details:null,
      completed:"01-10-2021"
    }
  ]);
    
  }, []
  );

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/tasks/add">Add</Link>
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
