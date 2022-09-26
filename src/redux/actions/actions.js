import { ActionTypes } from "./types";

export const addToCart = (item) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};
