import { Button, Form, Input, message, Progress, Row, Select, Upload } from 'antd';
import { useState } from 'react';
import { addProductRules } from '../addModal/validation';
import { UploadOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axiosPrivate from '../../../../api/http';
import { UPLOAD_ROUTE } from '../../../../config/api';
import { Product } from '../../../../types';
import { useForm, SubmitHandler } from "react-hook-form";
const { Option } = Select;

const AddProductForm:React.FC = () => {
  const [form] = Form.useForm();
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const {
    formState: { errors },
    handleSubmit,
  } = useForm<Product>();

  
  const onSubmit: SubmitHandler<Product> = (data) => console.log(data);

    const handleOnChange = (options:any) => {
        setDefaultFileList(options.fileList);
      };

      const handleUpload =async (options:any) => {
        const { onSuccess, onError, file, onProgress } = options;
        const fmData = new FormData();
        const config = {
          headers: { "content-type": "multipart/form-data" },
          onUploadProgress: (event:any) => {
            const percent = Math.floor((event.loaded / event.total) * 100);
            setProgress(percent);
            if (percent === 100) {
              setTimeout(() => setProgress(0), 1000);
            }
            onProgress({ percent: (event.loaded / event.total) * 100 });
          }
        };
        fmData.append("image", file);
        try {
          const res = await axiosPrivate.post(
            UPLOAD_ROUTE,
            fmData,
            config
          );
          onSuccess("Ok");
          console.log("server res: ", res);
          message.success(`تصویر آپلود شد`)
        } catch (err) {
          message.error(`خطا`)
          onError({ err });
        }
      };

  return (
    <Form form={form}>
    <Form.Item name="name" label="نام کالا" rules={addProductRules.productName}>
      <Input />
    </Form.Item>
    <Form.Item
      name="category"
      label="دسته بندی"
      rules={addProductRules.category}
    >
      <Select placeholder="انتخاب دسته بندی" allowClear>
        <Option value="قهوه ترک">قهوه ترک</Option>
        <Option value="قهوه دمی و اسپرسو">قهوه دمی و اسپرسو</Option>
        <Option value="لوازم جانبی قهوه">لوازم جانبی قهوه</Option>
        <Option value="قهوه فوری و شکلات">قهوه فوری و شکلات</Option>
      </Select>
    </Form.Item>
    <Form.Item label="انتخاب عکس ها  " rules={addProductRules.images}>
      <Upload
        accept="image/*"
        customRequest={handleUpload}
        onChange={handleOnChange}
        listType="picture"
        defaultFileList={defaultFileList}
        className="image-upload-grid"
      >
       {defaultFileList.length >= 5 ? null : <Button>{<UploadOutlined />}آپلود</Button>}
      </Upload>
      {progress > 0 ? <Progress percent={progress} /> : null}
    </Form.Item>
    <Form.Item name="price" label="قیمت" rules={addProductRules.price}>
      <Input />
    </Form.Item>
    <Form.Item name="quantity" label="تعداد" rules={addProductRules.quantity}>
      <Input />
    </Form.Item>
    <Row>
      <Form.Item name="description" label="توضیحات" rules={addProductRules.description}>
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor: any) => {
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
        }}
        onBlur={(event: any, editor: any) => {}}
        onFocus={(event: any, editor: any) => {}}
      />
      </Form.Item>
    </Row>    
  </Form>
  )
}

export default AddProductForm