import { Table } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchOrders } from "../../../../redux/features/orders";
import { usePagination } from "../../../../hooks";

const OrdersTable: React.FC = () => {
  const state = useAppSelector((state) => state.orders);
  let count = useAppSelector((state) => state.orders.ordersCount);

  const dispatch = useAppDispatch();

  // Pagination
  const { params, pagination } = usePagination(count);

  useEffect(() => {
    dispatch(fetchOrders(params));
  }, [params]);

  return (
    <Table
      columns={columns}
      dataSource={state.orders}
      rowKey="id"
      pagination={pagination}
    />
  );
};

export default OrdersTable;
