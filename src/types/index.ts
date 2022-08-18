import store from "../redux/store";

export type Order = {
  key: string;
  name: string;
  address: string;
  phone: string;
  expectAt: string;
  createdAt: string;
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

export type Orders = {
  orders: Order[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
