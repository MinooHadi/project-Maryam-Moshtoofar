import { Typography, Row, Col, Button } from "antd";
const { Title } = Typography;
const AddProduct: React.FC = () => {
  return (
    <Row className="addProduct">
      <Col>
        <Title>مدیریت کالاها</Title>
      </Col>
      <Col>
        <Button className="addbtn" type="primary">افزودن کالا</Button>
      </Col>
    </Row>
  );
};

export default AddProduct;
