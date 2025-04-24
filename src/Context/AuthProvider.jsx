import { createContext, useState, useCallback, useContext } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import auth from "../firebase/auth";
import Loading from "../Components/Loading";
import { signOut as fbSignout, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, AuthErrorCodes } from "firebase/auth";

const AuthContext = createContext(null)

function AuthProvider({ children }) {

    const [user, loading] = useIdToken(auth)
    const [error, setError] = useState(null)

    const signInWithCreds = useCallback((email, password) =>  {
        setError(null)
        return signInWithEmailAndPassword(auth, email, password).catch((err) => {
            if(err.code === AuthErrorCodes.INVALID_PASSWORD) {
                setError("Wrong credentials")
            } else if (err.code === AuthErrorCodes.USER_DELETED) {
                setError("User not found")
            } else {
                setError("Authentication error")
            }
        }) 
    }, [])
    

    const signUpWithCreds = useCallback((email, password) => {
        setError(null)
        return createUserWithEmailAndPassword(auth, email, password).catch(
            (err) => {

                if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
                    setError("Email already exists")
                } else if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
                    setError("Invalid password")
                    
                } else if (err.code === AuthErrorCodes.INVALID_EMAIL) {
                    setError("Invalid email")
                } 
                else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
                    setError("Password should be at least 6 characters")
                }
                else  {
                    setError("Authentication error")
                }
            }
        )
    }, [])

    const signInWithGoogle = useCallback(() => {
        setError(null)
        const google = new GoogleAuthProvider()

        return signInWithPopup(auth, google).catch((err) => {
            console.log(err);
            setError("Error while logining in Google")
            
        })
    }, [])

    const signOut = useCallback(() => {
        setError(null)
        return fbSignout(auth)
    }, [])

    const reset = useCallback(() => {
        setError(null);
    }, []);

    return (
        <AuthContext.Provider
        value={{
            error,
            user,
            signOut,
            signInWithCreds,
            signUpWithCreds,
            signInWithGoogle,
            reset,
        }}>
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    )

    
}

export const useAuth = () => useContext(AuthContext)

export const useToken = () => useAuth()?.user?.accessToken

export default AuthProvider