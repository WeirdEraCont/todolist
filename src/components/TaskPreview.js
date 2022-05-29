import { Link } from "react-router-dom";
import { useState } from 'react';
import TDLButton from './TDLButton';

function TaskPreview({task, onDel, onCheck}) {

    const [completed, setCompleted] = useState(task.completed);
    const [confirmDel, setConfirmDel] = useState(false);

    function complete_task(a_task) {
        onCheck(a_task);
        setCompleted(true);
    }

    return (
        <article>
            <div className="TaskPreview">
                <div className="TaskPreviewTitle">{task.content}</div>
                <div className="TaskPreviewDetails">
                    <div className="row"><Link to={"/tasks/"+task.id+"/edit"} state={{task:task}}><TDLButton txt="Edit" /></Link></div>
                    <div className="row">
                        {(confirmDel)
                            ? <TDLButton txt="Confirm?" onClick={()=>onDel(task)}/>
                            : <TDLButton txt="Delete" onClick={()=>setConfirmDel(true)}/>
                        }
                    </div>
                    <div className="row">
                        {(completed)
                            ? "All done !"
                            : <TDLButton txt="Done?" onClick={() => complete_task(task)}/>
                        }
                    </div>
                </div>
                <p/>
            </div>
        </article>
    )
}

export default TaskPreview