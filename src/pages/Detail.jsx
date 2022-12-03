import React from "react";
import { useSelector } from "react-redux";
import BottomMenu from "../components/BottomMenu";
import CartItem from "../components/CartItem";
import DebitCard from "../components/DebitCard";
import SubMenuContainer from "../components/SubMenuContainer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Detail() {
  const cartItems = useSelector((state) => state.carts.cart);
  const params = useParams();

  const getDetail = (id) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => console.log(data));
  };

  useEffect(() => {
    getDetail(params.id);
  }, [params.id]);
  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          <h3>Detail Page</h3>
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

export default Detail;
