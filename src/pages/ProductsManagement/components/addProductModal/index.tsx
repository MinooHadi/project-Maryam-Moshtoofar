import { Modal } from "antd";
import { useState } from "react";
import { AdminHeaderProps, Product } from "../../../../types";
import { useForm, SubmitHandler } from "react-hook-form";

const AddProduct: React.FC<AdminHeaderProps> = ({
  showModal,
  setShowModal,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = (data) => console.log(data);

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setShowModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal
      title="افزودن کالا"
      visible={showModal}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>نام کالا</label>
        <input {...register("name", { required: true })} />

        <label>دسته بندی</label>
        <select {...register("category", { required: true })}>
          <option value="قهوه ترک">قهوه ترک</option>
          <option value="قهوه دمی و اسپرسو">قهوه دمی و اسپرسو</option>
          <option value="لوازم چانبی قهوه">لوازم چانبی قهوه</option>
          <option value="قهوه فوری و شکلات">قهوه فوری و شکلات</option>
        </select>

        <label>انتخاب عکس ها</label>
        <input
          {...(register("image"), { required: true })}
          type="file"
          name="img"
          accept="image/*"
          multiple
        />
        <label>تصویر کوچک</label>
        <input
          {...(register("image"), { required: true })}
          type="file"
          name="img"
          accept="image/*"
        />

        <label>قیمت</label>
        <input {...register("price", { required: true })} />

        <label>تعداد</label>
        <input {...register("quantity", { required: true })} />

        <label>توضیحات</label>
        <input {...register("description", { required: true })} />

        <input type="submit" />
      </form>
      <p>{modalText}</p>
    </Modal>
  );
};

export default AddProduct;
