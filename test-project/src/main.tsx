//SachinAkash01 - 2024
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Welcome from "./routes/Welcome";
import Home from "./routes/Home";
import NotFoundPage from "./routes/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
