import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserData from '../../components/UserData/UserData.jsx';
import Repos from '../../components/Repos/Repos.jsx';

export default class User extends Component {
  render() {
    return (
      <div>
        <UserData username={this.props.username} followers={this.props.followers} following={this.props.following} profile={this.props.profile}/>
        <Repos repos={this.props.repos}/>
      </div>
    );
  }
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  repos: PropTypes.array
};
