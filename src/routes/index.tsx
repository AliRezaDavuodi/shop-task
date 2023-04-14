import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from "./Root";

import { Routes as allRoutes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {allRoutes.map((route) => (
        <Route {...route} element={<route.component />} key={route.path} />
      ))}
    </Route>
  )
);

export default function Routes() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>shop</title>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
