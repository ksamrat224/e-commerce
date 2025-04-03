import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ProductCard from "../components/Home/ProductCard";

const products = [
  {
    name: "Alper Kamu",
    role: "UI Developer",
    image: "https://dummyimage.com/200x200",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Holden Caulfield",
    role: "UI Developer",
    image: "https://dummyimage.com/201x201",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Atticus Finch",
    role: "UI Developer",
    image: "https://dummyimage.com/202x202",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Henry Letham",
    role: "UI Developer",
    image: "https://dummyimage.com/203x203",
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
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
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
