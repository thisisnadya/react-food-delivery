import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect } from "react";
import "./App.css";
import BannerName from "./components/BannerName";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import SubMenuContainer from "./components/SubMenuContainer";

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Main Container */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Nadya"} link={"#"} discount={"20"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer"></div>
            <div className="dishItemContainer"></div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>

      {/* Bottom Menu */}
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
    </div>
  );
}

export default App;
