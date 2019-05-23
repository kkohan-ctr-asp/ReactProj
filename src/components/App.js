import React from 'react';

import Header from './Header';
import AppNav from './AppNav';
import HeaderLogo from './HeaderLogo';
import UserMenu from './UserMenu';

const NAV_ITEMS = [
  {
    id: 1,
    value: 'Menu',
  },
  {
    id: 2,
    value: 'About',
  },
  {
    id: 3,
    value: 'Contact',
  },
  {
    id: 5,
    value: 'Delivery',
  },
];

const App = () => (
  <Header>
    <HeaderLogo
      width="80"
      height="80"
      logoImage="https://placeimg.com/640/480/any"
    />
    <AppNav navItems={NAV_ITEMS} />
    <UserMenu
      userImg="https://placeimg.com/100/100/any"
      userName="Fernando Lopes"
    />
  </Header>
);

export default App;
