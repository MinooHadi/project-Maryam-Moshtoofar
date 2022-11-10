import React from "react";
import "antd/dist/antd.min.css";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../c-header";
import Footer from "../c-footer";
const { Content } = Layout;
const MainLayout: React.FC = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content
          style={{
            padding: "0 50px",
            marginTop: 154,
          }}
        >
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default MainLayout;
