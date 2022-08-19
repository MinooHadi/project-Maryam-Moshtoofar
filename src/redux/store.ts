import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categories";
import ordersSlice from "./features/orders";
import productsSlice from "./features/products";

const store = configureStore({
  reducer: {
    orders: ordersSlice,
    products: productsSlice,
    categories:categoriesSlice
  },
});

export default store;
