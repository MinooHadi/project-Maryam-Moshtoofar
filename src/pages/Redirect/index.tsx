import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { useAppDispatch } from "../../redux/features/hooks";
import { createNewOrder } from "../../redux/features/admin/orders/OrdersSlice";
import { clearCart } from "../../redux/features/main/cart/cartSlice";

const Redirect: React.FC = () => {
  const dispatch = useAppDispatch();
  const { param } = useParams();
  useEffect(() => {
    const newOrder = JSON.parse(localStorage.getItem("newOrder")!);
    dispatch(createNewOrder(newOrder));
    dispatch(clearCart(1));
  }, []);

  return param === "ok" ? (
    <>
      <CheckCircleFilled />
      <p>پرداخت با موفقیت انجام شد</p>
    </>
  ) : (
    <>
      <CloseCircleFilled />
      <p>متاسفانه پرداخت موفقیت آمیز نبود</p>
    </>
  );
};

export default Redirect;
