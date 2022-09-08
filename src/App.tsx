import "./App.css";
import AppRoutes from "./routes";
import { ConfigProvider } from "antd";
import React from "react";

const App = () => {
  return (
    <ConfigProvider direction="rtl">
      <AppRoutes />
    </ConfigProvider>
  );
};

export default App;
