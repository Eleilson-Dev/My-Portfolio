import React, { Component } from 'react';

import './NavRedes.css'

// import de icons
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

import LiForUlComponent from './LiForUlComponent/LiForUlComponent';
import HandleClickLi from '../NavRedes/funcs/HandleClickLi/HandleClickLi'

export default class NavRedes extends Component {

  componentDidMount() {
    const nodeList = document.querySelectorAll('.rds_conteiner');
    const li1 = nodeList[0];
    li1.childNodes[2].classList.add('dot_active');
  }

  render() {
    return (
      <div className='redes'>
        <ul className='redes_conteiner'>

          <LiForUlComponent
            id_name={'Whatsapp'}
            MyIconComponent={BsWhatsapp}
            handleClickLi={HandleClickLi}
            clasComponent={'father_dot_0'}
            msg={
              <p>
                Oi! me chama no <strong className="Cls_Whatsapp">Whatsapp</strong> vamos converssar
              </p>
            }
          />

          <LiForUlComponent
            id_name={'Instagram'}
            MyIconComponent={BsInstagram}
            handleClickLi={HandleClickLi}
            clasComponent={'father_dot_1'}
            msg={
              <p>
                Me segue no <strong className="Cls_Instagram">Instagram</strong> e me chama no Direct
              </p>
            }
          />

          <LiForUlComponent
            id_name={'Linkedin'}
            MyIconComponent={BsLinkedin}
            handleClickLi={HandleClickLi}
            clasComponent={'father_dot_2'}
            msg={
              <p>
                Passa lá no meu <strong className="Cls_Linkedin">Linkedin</strong>
              </p>
            }
          />

          <LiForUlComponent
            id_name={'TikTok'}
            MyIconComponent={FaTiktok}
            handleClickLi={HandleClickLi}
            clasComponent={'father_dot_3'}
            msg={
              <p>
                Dá uma olhadinha lá no meu <strong className="Cls_TikTok">TikTok</strong>
              </p>
            }
          />

          <LiForUlComponent
            id_name={'Twitter'}
            MyIconComponent={BsTwitter}
            handleClickLi={HandleClickLi}
            clasComponent={'father_dot_4'}
            msg={
              <p>
                Me segue no <strong className="Cls_Twitter">Twitter</strong> tô ativo lá também
              </p>
            }
          />

        </ul>
      </div>
    );
  }
}
