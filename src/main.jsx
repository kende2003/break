import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import GuestsOnly from "./Components/GuestOnly/GuestsOnly";
import Login from "./Pages/LoginPage";
import SignUpPage from "./Pages/SingUpPage";
import Navbar from "./Components/Navbar";
import DiscoverPage from "./Pages/DiscoverPage";

import AuthProvider from "./Context/AuthProvider";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    },
    {
      path: "/login",
      element:(
        <GuestsOnly>
        <Login />
        </GuestsOnly>
      ) 
    },
    {
      path:"/sign-up",
      element: (
        <GuestsOnly>
          <SignUpPage />
        </GuestsOnly>
      )
    },        
    {
      path:"/discover",
      element: (
       <DiscoverPage />
      )
    }        

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
