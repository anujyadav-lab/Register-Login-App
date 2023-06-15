import React from "react";

export const Welcome = ({ onLogout, userData }) => {
  return (
    <div className="welcome-container">
      <h2>Welcome, {userData.fullName}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
