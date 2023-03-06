import React, { Component } from 'react';
import CardProfile from './CardProfile/CardProfile';
import NavRedes from './NavRedes/NavRedes';
import AstronautaSvg from '../../imgs/header-img.svg';

import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <section className='main'>
        <div className='main_card_left'>
          <CardProfile />
        </div>

        <div className='main_card_right'>
          <div className='svg_astronauta'>
            <img src={AstronautaSvg} />
          </div>
          <NavRedes />
        </div>
      </section>
    );
  }
}
