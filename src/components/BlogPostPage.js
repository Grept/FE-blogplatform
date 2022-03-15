import React from "react";
import {useParams} from "react-router-dom";

// DATA IMPORT
import posts from "../data/posts.json";

export default function BlogPostPage() {
    const {blogId} = useParams();
    const post = posts.find(e => e.id === blogId);
    return (
        <>
            <h1>Blogpost #{blogId}</h1>
            <h3>{post.title}</h3>
            <h5>{post.date}</h5>
            <p>{post.content}</p>
        </>
    );
}