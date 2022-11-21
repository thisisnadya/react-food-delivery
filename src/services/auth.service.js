import axios, * as others from "axios";
const baseURL = "http://localhost:4000/api";

export const register = (newUser) => {
  return axios
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

export const login = (userCredential) => {
  return axios
    .post(`${baseURL}/login`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-access-token", response.data.token);
      }
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

export const logout = () => {
  localStorage.removeItem("x-access-token");
  return { msg: "Logout Successfully" };
};
