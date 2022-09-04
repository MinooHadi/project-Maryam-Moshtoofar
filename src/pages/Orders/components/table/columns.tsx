import type { ColumnsType } from "antd/es/table";

import { Order } from "../../../../types";

export const columns: ColumnsType<Order> = [
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
    sorter: true,
    key: "createdAt",
  },
  {
    title: "وضعیت",
    dataIndex: "delivered",
    filters: [
      { text: "ارسال شده", value: true },
      { text: "در حال انتظار", value: false },
    ],
    render: (_, record) =>
      record.delivered === "true" ? (
        <span>ارسال شده</span>
      ) : (
        <div>در انتظار</div>
      ),
    key: "delivered",
  },
  {
    title: "عملیات",
    key: "action",
    render: () => <a>بررسی سفارش</a>,
  },
];

// export type Order = {
//   id: string;
//   name: string;
//   address: string;
//   phone: string;
//   expectAt: string;
//   createdAt: string;
//   delivered: boolean;
//   products: [
//     {
//       id: string;
//       name: string;
//       count: number;
//       price: number;
//       image: string;
//     }
//   ];
// };
