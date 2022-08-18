import { ORDERS_URL } from "../config/api";
import axios from "../api/axios";
import { Order } from "../types";

export const fetchAllOrdersRequest = async () => {
  try {
    const response = await axios.get<Order[]>(ORDERS_URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
