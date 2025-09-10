import { Link } from 'react-router-dom';
import Logo from '@/shared/assets/svg/logo-puffins.svg?react';
import './HeaderRush.scss';

export const HeaderRush = () => {
  return (
    <header className="header-rush">
      <div className="container-puffins">
        <div className="header-rush__wrapper">
          <Link to="/rush" className="header-rush__wrapper-link">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
};
