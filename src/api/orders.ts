import { COUNT_URL, ORDERS_URL } from "../config/api";
import axios from "../api/axios";
import { Order } from "../types";

export const fetchPagedOrdersRequest = async (params: string) => {
  try {
    const response = await axios.get<Order[]>(`${ORDERS_URL}${params}`);
    const countResponse = await axios.get(COUNT_URL);
    return { orders: response.data, count: countResponse.data.orders };
  } catch (error) {
    return Promise.reject(error);
  }
};
