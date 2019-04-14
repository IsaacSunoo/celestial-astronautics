import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <header>
        <h1>Celestial Astronautical</h1>
        <section className='route-container'>
          <Link to='/' className='link-styles'>Home</Link>
          <Link to='/apollo' className='link-styles'>Apollo</Link>
          <Link to='/orion' className='link-styles'>Orion</Link>
          <Link to='/milkyway' className='link-styles'>Milky Way</Link>
          <Link to='/nebula' className='link-styles'>Nebula</Link>
        </section>
      </header>
    </div>
  )
}

export default Header;