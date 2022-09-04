import type { ColumnsType } from "antd/es/table";
import { Order } from "../../../../types";
import convertToPersian from "num-to-persian";
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
    render: (text) =>
      convertToPersian(
        `${text.toLocaleString("fa-IR", { maximumFractionDigits: 2,})}  تومان`
      ),
  },
  {
    title: "زمان ثبت سفارش",
    dataIndex: "createdAt",
    sorter: true,
    key: "createdAt",
    render: (_, record) =>
      new Date(record.createdAt).toLocaleDateString("fa-IR"),
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
