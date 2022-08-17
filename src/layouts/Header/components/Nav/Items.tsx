import { NavLink } from "react-router-dom";

export const items = [
  {
    label: <NavLink to="/">خانه</NavLink>,
    key: "item-0",
  },
  {
    label: <NavLink to="login">مدیریت</NavLink>,
    key: "item-1",
  },
  {
    label: "دسته بندی",
    key: "item-2",
    children: [
      {
        label: <NavLink to="category-ground-beans">پودر و دانه قهوه</NavLink>,
        key: "cat:1",
      },
      {
        label: <NavLink to="category-instant">قهوه فوری</NavLink>,
        key: "cat:2",
      },
      {
        label: <NavLink to="category-packages">پکیج های قهوه</NavLink>,
        key: "cat:3",
      },
      {
        label: (
          <NavLink to="category-accessories">قهوه ساز و لوازم جانبی</NavLink>
        ),
        key: "cat:4",
      },
    ],
  },
  { label: "بلاگ", key: "item-3", disabled: true },
  {
    label: "صفحات",
    key: "item-4",
    children: [
      {
        label: "درباره ما",
        key: "page:1",
        disabled: true,
      },
      {
        label: "تماس با ما",
        key: "page:2",
        disabled: true,
      },
      {
        label: "سوالات متداول",
        key: "page:3",
        disabled: true,
      },
    ],
  },
];
