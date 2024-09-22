import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // Function to handle the product click and navigate to product details page
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={handleClick} // Navigate to product details when clicked
    >
      <img src={product.image} alt={product.title} className="md:h-[350px] w-full mb-2" />
      <h3 className="text-lg text-[#8b8dac] font-medium mb-1 truncate">
        {product.title}
      </h3>
      <p className="font-bold text-xl px-2 mb-2">${product.price}</p>
      <p className='bg-[#f8f8ff] w-[86px] rounded-xl text-[12px] mx-2 px-2 my-2'>Free delivery</p>
      <div className="flex items-center mb-2">
        <span className="ml-2 rounded-2xl px-2 text-white font-bold p-1 bg-[#038d63] text-sm">
          {product.rating.rate} ★
        </span>
        <span className="ml-2 font-semibold opacity-60 text-sm text-gray-600">{product.rating.count} Reviews</span>
      </div>
    </div>
  );
};

export default ProductCard;
