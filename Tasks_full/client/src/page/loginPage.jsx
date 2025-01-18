
import { useForm, } from "react-hook-form";
import { useAuth } from "../context/authContext";
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
  function loginPage() {

    const {register,handleSubmit,formState: { errors }} =useForm()
    const {signin,errors: signinError,isAuthenticated}=useAuth()
    const navigate = useNavigate()
    const onSubmit = handleSubmit((data)=>{
      signin(data)
    })
    useEffect(() => {
      if (isAuthenticated) {
        navigate("/tasks");
      }
    }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      
      <div className="bg-zinc-900 max-w-md w-full p-10 rounded-md">
      {
        signinError.map((error,i)=>(
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))
      }
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={onSubmit}>
        
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />

        {
          errors.email && (
            <p className="text-red-500">
              email is required
            </p>
          )
        }
        <input
          type="password"
          name="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />

        {/* {
          errors.password && (
            <p className="text-red-500">
              password is required
            </p>
          )
        } */}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"
        >
          Login
        </button>
      </form>

          <p className="flex gap-2 justify-between">Don't have an account   <Link to="/register" className="text-sky-500">Sign up</Link></p>

      </div>

    </div>
  )
}
export default loginPage
