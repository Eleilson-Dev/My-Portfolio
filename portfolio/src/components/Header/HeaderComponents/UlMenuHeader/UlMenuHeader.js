import React, { Component } from "react";

import './UlMenuHeader.css'

export default class UlMenuHeader extends Component {
  render() {
    return (
      <ul className="ul_menu">

        <li className='li-header'>
          <a href="#">
            <h3>Home</h3>
          </a>
        </li>

        <li className='li-header'>
          <a href="#">
            <h3>Projects</h3>
          </a>
        </li>

        <li className='li-header'>
          <a href="#">
            <h3>Skills</h3>
          </a>
        </li>

      </ul>
    );
  }
};
