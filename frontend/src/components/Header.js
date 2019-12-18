import React from 'react';
import { Link } from 'react-router-dom';

const headerBar = () => {
    return (
        <span>
            <Link to="/listings">Listings  </Link>
            <Link to="/add">  Add</Link>
        </span>
    )
}

export default headerBar;
