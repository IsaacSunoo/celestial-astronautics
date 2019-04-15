import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <h2>Page Not Found.</h2>
            <h2 className='not-found'>404</h2>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default PageNotFound;