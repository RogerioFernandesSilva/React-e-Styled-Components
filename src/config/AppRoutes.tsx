import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";

const routes = createBrowserRouter([{ path: "/", element: <Home /> }]);

export const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};
