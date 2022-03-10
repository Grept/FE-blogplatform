import React from "react";
import {Link} from "react-router-dom";
import posts from "../data/posts.json"

function BlogPostOverviewPage() {

    return(
        <>
            <h1>All Blogposts</h1>
            <ul>
                {posts.map((e) => {
                    return <li key={e.date}><Link to={`/blogposts/${e.id}`}>{e.title}</Link></li>
                })}
            </ul>
        </>
    )
}

export default BlogPostOverviewPage;