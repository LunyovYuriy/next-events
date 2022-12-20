import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import classes from '../scss/Header.module.scss';
import classNames from 'classnames';

function Header() {
  const innerContainerClasses = classNames('container', classes.innerContainer)

  return (
    <div className={classes.topContainer}>
      <div className={innerContainerClasses}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
