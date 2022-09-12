import { Button, Image, Typography, Carousel, InputNumber } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FILES_ROUTE } from "../../config/api";
import { fetchSingleProduct } from "../../redux/features/admin/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";

const Product: React.FC = () => {
  const { id } = useParams();
  const { product } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id!));
  }, []);
  const onChange = (value: number) => {
    console.log("changed", value);
  };
  return (
    <>
      <Typography.Title>{product.name}</Typography.Title>
      <Carousel autoplay>
        <div>
          {/* <Image width={500} src={`${FILES_ROUTE}/${product.image[0]}`}></Image> */}
        </div>
        <div>
          {/* <Image width={500} src={`${FILES_ROUTE}/${product.image[1]}`}></Image> */}
        </div>
      </Carousel>
      <Typography.Text>{product.price} تومان</Typography.Text>
      <Button type="primary">اضافه کردن به سبد خرید</Button>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </>
  );
};

export default Product;
