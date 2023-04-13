import { NavbarSchemaType } from "../../@types/components/Navbar";
import { PATH } from "../../constants/Paths";

export const NavbarSchema: NavbarSchemaType[] = [
  {
    back: false,
    title: "Products",
    hideActions: false,
    searchPage: false,
    route: PATH.PRODUCTS,
  },
  {
    back: true,
    title: "Product Detail",
    hideActions: false,
    searchPage: false,
    route: PATH.PRODUCT_ID,
  },
  {
    back: true,
    title: "Search",
    hideActions: false,
    searchPage: true,
    route: PATH.SEARCH,
  },
  {
    back: true,
    title: "My Cart",
    hideActions: true,
    searchPage: false,
    route: PATH.CART,
  },
  {
    back: false,
    title: "login",
    hideActions: false,
    searchPage: false,
    route: PATH.LOGIN,
  },
];
