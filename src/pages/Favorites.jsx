import React from "react";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";

function Favorites() {
  return (
    <div>
      <Header />
      <div className="new-section">
        <p>Favorites</p>
      </div>
      <BottomMenu />
    </div>
  );
}

export default Favorites;
