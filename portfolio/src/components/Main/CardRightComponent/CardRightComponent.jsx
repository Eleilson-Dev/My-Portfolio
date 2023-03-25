import AstronautaSvg from '../../../imgs/header-img.svg';
import Navigator from '../Navigator/Navigator';

import './CardRightComponent.css';

const CardRightComponent = () => {
  return (
    <div className="main_card_right">
      <div className="svg_astronauta">
        <img src={AstronautaSvg} alt="AstronautaSvg" />
      </div>
      <div className="menu_content">
        <Navigator />
      </div>
    </div>
  );
};

export default CardRightComponent;
