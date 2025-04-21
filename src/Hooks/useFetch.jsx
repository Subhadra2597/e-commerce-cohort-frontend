import React from 'react'
import { useState,useEffect } from 'react'
import { axiosInstance } from '../config/axiosInstance'

export let useFetch = (url) => {

    const[data,setData]=useState({})
      const[isLoading,setIsLoading]=useState(true)
      const[error,setError]=useState('')
      
const fetchData=async ()=>{

  try {
    const response=await axiosInstance({method:"GET",url:url})
    console.log(response?.data?.data,"===response")
    setData(response?.data?.data)
    setIsLoading(false)
    console.log(data,"=====products")
    
  } catch (error) {
    console.log(error,'======error message from usefetch')
    setError(error)
    
  }
}
      
      useEffect(()=>{
          fetchData() 
        },[])

        return [data,isLoading,error]
}
