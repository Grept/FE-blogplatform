import React from "react";
import {NavLink, useHistory} from "react-router-dom";

export default function NavBar({isAuth, auth}) {

    const history = useHistory();

    function handleClick() {
        auth(false);
        history.push("/");
    }

    return (
        <ul>
            <li><NavLink
                exact to="/"
                activeClassName="active-link"
                className="navlink"
            >Home</NavLink></li>

            {/*Only show this NavLink if user is logged in*/}
            {isAuth &&
            <li><NavLink
                exact to="/blogposts"
                activeClassName="active-link"
                className="navlink"
            >BlogPosts</NavLink></li>
            }

            {/*If user is logged in, show button. Otherwise show NavLink to login-page*/}
            <li>{isAuth ? <button type="button" onClick={handleClick}>UITLOGGEN</button> :
                <NavLink
                    exact to="/login"
                    activeClassName="active-link"
                    className="navlink"
                >Login</NavLink>}</li>
        </ul>
    );
}