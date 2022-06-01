import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

function AddTaskForm({onAddTask}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    function onSubmit(data){
      const {content} = data;
      onAddTask(content);
      navigate("/tasks");
    }
  
    return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Task name</h4>
        <input placeholder="Task name" {...register("content", { required: true })} />
        <p className='formAlert'>
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input class="submit" type="submit" value="Create" />
      </form>
      );
  }

export default AddTaskForm