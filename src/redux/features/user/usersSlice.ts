import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest, refreshTokenRequest } from "../../../api/users";
import { ACCESS_TOKEN, REFRESH_TOKEN , IS_LOGGED_IN} from "../../../config/constants";
import { LoginState, User } from "../../../types";

const initialState = {
  isLoggedIn: localStorage.getItem(IS_LOGGED_IN)
  ? localStorage.getItem(IS_LOGGED_IN)
  : false,
error: "",
    
  } as LoginState

  export const login = createAsyncThunk(
    "users/login",
    async (user:User)=>{
   try {
        const response = await loginRequest(user);
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        localStorage.setItem(REFRESH_TOKEN, response.refreshToken);
        return response;
      } catch (error) {
        return await Promise.reject(error);
      }
  });




  export const refreshToken = createAsyncThunk("users/refreshToken", (user) => {
    return refreshTokenRequest()
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  });
  
  export const usersSlice = createSlice({ 
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Login
      builder.addCase(login.fulfilled, (state,action) => {
        return { ...state, isLoggedIn:true , error:""};
      });
      builder.addCase(login.rejected, (state,action) => {
        return { ...state, isLoggedIn:false , error:"اطلاعات وارد شده صحیح نیست"};
      });
      // Refresh Token
      builder.addCase(refreshToken.fulfilled, (state,action) => {
      
        return { ...state, isLoggedIn:true , error:""};
      });
      builder.addCase(refreshToken.rejected, (state,action) => {
        return { ...state, isLoggedIn:false , error:"اطلاعات وارد شده صحیح نیست"};
      });
    },
  });
  
  export default usersSlice.reducer;
