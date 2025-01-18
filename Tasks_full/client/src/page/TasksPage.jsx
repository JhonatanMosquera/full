import { useEffect } from "react";
import {useTasks} from "../context/TasksContext"
import {Link} from 'react-router-dom'

export function TasksPage() {
  const { getTasks, tasks } = useTasks();
  const { deleteTask } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No tasks</h1>;

  return (
    
    <div>
      
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={()=>{deleteTask(task._id)}}>eliminar</button>
          <Link to={`/tasks/${task._id}`}>editar </Link>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;