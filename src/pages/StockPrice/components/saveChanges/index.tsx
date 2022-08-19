import { Typography, Row, Col, Button } from "antd";
const { Title } = Typography;
const SaveChanges: React.FC = () => {
  return (
    <Row>
      <Col>
        <Title>مدیریت موجودی و قیمت ها</Title>
      </Col>
      <Col>
        <Button disabled>ذخیره</Button>
      </Col>
    </Row>
  );
};

export default SaveChanges;
