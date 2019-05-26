import React from 'react';
import AppNav from './AppNav';
import HeaderLogo from './HeaderLogo';
import UserMenu from './UserMenu';
import appLogo from '../logo.jpg';

const NAV_ITEMS = ['Menu', 'About', 'Contact', 'Delivery'];

const Header = () => (
  <header className="Header">
    <div className="Header__logo">
      <HeaderLogo width={80} height={80} logoImage={appLogo} />
    </div>

    <div className="menu">
      <AppNav navItems={NAV_ITEMS} />
    </div>

    <div className="Header__usermenu">
      <UserMenu userName="Fernando Lopes" />
    </div>
  </header>
);

export default Header;
