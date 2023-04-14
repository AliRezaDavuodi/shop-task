import { productsType } from "../@types/service/products";

export const storeCart = (cart: productsType[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const restoreCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") as string);
  return cart;
};
