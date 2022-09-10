import { message, Modal } from 'antd';
import { deleteProduct, fetchProducts } from '../../../../redux/features/admin/products/productsSlice';
import { useAppDispatch } from '../../../../redux/features/hooks';
import { DeleteModalProps } from '../../../../types';
const DeleteModal:React.FC<DeleteModalProps> = ({isModalOpen,setIsModalOpen,selectedProduct}) => {
const dispatch = useAppDispatch()
  const handleOk = () => {

    setIsModalOpen(false);
    dispatch(deleteProduct(selectedProduct))
    .then(()=>setIsModalOpen(false))
    .then(()=>{
        message.success('کالا حذف شد')
       dispatch(fetchProducts())
    } )
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
      <Modal title="حذف کالا" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="بله" okType='danger' cancelText="خیر">
        <p>آیا مطمئنید میخواهید کالا را حذف کنید؟ </p>
      </Modal>
  );
};

export default DeleteModal;