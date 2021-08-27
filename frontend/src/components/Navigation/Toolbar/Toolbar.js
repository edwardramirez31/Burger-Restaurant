import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerIcon from "../SideDrawer/SideDrawerIcon/SideDrawerIcon";
import "./Toolbar.css";

const Toolbar = (
  /** @type {{ toggleHandler: React.MouseEventHandler<HTMLDivElement>; }} */ props
) => {
  return (
    <header className="Toolbar">
      <SideDrawerIcon clicked={props.toggleHandler} />
      <Logo />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
