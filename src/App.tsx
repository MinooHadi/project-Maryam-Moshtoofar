import "./App.css";
import AllRoutes from "./routes";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  return (
    <ConfigProvider direction="rtl">
      <AllRoutes />
    </ConfigProvider>
  );
};

export default App;
