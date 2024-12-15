import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Layout.css"

const Layout = () => {

    const { user, signOut } = useAuth();
    

    const handleSingOut = () => {
        signOut()
    }
    return (
        <>
        <div style={{marginTop:"-20rem", marginBottom:"-6rem", marginLeft:"-1.5rem",}}>
        <img src="src/images/break_logo-removebg-preview.png" alt="logo" />
        </div>
        <div className="layout">
        <ul className="nav">
            {!user ? (
                <>
                    <li><Link className="link" to="/discover" data-text="DISCOVER">DISCOVER</Link></li>
                    <li><Link className="link" to="/login" data-text="LOGIN">LOGIN</Link></li>
                    <li><Link className="link" to="/sign-up" data-text="SIGN UP">SIGN UP</Link></li>
                    
                </>
            ) :  (
                <>
                <li><Link className="link" to="/discover" data-text="DISCOVER">DISCOVER</Link></li>
                <li><Link className="link" onClick={handleSingOut}  data-text="SIGN OUT">SIGN OUT</Link></li>
                
                </>

            )
        
        }

        </ul>
        </div>
            
        <div>
            <Outlet />
        </div>
        </>


    )

}

export default Layout