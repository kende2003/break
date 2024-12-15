
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import AuthForm from "../Components/AuthForm";

const SignUpPage = () => {
    const { singUpWithCreds, signInWithGoogle, error, reset } = useAuth()
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

        await singUpWithCreds(email, password)
    }

    return (

        <>
            <AuthForm isSignIn={false} onSubmit={handleSubmit}  onGoogleAuth={signInWithGoogle} />
            {error ? <div className="error-box">{errorMessage}</div> : null}
        </>
    )
}

export default SignUpPage
