import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const AppNav = ({ navItems = [] }) => (
  <nav>
    <ul className={styles.list}>
      {navItems.map(item => (
        <li key={item.name}>
          <NavLink to={item.path} className={styles.link}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
