import { Button, Form, Input, message, Progress, Row, Select, Space, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { addProductRules } from './validation';
import { UploadOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axiosPrivate from '../../../../api/http';
import { UPLOAD_ROUTE } from '../../../../config/api';
import { Product } from '../../../../types';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../../../redux/features/hooks';
import { createProduct, fetchProducts } from '../../../../redux/features/admin/products/productsSlice';
import type { UploadFile } from 'antd/es/upload/interface';
import { GenerateImageURLs } from '../../../../utils';
const { Option } = Select;


const EditProductForm = (props: any) => {
  const product = useAppSelector((state)=> state.products.toBeEditedProduct)
  const {modalOptions} = props
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [defaultFileList, setDefaultFileList] = useState<UploadFile[]>([]);
  const [imgArray,setImgArray]=useState<string[]>([])
  const [description,setDescription] = useState("")
  const [progress, setProgress] = useState(0);
  const dispatch = useAppDispatch();


useEffect(() => {
  setDefaultFileList(GenerateImageURLs(product.image))
    form.setFieldsValue(product);
  }, [product]);

  useEffect(() => {
    console.log(defaultFileList);
    
  

  }, [defaultFileList])
  

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
          console.log("server res: ", res.data.filename);
          setImgArray([...imgArray, res.data.filename]);
          message.success(`تصویر آپلود شد`)
        } catch (err) {
          message.error(`خطا`)
          onError({ err });
        }
      };

      const handleOk = () => {
        message.loading('Action in progress..')
        setConfirmLoading(true);
        setTimeout(() => {
          setConfirmLoading(false);
        }, 2000);
      };

      const onFinish = (values: any) => {
        const newProduct:Product = {
          ...values,
          image:imgArray,
          createdAt:new Date(),
          description:description
        }
        dispatch(createProduct(newProduct)).then(()=>dispatch(fetchProducts())).then(()=>{
          setImgArray([])
          setDefaultFileList([])
        }
        );
      };

  return (
    <Form  form={form} onFinish={onFinish}>
    <Form.Item name="name" label="نام کالا" rules={addProductRules.productName}>
      <Input />
    </Form.Item>
    <Form.Item
      name="category"
      label="دسته بندی"
      rules={addProductRules.category}
    >
      <Select placeholder="انتخاب دسته بندی" allowClear >
        <Option value={1}>قهوه ترک</Option>
        <Option value={2}>قهوه دمی و اسپرسو</Option>
        <Option value={3}>لوازم جانبی قهوه</Option>
        <Option value={4}>قهوه فوری و شکلات</Option>
      </Select>
    </Form.Item>
    <Form.Item valuePropName="fileList" label="انتخاب عکس ها" rules={addProductRules.images}>
      <Upload
        accept="image/*"
        customRequest={handleUpload}
        onChange={handleOnChange}
        listType="picture-card"
        defaultFileList={defaultFileList}
        fileList={defaultFileList}
      >
       {defaultFileList.length >= 5 ? null : <Button>{<UploadOutlined />}آپلود</Button>}
      </Upload>
      {progress > 0 ? <Progress percent={progress} /> : null}
    </Form.Item>
    <Form.Item name="price" label="قیمت" rules={addProductRules.price}>
      <Input/>
    </Form.Item>
    <Form.Item name="quantity" label="تعداد" rules={addProductRules.quantity}>
      <Input />
    </Form.Item>
    <Row>
      <Form.Item
       name="description"
        label="توضیحات" 
        valuePropName='data'
        getValueFromEvent={(event, editor) => {
        const data = editor.getData();
        return data;
        }}
        rules={addProductRules.description}>             
      <CKEditor
      value={description}
        editor={ClassicEditor}
        onChange={(event: any, editor: any) => {
          setDescription(editor.getData()) 
        }}
      />
      </Form.Item>
        <Space>
      <Form.Item>
        <Button type="primary" htmlType="submit">
        ذخیره تغییرات
        </Button>
      </Form.Item>
      <Form.Item>
      <Button htmlType="button">
          ریست
        </Button>
      </Form.Item>
        </Space>
    </Row>    
  </Form>
  )
}

export default EditProductForm





