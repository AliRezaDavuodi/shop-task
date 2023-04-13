import { Link, useLocation } from "react-router-dom";
import BackIcon from "../../assets/icons/Back";
import SearchIcon from "../../assets/icons/Search";
import CartIcon from "../../assets/icons/Cart";
import userProfile from "../../assets/images/userProfile.webp";
import Input from "../Input/Input";
import { NavbarSchemaType } from "../../@types/components/Navbar";
import { NavbarSchema } from "./NavbarDate";

const Navbar = () => {
  const location = useLocation();

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
              <div className={`cursor-pointer`}>
                <Link to={"/cart"}>
                  <CartIcon />
                </Link>
              </div>
              <div className="flex items-center justify-center w-11 h-11">
                <div
                  onClick={() => {}}
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
