import { Pagination, PaginationProps, Row } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../redux/features/admin/categories/categoriesSlice";
import { fetchProducts } from "../../redux/features/admin/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import Category from "./components/cat";
import Sidebar from "./components/sider";

const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { queryParams } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ ...queryParams, category: id }));
    dispatch(fetchCategory(id));
  }, [id]);

  const { current, pageSize, total } = queryParams.pagination;
  console.log(total);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(
      fetchProducts({
        ...queryParams,
        pagination: { ...queryParams.pagination, current: page },
        category: id,
      })
    );
  };

  return (
    <Row>
      <Category />
      <Sidebar />
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
      />
    </Row>
  );
};

export default CategoryPage;
