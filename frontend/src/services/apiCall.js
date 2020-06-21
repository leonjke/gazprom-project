import config from "../config";

const apiCall = async (url, options) => {
  return await fetch(`${config.API_URI}${url}`, options);
};

export const getAuthToken = async (login, password) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      username: login,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return await apiCall("/auth/login", options);
};

export const registerUser = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      ...user,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return await apiCall("/auth/registration", options);
};

export const getCurrentUser = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("authToken"),
    },
  };

  return await apiCall("/user/self", options);
};

export const setAvatar = async (avatarConfig) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      avatar: JSON.stringify(avatarConfig),
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("authToken"),
    },
  };

  return await apiCall("/user/set-avatar", options);
};
