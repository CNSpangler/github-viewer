import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ html_url, name }) => (
  <a href={html_url}>{name}</a>
);

Repo.propTypes = {
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Repo;
