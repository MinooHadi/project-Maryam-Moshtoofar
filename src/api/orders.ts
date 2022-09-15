import { ORDERS_URL } from "../config/api";
import axios, { axiosPrivate } from "./http";
import { Order } from "../types";

import { generateTableConfig } from "../utils";

// fetch Paginated Data
export const fetchPagedOrdersRequest = async (params: URLSearchParams) => {
  let count: number;
  try {
    const response = await axiosPrivate.get(
      `${ORDERS_URL}?${params.toString()}`
    );
    count = await (await axiosPrivate.get<Order[]>(ORDERS_URL)).data.length;

    return {
      orders: response.data,
      queryParams: generateTableConfig(params, count),
    };
  } catch (error) {
    return Promise.reject(error);
  }
};
// Read Single Order
export const singleOrderRequest = async (id: string) => {
  try {
    const response = await axios.get<Order>(`${ORDERS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Create Order
export const CreateOrderRequest = async (newOrder: Order) => {
  try {
    const response = await axiosPrivate.post(ORDERS_URL, newOrder);

    return {
      order: response.data,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

// PUT
export const updateOrderRequest = async (id: string, editedOrder: Order) => {
  try {
    const response = await axiosPrivate.put(`${ORDERS_URL}/${id}`, editedOrder);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
