import React from "react";

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
      </div>
    </div>
  );
};

export default Register;
