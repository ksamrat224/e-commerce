import React from "react";
import { Link } from "react-router";
import { CiShop } from "react-icons/ci";
import { MdLogin } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <CiShop className="w-10 h-10 mr-3" />
            <span className="ml-3 text-xl">eCommerce</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/error"} className="mr-5 hover:text-gray-900">
              First Link
            </Link>
            <Link className="mr-5 hover:text-gray-900">Second Link</Link>
            <Link className="mr-5 hover:text-gray-900">Third Link</Link>
            <Link className="mr-5 hover:text-gray-900">Fourth Link</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0 font-bold text-gray-700 hover:text-white">
            LogIn <MdLogin />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
