import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import CreateStore from "../Pages/CreateStore/CreateStore";
import Dashboard from "../Layout/Dashboard";
import ManagerCart from "../Pages/Dashboard/ManagerCart/ManagerCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/createStore',
          element: <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'product',
          element: <ManagerCart></ManagerCart>
        },
        // admin routes 
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);