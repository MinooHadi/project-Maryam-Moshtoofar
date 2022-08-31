import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_MANAGEMENT_ROUTE } from "../../config/routes";
import { params } from "../../config/variables";
import { validationRules } from "./validation";
const { Title } = Typography;

const Login: React.FC = () => {
  let navigate = useNavigate();

  const onFinish = () => {
    navigate(`${PRODUCTS_MANAGEMENT_ROUTE}${params}`, { replace: true });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formContainer">
      <Title>ورود به پنل مدیریت فروشگاه</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="loginForm"
      >
        <Form.Item
          label="نام کاربری"
          name="username"
          rules={validationRules.userName}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="رمز عبور"
          name="password"
          rules={validationRules.password}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            ورود
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
