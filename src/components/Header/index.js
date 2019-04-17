import React from 'react';
import DropdownMenu from '../DropdownMenu';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Header = () => {

  return (
    <StickyHeader
      header={
        <header className="header-container">
          <h1>Celestial Astronautical</h1>
          <section className="route-container">
            <DropdownMenu />
          </section>
        </header>
      }
    />
  );
}

export default Header;