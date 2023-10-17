import { createBrowserRouter } from "react-router-dom";

import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import History from "./pages/history";
import ProductDetail from "./pages/product-detail";
import Profile from "./pages/profile";
import ForgotPassword from "./pages/ForgotPassword";
import OrderDetail from "./pages/OrderDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/order-detail",
    element: <OrderDetail />,
  },
]);

export default router;
