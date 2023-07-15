
import PostsOfUserComponent from "./PostsOfUserComponent/PostsOfUserComponent";
import {useEffect, useState} from "react";

const PostsOfUserContainer = ({userId})=>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, [])

    return(
        <>
            {posts.map((post) =><PostsOfUserComponent key={post.id} post={post}/>)}
        </>
    )
}
export default PostsOfUserContainer;