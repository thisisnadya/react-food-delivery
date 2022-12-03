import { cartReducer, userReducer, favoriteReducer } from "./reducers/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
  carts: cartReducer,
  favorites: favoriteReducer,
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
