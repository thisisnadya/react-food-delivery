import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, handleFavourite } from "../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function ItemCard({ imgSrc, name, ratings, price, itemId }) {
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.find((item) => item.id == itemId);
  // const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const handleFavouriteIcon = (data) => {
    if (!user) {
      navigate("/login");
    } else {
      // setIsFavourite(!isFavourite);
      dispatch(handleFavourite(data));
    }
  };

  const handleAddToCart = (data) => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(addToCart(data));
    }
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const data = {
    id: itemId,
    img: imgSrc,
    name,
    price,
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isfavourite ${isFavorite ? "active" : ""}`}
        onClick={() => handleFavouriteIcon(data)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <Link to={`/detail/${itemId}`} key={itemId}>
          <h3 className="itemName">{name}</h3>
        </Link>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$</span>
              {price}
            </h3>
          </div>
          <i className="addToCart" onClick={() => handleAddToCart(data)}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
