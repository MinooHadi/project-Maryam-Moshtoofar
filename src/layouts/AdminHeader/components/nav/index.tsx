import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  ORDERS_ROUTE,
  PRODUCTS_MANAGEMENT_ROUTE,
  STOCK_PRICE_ROUTE,
} from "../../../../config/routes";
import { params } from "../../../../config/variables";

const Nav: React.FC = () => {
  const items = [
    {
      label: (
        <NavLink to={`${PRODUCTS_MANAGEMENT_ROUTE}${params}`}>کالاها</NavLink>
      ),
      key: "1",
    },
    {
      label: (
        <NavLink to={`${STOCK_PRICE_ROUTE}${params}`}>موجودی و قیمت ها</NavLink>
      ),
      key: "2",
    },
    {
      label: <NavLink to={`${ORDERS_ROUTE}${params}`}> سفارشات </NavLink>,
      key: "3",
    },
  ];

  return <Menu items={items} mode="horizontal" className="adminNav" />;
};

export default Nav;
