import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSubmit(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Unesite Github korisničko ime"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Traži</button>
    </form>
  );
};

export default UserForm;
