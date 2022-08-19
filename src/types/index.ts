import store from "../redux/store";

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
  delivered: boolean;
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


export type Category = {
  id: number;
  name: string;
  icon: string;
};

export type OrdersState = {
  orders: Order[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
};

export type ProductsState = {
  products: Product[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
};

export type CategoriesState = {
  categories: Category[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
