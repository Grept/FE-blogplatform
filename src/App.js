import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

// COMPONENT IMPORTS
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import BlogPostOverviewPage from "./components/BlogPostOverviewPage";
import BlogPostPage from "./components/BlogPostPage";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";


export default function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <main>
            <nav>
                <NavBar isAuth={isAuthenticated} auth={toggleIsAuthenticated}/>
            </nav>
            <section>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>

                    <Route exact path="/login">
                        <LoginPage auth={toggleIsAuthenticated}/>
                    </Route>

                    <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                        <BlogPostOverviewPage className="blog-post-overview"/>
                    </PrivateRoute>

                    <PrivateRoute exact path="/blogposts/:blogId" isAuth={isAuthenticated}>
                        <BlogPostPage/>
                    </PrivateRoute>
                </Switch>

            </section>
        </main>
    );
}