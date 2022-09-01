import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPagedOrdersRequest } from "../../../api/orders";
import { OrdersState } from "../../../types";

const initialState = {
  orders: [],
  ordersCount: 0,
  loading: "idle",
  error: "",
} as OrdersState;

export const fetchOrders = createAsyncThunk(
  "orders/fetchPosts",
  fetchPagedOrdersRequest
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const { orders, count } = action.payload;
      return {
        ...state,
        loading: "succeeded",
        orders: orders,
        ordersCount: count,
      };
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      return {
        ...state,
        orders: [],
        loading: "failed",
        error: String(action.payload),
      };
    });
  },
});

export default ordersSlice.reducer;
