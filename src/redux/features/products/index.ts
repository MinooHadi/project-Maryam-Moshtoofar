import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsRequest } from "../../../api/products";
import { ProductsState } from "../../../types";

const initialState = {
  products: [],
  loading: "idle",
  error: "",
} as ProductsState;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  fetchAllProductsRequest
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
      return { ...state, loading: "succeeded", products: action.payload };
    });
    builder.addCase(fetchProducts.rejected, (_state, action) => {
      return { products: [], loading: "failed", error: String(action.payload) };
    });
  },
});
export default productsSlice.reducer;
