import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from '@/pages/Menu';
import { Cart } from '@/pages/Cart';
import { Error } from '@/pages/Error';
import { Layout } from '@/layout/Menu';
import { Product } from '@/pages/Product';
import { Auth } from '@/layout/Auth/Auth';
import { Login } from '@/pages/Login/';
import { Register } from '@/pages/Register';
import { RequireAuth } from '@/helpers/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout/></RequireAuth>,
    children: [
      {
        path: '/',
        element: <Menu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      }, {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
