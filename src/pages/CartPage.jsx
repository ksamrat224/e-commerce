import React from 'react'
import CartCard from '../components/Cart/CartCard'
import { useSelector } from 'react-redux'
import PeopleRandom from '../components/Cart/PeopleRandom'
import { CartSlicePath } from '../store/CartSlice'

const CartPage = () => {

  const cart_data = useSelector(CartSlicePath)


  return (
    <>
          <section className="bg-white py-8 antialiased dsadbg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900 dsadtext-white sm:text-2xl">Shopping Cart</h2>
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
               {
              cart_data &&cart_data.length>0 ?cart_data.map((cur,i)=>{
                    return <CartCard key={i} data={cur} />
                }):
                <>
                    <img src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="" />
                </>
               }


        </div>
        <div className="hidden xl:mt-8 xl:block">
          <h3 className="text-2xl font-semibold text-gray-900 dsadtext-white">People also bought</h3>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
            {
                Array(3).fill(null).map((cur,i)=>{
                    return <PeopleRandom key={i} />
                })
            }
            
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dsadborder-gray-700 dsadbg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dsadtext-white">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dsadtext-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dsadtext-white">
                 &#8377; {cart_data.length>0?cart_data.map((cur)=>Math.ceil(cur.price)*cur.quantity).reduce((ac,item)=>ac+item):0}
                  </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dsadtext-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-600">-$0.00</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dsadtext-gray-400">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 dsadtext-white">$0</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dsadtext-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dsadtext-white">$0</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dsadborder-gray-700">
              <dt className="text-base font-bold text-gray-900 dsadtext-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dsadtext-white"> &#8377; {cart_data.length>0?cart_data.map((cur)=>Math.ceil(cur.price)*cur.quantity).reduce((ac,item)=>ac+item):0}</dd>
            </dl>
          </div>
          <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dsadbg-primary-600 dsadhover:bg-primary-700 dsadfocus:ring-primary-800">Proceed to Checkout</a>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dsadtext-gray-400"> or </span>
            <a href="#" title className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dsadtext-primary-500">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dsadborder-gray-700 dsadbg-gray-800 sm:p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dsadtext-white"> Do you have a voucher or gift card? </label>
              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dsadborder-gray-600 dsadbg-gray-700 dsadtext-white dsadplaceholder:text-gray-400 dsadfocus:border-primary-500 dsadfocus:ring-primary-500" placeholder required />
            </div>
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dsadbg-primary-600 dsadhover:bg-primary-700 dsadfocus:ring-primary-800">Apply Code</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CartPage