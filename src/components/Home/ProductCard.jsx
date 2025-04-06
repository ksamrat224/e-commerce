import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex flex-col items-center text-center border-2 border-black rounded-lg shadow-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-3xl bg-gradient-to-br from-gray-100 to-gray-300">
        <img
          alt={product.title}
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 shadow-lg transition-transform hover:scale-110"
          src={product.image}
        />
        <div className="w-full">
          <h2 className="title-font font-semibold text-xl text-gray-900">
            {product.title}
          </h2>
          <p className="text-lg font-bold text-green-600 mb-2">
            ₹{product.price}
          </p>
          <p className="text-gray-700 mb-4">
            {product.description.slice(0,50)}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;