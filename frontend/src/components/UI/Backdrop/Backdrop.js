import './Backdrop.css';

const Backdrop = (props) => {
  return (
    props.isPurchsing ? (
      <div className="Backdrop" onClick={props.clicked} />
    ) : null
  );
};

export default Backdrop;