import { cartReducer, favoriteReducer } from "./reducers/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  allReducer: cartReducer,
  favorites: favoriteReducer,
});

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
