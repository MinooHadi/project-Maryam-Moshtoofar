import { Card } from 'antd';
import React from 'react';
import { ProductCardProps } from '../../types';

const { Meta } = Card;

const ProductCard: React.FC<ProductCardProps> = ({product}) =>{
const {image,name,price,id} = product

return(
<Card
    key={id}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={`http://localhost:3002/files/${image[0]}`}/>}
  >
    <Meta title={name} description={`${price} تومان`} />
    <Meta/>
  </Card>
)}
  

export default ProductCard;