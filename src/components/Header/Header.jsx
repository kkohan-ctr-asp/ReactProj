import React from 'react';
import AppNav from '../Navigation/Navigation';
import HeaderLogo from '../Logo/Logo';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import appLogo from './assets/logo.jpg';
import avatarImg from './assets/avatar.png';

import styles from './Header.module.css';
import NAV_ITEMS from '../../configs/main-nav';

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
