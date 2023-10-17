import axios from "axios";

const baseUrl = import.meta.env.VITE_BE_HOST + "/mail";

export const axiosSendOtp = (body) => {
  return axios.post(baseUrl, body);
};

export const axiosVerifyOtp = (body) => {
  return axios.delete(baseUrl, { data: body });
};
