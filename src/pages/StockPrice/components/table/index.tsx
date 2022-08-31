import { Table } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/products";
import { usePagination } from "../../../../hooks";

const ProductTable: React.FC = () => {
  const productsState = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);
  let count = useAppSelector((state) => state.products.productsCount);
  const tableData = [productsState.products, categoriesState.categories];

  const dispatch = useAppDispatch();

  // Pagination
  const { params, pagination } = usePagination(count);

  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [params]);

  return (
    <Table
      pagination={pagination}
      columns={columns}
      dataSource={productsState.products}
      rowKey="id"
    />
  );
};

export default ProductTable;
