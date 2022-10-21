import React, { useState } from "react";
import {Link} from "react-router-dom";
import Home from "./Home";


function Signup({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username,
      password
    }
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });

  }
  
  if (user) return <Home/>
  
  return (
    <form onSubmit={handleSubmit}>
      
        <h5 className="account">Username</h5>
        <input
          className="form_input"
          placeholder="Enter Username..."
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h5 className="account">Password</h5>
        <input
          className="form_input" 
          placeholder="Enter Password..."
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        <h5 className="errors">
        {errors}
        </h5>
        <ul className="account">already have an account? <Link className="account2" to="/login">Login</Link></ul>
    </form>
    
  );
}

export default Signup;