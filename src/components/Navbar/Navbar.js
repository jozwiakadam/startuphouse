import React from 'react';
import cxBinder from 'classnames/bind';

import Logo from 'components/Logo/Logo';
import NavbarLinks from './NavbarLinks/NavbarLinks';

import styles from './Navbar.module.scss';

const cx = cxBinder.bind(styles);

const Navbar = () => (
  <div className={cx('navbar')}>
    <Logo />
    <NavbarLinks />
  </div>
);

export default Navbar;
