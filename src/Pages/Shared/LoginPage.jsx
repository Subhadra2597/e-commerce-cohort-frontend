import React from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { saveUser,clearUser } from '../../Redux/features/userSlice';
import { saveSeller,clearSeller } from '../../Redux/features/sellerSlice';
import { saveAdmin,clearAdmin } from '../../Redux/features/adminSlice';
export const LoginPage = ({role}) => {

    const { register, handleSubmit } = useForm()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    

    const user={
        role:"User",
        loginAPI:"/user/user-login",
        profileRoute:"/user/profile",
        signUpRoute:"/signup"

    }
    if(role=="Seller"){
        user.role="Seller",
        user.loginAPI = "/seller/seller-login",
        user.profileRoute = "/seller/profile",
        user.signUpRoute = "/seller/signup"
    }
    if(role=="admin"){
        user.role="admin",
        user.loginAPI = "/admin/admin-login",
        user.profileRoute = "/admin/profile",
        user.signUpRoute = "/admin/signup"
    }

    const onSubmit=async (data)=>{
        try {
            
                const response = await axiosInstance({
                    method: "POST",
                    url: user.loginAPI,
                    data: data,
                })
            console.log(data)
            console.log(response,"======response")
        if(role=="User")  dispatch(saveUser(response?.data?.data))
        if(role=="Seller")dispatch(saveSeller(response?.data?.data))
        if(role=="Admin")dispatch(saveAdmin(response?.data?.data))
            navigate(user.profileRoute)
        } catch (error) {
            if(role=="User")  dispatch(clearUser())
                if(role=="Seller")dispatch(clearSeller())
                if(role=="Admin")dispatch(clearAdmin())
            console.log(error)
        }
    }

  return (
    <div className="bg-base-200 hero min-h-screen">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now! {user.role} </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
                        aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 shadow-2xl w-full max-w-sm shrink-0">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                {...register("password")}
                                className="input input-bordered"
                                required
                            />

                           
                            <div className="flex justify-between items-center">
                                
                                <label className="label">
                                    <Link to={user.signUpRoute}>New User?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};