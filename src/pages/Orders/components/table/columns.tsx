export const columns = [
  {
    title: "نام کاربر",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "مجموع مبلغ",
    dataIndex: "prices",
    key: "prices",
  },
  {
    title: "زمان ثبت سفارش",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "عملیات",
    key: "action",
    render: () => <a>بررسی سفارش</a>,
  },
];
