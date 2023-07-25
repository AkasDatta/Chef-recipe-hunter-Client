import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Shared/Blogs/Blogs";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import App from "../App";
import RecipePage from "../pages/Shared/RecipePage/RecipePage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";



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
                path: '/',
                element: <Navigate to="/"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
                
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><RecipePage></RecipePage></PrivateRoute>,
                loader: () => fetch('https://chef-recipe-hunter-server-akasdatta.vercel.app/categories')

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
           
        ]
    }
])

export default router;