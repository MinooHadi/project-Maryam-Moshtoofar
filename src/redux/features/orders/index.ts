import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllOrdersRequest } from "../../../api/orders";
import { OrdersState } from "../../../types";

const initialState = {
  orders: [],
  loading: "idle",
  error: "",
} as OrdersState;

export const fetchOrders = createAsyncThunk(
  "orders/fetchPosts",
  fetchAllOrdersRequest
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    deliveredOrders(state) {
      state.orders = state.orders.filter((order) => order.delivered);
    },
    pendingOrders(state) {
      state.orders = state.orders.filter((order) => !order.delivered);
    },
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
export const { deliveredOrders, pendingOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
