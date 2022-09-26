import { ActionTypes } from "../actions/types";

const initialState = {
  cart: [],
  total: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    // case ActionTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.filter((item) => item.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default cartReducer;
