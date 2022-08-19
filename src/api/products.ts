import { PRODUCTS_URL , CATEGORIES_URL } from "../config/api";
import axios from "../api/axios";
import { Product , Category } from "../types";

export const fetchAllProductsRequest = async () => {
  try {
    const response = await axios.get<Product[]>(PRODUCTS_URL);
    return response.data;
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
  