import React from "react";

const UserList = ({ users, onUserSelect }) => {
  return (
    <div className="user-list">
      <h3>Nedavno pretraživani korisnici</h3>
      <ul className="scrollable-list">
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserSelect(user)}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="30"
              height="30"
            />
            <span>{user.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
