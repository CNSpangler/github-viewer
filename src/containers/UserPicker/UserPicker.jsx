import React, { Component } from 'react';
import Form from '../../components/Form/Form.jsx';
import User from '../User/User.jsx';
import { fetchUser, fetchRepos } from '../../services/github-endpoints.js';

export default class UserPicker extends Component {
  state = {
    // loading: true,
    username: '',
    followers: '',
    following: '',
    profile: '',
    repos: []
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetchUser(this.state.username)
      .then(user => this.setState({ 
        username: user.username,
        followers: user.followers,
        following: user.following,
        profile: user.url,
        // loading: false,
      }));

    fetchRepos(this.state.username)
      .then(repos => this.setstate({
        repos: [...repos]
      }));
  }

  render() {
    return (
      <div>
        <Form onUsernameChange={this.handleUsernameChange} onSubmit={this.handleSubmit}/>
        <User username={this.state.username} followers={this.state.followers} following={this.state.following} profile={this.state.profile} repos={this.state.repos}/>
      </div>
    );
  }
}
