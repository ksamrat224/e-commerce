import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { decrementQty, incrementQty, removeCart } from '../../redux/Cart.Slice'

const CartCard = ({data}) => {
  const dispatch = useDispatch()


    const incrementHandler =()=>{
      dispatch(incrementQty(data.id))
    }
    const decrementHandler =()=>{
      dispatch(decrementQty(data.id))

    }
    const removeHandler =()=>{
      dispatch(removeCart(data.id))

    }

  return (
    <>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dsadborder-gray-700 dsadbg-gray-800 md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img className="h-20 w-20 dsadhidden" src={data.image} alt="imac image" />
                      
                      </a>
                      <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button onClick={decrementHandler} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dsadborder-gray-600 dsadbg-gray-700 dsadhover:bg-gray-600 dsadfocus:ring-gray-700">
                            <svg className="h-2.5 w-2.5 text-gray-900 dsadtext-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                            </svg>
                          </button>
                           <span className='font-bold mx-2'>{data.quantity}</span>
                          <button onClick={incrementHandler} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dsadborder-gray-600 dsadbg-gray-700 dsadhover:bg-gray-600 dsadfocus:ring-gray-700">
                            <svg className="h-2.5 w-2.5 text-gray-900 dsadtext-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dsadtext-white">
                            &#8377; {Math.ceil(data.price)*data.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link to={'/product/'+data.id}  className="text-base font-medium text-gray-900 hover:underline dsadtext-white">{data.title}</Link>
                        <div className="flex items-center gap-4">
                        
                          <button onClick={removeHandler} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dsadtext-red-500">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
        </>
  )
}

export default CartCard