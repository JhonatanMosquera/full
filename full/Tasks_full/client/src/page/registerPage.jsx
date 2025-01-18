
import { useForm } from "react-hook-form";
import {useAuth  } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'
function RegisterPage() {
  
  const { register, handleSubmit , formState:
    {errors}
  } = useForm();
  const {signup,isAuthenticated,errors:RegisterErrors} = useAuth()
  const navigate = useNavigate()
 
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks"); // Redirige a la página de dashboard o donde prefieras
    }
  }, [isAuthenticated, navigate]);

  
  // Maneja el envío del formulario y hace la solicitud de registro
  const onSubmit = handleSubmit(async (values) => {
   signup(values)
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        RegisterErrors.map((error,i)=>(
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
        />
        {
          errors.username && (
            <p className="text-red-500">
              username is required
            </p>
          )
        }
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

        {
          errors.password && (
            <p className="text-red-500">
              password is required
            </p>
          )
        }

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"
        >
          Register
        </button>
      </form>
      <p className="flex gap-2 justify-between">already have an account   <Link to="/login" className="text-sky-500">Login</Link></p>
    </div>
  );
}

export default RegisterPage;
