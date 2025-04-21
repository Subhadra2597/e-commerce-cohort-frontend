import React from 'react'
import { ProductCard } from '../../Components/user/Cards'
import { ProductSkeletons } from '../../Components/user/Skeletons'
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import toast from 'react-hot-toast'

export const ProductDetails = () => {

  const params=useParams()

  const[productDetails,isLoading,error]=useFetch(`/product/get-ProductDetails/${params?.id}`)

  const handleAddToCart =async ()=>{
    try {
        const response=await axiosInstance ({method:"POST", data:{productId: params?.id, quantity: params?.quantity}, url:"/cart/add-to-cart"})
        console.log(response,"====add to cart response")
        toast.success("Product added to cart")
    } catch (error) {
        console.log(error,"========error from add to cart page");
        toast.error(error?.response?.data?.message ||"Unable to add product to cart")
        
    }
  }
  if(isLoading){
   return  <ProductSkeletons />
  }

  
    return (
      <div>
        
          <h1>Product Details Page</h1>
          <div>
              <div>
                  <h1>{productDetails?.title}</h1>
                  <p>{productDetails?.description}</p>
              </div>
              <div>
                  <img src={productDetails?.image} alt="product-image" className='w-40'/>
              </div>
              <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
          </div>
      </div>
  );
};
