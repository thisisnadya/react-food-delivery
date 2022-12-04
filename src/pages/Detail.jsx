import React from "react";
import { useSelector } from "react-redux";
import BottomMenu from "../components/BottomMenu";
import CartItem from "../components/CartItem";
import DebitCard from "../components/DebitCard";
import SubMenuContainer from "../components/SubMenuContainer";
import Header from "../components/Header";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart, handleFavourite } from "../redux/actions/actions";
import { AddRounded, Favorite } from "@mui/icons-material";

function Detail() {
  const cartItems = useSelector((state) => state.carts.cart);
  const [detail, setDetail] = useState();
  const dispatch = useDispatch();
  const params = useParams();

  const getDetail = async (id) => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setDetail(data);
      });
  };

  const data = {
    id: detail.id,
    img: detail.image,
    name: detail.title,
    price: detail.pricePerServings,
  };

  useEffect(() => {
    getDetail(params.id);
  }, [params.id]);

  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          {detail && (
            <div className="detail_wrapper">
              <div className="detail_wrapper_top d-flex">
                <div className="image">
                  <img src={detail.image} alt="" />
                </div>
                <div className="additional-info ms-5">
                  <div className="summary-item">
                    <h2>{detail.title}</h2>
                    {detail.dishTypes.map((item) => (
                      <h5>{item}</h5>
                    ))}
                    <h6>
                      {detail.vegan ? <CheckIcon /> : <CloseIcon />} Vegan
                    </h6>
                    <h6>
                      {detail.vegetarian ? <CheckIcon /> : <CloseIcon />}{" "}
                      Vegetarian
                    </h6>
                    <h6>
                      {detail.dairyFree ? <CheckIcon /> : <CloseIcon />} Dairy
                      Free
                    </h6>
                    <h6>
                      {detail.glutenFree ? <CheckIcon /> : <CloseIcon />} Gluten
                      free
                    </h6>
                  </div>
                  <div className="buttons d-flex">
                    <button
                      className="btn btn-custom d-flex justify-content-center align-items-center"
                      onClick={() => dispatch(addToCart(data))}
                    >
                      Add To Cart <AddRounded />
                    </button>
                    <button
                      className="btn btn-custom2 ms-4  d-flex justify-content-center align-items-center"
                      onClick={() => dispatch(handleFavourite(data))}
                    >
                      Favorite <Favorite />
                    </button>
                  </div>
                </div>
              </div>
              <div className="info mt-3">
                <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
              </div>
            </div>
          )}
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
