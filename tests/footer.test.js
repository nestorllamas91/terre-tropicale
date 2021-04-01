import { shallow, mount, render } from 'enzyme';
import React from 'react';

import Footer from '../components/footer';

describe('Test suite for the Footer component.', () => {
  it('It should render without throwing an error.', () => {
    expect(
      shallow(<Footer />).contains(
        <div className="flex flex-row justify-center items-center h-14 bg-coolGray-300">
          <span>&copy; 2021 Terre Tropicale</span>
        </div>
      )
    ).toBe(true);
  });

  it('It should render to static HTML.', () => {
    expect(render(<Footer />).text()).toEqual('© 2021 Terre Tropicale');
  });
});
