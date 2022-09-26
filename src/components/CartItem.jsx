import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../redux/actions/actions";

function CartItem({ name, price, imgSrc, itemId }) {
  // const cart = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);
  // const dispatch = useDispatch();

  const handleQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      setQty(qty - 1);
    }
  };
  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => handleQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => handleQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  );
}

export default CartItem;
