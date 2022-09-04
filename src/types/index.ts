import { Dispatch, SetStateAction } from "react";
import store from "../redux/store";
import type { TablePaginationConfig } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";

export type Product = {
  id: number;
  name: string;
  category: number;
  image: string[];
  thumbnail: string;
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
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AdminHeaderProps = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
  delivered?: string[];
}

//   queryParams: {

//   };
//   pagination?: TablePaginationConfig;
//   sorter?: SorterResult<any> | SorterResult<any>[];
//   total?: number;
//   sortField?: string;
//   sortOrder?: string;
// }
