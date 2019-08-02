import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/'> Home </Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    );
}

export default Header;

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}