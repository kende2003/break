
import AuthForm from "../Components/AuthForm/AuthForm";
import { useAuth } from "../Context/AuthProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>  {
    const { signInWithGoogle, sigInWithCreds, error, reset} = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    useEffect(() =>{
        reset()
    }, [reset])

    const handleSubmit = async ({ email, password}) => {
  
        sigInWithCreds(email, password)

    }
    useEffect(() => {
        setErrorMessage(error)
        setIsError(true)
        setTimeout(() => {
            setErrorMessage("")
            setIsError(false)
        }, 2000)
    },[error])
    return(
        <>
   
            <AuthForm isSignIn disabled={isError} onSubmit={handleSubmit}  onGoogleAuth={signInWithGoogle}/>
            {error ? <div className="error-box">{errorMessage}</div> : null}
        </>
    )
}

export default Login