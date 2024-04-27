import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Register",
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="dark text-foreground bg-blue-950">
      <RouterProvider router = {router}/>
    </main>
  </React.StrictMode>,
)
