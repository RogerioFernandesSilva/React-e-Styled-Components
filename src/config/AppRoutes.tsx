import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { Home } from "../pages/Home";

const routes = createBrowserRouter([{ path: "/", element: <Home /> }]);

export const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};
