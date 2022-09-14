import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  CreateOrderRequest,
  fetchPagedOrdersRequest,
} from "../../../../api/orders";
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
  "orders/fetchOrders",
  fetchPagedOrdersRequest
);

export const createNewOrder = createAsyncThunk(
  "orders/createNewOrders",
  CreateOrderRequest
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

    // create new order

    builder.addCase(createNewOrder.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createNewOrder.fulfilled, (state) => {
      return { ...state, loading: false };
    });
    builder.addCase(createNewOrder.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: String(action.payload),
      };
    });
  },
});

export default ordersSlice.reducer;
