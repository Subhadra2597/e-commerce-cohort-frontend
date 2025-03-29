import React from 'react'
import { Outlet } from 'react-router-dom'

export const SellerLayout = () => {
  return (<>
   <h1>Seller Header</h1>
   <Outlet/>
   <h1>Seller Footer</h1>
  </>
  )
}
