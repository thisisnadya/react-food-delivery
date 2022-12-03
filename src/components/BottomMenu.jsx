import React from "react";
import { BottomMenuData } from "./Data";
import MenuContainer from "./MenuContainer";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

function BottomMenu() {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        {BottomMenuData.map((menu) => (
          <Slink to={menu.link} key={menu.name}>
            <MenuContainer icon={menu.icon} />
          </Slink>
        ))}
      </ul>
    </div>
  );
}

const Slink = styled(NavLink)`
  &.active {
    color: #fa901c;
  }
`;

export default BottomMenu;
