import React from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { saveUser,clearUser } from '../../Redux/features/userSlice';

export const LoginPage = ({role}) => {

    const { register, handleSubmit } = useForm()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    

    const user={
        role:"user",
        loginAPI:"/user/login",
        profileRoute:"/user/profile",
        signUpRoute:"/user/signup"

    }
    if(role=="seller"){
        user.role="seller",
        user.loginAPI = "/seller/login",
        user.profileRoute = "/seller/profile",
        user.signUpRoute = "/seller/signup"
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
            dispatch(saveUser(response?.data?.data))
            navigate("/user/profile")
        } catch (error) {
            dispatch(clearUser())
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
                                    <Link>Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link to={user.signupRoute}>New User?</Link>
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