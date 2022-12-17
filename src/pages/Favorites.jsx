import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import RightMenu from "../components/RightMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="mainContainer">
          <h3>Your Favorite Items!</h3>
          <div className="dishItemContainer">
            {favorites
              ? favorites.map((item) => (
                  <ItemCard
                    key={item.id}
                    imgSrc={item.img}
                    name={item.name}
                    // ratings={item.aggregateLikes}
                    price={item.price}
                    itemId={item.id}
                  />
                ))
              : "Add some item to your Favorites!"}
          </div>
        </div>
        <RightMenu />
      </main>
      <BottomMenu />
    </div>
  );
}

export default Favorites;
