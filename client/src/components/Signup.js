import React, { useState, useEffect } from "react";
import {Link, useHistory} from "react-router-dom";
import Home from "./Home";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Signup({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username,
      password,
      admin
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

  function handleChangeAdmin () {
    setAdmin(!admin)
  }

  if (user) return history.push("/")

  console.log(history)
  
  return (
    <div>
      <h1 className="account1">Signup</h1>
    <form onSubmit={handleSubmit} className="form1">
        <h5 className="account">Username</h5>
        <TextField
          className="form_input"
          placeholder="Enter Username..."
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h5 className="account">Password</h5>
        <TextField
          className="form_input" 
          placeholder="Enter Password..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
        <label className="account">
          are you an Owner?
          <input 
          type="checkbox"
          value={admin}
          onChange={handleChangeAdmin}
          />
        </label>
        </div>
        <div><Button variant="contained" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button></div>
        <h5 className="errors">
        {errors}
        </h5>
        <ul className="account"> already have an account? <Button variant="contained"><Link className="account2" to="/login">Login</Link></Button></ul>
    </form>
    </div>
    
  );
}

export default Signup;