import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPagedProductsRequest } from "../../../api/products";
import { ProductsState } from "../../../types";

const initialState = {
  products: [],
  productsCount: 0,
  loading: "idle",
  error: "",
} as ProductsState;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  fetchPagedProductsRequest
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const { products, count } = action.payload;
      return {
        ...state,
        loading: "succeeded",
        products: products,
        productsCount: count,
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        products: [],
        loading: "failed",
        error: String(action.payload),
      };
    });
  },
});
export default productsSlice.reducer;
