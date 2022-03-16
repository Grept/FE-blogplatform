import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

// DATA IMPORT
import users from "../data/users.json";

// COMPONENT IMPORT
import FormField from "./FormField";

export default function LoginPage({auth}) {

    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();

    // LOG THE USER IN
    function login() {
        auth(true);
        history.push("/blogposts");
    }

    // CHECK FOR CORRECT USERNAME AND PASSWORD
    function onSubmit(data) {
        const foundUser = users.find(e => e.username === data.username)

        if (foundUser === undefined) {
            alert("ERROR: User not found");
        } else if (foundUser.password === data.password) {
            login();
        } else {
            alert("ERROR: Wrong password");
            history.push("/login");
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    name="username"
                    type="text"
                    register={register}
                    validation={{
                        required: "Please enter a username."
                    }}
                    errors={errors}
                >
                    Username:
                </FormField>

                <FormField
                    name="password"
                    type="password"
                    register={register}
                    validation={{
                        required: "Please enter a password."
                    }}
                    errors={errors}
                >
                    Password:
                </FormField>

                <button type="submit">INLOGGEN</button>
            </form>
            <p>Please login!</p>
        </>
    );
}