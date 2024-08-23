import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import Sites for routing
import App from './App.tsx';
import ErrorPage from "./pages/error-page.tsx";

import Todo from './pages/Todo.tsx';
import List from './pages/List.tsx'
import Calendar from './pages/Calendar.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Calendar />
      },
      {
        path: "/list",
        element: <List />
      },
      {
        path: "/contact",
        element: <Todo />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
