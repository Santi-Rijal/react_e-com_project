"use client";

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-register-page-container">
      <div className="container">
        <div className="login">
          <div className="input-container">
            <p>Email</p>
            <input type="email" required />
          </div>

          <div className="input-container">
            <p>Password</p>
            <input type="password" required />
          </div>

          <div className="input-container">
            <button>Login</button>
          </div>
        </div>

        <div className="register">
          <div>
            <h1>Welcome to NovaMall!</h1>
            <p>Register with email and password</p>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
