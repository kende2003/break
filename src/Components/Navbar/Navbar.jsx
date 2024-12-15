import { useAuth } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../../Layout/Layout.css';

const Navbar = () => {

    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    const handleSignOut = () => {
        signOut()

    }
    return (
        <>
            <nav className="navbar custom-navbar">
                <div className="navbar-container" >
                    <div style={{cursor:"pointer"}} onClick={handleClick} className="logo-container">
                        <img
                            src="src/images/break_logo-removebg-preview.png"
                            alt="logo"
                            style={{ height: "150px", width: "150px", marginTop: "-100px" }}
                        />
                    </div>
                    <ul className="link-container">
                      
                        {!user ? (<>
                            <li className="nav-item" >
                                <Link className="nav-link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-up" >
                                    SIGN UP
                                </Link>
                            </li>
                        </>


                        ) : (
                            <li className="nav-item" >
                                <Link onClick={handleSignOut} className="nav-link" to="/">
                                    SIGN OUT
                                </Link>
                            </li>
                        )

                        }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
