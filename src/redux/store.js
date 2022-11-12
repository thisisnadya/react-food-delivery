import { cartReducer, favoriteReducer, userReducer } from "./reducers/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  carts: cartReducer,
  favorites: favoriteReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
