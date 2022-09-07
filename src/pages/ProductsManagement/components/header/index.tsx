import { Typography, Row, Col, Button } from "antd";
import { useState } from "react";
import AddProduct from "../addModal";

const { Title } = Typography;

const ProductHeader: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <Row className="addProduct">
      <Col>
        <Title>مدیریت کالاها</Title>
      </Col>
      <Col>
        <Button className="addbtn" type="primary" onClick={handleClick}>
          افزودن کالا
        </Button>
        <AddProduct showModal={showModal} setShowModal={setShowModal} />
      </Col>
    </Row>
  );
};

export default ProductHeader;
