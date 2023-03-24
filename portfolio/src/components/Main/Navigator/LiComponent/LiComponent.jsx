import { useState } from 'react';
import { loadDots } from '../loadDots/loadDots';
import { IconComponet } from '../IconComponet/IconComponet';
import { DotComponent } from '../DotComponent/DotComponent';

import './LiComponet.css';

export const LiComponet = () => {
  const [active, setActive] = useState(0);

  return loadDots.map((item, i) => {
    return (
      <li key={i} className="rds_conteiner">
        <div
          id="icon_content"
          onClick={() => {
            return setActive(i);
          }}
        >
          <IconComponet IconProp={item.icon} />
          <DotComponent
            index={i}
            actived={active}
            props={item}
          />
        </div>
      </li>
    );
  });
};
