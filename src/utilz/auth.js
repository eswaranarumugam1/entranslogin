export const setToken = (token) => {
  return localStorage.setItem("logintoken", token);
};
export const getToken = () => {
  return localStorage.getItem("logintoken");
};
export const getUser = () => {
  return JSON.parse(localStorage.getItem("userData"));
};

export const removeUser = () => {
  return localStorage.removeItem("userData");
};
export const setRefreshToken = (token) => {
  return localStorage.setItem("RefreshToken", token);
};

export const setUser = (data) => {
  return localStorage.setItem("userData", JSON.stringify(data));
};
