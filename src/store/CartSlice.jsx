import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        cart:JSON.parse(localStorage.getItem("cart") ||"[]")
    },
    reducers:{
        addProduct(state,action){

            
            const filterData = state.cart.find((cur,i)=>cur.id ===action.payload.id)
            if(filterData){
                // only increase quantity
                state.cart = state.cart.map((cur)=>{
                    if(cur.id ===action.payload.id){
                        return {
                            ...cur,
                            quantity:cur.quantity+1
                        }
                    }
                    return cur
                })
                localStorage.setItem("cart",JSON.stringify(state.cart))
                toast.success("Item Quanity Increase",{
                    position:"top-right",
                    autoClose:1000,
                })
                return
            }


            state.cart.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.cart))
            toast.success("Item Added Into Cart",{
                position:"top-right",
                autoClose:1000,
            })
        },
        removeCart(state,action){ 
            state.cart = state.cart.filter((cur)=>cur.id !==action.payload)
            toast.error("Item Removed",{
                position:"top-right",
                autoClose:1000,
            })
            localStorage.setItem("cart",JSON.stringify(state.cart))

        },
        incrementQty(state,action){
            // item exist? increase qunatiy

            const existData = state.cart.find((cur)=>cur.id === action.payload)
            if(existData){
                    state.cart = state.cart.map((cur,i)=>{
                        if(cur.id === action.payload){
                            return {
                                ...cur,
                                quantity:cur.quantity+1
                            }
                        }
                        return cur
                    })
                    localStorage.setItem("cart",JSON.stringify(state.cart))
                    toast.success("Quantity Increase",{
                        position:"top-right",
                        autoClose:1000,
                    })
            }else{
                toast.error("Product Not Exist",{
                    position:"top-right",
                    autoClose:1000,
                })
            }

        },
        decrementQty(state,action){

            // quantity exist? decrease quantity
            // if quantity is 1 then remove the item from cart

            const existData = state.cart.find((cur,i)=>cur.id === action.payload)
            if(existData){

                if(existData.quantity <=1){
                    state.cart = state.cart.filter((cur)=>cur.id !==action.payload)
                    toast.error("Item Removed",{
                        position:"top-right",
                        autoClose:1000,
                    })

                }
                else{
                    state.cart = state.cart.map((cur)=>{
                        if(cur.id === action.payload){
                            return {
                                ...cur,
                                quantity:cur.quantity-1
                            }
                        }
                        return cur
                    })
    
                        toast.error("Quantity Decrease",{
                            position:"top-right",
                            autoClose:1000,
                        })
                }
                localStorage.setItem("cart",JSON.stringify(state.cart))

               
            }else{
                toast.error("Product Not Exist",{
                    position:"top-right",
                    autoClose:1000,
                })
            }

        }
    }
})

export const {addProduct, removeCart, incrementQty, decrementQty} = CartSlice.actions;

export const CartSlicePath = (store)=>store.carts.cart
export default CartSlice.reducer
