import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./features/orders";

const store = configureStore({
  reducer: {
    orders: ordersSlice,
  },
});

export default store;
