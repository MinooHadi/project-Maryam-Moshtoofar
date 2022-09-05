import {
  Button,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  Typography,
} from "antd";
import { useState } from "react";
import { AdminHeaderProps, Product } from "../../../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { Option } = Select;

const AddProduct: React.FC<AdminHeaderProps> = ({
  showModal,
  setShowModal,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [form] = Form.useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = (data) => console.log(data);

  const handleOk = () => {
    setModalText("در حال اضافه نمودن محصول");
    setConfirmLoading(true);
    setTimeout(() => {
      setShowModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setShowModal(false);
    setModalText("");
  };

  return (
    <Modal
      title="افزودن کالا"
      visible={showModal}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form form={form} name="control-hooks" onFinish={handleOk}>
        <Form.Item>
          <Typography.Paragraph>{modalText}</Typography.Paragraph>
        </Form.Item>
        <Form.Item name="name" label="نام کالا" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="دسته بندی"
          rules={[{ required: true }]}
        >
          <Select placeholder="انتخاب دسته بندی" allowClear>
            <Option value="قهوه ترک">قهوه ترک</Option>
            <Option value="قهوه دمی و اسپرسو">قهوه دمی و اسپرسو</Option>
            <Option value="لوازم جانبی قهوه">لوازم جانبی قهوه</Option>
            <Option value="قهوه فوری و شکلات">قهوه فوری و شکلات</Option>
          </Select>
        </Form.Item>
        <Form.Item label="انتخاب عکس ها  " rules={[{ required: true }]}>
          <Upload>
            <Button icon={<UploadOutlined />}>آپلود</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="عکس کوچک"
          valuePropName="fileList"
          rules={[{ required: true }]}
        >
          <Upload
            action="http://localhost:3002/uploads"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>آپلود</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="price" label="قیمت" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="quantity" label="تعداد" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Row>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor: any) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
            }}
            onBlur={(event: any, editor: any) => {}}
            onFocus={(event: any, editor: any) => {}}
          />
        </Row>
      </Form>
    </Modal>
  );
};

export default AddProduct;
