import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'

const Modal = (props) => {
  return (
    <Auxiliary >
      <Backdrop isPurchsing={props.isActive} clicked={props.handleModalClicked} />
      <div
        className="Modal"
        style={{
          transform: props.isActive ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.isActive ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};
export default Modal;