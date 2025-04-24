import AuthForm from "../Components/AuthForm/AuthForm";
import { useAuth } from "../Context/AuthProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/AuthForm/AuthForm.scss"
const Login = () =>  {
    const { signInWithGoogle, signInWithCreds, error, reset} = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    useEffect(() =>{
        reset()
    }, [reset])

    const handleSubmit = async ({ email, password}) => {
  
        signInWithCreds(email, password)

    }
    useEffect(() => {
        setErrorMessage(error)
        setIsError(true)
        setTimeout(() => {
            setErrorMessage("")
            setIsError(false)
        }, 3000)
    },[error])
    return(
        <>  
            <AuthForm isSignIn disabled={isError} onSubmit={handleSubmit}  onGoogleAuth={signInWithGoogle} error={errorMessage}/>
        </>
    )
}

export default Login