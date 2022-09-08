import { Modal} from "antd";
import { useEffect } from "react";

import { ProductManagementProps } from "../../../../types";
import AddProductForm from "../forms/addProducts";
import EditProductForm from "../forms/editProduct";

const ProductModal: React.FC<ProductManagementProps> = ({
  editMode,
  showModal,
  setShowModal,
  formFields,
  setFormFields
}) => {

  useEffect(() => {
    console.log("modal", editMode);
    editMode? setFormFields({...formFields,modalTitle:"ویرایش محصول"})
    : setFormFields({...formFields, modalTitle:"اضافه کردن محصول"})
  }, [editMode])
  

 
  const handleCancel = () => {
    setShowModal(false);
  };


return (
    <Modal
      title={formFields.modalTitle}
      visible={showModal}
      onCancel={handleCancel}
      footer={null}
    >
      {editMode ? <EditProductForm></EditProductForm> : <AddProductForm modalOptions={formFields}/>}
      
      
    </Modal>
  );
};

export default ProductModal;
