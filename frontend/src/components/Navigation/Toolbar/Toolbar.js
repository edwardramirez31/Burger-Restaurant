import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './Toolbar.css';

const Toolbar = () => (
  <header className="Toolbar" >
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;