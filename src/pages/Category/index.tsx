import { Anchor, Button, Col, Divider, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/productCard";
import { fetchCategories } from "../../redux/features/admin/categories/categoriesSlice";
import { fetchProducts } from "../../redux/features/admin/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { Category } from "../../types";
const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts({ category: id }));
    dispatch(fetchCategories()).then((res) => {
      const categories: any = res.payload;
      console.log(categories);
      const selectedCategory = categories.find(
        (category: Category) => category.id === Number(id)
      );
      setCategory(selectedCategory.name);
    });
  }, [id]);
  const { Title, Text } = Typography;
  const AntDLink = Anchor.Link;
  return (
    <Row>
      <Col>
        <Typography.Title>{category}</Typography.Title>
        {products.map((product) => (
          <Link key={product.id} to={`/product${product.id}`}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
      </Col>
      <Col>
        <Title level={2}>سبد خرید</Title>
        <Title level={5}>تعداد</Title>
        <Title level={4}>جمع سبد خرید </Title>
        <Divider />
        <Row>
          <Button>مشاهده سبد خرید</Button>
          <Button>ثبت سفارش</Button>
        </Row>
        <Divider />
        <Typography.Title level={2}>دسته بندی</Typography.Title>

        <Anchor>
          <AntDLink href="#" title="قهوه ترک" />
          <AntDLink href="#" title="قهوه دمی و اسپرسو" />
          <AntDLink href="#" title="لوازم جانبی" />
          <AntDLink href="#" title="قهوه فوری و شکلات" />
        </Anchor>
      </Col>
    </Row>
  );
};

export default CategoryPage;
