import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BannerName from "../components/BannerName";
import SubMenuContainer from "../components/SubMenuContainer";
import { MenuItems } from "../components/Data";
import ItemCard from "../components/ItemCard";
import DebitCard from "../components/DebitCard";
import CartItem from "../components/CartItem";
import MenuCard from "../components/MenuCard";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import { NavLink, useParams } from "react-router-dom";
import Loading from "react-loading-components";
import axios from "axios";

function Home() {
  const currentUser = useSelector((state) => state.user.user);
  const [categoryMenus, setCategoryMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const cartItems = useSelector((state) => state.carts.cart);

  const getCategoryMenus = (type) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${type}&number=20`
      )
      .then(({ data }) => {
        setCategoryMenus(data.recipes);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryMenus(params.type);
  }, [params.type]);

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
              {isLoading ? (
                <Loading type="puff" fill="#fa901c" />
              ) : (
                <>
                  {categoryMenus.map((item) => (
                    <ItemCard
                      key={item.id}
                      imgSrc={item.image}
                      name={item.title}
                      ratings={item.aggregateLikes}
                      price={item.pricePerServing}
                      itemId={item.id}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          <div className="cardCheckOutContainer">
            <SubMenuContainer name={"Carts Items"} />
            <div className="cartContainer">
              <div className="cartItems">
                {cartItems
                  ? cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        name={item.name}
                        imgSrc={item.img}
                        price={item.price}
                        itemId={item.id}
                      />
                    ))
                  : "Nothing found here"}
              </div>
            </div>
            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span>45.0
              </p>
            </div>
            <button className="checkOut">CheckOut</button>
          </div>
        </div>
      </main>
      <BottomMenu />
    </div>
  );
}

export default Home;
