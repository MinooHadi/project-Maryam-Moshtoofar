import { PRODUCTS_URL, CATEGORIES_URL, PRODUCTS_COUNT_URL } from "../config/api";
import axiosPrivate from "./http";
import { Product, Category, Params } from "../types";
import { GenerateParams } from "../utils";
import qs from "qs";
let store:any

export const injectStore = (_store:any) => {
  store = _store
}

export const fetchPagedProductsRequest = async (params: Params = {}) => {
  try {

    const response = await axiosPrivate.get<Product[]>(
      `${PRODUCTS_URL}?${qs.stringify(GenerateParams(params))}`
    );
    const {data} = await axiosPrivate.get<Product[]>(PRODUCTS_URL);

    return {
      products: response.data,
      count: data.length,
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


export const createProductRequest = async (newProduct:Product) => {
  try {
    const response = await axiosPrivate.post(PRODUCTS_URL, newProduct);
    const {data} = await axiosPrivate.get<Product[]>(PRODUCTS_URL);
    return{
      product:response.data,
      count :data.length
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchSingleProduct = async (id:number) => {
  try {
    const response = await axiosPrivate.get<Product[]>(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};