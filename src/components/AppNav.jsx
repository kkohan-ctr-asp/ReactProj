import React from 'react';

const AppNav = ({ navItems }) => (
  <nav>
    <ul>
      {navItems.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
