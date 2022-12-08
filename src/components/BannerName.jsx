import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function BannerName({ name, discount, link }) {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {user && (
        <div className="bannerContent">
          <h3>Hello {user.displayName}</h3>
          <p>
            Get free discount for every <span>${discount}</span> purchase
          </p>
          <button className="btn btn-custom">Learn more</button>
        </div>
      )}
    </>
  );
}

export default BannerName;
