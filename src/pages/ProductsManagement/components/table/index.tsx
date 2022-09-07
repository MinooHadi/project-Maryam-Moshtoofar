import { Table, TablePaginationConfig } from "antd";

import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/admin/products/productsSlice";
import {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/lib/table/interface";
import { Category, Product } from "../../../../types";
import { fetchCategories } from "../../../../redux/features/admin/categories/categoriesSlice";
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

  const columns: ColumnsType<Product> = [
    {
      title: "تصویر",
      dataIndex: "image",
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
      title: "دسته بندی",
      dataIndex: "category",
      key: "category",
      sorter: (a: any, b: any) => b.category - a.category,
      render: (_: any, record: Product) => showCategory(record.category),
    },
    {
      title: "عملیات",
      key: "action",
      render: () => (
        <>
          <a> ویرایش</a>

          <a> حذف</a>
        </>
      ),
    },
  ];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(queryParams));
    dispatch(fetchCategories());
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
