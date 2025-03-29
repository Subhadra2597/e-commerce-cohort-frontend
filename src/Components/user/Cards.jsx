import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard= ({product}) => {
  const navigate =useNavigate()
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={product?.image}
      alt="Product Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product?.title}</h2>
    <p>{product?.description}</p>
    <p>Price:{product?.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>navigate(`/productDetails/${product?._id}`)}>Read More</button>
    </div>
  </div>
</div>
  )
}
