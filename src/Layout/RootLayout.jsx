import React, { useEffect } from 'react'
import {Header} from '../Components/user/Header' 
import {UserHeader} from '../Components/user/UserHeader'
import {Footer} from '../Components/user/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../config/axiosInstance'
import { saveUser,clearUser } from '../Redux/features/userSlice'

export function RootLayout() {

  const user=useSelector((state)=>state.user)
  console.log(user,"====user")

  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch()
  const location=useLocation()
  

  const checkUser=async()=>{
    try {
      const response= await axiosInstance({method:"GET",url:"/user/check-user"})
      console.log(response,"=======checkUser response");
      dispatch(saveUser())
      setIsLoading(false)

    } catch (error) {
      console.log(error);
      dispatch(clearUser())
      setIsLoading(false)
      
    }
  }
  useEffect(()=>{
    console.log("reached checkuser useeffect")
    checkUser()
  },[location.pathname])

  
   return isLoading? null:(
    <>
  {user.isUserAuth?<UserHeader/>:<Header/>}
  <div className='min-h-100'>

   <Outlet />
  </div>
    <Footer />
    </>
  )
}