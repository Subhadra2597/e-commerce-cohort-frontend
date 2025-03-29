import React from 'react'
import { ProductCard } from '../../Components/user/Cards'
import { ProductSkeletons } from '../../Components/user/Skeletons'
import { useFetch } from '../../Hooks/useFetch'

export const Products = () => {

  const[productList,isLoading,error]=useFetch("/product/get-products")

  if(isLoading){
   return  <ProductSkeletons />
  }
  
  return (
    <div>
      <h1>Product Listing Page</h1>
      {productList?.map((value)=>{
        return(
          <ProductCard product={value} key={value._id}/>

        )

      })}
      
        
      
      </div>
  )
}
