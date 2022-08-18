import Filters from "./components/filters";
import OrdersTable from "./components/table";
const Orders: React.FC = () => {
  return (
    <>
      <Filters />
      <OrdersTable />
    </>
  );
};

export default Orders;
