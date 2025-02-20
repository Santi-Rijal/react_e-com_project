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
            <Link className="forgot-link">Forgot password?</Link>
          </div>

          <div className="input-container">
            <button>Login</button>
          </div>
        </div>

        <div className="register">
          <div>
            <h1>Welcome to NovaMall!</h1>
            <p>
              Dont have an account?{" "}
              <Link to={"/register"} className="register-link">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
