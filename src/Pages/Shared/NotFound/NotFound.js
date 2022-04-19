import React from 'react';
import notFound from '../../../images/404.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className='notFound-img'>
            <img src={notFound} alt="" />
            </div>
            <div className='notFoundContainer'>
            <h1>OOPS !</h1>
            <h3>404 - Page Not Found</h3>
            <p>The page you're looking for might have been move or deleted</p>
            </div>
        </div>
    );
};

export default NotFound;