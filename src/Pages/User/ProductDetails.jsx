import React from 'react'
import { ProductCard } from '../../Components/user/Cards'
import { ProductSkeletons } from '../../Components/user/Skeletons'
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
  console.log("reached here")
  const params=useParams()
  console.log(params,"=====params")
  const[productDetails,isLoading,error]=useFetch(`/product/get-ProductDetails/${params?.id}`)

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
                  <img src={productDetails?.image} alt="product-image" />
              </div>
              <button className="btn btn-success">Add to Cart</button>
          </div>
      </div>
  );
};
