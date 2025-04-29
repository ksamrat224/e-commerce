import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "./store/productsSlice";
import SingleProduct from "./pages/SingleProduct";
import Loader from "./components/Loader";
import CartPage from "./pages/CartPage";

export const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      dispatch(addProducts(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className=" flex justify-center items-center min-h-screen">
        <Loader />
      </div>
      
    );
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
