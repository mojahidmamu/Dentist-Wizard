import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./components/utils/router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider route={ <RouterProvider router={router}></RouterProvider>}>
     
    </AuthProvider>
  </StrictMode>
);
