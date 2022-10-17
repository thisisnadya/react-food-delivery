import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty } from "../redux/actions/actions";
// import { removeFromCart } from "../redux/actions/actions";

function CartItem({ name, price, imgSrc, itemId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const item = cart.find((item) => item.id === itemId);
  const [qty, setQty] = useState(item.qty);

  useEffect(() => {
    setQty(item.qty);
  }, [item.qty]);

  const handleQuantity = (action) => {
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
              onClick={() => handleQuantity("remove")}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => handleQuantity("add")}
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
