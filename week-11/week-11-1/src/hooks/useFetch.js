import { useState, useEffect } from "react";

//custom hook
export function usePostTitle(){
    const [post, setPost] = useState({});

    async function getPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setPost(json);
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;
}

// now custom hook, useFetch
export function useFetch(url){
    const [finalData, setFinalData] = useState({});

    async function getData(){
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
    }

    useEffect(()=> {
        getData();
    },[])

    return {
        finalData
    }
}