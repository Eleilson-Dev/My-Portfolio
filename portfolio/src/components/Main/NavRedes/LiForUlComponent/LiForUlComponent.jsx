import React from "react";

import './LiForUlComponent.css'
import './RedesColors.css'

export default function LiForUlComponent({ MyIconComponent, handleClickLi, clasComponent, msg, id_name }) {

  return (
    <li className='rds_conteiner '>
      <div className='icon'>
        <i>{<MyIconComponent />}</i>
      </div>
      <div className='iconCapClick' onClick={handleClickLi}></div>

      <div className={`father_dot ${clasComponent}`}>
        <div className='dot'></div>
        <div className="dot-card"></div>
        <div className="dot-card-two">
          <div className="dot_card_conteudo">
            {msg}
          </div>
          <div className="dot_card_nav">
            <a href="https://wa.me/5598985598696">
              <button id={id_name}>
                ENTRAR
              </button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );

}
