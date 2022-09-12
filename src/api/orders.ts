import { ORDERS_COUNT_URL, ORDERS_URL } from "../config/api";
import axiosPrivate from "./http";
import { Order } from "../types";
import { Params } from "../types";
import qs from "qs";

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
