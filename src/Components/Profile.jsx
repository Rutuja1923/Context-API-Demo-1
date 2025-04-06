import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(() => null)
  }

  if (!user) {
    return (
      <div style={{backgroundColor:'#808080', padding:"10px", borderRadius:"16px", margin:"10px"}}>
        <h3>Please Login!</h3>
      </div>
    );
  } else {
    return (
      <div style={{backgroundColor:'#808080', padding:"10px", borderRadius:"16px", margin:"10px"}}>
        <h3>Welcome, {user.userName}</h3>
        <p>And Your Secret Password is : {user.password}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Profile;
