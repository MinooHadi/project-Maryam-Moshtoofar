import { useParams } from "react-router-dom";
const Category = () => {
  const { id } = useParams();
  return <div>{`Category ${id}`}</div>;
};

export default Category;
