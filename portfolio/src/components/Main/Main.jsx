import CardProfile from '../CardProfile/CardProfile';
import AstronautaSvg from '../../imgs/header-img.svg';
import { Navigator } from './Navigator/Navigator';

import './Main.css';

const Main = () => {
  return (
    <section className="main">
      <div className="main_card_left">
        <CardProfile />
      </div>
      <div className="main_card_right">
        <div className="svg_astronauta">
          <img src={AstronautaSvg} alt="AstronautaSvg" />
        </div>
        <div className="menu_content">
          <Navigator />
        </div>
      </div>
    </section>
  );
};

export default Main;
