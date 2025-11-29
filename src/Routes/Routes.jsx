import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";

import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Statistic from "../Pages/Dashboard/Statistic/Statistic";
import AddMealForm from "../Pages/Dashboard/Form/AddMealForm";
import MealDetails from "../Pages/MealCard/MealDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/meal/:id',
        element:<MealDetails></MealDetails>
      }
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
    //     index: true,
    //    element: <Statistic></Statistic>
      },
      {
        path:'add-menu',
        element: <AddMealForm></AddMealForm>
      }
    ],
  },
]);
