import { Button, Form, Input, Typography } from "antd";
import { Navigate } from "react-router-dom";
import { ORDERS_ROUTE, } from "../../config/routes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/features/user/usersSlice";
import { User } from "../../types";
import { loginRules } from "./validation";
const { Title } = Typography;

const Login: React.FC = () => {

  const dispatch = useAppDispatch()
  const {error,isLoggedIn} = useAppSelector((state)=>state.user)

  const handleSubmit = async(values:User) => {
    dispatch(login(values))
  };

  if (isLoggedIn) return <Navigate to={ORDERS_ROUTE}></Navigate>
  
  return (
    <div className="formContainer">
      <Title>ورود به پنل مدیریت فروشگاه</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={(values)=>handleSubmit(values)}
        autoComplete="off"
        className="loginForm"
      >
        <Form.Item
          label="نام کاربری"
          name="username"
          rules={loginRules.userName}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="رمز عبور"
          name="password"
          rules={loginRules.password}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            ورود
          </Button>
        </Form.Item>
      </Form>
      {/* toast it later */}
      <Typography>{error && (<span>{error}</span>)}</Typography>
    </div>
  );
};

export default Login;
