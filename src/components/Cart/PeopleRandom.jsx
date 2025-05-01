import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router'; 

const PeopleRandom = () => {
  const products = useSelector((store) => store.products.products);

  if (!products || products.length === 0) return <p>No products available.</p>;

  const randomIndex = Math.floor(Math.random() * products.length);
  const product = products[randomIndex];

  return (
    <div className="max-w-sm mx-auto flex flex-col justify-between h-[500px] rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col items-center p-6 flex-grow">
      <img
        className="h-44 w-44 object-contain mb-4"
        src={product.image}
        alt={product.title}
      />
      <h2 className="text-lg font-semibold text-gray-900 text-center hover:underline line-clamp-2">
        {product.title}
      </h2>
      <p className="mt-2 text-sm text-gray-600 text-center line-clamp-2">
        {product.description}
      </p>
  
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400 line-through">
          ₹{Math.ceil(product.price + 10)}
        </p>
        <p className="text-xl font-bold text-red-600">
          ₹{Math.ceil(product.price)}
        </p>
      </div>
    </div>
  
    {/* Fixed position at the bottom */}
    <div className="p-6 pt-0">
      <Link
        to={`/product/${product.id}`}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 transition duration-200"
      >
        <svg
          className="mr-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
        Add to Cart
      </Link>
    </div>
  </div>
  
  );
};

export default PeopleRandom;
