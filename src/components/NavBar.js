import React from "react";
import {NavLink, Redirect, useHistory} from "react-router-dom";

export default function NavBar({isAuth, auth}) {

    const history = useHistory();

    function handleClick() {
        auth(false);
        history.push("/")
    }

    return (
        <ul>
            <li><NavLink
                exact to="/"
                activeClassName="active-link"
                className="navlink"
            >Home</NavLink></li>
            <li><NavLink
                exact to="/blogposts"
                activeClassName="active-link"
                className="navlink"
            >BlogPosts</NavLink></li>
            <li>{isAuth ? <button type="button" onClick={handleClick}>UITLOGGEN</button> :
                <NavLink
                    exact to="/login"
                    activeClassName="active-link"
                    className="navlink"
                >Login</NavLink>}</li>
        </ul>
    );
}