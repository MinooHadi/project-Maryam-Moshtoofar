import SaveChanges from "./components/saveChanges";
import StockPriceTable from "./components/table";

const ProductsManagement: React.FC = () => {
  return (
    <>
      <SaveChanges />
      <StockPriceTable />
    </>
  );
};

export default ProductsManagement;
