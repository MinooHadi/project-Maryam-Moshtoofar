import { Layout, Menu, Col, Row, Input } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React from "react";
import Logo from "../../assets/images/logo.png";

const { Header } = Layout;
const suffix = <SearchOutlined style={{ fontSize: 16 }} />;

const UserHeader: React.FC = () => {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: "0",
        backgroundColor: "transparent",
      }}
    >
      <Row className="Row">
        <Col className="span" span={4}>
          <img src={Logo} alt="logo" />
        </Col>
        <Col className="span" span={5}>
          <Input allowClear placeholder="جستجو" size="large" prefix={suffix} />
        </Col>
        <Col className="span" span={10}>
          <Menu
            style={{ backgroundColor: "transparent" }}
            items={[
              { label: "مدیریت", key: "item-1" },
              {
                label: "دسته بندی",
                key: "item-2",
                children: [
                  {
                    label: "پودر و دان قهوه",
                    key: "cat:1",
                  },
                  {
                    label: "قهوه فوری",
                    key: "cat:2",
                  },
                  {
                    label: "پکیج های قهوه",
                    key: "cat:3",
                  },
                  {
                    label: "قهوه ساز و لوازم جانبی",
                    key: "cat:4",
                  },
                ],
              },
              { label: "بلاگ", key: "item-3" },
              {
                label: "صفحات",
                key: "item-4",
                children: [
                  {
                    label: "درباره ما",
                    key: "page:1",
                  },
                  {
                    label: "تماس با ما",
                    key: "page:2",
                  },
                  {
                    label: "سوالات متداول",
                    key: "page:3",
                  },
                ],
              },
            ]}
            theme="light"
            mode="horizontal"
          />
        </Col>
        <Col className="span" span={5}>
          <UserOutlined />
          <HeartOutlined />
          <ShoppingOutlined />
        </Col>
      </Row>
    </Header>
  );
};

export default UserHeader;
