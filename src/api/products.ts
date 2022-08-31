import { PRODUCTS_URL, CATEGORIES_URL, COUNT_URL } from "../config/api";
import axios from "../api/axios";
import { Product, Category } from "../types";
import products from "../redux/features/products";

export const fetchPagedProductsRequest = async (params: string) => {
  try {
    const response = await axios.get<Product[]>(`${PRODUCTS_URL}${params}`);
    const countResponse = await axios.get(COUNT_URL);
    return { products: response.data, count: countResponse.data.products };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchAllCategoriesRequest = async () => {
  try {
    const response = await axios.get<Category[]>(CATEGORIES_URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
