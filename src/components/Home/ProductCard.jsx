import React from "react";
import { Link } from "react-router";
const ProductCard = ({ product }) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex flex-col justify-between items-center text-center border-2 border-black rounded-lg shadow-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-3xl bg-gradient-to-br from-gray-100 to-gray-300 min-h-[400px]">
        <img
          alt={product.title}
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 shadow-lg transition-transform hover:scale-110"
          src={product.image}
        />
        <div className="w-full flex flex-col flex-grow">
          <h2 className="title-font font-semibold text-lg sm:text-xl text-gray-900 mb-2">
            {product.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mb-2">
            {product.category}
          </p>

          <p className="text-sm sm:text-base text-gray-700 mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-auto">
          <p className="text-lg font-bold text-green-600">₹{Math.floor(product.price)}</p>
          <Link to={'/product/'+product.id} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-b-md transition">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
