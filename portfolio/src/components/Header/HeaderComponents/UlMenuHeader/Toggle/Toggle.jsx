import {
  MdMenuOpenIcon,
  VscCloseAllIcon,
} from '../Icons/Icons';

const Toggle = ({ toggle }) => {
  return (
    <>
      {toggle === '' ? (
        <MdMenuOpenIcon />
      ) : (
        <VscCloseAllIcon />
      )}
    </>
  );
};

export default Toggle;
