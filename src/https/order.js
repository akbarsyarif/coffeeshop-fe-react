import axios from "axios";

const baseUrl = import.meta.env.VITE_BE_HOST + "/order";

export const axiosCreateOrder = (body, jwt, userid) => {
  const createOrderUrl = baseUrl + `/${userid}`;
  return axios.post(createOrderUrl, body, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};

export const axiosGetUserOrder = (jwt, userid, query) => {
  const getUserOrderUrl = baseUrl + "/user" + `/${userid}` + query;
  return axios.get(getUserOrderUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};

export const axiosGetUserOrderDetail = (jwt, orderid) => {
  const getUserOrderDetailUrl = baseUrl + `/${orderid}`;
  return axios.get(getUserOrderDetailUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};

export const axiosGetTotalSales = (jwt) => {
  const getTotalSalesUrl = baseUrl + "/sales/all";
  return axios.get(getTotalSalesUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};

export const axiosGetAllOrder = (jwt) => {
  return axios.get(baseUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};
