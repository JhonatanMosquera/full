import { Router } from "express"
import {authRequired} from '../middlewares/validateToken.js'
import {getTask,updateTasks,getTasks,CreateTaks,deleteTask} from '../controllers/tasks.controller.js'
import { validateSchema } from "../middlewares/validater.middlewares.js"
import { createTaskSchema } from "../schemas/task.schema.js"
const router = Router()

router.get('/tasks',authRequired,getTasks)
router.get('/tasks/:id',authRequired,getTask)
router.post('/tasks',authRequired,validateSchema(createTaskSchema),CreateTaks)
router.delete('/tasks/:id',authRequired, deleteTask)
router.put('/tasks/:id',authRequired,updateTasks)


export default router