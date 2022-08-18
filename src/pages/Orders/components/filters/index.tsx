import { Typography, Row, Col } from "antd";
import { Radio } from "antd";
const { Title } = Typography;
const Filters: React.FC = () => {
  return (
    <Row>
      <Col>
        <Title>مدیریت سفارشات</Title>
      </Col>
      <Col>
        <Radio.Group>
          <Radio value={1}>سفارش های تحویل شده</Radio>
          <Radio value={2}>سفارش های در انتظار ارسال</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default Filters;
