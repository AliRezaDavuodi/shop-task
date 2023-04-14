import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import cart from "./cart";
import authentication from "./auth";
import singleProduct from "./singleProduct";
import modal from "./modal";
import products from "./products";

const rootReducer = combineReducers({
  // cart: cart,
  info: singleProduct,
  auth: authentication,
  modal: modal,
  products: products,
});
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
