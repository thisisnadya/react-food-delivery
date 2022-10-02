import React from "react";
import { BottomMenuData } from "./Data";
import MenuContainer from "./MenuContainer";

import { Link } from "react-router-dom";

function BottomMenu() {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        {BottomMenuData.map((menu) => (
          <Link to={menu.link} key={menu.name}>
            <MenuContainer icon={menu.icon} isHome={menu.isHome} />
          </Link>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default BottomMenu;
