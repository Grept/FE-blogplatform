import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

// DATA IMPORT
import users from "../data/users.json"

function LoginPage({auth}) {

    const history = useHistory();
    const {register, handleSubmit} = useForm()

    // LOG THE USER IN
    function login() {
        auth(true);
        history.push("/blogposts")
    }

    // CHECK FOR CORRECT USERNAME AND PASSWORD
    function onSubmit(data) {
        const foundUser = users.find(e => e.username === data.username)

        if (foundUser === undefined) {
            alert("ERROR: User not found")
        } else if (foundUser.password === data.password) {
            login();
        } else {
            alert("ERROR: Wrong password")
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        {...register("username")}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                    />

                </div>
                <button type="submit">INLOGGEN</button>
            </form>
            <p>Please login!</p>
        </>
    )
}

export default LoginPage;