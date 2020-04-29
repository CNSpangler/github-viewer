import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo.jsx';

const Repos = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
