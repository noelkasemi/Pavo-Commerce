// ProductCard.js
import React from 'react';
import Heart from '../../assets/Svg/Heart';

const ProductCard = ({ product, onClick }) => {
  const discount = (product.price / 100) * 50;

  return (
    <article
      onClick={() => onClick(product)}
      className="bg-white cursor-pointer hover:brightness-90 w-full p-4 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
    >
      <p className='absolute px-4 w-fit py-1 bg-red-500 text-white font-bold rounded-lg'>-50%</p>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
      <h3 className="text-2xl font-semibold mb-1">${discount.toFixed(0)}</h3>
      <p className="text-gray-700 line-through">${product.price.toFixed(2)}</p>
      <div className="mt-4 flex justify-between items-end">
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg">Add to Cart</button>
        <Heart style={`cursor-pointer w-9 h-9`} />
      </div>
    </article>
  );
};

export default ProductCard;
