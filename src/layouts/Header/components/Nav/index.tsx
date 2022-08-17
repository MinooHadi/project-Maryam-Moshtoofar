import { items } from "./Items";
import { Menu } from "antd";

const Nav: React.FC = () => {
  return (
    <Menu
      style={{ backgroundColor: "transparent" }}
      items={items}
      mode="horizontal"
    />
  );
};

export default Nav;
