import { useState } from 'react';

import {
  MdMenuOpenIcon,
  VscCloseAllIcon,
} from './Icons/Icons';

import './UlMenuHeader.css';

const UlMenuHeader = () => {
  const [toggle, setToggle] = useState('');
  return (
    <div className={`menu ${toggle}`}>
      <ul className="ul_menu_list">
        <li className="li-header">
          <h3>Home</h3>
        </li>

        <li className="li-header">
          <h3>Projects</h3>
        </li>

        <li className="li-header">
          <h3>Skills</h3>
        </li>
      </ul>
      <div
        className="bars"
        onClick={() => {
          toggle === '' ? setToggle('on') : setToggle('');
          console.log(toggle);
        }}
      >
        {toggle === '' ? (
          <MdMenuOpenIcon />
        ) : (
          <VscCloseAllIcon />
        )}
      </div>
    </div>
  );
};

export default UlMenuHeader;
