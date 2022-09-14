import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../types";

const { Meta } = Card;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, id } = product;

  return (
    <Card
      key={id}
      hoverable
      style={{ width: 240 }}
      cover={
        <img alt="example" src={`http://localhost:3002/files/${image[0]}`} />
      }
    >
      <Meta title={name} description={`${price} تومان`} />
      <Button>
        {" "}
        <Link key={product.id} to={`/product${product.id}`}>
          اطلاعات بیشتر
        </Link>
      </Button>
      <Meta />
    </Card>
  );
};

export default ProductCard;
