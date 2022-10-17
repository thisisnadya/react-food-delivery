import { ActionTypes } from "../actions/types";
import { Items } from "../../components/Data";

const initialState = {
  cart: [],
  total: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const item = Items.find((item) => item.id === action.payload.id);
      const isInCart = state.cart.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.ADJUST_QTY:
      // const itemToUpdateQty = Items.find(
      //   (item) => item.id === action.payload.itemId
      // );
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.itemQty }
            : item
        ),
      };
    // case ActionTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.filter((item) => item.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.HANDLE_FAVORITE:
      let findItem = Items.find((item) => item.id === action.payload.itemId);
      let isInFavorite = state.find(
        (item) => item.id === action.payload.itemId
      );
      if (isInFavorite) {
        return state.filter((item) => item.id !== action.payload.itemId);
      } else {
        return [...state, findItem];
      }
    default:
      return state;
  }
};
