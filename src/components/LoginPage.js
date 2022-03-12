import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage({auth}) {

    const history = useHistory();

    function login() {
        auth(true);
        history.push("/blogposts")
    }

    return(
        <>
            <h1>Login Page</h1>
            <button type="button" onClick={login}>INLOGGEN</button>
            <p>Please login!</p>
        </>
    )
}

export default LoginPage;