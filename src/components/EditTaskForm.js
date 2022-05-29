import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
// import Select from 'react-select';


function EditTaskForm({current_task, onEditTask}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // const task_list = [
    //   {value:tasks[0].id, label:tasks[0].content},
    //   {value:tasks[1].id, label:tasks[1].content}
    // ];
  
    function onSubmit(data){
      const {content, req} = data;
      onEditTask(content, req);
      navigate("/tasks");
    }
  
    return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="FormFieldName">Task name</h4>
        <input className="FormFieldInput" placeholder="Task name" {...register("content", { required: true, value:current_task.content })} />
        {/* <h4 className="FormFieldName">Tasks requirements</h4>
        <Select
          isMulti
          options={ task_list }
          {...register("req", {required:false})}
        /> */}
        <p className='alert'>
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input className="FormSubmit" type="submit" value="Update" />
      </form>);
  }

export default EditTaskForm