import { Table, TablePaginationConfig ,Image, Button, Space} from "antd";
import { useEffect, useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../redux/features/hooks";
import { fetchProducts, fetchSingleProduct } from "../../../../redux/features/admin/products/productsSlice";
import {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/lib/table/interface";
import { Product } from "../../../../types";
import { fetchCategories } from "../../../../redux/features/admin/categories/categoriesSlice";
import { BASE_URL } from "../../../../config/api";
import DeleteModal from "../deleteModal";


const ProductTable = (props:any) => {
  const {selectedProductID,setSelectedProductID , setShowModal, setEditMode} = props
  const state = useAppSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {categories} = useAppSelector((state) => state.categories);
  const {queryParams} = useAppSelector((state) => state.products);
  const {loading} = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts(queryParams));
    dispatch(fetchCategories());
  }, []);




  const showCategory = (productCat: string) => {
    const cat = categories.find(
      (category) => category.id === productCat
    );
    return cat?.name;
  };
const handleEdit = (productID:string)=>{
    setSelectedProductID(productID)
    dispatch(fetchSingleProduct(productID)).then(()=>setEditMode(true)).then(()=> setShowModal(true))
   
}

const handleDelete = (productID:string)=> {
  setSelectedProductID(productID)
  setIsModalOpen(true)
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
      title: 'ردیف',
      dataIndex: 'id',
      key: 'id',
      width: '5%',
      render:(__, _, index)=>(<>{index+1}</>)
    },
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
          <Button type="primary" danger onClick={()=>handleDelete(record.id)}> حذف</Button>         
        </Space>
      ),
    },
  ];

  return (
    <>
    <Table
      columns={columns}
      dataSource={[...state.products]}
      rowKey={(product) => product.id}
      pagination={queryParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
    <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedProduct={selectedProductID}/>
    </>
  );
};

export default ProductTable;
