import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIndex, { loader as defaultLoader } from './Components/SearchIndex';
import DetailedView, { loader as detailLoader, action as detailAction } from './Components/DetailedView';
import Payment, {loader as paymentLoader, action as paymentAction } from './Components/Payment';
import Receipt, {loader as receiptLoader} from './Components/Receipt';
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
          path: "hotelid/:hotelid/:dates",
          element: <DetailedView />,
          loader: detailLoader,
          action: detailAction
        },
        {
          path: "hotelid/:hotelid/payment/:paymentInfo/:dates",
          element: <Payment />,
          loader: paymentLoader,
          action: paymentAction
        },
        {
          path: "hotelid/:hotelid/receipt/:receiptInfo/:dates",
          element: <Receipt />,
          loader: receiptLoader,
        }
      ]
    },
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
