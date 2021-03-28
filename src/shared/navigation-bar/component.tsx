import React from 'react';

export type NavigationBarProps = {
  activePage?: string;
};

const NavigationBar = ({ activePage }: NavigationBarProps): JSX.Element => (
  <div>
    <span>Navigation bar.</span>
  </div>
);

export default NavigationBar;
