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
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/blogposts">BlogPosts</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/login">
                    <LoginPage auth={toggleIsAuthenticated}/>
                </Route>

                <Route exact path="/blogposts">
                    <BlogPostOverviewPage />
                </Route>

                <Route exact path="/blogposts/:blogId">
                    {isAuthenticated === true ? <BlogPostPage /> : <Redirect to="/login" />}
                </Route>
            </Switch>
        </>
    );
}

export default App;
