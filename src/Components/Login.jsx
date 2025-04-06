import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUser({userName, password})
    setUserName('')
    setPassword('')
  };
  return (
    <div style={{backgroundColor:'#808080', padding:"10px", borderRadius:"16px", margin:"10px"}}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br/>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleFormSubmit} style={{marginTop:"5px"}}>Submit</button>
    </div>
  );
}

export default Login;
