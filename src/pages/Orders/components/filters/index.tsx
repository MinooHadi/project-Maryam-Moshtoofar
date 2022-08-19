import { Typography, Row, Col } from "antd";
import { Radio } from "antd";
import { useAppDispatch } from "../../../../redux/features/hooks";
import {
  deliveredOrders,
  fetchOrders,
  pendingOrders,
} from "../../../../redux/features/orders";

const { Title } = Typography;

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleChange = (val: number) => {
    switch (val) {
      case 1:
        dispatch(fetchOrders());
        break;
      case 2:
        dispatch(deliveredOrders());
        break;
      case 3:
        dispatch(pendingOrders());
        break;
    }
  };

  return (
    <Row className="addProduct">
      <Col>
        <Title>مدیریت سفارشات</Title>
      </Col>
      <Col>
        <Radio.Group>
          <Radio value={1} onClick={() => handleChange(1)}>
            همه
          </Radio>
          <Radio value={2} onClick={() => handleChange(2)}>
            سفارش های تحویل شده
          </Radio>
          <Radio value={3} onClick={() => handleChange(3)}>
            سفارش های در انتظار ارسال
          </Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default Filters;
