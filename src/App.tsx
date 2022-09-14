import "./App.css";
import AppRoutes from "./routes";
import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import React from "react";

const App = () => {
  return (
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <AppRoutes />
    </ConfigProvider>
  );
};

export default App;
