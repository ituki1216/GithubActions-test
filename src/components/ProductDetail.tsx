import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
