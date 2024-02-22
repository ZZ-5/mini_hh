import React from 'react';
import './index.scss';
import logo from '../../assets/icon/HeadHunter_logo.png';
import { Link } from 'react-router-dom';
import icon_favorites from '../../assets/icon/favorite-64.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__row">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
        <Link to={'/favorite'}>
          <img src={icon_favorites} alt="Избранное" className="header__favorite" />
        </Link>
      </div>
    </div>
  );
};
