import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

import classes from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClassName = (isActive) => classes.navlink + ' ' + (isActive ? classes.active : '');

  return (
    <div className={classes.navbar}>
      <Link to="/home" className={classes.logo} onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Arch logo" />
      </Link>
      <button className={classes.navmenuToggler} onClick={toggleMenuHandler}>
        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav hidden={!isOpen}>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => navLinkClassName(isActive)}
            onClick={() => setIsOpen(false)}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => navLinkClassName(isActive)}
            onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => navLinkClassName(isActive)}
            onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>
      </nav>
    </div>
  );
}
