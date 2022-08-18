import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllOrdersRequest } from "../../../api/orders";
import { Orders } from "../../../types";

const initialState = {
  orders: [],
  loading: "idle",
  error: "",
} as Orders;

export const fetchOrders = createAsyncThunk(
  "orders/fetchPosts",
  fetchAllOrdersRequest
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // reducer is required for typescript
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return { ...state, loading: "succeeded", orders: action.payload };
    });
    builder.addCase(fetchOrders.rejected, (_state, action) => {
      return { orders: [], loading: "failed", error: String(action.payload) };
    });
  },
});

export default ordersSlice.reducer;
