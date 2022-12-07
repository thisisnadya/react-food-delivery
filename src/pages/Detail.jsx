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
import Loading from "react-loading-components";
import RightMenu from "../components/RightMenu";

function Detail() {
  const cartItems = useSelector((state) => state.carts.cart);
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    getDetail(params.id);
  }, [params.id]);

  const getDetail = async (id) => {
    setIsLoading(true);
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setDetail(data);
      });
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          {!isLoading && detail ? (
            <div className="detail_wrapper">
              <div className="detail_wrapper_top d-flex">
                <div className="image">
                  <img src={detail.image} alt="" />
                </div>
                <div className="additional-info ms-5">
                  <div className="summary-item">
                    <h2>{detail.title}</h2>
                    <h4 className="fw-bold">$ {detail.pricePerServing}</h4>
                    {detail.dishTypes.map((item, idx) => (
                      <h5 key={idx}>{item}</h5>
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
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: detail.id,
                            img: detail.image,
                            name: detail.title,
                            price: detail.pricePerServing,
                          })
                        )
                      }
                    >
                      Add To Cart <AddRounded />
                    </button>
                    <button
                      className="btn btn-custom2 ms-4  d-flex justify-content-center align-items-center"
                      onClick={() =>
                        dispatch(
                          handleFavourite({
                            id: detail.id,
                            img: detail.image,
                            name: detail.title,
                            price: detail.pricePerServing,
                          })
                        )
                      }
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
          ) : (
            <Loading type="puff" fill="#fa901c" width={100} height={100} />
          )}
        </div>
        <RightMenu />
      </main>
      <BottomMenu />
    </div>
  );
}

export default Detail;
