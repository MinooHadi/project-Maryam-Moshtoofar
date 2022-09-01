import { Typography, Row, Col } from "antd";
import { Radio } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePagination } from "../../../../hooks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/features/hooks";
import { fetchOrders } from "../../../../redux/features/orders";

const { Title } = Typography;

const Filters: React.FC = () => {
  const { orders } = useAppSelector((state) => state.orders);
  const [showAll, setShowAll] = useState(true);
  const [newParams, setNewParams] = useState(`?_page=1&_limit=5`);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.has("delivered")) {
      searchParams.delete("delivered");
      setSearchParams(searchParams);
    }
  }, [showAll]);

  useEffect(() => {
    dispatch(fetchOrders(newParams));
  }, [newParams]);

  const handleChange = (e: any) => {
    e.preventDefault();
    let updatedSearchParams = new URLSearchParams(searchParams.toString());

    switch (e.target.value) {
      case "all":
        setShowAll((prev) => !prev);
        break;
      case "delivered":
        updatedSearchParams.set("delivered", "true");
        break;
      case "pending":
        updatedSearchParams.set("delivered", "false");
        break;
    }
    setSearchParams(updatedSearchParams.toString());
    setNewParams(`?${searchParams.toString()}`);
  };

  return (
    <Row className="addProduct">
      <Col>
        <Title>مدیریت سفارشات</Title>
      </Col>
      <Col>
        <Radio.Group defaultValue={"all"}>
          <Radio value={"all"} onClick={(e) => handleChange(e)}>
            همه
          </Radio>
          <Radio value={"delivered"} onClick={(e) => handleChange(e)}>
            سفارش های تحویل شده
          </Radio>
          <Radio value={"pending"} onClick={(e) => handleChange(e)}>
            سفارش های در انتظار ارسال
          </Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default Filters;
