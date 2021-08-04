import './Button.css'

const Button = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={`Button ${props.variant}`}
    >
      {props.children}
    </button>
  );
}
 
export default Button;