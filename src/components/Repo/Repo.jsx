import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url }) => (
  <li>
    <a href={url}>{name}</a>
  </li>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Repo;
