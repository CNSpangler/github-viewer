import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => (
  <ul>
    repos.map(repo => {
      <Repo repo={repo} />
    })
  </ul>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
