import React from "react";
import {Link} from "react-router-dom";

function BlogPostOverviewPage() {
    return(
        <>
            <h1>All Blogposts</h1>
            <ul>
                <li><Link to="/blogposts/1">Blogpost #1</Link></li>
                <li><Link to="/blogposts/2">Blogpost #2</Link></li>
                <li><Link to="/blogposts/3">Blogpost #3</Link></li>
                <li><Link to="/blogposts/4">Blogpost #4</Link></li>
                <li><Link to="/blogposts/5">Blogpost #5</Link></li>
                <li><Link to="/blogposts/6">Blogpost #6</Link></li>
                <li><Link to="/blogposts/7">Blogpost #7</Link></li>
                <li><Link to="/blogposts/8">Blogpost #8</Link></li>
            </ul>
        </>
    )
}

export default BlogPostOverviewPage;