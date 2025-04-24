
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import AuthForm from "../Components/AuthForm";

const SignUpPage = () => {
    const { signUpWithCreds, signInWithGoogle, error, reset } = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    useEffect(() =>{
        reset()
    }, [reset])
    useEffect(() => {
        setErrorMessage(error)
        setTimeout(() => {
            setErrorMessage("")
        }, 2000)
    },[error])
    const handleSubmit = async ({email, password}) =>  {

        await signUpWithCreds(email, password)
    }

    return (

        <>
            <AuthForm isSignIn={false} onSubmit={handleSubmit} onGoogleAuth={signInWithGoogle} error={errorMessage}/>
        </>
    )
}

export default SignUpPage
