import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/User/Home"
import About from "../Pages/User/About"
import Contact from "../Pages/User/Contact"
import { Products } from "../Pages/User/Products"
import { RootLayout } from "../Layout/RootLayout"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { ProductDetails } from "../Pages/User/ProductDetails"
import { LoginPage } from "../Pages/Shared/LoginPage"
import { SellerLayout } from "../Layout/SellerLayout"
import { Profile } from "../Pages/User/Profile"
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
        path: "about",
        element: <About />,
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
        element: <h1>SignUp</h1>,
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
            element: <h1>Cart</h1>,
          },
          {
            path: "Payment",
            element: <h1>Payment</h1>,
          },
        ]
      },
      {
        path: "seller",
        element: <SellerLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage role="seller" />,
            },
            {
                path: "signup",
            },
        ],
    },
    ]
  }
  ])
  