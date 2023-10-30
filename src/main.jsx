import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// import App from './App.jsx'
// import Index from "./pages";

import "./index.css";
import router from "./router";
import { UserProvider } from "./contexts/userContext";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistedStore } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Index /> */}
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <UserProvider>
          <RouterProvider router={router}></RouterProvider>
        </UserProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
