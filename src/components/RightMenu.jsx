import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import DebitCard from "./DebitCard";
import SubMenuContainer from "./SubMenuContainer";

function RightMenu() {
  const cartItems = useSelector((state) => state.carts.cart);
  const [grandTotal, setGrandTotal] = useState(0);
  const getGrandTotal = () => {
    let total = 0;
    cartItems.forEach((item) => (total += item.totalPrice));
    setGrandTotal(total.toFixed(2));
  };
  useEffect(() => {
    getGrandTotal();
  }, [cartItems]);
  return (
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
            <span>$ </span>
            {grandTotal}
          </p>
        </div>
        <button className="checkOut">CheckOut</button>
      </div>
    </div>
  );
}

export default RightMenu;
