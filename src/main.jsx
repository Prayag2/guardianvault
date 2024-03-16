import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUp />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
