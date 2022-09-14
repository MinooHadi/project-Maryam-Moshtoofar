import { Pagination, PaginationProps, Row, Col } from "antd";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCategory } from "../../redux/features/admin/categories/categoriesSlice";
import { fetchProducts } from "../../redux/features/admin/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import Category from "./components/cat";
import Sidebar from "./components/sider";

const CategoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { queryParams } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(searchParams));
    dispatch(fetchCategory(searchParams.get("category")!));
  }, [searchParams]);

  const { current, pageSize, total } = queryParams.pagination;

  const onChange: PaginationProps["onChange"] = (page) => {
    searchParams.set("_page", String(page));
    setSearchParams(searchParams);
  };

  return (
    <Row>
      <Col>
        <Category />
        {/* <Sidebar /> */}
        <Pagination
          current={current}
          pageSize={pageSize}
          total={total}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default CategoryPage;
