import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App';
import Root from './Root';
import ErrorPage from "./error-page";
import './index.css'
import Purchase from './Purchase/Purchase';
import { ContextProvider } from './contexts/ContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'purchase/:purchaseId',
        element: <Purchase />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </ContextProvider>
)
