import { ActionTypes } from "./types";

export const setCartItems = (item) => {
  return {
    type: ActionTypes.SET_CART,
    payload: item,
  };
};
