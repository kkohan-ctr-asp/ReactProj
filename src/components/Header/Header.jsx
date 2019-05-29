import React from 'react';
import AppNav from '../Navigation/Navigation';
import HeaderLogo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import appLogo from './assets/logo.jpg';
import avatarImg from './assets/avatar.png';
import styles from './Header.module.css';

const NAV_ITEMS = ['Menu', 'About', 'Contact', 'Delivery'];

const Header = () => (
  <header className={styles.header}>
    <div>
      <HeaderLogo width={80} height={80} logoImage={appLogo} />
    </div>

    <AppNav navItems={NAV_ITEMS} />

    <div className={styles.usermenu}>
      <UserMenu userName="Fernando Lopes" avatarImg={avatarImg} />
    </div>
  </header>
);

export default Header;
