import { Modal} from "antd";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ProductManagementProps } from "../../../../types";
import AddProductForm from "../forms/addProducts";
import EditProductForm from "../forms/editProduct";

const ProductModal: React.FC<ProductManagementProps> = ({
  editMode,
  showModal,
  setShowModal,
  formFields,
  setFormFields,
  selectedProductID,
  searchParams,

}) => {

  useEffect(() => {
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
      {editMode ?
       <EditProductForm selectedProductID={selectedProductID}></EditProductForm> 
       :<AddProductForm searchParams={useSearchParams}/>}
      
      
    </Modal>
  );
};

export default ProductModal;
