import axios from "axios";

const baseUrl = import.meta.env.VITE_BE_HOST + "/user";

export const axiosGetUserInfo = (userid, jwt) => {
  const userUrl = baseUrl + `/${userid}`;
  return axios.get(userUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};

export const axiosChangepassword = (body, jwt, userid) => {
  const changePwdUrl = baseUrl + `/${userid}`;
  return axios.patch(changePwdUrl, body, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};
export const axiosGetAllUser = (jwt) => {
  return axios.get(baseUrl, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
};

export const axiosChangeUser = (formData, jwt, userId) => {
  const changeUserUrl = baseUrl + "/profile" + `/${userId}`;
  return axios.patch(changeUserUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + jwt,
    },
  });
};
// /:user_id
