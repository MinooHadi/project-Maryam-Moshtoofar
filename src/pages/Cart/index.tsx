import { Button } from "antd";
import { useEffect } from "react";
import { items } from "../../layouts/Header/components/nav/items";
import { getTotals, removeFromCart } from "../../redux/features/main/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { Product } from "../../types";

const Cart: React.FC = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { cartTotalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTotals(1));
  }, [dispatch, cartItems]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.map((product: Product) => (
        <div key={product.id}>
          <div>{product.name}</div>
          <Button onClick={() => handleRemove(product.id)}>حذف </Button>
        </div>
      ))}
    </>
  );
};

export default Cart;
