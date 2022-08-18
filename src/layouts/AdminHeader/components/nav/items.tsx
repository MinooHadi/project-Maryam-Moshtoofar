import { NavLink } from "react-router-dom";
// import { styles } from "./styles";

export const items = [
  {
    label: <NavLink to="/admin/products">کالاها</NavLink>,
    key: "1",
  },
  {
    label: <NavLink to="/admin/stockprice">موجودی و قیمت ها</NavLink>,
    key: "2",
  },
  { label: <NavLink to="/admin/orders"> سفارشات </NavLink>, key: "3" },
];
