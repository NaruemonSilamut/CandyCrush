import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import ConfirmOrder from '../pages/ConfirmOrder'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: '/confirmorder', element: <ConfirmOrder />},
        ]
    },
    
]);
  
const AppRoutes:React.FC = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
    )
}        
export default AppRoutes