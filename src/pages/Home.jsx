import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BannerName from "../components/BannerName";
import SubMenuContainer from "../components/SubMenuContainer";
import { MenuItems } from "../components/Data";
import ItemCard from "../components/ItemCard";
import MenuCard from "../components/MenuCard";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import Loading from "react-loading-components";
import { NavLink } from "react-router-dom";
import axios from "axios";
import RightMenu from "../components/RightMenu";

function Home() {
  const currentUser = useSelector((state) => state.user.user);
  const [homeMenus, setHomeMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHomeMenus = () => {
    setIsLoading(true);
    const check = localStorage.getItem("home_menus");
    if (check) {
      setHomeMenus(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50`
        )
        .then(({ data }) => {
          localStorage.setItem("home_menus", JSON.stringify(data.recipes));
          setHomeMenus(data.recipes);
          console.log(data);
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getHomeMenus();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={currentUser} link={"#"} discount={"20"} />
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
            <div className="rowContainer">
              {MenuItems.map((item) => (
                <NavLink to={`/type/${item.name.toLowerCase()}`} key={item.id}>
                  <MenuCard imgSrc={item.imgSrc} name={item.name} />
                </NavLink>
              ))}
            </div>
            <div className="dishItemContainer">
              {!isLoading && homeMenus ? (
                homeMenus.map((item) => (
                  <ItemCard
                    key={item.id}
                    imgSrc={item.image}
                    name={item.title}
                    ratings={item.aggregateLikes}
                    price={item.pricePerServing}
                    itemId={item.id}
                  />
                ))
              ) : (
                <Loading type="puff" fill="#fa901c" />
              )}
            </div>
          </div>
        </div>
        <RightMenu />
      </main>
      <BottomMenu />
    </div>
  );
}

export default Home;
