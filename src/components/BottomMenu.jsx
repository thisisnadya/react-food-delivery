import React from "react";
import MenuContainer from "./MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";

function BottomMenu() {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        {/* prettier-ignore */}
        <MenuContainer link={'#'} icon={<HomeRounded/>} isHome/>
        {/* prettier-ignore */}
        <MenuContainer link={'#'} icon={<Chat/>}/>
        {/* prettier-ignore */}
        <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded/>}/>
        {/* prettier-ignore */}
        <MenuContainer link={'#'} icon={<Favorite/>}/>
        {/* prettier-ignore */}
        <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
        {/* prettier-ignore */}
        <MenuContainer link={'#'} icon={<Settings/>}/>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default BottomMenu;
