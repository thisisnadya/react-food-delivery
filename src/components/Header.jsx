import React, { useState } from "react";
import Logout from "./Logout";
import Search from "./Search";
import { logoutAction } from "../redux/actions/actions";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  BarChart,
  ShoppingCartRounded,
} from "@mui/icons-material";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const store = useStore();
  const currentUser = store.getState().user.user;
  const cart = useSelector((state) => state.carts.cart);
  const [cartCounts, setCartCounts] = useState(0);

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");

    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
    getCartCounts();
  }, [cart]);

  const logout = () => {
    dispatch(logoutAction());
  };

  const getCartCounts = () => {
    let count = 0;
    cart.forEach((item) => (count += item.qty));
    setCartCounts(count);
  };

  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        className="logo"
        alt=""
      />
      <Search />
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">{cartCounts}</div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img
            className="profilePic"
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
            alt=""
          />
        </div>
        <h2 className="username me-2">{currentUser}</h2>
        <div className="btn-logout ms-2">
          <Logout onLogout={logout} />
        </div>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
