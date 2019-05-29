import React from 'react';
import styles from './Navigation.module.css';

const AppNav = ({ navItems = [] }) => (
  <nav>
    <ul className={styles.list}>
      {navItems.map(item => (
        <li key={item}>
          <a href="/" className={styles.link}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
