import { Table, TablePaginationConfig , Image} from "antd";
import convertToPersian from "num-to-persian";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/admin/products/productsSlice";
import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { Product } from "../../../../types";
import { BASE_URL } from "../../../../config/api";
import React from "react";

const ProductTable: React.FC = () => {
  const state = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);
  const queryParams = useAppSelector((state) => state.products.queryParams);
  const loading = useAppSelector((state) => state.products.loading);

  const showCategory = (productCat: string) => {
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
        <Image width={200} src={`${BASE_URL}/files/${record.image[0]}`}/>
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
      render: (text: any) =>
        convertToPersian(
          text.toLocaleString("fa-IR", { maximumFractionDigits: 2 })
        ),
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
      render: (text: string) => convertToPersian(text),
    },
  ];
  const dispatch = useAppDispatch();

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<Product> | SorterResult<Product[]>
  ) => {
    // dispatch(
    //   fetchProducts({
    //     pagination: newPagination,
    //     sortField: sorter.field as string,
    //     sortOrder: sorter.order?.substring(
    //       0,
    //       sorter.order?.length - 3
    //     ) as string,
    //     ...filters,
    //   })
    // );
  };
  useEffect(() => {
    // dispatch(fetchProducts(queryParams));
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
