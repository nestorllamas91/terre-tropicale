import React from 'react';

export type HeaderProps = {
  activePage: string;
};

const Header = ({ activePage }: HeaderProps): JSX.Element => (
  <div>
    <span>Header.</span>
  </div>
);

export default Header;
