import React, { useEffect } from 'react'
import {Header} from '../Components/user/Header' 
import {SellerHeader} from "../Components/seller/SellerHeader"
import {Footer} from '../Components/user/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../config/axiosInstance'
import { clearSeller, saveSeller } from '../Redux/features/sellerSlice'


export function SellerLayout() {

  const user=useSelector((state)=>state.seller)
 // console.log(seller,"====seller")

  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch()
  const location=useLocation()
  

  const checkUser=async()=>{
    try {
      const response= await axiosInstance({method:"GET",url:"/user/check-user"})
      console.log(response,"=======checkUser response");
      dispatch(saveSeller())
      setIsLoading(false)

    } catch (error) {
      console.log(error);
      dispatch(clearSeller())
      setIsLoading(false)
      
    }
  }
  useEffect(()=>{
   
    checkUser()
  },[location.pathname])

  
   return isLoading? null:(
    <>
  {user.isSellerAuth?<SellerHeader/>:<Header/>}
  <div className='min-h-100'>

   <Outlet />
  </div>
    <Footer />
    </>
  )
}