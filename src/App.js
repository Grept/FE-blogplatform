import React, {useState} from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import BlogPostOverviewPage from "./components/BlogPostOverviewPage";
import BlogPostPage from "./components/BlogPostPage";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <main>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/blogposts" activeClassName="active-link">BlogPosts</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
                </ul>
            </nav>
            <section>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/login">
                        <LoginPage auth={toggleIsAuthenticated}/>
                    </Route>

                    <Route exact path="/blogposts">
                        <BlogPostOverviewPage className="blog-post-overview" />
                    </Route>

                    <Route exact path="/blogposts/:blogId">
                        {isAuthenticated === true ? <BlogPostPage /> : <Redirect to="/login" />}
                    </Route>
                </Switch>

            </section>
        </main>
    );
}

export default App;
