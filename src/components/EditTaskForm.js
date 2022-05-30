import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
// import Select from 'react-select';

import TDLButton from './TDLButton';


function EditTaskForm({task, onEditTask}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {completed, setCompleted} = useState(task.completed);

    // const task_list = [
    //   {value:tasks[0].id, label:tasks[0].content},
    //   {value:tasks[1].id, label:tasks[1].content}
    // ];
  
    function onSubmit(data){
      const {content} = data;
      onEditTask(content);
      navigate("/tasks");
    }
  
    return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Task name</h4>
        <input placeholder="Task name" {...register("content", { required: true, value:task.content })} />
        {/* <h4>Tasks requirements</h4>
        <Select
          isMulti
          options={ task_list }
          {...register("req", {required:false})}
        /> */}
        <p className='formAlert'>
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input className="FormSubmit" type="submit" value="Update" />
      </form>);
  }

export default EditTaskForm