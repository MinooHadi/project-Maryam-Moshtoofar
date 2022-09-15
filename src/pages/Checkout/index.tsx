import { Button, Form, Input, DatePicker } from "antd";
import { SetStateAction, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

const Checkout: React.FC = () => {
  const [expectAt, setExpectAt] = useState<SetStateAction<number>>();
  const { cartTotalAmount } = useAppSelector((state) => state.cart);
  const onFinish = (values: any) => {
    const { name, address, phone } = values;

    const NewOrder = {
      prices: cartTotalAmount,
      name: name,
      address: address,
      phone: phone,
      expectAt: expectAt,
      createdAt: new Date().getTime(),
      delivered: false,
      products: JSON.parse(localStorage.getItem("cartItems")!),
    };
    localStorage.setItem("newOrder", JSON.stringify(NewOrder));
    window.location.href = "http://localhost:3001/";
    console.log("Success:", NewOrder);
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
        label="نام و نام خانوادگی"
        name="name"
        rules={[{ required: true, message: "نام الزامی است" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="آدرس"
        name="address"
        rules={[{ required: true, message: "آدرس الزامی است" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="تلفن همراه"
        name="phone"
        rules={[{ required: true, message: "تلفن همراه الزامی است" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="تاریخ تحویل"
        name="expectAt"
        rules={[{ required: true, message: "انتخاب تاریخ تحویل الزامی است" }]}
      >
        <DatePicker
          onChange={(date, dateString) =>
            setExpectAt(new Date(dateString).getTime())
          }
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          پرداخت
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Checkout;
