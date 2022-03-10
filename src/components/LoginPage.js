import React from "react";

function LoginPage(props) {

    const {auth} = props;

    function login() {
        auth(true);
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