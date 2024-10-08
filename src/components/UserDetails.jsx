import React from "react";

const UserDetails = ({ user, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="avatar" width="150" />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Bio: {user.bio}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UserDetails;
