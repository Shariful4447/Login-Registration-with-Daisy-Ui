import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Registration from './Registration/Registration.jsx';
import AuthProviders from './providers/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "Home",
        element: <Home/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "Register",
        element: <Registration/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
