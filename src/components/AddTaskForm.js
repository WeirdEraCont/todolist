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
  
        <input {...register("content", { required: true })} />
        <p className='alert'>
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input type="submit" value="Add" />
      </form>);
  }

export default AddTaskForm