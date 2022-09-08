import { Typography, Row, Col, Button } from "antd";
import ProductModal from "../modal";

const { Title } = Typography;

const ProductHeader = (props: any) => {
const { editMode,setShowModal , setEditMode} = props

  const handleClick = () => {
    console.log("add",editMode);
    setEditMode(false)
    setShowModal(true);
  };
  return (
    <Row className="addProduct">
      <Col>
        <Title>مدیریت کالاها</Title>
      </Col>
      <Col>
        <Button type="primary" onClick={handleClick}>
          افزودن کالا
        </Button>
        
      </Col>
    </Row>
  );
};

export default ProductHeader;
