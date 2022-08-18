import React from "react";
import AdminHeader from "../AdminHeader";
import { Outlet } from "react-router-dom";
import Layout, { Content } from "antd/lib/layout/layout";

const AdminLayout: React.FC = () => {
  return (
    <>
      <Layout>
        <AdminHeader />
        <Content
          style={{
            padding: "0 50px",
            marginTop: 154,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default AdminLayout;
