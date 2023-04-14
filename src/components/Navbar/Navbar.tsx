import { Link, useLocation } from "react-router-dom";
import BackIcon from "../../assets/icons/Back";
import SearchIcon from "../../assets/icons/Search";
import CartIcon from "../../assets/icons/Cart";
import userProfile from "../../assets/images/userProfile.webp";
import Input from "../Input/Input";
import { NavbarSchemaType } from "../../@types/components/Navbar";
import { NavbarSchema } from "./NavbarDate";
import { useDispatch } from "react-redux";
import { ModalActions } from "../../store/modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ProductsActions } from "../../store/products";

let timer: any;

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [basketCount, setBasketCount] = useState(0);

  const cart = useSelector((state: RootState) => state.cart.basket);

  useEffect(() => {
    const totalCount = cart.reduce((acc, cur) => acc + (cur.amount || 1), 0);
    setBasketCount(totalCount);
  }, [cart]);

  const products = useSelector((state: RootState) => state.products.products);

  const [searchValue, setSearchValue] = useState("");

  // show modal
  const showModalHandler = () => {
    dispatch(ModalActions.showModal());
  };

  // get the value of the search bar
  const searchProductsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  // here we will have correct value in search bar
  useEffect(() => {
    clearTimeout(timer);
    setTimeout(() => {
      const result = products.filter((item) => {
        // selected the items that includes the text the we searched
        if (
          item.title
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          item.description
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        )
          return true;

        return false;
      });

      // update in store
      dispatch(ProductsActions.setFilterProduct(result));
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  // find the correct route
  const selectedNav =
    NavbarSchema.find((item) => item.route === location.pathname) ||
    ((location.pathname.includes("products/") &&
      NavbarSchema[1]) as NavbarSchemaType);

  if (location.pathname === "/login") return <></>;

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full h-16 gap-4 px-3 py-4 bg-white border-b border-b-darkerGray">
      {selectedNav.back && (
        <Link to={"/products"}>
          <BackIcon />
        </Link>
      )}

      <div className={`flex items-center justify-between w-full duration-150`}>
        <div className="flex items-center justify-center gap-5 px-2 mr-auto">
          {selectedNav.searchPage ? (
            <Input
              onChange={searchProductsHandler}
              id="search"
              name="search"
              placeholder="Search"
              type="text"
              extraInputContainerClass="border-none !mt-0"
              extraContainerClass="!mt-0 !ml-4 animate-showUp"
            />
          ) : (
            <h1 className="font-semibold animate-showUp">
              {selectedNav.title}
            </h1>
          )}
        </div>

        {!selectedNav.hideActions && (
          <>
            <Link
              to={"/search"}
              className={`cursor-pointer absolute  duration-500 ${
                selectedNav.searchPage ? "left-8 animate-moveLeft" : "left-3/5"
              }`}
            >
              <SearchIcon />
            </Link>
            <div
              className={`flex items-center justify-between duration-200  ${
                selectedNav.searchPage
                  ? "opacity-0 animate-hide"
                  : "animate-showUp"
              }`}
            >
              <div className={`cursor-pointer relative`}>
                <Link to={"/cart"}>
                  <CartIcon />
                  <div className="w-4 h-4 rounded-full bg-red-600 absolute top-0 left-1/2 flex items-center justify-center text-white text-xs -translate-x-1/2 z-50 p-2">
                    {basketCount || 0}
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-center w-11 h-11">
                <div
                  onClick={showModalHandler}
                  className="w-8 h-8 overflow-hidden border rounded-full cursor-pointer profile border-darkerGray"
                >
                  <img
                    src={userProfile}
                    alt="user"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
