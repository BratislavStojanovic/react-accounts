import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Accounts App
      </Link>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <NavLink
            to='/'
            exact
            activeClassName={'activeLink'}
            className='nav-link'
          >
            Accounts
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/add'
            activeClassName={'activeLink'}
            className='nav-link'
          >
            Add Accounts
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/edit'
            activeClassName={'activeLink'}
            className='nav-link'
          >
            Edit/Delete
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
