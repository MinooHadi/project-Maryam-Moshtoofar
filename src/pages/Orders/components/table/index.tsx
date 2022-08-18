import { Table } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchOrders } from "../../../../redux/features/orders/ordersSlice";
import { v4 as uuidv4 } from "uuid";

const OrdersTable: React.FC = () => {
  const State = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  });

  return (
    <Table columns={columns} dataSource={State.orders} rowKey={uuidv4()} />
  );
};

export default OrdersTable;
