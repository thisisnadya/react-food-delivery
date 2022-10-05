import { ActionTypes } from "./types";

export const addToCart = (item) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: item,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};

export const adjustQty = (id, qty) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      itemId: id,
      itemQty: qty,
    },
  };
};

export const addToFavorite = (id) => {
  return {
    type: ActionTypes.ADD_TO_FAVORITE,
    payload: {
      item: id,
    },
  };
};
