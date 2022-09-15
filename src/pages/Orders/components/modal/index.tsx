import { Button, Modal, Table, notification } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  fetchOrders,
  updateOrder,
} from "../../../../redux/features/admin/orders/OrdersSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import { OrderModalProps } from "../../../../types";

const openNotification = (type: "success") => {
  notification[type]({
    message: "سفارش تحویل شد",

    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};
const OrderModal: React.FC<OrderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  order,
}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = order.id;
  useEffect(() => {
    setSearchParams({ _page: "1", _limit: "5" });
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setLoading(true);
    const UpdatedOrder = {
      ...order,
      delivered: "true",
      expectAt: new Date().getTime(),
    };
    dispatch(updateOrder({ id, UpdatedOrder })).then(() => {
      setLoading(false);
      setIsModalOpen(false);
      openNotification("success");
    });
    dispatch(fetchOrders(searchParams));
  };

  const columns = [
    {
      title: "نام کالا",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "قیمت",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "تعداد",
      dataIndex: "cartQuantity",
      key: "cartQuantity",
    },
  ];

  return (
    <>
      <Modal
        footer={false}
        title="نمایش سفارش"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>نام مشتری :{order?.name}</p>
        <p> آدرس: {order?.address}</p>
        <p> تلفن: {order?.phone}</p>
        <p>
          زمان تحویل: {new Date(order!.expectAt).toLocaleDateString("fa-IR")}
        </p>
        <p>
          زمان سفارش: {new Date(order!.createdAt).toLocaleDateString("fa-IR")}
        </p>

        <Table
          pagination={false}
          columns={columns}
          dataSource={[...order!.products]}
          rowKey={(order) => order.id}
        />
        {order?.delivered === "true" ? (
          <p>
            زمان تحویل: {new Date(order!.expectAt).toLocaleDateString("fa-IR")}
          </p>
        ) : (
          <Button loading={loading} onClick={handleClick} type="primary">
            تحویل شد
          </Button>
        )}
      </Modal>
    </>
  );
};

export default OrderModal;
