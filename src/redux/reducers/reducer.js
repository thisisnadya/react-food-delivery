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
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart:
          action.payload.adjustType == "INCREMENT"
            ? state.cart.map((item) =>
                item.id == action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : state.cart.map((item) =>
                item.id == action.payload.id
                  ? { ...item, qty: item.qty - 1 }
                  : item
              ),
      };
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
