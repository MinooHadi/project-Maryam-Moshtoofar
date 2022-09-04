import { Table, TablePaginationConfig } from "antd";

import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/products";
import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { Product } from "../../../../types";
import { BASE_URL } from "../../../../config/api";

const ProductTable: React.FC = () => {
  const state = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);
  const queryParams = useAppSelector((state) => state.products.queryParams);
  const loading = useAppSelector((state) => state.products.loading);

  const showCategory = (productCat: number) => {
    const cat = categoriesState.categories.find(
      (category) => category.id === productCat
    );
    return cat?.name;
  };

  const columns = [
    {
      title: "تصویر",
      dataIndex: "",
      key: "thumbnail",
      render: (_: string, record: Product) => (
        <img src={`${BASE_URL}/files/${record.thumbnail}`} />
      ),
    },
    {
      title: "نام کالا",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "قیمت",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "دسته بندی",
      dataIndex: "category",
      key: "category",
      sorter: (a: any, b: any) => b.category - a.category,
      render: (_: any, record: Product) => showCategory(record.category),
    },
    {
      title: "موجودی",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  const dispatch = useAppDispatch();

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
  useEffect(() => {
    dispatch(fetchProducts(queryParams));
  }, []);

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
