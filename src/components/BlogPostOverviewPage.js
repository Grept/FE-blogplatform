import React from "react";
import {Link} from "react-router-dom";

// DATA IMPORT
import posts from "../data/posts.json";

export default function BlogPostOverviewPage() {

    return(
        <>
            <h1>All Blogposts</h1>
            <ol>
                {posts.map((e) => {
                    return <li key={e.date}><Link to={`/blogposts/${e.id}`}>{e.title}</Link></li>
                })}
            </ol>
        </>
    );
}