import { Order } from "../../../../types";
export const columns = [
  {
    title: "نام کاربر",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "مجموع مبلغ",
    dataIndex: "prices",
    key: "prices",
  },
  {
    title: "زمان ثبت سفارش",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "عملیات",
    key: "action",
    render: () => <a>بررسی سفارش</a>,
  },

  {
    title: "stats",
    dataIndex: "delivered",
    key: "delivered",
  },
];
