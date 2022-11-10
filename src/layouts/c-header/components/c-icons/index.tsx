import { Badge } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import { styles } from "./styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/features/hooks";
import { useEffect } from "react";
import { getTotals } from "../../../../redux/features/main/cart/cartSlice";

const Icons = () => {
  const { cartTotalQuantity } = useAppSelector((state) => state.cart);

  return (
    <div style={styles.iconsContainer}>
      <NavLink to="cart">
        <Badge count={cartTotalQuantity} style={styles.badge} showZero>
          <ShoppingOutlined style={styles.icon} />
        </Badge>
      </NavLink>
    </div>
  );
};

export default Icons;
