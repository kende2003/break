
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import AuthForm from "../Components/AuthForm";

const SignUpPage = () => {
    const { signUpWithCreds, signInWithGoogle, error, reset } = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    const [isError, setIsError] = useState(false)
    useEffect(() =>{
        reset()
    }, [reset])
    useEffect(() => {
        setErrorMessage(error)
        setIsError(true)
        setTimeout(() => {
            setErrorMessage("")
            setIsError(false)
        }, 3000)
    },[error])
    const handleSubmit = async ({email, password}) =>  {

        await signUpWithCreds(email, password)
    }

    return (

        <>
            <AuthForm isSignIn={false} onSubmit={handleSubmit} onGoogleAuth={signInWithGoogle} error={errorMessage} disabled={isError}/>
        </>
    )
}

export default SignUpPage
