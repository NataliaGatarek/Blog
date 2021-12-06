import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="username" className="registerInput" />

        <label>Email</label>
        <input type="text" placeholder="email" className="registerInput" />

        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          className="registerInput"
        />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          Login
        </Link>
      </button>
    </div>
  );
}
export default Register;