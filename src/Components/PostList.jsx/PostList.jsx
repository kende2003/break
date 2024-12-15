import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import "./PostList.css";

const PostList = ( { onSubmit, posts } ) => {
    
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [post, setPost] = useState(null)
    const modalRef = useRef(null);
    const textAreaRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate();

    const handleTextareaClick = () => {
        if (!user) {
            setShowErrorModal(true)
        } else {
            setIsModalOpen(true)
            setShowModal(true);
        }
    };

    useEffect(() => {
        if (textAreaRef.current && isModalOpen) {
            textAreaRef.current.focus()
            setIsModalOpen(false)
        }
    }, [isModalOpen])
    const closeModal = () => {
        setShowModal(false);
        setShowErrorModal(false)
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    const handleButtonClick = (e) => {
        if (e.currentTarget.id === "login-modal-btn") {
            navigate("/login")
        }
        if (e.currentTarget.id === "sign-up-modal-btn") {
            navigate("/sign-up")
        }
        
    }
    useEffect(() => {
        if (showModal || showErrorModal) {

            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showModal, showErrorModal]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (post && post.trim() !== "") {
            onSubmit({ post });
            setPost("");
        }
    
        closeModal();
    };
    const handleChange = (setter) => (e) =>{
 
        setter(e.currentTarget.value)
    }

    useEffect(() => {
        setDisable(!post || post.trim() === "");
    }, [post]);
    
    return (
        <>
            <div className="container create-div">
            <textarea
                onClick={handleTextareaClick}
                className="create-textarea"
                placeholder="What's in your mind?"
                
            ></textarea>

            {showModal &&
                <>
                    <div className="modal-overlay"></div>
                    <div className="modal" style={{ display: "block" }}>
                        <div className="modal-dialog" ref={modalRef}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Post</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeModal}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <textarea
                                        onChange={handleChange(setPost)}
                                        ref={textAreaRef}
                                        className="modal-textarea"
                                        placeholder="What's in your mind?"
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={handleSubmit} type="submit" className="btn save-post-btn" disabled={disable}>
                                        Save Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {showErrorModal &&
                <>
                    <div className="modal-overlay"></div>
                    <div className="modal" style={{ display: "block" }}>
                        <div className="modal-dialog" ref={modalRef}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title">Please login or sign up!</h3>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeModal}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h5>
                                    To create a post you must be logged in!
                                    </h5>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={handleButtonClick} className="btn btn-secondary" id="login-modal-btn">
                                        Login
                                    </button>

                                    <button onClick={handleButtonClick} className="btn btn-primary" id="sign-up-modal-btn">
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
        {user && 
        <div className="posts-div">
        {posts.map((post) => (<div key={post.id} className="container create-div-post">{post.post}</div>))

        }

        </div>
        
        }
        
        </>
        
    );
};

export default PostList;
