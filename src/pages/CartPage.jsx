import React from "react";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import VoucherForm from "../components/VoucherForm";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      image: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
      title: "PC system All in One APPLE iMac (2023)",
      price: 1499,
      quantity: 2,
    },
    // Add more items as needed
  ];

  return (
    <section className="bg-white py-4 antialiased md:py-8">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrement={() => console.log("Increment", item.id)}
                  onDecrement={() => console.log("Decrement", item.id)}
                />
              ))}
            </div>
          </div>
          {/* Adjusted margin for Order Summary */}
          <div className="mx-auto max-w-4xl flex-1 space-y-6 lg:mt-[-40px] lg:w-full">
            <OrderSummary originalPrice={7592} savings={299} pickup={99} tax={799} total={8191} />
            <VoucherForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;