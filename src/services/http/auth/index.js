import axios from "axios";
import { tokenValidation } from "../../intreceptorse";

const baseURL =
  process.env.REACT_APP_MODE === "dev"
    ? '52.22.238.17'
    : '52.22.238.17';

const authInstance = axios.create({
  baseURL: `http://${baseURL}:3000`,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

authInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  tokenValidation
);

export const logIn = ({ formData }) =>
  authInstance.request({
    method: "POST",
    data: formData,
    url: "/auth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
