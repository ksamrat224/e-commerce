import React from "react";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
