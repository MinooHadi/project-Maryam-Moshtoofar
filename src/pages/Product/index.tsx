import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();
  return <div>{`Product ${id}`}</div>;
};

export default Product;
