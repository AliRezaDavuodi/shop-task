import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* {allRoutes.map((route) => (
        // TODO: check for the private or public
        <Route {...route} element={<route.component />} key={route.path} />
      ))} */}
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
