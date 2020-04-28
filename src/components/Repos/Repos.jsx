import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo.jsx';

const Repos = ({ repos }) => (
  <ul>
    {repos.map(repo => {
      <Repo repo={repo} />;
    })}
  </ul>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
