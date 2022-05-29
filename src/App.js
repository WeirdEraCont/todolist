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
      requirements:[]
    },
    {
      id:uuid(),
      content:"Task 02",
      completed:true,
    }
  ]);
    
  }, []
  );

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <h1>Welcome to MyTodoList</h1>
        <p>Alpha version 0.1.4<br/>
          Version name : <strong>Ugly but functional</strong>
        </p>
        <nav>
          <ul>
            <li key="tasks">
              <Link to="/tasks">Tasks list</Link>
            </li>
            {/* <li key="tree">
              <Link to="/tree">Tasks tree</Link>
            </li> */}
            <li key="new">
              <Link to="/tasks/add">New task</Link>
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
                <Link to="/">Back to MyTodoList</Link>
              </main>
            }
          />
        </Routes>

      </div>
    </TasksContext.Provider>
  );
}

export default App
