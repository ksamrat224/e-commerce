import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ProductCard from "../components/Home/ProductCard";

const products = [
  {
    name: "Alper Kamu",
    role: "UI Developer",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Holden Caulfield",
    role: "UI Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Atticus Finch",
    role: "UI Developer",
    image:
      "https://images.unsplash.com/photo-1698417931857-23a611285438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Henry Letham",
    role: "UI Developer",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <HeroSection />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col  w-full mb-20">
            <h1 className="text-xl xl:text-3xl 2xl:text-5xl font-medium title-font mb-4 text-gray-900">
              Products
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <ProductCard products={products} />
            <ProductCard products={products} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
