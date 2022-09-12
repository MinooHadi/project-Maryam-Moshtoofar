import { NavLink } from "react-router-dom";
import { styles } from "./styles";

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
        label: (
          <NavLink to={`/categories/?category=1&_page=1&_limit=2`}>
            قهوه ترک
          </NavLink>
        ),
        key: "cat:1",
      },
      {
        label: (
          <NavLink to={`/categories/?category=2&_page=1&_limit=2`}>
            قهوه دمی و اسپرسو
          </NavLink>
        ),
        key: "cat:2",
      },
      {
        label: (
          <NavLink to={`/categories/?category=3&_page=1&_limit=2`}>
            لوازم جانبی قهوه
          </NavLink>
        ),
        key: "cat:3",
      },
      {
        label: (
          <NavLink to={`/categories/?category=4&_page=1&_limit=2`}>
            قهوه فوری و شکلات
          </NavLink>
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
