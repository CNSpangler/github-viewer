import React, { Component } from 'react';
import Form from '../../components/Form/Form.jsx';
// import User from '../User/User.jsx';
import { fetchUser, fetchRepos } from '../../services/github-endpoints.js';

export default class UserPicker extends Component {
  state = {
    loading: true,
    user: 'user',
    repos: []
  }

  componentDidMount() {
    fetchUser()
      .then(user => this.setState({ 
        username: user.username,
        followers: user.followers,
        following: user.following,
        profile: user.url,
        loading: false,
      }));

    fetchRepos(this.state.username)
      .then(repos => this.setstate({
        repos: [...repos]
      }));      
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  // handleButtonClick = ({ target }) => {
  //   this.setState({  });
  // }

  render() {
    return (
      <div>
        <Form />
        {/* <User /> */}
      </div>
    );
  }
}
