
import { useState } from "react";
import { ProductManagementProps } from "../../types";
import ProductHeader from "./components/header";
import ProductModal from "./components/modal";
import ProductTable from "./components/table";

const ProductsManagement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [modalOptions,setModalOptions]= useState({modalTitle:"اضافه کردن محصول" })

  const props:ProductManagementProps = {
    showModal:showModal,
    setShowModal: setShowModal,
    editMode:editMode,
    setEditMode:setEditMode,
    modalOptions:modalOptions,
    setModalOptions:setModalOptions
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
