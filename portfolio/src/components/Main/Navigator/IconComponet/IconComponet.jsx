import { Icon } from '../Icon/Icon';
import './IconComponet.css';

export const IconComponet = ({ IconProp }) => {
  return (
    <div className="icon">
      <Icon IconProp={IconProp} />
    </div>
  );
};
