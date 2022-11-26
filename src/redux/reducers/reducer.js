import { ActionTypes } from "../actions/types";
import { Items } from "../../components/Data";

const cartInitialState = {
  cart: [],
  total: null,
};

const userInitialState = {
  isLoggedIn: false,
  user: null,
};

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const isInCart = state.cart.find((item) => item.id === action.payload.id);
      console.log(isInCart);
      return {
        ...state,
        cart: [...state.cart, action.payload],
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

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.username,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
