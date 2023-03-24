import './DotConteudoComponent.css';

export const DotConteudoComponent = ({ props }) => {
  return (
    <div className="dot_conteudo">
      <p>
        {props.msgPrev}{' '}
        <strong
          style={{
            color: props.color,
            textShadow: props.textShadow,
          }}
        >
          {props.name}
        </strong>{' '}
        {props.msgPos}
      </p>
    </div>
  );
};
