import { LOGIN_URL, REFRESH_TOKEN_URL } from "../config/api";
import axiosPrivate from "./http";
import { User } from "../types";

export const loginRequest = async (user:User) => {
    try {
      const response = await axiosPrivate.post(LOGIN_URL,user);
       return response.data;
    } catch (error:any) {
      return Promise.reject(error.response.data);
    }
  };




  export const refreshTokenRequest = async () => {
    try {
      const response = await axiosPrivate.post(REFRESH_TOKEN_URL);
      return response.data;
    } catch (error:any) {
      return Promise.reject(error.response.data);
    }
  };