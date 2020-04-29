import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ username, onUsernameChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="input" name="username" value={username} onChange={onUsernameChange}/>
    <button>Search</button>
  </form>
);

Form.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
