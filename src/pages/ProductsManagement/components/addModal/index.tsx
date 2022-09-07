import { Modal, message} from "antd";
import { useState } from "react";
import { AdminHeaderProps, Product } from "../../../../types";
import AddProductForm from "../addForm";

const AddProduct: React.FC<AdminHeaderProps> = ({
  showModal,
  setShowModal,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    message.loading('Action in progress..')
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
      <AddProductForm/>
    </Modal>
  );
};

export default AddProduct;
