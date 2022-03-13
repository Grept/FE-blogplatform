import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({isAuth, children, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth === true ? children : <Redirect to="/" />}
        </Route>
    );
}