import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
            <button>Register</button>
          </div>
        </div>

        <div className="register">
          <div>
            <h1>Welcome to NovaMall!</h1>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="register-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
