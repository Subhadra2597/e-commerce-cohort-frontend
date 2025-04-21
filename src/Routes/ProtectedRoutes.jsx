import React from 'react'
import { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
   const { isUserAuth } = useSelector((state) => state.user);
    const navigate=useNavigate()
    
   //  useEffect(()=>{
     
     if(!isUserAuth){
        navigate("/login")
     }
//  },[])
        return <Outlet />
}
