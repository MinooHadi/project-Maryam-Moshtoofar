import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./features/orders/ordersSlice";


const store = configureStore({
  reducer: {
    orders: ordersSlice,
  },
});



export default store;
