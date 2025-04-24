import Navbar from "../Components/Navbar"
import PostList from "../Components/PostList.jsx"
import { createPost, getAllPost } from "../client/posts.js"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../Components/Loading/Loading.jsx"

const DiscoverPage = ()  => {
    const _time = (time) => new Date(time).getTime()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleCreatePost = async (post) => {
        setLoading(true)
        await createPost(post)
        setPosts((prevPosts) => {
            const updatedPosts = [...prevPosts, post];
            return updatedPosts.sort((a, b) => _time(b.created) - _time(a.created));
        });
        setLoading(false)
        navigate("/discover")
    }

    useEffect(() => {
        let lock = false
        setLoading(true)
        const fetchAllPost = async () => {
            const list = await getAllPost();
            if(!lock) {
                setPosts(list)          
                setLoading(false)
            }

        }
        fetchAllPost()
        return () => {
            lock = true
        }
    }, [])
    console.log(posts);
    if(loading) {
        return <Loading />
    }

    return (
        <>
            <Navbar />
            <PostList onSubmit={handleCreatePost} disabled={loading} posts={posts}/>
        </>
    )
}

export default DiscoverPage
