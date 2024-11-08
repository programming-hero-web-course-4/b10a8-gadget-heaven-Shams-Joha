import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from './error-page.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Mainlayout from './layouts/Mainlayout.jsx';
import Home from './pages/Home.jsx';
import Statistics from './pages/Statistics.jsx';
import Onsale from './pages/Onsale.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AllProducts from './components/Allproducts.jsx';
import Details from './pages/Details.jsx';
import { CartProvider } from '../context/HandleContext.jsx';
import CartLayout from './components/CartLayout.jsx';
import WishLayout from './pages/WishLayout.jsx';
import Products from './components/Products.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: '/category/:category',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('/products.json')
          },
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('/products.json')
          }
        ],
        loader: () => fetch('/categories.json')

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'onsale',
        element: <Onsale></Onsale>,
        loader: () => fetch('/products.json')

      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <CartLayout></CartLayout>
          },
          {
            path: 'cart',
            element: <CartLayout></CartLayout>
          },
          {
            path: 'wishlist',
            element: <WishLayout></WishLayout>
          }
        ]
      },
      {
        path: '/product/:id',
        element: <Details></Details>,
        loader: () => fetch('/products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>


  </StrictMode>,
)
