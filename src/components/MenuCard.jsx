import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

function MenuCard({ imgSrc, name, onClickCategory }) {
  return (
    <div
      className="rowMenuCard"
      onClick={() => onClickCategory(name.toLowerCase())}
    >
      <div className="imgBox">{imgSrc}</div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
}

export default MenuCard;
