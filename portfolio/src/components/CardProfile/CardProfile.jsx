import CardContentComponet from './CardContentComponet/CardContentComponet';
import ProfileComponent from './ProfileComponent/ProfileComponent';
import ProfileNavComponent from './ProfileNavComponent/ProfileNavComponent';

import './CardProfile.css';

const CardProfile = () => {
  return (
    <div className="card_profile">
      <div className="card_profile_top">
        <ProfileComponent />
        <ProfileNavComponent />
      </div>
      <div className="card_profile_bottom">
        <CardContentComponet />
      </div>
    </div>
  );
};

export default CardProfile;
