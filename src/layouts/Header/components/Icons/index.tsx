import { Badge } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import { styles } from "./styles";

// const styles = { backgroundColor: "#53A16E", color: "black" };

const Icons = () => {
  return (
    <div style={styles.iconsContainer}>
      <NavLink to="#">
        <Badge count={0}>
          <UserOutlined style={styles.icon} />
        </Badge>
      </NavLink>
      <NavLink to="#">
        <Badge count={2} style={styles.badge}>
          <HeartOutlined style={styles.icon} />
        </Badge>
      </NavLink>
      <NavLink to="cart">
        <Badge count={3} style={styles.badge}>
          <ShoppingOutlined style={styles.icon} />
        </Badge>
      </NavLink>
    </div>
  );
};

export default Icons;
