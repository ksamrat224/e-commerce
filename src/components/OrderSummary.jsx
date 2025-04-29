import React from "react";

const OrderSummary = ({ originalPrice, savings, pickup, tax, total }) => {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order summary</p>
      <div className="space-y-4">
        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500">Original price</dt>
          <dd className="text-base font-medium text-gray-900">${originalPrice}</dd>
        </dl>
        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500">Savings</dt>
          <dd className="text-base font-medium text-green-600">-${savings}</dd>
        </dl>
        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500">Store Pickup</dt>
          <dd className="text-base font-medium text-gray-900">${pickup}</dd>
        </dl>
        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500">Tax</dt>
          <dd className="text-base font-medium text-gray-900">${tax}</dd>
        </dl>
        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
          <dt className="text-base font-bold text-gray-900">Total</dt>
          <dd className="text-base font-bold text-gray-900">${total}</dd>
        </dl>
      </div>
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Proceed to Checkout
      </a>
    </div>
  );
};

export default OrderSummary;