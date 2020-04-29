import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => (
  <a href={repo.html_url}>{repo.name}</a>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Repo;
