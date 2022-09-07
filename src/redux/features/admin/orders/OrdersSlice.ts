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
      pageSize: 5,
    },
    sortField: undefined,
    sortOrder: undefined,
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
      const { orders, queryParams,count } = action.payload;


      return {
        ...state,
        loading: false,
        orders: orders,
        queryParams: {
          pagination: {
            current: queryParams.pagination?.current,
            pageSize: queryParams.pagination?.pageSize,
            total:count
          },
          sortField: queryParams.sortField,
          sortOrder: queryParams.sortOrder
        },
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
