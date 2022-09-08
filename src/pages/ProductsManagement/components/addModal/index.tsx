import { Modal} from "antd";

import { AdminHeaderProps, Product } from "../../../../types";
import AddProductForm from "../addForm";

const AddProduct: React.FC<AdminHeaderProps> = ({
  showModal,
  setShowModal,
}) => {

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal
      title="افزودن کالا"
      visible={showModal}
      onCancel={handleCancel}
      footer={null}
    >
      <AddProductForm/>
    </Modal>
  );
};

export default AddProduct;
