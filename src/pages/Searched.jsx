import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BottomMenu from "../components/BottomMenu";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import ItemCard from "../components/ItemCard";
import Loading from "react-loading-components";
import RightMenu from "../components/RightMenu";

function Searched() {
  const cartItems = useSelector((state) => state.carts.cart);
  const [searchedItem, setSearchedItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const getSearch = (query) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`
      )
      .then(({ data }) => {
        console.log(data);
        setSearchedItem(data.results);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          {searchedItem ? (
            <h3>
              Results for <span className="fw-bold">"{params.search}"</span>
            </h3>
          ) : (
            <h3>
              No Result for <span className="fw-bold">"{params.search}"</span>
            </h3>
          )}

          <div className="dishItemContainer">
            {!isLoading && searchedItem ? (
              searchedItem.map((item) => (
                <ItemCard
                  key={item.id}
                  imgSrc={item.image}
                  name={item.title}
                  // ratings={item.aggregateLikes}
                  price={item.pricePerServing ? item.pricePerServing : 20.45}
                  itemId={item.id}
                />
              ))
            ) : (
              <Loading type="puff" fill="#fa901c" width={100} height={100} />
            )}
          </div>
        </div>
        <RightMenu />
      </main>
      <BottomMenu />
    </div>
  );
}

export default Searched;
