import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.scss"
import SearchIndex, { loader as defaultLoader } from './Components/SearchIndex';
import DetailedView, { loader as detailLoader, action as detailAction } from './Components/DetailedView';
import Payment, { action as paymentAction } from './Components/Payment';
import Receipt from './Components/Receipt';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true,
          element: <SearchIndex />,
          loader: defaultLoader,
        },
        {
          path: "hotelid/:dest/:hotelid/:dates",
          element: <DetailedView />,
          loader: detailLoader,
          action: detailAction
        },
        {
            path: "checkout/",
            element: <Payment />,
            action: paymentAction
          },
          {
            path: "receipt/",
            element: <Receipt />,
          },
      ]
    },
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
