import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.jsx';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(
      <Repo 
        name="portfolio"
        html_url="https://github.com/CNSpangler/portfolio"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
