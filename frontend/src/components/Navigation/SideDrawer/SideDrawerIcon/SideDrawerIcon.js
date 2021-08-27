import React from "react";
import "./SideDrawerIcon.css";
/**
 * @param {{ clicked: React.MouseEventHandler<HTMLDivElement>; }} props
 */
export default function SideDrawerIcon(props) {
  return (
    <div onClick={props.clicked} className="DrawerToggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
