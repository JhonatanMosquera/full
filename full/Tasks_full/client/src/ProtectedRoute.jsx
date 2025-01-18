import { useAuth } from "./context/authContext"
import { Navigate,Outlet } from "react-router-dom"

function ProtectedRoute() {
    const {isAuthenticated,loading} = useAuth()
    console.log(loading,isAuthenticated)
    if(loading) return <h1>Loagin...</h1>
    if(!loading &&  !isAuthenticated) return <Navigate to='/login' replace  />
    return (
    <Outlet/>
  )
}

export default ProtectedRoute