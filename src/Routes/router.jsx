import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/User/Home"

import Contact from "../Pages/User/Contact"
import { Products } from "../Pages/User/Products"
import { RootLayout } from "../Layout/RootLayout"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { ProductDetails } from "../Pages/User/ProductDetails"
import { LoginPage } from "../Pages/Shared/LoginPage"
import { SellerLayout } from "../Layout/SellerLayout"
import { Profile } from "../Pages/User/Profile"
import { Cart } from "../Pages/User/Cart"
import { SignUpPage } from "../Pages/Shared/SignupPage"
import { PaymentSuccess } from "../Pages/User/PaymentSuccess"
import { ProtectedRouteSeller } from "./ProtectedRoutesSeller"
import {ProtectedRouteAdmin} from "./ProtectedRoutesAdmin"
import { AddProductForm } from "../Components/seller/AddProductForm"
export const router = createBrowserRouter([

  {
    path:"",
    element:<RootLayout />,
    children:[

      
      {
        path: "",
        element: <Home />,
      },
      
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "login",
        element:<LoginPage />,
      },
      {
        path: "signUp",
        element:<SignUpPage />,
      },
      {
        path:"products",
        element:<Products />
      },
      {
        path:"productDetails/:id",
        element:<ProductDetails />
      },
      {
        path:"user",
        element:<ProtectedRoutes />,
        children:[

          {
            path: "profile",
            element: <Profile/>,
          },
          {
            path: "Cart",
            element: <Cart/>,
          },
          {
            path: "Payment",
            element: <h1>Payment</h1>,
          },
          {
            path:"payment/success",
            element:<PaymentSuccess/>
          },
          {
            path:"payment/cancel",
            element:<h1>Payment Cancelled</h1>
          }
        ]
      },
    ]
    },
      {
        path: "seller",
        element: <SellerLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage role="Seller" />,
            },
            {
                path: "signup",
                element:<SignUpPage role="Seller" />
            },
            {
              path:"",
              element:<ProtectedRouteSeller/>,
              children:[
                {
                  path:"profile",
                  element:<Profile />
                },
                {
                  path:"add-product",
                  element:<AddProductForm />
                }
              
              ]
            }
        ],
    },
    {
        path: "admin",
        element: <SellerLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage role="admin" />,
            },
            {
                path: "signup",
                element:<SignUpPage role="admin" />
            },
            {
              path:"",
              element:<ProtectedRouteAdmin/>,
              children:[
                {
                  path:"profile",
                  element:<Profile/>
                },
                {
                  path:"add product",
                  element:<AddProductForm />
                }
              
              ]
            }
          ],
        }
])
    
    
  