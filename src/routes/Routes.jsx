import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Shared/Blogs/Blogs";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import App from "../App";
import Category from "../pages/Home/ChefCard/ChefCard";
import RecipePage from "../pages/Shared/RecipePage/RecipePage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Main></Main>,
                children:[
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                   
                ]
            },
            {
                path: '/category/:id',
                element: <RecipePage></RecipePage>,
                loader: () => fetch('http://localhost:5000/categories')

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
           
        ]
    }
])

export default router;