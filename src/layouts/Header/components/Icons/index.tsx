import {
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";

const Icons = () => {
  return (
    <>
      <NavLink to="#">
        <UserOutlined />
      </NavLink>
      <NavLink to="#">
        <HeartOutlined />
      </NavLink>
      <NavLink to="cart">
        <ShoppingOutlined />
      </NavLink>
    </>
  );
};

export default Icons;
