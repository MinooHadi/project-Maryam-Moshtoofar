import { NavLink } from "react-router-dom";
import { styles } from "./styles"

export const items = [
  {
    label: (
      <NavLink style={styles.link} to="/">
        خانه
      </NavLink>
    ),
    key: "home",
  },
  {
    label: (
      <NavLink style={styles.link} to="login">
        مدیریت
      </NavLink>
    ),
    key: "login",
  },
  {
    label: "دسته بندی",
    key: "cat",
    children: [
      {
        label: <NavLink to="/category-ground-beans">پودر و دانه قهوه</NavLink>,
        key: "cat:1",
      },
      {
        label: <NavLink to="/category-instant">قهوه فوری</NavLink>,
        key: "cat:2",
      },
      {
        label: <NavLink to="/category-packages">پکیج های قهوه</NavLink>,
        key: "cat:3",
      },
      {
        label: (
          <NavLink to="/category-accessories">قهوه ساز و لوازم جانبی</NavLink>
        ),
        key: "cat:4",
      },
    ],
  },
  { label: "بلاگ", key: "item-3", disabled: true },
  {
    label: "صفحات",
    key: "pages",
    children: [
      {
        label: "درباره ما",
        key: "page-1",
        disabled: true,
      },
      {
        label: "تماس با ما",
        key: "page-2",
        disabled: true,
      },
      {
        label: "سوالات متداول",
        key: "page-3",
        disabled: true,
      },
    ],
  },
];
