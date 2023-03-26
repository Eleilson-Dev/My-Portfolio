import { useState } from 'react';
import { LiMenuHeader } from '../LiMenuHeader/LiMenuHeader';
import Toggle from './Toggle/Toggle';

import './UlMenuHeader.css';

const UlMenuHeader = () => {
  const [toggle, setToggle] = useState('');
  return (
    <div className={`menu ${toggle}`}>
      <ul className="ul_menu_list">
        <LiMenuHeader />
      </ul>
      <div
        className="bars"
        onClick={() => {
          toggle === '' ? setToggle('on') : setToggle('');
        }}
      >
        <Toggle toggle={toggle} />
      </div>
    </div>
  );
};

export default UlMenuHeader;
