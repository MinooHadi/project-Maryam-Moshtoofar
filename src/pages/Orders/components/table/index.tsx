import { Table, TablePaginationConfig } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import { fetchOrders } from "../../../../redux/features/orders";
import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { Order } from "../../../../types";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";

const OrdersTable: React.FC = () => {
  const state = useAppSelector((state) => state.orders);
  const loading = useAppSelector((state) => state.orders.loading);
  const queryParams = useAppSelector((state) => state.orders.queryParams);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders(queryParams));
  }, []);

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<Order> | SorterResult<Order[]>
  ) => {
    dispatch(
      fetchOrders({
        pagination: newPagination,
        sortField: sorter.field as string,
        sortOrder: sorter.order?.substring(
          0,
          sorter.order?.length - 3
        ) as string,
        ...filters,
      })
    );
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={[...state.orders]}
        rowKey={(order) => order.id}
        pagination={queryParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
};

export default OrdersTable;
