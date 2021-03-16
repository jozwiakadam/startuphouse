import React from 'react';
import cxBinder from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { navbarLinks } from 'constants/index';

import styles from './NavbarLinks.module.scss';

const cx = cxBinder.bind(styles);

const NavbarLinks = () => (
  <div className={cx('navbar-links')}>
    {navbarLinks.map((item) => (
      <NavLink
        exact
        key={item.title}
        to={item.link}
        className={cx('navbar-links-link')}
        activeClassName={cx('navbar-links-link--active')}
      >
        {item.title}
      </NavLink>
    ))}
  </div>
);

export default NavbarLinks;
