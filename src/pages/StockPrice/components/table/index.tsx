import { Table, TablePaginationConfig, Image } from "antd";
import convertToPersian from "num-to-persian";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/admin/products/productsSlice";
import { fetchCategories } from "../../../../redux/features/admin/categories/categoriesSlice";
import { SorterResult } from "antd/lib/table/interface";
import { Product } from "../../../../types";
import { BASE_URL } from "../../../../config/api";
import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductTable: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    _page: "1",
    _limit: "5",
  });
  const state = useAppSelector((state) => state.products);
  const { categories } = useAppSelector((state) => state.categories);
  const queryParams = useAppSelector((state) => state.products.queryParams);
  const loading = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts(searchParams));
    dispatch(fetchCategories());
  }, [searchParams]);

  const showCategory = (productCat: string) => {
    const cat = categories.find(
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
        <Image width={200} src={`${BASE_URL}/files/${record.image[0]}`} />
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
      title: "موجودی",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: string) => convertToPersian(text),
    },
  ];
  const dispatch = useAppDispatch();

  const handleTableChange = (
    newPagination: TablePaginationConfig,
  ) => {
    searchParams.set("_page", String(newPagination.current));
    setSearchParams(searchParams);
    dispatch(fetchProducts(searchParams));
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
