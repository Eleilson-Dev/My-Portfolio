import CardProfile from '../CardProfile/CardProfile';
// import CardRightComponent from './CardRightComponent/CardRightComponent';

import './Main.css';

const Main = () => {
  return (
    <section className="main">
      <div className="main_card_left">
        <CardProfile />
      </div>

      {/*<CardRightComponent /> */}
    </section>
  );
};

export default Main;
