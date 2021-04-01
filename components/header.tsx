import React from 'react';

type HeaderProps = {
  activePage: string;
};

const Header = ({ activePage }: HeaderProps): JSX.Element => {
  console.log(activePage);
  return (
    <div className="mt-14 p-4">
      <h1>HEADER</h1>
    </div>
  );
};

export default Header;
