
import { useState } from "react";
import { ProductManagementProps } from "../../types";
import ProductHeader from "./components/header";
import ProductModal from "./components/modal";
import ProductTable from "./components/table";
import { EMPTY_INPUT } from "../../config/constants";

const ProductsManagement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formFields,setFormFields]= useState({
    modalTitle:"اضافه کردن محصول" ,
    Inputs:EMPTY_INPUT
  })
  const [selectedProductID , setSelectedProductID] = useState<null | number>(null)

  const props:ProductManagementProps = {
    showModal:showModal,
    setShowModal: setShowModal,
    editMode:editMode,
    setEditMode:setEditMode,
    formFields:formFields,
    setFormFields:setFormFields,
    selectedProductID:selectedProductID,
    setSelectedProductID:setSelectedProductID
  }
  return (
    <>
      <ProductHeader {...props} />
      <ProductTable {...props}/>
      <ProductModal {...props} />
    </>
  );
};

export default ProductsManagement;
