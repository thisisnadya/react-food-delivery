import React from "react";
import BottomMenu from "../components/BottomMenu";
import RightMenu from "../components/RightMenu";
import Header from "../components/Header";
import underConstruction from "../assets/under_construction.svg";

function Wallet() {
  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          <div className="wrapper text-center">
            <div className="image-illustration">
              <img src={underConstruction} alt="" />
            </div>
            <p className="pt-4">Sorry, this page is still under construction</p>
          </div>
        </div>
        <RightMenu />
      </main>
      <BottomMenu />
    </div>
  );
}

export default Wallet;
