import cassete from '../../imgs/cassete.png';

import './CardProfile.css';

const CardProfile = () => {
  return (
    <div className="card_profile">
      <div className="profile">
        <div className="profile_circle"></div>
        <h2>Elleylson Santtos</h2>
        <p>Front-End Developer</p>
      </div>

      <div className="profile_card_content">
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
        <h2 className="sobre">Bem-vindo(a)!</h2>
        <div className="artigo">
          <div className="artigo_scroll">
            <p>
              Sou um apaixonado pela Programação desde de
              quando eu era um joven adolecente. sempre tive
              um sonho que era trabalhar com programação e
              atualmenet venho colocando esse sonho me
              pratica estudando sobre{' '}
              <strong id="html">HTML</strong>,
              <strong id="css"> CSS</strong> e{' '}
              <strong id="javascript">JavaScript.</strong>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla praesentium expedita
              quam tempora ullam. Dicta et perferendis sunt
              repudiandae explicabo dolores obcaecati,
              commodi aperiam natus beatae fugit qui
              adipisci itaque! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere at omnis
              alias cupiditate nam aspernatur, explicabo
              commodi error maiores illo sed fuga autem
              dolore asperiores excepturi voluptas iure
              provident officiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
