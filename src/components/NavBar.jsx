import React from "react";
import { Link } from "react-router";
import { CiShop } from "react-icons/ci";
import { MdLogin } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <header className="text-gray-600 body-font border-2 border-b-rose-50 shadow-xl rounded-lg p-6 transition-all duration-300 hover:shadow-2xl ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <CiShop className="w-10 h-10 mr-3" />
            <span className="ml-3 text-xl">eCommerce</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold ">
            <Link to={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/cart"} className="mr-5 hover:text-gray-900">Cart</Link>
          </nav>
          <button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 font-bold text-white hover:text-white">
            LogIn <MdLogin />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
