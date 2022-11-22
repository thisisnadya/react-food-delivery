import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

function MenuCard({ imgSrc, name }) {
  return (
    <div className="rowMenuCard">
      <div className="imgBox">{imgSrc}</div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
}

export default MenuCard;
