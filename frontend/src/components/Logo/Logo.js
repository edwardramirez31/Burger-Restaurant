import imageLogo from '../../assets/images/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <img src={imageLogo} alt="Burger Logo" />
    </div>
  );
}
 
export default Logo;