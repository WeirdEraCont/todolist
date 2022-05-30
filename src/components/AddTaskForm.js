import {useForm} from 'react-hook-form'

function AddTaskForm({onAddTask}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    function onSubmit(data){
      const {content, details} = data;
  
      onAddTask(content, details);
    }
  
    return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
<<<<<<< Updated upstream
  
        <input {...register("content", { required: true })} />
        <input {...register("details", { required: false })} />
        <p className='alert'>
=======
        <h4>Task name</h4>
        <input placeholder="Task name" {...register("content", { required: true })} />
        <p className='formAlert'>
>>>>>>> Stashed changes
          {errors.content && <span>Content is required</span>}
        </p>
  
        <input type="submit" value="Add" />
      </form>
      );
  }

export default AddTaskForm