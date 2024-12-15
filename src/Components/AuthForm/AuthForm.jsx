import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AuthForm.scss"

const AuthForm = ({ onSubmit, onGoogleAuth, isSignIn, disabled=false }) => {
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const changeHandler = (setter) => (e) => {  
        setter(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSignIn && password !== confirm) {
           
            setError("Passwords does not match!");
            setTimeout(() => {
                setError("")
            }, 2000)
            return;
        }
  
        onSubmit({
            email,
            password
        });
    };
    
    const handleClick = () => {
        console.log("clicked");
        navigate("/")
        
        
    }
    return (
        <>
        <div onClick={handleClick} style={{marginTop:"-33rem", marginLeft:"-1.5rem", cursor:"pointer"}}>
        <img src="src/images/break_logo-removebg-preview.png" alt="logo" />
       
        </div>

        <form onSubmit={handleSubmit} className="login from-group">
            {isSignIn ? (
                        <h1 className="auth-text" style={{textAlign:"right", paddingBottom:"0.4rem"}}>
                        LOGIN
                        </h1>
            ) :  (
                <h1 className="auth-text" style={{textAlign:"right", paddingBottom:"0.4rem"}}>
                SIGN UP
                </h1>
        
            )

            }

            <input value={email} onChange={changeHandler(setEmail)} required type="text" name="email" id="email" placeholder="Email"/>
            <input htmlFor="password" value={password} onChange={changeHandler(setPassword)} required type="password" name="password" id="password" placeholder="Password" />
            {error && isSignIn && <div className="error-box">{error}</div>}
        {!isSignIn && (
            <input value={confirm} onChange={changeHandler(setConfirm)} required name="confirm-password" id="confirm-password" type="password" placeholder="Confirm password" />
            
        )
       }
        {error &&  <div className="error-box-sign-up" >{error}</div>}
        <button disabled={disabled} type="submit">{isSignIn ? "Login" : "Sign up"}</button>
        <span>
        <button onClick={onGoogleAuth} type="button" className="login-with-google-btn"></button>
        </span>
        
        {!isSignIn ?  (
            <Link className="sign-up-link" style={{color:"grey"}} id="sign-up-btn" to="/login">LOGIN</Link>
        ) :  (
            <Link className="sign-up-link" style={{color:"grey", }} id="sign-up-btn" to="/sign-up">SIGN UP</Link>

        )
        
        }

        
        </form>

        </>
        
    )
}

export default AuthForm