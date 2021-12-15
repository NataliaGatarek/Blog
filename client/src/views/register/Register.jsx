import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton" type="submit">
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          Login
        </Link>
      </button>
      {error && <span>Something went wrong</span>}
    </div>
  );
}
export default Register;
