import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Meals from './Components/Meal/Meals.jsx';
import MealDetails from './Components/Meal/MealDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    loader: ()=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <Home></Home>,
    children:[
      {
        path: "/:category",
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
        element: <Meals></Meals>
      },
      {
        path: "/:category/:id",
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
        element: <MealDetails></MealDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
