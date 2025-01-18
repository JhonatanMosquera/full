// eslint-disable-next-line react/prop-types

import { createContext, useState,useContext,useEffect} from 'react';
import { RegisterRequest,loginRequest,verityTokenRequet } from "../api/auth";
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context)
        {throw new Error("useauth must be use with an provider")}
    return context
}

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [errors,setErrors] = useState([])
    const [loading,setLoading] = useState(true)

    const signup = async (userData) =>{
        try {
            const res = await RegisterRequest(userData); // Llama a la función API
      console.log(res.data);
      setUser(res.data)
      setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }


    const signin = async(userData) =>{
        try {
     const res =  await loginRequest(userData)
     console.log(res)
     setIsAuthenticated(true)
     setUser(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }
    
    const logout = ()=>{
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(()=>{
        if (errors.length > 0) {
            const timer= setTimeout(() => {
                setErrors([])
            }, 5000);
            return() => clearTimeout(timer)
        }
    },[errors])

    useEffect(() => {
        async function checkLogin() {
          const cookies = Cookies.get();
      
          if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return setUser(null);
          }
      
          try {
            const res = await verityTokenRequet(cookies.token);
            if (!res.data) {
              setIsAuthenticated(false);
              setLoading(false);
              return;
            }
      
            setIsAuthenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
            setUser(null);
          }
        }
      
        checkLogin();
      }, []);
      

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            errors,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};


