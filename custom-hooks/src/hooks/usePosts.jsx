import { useEffect, useState } from "react";

export function usePosts(){
    const [posts,setPosts] = useState({});

    async function getPosts(){
        const something = await fetch("https://jsonplaceholder.typicode.com/todos/3");
        const anything = await something.json();
        setPosts(anything);
    }
    
    useEffect(()=>{
        getPosts();
    },[])

    return posts.title
}