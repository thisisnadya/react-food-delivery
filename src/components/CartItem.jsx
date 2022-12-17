import { AddRounded, RemoveRounded, Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty, removeFromCart } from "../redux/actions/actions";


function CartItem({ name, price, imgSrc, itemId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const item = cart.find((item) => item.id === itemId);
  const [qty, setQty] = useState(item.qty);

  useEffect(() => {
    setQty(item.qty);
  }, [qty, item.qty]);

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
            <button className="btn" disabled={qty <= 1 ? true : false}>
              <RemoveRounded
                disabled="true"
                className="itemRemove"
                onClick={() => dispatch(adjustQty(itemId, "DECREMENT"))}
              />
            </button>
            <button className="btn">
              <AddRounded
                className="itemAdd"
                onClick={() => dispatch(adjustQty(itemId, "INCREMENT"))}
              />
            </button>
            <button className="btn">
              <Delete onClick={() => dispatch(removeFromCart(itemId))} />
            </button>
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{item.totalPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
