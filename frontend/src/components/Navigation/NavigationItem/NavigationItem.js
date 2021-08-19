import './NavigationItem.css';

const NavigationItem = ({ active, location, children }) => {
  return (
      <li className="NavigationItem">
      <a
        href={location}
        className={active ? 'active' : null}
      >
          {children}
        </a>
      </li>
  );
}
 
export default NavigationItem;