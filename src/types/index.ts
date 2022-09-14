import { Dispatch, SetStateAction } from "react";
import store from "../redux/store";
import type { TablePaginationConfig } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";
import { URLSearchParamsInit } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string[];
  price: number;
  quantity: number;
  createdAt: number;
  description: string;
};

export type Order = {
  id: string;
  name: string;
  address: string;
  phone: string;
  expectAt: string;
  createdAt: string;
  delivered: string;
  products: [
    {
      id: string;
      name: string;
      count: number;
      price: number;
      image: string;
    }
  ];
};

export type OrderData = {
  totalOrdersCount: number;
  ordersList: Order[];
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type OrdersState = {
  orders: Order[];
  loading: boolean;
  error: string;
  queryParams: {
    pagination: TablePaginationConfig;
    sortField: string | null;
    sortOrder: string | null;
  };
};

export type ProductsState = {
  products: Product[];
  product: any;
  productsCount: number;
  loading: boolean;
  error: string;
  queryParams: {
    pagination: TablePaginationConfig;
    sortField: string | null;
    sortOrder: string | null;
  };
};

export type CategoriesState = {
  categories: Category[];
  category: Category;
  loading: boolean;
  error: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ProductManagementProps = {
  editMode: boolean;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  formFields: FormFields;
  setFormFields: Dispatch<SetStateAction<FormFields>>;
  selectedProductID: number | null;
  setSelectedProductID: Dispatch<SetStateAction<number | null>>;
  searchParams: URLSearchParams;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void;
};

export type DeleteModalProps = {
  selectedProduct: number;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export type FormFields = {
  modalTitle: string;
  Inputs: Product;
};

export interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
  delivered?: string[];
  category?: string;
}

export type LoginState = {
  isLoggedIn: boolean;
  error: string;
};

export type User = {
  username: string;
  password: string;
};

export type asyncThunkConfig = {
  id: number;
  editedProduct: Product;
};

export type ProductCardProps = {
  product: Product;
};
