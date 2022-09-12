import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPagedOrdersRequest } from "../../../../api/orders";
import { OrdersState } from "../../../../types";

const initialState = {
  orders: [],
  loading: false,
  error: "",
  queryParams: {
    pagination: {
      current: 1,
      pageSize: 2,
      total: 0,
    },
    sortField: null,
    sortOrder: null,
  },
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
      return { ...state, loading: true };
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const { orders, queryParams } = action.payload;

      return {
        ...state,
        loading: false,
        orders: orders,
        queryParams: queryParams,
      };
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      return {
        ...state,
        orders: [],
        loading: false,
        error: String(action.payload),
      };
    });
  },
});

export default ordersSlice.reducer;
