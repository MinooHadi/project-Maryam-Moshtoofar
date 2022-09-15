import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  CreateOrderRequest,
  fetchPagedOrdersRequest,
  singleOrderRequest,
  updateOrderRequest,
} from "../../../../api/orders";
import { OrdersState, OrderThunkConfig } from "../../../../types";

const initialState = {
  orders: [],
  order: {
    id: "",
    name: "",
    address: "",
    phone: "",
    expectAt: 0,
    createdAt: "",
    delivered: "",
    products: [{ id: "", name: "", cartQuantity: 0, price: 0, image: "" }],
  },
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

export const fetchSingleOrder = createAsyncThunk(
  "orders/fetchSingleOrder",
  singleOrderRequest
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  ({ id, UpdatedOrder }: OrderThunkConfig) =>
    updateOrderRequest(id, UpdatedOrder)
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
    // read single order
    builder.addCase(fetchSingleOrder.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchSingleOrder.fulfilled, (state, action) => {
      return { ...state, loading: false, order: action.payload };
    });
    builder.addCase(fetchSingleOrder.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
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

    // update order
    builder.addCase(updateOrder.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updateOrder.fulfilled, (state, _) => {
      return { ...state, loading: false };
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });
  },
});

export default ordersSlice.reducer;
