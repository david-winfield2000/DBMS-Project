import React from "react";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <label htmlFor="username">Username: </label>
                <input type="text" defaultValue="Username"/><br /><br />
                <label htmlFor="password">Password: </label>
                <input type="text" defaultValue="Password"/><br /><br />
            </form>
            <button>Login</button>
            <button>Signup</button>
        </div>
    );
};

export default Login;