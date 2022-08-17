import { Layout, Menu, Col, Row, Input } from "antd";
import { NavLink } from "react-router-dom";
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
              {
                label: <NavLink to="login">مدیریت</NavLink>,
                key: "item-1",
              },
              {
                label: "دسته بندی",
                key: "item-2",
                children: [
                  {
                    label: <NavLink to="category2">پودر و دانه قهوه</NavLink>,
                    key: "cat:1",
                  },
                  {
                    label: <NavLink to="category3">قهوه فوری</NavLink>,
                    key: "cat:2",
                  },
                  {
                    label: <NavLink to="category4">پکیج های قهوه</NavLink>,
                    key: "cat:3",
                  },
                  {
                    label: (
                      <NavLink to="category5">قهوه ساز و لوازم جانبی</NavLink>
                    ),
                    key: "cat:4",
                  },
                ],
              },
              { label: "بلاگ", key: "item-3", disabled: true },
              {
                label: "صفحات",
                key: "item-4",
                children: [
                  {
                    label: "درباره ما",
                    key: "page:1",
                    disabled: true,
                  },
                  {
                    label: "تماس با ما",
                    key: "page:2",
                    disabled: true,
                  },
                  {
                    label: "سوالات متداول",
                    key: "page:3",
                    disabled: true,
                  },
                ],
              },
            ]}
            theme="light"
            mode="horizontal"
          />
        </Col>
        <Col className="span" span={5}>
          <NavLink to="#">
            <UserOutlined />
          </NavLink>
          <NavLink to="#">
            <HeartOutlined />
          </NavLink>
          <NavLink to="cart">
            <ShoppingOutlined />
          </NavLink>
        </Col>
      </Row>
    </Header>
  );
};

export default UserHeader;
