import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Github = () => {
  const [user, setUser] = useState("");
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios(`https://api.github.com/users/${user}`);
      setResult(res.data);
    } catch (err) {
      console.log(err);
      setResult(null);
    }
  };

  const handleClick = () => {
    setResult(null);
    fetchData();
  };

  return (
    <div className="github-container">
      <h1 className="github-heading">Github Username Finder</h1>

      <div className="github-input">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={user}
          placeholder="Enter username here"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>

      <div className="github-result">
        {result ? (
          <>
            <div className="github-avatar">
              <img src={result.avatar_url} alt="User Avatar" />
            </div>
            <div className="github-info">
              <h2 className="github-name">User Name: {result.name}</h2>
              <p className="github-repos">
                Public Repositories: {result.public_repos}
              </p>
            </div>
          </>
        ) : (
          <p className="github-placeholder">
            Enter a username to find a user...
          </p>
        )}
      </div>
    </div>
  );
};

export default Github;
