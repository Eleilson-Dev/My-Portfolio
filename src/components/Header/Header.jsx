import { useEffect } from 'react';

import RocketRed from '../../imgs/RocketRed.png';
import UlMenuHeader from './HeaderComponents/UlMenuHeader/UlMenuHeader';
import { Watch } from './Watch/Watch';

import scrollToPageBottom from './scrollToPageBottom/scrollToPageBottom';

import './Header.css';

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollToPageBottom);
  }, []);
  return (
    <header className="header">
      <div className="title_page">
        <h1>Towards</h1>
        <img src={RocketRed} alt="RocketRed" />
      </div>
      <div className="menu-section">
        <UlMenuHeader />
        <Watch />
      </div>
    </header>
  );
};

export default Header;
