import { CATEGORIES_URL } from "../config/api";
import axiosPrivate from "./http";
import { Category } from "../types";

// GET All Categories
export const allCategoriesRequest = async () => {
  try {
    const response = await axiosPrivate.get<Category[]>(CATEGORIES_URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET single data
export const singleCategoryRequest = async (id: string = "1") => {
  try {
    const response = await axiosPrivate.get<Category>(
      `${CATEGORIES_URL}/${id}`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
