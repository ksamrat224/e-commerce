import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "./store/productsSlice";

export const App = () => {
  const dispatch = useDispatch();
  const fetchProducts = async()=>{
    try{
      const response = await axios.get("https://fakestoreapi.com/products");
      const data =  response.data;
      dispatch(addProducts(data));
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
   fetchProducts();
  },[])
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
