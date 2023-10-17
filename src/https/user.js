import axios from "axios";

const baseUrl = import.meta.env.VITE_BE_HOST + "/user";

export const axiosGetUserInfo = (body) => {
  const userUrl = baseUrl + "/user";
  return axios.get(userUrl, { params: { email: body.email } });
};
