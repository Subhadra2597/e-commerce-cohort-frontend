import React from 'react'
import {useFetch} from "../../Hooks/useFetch"
import { axiosInstance } from '../../config/axiosInstance'
import { EditProfileForm } from '../../Components/user/ProfileEdit'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Profile = ({role}) => {
  const user={
    role:"User",
    profilepath:"/user/user-profile",
    logoutpath:"/user/user-logout"
  }
  if(role=="Seller"){
    user.role="Seller",
    user.profilepath="/seller/seller-profile",
    user.logoutpath="/seller/seller-logout"
  }
  if(role=="Admin"){
    user.role="Admin",
    user.profilepath="/admin/admin-profile",
      user.logoutpath="/admin/admin-logout"
     }

    const[userDetails,isLoading,error]=useFetch(user.profilepath)
console.log(userDetails,"=====userDetails");

  const[isProfileEdit,setIsProfileEdit]=useState(false)
 
  console.log(userDetails,"======userDetails")
  const navigate=useNavigate()
 
  const handleDisplayOrders=()=>{
    try {
      
    } catch (error) {
      
    }
  }

  const handleLogOut=async()=>{
    try {
      console.log("reached logout function");
       const response= await axiosInstance({
          method:"GET",
          url:user.logoutpath
        })
        navigate("/login")
      }
      
      
    catch (error) {
      console.log(error)
    }
}
  return (
    <>
    <br />
    <div className='flex gap-5'>
      <button className='btn btn-primary' onClick={()=>setIsProfileEdit(!isProfileEdit)}>Edit Profile</button>
      
      <section>
        {isProfileEdit && <EditProfileForm />}
        
      </section>
      
      <button className='btn btn-secondary'onClick={handleDisplayOrders}>Orders</button>
      <button className="btn btn-neutral" onClick={handleLogOut}>Logout</button>
    </div>
    <div>
      <h1>Welcome {userDetails?.name}</h1>
      <p>Email Id : {userDetails?.email} </p>
      <img src={userDetails?.profilePic} alt="profile pic" className="w-12 h-12" />
    </div>
    </>
  )
}
