import axios from "axios";

const baseUrl = import.meta.env.VITE_BE_HOST + "/product";

export const axiosgetProduct = (url) => {
  return axios.get(url);
};

export const axiosgetProductDetail = (productId) => {
  const productDetailUrl = `${baseUrl}/${productId}`;
  return axios.get(productDetailUrl);
};

export const axiosCreateProduct = (formData, jwt) => {
  return axios.post(baseUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + jwt,
    },
  });
};
