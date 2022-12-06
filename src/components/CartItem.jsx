import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty, setTotalItemPrice } from "../redux/actions/actions";

function CartItem({ name, price, imgSrc, itemId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const item = cart.find((item) => item.id === itemId);
  const [qty, setQty] = useState(item.qty);
  const [itemPrice, setItemPrice] = useState(
    (parseInt(qty) * parseFloat(item.price)).toFixed(2)
  );

  useEffect(() => {
    setQty(item.qty);
    setItemPrice((parseInt(qty) * parseFloat(item.price)).toFixed(2));
    dispatch(setTotalItemPrice(itemId, itemPrice));
  }, [qty, item.qty, itemPrice]);

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
              onClick={() => dispatch(adjustQty(itemId, "DECREMENT"))}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => dispatch(adjustQty(itemId, "INCREMENT"))}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
