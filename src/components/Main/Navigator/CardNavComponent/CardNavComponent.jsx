import './CardNavComponent.css';

export const CardNavComponent = ({ props }) => {
  return (
    <a id="link" href={props.link}>
      <button style={{ background: props.color }}>
        ENTRAR
      </button>
    </a>
  );
};
