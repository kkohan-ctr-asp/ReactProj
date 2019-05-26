import React from 'react';

const AppNav = ({ navItems = [] }) => (
  <nav>
    <ul>
      {navItems.map(item => (
        <li key={item}>
          <a href="/">{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
