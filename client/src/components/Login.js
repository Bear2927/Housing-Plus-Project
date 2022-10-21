import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }
  
  if (user) return history.push("/")
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h5 className="account">Username</h5>
          <input
            className="form_input"
            placeholder="Enter Username..."
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5 className="account">Password</h5>
          <input
            className="form_input"
            placeholder="Enter Password..."
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
          <h5 className="errors">
            {errors}
          </h5>
      </form>
    </div>
  );
}

export default Login;