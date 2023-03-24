import React, { Component } from 'react';

import './Watch.css';

export default class Watch extends Component {
  state = {
    data: '',
    hora: 0,
    minutos: 0,
    segundos: 0,
  };

  handleUpdateHour = () => {
    let { data, hora, minutos, segundos } = this.state;

    data = new Date();
    hora = data.getHours();
    minutos = data.getMinutes();
    segundos = data.getSeconds();

    this.setState({
      data,
      hora,
      minutos,
      segundos,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.handleUpdateHour();
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="card_clock">
          <p className="relogio">00:00</p>
        </div>
      </div>
    );
  }
}
