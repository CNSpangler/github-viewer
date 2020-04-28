import React, { Component } from 'react';
import UserData from '../../components/UserData/UserData.jsx';
import Repos from '../Repos/Repos.jsx';

export default class User extends Component {
  render() {
    return (
      <div>
        <UserData />
        <Repos />
      </div>
    );
  }
}
