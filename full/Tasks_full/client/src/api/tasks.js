import axios from "./axios";

export const getTasksrequest = () =>axios.get("/tasks")

export const getTaskRequest = (id) =>axios.get(`/tasks/${id}`)

export const createTasksrequest = (task) =>axios.post("/tasks",task)

export const updateTaskRequest = (id,task) =>axios.put(`/tasks/${id}`,task)

export const deleteTasksrequest = (id) =>axios.delete(`/tasks/${id}`) 

