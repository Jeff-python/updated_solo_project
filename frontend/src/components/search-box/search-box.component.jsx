import React from 'react';
import { Input } from '@material-ui/core';

import './search-box.style.css'

export const SearchBox = ({placeholder, handleChange }) => (
    // <input 
    // className = 'search' type='search' placeholder = {placeholder} onChange ={handleChange} />

    <Input 
    className = 'search' type='search' placeholder = {placeholder} onChange ={handleChange} />

)