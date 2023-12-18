// ProductCard.js
import React from "react";
import Card from "../../Tools/Card";
import Text from "../../Tools/Text";
import Cart from "../../assets/Svg/Cart";

const ProductCard = ({ product, onClick }) => {
  const discount = (product.price / 100) * 50;

  return (
    <Card
    btnIcon={<Cart style={`w-5 h-5`} />}
      onClick={() => onClick(product)}
      btnText={`Add to Cart `}
      title={product.title}
      image={product.image}
      btnStyle={`text-white flex items-center`}
      children={
        <>
          <Text text='-50%' position={'top left'} />
          <h3 className="text-2xl font-semibold mb-1">
            ${discount.toFixed(0)}
          </h3>
          <p className="text-gray-700 line-through">
            ${product.price.toFixed(2)}
          </p>
        </>
      }
    />
  );
};

export default ProductCard;
