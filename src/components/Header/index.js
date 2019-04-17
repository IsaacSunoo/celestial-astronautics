import React from 'react';
import DropdownMenu from '../DropdownMenu';

const Header = () => {
  return (
    <header className='header-container'>
      <h1>Celestial Astronautical</h1>
      <section className='route-container'>
        <DropdownMenu />
      </section>
    </header>
  )
}

export default Header;