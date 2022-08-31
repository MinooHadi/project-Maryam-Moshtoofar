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
export const { deliveredOrders, pendingOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
