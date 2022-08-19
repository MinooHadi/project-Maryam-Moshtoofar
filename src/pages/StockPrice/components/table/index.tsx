import { Table } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/products";
const ProductTable: React.FC = () => {
  const productsState = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);
  const tableData = [productsState.products, categoriesState.categories];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Table columns={columns} dataSource={productsState.products} rowKey="id" />
  );
};

export default ProductTable;
