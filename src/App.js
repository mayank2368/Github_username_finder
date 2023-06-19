import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Github = () => {
  const [user, setUser] = useState([]);
  const [result, setResult] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios(`https://api.github.com/users/${user}`);
      setResult(res.data);
    } catch (err) {
      console.log(err);
      setResult("");
    }
  };

  const handleClick = () => {
    setResult("");
    fetchData();
  };
  return (
    <>
      <div className="App">Github Username Finder</div>
      <label>
        Username:
        <input
          type="name"
          value={user}
          placeholder="Enter username here"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleClick}>Search</button>

      {result ? (
        <div className="github-user">
          <img src={result.avatar_url} alt="User Avatar" />
        </div>
      ) : (
        <p>Enter username to find one...</p>
      )}
    </>
  );
};

export default Github;
