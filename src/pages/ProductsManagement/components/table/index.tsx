import { Table, TablePaginationConfig } from "antd";
import { columns } from "./columns";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/products";
import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { Product } from "../../../../types";

const ProductTable: React.FC = () => {
  const state = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);
  const queryParams = useAppSelector((state) => state.products.queryParams);
  const loading = useAppSelector((state) => state.products.loading);
  const tableData = [state.products, categoriesState.categories];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(queryParams));
  }, []);

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<Product> | SorterResult<Product[]>
  ) => {
    dispatch(
      fetchProducts({
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
    <Table
      columns={columns}
      dataSource={[...state.products]}
      rowKey={(product) => product.id}
      pagination={queryParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default ProductTable;
