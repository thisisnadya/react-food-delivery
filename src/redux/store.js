import { cartReducer, favoriteReducer, userReducer } from "./reducers/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  carts: cartReducer,
  favorites: favoriteReducer,
});

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
