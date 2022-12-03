import React from "react";

function MenuContainer({ icon, isHome }) {
  return (
    <li>
      <span className="icon">{icon}</span>
    </li>
  );
}

export default MenuContainer;
