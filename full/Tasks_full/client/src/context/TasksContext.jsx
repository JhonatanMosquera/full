import {createContext, useContext, useState} from "react"
import {createTasksrequest,getTasksrequest,deleteTasksrequest,getTaskRequest,updateTaskRequest} from "../api/tasks"
const TaskContext = createContext();


export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error("useTask must be used with a TaskProvider");
    }
    return context; // Asegúrate de retornar el contexto
  };
  
  
export function TaskProvider({ children}){
    const [tasks,setTasks] =useState([])

    const getTasks = async () => {
        const res = await getTasksrequest();
        console.log(res)
        setTasks(res.data);
      };

    const createTask = async (task)=>{
        const res = await  createTasksrequest(task)
        console.log(res)
    }

    const deleteTask = async (id) => {
      try {
        const res = await deleteTasksrequest(id);
        if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
      } catch (error) {
        console.log(error);
      }
    };

    const getTask = async (id) => {
      try {
        const res = await getTaskRequest(id);
        
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
  
    const updateTask = async (id, task) => {
      try {
        await updateTaskRequest(id, task);
      } catch (error) {
        console.error(error);
      }
    };
  
    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}