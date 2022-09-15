import { Button, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { items } from "../../layouts/Header/components/nav/items";
import {
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Product } from "../../types";
import { Link } from "react-router-dom";
import { CHECKOUT_ROUTE } from "../../config/routes";

const Cart: React.FC = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const { cartTotalAmount } = useAppSelector((state) => state.cart);
  const [selectedProduct, setSelectedProduct] = useState();
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(cartItems);

    dispatch(getTotals(1));
  }, [dispatch, cartItems]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleInDecrease = (value: number) => {
    console.log(selectedProduct);
    // dispatch(decreaseCart(selectedProduct));
  };

  return (
    <>
      {cartItems.length ? (
        <>
          {cartItems.map((product: Product) => (
            <div key={product.id}>
              <div>{product.name}</div>
              <Button
                danger
                type="primary"
                onClick={() => handleRemove(product.id)}
              >
                حذف{" "}
              </Button>
              <InputNumber
                min={0}
                defaultValue={
                  cartItems.find((item: any) => item.id === product.id)
                    .cartQuantity
                }
                onChange={() => {
                  setSelectedProduct(
                    cartItems.find((item: any) => item.id === product.id)
                  );
                }}
              />
            </div>
          ))}
          <div>مجموع: {cartTotalAmount}</div>
          <Button type="primary">
            <Link to={CHECKOUT_ROUTE}>نهایی کردن سبد خرید</Link>
          </Button>
        </>
      ) : (
        <div>سبد خرید شما خالی است</div>
      )}
    </>
  );
};

export default Cart;
