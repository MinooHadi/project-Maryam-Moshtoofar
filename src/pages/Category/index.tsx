import { Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/productCard";
import { PRODUCT_ROUTE } from "../../config/routes";
import { fetchCategories } from "../../redux/features/admin/categories/categoriesSlice";
import { fetchProducts } from "../../redux/features/admin/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { Category } from "../../types";
const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const {products}=useAppSelector((state)=> state.products)
  const [category,setCategory] = useState("")

  useEffect(() => {
      dispatch(fetchProducts({category:id}))
      dispatch((fetchCategories())).then((res)=>{
        const categories:any = res.payload
        const selectedCategory = categories.find((category:Category)=> category.id === Number(id) ) 
        setCategory(selectedCategory.name)
      })     
  }, [id])
  
  return <>
  <Typography.Title>{category}</Typography.Title>
  {products.map((product)=> <Link to={`product${product.id}`}><ProductCard product={product} key={product.id}  /></Link>)}
  </>;
};

export default CategoryPage;
