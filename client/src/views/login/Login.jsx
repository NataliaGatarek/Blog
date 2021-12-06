import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="email" className="loginInput" />
        <label>Password</label>
        <input type="password" placeholder="password" className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Register
        </Link>
      </button>
    </div>
  );
}
export default Login;
