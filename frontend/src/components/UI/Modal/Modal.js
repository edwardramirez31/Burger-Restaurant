import './Modal.css'

const Modal = (props) => {
  return (
    <div
      className="Modal"
      style={{
        transform: props.isActive ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.isActive ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  );
};
export default Modal;