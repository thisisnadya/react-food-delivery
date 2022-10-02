import React from "react";

function MenuContainer({ icon, isHome }) {
  return (
    <li className={isHome ? "active" : ""}>
      <span className="icon">{icon}</span>
    </li>
  );
}

export default MenuContainer;
