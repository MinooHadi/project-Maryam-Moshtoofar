import { PRODUCTS_URL, CATEGORIES_URL, COUNT_URL } from "../config/api";
import axiosPrivate from "./http";
import { Product, Category, Params } from "../types";
import { GenerateParams } from "../utils";
import qs from "qs";
export const fetchPagedProductsRequest = async (params: Params = {}) => {
  try {
    const response = await axiosPrivate.get<Product[]>(
      `${PRODUCTS_URL}?${qs.stringify(GenerateParams(params))}`
    );
    const countResponse = await axiosPrivate.get(COUNT_URL);
    return {
      products: response.data,
      count: countResponse.data.products,
      queryParams: params,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchAllCategoriesRequest = async () => {
  try {
    const response = await axiosPrivate.get<Category[]>(CATEGORIES_URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
