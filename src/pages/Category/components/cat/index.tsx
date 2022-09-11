import { Col, Typography } from "antd";
import { Link } from "react-router-dom";
import ProductCard from "../../../../components/productCard";
import { useAppSelector } from "../../../../redux/features/hooks";
const { Title } = Typography;
const Category = () => {
  const { products } = useAppSelector((state) => state.products);
  const { category } = useAppSelector((state) => state.categories);
  return (
    <Col>
      <Title>{category.name}</Title>
      {products.map((product) => (
        <Link key={product.id} to={`/product${product.id}`}>
          <ProductCard product={product} key={product.id} />
        </Link>
      ))}
    </Col>
  );
};

export default Category;
