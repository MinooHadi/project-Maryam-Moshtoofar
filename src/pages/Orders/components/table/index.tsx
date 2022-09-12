import { Table, TablePaginationConfig } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import { fetchOrders } from "../../../../redux/features/admin/orders/OrdersSlice";
import { FilterValue } from "antd/lib/table/interface";
import { useSearchParams } from "react-router-dom";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";

const OrdersTable: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    _page: "1",
    _limit: "5",
  });
  const { orders } = useAppSelector((state) => state.orders);
  const loading = useAppSelector((state) => state.orders.loading);
  const queryParams = useAppSelector((state) => state.orders.queryParams);

  const dispatch = useAppDispatch();

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
    </>
  );
};

export default OrdersTable;
