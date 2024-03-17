import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import SignUp from "./pages/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerificationPage from "./pages/VerificationPage";
import OTPVerification from "./pages/Otp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "test",
        element: <VerificationPage />,
      },
      {
        path: "otp",
        element: <OTPVerification />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
