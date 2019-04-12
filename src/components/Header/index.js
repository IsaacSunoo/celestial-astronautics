import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <header>
        <h1>Celestial Astronautical</h1>
        <section className='route-container'>
          <Link to='/apollo20' className='link-styles'>Apollo 20</Link>
        </section>
      </header>
    </div>
  )
}

export default Header;