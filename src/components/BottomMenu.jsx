import React from "react";
import { BottomMenuData } from "./Data";
import MenuContainer from "./MenuContainer";

import { NavLink } from "react-router-dom";

function BottomMenu() {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        {BottomMenuData.map((menu) => (
          <NavLink to={menu.link} key={menu.name}>
            <MenuContainer icon={menu.icon} isHome={menu.isHome} />
          </NavLink>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default BottomMenu;
