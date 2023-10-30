import axios from "axios";

const baseUrl = import.meta.env.VITE_BE_HOST + "/auth";

export const axiosLogin = (body) => {
  const loginUrl = baseUrl + "/login";
  return axios.post(loginUrl, body);
};

export const axiosRegister = (body) => {
  const registerUrl = baseUrl;
  return axios.post(registerUrl, body);
};

export const axiosLogout = (jwt) => {
  return axios.delete(baseUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};
