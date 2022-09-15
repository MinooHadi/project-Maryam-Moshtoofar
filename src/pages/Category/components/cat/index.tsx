import { Col, Typography } from "antd";

import ProductCard from "../../../../components/productCard";
import { useAppSelector } from "../../../../redux/hooks";
const { Title } = Typography;
const Category = () => {
  const { products } = useAppSelector((state) => state.products);
  const { category } = useAppSelector((state) => state.categories);
  return (
    <Col>
      <Title>{category.name}</Title>
      {products.map((product) => (
          <ProductCard product={product} key={product.id} />
      ))}
    </Col>
  );
};

export default Category;
