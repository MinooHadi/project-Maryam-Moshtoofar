import { Button, Table, TablePaginationConfig } from "antd";
import convertToPersian from "num-to-persian";
import { useEffect, useState } from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import {
  fetchOrders,
  fetchSingleOrder,
} from "../../../../redux/features/admin/orders/OrdersSlice";
import { ColumnsType, FilterValue } from "antd/lib/table/interface";
import { useSearchParams } from "react-router-dom";
import OrderModal from "../modal";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { Order } from "../../../../types";

const OrdersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    _page: "1",
    _limit: "5",
  });
  const { orders } = useAppSelector((state) => state.orders);
  const loading = useAppSelector((state) => state.orders.loading);
  const queryParams = useAppSelector((state) => state.orders.queryParams);
  const { order } = useAppSelector((state) => state.orders);
  const columns: ColumnsType<Order> = [
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
          `${text.toLocaleString("fa-IR", { maximumFractionDigits: 2 })}  تومان`
        ),
    },
    {
      title: "زمان ثبت سفارش",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: true,
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
          <>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <span> ارسال شده</span>
          </>
        ) : (
          <>
            <CloseCircleTwoTone twoToneColor="#e7001f" />
            <span>در انتظار </span>
          </>
        ),
      key: "delivered",
    },
    {
      title: "عملیات",
      key: "action",
      render: (_: string, record: Order) => (
        <Button onClick={() => handleClick(record.id)} type="primary">
          بررسی سفارش
        </Button>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchOrders(searchParams));
  }, [searchParams]);

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>
  ) => {
    if (filters.delivered?.length === 1)
      searchParams.set("delivered", String(filters.delivered[0]));
    else {
      searchParams.delete("delivered");
    }
    searchParams.set("_page", String(newPagination.current));
    setSearchParams(searchParams);
    dispatch(fetchOrders(searchParams));
  };

  const handleClick = (id: string) => {
    dispatch(fetchSingleOrder(id)).then(() => setIsModalOpen(true));
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={[...orders]}
        rowKey={(order) => order.id}
        pagination={queryParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
      <OrderModal
        order={order!}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default OrdersTable;
