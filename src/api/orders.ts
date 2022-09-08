import { ORDERS_COUNT_URL, ORDERS_URL } from "../config/api";
import axiosPrivate from "./http";
import { Order } from "../types";
import { Params } from "../types";
import qs from "qs";

import { GenerateParams } from "../utils";

export const fetchPagedOrdersRequest = async (params: Params = {}) => {


  try {
    const response = await axiosPrivate.get(
      `${ORDERS_URL}?${qs.stringify(GenerateParams(params))}`
    );
    const countResponse = await axiosPrivate.get(ORDERS_COUNT_URL);

    return {
      orders: response.data,
      count: countResponse.data.orders,
      queryParams: params,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};
