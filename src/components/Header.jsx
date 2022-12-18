import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logout from "./Logout";
import Search from "./Search";
import { logoutAction } from "../redux/actions/actions";
import { useDispatch, useSelector, useStore } from "react-redux";
import { BarChart, ShoppingCartRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useStore();
  // const currentUser = store.getState().user.user;
  const cart = useSelector((state) => state.carts.cart);
  const [cartCounts, setCartCounts] = useState(0);

  const [user, loading] = useAuthState(auth);

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

  const handleLogout = () => {
    auth.signOut();

    navigate("/login");
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
      {user && (
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">{cartCounts}</div>
        </div>
      )}

      {user ? (
        <div className="profileContainer">
          <div className="imgBox">
            <img
              className="profilePic"
              src={user.photoURL}
              alt="avatar"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="username me-2">{user.displayName}</h2>
          {/* <div className="btn-logout ms-2">
            <Logout onLogout={logout} />
          </div> */}
          <button className="btn btn-custom" onClick={() => handleLogout()}>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="btn btn-custom">Sign In</button>
        </Link>
      )}

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
