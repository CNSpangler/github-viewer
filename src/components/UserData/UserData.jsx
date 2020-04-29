import React from 'react';
import PropTypes from 'prop-types';

const UserData = ({ username, followers, following, profile }) => (
  <>
    <section>
      <h2>{username}</h2>
      <h3>Github Profile: {profile}</h3>
      <h4>Followers: {followers}</h4>
      <h4>Following: {following}</h4>
    </section>
  </>
);

UserData.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired
};

export default UserData;
