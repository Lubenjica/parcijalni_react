import React from "react";

const RepositoriesList = ({ repositories }) => {
  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesList;
