import { ActionTypes } from "./types";
import * as AuthServices from "../../services/auth.service";

export const addToCart = (data) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: data,
  };
};

export const adjustQty = (id, adjustType) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      id,
      adjustType,
    },
  };
};

export const handleFavourite = (data) => {
  return {
    type: ActionTypes.HANDLE_FAVORITE,
    payload: data,
  };
};

// register action

export const registerAction = (payload) => (dispatch) => {
  return AuthServices.register(payload)
    .then((response) => {
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: { err: error.message || "Registration Failed" },
      });
      return Promise.reject(error);
    });
};

// login action

export const loginAction = (payload) => (dispatch) => {
  return AuthServices.login(payload)
    .then((data) => {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data,
      });
      console.log(data);
      return Promise.resolve(data);
    })

    .catch((error) => {
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: { err: error.message || "Login Failed" },
      });
      return Promise.reject(error);
    });
};

// logout action
export const logoutAction = () => (dispatch) => {
  const msg = AuthServices.logout();

  dispatch({
    type: ActionTypes.LOGOUT,
    payload: { msg },
  });

  return Promise.resolve(msg);
};
