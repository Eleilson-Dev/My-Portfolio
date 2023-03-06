import React, { Component, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  };
};
