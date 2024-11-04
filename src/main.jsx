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
import AllProducts from './components/AllProducts.jsx';
import Details from './pages/Details.jsx';

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
            loader: () => fetch('../public/products.json')
          },
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../public/products.json')
          }
        ],
        loader: () => fetch('../public/categories.json')

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'onsale',
        element: <Onsale></Onsale>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/product/:id',
        element: <Details></Details>,
        loader: () => fetch('../public/products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
