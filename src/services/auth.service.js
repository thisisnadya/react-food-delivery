const baseURL = "http://localhost:4000/api";

export const register = (newUser) => {
  axios
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response.data) {
        return Promise.resolve(response.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
