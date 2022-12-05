import React from "react";
import DebitCard from "../components/DebitCard";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import SubMenuContainer from "../components/SubMenuContainer";
import { useEffect } from "react";
import CartItem from "../components/CartItem";
import BottomMenu from "../components/BottomMenu";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import ItemCard from "../components/ItemCard";

function Searched() {
  const cartItems = useSelector((state) => state.carts.cart);
  const [searchedItem, setSearchedItem] = useState([]);
  const params = useParams();
  const getSearch = (query) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`
      )
      .then(({ data }) => {
        console.log(data);
        setSearchedItem(data.results);
      });
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          <h3>
            Result for <span className="fw-bold">"{params.search}"</span>
          </h3>
          <div className="dishItemContainer">
            {searchedItem &&
              searchedItem.map((item) => (
                <ItemCard
                  key={item.id}
                  imgSrc={item.image}
                  name={item.title}
                  // ratings={item.aggregateLikes}
                  // price={item.price}
                  itemId={item.id}
                />
              ))}
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

export default Searched;
