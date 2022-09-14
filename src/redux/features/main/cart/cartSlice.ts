import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
// bindActionCreators

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const existingIndex = state.cartItems.findIndex(
        (item: any) => item.id === product.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + quantity,
        };
        message.success("به تعداد محصول اضافه شد");
      } else {
        let tempProductItem = {
          ...product,
          cartQuantity: quantity,
        };
        state.cartItems.push(tempProductItem);
        message.success("محصول به سبد خرید افزوده شد");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        message.success("از تعداد محصول کم شد");
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        message.success("محصول از سبد خرید حذف شد");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem: any) => {
        if (cartItem.id === action.payload) {
          const nextCartItems = state.cartItems.filter(
            (item: any) => item.id !== cartItem.id
          );
          state.cartItems = nextCartItems;
          message.success("محصول از سبد خرید حذف شد");
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});
export const { addToCart, decreaseCart, getTotals, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
