import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Error from './Error';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    path: '/Error',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
