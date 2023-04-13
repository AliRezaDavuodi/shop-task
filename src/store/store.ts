import { configureStore } from "@reduxjs/toolkit";

// import cart from "./cart";
import authentication from "./auth";
import singleProduct from "./singleProduct";
import modal from "./modal";

const store = configureStore({
  reducer: {
    // cart: cart,
    info: singleProduct,
    auth: authentication,
    modal: modal,
  },
});

export default store;
