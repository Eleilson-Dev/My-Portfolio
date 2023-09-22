import cassete from '../../../imgs/cassete.png';

import './ProfileNavComponent.css';

const ProfileNavComponent = () => {
  return (
    <div className="profile_nav">
      <div className="profile_nav_left">
        <img src={cassete} alt="cassete" />
      </div>

      <div className="profile_nav_right">
        <div className="dot_one"></div>
        <div className="dot_two"></div>
        <div className="dot_three"></div>
      </div>
    </div>
  );
};

export default ProfileNavComponent;
