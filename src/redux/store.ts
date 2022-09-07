import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categories";
import ordersSlice from "./features/orders";
import productsSlice from "./features/products";
import usersSlice from "./features/user/usersSlice";

const store = configureStore({
  reducer: {
    orders: ordersSlice,
    products: productsSlice,
    categories:categoriesSlice,
    user:usersSlice
  },
});

export default store;
