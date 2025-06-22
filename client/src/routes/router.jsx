import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router";



const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/blogs",
                element: <h2>Blogs</h2>,
            },
              {
                path: "/services",
                element: <h2>Services</h2>,
            },
           
           
           
            

        ]
    },

],
    {
        future: {
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionStatusRevalidation: true
        },
    }
);

export default router;