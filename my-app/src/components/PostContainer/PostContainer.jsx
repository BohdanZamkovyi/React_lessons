import {useEffect, useState} from "react";
import PostComponent from "./PostComponent/PostComponent";

const PostContainer = ()=>{
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, [])
    console.log(posts);
    return(
        <>
            {posts.map((post)=>{
                return <PostComponent key={post.id} post={post}/>
            })}
        </>
    )
}
export default PostContainer;