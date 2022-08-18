import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "نام کاربر",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "مجموع مبلغ",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "زمان ثبت سفارش",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "عملیات",
    key: "action",
    render: () => <a>بررسی سفارش</a>,
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const OrdersTable: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default OrdersTable;
