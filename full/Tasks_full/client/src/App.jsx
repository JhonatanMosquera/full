import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginPage from './page/loginPage'
import RegisterPage from './page/registerPage'
import HomePage from './page/HomePage'
import ProfilePage from './page/ProfilePage'
import TaskFormPage from './page/TaskFormPage'
import TasksPage from './page/TasksPage'
import { AuthProvider } from "./context/authContext";
import {TaskProvider} from "./context/TasksContext"
import ProtectedRoute from './ProtectedRoute'
import { Navbar } from './components/navbar'
function App() {
  return (
    
   <AuthProvider>
     <TaskProvider>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>

        <Route element={<ProtectedRoute/>}>
        <Route path='/tasks' element={<TasksPage></TasksPage>}></Route>
        <Route path='/add-tasks' element={<TaskFormPage></TaskFormPage>}></Route>
        <Route path='/tasks/:id' element={<TaskFormPage></TaskFormPage>}></Route>
        <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route> 

        </Route>
      </Routes>
    </BrowserRouter>
     </TaskProvider>
   </AuthProvider>
  )
}

export default App
