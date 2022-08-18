import { Button, Form, Input } from "antd";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
  );
};

export default Login;
