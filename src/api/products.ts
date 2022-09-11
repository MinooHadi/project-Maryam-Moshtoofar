import {
  PRODUCTS_URL,
  CATEGORIES_URL,
  PRODUCTS_COUNT_URL,
} from "../config/api";
import axiosPrivate from "./http";
import { Product, Category, Params } from "../types";
import { GenerateParams } from "../utils";
import qs from "qs";
let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};
// GET Paginated Data
export const PagedProductsRequest = async (params: Params = {}) => {
  console.log(params);
  let count: number;
  try {
    const response = await axiosPrivate.get<Product[]>(
      `${PRODUCTS_URL}?${qs.stringify(GenerateParams(params))}`
    );

    count = await (await (axiosPrivate.get<Product[]>(PRODUCTS_URL))).data.length;
    if (params.category) {
      count = await (
        await axiosPrivate.get<Product[]>(
          `${PRODUCTS_URL}?category=${params.category}`
        )
      ).data.length;
    }
    return {
      products: response.data,
      count: count,
      queryParams: params,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

// CREATE
export const createProductRequest = async (newProduct: Product) => {
  try {
    const response = await axiosPrivate.post(PRODUCTS_URL, newProduct);
    const { data } = await axiosPrivate.get<Product[]>(PRODUCTS_URL);
    return {
      product: response.data,
      count: data.length,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET single data
export const singleProductRequest = async (id: string) => {
  try {
    const response = await axiosPrivate.get<Product[]>(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// PUT
export const updateProductRequest = async (
  id: number,
  editedProduct: Product
) => {
  try {
    const response = await axiosPrivate.put(
      `${PRODUCTS_URL}/${id}`,
      editedProduct
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// DELETE Product

export const deleteProductRequest = async (id: number) => {
  try {
    const response = await axiosPrivate.delete(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
