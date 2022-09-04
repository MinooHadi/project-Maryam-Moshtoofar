import { Typography } from "antd";
import OrdersTable from "./components/table";
const Orders: React.FC = () => {
  return (
    <>
      <Typography.Title> مدیریت سفارشات</Typography.Title>
      <OrdersTable />
    </>
  );
};

export default Orders;
