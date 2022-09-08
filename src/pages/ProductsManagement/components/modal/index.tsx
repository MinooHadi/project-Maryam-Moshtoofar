import { Modal} from "antd";
import { useEffect } from "react";

import { ProductManagementProps } from "../../../../types";
import AddProductForm from "../addForm";

const ProductModal: React.FC<ProductManagementProps> = ({
  editMode,
  showModal,
  setShowModal,
  modalOptions,
  setModalOptions
}) => {

  useEffect(() => {
    console.log("modal", editMode);
    editMode? setModalOptions({modalTitle:"ویرایش محصول"}): setModalOptions({modalTitle:"اضافه کردن محصول"})
  }, [editMode])
  

 
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal
      title={modalOptions.modalTitle}
      visible={showModal}
      onCancel={handleCancel}
      footer={null}
    >
      <AddProductForm editMode={editMode}/>
    </Modal>
  );
};

export default ProductModal;
