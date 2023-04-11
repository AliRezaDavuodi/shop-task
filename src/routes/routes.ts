import { PATH } from "../constants/Paths";
import NOtFound from "../pages/404/NOtFound";
import Cart from "../pages/Cart/Cart";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Search from "../pages/Search/Search";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export const Routes = [
  {
    path: PATH.HOME,
    exact: true,
    private: false,
    component: HomePage,
    index: true,
  },
  {
    path: PATH.LOGIN,
    exact: true,
    private: false,
    component: Login,
    index: true,
  },
  {
    path: PATH.PRODUCTS,
    exact: true,
    private: false,
    component: Products,
    index: true,
  },
  {
    path: PATH.CART,
    exact: true,
    private: false,
    component: Cart,
    index: true,
  },
  {
    path: PATH.PRODUCT_ID,
    exact: true,
    private: false,
    component: SingleProduct,
    index: true,
  },
  {
    path: PATH.NOTFOUND,
    exact: true,
    private: false,
    component: NOtFound,
    index: true,
  },
  {
    path: PATH.SEARCH,
    exact: true,
    private: false,
    component: Search,
    index: true,
  },
];
