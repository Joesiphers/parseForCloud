//manage all the sending api request, manage URL login status
import axios from "axios";
import { serviceConfig } from "./serviceConfig";
const axiosInstance = axios.create({
  baseURL: serviceConfig.baseURL,
  timeout: 10000,
  withCredentials: false
});
//request interceptor, add login info
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("token");
    //adding login or authentication,if not login, popup login page
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//response interceptor
axiosInstance.interceptors.response.use(
  (res) => {
    let data = res.data;
    return data;
  },
  (error) => {
    let message = "";
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          message = "Error params";
          break;
      }
      return Promise.reject(message);
    }
  }
);
export default axiosInstance;
