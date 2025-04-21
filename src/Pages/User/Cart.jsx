import React from 'react'
import {useFetch} from "../../Hooks/useFetch"
import { axiosInstance } from '../../config/axiosInstance'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

export const Cart = () => {
  const [cartDetails,isLoading,error]= useFetch("/cart/get-cart")

  const errorMessage=error?.response?.data?.message ||"Unable to fetch Cart"
  console.log(cartDetails,"===cart details")

  const makePayment = async () => {
    try {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

        const session = await axiosInstance({
            url: "/payment/create-checkout-session",
            method: "POST",
            data: { products: cartDetails?.products },
        });

        console.log(session, "=======session");
        const result = stripe.redirectToCheckout({
            sessionId: session.data.sessionId,
        });
    } catch (error) {
        console.log(error);
    }
};
 
 
  const handleRemoveFromCart=async (productId)=>{
    try {
      const response= await axiosInstance({method:"DELETE",data:{productId},url:"/cart/remove-from-cart"})
      console.log(response.data,"===id remove from cart");
      
      
      console.log(response,"====response of remove from cart");
      toast.success("Product removed from cart")
    } catch (error) {
      console.log(error)
    }
  }
  
  if(error) return <p>{errorMessage}</p>
  return (
    <div>
      <div className='flex gap-4'>
        
        <div>

        {cartDetails?.products?.map((value)=>{
          return(
            
            <div className='w-12/12' key={value._id}>
                  <h1>{value?.productId?.title}</h1>
                  <img src={value?.productId?.image} alt="product image"className='w-40' />
                  <h3>Price: {value?.productId?.price}</h3>
                  <button className='btn btn-primary' onClick={()=>handleRemoveFromCart(value._id)}>Remove From Cart</button>
                  <br />
              </div>
            
            
            
          )
        })}
        </div>

            <div className='w-4/12 flex text-center bg-orange-300'>
              <h1>Payment Details</h1>
            </div>
        </div>
        <h3>Total Price: {cartDetails?.totalPrice}</h3>
        <button className="btn btn-success" onClick={makePayment}>Check out</button>
        

        </div>
      
  )
      
  
}
