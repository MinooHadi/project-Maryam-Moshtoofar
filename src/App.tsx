import "./App.css";
import AppRoutes from "./routes";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  return (
    <ConfigProvider direction="rtl">
      <AppRoutes />
    </ConfigProvider>
  );
};

export default App;
