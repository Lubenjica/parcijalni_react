import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import RepositoriesList from "./components/RepositoriesList";
import UserList from "./components/UserList";

const App = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);

  const fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      setUser(userData);

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      setRepositories(reposData);

      setRecentUsers((prevUsers) => {
        if (!prevUsers.find((u) => u.login === userData.login)) {
          return [userData, ...prevUsers];
        }
        return prevUsers;
      });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleUserSelect = (selectedUser) => {
    fetchUserData(selectedUser.login);
  };

  const handleReset = () => {
    setUser(null);
    setRepositories([]);
  };

  return (
    <div className="container">
      <h1>GitHub tražilica korisnika</h1>

      <div className="content">
        {!user ? (
          <UserForm onSubmit={fetchUserData} />
        ) : (
          <>
            <UserDetails user={user} onReset={handleReset} />
            <RepositoriesList repositories={repositories} />
          </>
        )}
        <UserList users={recentUsers} onUserSelect={handleUserSelect} />
      </div>
    </div>
  );
};

export default App;
