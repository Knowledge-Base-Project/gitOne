import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Logout Pages</h1>
        <p>The pages has logout from the system</p>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>  
    </div>
  );
};

export default LogOut;
