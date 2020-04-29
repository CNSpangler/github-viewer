import React from 'react';
import { shallow } from 'enzyme';
import UserData from './UserData.jsx';

describe('UserData component', () => {
  it('renders UserData', () => {
    const wrapper = shallow(
      <UserData 
        username="cnspangler"
        profile="https://api.github.com/users/cnspangler"
        followers="10"
        following="25"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
