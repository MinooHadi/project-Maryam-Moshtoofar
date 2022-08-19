export const columns = [
  {
    title: "تصویر",
    dataIndex: "",
    key: "thumbnail",
  },
  {
    title: "نام کالا",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "دسته بندی",
    dataIndex: "category",
    key: "category",
    sorter: (a: any, b: any) => b.category - a.category,
  },
  {
    title: "عملیات",
    key: "action",
    render: () => (
      <>
        <a> ویرایش</a>
   
        <a> حذف</a>
      </>
    ),
  },
];
