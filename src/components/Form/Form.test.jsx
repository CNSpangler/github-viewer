import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(<Form 
      username="cnspangler"
      onUsernameChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
