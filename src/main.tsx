import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import Sites for routing
import App from './App.tsx';
import ErrorPage from "./pages/error-page.tsx";

import Todo from './pages/Todo.tsx';
import Dashboard from './pages/Dashboard.tsx'
import Calendar from './pages/Calendar.tsx'
import Weather from "./pages/Weather.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
