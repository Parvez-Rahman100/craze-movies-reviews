import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-3 bg-blue-500 py-5 rounded-2xl sticky top-0 '>
            <Link className='m-16 p-3 text-white' to='/'>Home</Link>
            <Link className='m-16 p-3 text-white' to='/reviews'>Reviews</Link>
            <Link className='m-16 p-3 text-white' to='/dashboard'>Dashboard</Link>
            <Link className='m-16 p-3 text-white' to='/blogs'>Blogs</Link>
            <Link className='m-16 p-3 text-white' to='/about'>About</Link>
        </div>
    );
};

export default Header;