import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";


function EditTaskForm({task, onEditTask}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    function onSubmit(data){
      const {content} = data;
      onEditTask(content);
      navigate("/tasks");
    }
  
    return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="FormFieldName">Task name</h4>
        <input className="FormFieldInput" {...register("content", { required: true, value:task.content })} />
        <p className='alert'>
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input className="FormSubmit" type="submit" value="Update" />
      </form>);
  }

export default EditTaskForm