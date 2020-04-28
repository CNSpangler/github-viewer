import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos.jsx';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(
      <Repos 
        name="portfolio"
        url="https://github.com/CNSpangler/portfolio"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
