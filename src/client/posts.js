import auth from "../firebase/auth";

const BASE_URL = `${import.meta.env.VITE_FB_DATABASE_URL}/posts`

const getToken = () => auth?.currentUser?.accessToken ?? ""

const getUrlForList = () => `${BASE_URL}/list.json?auth=${getToken()}`

const getUrlForOne = (id) => `${BASE_URL}/list/${id}.json?auth=${getToken()}`

const _time = (time) => new Date(time).getTime()

export const getAllPost = async () => {
    const response = await fetch(getUrlForList())
    const posts = await response.json()

    return Object.keys(posts ?? {})
    .map((key) => ({
        id: key,
        ...posts[key]
    
    }))
    .toSorted((a, b) => _time(b.created) - _time(a.created))
}

export const createPost = async (post) => {
    const response = await fetch(getUrlForList(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...post, created: Date.now()})
    })

    if(!response.ok) {
        throw new Error("Create operation failed")
    }

    return await response.json()
}