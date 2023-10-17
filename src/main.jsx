import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from './App.jsx'
// import Index from "./pages";

import "./index.css";
import router from "./router";
import { UserProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Index /> */}
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
