import { DotConteudoComponent } from '../DotConteudoComponent/DotConteudoComponent';
import { CardNavComponent } from '../CardNavComponent/CardNavComponent';

import './DotComponent.css';

export const DotComponent = ({ index, actived, props }) => {
  return (
    <>
      {index === actived && (
        <div className="dot_father">
          <div className="dot"></div>
          <div className={props.dot_Card}></div>
          <div className={props.dot_Card_two}>
            <DotConteudoComponent props={props} />
            <div className="card_Nav">
              <CardNavComponent props={props} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
