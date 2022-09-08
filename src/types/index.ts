import { Dispatch, SetStateAction } from "react";
import store from "../redux/store";
import type { TablePaginationConfig } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";

export type Product = {
  id: number;
  name: string;
  category:1 | 2 | 3 |4;
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
  id: number;
  name: string;
  icon: string;
};

export type OrdersState = {
  orders: Order[];
  loading: boolean;
  error: string;
  queryParams: {
    pagination: TablePaginationConfig;
    sortField: string | undefined;
    sortOrder: string | undefined;
  };
};

export type ProductsState = {
  products: Product[];
  productsCount: number;
  loading: boolean;
  error: string;
  queryParams: {
    pagination: TablePaginationConfig;
    sortField: string | undefined;
    sortOrder: string | undefined;
  };
};

export type CategoriesState = {
  categories: Category[];
  loading: boolean;
  error: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ProductManagementProps = {
  editMode:boolean
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setEditMode:Dispatch<SetStateAction<boolean>>
  modalOptions:ModalOptions,
  setModalOptions:Dispatch<SetStateAction<ModalOptions>>
};

export type ModalOptions = {
  modalTitle:string 
}


export interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
  delivered?: string[];
}


export type LoginState = {
  isLoggedIn:boolean
  error: string;
};

export type User = {
  username:string;
  password:string
}