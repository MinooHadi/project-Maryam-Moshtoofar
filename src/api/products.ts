import { PRODUCTS_URL } from "../config/api";
import axiosPrivate from "./http";
import { Product } from "../types";
import { URLSearchParams } from "url";
import { generateTableConfig } from "../utils";
let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};
// GET Paginated Data
export const PagedProductsRequest = async (params: URLSearchParams) => {
  let count: number;
  try {
    const response = await axiosPrivate.get<Product[]>(
      `${PRODUCTS_URL}?${params.toString()}`
    );

    count = await (await axiosPrivate.get<Product[]>(PRODUCTS_URL)).data.length;
    if (params.get("category")) {
      count = await (
        await axiosPrivate.get<Product[]>(
          `${PRODUCTS_URL}?category=${params.get("category")}`
        )
      ).data.length;
    }

    return {
      products: response.data,
      queryParams: generateTableConfig(params, count),
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
