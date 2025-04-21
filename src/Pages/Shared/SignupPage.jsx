import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

export const SignUpPage = ({role}) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const user={
        role:"user",
        SignUpAPI:"/user/user-signup",
        profileRoute:"/user/profile"
        }
    if(role=="Seller"){
        user.role="seller",
        user.SignUpAPI = "/seller/seller-signup",
        user.profileRoute = "/seller/profile"
    }
    if(role=="Admin"){
        user.role="admin",
        user.SignUpAPI = "/admin/admin-signup"
    }
    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: user.SignUpAPI,
                data: data,
            });
            console.log("response====", response);
            navigate(user.profileRoute);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
                        aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name")} className="input input-bordered" required />
                        </div>

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
                            <label className="label">
                                <Link to={'/login'}>
                                <a href="#" className="label-text-alt link link-hover">
                                    Existing User?
                                </a>
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};