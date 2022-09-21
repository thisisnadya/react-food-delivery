import { ActionTypes } from "../actions/types";

const initialState = {
  cart: null,
  total: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
