import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ username, onUsernameChange, onButtonClick }) => (
  <>
    <input type="input" name="username" value={username} onChange={onUsernameChange}/>
    <button onClick={onButtonClick}>Search</button>
  </>
);

Form.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Form;
