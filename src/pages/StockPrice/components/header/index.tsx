import { Typography, Row, Col } from "antd";
import React from "react";
const { Title } = Typography;
const Header: React.FC = () => {
  return (
    <Row className="addProduct">
      <Col>
        <Title>مدیریت موجودی و قیمت ها</Title>
      </Col>
    </Row>
  );
};

export default Header;
