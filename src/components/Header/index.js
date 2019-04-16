import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const Header = () => {
  return (
    <header className='header-container'>
      <h1>Celestial Astronautical</h1>
      <section className='route-container'>
        <DropdownMenu />
        {/* <Link to='/' className='link-styles'>Home</Link>
        <Link to='/apollo' className='link-styles'>Apollo</Link>
        <Link to='/orion' className='link-styles'>Orion</Link>
        <Link to='/milkyway' className='link-styles'>Milky Way</Link>
        <Link to='/nebula' className='link-styles'>Nebula</Link>
        <Link to='/galaxy' className='link-styles'>Galaxy</Link>
        <Link to='/stars' className='link-styles'>Stars</Link> */}
      </section>
    </header>
  )
}

export default Header;