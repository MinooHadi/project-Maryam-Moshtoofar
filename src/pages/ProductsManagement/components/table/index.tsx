import { Table, TablePaginationConfig ,Image, Button, Space} from "antd";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts } from "../../../../redux/features/products";
import {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/lib/table/interface";
import { Product } from "../../../../types";
import { fetchCategories } from "../../../../redux/features/categories";
import { BASE_URL } from "../../../../config/api";
import { fetchSingleProduct } from "../../../../api/products";


const ProductTable = (props:any) => {
  const {editMode , setShowModal, setEditMode} = props
  const state = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);
  const queryParams = useAppSelector((state) => state.products.queryParams);
  const loading = useAppSelector((state) => state.products.loading);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts(queryParams));
    dispatch(fetchCategories());
  }, []);




  const showCategory = (productCat: number) => {
    const cat = categoriesState.categories.find(
      (category) => category.id === productCat
    );
    return cat?.name;
  };
const handleEdit = (productID:number)=>{
  console.log("edit",editMode);
  
    setEditMode(true)
    setShowModal(true);
}


  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<Product> | SorterResult<Product[]>
  ) => {
    dispatch(
      fetchProducts({
        pagination: newPagination,
        sortField: sorter.field as string,
        sortOrder: sorter.order?.substring(
          0,
          sorter.order?.length - 3
        ) as string,
        ...filters,
      })
    );
  };

  const columns: ColumnsType<Product> = [
    {
      title: "تصویر",
      dataIndex: "image",
      key: "image",
      render: (_: string, record: Product) => (
        <Image width={200} src={`${BASE_URL}/files/${record.image[0]}`} />
      ),
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
      render: (_: any, record: Product) => showCategory(record.category),
    },
    {
      title: "عملیات",
      key: "action",
      render: (_,record) => (
        <Space>
          <Button type="primary" onClick={()=>handleEdit(record.id)}> ویرایش</Button>
          <Button type="primary" danger> حذف</Button>         
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={[...state.products]}
      rowKey={(product) => product.id}
      pagination={queryParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default ProductTable;
