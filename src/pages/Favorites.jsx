import React from "react";
import { useSelector } from "react-redux";
import BottomMenu from "../components/BottomMenu";
import CartItem from "../components/CartItem";
import DebitCard from "../components/DebitCard";
import SubMenuContainer from "../components/SubMenuContainer";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const cartItems = useSelector((state) => state.carts.cart);
  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          <h3>Your Favorite Items!</h3>
          <div className="dishItemContainer">
            {favorites
              ? favorites.map((item) => (
                  <ItemCard
                    key={item.id}
                    imgSrc={item.img}
                    name={item.name}
                    // ratings={item.aggregateLikes}
                    price={item.price}
                    itemId={item.id}
                  />
                ))
              : "Add some item to your Favorites!"}
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

export default Favorites;
