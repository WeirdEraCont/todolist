import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";


function AddTaskForm({task, onEditTask}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    function onSubmit(data){
      const {content, details} = data;
      onEditTask(content, details);
      navigate("/tasks");
    }
  
    return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
<<<<<<< Updated upstream
        <h4 className="FormFieldName">Task name</h4>
        <input className="FormFieldInput" {...register("content", { required: true, value:task.content })} />
        <h4 className="FormFieldName">Task details</h4>
        <input className="FormFieldInput" {...register("details", { required: false, value:task.details })} />
        <p className='alert'>
=======
        <h4>Task name</h4>
        <input placeholder="Task name" {...register("content", { required: true, value:task.content })} />
        {/* <h4>Tasks requirements</h4>
        <Select
          isMulti
          options={ task_list }
          {...register("req", {required:false})}
        /> */}
        <p className='formAlert'>
>>>>>>> Stashed changes
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input className="FormSubmit" type="submit" value="Update" />
      </form>);
  }

export default AddTaskForm