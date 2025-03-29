import React from 'react'
import {Header} from '../Components/user/Header' 
import {UserHeader} from '../Components/user/UserHeader'
import {Footer} from '../Components/user/Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import {  useSelector } from 'react-redux'

export function RootLayout() {

  const user=useSelector((state)=>state.user)
  console.log(user,"====user")
   return (
    <>
  {user.isUserAuth?<UserHeader/>:<Header/>}
  <div className='min-h-100'>

   <Outlet />
  </div>
    <Footer />
    </>
  )
}