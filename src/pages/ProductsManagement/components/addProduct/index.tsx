import { Typography, Row, Col, Button } from "antd";
const { Title } = Typography;
const AddProduct: React.FC = () => {
  return (
    <Row>
      <Col>
        <Title>مدیریت کالاها</Title>
      </Col>
      <Col>
        <Button>افزودن کالا</Button>
      </Col>
    </Row>
  );
};

export default AddProduct;
