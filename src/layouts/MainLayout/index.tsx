import React from "react";
import "antd/dist/antd.min.css";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import UserHeader from "../Header";
const { Content, Footer } = Layout;
const MainLayout: React.FC = () => {
  return (
    <>
      <Layout>
        <UserHeader />
        <Content
          style={{
            padding: "0 50px",
            marginTop: 154,
          }}
        >
          <Outlet />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
