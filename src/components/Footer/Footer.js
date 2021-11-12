import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import classes from './Footer.module.css';
import logo from '../../assets/images/logo.svg';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="arch logo" />
      </div>
      <nav>
        <li>
          <NavLink to="/portfolio" className={classes.navlink}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={classes.navlink}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={classes.navlink}>
            Contact
          </NavLink>
        </li>
      </nav>
      <Button text="see our portfolio" onclick={() => navigate('/portfolio')} />
      <span>Arch &#169; 2021</span>
    </footer>
  );
}
