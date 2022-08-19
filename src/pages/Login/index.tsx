import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const Login: React.FC = () => {
  let navigate = useNavigate();
  const onFinish = (values: any) => {
    if (values.username === "admin" && values.password === "admin")
      navigate("/admin/products", { replace: true });
    else alert("Wrong UserName or Password");
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
          rules={[{ required: true, message: "نام کاربری الزامی است" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="رمز عبور"
          name="password"
          rules={[{ required: true, message: "رمز عبور الزامی است" }]}
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
